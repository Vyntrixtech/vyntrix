import { Link } from "react-router-dom";
import Seo, { graph, breadcrumbs } from "../components/Seo";
import AuroraHero from "../components/AuroraHero";
import ServiceArt from "../components/ServiceArt";
import { services } from "../data/services";
import { BadgeIcon } from "../components/Icons";
import { serviceIconMap as iconMap } from "../data/serviceIcons";
import "./Services.css";

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
