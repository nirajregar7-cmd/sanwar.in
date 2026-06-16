import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "../server/routes";

const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false, limit: "50mb" }));

app.use((req, res, next) => {
  const start = Date.now();
  const reqPath = req.path;
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (reqPath.startsWith("/api")) {
      console.log(`${req.method} ${reqPath} ${res.statusCode} in ${duration}ms`);
    }
  });
  next();
});

function validateEnv() {
  if (!process.env.NEON_DATABASE_URL && !process.env.DATABASE_URL) {
    throw new Error("Missing DATABASE_URL (or NEON_DATABASE_URL) — set it in Vercel Environment Variables.");
  }
  if (!process.env.SESSION_SECRET) {
    console.warn("[WARN] SESSION_SECRET not set.");
  }
  console.log("[Startup] DB:", !!(process.env.NEON_DATABASE_URL || process.env.DATABASE_URL), "| SECRET:", !!process.env.SESSION_SECRET);
}

let initError: Error | null = null;
const appReady: Promise<void> = (async () => {
  try {
    validateEnv();
    await registerRoutes(app);
    app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
      const status = err.status || err.statusCode || 500;
      res.status(status).json({ message: err.message || "Internal Server Error" });
    });
    console.log("[Startup] Routes registered OK");
  } catch (err: any) {
    initError = err;
    console.error("[FATAL]", err?.message);
  }
})();

app.get("/api/healthz", async (_req: Request, res: Response) => {
  await appReady;

  // Run a live DB check
  let dbTest: { ok: boolean; error?: string; tables?: string[] } = { ok: false };
  try {
    const { pool } = await import("../server/db");
    const result = await pool.query(
      "SELECT table_name FROM information_schema.tables WHERE table_schema='public' ORDER BY table_name LIMIT 10"
    );
    dbTest = { ok: true, tables: result.rows.map((r: any) => r.table_name) };
  } catch (e: any) {
    dbTest = { ok: false, error: e?.message };
  }

  res.json({
    status: initError ? "error" : "ok",
    error: initError?.message,
    env: {
      database_url_set: !!(process.env.NEON_DATABASE_URL || process.env.DATABASE_URL),
      session_secret_set: !!process.env.SESSION_SECRET,
      node_env: process.env.NODE_ENV,
    },
    db: dbTest,
    timestamp: new Date().toISOString(),
  });
});

export default async function handler(req: Request, res: Response) {
  await appReady;
  if (initError) {
    return res.status(500).json({
      error: "Init failed",
      message: initError.message,
      hint: "Set DATABASE_URL and SESSION_SECRET in Vercel → Settings → Environment Variables",
    });
  }
  app(req, res);
}
