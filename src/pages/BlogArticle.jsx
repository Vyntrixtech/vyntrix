import { Link, useParams } from "react-router-dom";
import AuroraHero from "../components/AuroraHero";
import { getPost, relatedPosts } from "../data/posts";
import { ArrowRightIcon } from "../components/Icons";
import BlogCover from "../components/BlogCover";
import NotFound from "./NotFound";
import "./BlogArticle.css";

export default function BlogArticle() {
  const { slug } = useParams();
  const post = getPost(slug);

  if (!post) return <NotFound />;

  const related = relatedPosts(post);

  return (
    <div>
      <AuroraHero
        ground="radial-gradient(110% 80% at 50% -25%, #0d4530 0%, #081c15 45%, #050907 80%)"
        blobs={[{ left: "50%", top: "-55%", width: "70%", height: "130%", color: "rgba(79,232,154,.24)", duration: "20s", center: true }]}
      >
        <div className="container article-crumb">
          <Link to="/">Home</Link> / <Link to="/blog">Insights</Link> / <span>{post.category}</span>
        </div>
        <div className="container article-hero">
          <span className="pill-tag">{post.category}</span>
          <h1 className="article-hero__title">{post.title}</h1>
          <div className="article-hero__meta">
            <span>By {post.author}</span>
            <span>·</span>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime} read</span>
          </div>
        </div>
      </AuroraHero>

      <div className="container">
        <div className="article-art">
          <BlogCover category={post.category} />
        </div>
      </div>

      <div className="container article-layout">
        <div className="article-toc">
          <div className="article-toc__label">ON THIS PAGE</div>
          <div className="article-toc__list">
            <span className="is-active">Introduction</span>
            {post.sections.map((s) => (
              <span key={s.heading}>{s.heading}</span>
            ))}
            <span>What this means for you</span>
          </div>
        </div>

        <div className="article-body">
          <p className="article-body__lede">{post.intro}</p>
          {post.sections.map((s) => (
            <div key={s.heading}>
              <h2>{s.heading}</h2>
              <p>{s.body}</p>
            </div>
          ))}
          {post.quote && (
            <div className="article-quote">
              <p>{post.quote}</p>
            </div>
          )}
          <h3>What this means for you</h3>
          <p>{post.closing}</p>

          <Link to="/contact" className="article-cta">
            <div>
              <div className="article-cta__title">Have a project in mind? Let's talk.</div>
              <div className="article-cta__sub">Free quotation, no obligation.</div>
            </div>
            <span className="btn btn-primary btn-sm">Get a Free Quote</span>
          </Link>
        </div>

        <div className="article-side">
          <div className="article-toc__label">RELATED</div>
          <div className="article-related">
            {related.map((r) => (
              <Link to={`/blog/${r.slug}`} key={r.slug} className="article-related__item">
                <div className="article-related__art">
                  <BlogCover category={r.category} label={false} />
                </div>
                <div className="article-related__title">{r.title}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="section section--end">
        <div className="glass-cta">
          <h2>Want more like this?</h2>
          <div className="actions">
            <Link to="/blog" className="btn btn-primary">
              Browse All Articles <ArrowRightIcon size={16} color="#04140c" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
