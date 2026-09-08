import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./EnquirySent.css";

// Deterministic burst — hand-placed rather than randomised so it reads as a
// designed moment and renders identically every time. Angle in degrees,
// distance in px, delay in ms.
const SPARKS = [
  { a: -90, d: 108, s: 9, c: "a", t: 0 },
  { a: -58, d: 96, s: 6, c: "b", t: 40 },
  { a: -26, d: 116, s: 8, c: "a", t: 20 },
  { a: 6, d: 88, s: 5, c: "c", t: 70 },
  { a: 34, d: 110, s: 9, c: "b", t: 30 },
  { a: 62, d: 94, s: 6, c: "a", t: 60 },
  { a: 96, d: 104, s: 7, c: "c", t: 10 },
  { a: 128, d: 90, s: 5, c: "a", t: 80 },
  { a: 156, d: 112, s: 8, c: "b", t: 45 },
  { a: -160, d: 98, s: 6, c: "c", t: 25 },
  { a: -128, d: 106, s: 7, c: "a", t: 65 },
  { a: -112, d: 84, s: 5, c: "b", t: 15 },
];

/**
 * The confirmation a visitor sees after sending an enquiry.
 *
 * `delivered` distinguishes "we sent it for you" from "we handed it to your
 * mail app" — the copy must not claim delivery the site did not perform.
 */
export default function EnquirySent({ delivered, name, service, mailbox, phone, onClose }) {
  const panelRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    const previous = document.activeElement;
    closeRef.current?.focus();

    const onKey = (e) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      // Keep tabbing inside the dialog while it is open.
      if (e.key !== "Tab") return;
      const focusable = panelRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
      previous?.focus?.();
    };
  }, [onClose]);

  const firstName = (name || "").trim().split(/\s+/)[0];

  return (
    <div className="sent-overlay" onClick={onClose}>
      <div
        className="sent-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="sent-title"
        ref={panelRef}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sent-burst" aria-hidden="true">
          {SPARKS.map((s, i) => (
            <span
              key={i}
              className={`sent-spark is-${s.c}`}
              style={{
                "--a": `${s.a}deg`,
                "--d": `${s.d}px`,
                "--s": `${s.s}px`,
                "--t": `${s.t}ms`,
              }}
            />
          ))}
          <div className="sent-ring" />
          <div className="sent-ring sent-ring--2" />
          <div className="sent-tick">
            <svg viewBox="0 0 52 52" width="46" height="46" fill="none" aria-hidden="true">
              <path
                d="M14 27.5 22.5 36 38 18"
                stroke="#04140c"
                strokeWidth="4.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                pathLength="1"
              />
            </svg>
          </div>
        </div>

        <h2 className="sent-title" id="sent-title">
          {delivered ? "Enquiry sent" : "Enquiry ready to send"}
        </h2>

        <p className="sent-body">
          {delivered ? (
            <>
              Thanks{firstName ? `, ${firstName}` : ""} — it has landed in our inbox
              {service ? ` under ${service}` : ""}. A person reads every one, and you will hear back within one
              working day.
            </>
          ) : (
            <>
              We have opened it in your email app, addressed to <a href={`mailto:${mailbox}`}>{mailbox}</a>. Press
              send and we will reply within one working day.
            </>
          )}
        </p>

        <div className="sent-steps">
          <div className="sent-step is-done">
            <span className="sent-step__dot" />
            <span>{delivered ? "Enquiry received" : "Enquiry prepared"}</span>
          </div>
          <div className="sent-step">
            <span className="sent-step__dot" />
            <span>We read it and reply within one working day</span>
          </div>
          <div className="sent-step">
            <span className="sent-step__dot" />
            <span>A 30-minute call, then a written quotation</span>
          </div>
        </div>

        <div className="sent-actions">
          <Link to="/blog" className="btn btn-primary btn-sm">
            Read our guides while you wait
          </Link>
          <button type="button" className="btn btn-secondary btn-sm" onClick={onClose} ref={closeRef}>
            Close
          </button>
        </div>

        <p className="sent-foot">
          In a hurry? Call <a href={`tel:${phone}`}>{phone}</a>
        </p>
      </div>
    </div>
  );
}
