// Service illustrations — one scene per service line, drawn in the Aurora
// language: thin strokes, rounded glass panels, green accent with a blue
// secondary, and small looping motion that hints at the work rather than
// decorating for its own sake.
//
// Each scene shares a 520x180 viewBox so cards of different heights crop
// consistently. Scenes are labelled (role="img" + <title>) so the meaning
// survives for screen readers and for crawlers parsing inline SVG.

const V = "0 0 520 180";

// shared palette — mirrors the CSS tokens
const line = "rgba(255,255,255,.12)";
const surface = "rgba(255,255,255,.04)";
const accentLine = "rgba(79,232,154,.34)";
const accentFill = "rgba(79,232,154,.09)";
const blueLine = "rgba(58,160,255,.34)";
const blueFill = "rgba(58,160,255,.09)";
const bar = "rgba(255,255,255,.14)";
const green = "#4fe89a";
const mint = "#8bffc0";

function Frame({ children, title }) {
  return (
    <svg viewBox={V} className="svc-art" role="img" aria-label={title} preserveAspectRatio="xMidYMid meet">
      <title>{title}</title>
      {children}
    </svg>
  );
}

/* Website — a browser laid out beside the same page on a phone: the
   "responsive build" idea in one glance. */
function WebsiteArt() {
  return (
    <Frame title="Website development: a responsive site shown on desktop and mobile">
      <rect x="40" y="26" width="300" height="128" rx="12" fill={surface} stroke={line} />
      <path d="M40 50h300" stroke={line} />
      <circle cx="58" cy="38" r="3.5" fill={green} opacity=".85" />
      <circle cx="70" cy="38" r="3.5" fill="rgba(255,255,255,.2)" />
      <circle cx="82" cy="38" r="3.5" fill="rgba(255,255,255,.2)" />
      <rect x="100" y="33" width="220" height="10" rx="5" fill="rgba(255,255,255,.06)" />

      {/* hero block + copy lines */}
      <rect x="58" y="66" width="130" height="40" rx="8" fill={accentFill} stroke={accentLine} />
      <g fill={bar}>
        <rect x="58" y="116" width="96" height="7" rx="3.5" />
        <rect x="58" y="131" width="64" height="7" rx="3.5" />
      </g>
      {/* content cards */}
      <g fill={surface} stroke={line}>
        <rect x="204" y="66" width="54" height="40" rx="8" />
        <rect x="268" y="66" width="54" height="40" rx="8" />
      </g>
      <rect x="204" y="116" width="118" height="7" rx="3.5" fill={bar} />
      <rect x="204" y="116" width="60" height="7" rx="3.5" fill={green} opacity=".8"
        style={{ animation: "vt-breathe 3.2s ease-in-out infinite" }} />

      {/* phone showing the same layout */}
      <rect x="392" y="34" width="72" height="112" rx="14" fill={surface} stroke={accentLine}
        style={{ animation: "vt-float 8s ease-in-out infinite" }} />
      <g style={{ animation: "vt-float 8s ease-in-out infinite" }}>
        <rect x="404" y="50" width="48" height="24" rx="6" fill={accentFill} stroke={accentLine} />
        <g fill={bar}>
          <rect x="404" y="82" width="36" height="6" rx="3" />
          <rect x="404" y="94" width="48" height="6" rx="3" />
          <rect x="404" y="106" width="28" height="6" rx="3" />
        </g>
        <rect x="418" y="130" width="20" height="4" rx="2" fill="rgba(255,255,255,.25)" />
      </g>
    </Frame>
  );
}

/* Mobile apps — two device screens, one mid-interaction, with a push
   notification arriving. */
