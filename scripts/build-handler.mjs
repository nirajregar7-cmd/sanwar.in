import { build } from "esbuild";
import { fileURLToPath } from "node:url";
import { mkdirSync, rmSync } from "node:fs";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const apiDir = path.join(root, "api");

mkdirSync(apiDir, { recursive: true });
rmSync(path.join(apiDir, "_handler.mjs"), { force: true });

await build({
  entryPoints: [path.join(root, "server", "vercel-entry.ts")],
  bundle: true,
  platform: "node",
  format: "esm",
  target: "node20",
  outfile: path.join(apiDir, "_handler.mjs"),
  packages: "bundle",
  sourcemap: false,
  logLevel: "info",
  alias: {
    "@shared": path.join(root, "shared"),
  },
  banner: {
    js: "import { createRequire as __vercelCreateRequire } from 'node:module'; const require = __vercelCreateRequire(import.meta.url);",
  },
});
