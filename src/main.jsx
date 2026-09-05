import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
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