function AppArt() {
  return (
    <Frame title="Mobile app development: iOS and Android screens with a live notification">
      <rect x="150" y="20" width="96" height="140" rx="18" fill={surface} stroke={line}
        style={{ animation: "vt-float2 9s ease-in-out infinite" }} />
      <g style={{ animation: "vt-float2 9s ease-in-out infinite" }}>
        <rect x="182" y="28" width="32" height="5" rx="2.5" fill="rgba(255,255,255,.18)" />
        <g fill={bar}>
          <rect x="164" y="52" width="68" height="16" rx="6" />
          <rect x="164" y="76" width="68" height="16" rx="6" />
          <rect x="164" y="100" width="68" height="16" rx="6" />
        </g>
        <rect x="180" y="140" width="36" height="4" rx="2" fill="rgba(255,255,255,.22)" />
      </g>

      <rect x="272" y="12" width="96" height="140" rx="18" fill={accentFill} stroke={accentLine}
        style={{ animation: "vt-float 9s ease-in-out infinite" }} />
      <g style={{ animation: "vt-float 9s ease-in-out infinite" }}>
        <rect x="304" y="20" width="32" height="5" rx="2.5" fill="rgba(139,255,192,.35)" />
        <g fill="rgba(139,255,192,.45)">
          <rect x="286" y="44" width="68" height="16" rx="6"
            style={{ animation: "vt-slide 6s ease-in-out infinite" }} />
          <rect x="286" y="68" width="68" height="16" rx="6"
            style={{ animation: "vt-slide 6s .4s ease-in-out infinite" }} />
          <rect x="286" y="92" width="68" height="16" rx="6"
            style={{ animation: "vt-slide 6s .8s ease-in-out infinite" }} />
        </g>
        <rect x="296" y="120" width="48" height="14" rx="7" fill={green} opacity=".85" />
        <rect x="302" y="132" width="36" height="4" rx="2" fill="rgba(255,255,255,.22)" />
      </g>

      {/* notification */}
      <g style={{ animation: "vt-float 7s ease-in-out infinite" }}>
        <rect x="386" y="40" width="96" height="30" rx="10" fill="rgba(6,20,16,.9)" stroke={accentLine} />
        <circle cx="402" cy="55" r="5" fill={green} style={{ animation: "vt-pulse 2.4s ease-in-out infinite" }} />
        <g fill={bar}>
          <rect x="414" y="49" width="52" height="5" rx="2.5" />
          <rect x="414" y="58" width="34" height="5" rx="2.5" />
        </g>
      </g>
    </Frame>
  );
}

/* Branding — a mark being drawn with bezier handles, next to the palette
   and type it ships with. */
function BrandArt() {
  return (
    <Frame title="Graphic design and branding: a logo mark, brand palette and type">
      <rect x="60" y="30" width="120" height="120" rx="16" fill={surface} stroke={line} />
      {/* the mark */}
      <path d="M92 122 120 58l28 64" fill="none" stroke={green} strokeWidth="2.4" strokeLinejoin="round"
        strokeDasharray="200" strokeDashoffset="200" style={{ animation: "vt-dash 7s linear infinite" }} />
      <path d="M104 100h32" stroke={mint} strokeWidth="2.4" strokeLinecap="round" />
      {/* bezier handles */}
      <g fill="none" stroke="rgba(139,255,192,.5)" strokeWidth="1.2">
        <rect x="88" y="118" width="8" height="8" />
        <rect x="116" y="54" width="8" height="8" />
        <rect x="144" y="118" width="8" height="8" />
      </g>

      {/* palette */}
      <g>
        <rect x="212" y="42" width="40" height="40" rx="10" fill={green} opacity=".9" />
        <rect x="260" y="42" width="40" height="40" rx="10" fill={mint} opacity=".55" />
        <rect x="308" y="42" width="40" height="40" rx="10" fill="#3aa0ff" opacity=".5" />
        <rect x="356" y="42" width="40" height="40" rx="10" fill="rgba(255,255,255,.10)" />
      </g>
      {/* type specimen */}
      <text x="212" y="132" fill="rgba(238,255,246,.9)" style={{ font: "400 44px 'Instrument Serif', serif" }}>
        Aa
      </text>
      <g fill={bar}>
        <rect x="288" y="104" width="108" height="7" rx="3.5" />
        <rect x="288" y="118" width="84" height="7" rx="3.5" />
        <rect x="288" y="132" width="96" height="7" rx="3.5" />
      </g>
      <rect x="424" y="42" width="40" height="97" rx="10" fill={accentFill} stroke={accentLine} />
      <g fill="rgba(139,255,192,.4)">
        <rect x="434" y="56" width="20" height="6" rx="3" />
        <rect x="434" y="70" width="20" height="6" rx="3" />
      </g>
    </Frame>
  );
}

/* UI/UX — a three-step user flow, wireframe to prototype, with the
   cursor mid-journey. */
