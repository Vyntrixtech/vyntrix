// Reads the built, pre-rendered HTML in dist/ and reports the checkable
// on-page SEO facts for every route: titles, descriptions, heading hierarchy,
// word counts, images and alt text, schema types, and the internal link graph.
//
// Evidence-gathering only — it makes no judgements and fixes nothing. Run it
// after `npm run build`:  node scripts/seo-audit.mjs

import { readFileSync } from "node:fs";
import { prerenderRoutes, root } from "./routes.mjs";

const dist = `${root}/dist`;
const file = (r) => (r === "/" ? `${dist}/index.html` : `${dist}${r}/index.html`);

const decode = (s) =>
  s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&#39;/g, "'");

const pages = prerenderRoutes.map((route) => {
  const html = readFileSync(file(route), "utf8");
  const head = html.slice(0, html.indexOf("</head>"));
  const body = html.slice(html.indexOf('<div id="root">'));

  const meta = (attr, key) =>
    decode(head.match(new RegExp(`<meta ${attr}="${key}" content="([^"]*)"`))?.[1] ?? "");

  // Headings, in document order, so hierarchy jumps are visible.
  const headings = [...body.matchAll(/<h([1-6])[^>]*>([\s\S]*?)<\/h\1>/g)].map((m) => ({
    level: Number(m[1]),
    text: decode(m[2].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim()),
  }));

  const text = body
    .replace(/<script[\s\S]*?<\/script>/g, "")
    .replace(/<svg[\s\S]*?<\/svg>/g, "")
    .replace(/<[^>]+>/g, " ");
  const words = decode(text).split(/\s+/).filter((w) => /[a-z]/i.test(w)).length;

  const imgs = [...body.matchAll(/<img\b[^>]*>/g)].map((m) => ({
    src: m[0].match(/src="([^"]*)"/)?.[1] ?? "",
    alt: m[0].match(/alt="([^"]*)"/)?.[1] ?? null,
    dims: /width="|height="/.test(m[0]),
    loading: m[0].match(/loading="([^"]*)"/)?.[1] ?? null,
  }));

  // Inline SVG counts as an image for accessibility purposes.
  const svgs = [...body.matchAll(/<svg\b[^>]*>/g)];
  const svgLabelled = [...body.matchAll(/<svg\b[^>]*role="img"[^>]*>/g)].length;
  const svgTitled = [...body.matchAll(/<svg[^>]*>\s*<title>/g)].length;

  const ld = head.match(/<script id="seo-jsonld"[^>]*>([\s\S]*?)<\/script>/)?.[1];
  let schema = [];
  if (ld) {
    try {
      const parsed = JSON.parse(ld.replace(/\\u003c/g, "<"));
      schema = (parsed["@graph"] ?? [parsed]).map((n) => n["@type"]);
    } catch {
      schema = ["INVALID JSON"];
    }
  }

  const links = [...body.matchAll(/<a\b[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/g)].map((m) => ({
    href: m[1],
    text: decode(m[2].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim()),
  }));

  return {
    route,
    title: decode(head.match(/<title>([^<]*)<\/title>/)?.[1] ?? ""),
    description: meta("name", "description"),
    robots: meta("name", "robots"),
    canonical: head.match(/<link rel="canonical" href="([^"]*)"/)?.[1] ?? "",
    ogImage: meta("property", "og:image"),
    headings,
    words,
    imgs,
    svgCount: svgs.length,
    svgLabelled,
    svgTitled,
    schema,
    links,
  };
});

const indexable = pages.filter((p) => !p.robots.startsWith("noindex"));

/* ---------- report ---------- */

const line = (s) => console.log(s);
const dupes = (arr) => {
  const seen = new Map();
  arr.forEach(({ key, route }) => seen.set(key, [...(seen.get(key) ?? []), route]));
  return [...seen].filter(([, rs]) => rs.length > 1);
};

line("=== TITLES & DESCRIPTIONS ===");
line(`indexable pages: ${indexable.length}`);
const tDupes = dupes(indexable.map((p) => ({ key: p.title, route: p.route })));
const dDupes = dupes(indexable.map((p) => ({ key: p.description, route: p.route })));
line(`duplicate titles: ${tDupes.length}`);
tDupes.forEach(([k, rs]) => line(`  "${k}" -> ${rs.join(", ")}`));
line(`duplicate descriptions: ${dDupes.length}`);
dDupes.forEach(([k, rs]) => line(`  "${k.slice(0, 50)}..." -> ${rs.join(", ")}`));
const badLen = indexable.filter((p) => p.title.length > 60 || p.title.length < 15);
line(`titles outside 15-60 chars: ${badLen.length}`);
badLen.forEach((p) => line(`  ${p.title.length} "${p.title}" (${p.route})`));
const badDesc = indexable.filter((p) => p.description.length > 160 || p.description.length < 70);
line(`descriptions outside 70-160 chars: ${badDesc.length}`);
badDesc.forEach((p) => line(`  ${p.description.length} ${p.route}`));

