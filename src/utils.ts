import { Column, ZeroColumn, ZeroRelationship } from "./types";
import { Pool } from "pg";

export async function getColumns(pool: Pool): Promise<Column[]> {
  const result = await pool.query(`
    SELECT 
      c.table_schema,
      c.table_name,
      c.column_name,
      c.data_type,
      c.is_nullable,
      c.column_default,
      ARRAY_AGG(DISTINCT tc.constraint_type) AS constraint_types,
      fk.foreign_table_schema,
      fk.foreign_table_name,
      fk.foreign_column_name
    FROM information_schema.columns c
    LEFT JOIN information_schema.key_column_usage kcu 
      ON c.table_name = kcu.table_name 
      AND c.column_name = kcu.column_name
      AND c.table_schema = kcu.table_schema
    LEFT JOIN information_schema.table_constraints tc 
      ON kcu.constraint_name = tc.constraint_name
      AND kcu.table_schema = tc.table_schema
    LEFT JOIN (
      SELECT 
        kcu.table_schema,
        kcu.table_name,
        kcu.column_name,
        ccu.table_schema AS foreign_table_schema,
        ccu.table_name AS foreign_table_name,
        ccu.column_name AS foreign_column_name
      FROM information_schema.key_column_usage kcu
      JOIN information_schema.constraint_column_usage ccu 
        ON kcu.constraint_name = ccu.constraint_name
        AND kcu.table_schema = ccu.table_schema
      JOIN information_schema.table_constraints tc 
        ON kcu.constraint_name = tc.constraint_name
        AND kcu.table_schema = tc.table_schema
      WHERE tc.constraint_type = 'FOREIGN KEY'
    ) fk 
    ON c.table_schema = fk.table_schema 
    AND c.table_name = fk.table_name 
    AND c.column_name = fk.column_name
    WHERE c.table_schema NOT IN ('pg_catalog', 'information_schema')
    GROUP BY c.table_schema, c.table_name, c.column_name, c.data_type, c.is_nullable, c.column_default, 
     fk.foreign_table_schema, fk.foreign_table_name, fk.foreign_column_name
    ORDER BY c.table_schema, c.table_name, c.column_name;
  `);

  return result.rows;
}

// TODO: Support all data types
export function columnDataTypeToZeroType(dataType: string) {
  switch (dataType) {
    case "text":
      return "string";
    case "integer":
    case "numeric":
      return "number";
    case "boolean":
      return "boolean";
    default:
      return "string";
  }
}

export function zeroColumnToDefinition(column: ZeroColumn): string {
  const chain = [`${column.type}()`, column.isOptional ? "optional()" : undefined].filter(Boolean);
  return `${column.name}: ${chain.join(".")}`;
}

export function zeroRelationshipToDefinition(relationship: ZeroRelationship): string {
  return `${relationship.name}: ${relationship.type}({
    sourceField: [${relationship.sourceField.map((field) => `"${field}"`).join(",")}],
    destSchema: ${relationship.destSchema},
    destField: [${relationship.destField.map((field) => `"${field}"`).join(",")}]
  })`;
}

export function isPrimaryKeyColumn(column: Column): boolean {
  return column.constraint_types.includes("PRIMARY KEY");
}

export function isForeignKeyColumn(column: Column): boolean {
  return column.constraint_types.includes("FOREIGN KEY");
}

export function isUniqueKeyColumn(column: Column): boolean {
  return column.constraint_types.includes("UNIQUE");
}
