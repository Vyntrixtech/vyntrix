import { Link } from "react-router-dom";
import AuroraHero from "../components/AuroraHero";
import {
  CheckIcon,
  ShieldCheckIcon,
  BackupIcon,
  SupportIcon,
  EditIcon,
  GaugeIcon,
  ServerIcon,
  DomainIcon,
  WrenchIcon,
} from "../components/Icons";
import "./Pricing.css";

const plan = {
  name: "Custom Pricing",
  body: "Every project is scoped and quoted individually — websites, applications, e-commerce and bespoke functionality.",
  features: [
    "Custom website or application",
    "Advanced functionality",
    "E-commerce & payment integration",
    "Custom UI/UX",
    "API integration & priority support",
  ],
  cta: "Connect with Sales Team",
};

const addOns = [
  { icon: ShieldCheckIcon, label: "Website updates" },
  { icon: ShieldCheckIcon, label: "Security updates" },
  { icon: BackupIcon, label: "Backups" },
  { icon: SupportIcon, label: "Technical support" },
  { icon: EditIcon, label: "Content changes" },
  { icon: GaugeIcon, label: "Performance monitoring" },
  { icon: ServerIcon, label: "Hosting management" },
  { icon: DomainIcon, label: "Domain management" },
  { icon: WrenchIcon, label: "Application maintenance" },
];

const nextSteps = [
  { n: "01", title: "We read your brief", body: "Within one working day you will hear back from a person — not an autoresponder — with a suggested call time." },
  { n: "02", title: "A 30-minute call", body: "We walk through layouts and features built around your business, and answer the awkward questions about cost and timing." },
  { n: "03", title: "A written quotation", body: "Fixed price, defined deliverables and a launch date. Say yes and we start; say no and you keep the plan." },
];

const faqs = [
  { q: "Do I need to know what I want before we talk?", a: "No. Most clients arrive with a problem rather than a specification — we translate it into scope." },
  { q: "Is the first call really free?", a: "Yes — 30 minutes, no obligation, and you keep the outline plan whether or not you work with us." },
  { q: "Can you work with my existing website?", a: "Usually. We audit what is there and tell you honestly whether to improve it or replace it." },
  { q: "What if I am outside the UK?", a: "We work with clients internationally. Contracts and invoicing are UK-based; delivery is remote." },
];

export default function Pricing() {
  return (
    <div>
      <AuroraHero
        ground="radial-gradient(120% 100% at 50% -20%, #0e4a31 0%, #081c15 45%, #050907 80%)"
        blobs={[{ left: "50%", top: "-50%", width: "90%", height: "150%", color: "rgba(79,232,154,.28)", duration: "21s", center: true }]}
      >
        <div className="container pricing-hero">
          <div className="eyebrow">Pricing</div>
          <h1 className="pricing-hero__title">Clear scope, clear price</h1>
          <p className="pricing-hero__lede">No fixed packages — every project is scoped and quoted around what your business actually needs.</p>
        </div>
      </AuroraHero>

      <div className="section">
        <div className="pricing-grid">
          <div className="card pricing-card pricing-card--accent">
            <h3>{plan.name}</h3>
            <p className="pricing-card__body">{plan.body}</p>
            <div className="pricing-card__features">
              {plan.features.map((f) => (
                <div className="pricing-card__feature" key={f}>
                  <CheckIcon size={15} color="#8bffc0" />
                  {f}
                </div>
              ))}
            </div>
            <Link to="/contact" className="btn btn-block btn-primary">
              {plan.cta}
            </Link>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="card addons-card">
          <h2>We keep your digital business running</h2>
          <p>Monthly support and maintenance, billed as a plan rather than ad-hoc hours.</p>
          <div className="addons-grid">
            {addOns.map((a) => (
              <span key={a.label}>
                <a.icon size={15} />
                {a.label}
              </span>
            ))}
          </div>
          <Link to="/contact" className="btn btn-secondary" style={{ marginTop: 26 }}>
            Ask About Support Plans
          </Link>
        </div>
      </div>

      <div className="section section--end">
        <div className="glass-cta">
          <h2>Not sure what your project needs?</h2>
          <p style={{ maxWidth: "42ch" }}>Book a free demo and we'll scope the smallest build that does the job properly.</p>
          <div className="actions">
            <Link to="/contact" className="btn btn-primary">
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-head">
          <div className="eyebrow">What happens next</div>
          <h2>Three steps from enquiry to launch date</h2>
        </div>
        <div className="next-steps">
          {nextSteps.map((s, i) => (
            <div className={"card" + (i === 0 ? " card--accent" : "")} key={s.n}>
              <div className={"icon-box" + (i === 0 ? "" : "")} style={i === 0 ? { background: "rgba(79,232,154,.2)", color: "var(--ac2)" } : { background: "rgba(255,255,255,.06)", color: "var(--mid)" }}>
                {s.n}
              </div>
              <h3 className="next-steps__title">{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="section section--end">
        <div className="section-head">
          <div className="eyebrow">Questions</div>
          <h2>Before you send the form</h2>
        </div>
        <div className="pricing-faq">
          {faqs.map((f) => (
            <div className="card" key={f.q}>
              <div className="pricing-faq__q">{f.q}</div>
              <p>{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
