// Vercel build script.
//
// This build generates:
// 1. `dist/public` for the Vite frontend
// 2. `api/_handler.mjs`, a single-file bundled serverless handler consumed by
//    the top-level Vercel API wrappers in `api/`
//
// Bundling the handler avoids Node ESM extension-resolution failures such as:
// "Cannot find module '/var/task/server/routes' imported from /var/task/api/index.js"
// when Vercel transpiles a multi-file TypeScript backend file-by-file.

import { build } from 'esbuild';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { mkdirSync, rmSync } from 'node:fs';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const apiDir = path.join(root, 'api');

console.log('[vercel-build] Preparing bundled API handler ...');
mkdirSync(apiDir, { recursive: true });
rmSync(path.join(apiDir, '_handler.mjs'), { force: true });

console.log('[vercel-build] Bundling server/vercel-entry.ts -> api/_handler.mjs ...');
await build({
  entryPoints: [path.join(root, 'server/vercel-entry.ts')],
  bundle: true,
  platform: 'node',
  format: 'esm',
  target: 'node20',
  outfile: path.join(apiDir, '_handler.mjs'),
  packages: 'bundle',
  sourcemap: false,
  logLevel: 'info',
  alias: {
    '@shared': path.join(root, 'shared'),
  },
  // Some bundled CommonJS deps call require() dynamically. In an ESM bundle
  // esbuild's __require shim throws "Dynamic require ... is not supported"
  // unless a real `require` exists, so provide one via createRequire. (Only
  // `require` is defined here — esbuild injects its own __filename/__dirname.)
  banner: {
    js: "import { createRequire as __vercelCreateRequire } from 'node:module'; const require = __vercelCreateRequire(import.meta.url);",
  },
});
console.log('[vercel-build] API bundled -> api/_handler.mjs');

console.log('[vercel-build] Running vite build ...');
execSync('npx vite build', { stdio: 'inherit', cwd: root });
console.log('[vercel-build] Frontend built -> dist/public');
