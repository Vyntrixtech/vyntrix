// Generates public/sitemap.xml from the shared route list. Runs on prebuild.

import { writeFileSync, mkdirSync } from "node:fs";
import { publicRoutes, root } from "./routes.mjs";

const SITE = "https://vyntrixtechnologies.co.uk";

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${publicRoutes
  .map(
    (u) => `  <url>
    <loc>${SITE}${u.path}</loc>
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
console.log(`sitemap.xml — ${publicRoutes.length} URLs`);
