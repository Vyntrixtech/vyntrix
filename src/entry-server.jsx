// Build-time entry point. Renders one route to an HTML string and reports the
// head tags that route's <Seo> asked for. Only scripts/prerender.mjs uses it —
// it is never part of the browser bundle.

import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "./App.jsx";
import { SeoSink } from "./components/Seo.jsx";

export function render(path) {
  let tags = null;
  const html = renderToString(
    <SeoSink.Provider value={(t) => (tags = t)}>
      <StaticRouter location={path}>
        <App />
      </StaticRouter>
    </SeoSink.Provider>
  );
  return { html, tags };
}
