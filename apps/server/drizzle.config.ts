import { type Config } from "drizzle-kit";

import { env } from "@/env";

export default {
  schema: "./src/db/schema.ts",
  dialect: "mysql",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  tablesFilter: ["ai-taolao_*"],
} satisfies Config;
