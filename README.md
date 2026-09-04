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
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## Deployment

Pushes to `main` trigger [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which builds the site and publishes `dist/` to GitHub Pages.

Two details make client-side routing work on Pages:

- `public/CNAME` pins the custom domain (`vyntrixtechnologies.co.uk`).
- The `postbuild` script copies `dist/index.html` to `dist/404.html`, so deep links
  like `/services/mobile-app-development` resolve instead of 404ing on hard refresh.

## Design source

`design/` holds the original Claude Design handoff — the `.dc.html` prototypes, the
chat transcripts documenting the design decisions, and the brand assets. The Aurora
theme (fresh green `#4FE89A` → blue `#3AA0FF`, Instrument Serif display type) comes
from `design/project/VTech Website.dc.html`, the visual source of truth for the build.
