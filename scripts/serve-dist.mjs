// Serves dist/ the way GitHub Pages does — exact file, then directory index,
// then 404.html — so the pre-rendered output can be checked locally.
// Development helper only; nothing in the build depends on it.
//
//   node scripts/serve-dist.mjs [port]

import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize } from "node:path";
import { root } from "./routes.mjs";

const dist = `${root}/dist`;
const port = Number(process.argv[2] || 4173);

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".css": "text/css",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".xml": "application/xml",
  ".txt": "text/plain",
};

createServer((req, res) => {
  const url = decodeURIComponent(new URL(req.url, "http://x").pathname);
  const base = join(dist, normalize(url).replace(/^(\.\.[/\\])+/, ""));

  let file = null;
  if (existsSync(base) && statSync(base).isFile()) file = base;
  else if (existsSync(join(base, "index.html"))) file = join(base, "index.html");

  const status = file ? 200 : 404;
  if (!file) file = `${dist}/404.html`;

  res.writeHead(status, { "content-type": TYPES[extname(file)] || "application/octet-stream" });
  createReadStream(file).pipe(res);
}).listen(port, () => console.log(`dist served on http://localhost:${port}`));
