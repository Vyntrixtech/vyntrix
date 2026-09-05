# Vyntrix Technologies — Website

Marketing site for Vyntrix Technologies (VTech Limited), built from the Claude Design
handoff in [`design/`](design/).

**Live:** https://vyntrixtechnologies.co.uk

## Stack

- React 19 + Vite
- React Router (client-side routing)
- Plain CSS with design tokens — no UI framework

## Pages

| Route | Page |
| --- | --- |
| `/` | Home |
| `/about` | About |
| `/services` | Services overview |
| `/services/:slug` | Service detail (7 services) |
| `/pricing` | Pricing / packages |
| `/contact` | Contact + enquiry form |
| `/blog` | Blog index |
| `/blog/:slug` | Blog article |
| `/admin` | Admin dashboard + enquiries inbox (static mock) |
| `*` | 404 |

## Local development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # sitemap → vite build → pre-render, all into dist/
npm run preview  # preview the production build
```

## Build pipeline

`npm run build` runs three steps:

1. `prebuild` — [`scripts/generate-sitemap.mjs`](scripts/generate-sitemap.mjs) writes
   `public/sitemap.xml`.
2. `vite build` — the client bundle.
3. `postbuild` — [`scripts/prerender.mjs`](scripts/prerender.mjs) renders every route
   through `react-dom/server` and writes it as static HTML.

Both the sitemap and the pre-render read their URL list from
[`scripts/routes.mjs`](scripts/routes.mjs), which derives it from `src/data/services.js`
and `src/data/posts.js` — so a new service or post cannot go missing from either.

### Why pre-render

Without it, metadata and page copy only existed once JavaScript had run. Google
executes JS, but many crawlers and every social-card scraper do not, so link previews
and non-Google indexing saw an empty shell. Now `/about` is served as
`dist/about/index.html` with its own title, canonical, Open Graph tags and JSON-LD
already in the head, and React hydrates that markup in the browser rather than
discarding it — the live experience is unchanged.

`src/components/Seo.jsx` holds the single definition of a page's head
(`buildTags`); the browser upserts those tags in an effect, and the pre-renderer
collects the same list through the `SeoSink` context.

To check the output the way GitHub Pages serves it:

```bash
node scripts/serve-dist.mjs &          # exact file → directory index → 404.html
npm i -D playwright                    # not a dependency; see the script header
node scripts/verify-prerender.mjs      # static HTML, unique metadata, clean hydration
```

## Deployment

Pushes to `main` trigger [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which builds the site and publishes `dist/` to GitHub Pages.

Two details make routing work on Pages:

- `public/CNAME` pins the custom domain (`vyntrixtechnologies.co.uk`).
- `dist/404.html` is the un-pre-rendered shell, marked `noindex`. Every real route now
  has its own HTML file, so 404.html is only reached by genuinely unknown URLs, where
  the SPA boots and renders the 404 page.

## Design source

`design/` holds the original Claude Design handoff — the `.dc.html` prototypes, the
chat transcripts documenting the design decisions, and the brand assets. The Aurora
theme (fresh green `#4FE89A` → blue `#3AA0FF`, Instrument Serif display type) comes
from `design/project/VTech Website.dc.html`, the visual source of truth for the build.
