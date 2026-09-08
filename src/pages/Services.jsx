import { Link } from "react-router-dom";
import Seo, { graph, breadcrumbs } from "../components/Seo";
import AuroraHero from "../components/AuroraHero";
import ServiceArt from "../components/ServiceArt";
import { services } from "../data/services";
import { BadgeIcon } from "../components/Icons";
import { serviceIconMap as iconMap } from "../data/serviceIcons";
import "./Services.css";

/* Routes the problem people actually arrive with to the right service page.
   Written from real enquiry language rather than service names — someone
   searching "my website looks dated" is not searching "UI/UX design". */
const chooseBy = [
  {
    problem: "\u201CWe need a website, or the one we have is dated\u201D",
    answer:
      "A new build or a rebuild of an existing site. If the structure is sound we improve it rather than start again \u2014 we will tell you which is cheaper before you commit.",
    slug: "website-development",
  },
  {
    problem: "\u201CWe want to sell online\u201D",
    answer:
      "A storefront with a catalogue, payments and order management. The platform choice depends on how many products you carry and who updates them.",
    slug: "ecommerce-development",
  },
  {
    problem: "\u201COur customers keep asking for an app\u201D",
    answer:
      "Native or cross-platform, published under your own developer accounts. Most business apps do well cross-platform; we recommend native only where performance demands it.",
    slug: "mobile-app-development",
  },
  {
    problem: "\u201COur branding is inconsistent\u201D",
    answer:
      "A logo, palette, type and the usage rules that keep them consistent across print, screen and social \u2014 documented so your team can apply them without a designer.",
    slug: "graphic-design-branding",
  },
  {
    problem: "\u201CPeople visit but do not convert\u201D",
    answer:
      "A usability review of what exists, then wireframes and interface design that fix the specific points where people drop out.",
    slug: "ui-ux-design",
  },
  {
    problem: "\u201CNobody is looking after any of it\u201D",
    answer:
      "Updates, backups, monitoring and a named contact on a monthly plan \u2014 billed as a plan rather than ad-hoc hours.",
    slug: "maintenance-support",
  },
];

export default function Services() {
  const grid = services.slice(0, 6);
  const maintenance = services[6];

  return (
    <div>
      <Seo
        title="Web, App & Digital Services | Vyntrix Technologies"
        description="Seven service lines: website development, mobile apps, branding, UI/UX, e-commerce, IT solutions and ongoing maintenance. Each quoted individually."
        jsonLd={graph(breadcrumbs([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }]))}
      />
      <AuroraHero
        ground="radial-gradient(120% 100% at 50% -20%, #0e4a31 0%, #081c15 45%, #050907 80%)"
        blobs={[{ left: "-8%", top: "-50%", width: "60%", height: "150%", color: "rgba(79,232,154,.30)", duration: "22s" }]}
      >
        <div className="container services-hero">
          <div className="eyebrow">Services</div>
          <h1 className="services-hero__title">Everything your business needs to succeed online</h1>
          <p className="services-hero__lede">Seven service lines, each with its own page so it can rank independently in search.</p>
        </div>
      </AuroraHero>

      <div className="section">
        <div className="services-grid">
          {grid.map((s) => {
            const Icon = iconMap[s.icon];
            return (
              <Link to={`/services/${s.slug}`} key={s.slug} className="card card--accent services-grid__item">
                <ServiceArt type={s.icon} height={150} />
                <div className="services-grid__head">
                  <div className="icon-box">
                    <Icon size={19} />
                  </div>
                  <h2>{s.name}</h2>
                </div>
                <p>{s.short}</p>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="section">
        <Link to={`/services/${maintenance.slug}`} className="card maintenance-banner">
          <div className="maintenance-banner__left">
            <div className="icon-box" style={{ width: 40, height: 40, borderRadius: 14 }}>
              <BadgeIcon size={20} />
            </div>
            <div>
              <h2>{maintenance.name}</h2>
              <p>{maintenance.short}</p>
            </div>
          </div>
          <span className="btn btn-secondary btn-sm">See plans</span>
        </Link>
      </div>

      <div className="section">
        <div className="section-head">
          <div className="eyebrow">Choosing</div>
          <h2>Not sure which one you need?</h2>
          <p>
            Most enquiries arrive describing a problem rather than a service. These are the ones we hear most, and
            where each usually lands.
          </p>
        </div>
        <div className="services-choose">
          {chooseBy.map((c) => (
            <div className="card" key={c.problem}>
              <div className="icon-box">
                {(() => {
                  const Icon = iconMap[services.find((s) => s.slug === c.slug).icon];
                  return <Icon size={19} />;
                })()}
              </div>
              <h3>{c.problem}</h3>
              <p>{c.answer}</p>
              <Link to={`/services/${c.slug}`} className="service-link">
                {services.find((s) => s.slug === c.slug).name} <span aria-hidden="true">→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="section section--end">
        <div className="glass-cta">
          <h2>Have a project in mind? Let's talk.</h2>
          <div className="actions">
            <Link to="/contact" className="btn btn-primary">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