function DesignArt() {
  return (
    <Frame title="UI and UX design: a wireframe flow from low fidelity to prototype">
      <g fill={surface} stroke={line}>
        <rect x="44" y="42" width="104" height="96" rx="12" />
        <rect x="196" y="42" width="104" height="96" rx="12" />
      </g>
      <rect x="348" y="42" width="104" height="96" rx="12" fill={accentFill} stroke={accentLine} />

      {/* wireframe: boxes only */}
      <g stroke="rgba(255,255,255,.18)" fill="none" strokeDasharray="4 4">
        <rect x="58" y="56" width="76" height="24" rx="5" />
        <rect x="58" y="88" width="34" height="34" rx="5" />
        <rect x="100" y="88" width="34" height="34" rx="5" />
      </g>
      {/* mid: greyscale layout */}
      <rect x="210" y="56" width="76" height="24" rx="5" fill="rgba(255,255,255,.10)" />
      <g fill={bar}>
        <rect x="210" y="88" width="76" height="7" rx="3.5" />
        <rect x="210" y="101" width="54" height="7" rx="3.5" />
        <rect x="210" y="114" width="40" height="10" rx="5" />
      </g>
      {/* final: in brand */}
      <rect x="362" y="56" width="76" height="24" rx="5" fill="rgba(139,255,192,.28)" />
      <g fill="rgba(139,255,192,.4)">
        <rect x="362" y="88" width="76" height="7" rx="3.5" />
        <rect x="362" y="101" width="54" height="7" rx="3.5" />
      </g>
      <rect x="362" y="114" width="46" height="12" rx="6" fill={green} opacity=".9" />

      {/* flow connectors */}
      <g stroke="rgba(79,232,154,.45)" fill="none" strokeWidth="1.4" strokeDasharray="5 5">
        <path d="M152 90h40" style={{ animation: "vt-dash2 9s linear infinite" }} />
        <path d="M304 90h40" style={{ animation: "vt-dash2 9s .6s linear infinite" }} />
      </g>
      <g fill={green}>
        <path d="M188 86l6 4-6 4z" />
        <path d="M340 86l6 4-6 4z" />
      </g>

      {/* cursor */}
      <g style={{ animation: "vt-float 6s ease-in-out infinite" }}>
        <path d="M398 118l4 20 4-8 8 3z" fill={mint} stroke="rgba(6,20,16,.8)" strokeWidth="1" />
      </g>
    </Frame>
  );
}

/* E-commerce — a product, a basket filling, and the payment clearing. */
function EcommerceArt() {
  return (
    <Frame title="E-commerce development: product listing, basket and card payment">
      {/* product card */}
      <rect x="52" y="30" width="118" height="120" rx="12" fill={surface} stroke={line} />
      <rect x="66" y="44" width="90" height="52" rx="8" fill={accentFill} stroke={accentLine} />
      <g fill={bar}>
        <rect x="66" y="106" width="62" height="7" rx="3.5" />
      </g>
      <text x="66" y="136" fill={mint} style={{ font: "400 20px 'Instrument Serif', serif" }}>
        £—
      </text>
      <rect x="120" y="120" width="36" height="16" rx="8" fill={green} opacity=".9" />

      {/* flow to basket */}
      <g stroke="rgba(79,232,154,.45)" fill="none" strokeWidth="1.4" strokeDasharray="5 5">
        <path d="M176 90h44" style={{ animation: "vt-dash2 8s linear infinite" }} />
        <path d="M300 90h44" style={{ animation: "vt-dash2 8s .5s linear infinite" }} />
      </g>

      {/* basket */}
      <g transform="translate(226 52)">
        <path d="M4 12h56l-8 44H12z" fill={accentFill} stroke={accentLine} strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M18 12a14 14 0 0 1 28 0" fill="none" stroke={accentLine} strokeWidth="1.6" />
        <g fill="rgba(139,255,192,.5)">
          <rect x="16" y="24" width="32" height="6" rx="3" style={{ animation: "vt-slide 5s ease-in-out infinite" }} />
          <rect x="16" y="36" width="32" height="6" rx="3" style={{ animation: "vt-slide 5s .4s ease-in-out infinite" }} />
        </g>
        <circle cx="56" cy="4" r="7" fill={green} style={{ animation: "vt-pulse 2.6s ease-in-out infinite" }} />
      </g>

      {/* payment card + cleared tick */}
      <g style={{ animation: "vt-float 8s ease-in-out infinite" }}>
        <rect x="350" y="48" width="116" height="72" rx="12" fill={blueFill} stroke={blueLine} />
        <path d="M350 70h116" stroke={blueLine} />
        <g fill="rgba(255,255,255,.18)">
          <rect x="364" y="84" width="42" height="7" rx="3.5" />
          <rect x="364" y="98" width="26" height="7" rx="3.5" />
        </g>
        <circle cx="444" cy="98" r="12" fill="rgba(79,232,154,.16)" />
        <path d="m438 98 4 4 8-8" fill="none" stroke={green} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </Frame>
  );
}

