import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/vtech-logo.png";
import "./AdminDashboard.css";

const navSections = [
  { label: "Dashboard", active: true },
  { label: "Enquiries", badge: 12, active: false, highlighted: true },
  { label: "Pages & Content" },
  { label: "Services" },
  { label: "Portfolio" },
  { label: "Packages & Pricing" },
  { label: "Testimonials" },
  { label: "Media" },
  { label: "SEO" },
  { label: "Contact Details" },
  { label: "Users" },
  { label: "Settings" },
];

const stats = [
  { label: "New enquiries", value: "12", accent: true },
  { label: "This month", value: "37" },
  { label: "Published projects", value: "8" },
  { label: "Open support plans", value: "14" },
];

const statusFilters = ["All", "New", "Replied", "Quoted", "Closed"];

const enquiries = [
  { name: "Amelia Hart", company: "Hart & Co Ltd", service: "Mobile App Development", budget: "£5–10k", received: "2 hrs ago", status: "New" },
  { name: "Daniel Reyes", company: "Reyes Property Group", service: "Website Development", budget: "£2–5k", received: "Today", status: "New" },
  { name: "Priya Nair", company: "—", service: "E-commerce Development", budget: "Not sure", received: "Yesterday", status: "Replied" },
  { name: "Jordan Ellis", company: "Ellis Studio Ltd", service: "Graphic Design & Branding", budget: "£1–2k", received: "2 days ago", status: "Quoted" },
  { name: "Morgan Blake", company: "Blake & Partners", service: "Maintenance & Support", budget: "Monthly", received: "3 days ago", status: "Closed" },
];

const statusStyles = {
  New: "is-new",
  Replied: "is-replied",
  Quoted: "is-quoted",
  Closed: "is-closed",
};

const quickActions = ["Add portfolio project", "Add testimonial", "Edit package pricing", "Update contact details"];

export default function AdminDashboard() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(enquiries[0]);

  const filtered = useMemo(
    () => (filter === "All" ? enquiries : enquiries.filter((e) => e.status === filter)),
    [filter]
  );

  return (
    <div className="admin">
      <aside className="admin__sidebar">
        <div className="admin__brand">
          <img src={logo} alt="VTech" height={26} />
          <span className="admin__brand-tag">ADMIN</span>
        </div>
        <nav className="admin__nav">
          {navSections.map((item) => (
            <div
              key={item.label}
              className={
                "admin__nav-item" +
                (item.active ? " is-active" : "") +
                (item.highlighted ? " is-highlighted" : "")
              }
            >
              {item.label}
              {item.badge != null && <span className="admin__nav-badge">{item.badge}</span>}
            </div>
          ))}
        </nav>
      </aside>

      <div className="admin__main">
        <div className="admin__topbar">
          <div className="admin__topbar-title">Dashboard</div>
          <div className="admin__topbar-actions">
            <Link to="/" className="btn btn-secondary btn-sm">
              View site
            </Link>
            <div className="admin__avatar">AB</div>
          </div>
        </div>

        <div className="admin__stats">
          {stats.map((s) => (
            <div className={"card" + (s.accent ? " card--accent" : "")} key={s.label}>
              <div className="admin__stat-label">{s.label}</div>
              <div className={"admin__stat-value" + (s.accent ? " is-accent" : "")}>{s.value}</div>
            </div>
          ))}
        </div>

        <div className="admin__section">
          <div className="card admin__table-card">
            <div className="admin__table-head">
              <div className="admin__table-title">Enquiries</div>
              <div className="admin__filter">
                {statusFilters.map((f) => (
                  <button key={f} className={filter === f ? "is-active" : ""} onClick={() => setFilter(f)}>
                    {f}
                  </button>
                ))}
              </div>
            </div>
            <div className="admin__table-header-row">
              <span>NAME</span>
              <span>COMPANY</span>
              <span>SERVICE</span>
              <span>BUDGET</span>
              <span>RECEIVED</span>
              <span>STATUS</span>
            </div>
            {filtered.map((e) => (
              <div
                className={"admin__table-row" + (selected === e ? " is-selected" : "")}
                key={e.name}
                onClick={() => setSelected(e)}
              >
                <span className="admin__table-name">{e.name}</span>
                <span>{e.company}</span>
                <span>{e.service}</span>
                <span>{e.budget}</span>
                <span>{e.received}</span>
                <span className={"admin__status " + statusStyles[e.status]}>{e.status.toUpperCase()}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="admin__section admin__section--split">
          <div className="card admin__detail-card">
            <div className="admin__detail-head">
              <div className="admin__detail-title">Enquiry detail</div>
              <div className="admin__detail-actions">
                <button className="btn btn-secondary btn-sm">Mark replied</button>
                <button className="btn btn-primary btn-sm">Send quote</button>
              </div>
            </div>
            <div className="admin__detail-body">
              <div>
                <span className="admin__detail-dim">Email · </span>
                {selected.name.toLowerCase().replace(" ", ".")}@example.co.uk
                <span className="admin__detail-dim"> · Phone · </span>+44 0000 000000
              </div>
              <div>
                <span className="admin__detail-dim">Service · </span>
                {selected.service}
                <span className="admin__detail-dim"> · Budget · </span>
                {selected.budget}
              </div>
              <div className="admin__detail-description">
                Project description text as submitted by the enquirer, shown in full with the ability to copy or
                forward it by email.
              </div>
            </div>
          </div>
          <div className="card admin__actions-card">
            <div className="admin__detail-title">Quick actions</div>
            <div className="admin__actions-list">
              {quickActions.map((a) => (
                <div key={a}>{a}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
