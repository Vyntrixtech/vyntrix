// Turns the SPA into static HTML, one file per route.
//
// Why: metadata and copy previously only existed once JavaScript had run.
// Google executes JS, but plenty of crawlers and every social-card scraper do
// not — so link previews and non-Google indexing saw an empty shell. This runs
// each route through react-dom/server at build time and writes the result into
// dist, so every URL is served as complete HTML with its own title, canonical,
// Open Graph tags and JSON-LD already in the head. React then hydrates that
// markup in the browser rather than discarding it, so nothing about the live
// experience changes.
//
// Runs on postbuild, after `vite build` has produced dist/index.html.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { createServer } from "vite";
import { prerenderRoutes, root } from "./routes.mjs";

const dist = `${root}/dist`;
const template = readFileSync(`${dist}/index.html`, "utf8");

for (const marker of ["<!--seo-->", "<!--/seo-->", '<div id="root"></div>']) {
  if (!template.includes(marker)) {
    throw new Error(`prerender: ${marker} is missing from dist/index.html — index.html changed shape.`);
  }
}

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function serialiseHead({ title, metas, links, jsonLd }) {
  const lines = [`<title>${esc(title)}</title>`];
  for (const m of metas) lines.push(`<meta ${m.attr}="${m.key}" content="${esc(m.content)}" />`);
  for (const l of links) lines.push(`<link rel="${l.rel}" href="${esc(l.href)}" />`);
  if (jsonLd) {
    // `</script>` inside JSON would close the block early.
    const json = JSON.stringify(jsonLd).replace(/</g, "\\u003c");
    lines.push(`<script id="seo-jsonld" type="application/ld+json">${json}</script>`);
  }
  return lines.join("\n    ");
}

const seoBlock = /<!--seo-->[\s\S]*<!--\/seo-->/;

/** dist/index.html for "/", dist/about/index.html for "/about", and so on. */
function fileFor(routePath) {
  if (routePath === "/") return `${dist}/index.html`;
  const dir = `${dist}${routePath}`;
  mkdirSync(dir, { recursive: true });
  return `${dir}/index.html`;
}

const vite = await createServer({
  server: { middlewareMode: true },
  appType: "custom",
  logLevel: "warn",
});

try {
  const { render } = await vite.ssrLoadModule("/src/entry-server.jsx");

  for (const routePath of prerenderRoutes) {
    const { html, tags } = render(routePath);
    if (!tags) throw new Error(`prerender: ${routePath} rendered without a <Seo> block.`);

    const page = template
      .replace(seoBlock, serialiseHead(tags))
      .replace('<div id="root"></div>', `<div id="root">${html}</div>`);

    writeFileSync(fileFor(routePath), page);
  }

  // The SPA fallback stays an empty shell: it is only reached by URLs that
  // match no file, which are genuinely unknown, and it must not be indexed.
  writeFileSync(
    `${dist}/404.html`,
    template.replace('<meta name="robots" content="index, follow" />', '<meta name="robots" content="noindex" />')
  );

  console.log(`prerendered ${prerenderRoutes.length} routes + 404.html`);
} finally {
  await vite.close();
}
