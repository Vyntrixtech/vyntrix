// Templatized blog cover art.
//
// One template, seven variants. Every cover shares the same construction —
// aurora wash, a faint wire grid, a category motif, and the category label —
// so the index reads as one system while each post stays identifiable at
// thumbnail size. Rendering these as inline SVG (rather than uploaded images)
// keeps the blog index at zero image requests, which is the whole ballgame for
// LCP on a listing page.
//
// Note: social preview cards (og:image) still need real raster files — an SVG
// in the DOM can't serve that. Tracked separately.

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
  green: { a: "#4fe89a", soft: "rgba(79,232,154,.14)", line: "rgba(79,232,154,.34)", glow: "rgba(79,232,154,.30)" },
  mint: { a: "#8bffc0", soft: "rgba(139,255,192,.14)", line: "rgba(139,255,192,.34)", glow: "rgba(139,255,192,.28)" },
  blue: { a: "#3aa0ff", soft: "rgba(58,160,255,.14)", line: "rgba(58,160,255,.34)", glow: "rgba(58,160,255,.26)" },
};

const bar = "rgba(255,255,255,.16)";
const surface = "rgba(255,255,255,.05)";
const stroke = "rgba(255,255,255,.12)";

function Motif({ kind, c }) {
  switch (kind) {
    case "device":
      return (
        <g>
          <rect x="150" y="34" width="60" height="96" rx="13" fill={surface} stroke={stroke} />
          <rect x="222" y="46" width="60" height="96" rx="13" fill={c.soft} stroke={c.line} />
          <g fill={bar}>
            <rect x="162" y="56" width="36" height="9" rx="4.5" />
            <rect x="162" y="72" width="36" height="9" rx="4.5" />
          </g>
          <g fill={c.a} opacity=".45">
            <rect x="234" y="68" width="36" height="9" rx="4.5" />
            <rect x="234" y="84" width="36" height="9" rx="4.5" />
          </g>
        </g>
      );
    case "stack":
      return (
        <g>
          {[0, 1, 2].map((i) => (
            <g key={i}>
              <rect x="148" y={40 + i * 34} width="140" height="26" rx="7" fill={i === 0 ? c.soft : surface} stroke={i === 0 ? c.line : stroke} />
              <circle cx="162" cy={53 + i * 34} r="3.5" fill={i === 0 ? c.a : "rgba(255,255,255,.22)"} />
              <rect x="176" y={49 + i * 34} width="86" height="7" rx="3.5" fill={bar} />
            </g>
          ))}
        </g>
      );
    case "palette":
      return (
        <g>
          {[0, 1, 2, 3].map((i) => (
            <rect key={i} x={148 + i * 38} y={i % 2 ? 58 : 42} width="30" height="76" rx="9"
              fill={i === 0 ? c.a : i === 1 ? c.soft : surface}
              opacity={i === 0 ? 0.85 : 1}
              stroke={i === 0 ? "none" : i === 1 ? c.line : stroke} />
          ))}
        </g>
      );
    case "mark":
      return (
        <g>
          <circle cx="218" cy="86" r="52" fill="none" stroke={c.line} strokeDasharray="5 7" />
          <path d="M192 116 218 48l26 68" fill="none" stroke={c.a} strokeWidth="2.6" strokeLinejoin="round" />
          <path d="M203 98h30" stroke={c.a} strokeWidth="2.6" strokeLinecap="round" opacity=".7" />
        </g>
      );
    case "cart":
      return (
        <g transform="translate(160 40)">
          <path d="M6 16h84l-12 62H18z" fill={c.soft} stroke={c.line} strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M26 16a22 22 0 0 1 44 0" fill="none" stroke={c.line} strokeWidth="1.8" />
          <g fill={c.a} opacity=".45">
            <rect x="24" y="34" width="48" height="8" rx="4" />
            <rect x="24" y="50" width="48" height="8" rx="4" />
          </g>
          <circle cx="84" cy="6" r="9" fill={c.a} />
        </g>
      );
    case "chart":
      return (
        <g>
          <g fill={surface} stroke={stroke}>
            <rect x="150" y="92" width="26" height="42" rx="5" />
            <rect x="186" y="72" width="26" height="62" rx="5" />
            <rect x="222" y="56" width="26" height="78" rx="5" />
          </g>
          <rect x="258" y="38" width="26" height="96" rx="5" fill={c.soft} stroke={c.line} />
          <path d="M156 86l32-18 34-16 36-12" fill="none" stroke={c.a} strokeWidth="2.2" strokeLinecap="round" />
          <circle cx="258" cy="40" r="5" fill={c.a} />
        </g>
      );
    default:
      // browser
      return (
        <g>
          <rect x="144" y="36" width="148" height="104" rx="11" fill={surface} stroke={stroke} />
          <path d="M144 58h148" stroke={stroke} />
          <circle cx="158" cy="47" r="3.2" fill={c.a} opacity=".8" />
          <circle cx="169" cy="47" r="3.2" fill="rgba(255,255,255,.2)" />
          <rect x="158" y="72" width="76" height="26" rx="6" fill={c.soft} stroke={c.line} />
          <g fill={bar}>
            <rect x="158" y="108" width="60" height="7" rx="3.5" />
            <rect x="158" y="121" width="40" height="7" rx="3.5" />
          </g>
          <rect x="246" y="72" width="32" height="56" rx="6" fill={surface} stroke={stroke} />
        </g>
      );
  }
}

export default function BlogCover({ category, label = true, className = "" }) {
  const spec = MOTIFS[category] || MOTIFS["Web Development"];
  const c = HUES[spec.hue];
  const gid = `bc-${spec.hue}-${spec.motif}`;

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
        <radialGradient id={`${gid}-glow`} cx="30%" cy="0%">
          <stop offset="0" stopColor={c.glow} />
          <stop offset="1" stopColor="rgba(79,232,154,0)" />
        </radialGradient>
        <linearGradient id={`${gid}-ground`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="rgba(255,255,255,.045)" />
          <stop offset="1" stopColor="rgba(255,255,255,.012)" />
        </linearGradient>
      </defs>

      <rect width="436" height="176" fill={`url(#${gid}-ground)`} />
      <ellipse cx="150" cy="10" rx="260" ry="165" fill={`url(#${gid}-glow)`} />

      {/* wire texture — the house pattern, kept faint */}
      <g stroke="rgba(255,255,255,.05)" strokeWidth="1">
        <path d="M0 44h436M0 88h436M0 132h436" />
        <path d="M60 0v176M180 0v176M300 0v176M400 0v176" />
      </g>

      {/* Shift the motif clear of the label when one is drawn, so the two
          never collide on the featured and article slots. */}
      <g transform={label ? "translate(56 0)" : undefined}>
        <Motif kind={spec.motif} c={c} />
      </g>

      {/* Covers are cropped with `slice`, and the crop differs per container
          (a 320px article hero loses ~29 viewBox units top and bottom; the
          featured card loses ~25 each side). The label sits inside that safe
          area so it survives every slot it's used in. */}
      {label && (
        <g>
          <rect x="44" y="40" width={category.length * 6.4 + 26} height="24" rx="12" fill="rgba(6,20,16,.72)" stroke={c.line} />
          <text x="57" y="56" fill={c.a} style={{ font: "600 10.5px 'DM Sans', sans-serif", letterSpacing: ".08em" }}>
            {category.toUpperCase()}
          </text>
        </g>
      )}
    </svg>
  );
}
