import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Seo, { graph, organisation, localBusiness, breadcrumbs } from "../components/Seo";
import AuroraHero from "../components/AuroraHero";
import { services } from "../data/services";
import { MailIcon, PhoneIcon, PinIcon, ClockIcon, ChevronDownIcon } from "../components/Icons";
import "./Contact.css";

const budgets = ["Under £1k", "£1–2k", "£2–5k", "£5–10k", "£10k+", "Not sure"];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    description: "",
    consent: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const tiltRef = useRef(null);

  function update(key, value) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  // This form previously did nothing but flip a flag and tell the visitor
  // their enquiry had been received. It hadn't been: nothing was sent
  // anywhere, and every lead was discarded silently.
  //
  // The site is static, so there is no server of our own to post to. Set
  // VITE_CONTACT_ENDPOINT to a form backend and enquiries are posted there.
  // With no endpoint configured we hand the enquiry to the visitor's mail
  // client addressed to the enquiries inbox — less slick, but it actually
  // arrives, and the confirmation we show says what really happened.
  const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT;

  function enquiryText() {
    return [
      `Name: ${form.name}`,
      `Company: ${form.company || "—"}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone || "—"}`,
      `Service: ${form.service}`,
      `Budget: ${form.budget || "—"}`,
      "",
      form.description,
    ].join("\n");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!ENDPOINT) {
      window.location.href =
        `mailto:info@vyntrixtechnologies.co.uk` +
        `?subject=${encodeURIComponent(`Website enquiry — ${form.name}`)}` +
        `&body=${encodeURIComponent(enquiryText())}`;
      setSubmitted(true);
      return;
    }

    setSending(true);
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error(String(res.status));
      setSubmitted(true);
    } catch {
      setError(
        "We could not send that just now. Please email info@vyntrixtechnologies.co.uk or call 0207877897 and we will pick it up straight away."
      );
    } finally {
      setSending(false);
    }
  }

  function onTilt(e) {
    const host = e.currentTarget;
    const el = tiltRef.current;
    if (!el) return;
    const r = host.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `rotateX(${(-y * 16).toFixed(2)}deg) rotateY(${(x * 26).toFixed(2)}deg)`;
  }
  function resetTilt() {
    if (tiltRef.current) tiltRef.current.style.transform = "rotateX(0deg) rotateY(0deg)";
  }

  return (
    <div>
      <Seo
        title="Contact Us | Free Project Quote | Vyntrix Technologies"
        description="Tell us about your project and get a written quotation within one working day. London-based, working with clients across the UK and internationally."
        jsonLd={graph(
          localBusiness,
          organisation,
          breadcrumbs([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])
        )}
      />
      <AuroraHero
        ground="radial-gradient(120% 100% at 30% -20%, #0e4a31 0%, #081c15 45%, #050907 80%)"
        blobs={[{ left: "-8%", top: "-50%", width: "60%", height: "150%", color: "rgba(79,232,154,.30)", duration: "20s" }]}
      >
        <div className="container contact-hero">
          <div className="eyebrow">Contact</div>
          <h1 className="contact-hero__title">Tell us about your project</h1>
          <p className="contact-hero__lede">
            Answer as much as you can — we'll come back with a written quotation and a suggested next step.
          </p>
        </div>
      </AuroraHero>

      <div className="container contact-grid">
        <div className="card card--panel contact-form-card">
          {submitted ? (
            <div className="contact-success">
              {ENDPOINT ? (
                <>
                  <div className="contact-success__title">Thank you — your enquiry has been received.</div>
                  <p>A member of the team will reply within one working day.</p>
                </>
              ) : (
                <>
                  <div className="contact-success__title">Your enquiry is ready to send.</div>
                  <p>
                    We have opened it in your email app, addressed to{" "}
                    <a href="mailto:info@vyntrixtechnologies.co.uk">info@vyntrixtechnologies.co.uk</a> — press send
                    and we will reply within one working day. If nothing opened, email us directly or call{" "}
                    <a href="tel:0207877897">0207877897</a>.
                  </p>
                </>
              )}
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="contact-fields">
                <div className="field">
                  <label>Full name *</label>
                  <input required value={form.name} onChange={(e) => update("name", e.target.value)} />
                </div>
                <div className="field">
                  <label>Company name</label>
                  <input value={form.company} onChange={(e) => update("company", e.target.value)} />
                </div>
                <div className="field">
                  <label>Email address *</label>
                  <input required type="email" value={form.email} onChange={(e) => update("email", e.target.value)} />
                </div>
                <div className="field">
                  <label>Phone number</label>
                  <input value={form.phone} onChange={(e) => update("phone", e.target.value)} />
                </div>
                <div className="field">
                  <label>Service required *</label>
                  <div className="field-select-wrap">
                    <select required value={form.service} onChange={(e) => update("service", e.target.value)}>
                      <option value="" disabled>
                        Select a service
                      </option>
                      {services.map((s) => (
                        <option key={s.slug} value={s.name}>
                          {s.name}
                        </option>
                      ))}
                      <option value="Other">Other</option>
                    </select>
                    <ChevronDownIcon size={15} color="#7c9689" />
                  </div>
                </div>
                <div className="field">
                  <label>Estimated budget</label>
                  <div className="field-select-wrap">
                    <select value={form.budget} onChange={(e) => update("budget", e.target.value)}>
                      <option value="" disabled>
                        Select a range
                      </option>
                      {budgets.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                    <ChevronDownIcon size={15} color="#7c9689" />
                  </div>
                </div>
                <div className="field" style={{ gridColumn: "span 2" }}>
                  <label>Project description *</label>
                  <textarea
                    required
                    value={form.description}
                    onChange={(e) => update("description", e.target.value)}
                  />
                </div>
              </div>

              <label className="contact-consent">
                <input
                  type="checkbox"
                  required
                  checked={form.consent}
                  onChange={(e) => update("consent", e.target.checked)}
                />
                <span>
                  I agree to Vyntrix Technologies contacting me about this enquiry. See our <Link to="/privacy">Privacy Policy</Link>.
                </span>
              </label>

              {error && (
                <p className="contact-error" role="alert">
                  {error}
                </p>
              )}

              <div className="contact-submit-row">
                <button type="submit" className="btn btn-primary" disabled={sending}>
                  {sending ? "Sending…" : "Send Enquiry"}
                </button>
                <span className="contact-submit-note">We reply within one working day.</span>
              </div>
            </form>
          )}
        </div>

        <div className="contact-side">
          <div className="card card--accent card--panel contact-details">
            <div className="contact-details__row">
              <div className="icon-box">
                <MailIcon size={17} />
              </div>
              <div>
                <div className="contact-details__label">EMAIL</div>
                <a href="mailto:info@vyntrixtechnologies.co.uk">info@vyntrixtechnologies.co.uk</a>
              </div>
            </div>
            <div className="contact-details__row">
              <div className="icon-box">
                <PhoneIcon size={17} />
              </div>
              <div>
                <div className="contact-details__label">TELEPHONE</div>
                <a href="tel:0207877897">0207877897</a>
              </div>
            </div>
            <div className="contact-details__row">
              <div className="icon-box">
                <PinIcon size={17} />
              </div>
              <div>
                <div className="contact-details__label">ADDRESS</div>
                Business centre 246-250 Romford Road
                <br />
                London, England, E7 9HZ
              </div>
            </div>
            <div className="contact-details__row">
              <div className="icon-box">
                <ClockIcon size={17} />
              </div>
              <div>
                <div className="contact-details__label">HOURS</div>
                Mon–Fri, 9:00–18:00
              </div>
            </div>
          </div>

          <div className="contact-tilt" onMouseMove={onTilt} onMouseLeave={resetTilt}>
            <div className="contact-tilt__glow" />
            <div className="contact-tilt__stage">
              <div className="contact-tilt__scene" ref={tiltRef}>
                <div className="contact-tilt__back" />
                <div className="contact-tilt__main">
                  <div className="contact-tilt__dots">
                    <span style={{ background: "#4fe89a" }} />
                    <span />
                    <span />
                  </div>
                  <div className="line line--accent" style={{ width: "70%" }} />
                  <div className="line" style={{ width: "46%" }} />
                  <div className="line" style={{ width: "58%" }} />
                  <div className="contact-tilt__cta" />
                </div>
                <div className="contact-tilt__side">
                  <div className="contact-tilt__side-top" />
                  <div className="line" style={{ width: "70%" }} />
                  <div className="line" style={{ width: "52%" }} />
                  <div className="contact-tilt__side-cta" />
                </div>
                <div className="contact-tilt__live">
                  <span /> LIVE BUILD
                </div>
              </div>
            </div>
            <div className="contact-tilt__hint">Move your cursor over the build</div>
          </div>
        </div>
      </div>
    </div>
  );
}
