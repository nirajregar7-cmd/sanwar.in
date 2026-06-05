// Vercel serverless function entry point
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

// Validate required environment variables at startup
function validateEnv() {
  const missing: string[] = [];
  if (!process.env.NEON_DATABASE_URL && !process.env.DATABASE_URL) {
    missing.push("DATABASE_URL (or NEON_DATABASE_URL)");
  }
  if (!process.env.SESSION_SECRET) {
    console.warn("[WARN] SESSION_SECRET not set — using insecure default. Set it in Vercel env vars.");
  }
  if (missing.length > 0) {
    const msg = `[STARTUP ERROR] Missing required environment variables: ${missing.join(", ")}`;
    console.error(msg);
    throw new Error(msg);
  }
  console.log("[Startup] Environment OK — DB:", !!(process.env.NEON_DATABASE_URL || process.env.DATABASE_URL), "| SESSION_SECRET:", !!process.env.SESSION_SECRET, "| NODE_ENV:", process.env.NODE_ENV);
}

// Initialize routes once and reuse across warm invocations
let initError: Error | null = null;
const appReady: Promise<void> = (async () => {
  try {
    validateEnv();
    await registerRoutes(app);
    app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
      const status = err.status || err.statusCode || 500;
      const message = err.message || "Internal Server Error";
      console.error("Server error:", err);
      res.status(status).json({ message });
    });
    console.log("[Startup] Routes registered successfully");
  } catch (err: any) {
    initError = err;
    console.error("[FATAL] App initialization failed:", err?.message, err?.stack);
  }
})();

// Health check endpoint — useful for debugging Vercel deployment issues
app.get("/api/healthz", async (_req: Request, res: Response) => {
  try {
    await appReady;
    // Test actual DB connectivity
    let dbOk = false;
    let dbError = "";
    try {
      const { pool } = await import("../server/db.js");
      const client = await pool.connect();
      await client.query("SELECT 1");
      client.release();
      dbOk = true;
    } catch (e: any) {
      dbError = e.message;
    }
    res.json({
      status: dbOk ? "ok" : "degraded",
      env: {
        database_url_set: !!(process.env.NEON_DATABASE_URL || process.env.DATABASE_URL),
        database_connected: dbOk,
        database_error: dbError || undefined,
        session_secret: !!process.env.SESSION_SECRET,
        node_env: process.env.NODE_ENV || "not set",
      },
      timestamp: new Date().toISOString(),
    });
  } catch (err: any) {
    res.status(500).json({ status: "error", message: err.message });
  }
});

export default async function handler(req: Request, res: Response) {
  await appReady;
  if (initError) {
    console.error("[Handler] Serving error due to init failure:", initError.message);
    return res.status(500).json({
      error: "Server initialization failed",
      message: initError.message,
      hint: "Check DATABASE_URL / NEON_DATABASE_URL env vars are set in Vercel dashboard",
    });
  }
  app(req, res);
}
