import { Link } from "react-router-dom";
import { services } from "../data/services";
import "./Footer.css";

const logo = "/vyntrix-technologies-logo.png";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__grid">
        <div>
          <Link to="/">
            <img src={logo} alt="Vyntrix Technologies" height={30} />
          </Link>
          <p className="site-footer__blurb">
            UK-based IT and digital solutions company building websites, applications and brands for businesses
            worldwide.
          </p>
        </div>

        <div>
          <div className="site-footer__heading">Services</div>
          <div className="site-footer__links">
            {services.map((s) => (
              <Link key={s.slug} to={`/services/${s.slug}`}>
                {s.name}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="site-footer__heading">Company</div>
          <div className="site-footer__links">
            <Link to="/about">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
        </div>

        <div>
          <div className="site-footer__heading">Contact</div>
          <div className="site-footer__links">
            <a href="mailto:info@vyntrixtechnologies.co.uk">info@vyntrixtechnologies.co.uk</a>
            <a href="tel:0207877897">0207877897</a>
            <span>
              Business centre 246-250 Romford Road,
              <br />
              London, England, E7 9HZ
            </span>
            <div className="site-footer__legal">
              <a href="#">Privacy</a>
              <span>·</span>
              <a href="#">Cookies</a>
              <span>·</span>
              <a href="#">Terms</a>
            </div>
          </div>
        </div>
      </div>

      <div className="site-footer__bottom">
        <span>© Vyntrix Technologies Limited · Registered in England &amp; Wales</span>
        <span>All Rights Reserved</span>
      </div>
    </footer>
  );
}