/* IT — the plumbing: cloud, servers, and the devices they serve. */
function ITArt() {
  return (
    <Frame title="IT and digital solutions: cloud hosting, servers, email and domains">
      {/* cloud */}
      <g>
        <path d="M212 52a26 26 0 0 1 50-8 20 20 0 0 1 34 14 18 18 0 0 1-4 35h-72a20 20 0 0 1-8-41z"
          fill={accentFill} stroke={accentLine} strokeWidth="1.5" />
      </g>

      {/* down-links */}
      <g stroke="rgba(79,232,154,.4)" fill="none" strokeWidth="1.3" strokeDasharray="4 6">
        <path d="M256 94v22" style={{ animation: "vt-dash2 7s linear infinite" }} />
        <path d="M256 116h-118v14" style={{ animation: "vt-dash2 9s linear infinite" }} />
        <path d="M256 116h118v14" style={{ animation: "vt-dash2 9s .6s linear infinite" }} />
      </g>

      {/* server rack */}
      <g>
        <rect x="212" y="118" width="88" height="44" rx="9" fill={surface} stroke={line} />
        <path d="M212 133h88M212 148h88" stroke={line} />
        <circle cx="226" cy="125.5" r="3" fill={green} style={{ animation: "vt-blink 1.8s steps(1,end) infinite" }} />
        <circle cx="226" cy="140.5" r="3" fill="rgba(255,255,255,.25)" />
        <circle cx="226" cy="155.5" r="3" fill={mint} style={{ animation: "vt-blink 2.4s steps(1,end) infinite" }} />
        <g fill="rgba(255,255,255,.12)">
          <rect x="240" y="122" width="46" height="6" rx="3" />
          <rect x="240" y="137" width="46" height="6" rx="3" />
          <rect x="240" y="152" width="46" height="6" rx="3" />
        </g>
      </g>

      {/* email endpoint */}
      <g>
        <rect x="98" y="130" width="80" height="52" rx="10" fill={surface} stroke={line} />
        <path d="m106 140 32 20 32-20" fill="none" stroke={mint} strokeWidth="1.6" strokeLinecap="round" />
      </g>

      {/* domain endpoint */}
      <g>
        <circle cx="374" cy="152" r="26" fill={blueFill} stroke={blueLine} />
        <path d="M348 152h52M374 126c11 13 11 39 0 52-11-13-11-39 0-52z" fill="none" stroke="rgba(58,160,255,.6)" strokeWidth="1.3" />
      </g>
    </Frame>
  );
}

/* Maintenance — uptime being watched, patched and backed up. */
function MaintenanceArt() {
  return (
    <Frame title="Maintenance and support: uptime monitoring, security patching and backups">
      {/* monitor panel with uptime line */}
      <rect x="46" y="34" width="266" height="112" rx="12" fill={surface} stroke={line} />
      <path d="M46 58h266" stroke={line} />
      <circle cx="64" cy="46" r="3.5" fill={green} style={{ animation: "vt-pulse 2.2s ease-in-out infinite" }} />
      <rect x="78" y="42" width="60" height="8" rx="4" fill="rgba(255,255,255,.10)" />
      <text x="252" y="50" fill={mint} style={{ font: "600 11px 'DM Sans', sans-serif" }}>
        100%
      </text>

      <path d="M64 122l38-14 32 8 34-26 30 12 34-22 44 14" fill="none" stroke={green} strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round" strokeDasharray="320" strokeDashoffset="320"
        style={{ animation: "vt-dash 8s linear infinite" }} />
      <path d="M64 122l38-14 32 8 34-26 30 12 34-22 44 14" fill="none" stroke="rgba(79,232,154,.16)" strokeWidth="2" />
      <g fill={mint}>
        <circle cx="168" cy="90" r="3.4" style={{ animation: "vt-pulse 2.6s ease-in-out infinite" }} />
        <circle cx="276" cy="94" r="3.4" style={{ animation: "vt-pulse 2.6s .8s ease-in-out infinite" }} />
      </g>

      {/* shield = security patching */}
      <g style={{ animation: "vt-float 9s ease-in-out infinite" }}>
        <path d="M386 34l34 14v30c0 21-14 36-34 42-20-6-34-21-34-42V48z"
          fill={accentFill} stroke={accentLine} strokeWidth="1.6" strokeLinejoin="round" />
        <path d="m374 84 8 8 16-18" fill="none" stroke={green} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* backups = stacked discs */}
      <g style={{ animation: "vt-float2 9s ease-in-out infinite" }}>
        <ellipse cx="386" cy="132" rx="30" ry="9" fill={blueFill} stroke={blueLine} />
        <path d="M356 132v14c0 5 13 9 30 9s30-4 30-9v-14" fill={blueFill} stroke={blueLine} />
      </g>
    </Frame>
  );
}

const scenes = {
  website: WebsiteArt,
  app: AppArt,
  brand: BrandArt,
  design: DesignArt,
  ecommerce: EcommerceArt,
  it: ITArt,
  maintenance: MaintenanceArt,
};

export default function ServiceArt({ type, height = 130 }) {
  const Scene = scenes[type] || WebsiteArt;
  return (
    <div className="svc-art-frame" style={{ height }}>
      <Scene />
    </div>
  );
}
