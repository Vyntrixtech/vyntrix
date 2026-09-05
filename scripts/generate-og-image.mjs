// Renders public/og-cover.png (1200x630) — the social preview card.
//
// Run manually when the brand or wording changes:  node scripts/generate-og-image.mjs
// It needs a browser, so it deliberately isn't part of the CI build; the PNG is
// committed instead.

import { chromium } from "playwright";
import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const logo = readFileSync(`${root}/public/vyntrix-technologies-logo.png`).toString("base64");

const html = `<!doctype html>
<html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif&family=DM+Sans:wght@400;500&display=swap" rel="stylesheet">
<style>
  * { margin: 0; box-sizing: border-box; }
  body {
    width: 1200px; height: 630px; overflow: hidden;
    background: radial-gradient(120% 100% at 50% -20%, #0f5236 0%, #082018 45%, #050907 80%);
    font-family: 'DM Sans', sans-serif; position: relative;
  }
  .blob {
    position: absolute; border-radius: 999px; filter: blur(90px);
  }
  .b1 { left: -12%; top: -40%; width: 70%; height: 140%;
        background: radial-gradient(closest-side, rgba(79,232,154,.42), transparent 70%); }
  .b2 { right: -16%; top: -50%; width: 70%; height: 150%;
        background: radial-gradient(closest-side, rgba(58,160,255,.26), transparent 70%); }
  .grid { position: absolute; inset: 0; opacity: .5;
    background-image:
      linear-gradient(rgba(255,255,255,.045) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,.045) 1px, transparent 1px);
    background-size: 120px 105px; }
  .wrap { position: relative; height: 100%; display: flex; flex-direction: column;
          justify-content: space-between; padding: 72px 80px; }
  img { height: 52px; }
  h1 { font-family: 'Instrument Serif', serif; font-weight: 400; font-size: 76px;
       line-height: 1.06; color: #eefff6; max-width: 20ch; letter-spacing: -.004em; }
  .grad { background: linear-gradient(120deg,#8bffc0,#4fe89a 60%,#26beff);
          -webkit-background-clip: text; background-clip: text; color: transparent; }
  .foot { display: flex; align-items: center; gap: 18px;
          font-size: 21px; color: #a9c4b8; }
  .dot { width: 6px; height: 6px; border-radius: 999px; background: #4fe89a; }
</style></head>
<body>
  <div class="blob b1"></div><div class="blob b2"></div><div class="grid"></div>
  <div class="wrap">
    <img src="data:image/png;base64,${logo}" alt="">
    <h1>Turning ideas into <span class="grad">powerful digital</span> solutions</h1>
    <div class="foot">
      <span>Websites</span><span class="dot"></span>
      <span>Mobile apps</span><span class="dot"></span>
      <span>Branding</span><span class="dot"></span>
      <span>E-commerce</span><span class="dot"></span>
      <span>vyntrixtechnologies.co.uk</span>
    </div>
  </div>
</body></html>`;

const browser = await chromium.launch({
  executablePath: process.env.CHROMIUM_PATH || "/opt/pw-browsers/chromium-1194/chrome-linux/chrome",
});
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.setContent(html, { waitUntil: "networkidle" });
await page.waitForTimeout(600); // let the webfonts settle
await page.screenshot({ path: `${root}/public/og-cover.png` });
await browser.close();
console.log("public/og-cover.png — 1200x630");
