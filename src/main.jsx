import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// Self-hosted fonts (latin subset only, font-display: swap). Served from the
// site itself: no render-blocking request to a third-party font CDN.
import "@fontsource/plus-jakarta-sans/latin-400.css";
import "@fontsource/plus-jakarta-sans/latin-500.css";
import "@fontsource/plus-jakarta-sans/latin-600.css";
import "@fontsource/plus-jakarta-sans/latin-700.css";
import "@fontsource/plus-jakarta-sans/latin-800.css";
import "@fontsource/dm-sans/latin-500.css";
import "@fontsource/dm-sans/latin-600.css";
import "@fontsource/instrument-serif/latin-400-italic.css";
import "./index.css";
import App from "./App.jsx";

const container = document.getElementById("root");

const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

// Every real route ships pre-rendered markup (see scripts/prerender.mjs), so
// React adopts it rather than throwing it away and painting again. 404.html is
// the one page served as an empty shell, and it mounts the normal way.
if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
