import {
  columnDataTypeToZeroType,
  zeroColumnToDefinition,
  getColumns,
  zeroRelationshipToDefinition,
  isPrimaryKeyColumn,
  isForeignKeyColumn,
  isUniqueKeyColumn,
} from "./utils";
import { Pool } from "pg";
import { Project, VariableDeclarationKind } from "ts-morph";
import { ZeroColumn, ZeroRelationship } from "./types";

// Create schema for each table
// Create a relationships for each table if it has a foreign key

async function run() {
  // Get columns from database
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  const columns = await getColumns(pool); // TODO: Handle cases where there is duplicate column names (for example if the column is unique and foreign key)
  await pool.end();

  // Initialize ts-morph project
  const project = new Project();
  const tablesFile = project.createSourceFile("tables.ts", {}, { overwrite: true });
  const relationshipsFile = project.createSourceFile("relationships.ts", {}, { overwrite: true });

  const tables = columns.reduce<
    Record<string, { primaryKey: string; columns: ZeroColumn[]; relationships: ZeroRelationship[] }>
  >((acc, column) => {
    // Add table to accumulator if it doesn't exist
    if (!acc[column.table_name]) {
      acc[column.table_name] = {
        primaryKey: "",
        columns: [],
        relationships: [],
      };
    }

    acc[column.table_name].columns.push({
      name: column.column_name,
      isOptional: column.is_nullable === "YES",
      type: columnDataTypeToZeroType(column.data_type),
    });

    const isPrimaryKey = isPrimaryKeyColumn(column);
    const isForeignKey = isForeignKeyColumn(column);

    if (isPrimaryKey) {
      acc[column.table_name].primaryKey = column.column_name;
    }

    if (isForeignKey) {
      const foreignColumn = columns.find(
        ({ table_name, column_name }) =>
          table_name === column.foreign_table_name && column_name === column.foreign_column_name
      );
      if (!foreignColumn) throw new Error("Failed to find foreign column");

      const isForeignKeyPrimaryKey = isPrimaryKeyColumn(foreignColumn);
      const isForeignKeyUnique = isUniqueKeyColumn(foreignColumn);
      const relationshipsWithSameForeignKeyTable = acc[column.table_name].relationships.filter(
        ({ destSchema }) => destSchema === column.foreign_table_name
      );

      acc[column.table_name].relationships.push({
        name:
          relationshipsWithSameForeignKeyTable.length >= 1
            ? `${column.foreign_table_name}_${relationshipsWithSameForeignKeyTable.length}`
            : column.foreign_table_name,
        type: isForeignKeyPrimaryKey ? "one" : "many",
        sourceField: [column.column_name],
        destSchema: column.foreign_table_name,
        destField: [column.foreign_column_name],
      });
    }

    return acc;
  }, {});

  // Add import statements to tables file
  tablesFile.addImportDeclaration({
    moduleSpecifier: "@rocicorp/zero",
    namedImports: ["boolean", "number", "string", "table"], // TODO: Add only required imports
  });

  // Add table definitions to tables file
  Object.entries(tables).forEach(([tableName, table]) => {
    tablesFile.addVariableStatement({
      isExported: true,
      declarationKind: VariableDeclarationKind.Const,
      declarations: [
        {
          name: tableName,
          initializer: `table("${tableName}").columns({${table.columns.map(zeroColumnToDefinition).join(",\n")}}).primaryKey("${table.primaryKey}")`,
        },
      ],
    });
  });

  // Add zero import statements to relationships file
  relationshipsFile.addImportDeclaration({
    moduleSpecifier: "@rocicorp/zero",
    namedImports: ["relationships"],
  });

  // Add table import statements to relationships file
  relationshipsFile.addImportDeclaration({
    moduleSpecifier: "./tables",
    namedImports: Object.keys(tables),
  });

  // Add relationship definitions to relationships file
  Object.entries(tables).forEach(([tableName, table]) => {
    // Don't create a relationships for tables without relationships
    if (table.relationships.length === 0) return;

    relationshipsFile.addVariableStatement({
      isExported: true,
      declarationKind: VariableDeclarationKind.Const,
      declarations: [
        {
          name: `${tableName}_relationships`,
          initializer: `relationships(${tableName}, ({ one, many }) => ({${table.relationships.map(zeroRelationshipToDefinition).join(",\n")}}))`,
        },
      ],
    });
  });

  await project.save();
}

run();
