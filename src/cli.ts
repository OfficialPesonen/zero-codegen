#!/usr/bin/env node

import { Command } from "commander";
import { generate } from "./generate";

const program = new Command();

program
  .version("0.0.1")
  .option("--database-url <url>", "Connection string to your Postgres database")
  .option("--tables-path <filepath>", "Path to the tables file (default ./tables.ts)")
  .option("--relationships-path <filepath>", "Path to the relationships file (default ./relationships.ts)")
  .option(
    "--force",
    "Force option overwrites the existing files. By using this you will lose all changes made to the files."
  )
  .parse(process.argv);

const options = program.opts();

generate({
  databaseUrl: options.databaseUrl,
  tablesPath: options.tablesPath,
  relationshipsPath: options.relationshipsPath,
  forceGenerate: !!options.force,
}).then(() => {
  console.log("Zero tables and relationships generated");
});
