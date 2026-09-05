// The site's URL list, derived from the same data the pages render from, so a
// new service or post can never be missing from the sitemap or the pre-render.
// Shared by generate-sitemap.mjs and prerender.mjs.

import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

export const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const { services } = await import(`${root}/src/data/services.js`);
const { posts } = await import(`${root}/src/data/posts.js`);

const today = new Date().toISOString().slice(0, 10);

// priority is a hint, not a ranking lever — commercial pages first.
export const publicRoutes = [
  { path: "/", changefreq: "monthly", priority: "1.0", lastmod: today },
  { path: "/services", changefreq: "monthly", priority: "0.9", lastmod: today },
  ...services.map((s) => ({
    path: `/services/${s.slug}`,
    changefreq: "monthly",
    priority: "0.9",
    lastmod: today,
  })),
  { path: "/pricing", changefreq: "monthly", priority: "0.8", lastmod: today },
  { path: "/contact", changefreq: "yearly", priority: "0.8", lastmod: today },
  { path: "/about", changefreq: "yearly", priority: "0.6", lastmod: today },
  { path: "/blog", changefreq: "weekly", priority: "0.6", lastmod: today },
  ...posts.map((p) => ({
    path: `/blog/${p.slug}`,
    changefreq: "yearly",
    priority: "0.5",
    lastmod: p.isoDate,
  })),
];

// Worth pre-rendering so it loads as one file, but noindex and deliberately
// absent from the sitemap.
export const prerenderRoutes = [...publicRoutes.map((r) => r.path), "/admin"];
