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

// Strip common copy-paste mistakes and unsupported params
function cleanNeonUrl(url: string): string {
  let cleaned = url.trim().replace(/^psql\s+['"]?/, '').replace(/['"]$/, '');
  try {
    const u = new URL(cleaned);
    u.searchParams.delete("channel_binding");
    return u.toString();
  } catch {
    return cleaned;
  }
}

const dbUrl = cleanNeonUrl(rawUrl);

export const pool = new Pool({ connectionString: dbUrl });
export const db = drizzle({ client: pool, schema });
