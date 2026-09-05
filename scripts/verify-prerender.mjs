// Checks the pre-rendered output against a running `node scripts/serve-dist.mjs`:
// that every route ships real HTML with its own head, and that React hydrates
// that HTML without a mismatch.
//
//   npm run build
//   node scripts/serve-dist.mjs &
//   npm i -D playwright && node scripts/verify-prerender.mjs
//
// It needs a browser, so — like generate-og-image.mjs — playwright is installed
// on demand rather than kept as a dependency: its postinstall downloads
// browsers, which has no business running in the deploy workflow.

import { chromium } from "playwright";
import { prerenderRoutes } from "./routes.mjs";

const BASE = process.argv[2] || "http://localhost:4173";

const browser = await chromium.launch({
  executablePath: process.env.CHROMIUM_PATH || "/opt/pw-browsers/chromium-1194/chrome-linux/chrome",
});
const page = await browser.newPage();

// The sandbox has no route to Google Fonts, and waiting on it would stall every
// page load. Webfonts have no bearing on hydration.
await page.route("**/*", (route) =>
  route.request().url().startsWith(BASE) ? route.continue() : route.abort()
);

const problems = [];
const seenTitles = new Map();

const decodeEntities = (s) =>
  s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'");

// Requests this sandbox is expected to fail: the aborted webfonts above, and
// the deliberate 404 probe.
const expectedNoise = /Failed to load resource: (net::ERR_FAILED|the server responded with a status of 404)/;

for (const route of [...prerenderRoutes, "/definitely-not-a-page"]) {
  const noise = [];
  const onMsg = (m) => {
    if (m.type() === "error" || m.type() === "warning") noise.push(m.text());
  };
  const onErr = (e) => noise.push(`pageerror: ${e.message}`);
  page.on("console", onMsg);
  page.on("pageerror", onErr);

  const res = await page.goto(BASE + route, { waitUntil: "load" });
  await page.waitForTimeout(120); // let effects flush

  // What a crawler that never runs JavaScript would see.
  const raw = await (await fetch(BASE + route)).text();
  const rawTitle = decodeEntities(raw.match(/<title>([^<]*)<\/title>/)?.[1] ?? "");
  const rawBody = raw.match(/<div id="root">([\s\S]*?)<\/div>\s*<\/body>/)?.[1]?.length ?? 0;

  const live = await page.evaluate(() => ({
    titles: document.querySelectorAll("head > title").length,
    title: document.title,
    desc: document.querySelector('meta[name="description"]')?.content ?? "",
    canonicals: document.querySelectorAll('link[rel="canonical"]').length,
    canonical: document.querySelector('link[rel="canonical"]')?.href ?? "",
    ogImage: document.querySelector('meta[property="og:image"]')?.content ?? "",
    jsonLd: document.querySelectorAll("#seo-jsonld").length,
    h1: document.querySelectorAll("h1").length,
    rendered: document.getElementById("root").innerHTML.length,
  }));

  page.off("console", onMsg);
  page.off("pageerror", onErr);

  const hydration = noise.filter((t) => /hydrat|did not match|mismatch/i.test(t));
  const unexpected = noise.filter((t) => !hydration.includes(t) && !expectedNoise.test(t));
  const is404 = route === "/definitely-not-a-page";

  if (hydration.length) problems.push(`${route}: hydration — ${hydration[0]}`);
  if (unexpected.length) problems.push(`${route}: console — ${unexpected[0]}`);
  if (res.status() !== (is404 ? 404 : 200)) problems.push(`${route}: status ${res.status()}`);
  if (live.titles !== 1) problems.push(`${route}: ${live.titles} head titles`);
  if (live.canonicals !== 1) problems.push(`${route}: ${live.canonicals} canonicals`);
  if (live.h1 !== 1) problems.push(`${route}: ${live.h1} h1s`);

  if (!is404) {
    if (rawBody < 2000) problems.push(`${route}: only ${rawBody} chars of HTML before JS`);
    if (rawTitle !== live.title) problems.push(`${route}: static title "${rawTitle}" != live "${live.title}"`);
    if (!live.desc) problems.push(`${route}: no description`);
    if (!live.ogImage) problems.push(`${route}: no og:image`);
    // /admin is noindex, so it carries no structured data and is not compared.
    if (route !== "/admin") {
      if (live.jsonLd !== 1) problems.push(`${route}: ${live.jsonLd} JSON-LD blocks`);
      const dupe = seenTitles.get(live.title);
      if (dupe) problems.push(`${route}: title duplicates ${dupe}`);
      seenTitles.set(live.title, route);
    }
  }

  console.log(
    `${res.status()} ${route.padEnd(42)} static ${String(rawBody).padStart(6)}  hydrated ${String(
      live.rendered
    ).padStart(6)}  ${live.title.slice(0, 48)}`
  );
}

await browser.close();

if (problems.length) {
  console.error(`\n${problems.length} problem(s):`);
  problems.forEach((p) => console.error("  ✗ " + p));
  process.exit(1);
}
console.log("\nAll routes: static HTML present, unique metadata, clean hydration.");
