import { Link } from "react-router-dom";
import Seo, { graph, organisation, SITE_URL, SITE_NAME } from "../components/Seo";
import AuroraHero from "../components/AuroraHero";
import ServiceArt from "../components/ServiceArt";
import { services } from "../data/services";
import { GridIcon, ArrowRightIcon, TargetIcon, ClockIcon, ShieldCheckIcon } from "../components/Icons";
import { serviceIconMap } from "../data/serviceIcons";
import "./Home.css";

const stats = [
  { icon: TargetIcon, value: "1 day", body: "Typical first response to an enquiry — from a person, with a suggested call time." },
  { icon: ClockIcon, value: "4 wks", body: "Typical time from discovery to launch on a Starter build, with weekly check-ins." },
  { icon: ShieldCheckIcon, value: "100%", body: "Ownership of domain, hosting, code and store accounts stays with you." },
];

const process = [
  { n: "01", title: "Discovery", body: "Business, requirements, objectives and ideas." },
  { n: "02", title: "Planning", body: "Structure, features, timeline and deliverables." },
  { n: "03", title: "Design", body: "Visual direction and user experience." },
  { n: "04", title: "Development", body: "Build and test the approved solution." },
  { n: "05", title: "Launch & Support", body: "Go live, then ongoing support." },
];

/* The six cards beside the illustrated lead card. They carry the service's own
   mark so no card in the grid is left as bare text. */
function ServiceCard({ service }) {
  const Icon = serviceIconMap[service.icon];
  return (
    <Link to={`/services/${service.slug}`} className="card home-services__card">
      <div className="icon-box">
        <Icon size={19} />
      </div>
      <h3 className="home-services__side-title">{service.name}</h3>
      <p>{service.short}</p>
    </Link>
  );
}

