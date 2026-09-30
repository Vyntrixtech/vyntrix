import { useState } from "react";

/** One question in an FAQ list. The answer stays in the HTML (hidden until opened), so crawlers see it. */
export default function FaqRow({ q, a, id }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={"faq-row" + (open ? " is-open" : "")}>
      <button
        type="button"
        className="faq-row__head"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((v) => !v)}
      >
        <span>{q}</span>
        <span className="faq-row__toggle" aria-hidden="true">
          {open ? "−" : "+"}
        </span>
      </button>
      <p className="faq-row__body" id={id} hidden={!open}>
        {a}
      </p>
    </div>
  );
}
