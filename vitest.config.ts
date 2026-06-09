import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
    },
  },
  test: {
    globals: true,
    include: ["**/*.test.ts"],
    env: {
      // Dummy DB URL so modules that import server/db.ts load without a real DB.
      // The neon Pool is lazy and does not connect until a query is issued.
      DATABASE_URL: "postgres://test:test@localhost:5432/test",
    },
  },
});
