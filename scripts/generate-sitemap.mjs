// Generates public/sitemap.xml from the same data the site renders from, so
// new services and posts can never drift out of the sitemap. Runs on prebuild.

import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const SITE = "https://vyntrixtechnologies.co.uk";

const { services } = await import(`${root}/src/data/services.js`);
const { posts } = await import(`${root}/src/data/posts.js`);

const today = new Date().toISOString().slice(0, 10);

// priority is a hint, not a ranking lever — commercial pages first.
const urls = [
  { loc: "/", changefreq: "monthly", priority: "1.0", lastmod: today },
  { loc: "/services", changefreq: "monthly", priority: "0.9", lastmod: today },
  ...services.map((s) => ({
    loc: `/services/${s.slug}`,
    changefreq: "monthly",
    priority: "0.9",
    lastmod: today,
  })),
  { loc: "/pricing", changefreq: "monthly", priority: "0.8", lastmod: today },
  { loc: "/contact", changefreq: "yearly", priority: "0.8", lastmod: today },
  { loc: "/about", changefreq: "yearly", priority: "0.6", lastmod: today },
  { loc: "/blog", changefreq: "weekly", priority: "0.6", lastmod: today },
  ...posts.map((p) => ({
    loc: `/blog/${p.slug}`,
    changefreq: "yearly",
    priority: "0.5",
    lastmod: p.isoDate,
  })),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${SITE}${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

mkdirSync(`${root}/public`, { recursive: true });
writeFileSync(`${root}/public/sitemap.xml`, xml);
console.log(`sitemap.xml — ${urls.length} URLs`);
