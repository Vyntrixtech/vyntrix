import { Link, useParams } from "react-router-dom";
import Seo, { graph, breadcrumbs, organisation, SITE_URL } from "../components/Seo";
import AuroraHero from "../components/AuroraHero";
import { getPost, relatedPosts } from "../data/posts";
import { getService } from "../data/services";
import { ArrowRightIcon } from "../components/Icons";
import PostArt from "../components/PostArt";
import NotFound from "./NotFound";
import "./BlogArticle.css";

/** "Speed is a business number" -> "speed-is-a-business-number", for jump links. */
function anchor(text) {
  return text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export default function BlogArticle() {
  const { slug } = useParams();
  const post = getPost(slug);

  if (!post) return <NotFound />;

  const related = relatedPosts(post);
  const relatedService = post.relatedService ? getService(post.relatedService) : null;

  return (
    <div>
      <Seo
        // The title tag is written for the SERP — short, keyword-led, no
        // truncation. The editorial headline stays as the H1 on the page.
        title={post.metaTitle || `${post.title} | Vyntrix Technologies`}
        description={post.excerpt}
        jsonLd={graph(
          {
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            articleSection: post.category,
            datePublished: post.isoDate,
            dateModified: post.isoModified || post.isoDate,
            wordCount: post.wordCount,
            author: { "@type": "Organization", name: post.author, url: `${SITE_URL}/about/` },
            image: `${SITE_URL}/og-cover.png`,
            inLanguage: "en-GB",
            publisher: { "@id": `${SITE_URL}/#organization` },
            mainEntityOfPage: `${SITE_URL}/blog/${post.slug}/`,
          },
          organisation,
          breadcrumbs([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ])
        )}
      />
      <AuroraHero
        ground="radial-gradient(110% 80% at 50% -25%, #0d4530 0%, #081c15 45%, #050907 80%)"
        blobs={[{ left: "50%", top: "-55%", width: "70%", height: "130%", color: "rgba(79,232,154,.24)", duration: "20s", center: true }]}
      >
        <div className="container article-crumb">
          <Link to="/">Home</Link> / <Link to="/blog/">Blog</Link> / <span>{post.category}</span>
        </div>
        <div className="container article-hero">
          <span className="pill-tag">{post.category}</span>
          <h1 className="article-hero__title">{post.title}</h1>
          <div className="article-hero__meta">
            <span>By {post.author}</span>
            <span>·</span>
            <time dateTime={post.isoDate}>{post.date}</time>
            <span>·</span>
            <span>{post.readTime} read</span>
          </div>
        </div>
      </AuroraHero>

      <div className="container">
        <div className="article-art">
          <PostArt post={post} showCategory />
        </div>
      </div>

      <div className="container article-layout">
        <div className="article-toc">
          <div className="article-toc__label">ON THIS PAGE</div>
          <div className="article-toc__list">
            <a href="#intro" className="is-active">Introduction</a>
            {post.sections.map((s) => (
              <a key={s.heading} href={`#${anchor(s.heading)}`}>
                {s.heading}
              </a>
            ))}
            <a href="#what-this-means">What this means for you</a>
          </div>
        </div>

        <div className="article-body">
          <p className="article-body__lede" id="intro">{post.intro}</p>
          {post.sections.map((s) => (
            <section key={s.heading} id={anchor(s.heading)}>
              <h2>{s.heading}</h2>
              {[].concat(s.body || []).map((para, i) => (
                <p key={i}>{para}</p>
              ))}
              {s.list && (
                <ul className="article-list">
                  {s.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
              {s.table && (
                <div className="article-table-wrap">
                  <table className="article-table">
                    {s.table.caption && <caption>{s.table.caption}</caption>}
                    <thead>
                      <tr>
                        {s.table.head.map((h) => (
                          <th key={h} scope="col">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {s.table.rows.map((r, i) => (
                        <tr key={i}>
                          {r.map((c, j) => (j === 0 ? <th key={j} scope="row">{c}</th> : <td key={j}>{c}</td>))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              {s.after && <p>{s.after}</p>}
            </section>
          ))}
          {post.quote && (
            <div className="article-quote">
              <p>{post.quote}</p>
            </div>
          )}
          <h2 id="what-this-means">What this means for you</h2>
          <p>{post.closing}</p>

          {relatedService && (
            <p className="article-service-link">
              Related service:{" "}
              <Link to={`/services/${relatedService.slug}/`}>{relatedService.name}</Link>
            </p>
          )}

          <Link to="/contact/" className="article-cta">
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
              <Link to={`/blog/${r.slug}/`} key={r.slug} className="article-related__item">
                <div className="article-related__art">
                  <PostArt post={r} />
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
            <Link to="/blog/" className="btn btn-primary">
              Browse All Articles <ArrowRightIcon size={16} color="#04140c" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
