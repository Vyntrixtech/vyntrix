import { Link } from "react-router-dom";
import AuroraHero from "../components/AuroraHero";
import { CompassIcon, TargetIcon, LockIcon, GrowthIcon, PinIcon, BadgeIcon } from "../components/Icons";
import "./About.css";

const pillars = [
  { key: "tech", title: "Technology", body: "Modern, reliable engineering — built to scale with the business.", icon: LockIcon },
  { key: "creative", title: "Creativity", body: "Brand, layout and copy that make the work feel considered.", icon: CompassIcon },
  { key: "growth", title: "Business growth", body: "Measured against enquiries, sales and retention — not clicks.", icon: GrowthIcon },
];

const facts = [
  { icon: PinIcon, title: "United Kingdom, working globally", body: "Remote-first delivery, UK contracts and invoicing." },
  { icon: GrowthIcon, title: "Commercially measured", body: "Judged on enquiries, sales and retention — not page views." },
  { icon: BadgeIcon, title: "One team, end to end", body: "Strategy, design, build and maintenance under one roof." },
];

const values = [
  { title: "Clarity", body: "Fixed scope, fixed price and plain English. No hourly surprises, no jargon in status calls." },
  { title: "Craft", body: "Typography, performance and accessibility are part of the brief, not an upgrade." },
  { title: "Accountability", body: "One named contact who owns the project from the first call to launch day." },
  { title: "Longevity", body: "Built so your team can run it — and supported by ours when they would rather not." },
];

const industries = [
  "Hospitality",
  "Retail & E-commerce",
  "Property",
  "Professional Services",
  "Construction",
  "Healthcare",
  "Education",
  "Startups",
];

export default function About() {
  return (
    <div>
      <AuroraHero
        ground="radial-gradient(120% 100% at 50% -20%, #0e4a31 0%, #081c15 45%, #050907 80%)"
        blobs={[{ right: "-10%", top: "-50%", width: "65%", height: "150%", color: "rgba(79,232,154,.32)", duration: "20s" }]}
      >
        <div className="container about-hero">
          <div className="eyebrow">About Vyntrix Technologies</div>
          <h1 className="about-hero__title">
            Technology. Creativity. <span className="gradient-text">Business growth.</span>
          </h1>
          <p className="about-hero__lede">
            We are a UK-based digital solutions company helping businesses turn ideas into professional digital
            experiences — combining technology, creativity and business understanding on every project.
          </p>
        </div>
      </AuroraHero>

      <div className="container">
        <div className="pillars aurora">
          <div className="aurora-blob" style={{ left: "12%", top: "-40%", width: "46%", height: "180%", background: "radial-gradient(closest-side, rgba(79,232,154,.22), transparent 70%)", animationDuration: "26s" }} />
          <div className="aurora-blob" style={{ right: "6%", top: "-30%", width: "42%", height: "160%", background: "radial-gradient(closest-side, rgba(58,160,255,.18), transparent 70%)", animationDuration: "32s", animationDirection: "reverse" }} />
          <div className="pillars__row">
            {pillars.map((p, i) => (
              <div className={`pillar pillar--${p.key}`} key={p.key} style={{ animationDelay: `${i * 1.2}s` }}>
                <div className="pillar__icon">
                  <p.icon size={17} />
                </div>
                <div className="pillar__title">{p.title}</div>
                <div className="pillar__body">{p.body}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section">
        <div className="mission-grid">
          <div className="card card--accent">
            <div className="icon-box">
              <TargetIcon size={19} />
            </div>
            <div className="eyebrow" style={{ marginTop: 20 }}>Our mission</div>
            <p className="mission-grid__statement">
              To make professional digital solutions accessible to businesses of every size.
            </p>
          </div>
          <div className="card">
            <div className="icon-box">
              <CompassIcon size={19} />
            </div>
            <div className="eyebrow" style={{ marginTop: 20 }}>Our vision</div>
            <p className="mission-grid__statement">
              To become a trusted digital partner for businesses looking to innovate, modernise and grow.
            </p>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="story-grid">
          <div>
            <div className="eyebrow">Our story</div>
            <h2 className="story-grid__title">Built for businesses that outgrew their website</h2>
            <p className="story-grid__p">
              Vyntrix Technologies was founded on a simple observation: most small and mid-sized businesses are sold
              either a template that never fits, or an enterprise project they never needed. Both end the same way —
              an expensive site nobody maintains.
            </p>
            <p className="story-grid__p">
              We work the other way round. We start with the commercial question — where enquiries come from, what
              slows a sale down, what the team can realistically manage — and only then decide what to build. Every
              engagement ends with a fixed scope, a written quotation and a launch date.
            </p>
            <p className="story-grid__p">
              The result is a small studio that behaves like an in-house team: one point of contact, plain language,
              and support that continues long after launch.
            </p>
          </div>
          <div className="card facts-card">
            {facts.map((f) => (
              <div className="facts-card__row" key={f.title}>
                <div className="icon-box">
                  <f.icon size={19} />
                </div>
                <div>
                  <div className="facts-card__title">{f.title}</div>
                  <div className="facts-card__body">{f.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-head">
          <div className="eyebrow">What we value</div>
          <h2>Four principles we do not negotiate on</h2>
        </div>
        <div className="values-grid">
          {values.map((v, i) => (
            <div className={"card" + (i === 0 ? " card--accent" : "")} key={v.title}>
              <h3 className="values-grid__title">{v.title}</h3>
              <p>{v.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <div className="section-head">
          <div className="eyebrow">Industries</div>
          <h2>Sectors we know well enough to be useful on day one</h2>
        </div>
        <div className="industries">
          {industries.map((i) => (
            <span key={i}>{i}</span>
          ))}
        </div>
      </div>

      <div className="section section--end">
        <div className="glass-cta">
          <h2>Talk to our team about your project</h2>
          <div className="actions">
            <Link to="/contact" className="btn btn-primary">
              Book a Call
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
