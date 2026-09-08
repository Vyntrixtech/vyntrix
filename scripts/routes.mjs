// The site's URL list, derived from the same data the pages render from, so a
// new service or post can never be missing from the sitemap or the pre-render.
// Shared by generate-sitemap.mjs and prerender.mjs.

import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

export const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

import { execFileSync } from "node:child_process";

const { services } = await import(`${root}/src/data/services.js`);
const { posts } = await import(`${root}/src/data/posts.js`);
const { legalList } = await import(`${root}/src/data/legal.js`);

// lastmod has to be true or it is worse than useless — stamping every page
// with today's date on every build tells crawlers the whole site changed each
// time we deploy, and they learn to ignore the field. So take the date from
// the last commit that actually touched the page's source. Falls back to the
// build date outside a git checkout (a shallow CI clone still has HEAD).
function lastCommit(...paths) {
  try {
    const out = execFileSync("git", ["log", "-1", "--format=%cs", "--", ...paths], {
      cwd: root,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    if (out) return out;
  } catch {
    /* not a git checkout */
  }
  return new Date().toISOString().slice(0, 10);
}

const SRC = `${root}/src`;
const siteWide = lastCommit(`${SRC}/index.css`, `${SRC}/components`);
const dateFor = (...paths) => {
  const page = lastCommit(...paths);
  // A page is as fresh as the later of its own source and the shared chrome.
  return page > siteWide ? page : siteWide;
};

const homeDate = dateFor(`${SRC}/pages/Home.jsx`, `${SRC}/pages/Home.css`);
const servicesDate = dateFor(`${SRC}/pages/Services.jsx`, `${SRC}/data/services.js`);
const serviceDetailDate = dateFor(`${SRC}/pages/ServiceDetail.jsx`, `${SRC}/data/services.js`);
const pricingDate = dateFor(`${SRC}/pages/Pricing.jsx`);
const contactDate = dateFor(`${SRC}/pages/Contact.jsx`);
const aboutDate = dateFor(`${SRC}/pages/About.jsx`);
const blogDate = dateFor(`${SRC}/pages/BlogIndex.jsx`, `${SRC}/data/posts.js`);
const legalDate = dateFor(`${SRC}/data/legal.js`, `${SRC}/pages/Legal.jsx`);

// priority is a hint, not a ranking lever — commercial pages first.
export const publicRoutes = [
  { path: "/", changefreq: "monthly", priority: "1.0", lastmod: homeDate },
  { path: "/services", changefreq: "monthly", priority: "0.9", lastmod: servicesDate },
  ...services.map((s) => ({
    path: `/services/${s.slug}`,
    changefreq: "monthly",
    priority: "0.9",
    lastmod: serviceDetailDate,
  })),
  { path: "/pricing", changefreq: "monthly", priority: "0.8", lastmod: pricingDate },
  { path: "/contact", changefreq: "yearly", priority: "0.8", lastmod: contactDate },
  { path: "/about", changefreq: "yearly", priority: "0.6", lastmod: aboutDate },
  { path: "/blog", changefreq: "weekly", priority: "0.6", lastmod: blogDate },
  ...posts.map((p) => ({
    path: `/blog/${p.slug}`,
    changefreq: "yearly",
    priority: "0.5",
    lastmod: p.isoDate,
  })),
  ...legalList.map((l) => ({
    path: `/${l.slug}`,
    changefreq: "yearly",
    priority: "0.3",
    lastmod: legalDate,
  })),
];

// Worth pre-rendering so it loads as one file, but noindex and deliberately
// absent from the sitemap.
export const prerenderRoutes = [...publicRoutes.map((r) => r.path), "/admin"];
