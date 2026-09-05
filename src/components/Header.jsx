import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ArrowRightIcon } from "./Icons";
import "./Header.css";

// Served straight from /public, so the URL is identical in the pre-rendered
// HTML and in the hydrated app. A bundled import would be content-hashed.
const logo = "/vyntrix-technologies-logo.png";

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/pricing", label: "Pricing" },
  { to: "/blog", label: "Blog" },
];

export default function Header() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <div
          className="site-header__brand"
          onClick={() => {
            navigate("/");
            setOpen(false);
          }}
        >
          <img src={logo} alt="Vyntrix Technologies" height={32} />
        </div>

        <nav className="site-header__nav">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) => "site-header__link" + (isActive ? " is-active" : "")}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="site-header__actions">
          <button className="btn btn-primary btn-sm site-header__cta" onClick={() => navigate("/contact")}>
            Book a Call
            <ArrowRightIcon size={15} color="#04140c" />
          </button>
          <button
            className={"site-header__burger" + (open ? " is-open" : "")}
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      {open && (
        <div className="site-header__mobile">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              onClick={() => setOpen(false)}
              className={({ isActive }) => "site-header__mobile-link" + (isActive ? " is-active" : "")}
            >
              {item.label}
            </NavLink>
          ))}
          <button
            className="btn btn-primary btn-block"
            onClick={() => {
              navigate("/contact");
              setOpen(false);
            }}
          >
            Book a Call
          </button>
        </div>
      )}
    </header>
  );
}
