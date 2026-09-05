// Templatized blog cover art.
//
// One template, seven variants. Every cover shares the same construction —
// aurora wash, a faint wire grid, a category motif, and the category label —
// so the index reads as one system while each post stays identifiable at
// thumbnail size. Inline SVG keeps the blog index at zero image requests,
// which is the main LCP lever on a listing page.
//
// Layout note: covers are cropped with `slice`, and the crop differs in every
// slot (a wide featured card loses horizontally, a 320px article hero loses
// vertically). So the label and the motif STACK rather than sit side by side,
// and both live inside a central safe zone — x 80..356, y 40..142 — which
// survives roughly 80 units of horizontal and 40 of vertical crop. Nothing is
// anchored to an edge.
//
// Motifs are drawn in a local 176x58 box and positioned by one transform, so
// adding a category means adding a motif at that size and one MOTIFS entry.
//
// Note: social preview cards (og:image) still need real raster files — an SVG
// in the DOM can't serve that.

const MOTIFS = {
  "Web Development": { hue: "green", motif: "browser" },
  "Mobile Apps": { hue: "green", motif: "device" },
  "Business Technology": { hue: "blue", motif: "stack" },
  "Graphic Design": { hue: "mint", motif: "palette" },
  Branding: { hue: "mint", motif: "mark" },
  "E-commerce": { hue: "blue", motif: "cart" },
  "Digital Growth": { hue: "green", motif: "chart" },
};

const HUES = {
  green: { a: "#4fe89a", soft: "rgba(79,232,154,.14)", line: "rgba(79,232,154,.34)", glow: "rgba(79,232,154,.26)" },
  mint: { a: "#8bffc0", soft: "rgba(139,255,192,.14)", line: "rgba(139,255,192,.34)", glow: "rgba(139,255,192,.24)" },
  blue: { a: "#3aa0ff", soft: "rgba(58,160,255,.14)", line: "rgba(58,160,255,.34)", glow: "rgba(58,160,255,.22)" },
};

const bar = "rgba(255,255,255,.16)";
const surface = "rgba(255,255,255,.05)";
const stroke = "rgba(255,255,255,.12)";

