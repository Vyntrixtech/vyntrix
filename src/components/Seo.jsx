import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Per-page metadata for a client-rendered SPA.
//
// Tags are upserted imperatively rather than rendered, so the static fallback
// tags in index.html are overwritten in place instead of duplicated — a page
// ends up with exactly one title, one description and one canonical, which is
// the whole point. React 19 can hoist rendered <title>/<meta>, but it won't
// remove the static ones already in the document.

export const SITE_URL = "https://vyntrixtechnologies.co.uk";
export const SITE_NAME = "Vyntrix Technologies";
const OG_IMAGE = `${SITE_URL}/og-cover.png`;

function upsertMeta(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel, href) {
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
  const canonical = SITE_URL + (pathname === "/" ? "/" : pathname.replace(/\/$/, ""));

  useEffect(() => {
    document.title = title;
    upsertMeta("name", "description", description);
    upsertMeta("name", "robots", noindex ? "noindex, nofollow" : "index, follow");
    upsertLink("canonical", canonical);

    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:site_name", SITE_NAME);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", canonical);
    upsertMeta("property", "og:image", image || OG_IMAGE);
    upsertMeta("property", "og:locale", "en_GB");

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", image || OG_IMAGE);

    setJsonLd(jsonLd);
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
