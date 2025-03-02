# Zero Codegen

Zero Codegen is a tool that generates table and relationship definitions for [Zero](https://zero.rocicorp.dev/)  based
on your existing Postgres database.

DISCLAIMER: Zero Codegen is under heavy development and may not function as expected. I'm currently updating
this project when I encounter issues in my own work.

## How to use

1. Install with `yarn add zero-codegen` or `npm install zero-codegen`
2. Find your Postgres database connection string.
3. Run `zero-codegen --database-url <connection-string>`
4. Optionally, you can specify the file path to the tables and relationships files with `--tables-path` and
   `--relationships-path` parameters.

## TODO

- Find a better way to name relationships when a table has multiple foreign keys referencing the same table.
- Only import tables and zero data types that are actually used in the generated code.
- Support JSON and JSONB data types.
- Support enums.