export default function Home() {
  const homeServices = services.slice(0, 6);

  return (
    <div>
      <Seo
        title="IT & Digital Solutions for Growing Businesses | Vyntrix"
        description="UK web design, mobile app development, branding and e-commerce. Fixed scope, fixed price and a written quotation before work starts. Book a free 30-minute call."
        jsonLd={graph(organisation, {
          "@type": "WebSite",
          "@id": SITE_URL + "/#website",
          url: SITE_URL,
          name: SITE_NAME,
          publisher: { "@id": SITE_URL + "/#organization" },
        })}
      />
      <AuroraHero
        ground="radial-gradient(130% 100% at 50% -20%, #0f5236 0%, #082018 45%, #050907 80%)"
        blobs={[
          { left: "-10%", top: "-45%", width: "70%", height: "140%", color: "rgba(79,232,154,.40)", duration: "18s" },
          { right: "-14%", top: "-55%", width: "70%", height: "150%", color: "rgba(38,190,255,.20)", duration: "24s", reverse: true },
        ]}
      >
        <div className="container hero">
          <div className="hero__badge">
            <span className="hero__badge-flag">UK</span>Digital solutions partner · working globally
          </div>
          <h1 className="hero__title">
            Turning ideas into <span className="gradient-text">powerful digital</span> solutions
          </h1>
          <p className="hero__lede">
            We design and develop websites, mobile applications and digital experiences that help businesses stand
            out, attract customers and grow.
          </p>
          <div className="hero__actions">
            <Link to="/contact" className="btn btn-primary">
              Get a Free Quote <ArrowRightIcon size={16} color="#04140c" />
            </Link>
            <Link to="/services" className="btn btn-secondary">
              <GridIcon size={16} color="#eefff6" /> Explore Services
            </Link>
          </div>

          <div className="hero__mock-wrap">
            <div className="hero__mock-glow" />
            <div className="hero__mock">
              <div className="hero__mock-inner">
                <div className="hero__mock-topbar">
                  <span className="dot" style={{ background: "#ff5f57" }} />
                  <span className="dot" style={{ background: "#febc2e" }} />
                  <span className="dot" style={{ background: "#28c840" }} />
                  <div className="hero__mock-url">vyntrixtechnologies.co.uk / build</div>
                </div>
                <div className="hero__mock-grid">
                  <div className="hero__mock-code">
                    <div className="hero__mock-code-label">
                      <span className="live-dot" /> BUILD PIPELINE
                    </div>
                    <div className="hero__mock-lines">
                      <div className="line line--accent" style={{ width: "78%" }} />
                      <div className="line" style={{ width: "54%" }} />
                      <div className="line" style={{ width: "88%" }} />
                      <div className="line line--accent2" style={{ width: "40%" }} />
                      <div className="line" style={{ width: "66%" }} />
                      <div className="hero__mock-cursor-row">
                        <div className="line" style={{ width: "22%" }} />
                        <span className="cursor" />
                      </div>
                    </div>
                    <div className="hero__mock-tags">
                      <span className="tag tag--accent">design</span>
                      <span className="tag">build</span>
                      <span className="tag">test</span>
                      <span className="tag">launch</span>
                    </div>
                  </div>
                  <div className="hero__mock-timeline">
                    <div className="timeline-rail" />
                    <div className="timeline-flow" />
                    {[
                      { title: "Discovery & scope", body: "Requirements, sitemap, fixed quotation", state: "accent" },
                      { title: "Design & prototype", body: "Wireframes, UI, client review" },
                      { title: "Build & integrate", body: "Development, CMS, payments, testing" },
                      { title: "Launch & support", body: "Go live, monitoring, monthly plan", state: "blue" },
                    ].map((step, i) => (
                      <div className="timeline-row" key={i}>
                        <span className={"timeline-dot" + (step.state ? " is-" + step.state : "")} />
                        <div className={"timeline-card" + (step.state ? " is-" + step.state : "")}>
                          <div className="timeline-card-title">{step.title}</div>
                          <div className="timeline-card-body">{step.body}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AuroraHero>

      <div>
        <div className="section">
          <div className="section-head">
            <div className="eyebrow">Services</div>
            <h2>Everything your business needs to succeed online</h2>
            <p>Six service lines, one team, and a single point of contact from discovery to launch.</p>
          </div>

          <div className="home-services">
            <Link to={`/services/${homeServices[0].slug}`} className="home-services__lead card card--accent">
              <ServiceArt type={homeServices[0].icon} height={200} />
              <h3>{homeServices[0].name}</h3>
              <p>{homeServices[0].short}</p>
              <span className="service-link">
                Explore service <ArrowRightIcon size={15} />
              </span>
            </Link>
            <div className="home-services__side">
              {homeServices.slice(1, 4).map((s) => (
                <ServiceCard key={s.slug} service={s} />
              ))}
            </div>
          </div>
          <div className="home-services__row">
            {homeServices.slice(4).map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
            <ServiceCard service={services[6]} />
          </div>
        </div>

        <div className="aurora" style={{ marginTop: 88 }}>
          <div
            className="aurora-blob"
            style={{
              left: "50%",
              top: "-70%",
              width: "110%",
              height: "180%",
              transform: "translateX(-50%)",
              background: "radial-gradient(closest-side, rgba(79,232,154,.20), transparent 70%)",
              animationDuration: "20s",
            }}
          />
          <div className="section" style={{ position: "relative" }}>
            <div className="section-head">
              <div className="eyebrow">Outcomes</div>
              <h2>Digital work measured in business results</h2>
            </div>
            <div className="stats-grid">
              {stats.map((s, i) => (
                <div className="card" key={i}>
                  <div className="stats-grid__top">
                    <div className="icon-box">
                      <s.icon size={18} />
                    </div>
                    <div className="stats-grid__value">{s.value}</div>
                  </div>
                  <p>{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="section section--end">
          <div className="section-head">
            <div className="eyebrow">Our process</div>
            <h2>Five steps, no surprises</h2>
          </div>
          <div className="process-grid">
            {process.map((step) => (
              <div className="card process-card" key={step.n}>
                <div className="process-card__num">{step.n}</div>
                <h4>{step.title}</h4>
                <p>{step.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="section section--end">
          <div className="glass-cta">
            <div className="glass-cta__glow" />
            <h2>Have an idea? Let's build it.</h2>
            <p>Book a free 30-minute demo call. You'll leave with a scope, a timeline and a fixed price, no obligation.</p>
            <div className="actions">
              <Link to="/contact" className="btn btn-primary">
                Book a Call <ArrowRightIcon size={16} color="#04140c" />
              </Link>
              <Link to="/contact" className="btn btn-onglass">
                Talk to Our Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
