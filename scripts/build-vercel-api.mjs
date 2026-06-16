import * as esbuild from "esbuild";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

console.log("Building Vercel API bundle...");

await esbuild.build({
  entryPoints: [path.join(root, "server/vercel-entry.ts")],
  bundle: true,
  platform: "node",
  target: "node20",
  // Keep ALL npm packages external — Vercel includes them from node_modules at runtime.
  // Only our own TypeScript source files get compiled and bundled.
  packages: "external",
  format: "esm",
  outfile: path.join(root, "api/index.js"),
  tsconfig: path.join(root, "tsconfig.json"),
  // Resolve @shared alias to the actual directory
  alias: {
    "@shared": path.join(root, "shared"),
  },
  logLevel: "info",
});

console.log("✓ api/index.js built successfully");
