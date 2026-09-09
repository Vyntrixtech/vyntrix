import { useRef } from "react";
import { Link } from "react-router-dom";
import Seo, { graph, breadcrumbs, faqPage, organisation, SITE_URL } from "../components/Seo";
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
  BoltIcon,
  GrowthIcon,
  BadgeIcon,
  CompassIcon,
  ClockIcon,
  PinIcon,
} from "../components/Icons";
import "./Pricing.css";

const tiers = [
  {
    name: "Starter",
    icon: BoltIcon,
    body: "A professional presence, live quickly.",
    features: [
      "Professional website",
      "Mobile responsive design",
      "Contact form",
      "Basic SEO setup",
      "Social media integration",
      "SSL / security setup",
    ],
    cta: "Request a Quote",
    variant: "plain",
  },
  {
    name: "Business",
    icon: GrowthIcon,
    body: "For companies competing on search and credibility.",
    popular: true,
    lead: "Everything in Starter, plus",
    features: [
      "Advanced website & custom design",
      "Additional pages",
      "Google Business integration",
      "Analytics & advanced SEO setup",
      "Business email assistance",
    ],
    cta: "Request a Quote",
    variant: "accent",
  },
  {
    name: "Premium",
    icon: BadgeIcon,
    body: "Applications, e-commerce and bespoke functionality.",
    features: [
      "Custom website or application",
      "Advanced functionality",
      "E-commerce & payment integration",
      "Custom UI/UX",
      "API integration & priority support",
    ],
    cta: "Connect with Sales Team",
    variant: "plain",
  },
];

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
  { icon: CompassIcon, q: "Do I need to know what I want before we talk?", a: "No. Most clients arrive with a problem rather than a specification — we translate it into scope." },
  { icon: ClockIcon, q: "Is the first call really free?", a: "Yes — 30 minutes, no obligation, and you keep the outline plan whether or not you work with us." },
  { icon: WrenchIcon, q: "Can you work with my existing website?", a: "Usually. We audit what is there and tell you honestly whether to improve it or replace it." },
  { icon: PinIcon, q: "What if I am outside the UK?", a: "We work with clients internationally. Contracts and invoicing are UK-based; delivery is remote." },
];

/* A gentle 3D tilt plus a glow that tracks the cursor — the same "parallax"
   feel the Business card already implies with its fixed gradient, just now
   responsive. Kept small (a few degrees) so it reads as depth, not a gimmick. */
function PricingCard({ tier }) {
  const ref = useRef(null);

  function onMove(e) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    el.style.setProperty("--mx", `${(x * 100).toFixed(1)}%`);
    el.style.setProperty("--my", `${(y * 100).toFixed(1)}%`);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    el.style.transform = `perspective(900px) rotateX(${((0.5 - y) * 6).toFixed(2)}deg) rotateY(${((x - 0.5) * 8).toFixed(2)}deg) translateY(-4px)`;
  }
  function onLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--mx", "50%");
    el.style.setProperty("--my", "0%");
    el.style.transform = "";
  }

  return (
    <div
      ref={ref}
      className={"card pricing-card" + (tier.variant === "accent" ? " pricing-card--accent" : "")}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {tier.popular && <div className="pricing-card__badge">MOST POPULAR</div>}
      <div className="icon-box">
        <tier.icon size={19} />
      </div>
      <h2>{tier.name}</h2>
      <p className="pricing-card__body">{tier.body}</p>
      <div className="pricing-card__features">
        {tier.lead && <div className="pricing-card__lead">{tier.lead}</div>}
        {tier.features.map((f) => (
          <div className="pricing-card__feature" key={f}>
            <CheckIcon size={15} color={tier.variant === "accent" ? "#8bffc0" : "#4fe89a"} />
            {f}
          </div>
        ))}
      </div>
      <Link
        to="/contact"
        className={"btn btn-block " + (tier.variant === "accent" ? "btn-primary" : "btn-secondary")}
      >
        {tier.cta}
      </Link>
    </div>
  );
}

export default function Pricing() {
  return (
    <div>
      <Seo
        title="Website & App Pricing | Vyntrix Technologies"
        description="Starter, Business and Premium packages for UK businesses. Every project is quoted individually — fixed price, defined deliverables and a launch date."
        jsonLd={graph(
          {
            "@type": "OfferCatalog",
            name: "Website and application packages",
            url: `${SITE_URL}/pricing`,
            provider: { "@id": `${SITE_URL}/#organization` },
            itemListElement: tiers.map((t) => ({
              "@type": "Offer",
              name: t.name,
              description: t.body,
              // No price: every project is quoted individually, which is the
              // whole point of the page. A made-up figure here would contradict it.
              itemOffered: {
                "@type": "Service",
                name: `${t.name} package`,
                description: t.features.join(". ") + ".",
              },
            })),
          },
          faqPage(faqs),
          organisation,
          breadcrumbs([{ name: "Home", path: "/" }, { name: "Pricing", path: "/pricing" }])
        )}
      />
      <AuroraHero
        ground="radial-gradient(120% 100% at 50% -20%, #0e4a31 0%, #081c15 45%, #050907 80%)"
        blobs={[{ left: "50%", top: "-50%", width: "90%", height: "150%", color: "rgba(79,232,154,.28)", duration: "21s", center: true }]}
      >
        <div className="container pricing-hero">
          <div className="eyebrow">Pricing</div>
          <h1 className="pricing-hero__title">Clear scope, clear price</h1>
          <p className="pricing-hero__lede">Every package is a starting point. Anything can be added, removed or quoted individually.</p>
        </div>
      </AuroraHero>

      <div className="section">
        <div className="pricing-grid">
          {tiers.map((t) => (
            <PricingCard tier={t} key={t.name} />
          ))}
        </div>
      </div>

      <div className="section">
        <div className="card card--panel addons-card">
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
        </div>
      </div>

      <div className="section section--end">
        <div className="glass-cta">
          <h2>Not sure which package fits?</h2>
          <p style={{ maxWidth: "42ch" }}>Book a free demo and we'll recommend the smallest package that does the job properly.</p>
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
              <div className="icon-box">
                <f.icon size={19} />
              </div>
              <div className="pricing-faq__q">{f.q}</div>
              <p>{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
