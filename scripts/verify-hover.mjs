// Hovers every card-like surface on every page and reports the ones that do
// not respond. Guards the rule that a grid never has one live card sitting
// beside three dead ones. Development helper — needs `npm i -D playwright` and
// a running `node scripts/serve-dist.mjs`.

import { chromium } from "playwright";
import { prerenderRoutes } from "./routes.mjs";

const BASE = process.argv[2] || "http://localhost:4173";
const SELECTOR = ".card, .pillar, .faq-row, .blog-card, .industries span, .addons-grid span";

const browser = await chromium.launch({
  executablePath: process.env.CHROMIUM_PATH || "/opt/pw-browsers/chromium-1194/chrome-linux/chrome",
});
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
await page.route("**/*", (r) => (r.request().url().startsWith(BASE) ? r.continue() : r.abort()));

const dead = [];
let checked = 0;
let noIcon = 0;

for (const route of prerenderRoutes) {
  await page.goto(BASE + route, { waitUntil: "load" });
  await page.waitForTimeout(150);

  const els = await page.$$(SELECTOR);
  for (const [i, el] of els.entries()) {
    const before = await el.evaluate((e) => {
      const s = getComputedStyle(e);
      return { border: s.borderColor, bg: s.backgroundColor, shadow: s.boxShadow, t: s.transform };
    });
    await el.hover({ force: true }).catch(() => {});
    await page.waitForTimeout(220);
    const after = await el.evaluate((e) => {
      const s = getComputedStyle(e);
      return { border: s.borderColor, bg: s.backgroundColor, shadow: s.boxShadow, t: s.transform };
    });

    checked++;
    const responded =
      before.border !== after.border ||
      before.bg !== after.bg ||
      before.shadow !== after.shadow ||
      before.t !== after.t;

    if (!responded) {
      const label = await el.evaluate((e) => `${e.className || e.tagName} — ${(e.textContent || "").trim().slice(0, 42)}`);
      dead.push(`${route} [${i}] ${label}`);
    }
  }

  // A tile with neither an icon nor artwork is bare text. Panels are exempt —
  // a table or a form is identified by its content, and an icon on it is noise.
  noIcon += await page
    .$$eval(".card:not(.card--panel)", (cards) =>
      cards
        .filter((c) => !c.querySelector("svg, img, .blog-card__art, [class*='__num'], .icon-box"))
        .map((c) => `${c.className} — ${(c.textContent || "").trim().slice(0, 42)}`)
    )
    .then((list) => {
      list.forEach((l) => console.log(`  ${route}: no visual — ${l}`));
      return list.length;
    });
}

await browser.close();

console.log(`\nhovered ${checked} surfaces across ${prerenderRoutes.length} routes`);
if (dead.length) {
  console.error(`${dead.length} did not respond:`);
  dead.forEach((d) => console.error("  x " + d));
}
if (noIcon) console.error(`${noIcon} card(s) carry no icon or artwork`);
if (dead.length || noIcon) process.exit(1);
console.log("Every card-like surface responds to hover, and every card has a visual.");
