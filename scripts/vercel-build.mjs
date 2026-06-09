// Vercel build script — emits the Build Output API (.vercel/output).
//
// The API is shipped as a single, self-contained serverless function:
// esbuild bundles server/vercel-entry.ts together with the entire server/ +
// shared/ graph (resolving the @shared/* alias) into one ESM file. Bundling
// into a single file avoids Node's ESM extension-resolution errors that occur
// when the function is transpiled file-by-file in a "type": "module" package.
//
// The entry lives in server/ (not /api) on purpose: Vercel always builds files
// in a top-level /api directory as its own functions, which would override the
// Build Output API function defined here.
//
// The Vite frontend is emitted as static assets, and config.json wires up
// SPA fallback + /api routing to the function.

import { build } from 'esbuild';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { mkdirSync, rmSync, cpSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const outDir = path.join(root, '.vercel', 'output');
const funcDir = path.join(outDir, 'functions', 'api', 'index.func');
const staticDir = path.join(outDir, 'static');

console.log('[vercel-build] Cleaning .vercel/output ...');
rmSync(outDir, { recursive: true, force: true });
mkdirSync(funcDir, { recursive: true });

console.log('[vercel-build] Bundling server/vercel-entry.ts -> serverless function ...');
await build({
  entryPoints: [path.join(root, 'server/vercel-entry.ts')],
  bundle: true,
  platform: 'node',
  format: 'esm',
  target: 'node20',
  outfile: path.join(funcDir, 'index.mjs'),
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
console.log('[vercel-build] API bundled -> .vercel/output/functions/api/index.func');

writeFileSync(
  path.join(funcDir, 'package.json'),
  JSON.stringify({ type: 'module' }, null, 2),
);
writeFileSync(
  path.join(funcDir, '.vc-config.json'),
  JSON.stringify(
    {
      handler: 'index.mjs',
      runtime: 'nodejs22.x',
      launcherType: 'Nodejs',
      shouldAddHelpers: true,
      maxDuration: 30,
    },
    null,
    2,
  ),
);

console.log('[vercel-build] Running vite build ...');
execSync('npx vite build', { stdio: 'inherit', cwd: root });

console.log('[vercel-build] Assembling static output ...');
mkdirSync(staticDir, { recursive: true });
cpSync(path.join(root, 'dist', 'public'), staticDir, { recursive: true });

writeFileSync(
  path.join(outDir, 'config.json'),
  JSON.stringify(
    {
      version: 3,
      routes: [
        { handle: 'filesystem' },
        { src: '^/api(/.*)?$', dest: '/api' },
        { src: '/(.*)', dest: '/index.html' },
      ],
    },
    null,
    2,
  ),
);

console.log('[vercel-build] Build Output API ready -> .vercel/output');