line("\n=== HEADINGS ===");
for (const p of pages) {
  const h1s = p.headings.filter((h) => h.level === 1);
  const jumps = [];
  let prev = 0;
  for (const h of p.headings) {
    if (prev && h.level > prev + 1) jumps.push(`h${prev}->h${h.level} "${h.text.slice(0, 34)}"`);
    prev = h.level;
  }
  if (h1s.length !== 1 || jumps.length) {
    line(`  ${p.route}: ${h1s.length} h1${jumps.length ? " | jumps: " + jumps.join("; ") : ""}`);
  }
}

line("\n=== WORD COUNT (indexable) ===");
[...indexable]
  .sort((a, b) => a.words - b.words)
  .slice(0, 12)
  .forEach((p) => line(`  ${String(p.words).padStart(5)} ${p.route}`));

line("\n=== IMAGES ===");
const allImgs = pages.flatMap((p) => p.imgs.map((i) => ({ ...i, route: p.route })));
line(`<img> tags: ${allImgs.length}`);
line(`  missing alt: ${allImgs.filter((i) => i.alt === null).length}`);
line(`  empty alt: ${allImgs.filter((i) => i.alt === "").length}`);
line(`  no width/height: ${allImgs.filter((i) => !i.dims).length}`);
line(`  no loading attr: ${allImgs.filter((i) => !i.loading).length}`);
[...new Set(allImgs.map((i) => `${i.src} | alt="${i.alt}" | dims=${i.dims} | loading=${i.loading}`))].forEach(
  (s) => line(`  ${s}`)
);
const svgTotal = pages.reduce((n, p) => n + p.svgCount, 0);
const svgLab = pages.reduce((n, p) => n + p.svgLabelled, 0);
line(`inline <svg>: ${svgTotal}, of which role="img": ${svgLab} (rest are decorative)`);

line("\n=== SCHEMA ===");
const noSchema = indexable.filter((p) => !p.schema.length);
line(`indexable pages with no JSON-LD: ${noSchema.length} ${noSchema.map((p) => p.route).join(", ")}`);
const byType = {};
pages.forEach((p) => p.schema.forEach((t) => (byType[t] = (byType[t] ?? 0) + 1)));
Object.entries(byType)
  .sort((a, b) => b[1] - a[1])
  .forEach(([t, n]) => line(`  ${t}: ${n}`));

line("\n=== INTERNAL LINKS ===");
const internal = (h) => h.startsWith("/") && !h.startsWith("//");
const inbound = new Map(prerenderRoutes.map((r) => [r, 0]));
const anchors = new Map();
for (const p of pages) {
  for (const l of p.links) {
    if (!internal(l.href)) continue;
    if (inbound.has(l.href)) inbound.set(l.href, inbound.get(l.href) + 1);
    anchors.set(l.href, [...(anchors.get(l.href) ?? []), l.text]);
  }
}
// Header and footer appear on every page, so subtract that constant floor.
const chrome = new Set(
  pages[0].links.filter((l) => internal(l.href)).map((l) => l.href)
);
line("inbound links per route (contextual = total minus header/footer):");
[...inbound]
  .sort((a, b) => a[1] - b[1])
  .forEach(([r, n]) => {
    const inChrome = chrome.has(r);
    const contextual = n - (inChrome ? pages.length : 0);
    line(`  ${String(n).padStart(4)} total, ${String(contextual).padStart(4)} contextual  ${r}`);
  });

const dead = pages.flatMap((p) =>
  p.links.filter((l) => l.href === "#" || l.href === "").map((l) => `${p.route}: "${l.text}"`)
);
line(`\nlinks pointing at "#": ${dead.length}`);
[...new Set(dead.map((d) => d.split(": ")[1]))].forEach((t) => line(`  ${t}`));

const generic = pages.flatMap((p) =>
  p.links.filter((l) => /^(click here|here|read more|learn more|more)$/i.test(l.text)).map((l) => `${p.route} "${l.text}"`)
);
line(`generic anchor text: ${generic.length}`);

const broken = pages.flatMap((p) =>
  p.links
    .filter((l) => internal(l.href) && !prerenderRoutes.includes(l.href))
    .map((l) => `${p.route} -> ${l.href}`)
);
line(`internal links to non-existent routes: ${broken.length}`);
[...new Set(broken)].forEach((b) => line(`  ${b}`));