/* Each motif fits a 176x58 box, origin top-left. */
function Motif({ kind, c }) {
  switch (kind) {
    case "device":
      return (
        <g>
          <rect x="44" y="0" width="36" height="58" rx="8" fill={surface} stroke={stroke} />
          <rect x="88" y="4" width="36" height="54" rx="8" fill={c.soft} stroke={c.line} />
          <g fill={bar}>
            <rect x="52" y="12" width="20" height="5" rx="2.5" />
            <rect x="52" y="22" width="20" height="5" rx="2.5" />
            <rect x="52" y="32" width="14" height="5" rx="2.5" />
          </g>
          <g fill={c.a} opacity=".45">
            <rect x="96" y="16" width="20" height="5" rx="2.5" />
            <rect x="96" y="26" width="20" height="5" rx="2.5" />
          </g>
          <rect x="98" y="48" width="16" height="3" rx="1.5" fill="rgba(255,255,255,.22)" />
        </g>
      );
    case "stack":
      return (
        <g>
          {[0, 1, 2].map((i) => (
            <g key={i}>
              <rect x="13" y={i * 21} width="150" height="16" rx="5"
                fill={i === 0 ? c.soft : surface} stroke={i === 0 ? c.line : stroke} />
              <circle cx="26" cy={i * 21 + 8} r="3" fill={i === 0 ? c.a : "rgba(255,255,255,.22)"} />
              <rect x="38" y={i * 21 + 5} width="92" height="6" rx="3" fill={bar} />
            </g>
          ))}
        </g>
      );
    case "palette":
      return (
        <g>
          {[0, 1, 2, 3].map((i) => (
            <rect key={i} x={26 + i * 34} y={i % 2 ? 6 : 0} width="26" height="52" rx="7"
              fill={i === 0 ? c.a : i === 1 ? c.soft : surface}
              opacity={i === 0 ? 0.85 : 1}
              stroke={i === 0 ? "none" : i === 1 ? c.line : stroke} />
          ))}
        </g>
      );
    case "mark":
      return (
        <g>
          <circle cx="88" cy="29" r="28" fill="none" stroke={c.line} strokeDasharray="4 6" />
          <path d="M74 44 88 12l14 32" fill="none" stroke={c.a} strokeWidth="2.4" strokeLinejoin="round" />
          <path d="M80 34h16" stroke={c.a} strokeWidth="2.4" strokeLinecap="round" opacity=".7" />
        </g>
      );
    case "cart":
      return (
        <g transform="translate(58 2)">
          <path d="M4 12h56l-8 42H12z" fill={c.soft} stroke={c.line} strokeWidth="1.6" strokeLinejoin="round" />
          <path d="M17 12a15 15 0 0 1 30 0" fill="none" stroke={c.line} strokeWidth="1.6" />
          <g fill={c.a} opacity=".45">
            <rect x="16" y="24" width="32" height="6" rx="3" />
            <rect x="16" y="36" width="32" height="6" rx="3" />
          </g>
          <circle cx="56" cy="4" r="7" fill={c.a} />
        </g>
      );
    case "chart":
      return (
        <g>
          <g fill={surface} stroke={stroke}>
            <rect x="22" y="30" width="24" height="28" rx="4" />
            <rect x="54" y="20" width="24" height="38" rx="4" />
            <rect x="86" y="12" width="24" height="46" rx="4" />
          </g>
          <rect x="118" y="4" width="24" height="54" rx="4" fill={c.soft} stroke={c.line} />
          <path d="M30 26l32-10 32-8 32-6" fill="none" stroke={c.a} strokeWidth="2" strokeLinecap="round" />
          <circle cx="130" cy="2" r="4.5" fill={c.a} />
        </g>
      );
    default:
      /* browser — a page rendering next to the same page on a phone */
      return (
        <g>
          <rect x="8" y="0" width="112" height="58" rx="8" fill={surface} stroke={stroke} />
          <path d="M8 15h112" stroke={stroke} />
          <circle cx="20" cy="7.5" r="2.6" fill={c.a} opacity=".85" />
          <circle cx="30" cy="7.5" r="2.6" fill="rgba(255,255,255,.2)" />
          <circle cx="40" cy="7.5" r="2.6" fill="rgba(255,255,255,.2)" />
          <rect x="18" y="23" width="54" height="17" rx="4" fill={c.soft} stroke={c.line} />
          <g fill={bar}>
            <rect x="18" y="46" width="40" height="5" rx="2.5" />
            <rect x="64" y="46" width="20" height="5" rx="2.5" />
          </g>
          <rect x="80" y="23" width="30" height="17" rx="4" fill={surface} stroke={stroke} />
          {/* the same page, on a phone */}
          <rect x="134" y="5" width="34" height="48" rx="7" fill={surface} stroke={c.line} />
          <rect x="140" y="12" width="22" height="11" rx="3" fill={c.soft} stroke={c.line} />
          <g fill={bar}>
            <rect x="140" y="28" width="22" height="4" rx="2" />
            <rect x="140" y="36" width="16" height="4" rx="2" />
          </g>
        </g>
      );
  }
}

export default function BlogCover({ category, label = true, className = "" }) {
  const spec = MOTIFS[category] || MOTIFS["Web Development"];
  const c = HUES[spec.hue];
  const gid = `bc-${spec.hue}-${spec.motif}`;

  // With a label the motif sits below it; without one it centres.
  const motifY = label ? 80 : 59;

  return (
    <svg
      viewBox="0 0 436 176"
      className={"blog-cover " + className}
      role="img"
      aria-label={`${category} article`}
      preserveAspectRatio="xMidYMid slice"
    >
      <title>{category}</title>
      <defs>
        <radialGradient id={`${gid}-glow`} cx="34%" cy="4%">
          <stop offset="0" stopColor={c.glow} />
          <stop offset="1" stopColor="rgba(79,232,154,0)" />
        </radialGradient>
        <linearGradient id={`${gid}-ground`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="rgba(255,255,255,.045)" />
          <stop offset="1" stopColor="rgba(255,255,255,.012)" />
        </linearGradient>
      </defs>

      <rect width="436" height="176" fill={`url(#${gid}-ground)`} />
      <ellipse cx="160" cy="14" rx="260" ry="160" fill={`url(#${gid}-glow)`} />

      {/* wire texture — the house pattern, kept faint */}
      <g stroke="rgba(255,255,255,.05)" strokeWidth="1">
        <path d="M0 44h436M0 88h436M0 132h436" />
        <path d="M60 0v176M180 0v176M300 0v176M400 0v176" />
      </g>

      {label && (
        <g>
          <rect x="80" y="42" width={category.length * 6.4 + 26} height="24" rx="12"
            fill="rgba(6,20,16,.72)" stroke={c.line} />
          <text x="93" y="58" fill={c.a} style={{ font: "600 10.5px 'DM Sans', sans-serif", letterSpacing: ".08em" }}>
            {category.toUpperCase()}
          </text>
        </g>
      )}

      <g transform={`translate(130 ${motifY})`}>
        <Motif kind={spec.motif} c={c} />
      </g>
    </svg>
  );
}
