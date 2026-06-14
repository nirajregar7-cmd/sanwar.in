// Vercel build script
// Bundles api/index.ts into a single self-contained ESM JS file
// (resolves @shared/* alias and inlines server/ + shared/ code)
// Then builds the Vite frontend.

import { build } from 'esbuild';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

console.log('[vercel-build] Bundling api/index.ts ...');

await build({
  entryPoints: [path.join(root, 'api/index.ts')],
  bundle: true,
  platform: 'node',
  format: 'esm',
  target: 'node20',
  outfile: path.join(root, 'api/index.js'),
  packages: 'external',
  sourcemap: false,
  logLevel: 'info',
  alias: {
    '@shared': path.join(root, 'shared'),
  },
  // Required for ESM bundles that use require() under the hood
  banner: {
    js: [
      "import { createRequire as __cjsCreateRequire } from 'node:module';",
      "const require = __cjsCreateRequire(import.meta.url);",
    ].join('\n'),
  },
});

console.log('[vercel-build] API bundled -> api/index.js');

console.log('[vercel-build] Running vite build ...');
execSync('npx vite build', { stdio: 'inherit', cwd: root });
console.log('[vercel-build] Frontend built -> dist/public');

