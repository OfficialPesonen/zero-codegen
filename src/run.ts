import { generate } from "./generate";

generate({ databaseUrl: process.env.DATABASE_URL as string }).then(() => {
  console.log("Zero tables and relationships generated");
});
