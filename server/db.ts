import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import ws from "ws";
import * as schema from "@shared/schema";

neonConfig.webSocketConstructor = ws;

// NEON_DATABASE_URL takes priority — Replit overrides DATABASE_URL in production
// with its own managed database. We use NEON_DATABASE_URL to connect to our own DB.
const rawUrl = process.env.NEON_DATABASE_URL || process.env.DATABASE_URL;

if (!rawUrl) {
  throw new Error(
    "NEON_DATABASE_URL (or DATABASE_URL) must be set.",
  );
}

// Strip common copy-paste mistakes: psql 'url' or psql "url"
const dbUrl = rawUrl.trim().replace(/^psql\s+['"]?/, '').replace(/['"]$/, '');

export const pool = new Pool({ connectionString: dbUrl });
export const db = drizzle({ client: pool, schema });
