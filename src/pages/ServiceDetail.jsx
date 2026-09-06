import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Seo, { graph, breadcrumbs, organisation, SITE_URL } from "../components/Seo";
import AuroraHero from "../components/AuroraHero";
import { getService } from "../data/services";
import { ArrowRightIcon } from "../components/Icons";
import { itemIconMap } from "../data/serviceIcons";
import NotFound from "./NotFound";
import "./ServiceDetail.css";

function FaqRow({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={"faq-row" + (open ? " is-open" : "")} onClick={() => setOpen((v) => !v)}>
      <div className="faq-row__head">
        <span>{q}</span>
        <span className="faq-row__toggle">{open ? "−" : "+"}</span>
      </div>
      {open && <p className="faq-row__body">{a}</p>}
    </div>
  );
}

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getService(slug);

  if (!service) return <NotFound />;

  return (
    <div>
      <Seo
        title={`${service.name} | Vyntrix Technologies`}
        description={service.lede.length > 155 ? service.short : service.lede}
        jsonLd={graph(
          {
            "@type": "Service",
            name: service.name,
            description: service.short,
            url: `${SITE_URL}/services/${service.slug}`,
            provider: { "@id": `${SITE_URL}/#organization` },
            areaServed: "Worldwide",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: `${service.name} — what's included`,
              itemListElement: service.included.map((i) => ({
                "@type": "Offer",
                itemOffered: { "@type": "Service", name: i.title, description: i.body },
              })),
            },
          },
          organisation,
          breadcrumbs([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.name, path: `/services/${service.slug}` },
          ])
        )}
      />
      <AuroraHero
        ground="radial-gradient(120% 100% at 70% -20%, #0e4a31 0%, #081c15 45%, #050907 80%)"
        blobs={[{ right: "-10%", top: "-50%", width: "65%", height: "150%", color: "rgba(79,232,154,.32)", duration: "19s" }]}
      >
        <div className="container service-crumb">
          <Link to="/">Home</Link> / <Link to="/services">Services</Link> / <span>{service.name}</span>
        </div>
        <div className="container service-hero">
          <div>
            <div className="pill-tag" style={{ background: "rgba(79,232,154,.10)", border: "1px solid rgba(79,232,154,.35)", color: "var(--ac2)", padding: "8px 14px" }}>
              Service {service.number}
            </div>
            <h1 className="service-hero__title">{service.name}</h1>
            <p className="service-hero__lede">{service.lede}</p>
            <div className="hero__actions" style={{ justifyContent: "flex-start" }}>
              <Link to="/contact" className="btn btn-primary">
                Get a Free Quote
              </Link>
              <Link to="/services" className="btn btn-secondary">
                See Other Services
              </Link>
            </div>
          </div>
          <div className="service-hero__art">
            <div className="service-hero__art-glow" />
            <div className="service-hero__art-panel">
              <div className="si-panel si-panel--tall si-panel--accent" style={{ left: "30%", top: "12%", bottom: "12%", animation: "vt-float 9s ease-in-out infinite" }} />
              <div className="si-panel si-panel--tall" style={{ left: "54%", top: "12%", bottom: "12%", animation: "vt-float2 9s ease-in-out infinite" }} />
              <div className="si-dot si-dot--a" style={{ animation: "vt-pulse 2.6s ease-in-out infinite" }} />
              <div className="si-dot si-dot--b" style={{ animation: "vt-pulse 2.6s .7s ease-in-out infinite" }} />
            </div>
          </div>
        </div>
      </AuroraHero>

      <div className="section">
        <div className="section-head">
          <div className="eyebrow">What's included</div>
          <h2>Everything the {service.name.toLowerCase()} service needs, in one place</h2>
        </div>
        <div className="service-included">
          {service.included.map((item) => {
            const Icon = itemIconMap[item.icon];
            return (
              <div className="card" key={item.title}>
                <div className="icon-box">
                  <Icon size={19} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="section">
        <div className="service-two-col">
          <div className="card card--panel">
            <h2 className="service-two-col__heading">How the project runs</h2>
            <div className="service-steps">
              {[
                { n: "01", title: "Discovery", body: "Objectives, users and scope." },
                { n: "02", title: "Planning", body: "Feature list, screens, timeline and cost." },
                { n: "03", title: "Design", body: "Prototype and sign-off before build." },
                { n: "04", title: "Development", body: "Build, testing and preparation." },
                { n: "05", title: "Launch & Support", body: "Release, monitoring and updates." },
              ].map((s) => (
                <div className="service-steps__row" key={s.n}>
                  <div className="icon-box" style={{ background: "rgba(255,255,255,.06)", color: "var(--mid)" }}>
                    {s.n}
                  </div>
                  <div>
                    <div className="service-steps__title">{s.title}</div>
                    <div className="service-steps__body">{s.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="card card--panel">
            <h2 className="service-two-col__heading">Common questions</h2>
            <div className="faq-list">
              {service.faq.map((f) => (
                <FaqRow key={f.q} q={f.q} a={f.a} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="section section--end">
        <div className="glass-cta">
          <h2>Ready to talk about {service.name.toLowerCase()}?</h2>
          <p>Book a free demo and we'll map the first steps with you — scope, timeline and a fixed price.</p>
          <div className="actions">
            <Link to="/contact" className="btn btn-primary">
              Book a Call <ArrowRightIcon size={16} color="#04140c" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
