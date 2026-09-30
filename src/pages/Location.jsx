import { Link, useLocation } from "react-router-dom";
import Seo, { graph, breadcrumbs, faqPage, organisation, localBusiness, SITE_URL } from "../components/Seo";
import AuroraHero from "../components/AuroraHero";
import FaqRow from "../components/FaqRow";
import { ArrowRightIcon, QuoteIcon, SearchIcon, TargetIcon, ShieldCheckIcon, PinIcon, LayersIcon } from "../components/Icons";
import { getLocation } from "../data/locations";
import { getService } from "../data/services";
import NotFound from "./NotFound";
import "./ServiceDetail.css";
import "./Location.css";

const POINT_ICONS = {
  quote: QuoteIcon,
  search: SearchIcon,
  target: TargetIcon,
  shield: ShieldCheckIcon,
  pin: PinIcon,
  layers: LayersIcon,
};

export default function Location() {
  const { pathname } = useLocation();
  const slug = pathname.replace(/^\/|\/$/g, "");
  const loc = getLocation(slug);
  if (!loc) return <NotFound />;

  const related = loc.related.map(getService).filter(Boolean);

  return (
    <div>
      <Seo
        title={loc.seoTitle}
        description={loc.metaDescription}
        jsonLd={graph(
          {
            "@type": "Service",
            name: loc.h1,
            serviceType: "Web design and website development",
            description: loc.metaDescription,
            url: `${SITE_URL}/${loc.slug}/`,
            provider: { "@id": `${SITE_URL}/#localbusiness` },
            areaServed: loc.areaSchema,
          },
          localBusiness,
          faqPage(loc.faq),
          organisation,
          breadcrumbs([
            { name: "Home", path: "/" },
            { name: loc.h1, path: `/${loc.slug}` },
          ])
        )}
      />
      <AuroraHero
        ground="radial-gradient(120% 100% at 70% -20%, #0e4a31 0%, #081c15 45%, #050907 80%)"
        blobs={[{ right: "-10%", top: "-50%", width: "65%", height: "150%", color: "rgba(79,232,154,.32)", duration: "19s" }]}
      >
        <div className="container service-crumb">
          <Link to="/">Home</Link> / <span>{loc.eyebrow}</span>
        </div>
        <div className="container location-hero">
          <div className="pill-tag location-hero__tag">{loc.eyebrow}</div>
          <h1 className="service-hero__title">{loc.h1}</h1>
          <p className="service-hero__lede">{loc.lede}</p>
          <div className="hero__actions" style={{ justifyContent: "flex-start" }}>
            <Link to="/contact/" className="btn btn-primary">
              Get a Free Quote
            </Link>
            <Link to="/pricing/" className="btn btn-secondary">
              See Packages
            </Link>
          </div>
        </div>
      </AuroraHero>

      <div className="section">
        <div className="location-intro">
          {loc.intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>

      <div className="section">
        <div className="section-head">
          <div className="eyebrow">Why businesses choose us</div>
          <h2>How we work with {loc.areaName} businesses</h2>
        </div>
        <div className="service-included location-points">
          {loc.points.map((p) => {
            const Icon = POINT_ICONS[p.icon];
            return (
              <div className="card" key={p.title}>
                <div className="icon-box">
                  <Icon size={19} />
                </div>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="section">
        <div className="section-head">
          <div className="eyebrow">Services</div>
          <h2>What we build for {loc.areaName} businesses</h2>
        </div>
        <div className="service-included">
          {related.map((s) => (
            <Link to={`/services/${s.slug}/`} className="card card--accent" key={s.slug}>
              <h3>{s.name}</h3>
              <p>{s.short}</p>
              <span className="service-link">
                {s.name} <ArrowRightIcon size={15} />
              </span>
            </Link>
          ))}
        </div>
        <p className="location-more">
          We also offer <Link to="/services/mobile-app-development/">mobile app development</Link>,{" "}
          <Link to="/services/graphic-design-branding/">logo design and branding</Link> and{" "}
          <Link to="/services/it-digital-solutions/">business email, domain and hosting setup</Link>.
        </p>
      </div>

      <div className="section">
        <div className="service-two-col">
          <div className="card card--panel">
            <h2 className="service-two-col__heading">Who we work with</h2>
            <ul className="location-list">
              {loc.sectors.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <h2 className="service-two-col__heading location-areas__heading">Areas we cover</h2>
            <p className="location-areas">{loc.areas.join(" · ")}</p>
            <p className="location-sibling">
              See also: <Link to={`/${loc.sibling.slug}/`}>{loc.sibling.label}</Link>
            </p>
          </div>
          <div className="card card--panel">
            <h2 className="service-two-col__heading">Common questions</h2>
            <div className="faq-list">
              {loc.faq.map((f, i) => (
                <FaqRow key={f.q} q={f.q} a={f.a} id={`${loc.slug}-faq-${i}`} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="section section--end">
        <div className="glass-cta">
          <h2>Tell us about your project</h2>
          <p>
            Book a free 30-minute call. You'll get a written, fixed-price quotation within one working day. Our base:
            246–250 Romford Road, London E7 9HZ.
          </p>
          <div className="actions">
            <Link to="/contact/" className="btn btn-primary">
              Get a Free Quote <ArrowRightIcon size={16} color="#04140c" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
