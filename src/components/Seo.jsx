import { createContext, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

// Per-page metadata, shared by the browser and the build-time pre-renderer.
//
// buildTags() is the single source of truth for a page's head. In the browser
// the tags are upserted imperatively rather than rendered, so the fallback tags
// in index.html are overwritten in place instead of duplicated — a page ends up
// with exactly one title, one description and one canonical, which is the whole
// point. (React 19 can hoist rendered <title>/<meta>, but it won't remove the
// static ones already in the document.)
//
// During pre-rendering there is no DOM and no effects run, so
// src/entry-server.jsx passes a collector function through SeoSink and Seo
// hands it the same tag list, which the build script writes into the static
// HTML it emits.

export const SITE_URL = "https://vyntrixtechnologies.co.uk";
export const SITE_NAME = "Vyntrix Technologies";
const OG_IMAGE = `${SITE_URL}/og-cover.png`;

/** Set to a `(tags) => void` collector while pre-rendering; null in the browser. */
export const SeoSink = createContext(null);

/** The complete head for one page, as data both renderers understand. */
export function buildTags({ title, description, canonical, noindex, image, jsonLd }) {
  const img = image || OG_IMAGE;
  return {
    title,
    metas: [
      { attr: "name", key: "description", content: description },
      { attr: "name", key: "robots", content: noindex ? "noindex, nofollow" : "index, follow" },
      { attr: "property", key: "og:type", content: "website" },
      { attr: "property", key: "og:site_name", content: SITE_NAME },
      { attr: "property", key: "og:title", content: title },
      { attr: "property", key: "og:description", content: description },
      { attr: "property", key: "og:url", content: canonical },
      { attr: "property", key: "og:image", content: img },
      { attr: "property", key: "og:locale", content: "en_GB" },
      { attr: "name", key: "twitter:card", content: "summary_large_image" },
      { attr: "name", key: "twitter:title", content: title },
      { attr: "name", key: "twitter:description", content: description },
      { attr: "name", key: "twitter:image", content: img },
    ].filter((m) => m.content),
    links: [{ rel: "canonical", href: canonical }],
    jsonLd,
  };
}

export function canonicalFor(pathname) {
  return SITE_URL + (pathname === "/" ? "/" : pathname.replace(/\/$/, ""));
}

function upsertMeta({ attr, key, content }) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink({ rel, href }) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/** Replaces the page's JSON-LD block (one per page keeps it unambiguous). */
function setJsonLd(data) {
  const id = "seo-jsonld";
  const existing = document.getElementById(id);
  if (!data) {
    if (existing) existing.remove();
    return;
  }
  const el = existing || document.createElement("script");
  el.id = id;
  el.type = "application/ld+json";
  el.textContent = JSON.stringify(data);
  if (!existing) document.head.appendChild(el);
}

export default function Seo({ title, description, noindex = false, jsonLd = null, image }) {
  const { pathname } = useLocation();
  const canonical = canonicalFor(pathname);
  const collect = useContext(SeoSink);

  // Pre-render pass: nothing to mutate and no effects to flush, so hand the
  // tags straight to the collector the server entry provided.
  if (collect) collect(buildTags({ title, description, canonical, noindex, image, jsonLd }));

  useEffect(() => {
    const tags = buildTags({ title, description, canonical, noindex, image, jsonLd });
    document.title = tags.title;
    tags.metas.forEach(upsertMeta);
    tags.links.forEach(upsertLink);
    setJsonLd(tags.jsonLd);
  }, [title, description, noindex, canonical, image, jsonLd]);

  return null;
}

/* ---- shared structured-data builders ---- */

export const organisation = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  legalName: "Vyntrix Technologies Limited",
  url: SITE_URL,
  logo: `${SITE_URL}/og-cover.png`,
  email: "info@vyntrixtechnologies.co.uk",
  telephone: "0207877897",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Business centre 246-250 Romford Road",
    addressLocality: "London",
    postalCode: "E7 9HZ",
    addressCountry: "GB",
  },
  areaServed: "Worldwide",
};

export function breadcrumbs(trail) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: SITE_URL + t.path,
    })),
  };
}

/** Wraps one or more nodes into a single @graph document. */
export function graph(...nodes) {
  return { "@context": "https://schema.org", "@graph": nodes.filter(Boolean) };
}
