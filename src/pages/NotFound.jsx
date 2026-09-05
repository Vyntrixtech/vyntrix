import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import "./NotFound.css";

export default function NotFound() {
  return (
    <div className="notfound aurora">
      <Seo title="Page not found | Vyntrix Technologies" description="The page you are looking for has moved or no longer exists." noindex />
      <div
        className="aurora-ground"
        style={{ background: "radial-gradient(120% 100% at 50% 10%, #0c3f2b 0%, #071913 45%, #050907 80%)" }}
      />
      <div
        className="aurora-blob"
        style={{
          left: "50%",
          top: "20%",
          width: "70%",
          height: "80%",
          transform: "translateX(-50%)",
          background: "radial-gradient(closest-side, rgba(79,232,154,.28), transparent 70%)",
          animationDuration: "14s",
        }}
      />
      <div className="notfound__inner">
        <svg viewBox="0 0 720 300" className="notfound__art">
          <defs>
            <radialGradient id="vt404g" cx="50%" cy="50%">
              <stop offset="0" stopColor="#8bffc0" stopOpacity=".95" />
              <stop offset="1" stopColor="#4fe89a" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="vt404w" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#4fe89a" stopOpacity=".1" />
              <stop offset=".5" stopColor="#8bffc0" stopOpacity=".9" />
              <stop offset="1" stopColor="#4fe89a" stopOpacity=".1" />
            </linearGradient>
          </defs>
          <g stroke="rgba(255,255,255,.14)" fill="none" strokeWidth="3" strokeLinecap="round">
            <path d="M0 120c90 0 120 40 190 40s90-60 150-60" />
            <path d="M0 190c80 0 130-30 200-30s70 40 140 40" />
            <path d="M720 110c-90 0-120 44-190 44s-90-64-150-64" />
            <path d="M720 186c-80 0-130-26-200-26s-70 44-140 44" />
          </g>
          <g stroke="url(#vt404w)" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeDasharray="90 260">
            <path d="M0 120c90 0 120 40 190 40s90-60 150-60" style={{ animation: "vt-dash 6s linear infinite" }} />
            <path d="M720 186c-80 0-130-26-200-26s-70 44-140 44" style={{ animation: "vt-dash 7.5s linear infinite reverse" }} />
          </g>
          <g stroke="rgba(139,255,192,.6)" strokeWidth="2.6" strokeLinecap="round" fill="none" style={{ animation: "vt-flicker 3.4s ease-in-out infinite" }}>
            <path d="M340 100 356 118 340 136" />
            <path d="M380 100 364 118 380 136" />
          </g>
          <circle cx="360" cy="150" r="86" fill="url(#vt404g)" opacity=".55" style={{ animation: "vt-breathe 3.6s ease-in-out infinite" }} />
          <g fill="#8bffc0">
            <circle cx="330" cy="112" r="3" style={{ animation: "vt-spark 2.2s ease-in-out infinite" }} />
            <circle cx="392" cy="128" r="2.4" style={{ animation: "vt-spark 2.2s .5s ease-in-out infinite" }} />
            <circle cx="352" cy="184" r="2.8" style={{ animation: "vt-spark 2.2s 1s ease-in-out infinite" }} />
            <circle cx="402" cy="176" r="2" style={{ animation: "vt-spark 2.6s 1.4s ease-in-out infinite" }} />
          </g>
          <g fill="none" stroke="rgba(79,232,154,.5)" strokeWidth="1.4">
            <circle cx="360" cy="150" r="120" style={{ animation: "vt-orbit 40s linear infinite", transformOrigin: "360px 150px" }} />
          </g>
        </svg>
        <div className="notfound__code">404</div>
        <h1 className="notfound__title">This wire came loose</h1>
        <p className="notfound__lede">
          The page you're after has moved, been renamed, or never existed. The good news: everything else is still
          plugged in.
        </p>
        <div className="notfound__actions">
          <Link to="/" className="btn btn-primary">
            Back to Home
          </Link>
          <Link to="/services" className="btn btn-secondary">
            Browse Services
          </Link>
          <Link to="/contact" className="btn btn-secondary">
            Book a Call
          </Link>
        </div>
      </div>
    </div>
  );
}
