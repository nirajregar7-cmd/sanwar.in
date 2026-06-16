// placeholder — replaced during `vercel build` by scripts/vercel-build.mjs
export default function handler(req, res) {
  res.status(503).json({ error: "Build artifact not present. Run vercel build." });
}
