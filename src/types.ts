export interface Column {
  table_schema: string;
  table_name: string;
  column_name: string;
  data_type: string;
  is_nullable: string;
  column_default: string;
  constraint_name: string;
  constraint_types: string[];
  foreign_table_schema: string;
  foreign_table_name: string;
  foreign_column_name: string;
}

export type ZeroColumnType = "string" | "number" | "boolean" | "json";

export interface ZeroColumn {
  name: string;
  type: ZeroColumnType;
  isOptional: boolean;
}

export interface ZeroRelationship {
  name: string;
  type: "one" | "many";
  sourceField: string[];
  destSchema: string;
  destField: string[];
}
