import { useState } from "react";
import { Link } from "react-router-dom";
import AuroraHero from "../components/AuroraHero";
import { categories, posts } from "../data/posts";
import { ArrowRightIcon } from "../components/Icons";
import BlogCover from "../components/BlogCover";
import "./BlogIndex.css";

export default function BlogIndex() {
  const [active, setActive] = useState("All");
  const featured = posts.find((p) => p.featured) || posts[0];
  const rest = posts.filter((p) => p.slug !== featured.slug);
  const filtered = active === "All" ? rest : rest.filter((p) => p.category === active);

  return (
    <div>
      <AuroraHero
        ground="radial-gradient(120% 100% at 50% -20%, #0e4a31 0%, #081c15 45%, #050907 80%)"
        blobs={[{ left: "50%", top: "-50%", width: "80%", height: "130%", color: "rgba(79,232,154,.26)", duration: "22s", center: true }]}
      >
        <div className="container blog-hero">
          <div className="eyebrow">Insights</div>
          <h1 className="blog-hero__title">News and insights from our blog</h1>
        </div>
        <div className="container blog-filters">
          <button className={active === "All" ? "is-active" : ""} onClick={() => setActive("All")}>
            All
          </button>
          {categories.map((c) => (
            <button key={c} className={active === c ? "is-active" : ""} onClick={() => setActive(c)}>
              {c}
            </button>
          ))}
        </div>
      </AuroraHero>

      <div className="section">
        <Link to={`/blog/${featured.slug}`} className="card featured-post">
          <div className="featured-post__art">
              <BlogCover category={featured.category} />
            </div>
          <div className="featured-post__body">
            <span className="pill-tag">
              {featured.category} · {featured.readTime}
            </span>
            <h2>{featured.title}</h2>
            <p>{featured.excerpt}</p>
            <span className="service-link">
              Read article <ArrowRightIcon size={15} />
            </span>
          </div>
        </Link>
      </div>

      <div className="section section--end">
        <div className="blog-grid">
          {filtered.map((p) => (
            <Link to={`/blog/${p.slug}`} key={p.slug} className="card blog-card">
              <div className="blog-card__art">
                <BlogCover category={p.category} label={false} />
              </div>
              <div className="blog-card__body">
                <span className="blog-card__category">{p.category.toUpperCase()}</span>
                <h3>{p.title}</h3>
                <p>{p.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
        {filtered.length === 0 && <p className="blog-empty">No articles in this category yet.</p>}
      </div>
    </div>
  );
}
