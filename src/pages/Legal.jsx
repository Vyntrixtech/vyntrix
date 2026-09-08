import { Link, useLocation } from "react-router-dom";
import Seo, { graph, breadcrumbs, organisation, SITE_URL } from "../components/Seo";
import AuroraHero from "../components/AuroraHero";
import { legalPages, legalList, LAST_UPDATED } from "../data/legal";
import NotFound from "./NotFound";
import "./Legal.css";

// One layout for Privacy, Cookies and Terms — the three read the same way, and
// a shared template keeps them from drifting apart.
export default function Legal() {
  // The three routes are registered individually, so the slug comes from the
  // path rather than a route param.
  const slug = useLocation().pathname.replace(/^\/|\/$/g, "");
  const page = legalPages[slug];

  if (!page) return <NotFound />;

  const others = legalList.filter((p) => p.slug !== slug);

  return (
    <div>
      <Seo
        title={page.title}
        description={page.description}
        jsonLd={graph(
          {
            "@type": "WebPage",
            name: page.name,
            description: page.description,
            url: `${SITE_URL}/${page.slug}`,
            publisher: { "@id": `${SITE_URL}/#organization` },
            dateModified: "2026-09-08",
          },
          organisation,
          breadcrumbs([
            { name: "Home", path: "/" },
            { name: page.name, path: `/${page.slug}` },
          ])
        )}
      />
      <AuroraHero
        ground="radial-gradient(110% 80% at 50% -25%, #0d4530 0%, #081c15 45%, #050907 80%)"
        blobs={[
          { left: "50%", top: "-55%", width: "70%", height: "130%", color: "rgba(79,232,154,.22)", duration: "22s", center: true },
        ]}
      >
        <div className="container legal-crumb">
          <Link to="/">Home</Link> / <span>{page.name}</span>
        </div>
        <div className="container legal-hero">
          <h1 className="legal-hero__title">{page.name}</h1>
          <p className="legal-hero__lede">{page.lede}</p>
          <p className="legal-hero__date">
            Last updated <time dateTime="2026-09-08">{LAST_UPDATED}</time>
          </p>
        </div>
      </AuroraHero>

      <div className="container legal-body">
        {page.sections.map((s) => (
          <section key={s.heading}>
            <h2>{s.heading}</h2>
            {s.body.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </section>
        ))}

        <div className="legal-more">
          <span>See also</span>
          {others.map((o) => (
            <Link key={o.slug} to={`/${o.slug}`}>
              {o.name}
            </Link>
          ))}
          <Link to="/contact">Contact us</Link>
        </div>
      </div>
    </div>
  );
}
