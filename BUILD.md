# Build Instructions for Vercel

## Overview
This project is configured to deploy on Vercel with the following structure:
- Frontend: React app built with Vite (serves static files)
- Backend: Express.js API as serverless functions

## Build Process

### 1. Client Build
```bash
vite build
```
- Compiles React TypeScript code
- Bundles CSS with Tailwind
- Outputs to `dist/` directory
- Generates static HTML, CSS, JS files

### 2. Server Build
```bash
# Bundled by scripts/vercel-build.mjs via esbuild
# Uses server/vercel-entry.ts as the entry point
```
The whole `server/` + `shared/` graph is bundled into a single self-contained
ESM file. A single-file bundle avoids Node's ESM extension-resolution errors
that occur when a `"type": "module"` function is transpiled file-by-file.

## Deployment Configuration

### vercel.json
```json
{
  "version": 2,
  "buildCommand": "node ./scripts/vercel-build.mjs",
  "framework": null,
  "env": { "NODE_ENV": "production" }
}
```
The build command emits the [Build Output API](https://vercel.com/docs/build-output-api/v3)
at `.vercel/output`: the bundled function under
`functions/api/index.func`, the Vite frontend under `static/`, and routing in
`config.json`. The function entry deliberately lives in `server/` (not a
top-level `/api` directory), because Vercel always builds files under `/api` as
its own functions, which would override the Build Output API function.

### Routes
- `/api/*` → Server functions
- `/*` → Static frontend files

### Environment Variables Required
- `DATABASE_URL`: PostgreSQL connection string
- `SESSION_SECRET`: Session encryption key
- `RAZORPAY_KEY_ID`: Payment gateway key
- `RAZORPAY_KEY_SECRET`: Payment gateway secret

## Database Setup
After deployment, run:
```bash
npx drizzle-kit push
```

## File Structure
```
/
├── server/
│   └── vercel-entry.ts   # Vercel serverless entry (bundled by the build)
├── scripts/
│   └── vercel-build.mjs  # Emits .vercel/output (Build Output API)
├── dist/                 # Built frontend files
├── server/               # Express.js backend
├── client/               # React frontend
├── shared/               # Shared TypeScript types
├── vercel.json          # Vercel config
└── package.json         # Dependencies
```

## Build Commands
- `npm run build`: Builds both client and server
- `npm run dev`: Development server
- `npm run db:push`: Database migration