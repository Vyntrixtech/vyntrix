// Per-article cover art.
//
// The blog previously drew one cover per category, so four Web Development
// posts shared a picture and none of them said anything about their own
// subject. Each article now gets a scene drawn for its title.
//
// Licensing: this artwork is original and owned outright — no stock licence to
// track, no attribution, nothing to re-audit if the site is redesigned. It is
// also inline SVG, so the blog index still makes zero image requests (the main
// LCP lever on a listing page) and stays crisp at any density.
//
// Frame contract, inherited from the previous covers and still load-bearing:
// covers are cropped with `slice` and the crop differs per slot (a wide
// featured card loses horizontally, a 320px article hero loses vertically).
// So everything meaningful lives in a central safe zone — x 80..356,
// y 40..142 — and nothing is anchored to an edge. Scenes are drawn in a local
// 176x66 box and positioned by one transform.
//
// If real photography is ever licensed, give the post an `image` and `alt` and
// BlogImage below renders that instead; nothing else has to change.

const HUES = {
  green: { a: "#4fe89a", soft: "rgba(79,232,154,.14)", line: "rgba(79,232,154,.34)", glow: "rgba(79,232,154,.26)" },
  mint: { a: "#8bffc0", soft: "rgba(139,255,192,.14)", line: "rgba(139,255,192,.34)", glow: "rgba(139,255,192,.24)" },
  // Blue sits darker than the greens against this ground, so its fill and
  // edge are lifted to keep every scene at the same visual weight.
  blue: { a: "#5cb3ff", soft: "rgba(58,160,255,.22)", line: "rgba(58,160,255,.5)", glow: "rgba(58,160,255,.24)" },
};

const HUE_FOR_CATEGORY = {
  "Web Development": "green",
  "Mobile Apps": "green",
  "Business Technology": "blue",
  "Graphic Design": "mint",
  Branding: "mint",
  "E-commerce": "blue",
  "Digital Growth": "green",
};

// Lifted from the old cover values: these read at 340x150 thumbnail size,
// where the previous weights disappeared into the background.
const surface = "rgba(255,255,255,.07)";
const stroke = "rgba(255,255,255,.2)";
const bar = "rgba(255,255,255,.24)";
const dim = "rgba(255,255,255,.42)";
const label = { font: "600 8px 'DM Sans', sans-serif", letterSpacing: ".06em" };

/* ---------- primitives, all drawn inside the 176x66 scene box ----------
   Every primitive coerces its geometry with n(). JSX attributes written as
   x="4" arrive as strings, so any arithmetic inside becomes concatenation —
   "4" + 8 is "48", which silently throws the element off-canvas. Coercing
   here fixes every call site rather than requiring x={4} discipline at each. */

const n = (v) => Number(v);

const Win = ({ x = 0, y = 0, w = 74, h = 56, c, accent, children }) => {
  const [X, Y, W] = [n(x), n(y), n(w)];
  return (
    <g>
      <rect x={X} y={Y} width={W} height={n(h)} rx="7" fill={accent ? c.soft : surface} stroke={accent ? c.line : stroke} />
      <path d={`M${X} ${Y + 13}h${W}`} stroke={stroke} />
      <circle cx={X + 8} cy={Y + 6.5} r="1.8" fill={dim} />
      <circle cx={X + 14} cy={Y + 6.5} r="1.8" fill={dim} />
      <circle cx={X + 20} cy={Y + 6.5} r="1.8" fill={dim} />
      {children}
    </g>
  );
};

const Phone = ({ x, y = 2, w = 30, h = 62, c, accent }) => {
  const [X, Y, W, H] = [n(x), n(y), n(w), n(h)];
  return (
    <g>
      <rect x={X} y={Y} width={W} height={H} rx="7" fill={accent ? c.soft : surface} stroke={accent ? c.line : stroke} />
      <rect x={X + W / 2 - 4} y={Y + H - 6} width="8" height="2" rx="1" fill={dim} />
    </g>
  );
};

const Sheet = ({ x, y, w = 46, h = 60, c, accent }) => (
  <rect x={n(x)} y={n(y)} width={n(w)} height={n(h)} rx="4" fill={accent ? c.soft : surface} stroke={accent ? c.line : stroke} />
);

const Lines = ({ x, y, widths, gap = 7, h = 4, fill = bar }) => (
  <g fill={fill}>
    {widths.map((w, i) => (
      <rect key={i} x={n(x)} y={n(y) + i * n(gap)} width={w} height={n(h)} rx={n(h) / 2} />
    ))}
  </g>
);

const Arrow = ({ x, y, w = 22, c }) => {
  const [X, Y, W] = [n(x), n(y), n(w)];
  return (
    <g stroke={c.a} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none">
      <path d={`M${X} ${Y}h${W}`} />
      <path d={`M${X + W - 5} ${Y - 4}l5 4-5 4`} />
    </g>
  );
};

const Tick = ({ x, y, c }) => (
  <path d={`M${n(x)} ${n(y)}l3 3 6-7`} stroke={c.a} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
);

const Cross = ({ x, y }) => (
  <g stroke="rgba(255,160,150,.85)" strokeWidth="1.8" strokeLinecap="round">
    <path d={`M${n(x)} ${n(y)}l7 7M${n(x) + 7} ${n(y)}l-7 7`} />
  </g>
);

const Pill = ({ x, y, w, h = 14, text, c, accent }) => {
  const [X, Y, W, H] = [n(x), n(y), n(w), n(h)];
  return (
    <g>
      <rect x={X} y={Y} width={W} height={H} rx={H / 2} fill={accent ? c.soft : "rgba(255,255,255,.04)"} stroke={accent ? c.line : stroke} />
      <text x={X + W / 2} y={Y + H / 2 + 3} textAnchor="middle" fill={accent ? c.a : dim} style={label}>
        {text}
      </text>
    </g>
  );
};

/* ---------- one scene per article ---------- */

const SCENES = {
  /* --- Web Development --- */
  "why-your-website-is-losing-enquiries": {
    alt: "An enquiry form on a website with one field failing and a message escaping unsent",
    draw: (c) => (
      <g>
        <Win x="6" y="4" w="96" h="58" c={c}>
          <Lines x="16" y="24" widths={[70, 70]} />
          <rect x="16" y="38" width="70" height="10" rx="3" fill="none" stroke="rgba(255,160,150,.6)" />
          <rect x="16" y="52" width="30" height="7" rx="3.5" fill={c.a} opacity=".55" />
        </Win>
        <g opacity=".9">
          <rect x="120" y="14" width="34" height="24" rx="4" fill={c.soft} stroke={c.line} />
          <path d="M120 18l17 12 17-12" fill="none" stroke={c.a} strokeWidth="1.4" />
        </g>
        <path d="M110 44c14 6 28 6 42-2" fill="none" stroke="rgba(255,160,150,.55)" strokeWidth="1.4" strokeDasharray="3 3" />
        <Cross x="150" y="46" />
      </g>
    ),
  },
  "how-long-a-website-really-takes": {
    alt: "A four-week project schedule with discovery, design, build and launch shown as bars",
    draw: (c) => (
      <g>
        {[
          { w: 44, t: "WK 1" },
          { w: 60, t: "WK 2" },
          { w: 78, t: "WK 3" },
          { w: 38, t: "WK 4" },
        ].map((r, i) => (
          <g key={i}>
            <text x="0" y={13 + i * 16} fill={dim} style={label}>
              {r.t}
            </text>
            <rect x="30" y={6 + i * 16} width="140" height="8" rx="4" fill="rgba(255,255,255,.05)" />
            <rect x={30 + i * 12} y={6 + i * 16} width={r.w} height="8" rx="4" fill={c.a} opacity={0.8 - i * 0.13} />
          </g>
        ))}
      </g>
    ),
  },
  "wordpress-or-custom-build": {
    alt: "Two build options side by side, a content-managed site and a custom build, with one selected",
    draw: (c) => (
      <g>
        <Win x="4" y="0" w="76" h="50" c={c} accent>
          <Lines x="14" y="20" widths={[56, 44, 50]} fill="rgba(79,232,154,.45)" />
        </Win>
        <Win x="96" y="0" w="76" h="50" c={c}>
          <Lines x="106" y="20" widths={[56, 44, 50]} />
        </Win>
        {/* Labels sit under the windows: above them they fall outside the
            scene box and get cropped on a grid card. */}
        <Pill x="18" y="54" w="48" h="13" text="CMS" c={c} accent />
        <Pill x="110" y="54" w="48" h="13" text="CUSTOM" c={c} />
      </g>
    ),
  },
  "website-accessibility-basics-uk": {
    alt: "Accessibility checks: a colour-contrast pair, a keyboard focus ring and described text",
    draw: (c) => (
      <g>
        <circle cx="26" cy="30" r="20" fill="#eefff6" />
        <path d="M26 10a20 20 0 0 1 0 40z" fill="#0b1a13" />
        <text x="26" y="62" textAnchor="middle" fill={dim} style={label}>
          CONTRAST
        </text>
        <rect x="66" y="14" width="48" height="30" rx="6" fill={surface} stroke={c.line} strokeDasharray="4 3" />
        <rect x="74" y="24" width="32" height="10" rx="5" fill={c.a} opacity=".55" />
        <text x="90" y="62" textAnchor="middle" fill={dim} style={label}>
          FOCUS
        </text>
        <g>
          <rect x="130" y="14" width="42" height="30" rx="5" fill={surface} stroke={stroke} />
          <Lines x="137" y="22" widths={[28, 20]} gap={6} h={3} />
          <Tick x="137" y="36" c={c} />
        </g>
        <text x="151" y="62" textAnchor="middle" fill={dim} style={label}>
          ALT TEXT
        </text>
      </g>
    ),
  },

  /* --- Mobile Apps --- */
  "native-vs-cross-platform-2026": {
    alt: "Two phones, iOS and Android, drawing from a single shared codebase",
    draw: (c) => (
      <g>
        <Phone x="18" y="2" h="54" c={c} />
        <Phone x="128" y="2" h="54" c={c} />
        <text x="33" y="66" textAnchor="middle" fill={dim} style={label}>
          iOS
        </text>
        <text x="143" y="66" textAnchor="middle" fill={dim} style={label}>
          ANDROID
        </text>
        <rect x="66" y="18" width="44" height="28" rx="6" fill={c.soft} stroke={c.line} />
        <text x="88" y="35" textAnchor="middle" fill={c.a} style={label}>
          ONE
        </text>
        <path d="M64 32H52M112 32h12" stroke={c.line} strokeWidth="1.4" />
      </g>
    ),
  },
  "what-an-mvp-should-actually-contain": {
    alt: "A minimum viable product: one core feature kept, several others set aside",
    draw: (c) => (
      <g>
        <rect x="10" y="12" width="56" height="42" rx="7" fill={c.soft} stroke={c.line} />
        <Tick x="30" y="32" c={c} />
        <text x="38" y="64" textAnchor="middle" fill={c.a} style={label}>
          SHIP
        </text>
        {[0, 1, 2].map((i) => (
          <g key={i} opacity={0.4 - i * 0.1}>
            <rect x={94 + i * 28} y="16" width="24" height="34" rx="5" fill="none" stroke={dim} strokeDasharray="3 3" />
          </g>
        ))}
        <text x="136" y="64" textAnchor="middle" fill={dim} style={label}>
          LATER
        </text>
      </g>
    ),
  },
  "app-store-submission-what-to-expect": {
    alt: "An app submitted for store review, passing a checklist of requirements",
    draw: (c) => (
      <g>
        <rect x="12" y="14" width="38" height="38" rx="9" fill={c.soft} stroke={c.line} />
        <path d="M31 26l7 12H24z" fill={c.a} opacity=".7" />
        <path d="M56 33h18" stroke={c.line} strokeWidth="1.4" strokeDasharray="3 3" />
        <rect x="82" y="6" width="90" height="54" rx="7" fill={surface} stroke={stroke} />
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <Tick x="92" y={20 + i * 14} c={c} />
            <rect x="108" y={18 + i * 14} width={54 - i * 12} height="4" rx="2" fill={bar} />
          </g>
        ))}
      </g>
    ),
  },

  /* --- Business Technology --- */
  "domain-hosting-email-explained": {
    alt: "Domain, hosting and email shown as three separate services that are often confused",
    draw: (c) => (
      <g>
        {[
          { t: "DOMAIN", i: 0 },
          { t: "HOSTING", i: 1 },
          { t: "EMAIL", i: 2 },
        ].map(({ t, i }) => (
          <g key={t}>
            <rect x={4 + i * 60} y="10" width="52" height="34" rx="7" fill={i === 1 ? c.soft : surface} stroke={i === 1 ? c.line : stroke} />
            <text x={30 + i * 60} y="31" textAnchor="middle" fill={i === 1 ? c.a : dim} style={label}>
              {t}
            </text>
          </g>
        ))}
        <path d="M56 27h8M116 27h8" stroke={c.line} strokeWidth="1.4" />
        <text x="88" y="60" textAnchor="middle" fill={dim} style={label}>
          THREE SEPARATE THINGS
        </text>
      </g>
    ),
  },
  "moving-away-from-an-agency": {
    alt: "Website accounts and access being transferred from an agency to the business owner",
    draw: (c) => (
      <g>
        <rect x="4" y="12" width="58" height="42" rx="7" fill={surface} stroke={stroke} />
        <text x="33" y="37" textAnchor="middle" fill={dim} style={label}>
          AGENCY
        </text>
        <Arrow x="70" y="33" w="36" c={c} />
        <g>
          <rect x="76" y="14" width="24" height="14" rx="3" fill={c.soft} stroke={c.line} />
          <circle cx="82" cy="21" r="2.4" fill={c.a} />
          <path d="M85 21h11" stroke={c.a} strokeWidth="1.4" />
        </g>
        <rect x="114" y="12" width="58" height="42" rx="7" fill={c.soft} stroke={c.line} />
        <text x="143" y="37" textAnchor="middle" fill={c.a} style={label}>
          YOU
        </text>
      </g>
    ),
  },
  "backups-that-actually-work": {
    alt: "Stacked website backups with one being restored and verified",
    draw: (c) => (
      <g>
        {[0, 1, 2].map((i) => (
          <ellipse key={i} cx="42" cy={44 - i * 12} rx="34" ry="10" fill={i === 2 ? c.soft : surface} stroke={i === 2 ? c.line : stroke} />
        ))}
        <Arrow x="86" y="30" w="30" c={c} />
        <rect x="122" y="12" width="50" height="40" rx="7" fill={surface} stroke={c.line} />
        <Tick x="138" y="30" c={c} />
        <text x="147" y="64" textAnchor="middle" fill={dim} style={label}>
          RESTORED
        </text>
      </g>
    ),
  },

  /* --- Graphic Design --- */
  "print-vs-digital-marketing-material": {
    alt: "A printed flyer beside a screen, comparing print and digital marketing",
    draw: (c) => (
      <g>
        <Sheet x="14" y="2" w="52" h="62" c={c} accent />
        <Lines x="24" y="14" widths={[32, 26, 30, 20]} fill="rgba(139,255,192,.4)" />
        <text x="40" y="66" textAnchor="middle" fill={c.a} style={label}>
          PRINT
        </text>
        <Win x="100" y="6" w="72" h="50" c={c}>
          <Lines x="110" y="26" widths={[52, 40]} />
        </Win>
        <text x="136" y="66" textAnchor="middle" fill={dim} style={label}>
          DIGITAL
        </text>
      </g>
    ),
  },
  "what-to-send-your-designer": {
    alt: "A design brief bundle: logo files, photographs and written copy ready to hand over",
    draw: (c) => (
      <g>
        <path d="M6 14h30l6 8h48v34a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4z" fill={surface} stroke={stroke} />
        {[
          { t: "LOGO", x: 100 },
          { t: "PHOTOS", x: 100 },
          { t: "COPY", x: 100 },
        ].map((r, i) => (
          <g key={r.t}>
            <rect x={r.x} y={4 + i * 20} width="70" height="16" rx="8" fill={i === 0 ? c.soft : "rgba(255,255,255,.04)"} stroke={i === 0 ? c.line : stroke} />
            <text x={r.x + 35} y={15 + i * 20} textAnchor="middle" fill={i === 0 ? c.a : dim} style={label}>
              {r.t}
            </text>
          </g>
        ))}
        <Tick x="20" y="36" c={c} />
      </g>
    ),
  },
  "file-formats-explained-for-clients": {
    alt: "PNG, SVG and PDF logo files shown side by side with what each is for",
    draw: (c) => (
      <g>
        {["PNG", "SVG", "PDF"].map((t, i) => (
          <g key={t}>
            <path
              d={`M${10 + i * 60} 8h32l12 12v38a4 4 0 0 1-4 4H${14 + i * 60}a4 4 0 0 1-4-4z`}
              fill={i === 1 ? c.soft : surface}
              stroke={i === 1 ? c.line : stroke}
            />
            <path d={`M${42 + i * 60} 8v12h12`} fill="none" stroke={i === 1 ? c.line : stroke} />
            <text x={32 + i * 60} y="46" textAnchor="middle" fill={i === 1 ? c.a : dim} style={label}>
              {t}
            </text>
          </g>
        ))}
      </g>
    ),
  },

  /* --- Branding --- */
  "logo-refresh-vs-full-rebrand": {
    alt: "A logo mark refreshed in small steps beside a completely redrawn replacement",
    draw: (c) => (
      <g>
        <circle cx="26" cy="32" r="18" fill="none" stroke={dim} strokeWidth="2" />
        <circle cx="26" cy="32" r="6" fill={dim} />
        <Arrow x="52" y="32" w="20" c={c} />
        <circle cx="98" cy="32" r="18" fill="none" stroke={c.line} strokeWidth="2" />
        <circle cx="98" cy="32" r="6" fill={c.a} opacity=".7" />
        <Arrow x="124" y="32" w="18" c={c} />
        <rect x="150" y="16" width="30" height="32" rx="8" fill={c.soft} stroke={c.line} />
        <path d="M158 40l7-14 7 14z" fill={c.a} opacity=".7" />
      </g>
    ),
  },
  "brand-guidelines-small-business": {
    alt: "A short brand guidelines document showing colour swatches and type rules",
    draw: (c) => (
      <g>
        <Sheet x="8" y="4" w="70" h="58" c={c} />
        <text x="18" y="20" fill={dim} style={label}>
          GUIDELINES
        </text>
        <Lines x="18" y="28" widths={[46, 38, 42]} gap={8} h={3} />
        <g>
          {["#4fe89a", "#8bffc0", "#3aa0ff", "rgba(255,255,255,.3)"].map((f, i) => (
            <rect key={i} x={98 + i * 20} y="10" width="16" height="16" rx="4" fill={f} />
          ))}
        </g>
        <text x="98" y="46" fill="#eefff6" style={{ font: "400 20px 'Instrument Serif', serif" }}>
          Aa
        </text>
        <text x="130" y="46" fill={dim} style={{ font: "600 13px 'Plus Jakarta Sans', sans-serif" }}>
          Aa
        </text>
      </g>
    ),
  },
  "naming-a-business-practical-checks": {
    alt: "A proposed business name being checked against domain and trademark availability",
    draw: (c) => (
      <g>
        <rect x="6" y="12" width="86" height="30" rx="7" fill={c.soft} stroke={c.line} />
        <text x="49" y="32" textAnchor="middle" fill={c.a} style={{ font: "600 13px 'Plus Jakarta Sans', sans-serif" }}>
          Name
        </text>
        {[
          { t: ".CO.UK", ok: true, i: 0 },
          { t: "TRADEMARK", ok: false, i: 1 },
          { t: "SOCIAL", ok: true, i: 2 },
        ].map(({ t, ok, i }) => (
          <g key={t}>
            {ok ? <Tick x="108" y={10 + i * 20} c={c} /> : <Cross x="107" y={7 + i * 20} />}
            <text x="126" y={15 + i * 20} fill={dim} style={label}>
              {t}
            </text>
          </g>
        ))}
      </g>
    ),
  },

  /* --- E-commerce --- */
  "reduce-cart-abandonment": {
    alt: "A checkout funnel narrowing from basket to payment, showing where shoppers drop out",
    draw: (c) => (
      <g>
        {[
          { t: "BASKET", w: 52, o: 1 },
          { t: "DETAILS", w: 42, o: 0.72 },
          { t: "PAY", w: 32, o: 0.5 },
        ].map((s, i) => (
          <g key={s.t}>
            <rect x={6 + i * 58} y={20 - s.w / 6} width={s.w} height={s.w / 1.6} rx="6" fill={c.soft} stroke={c.line} opacity={s.o} />
            <text x={6 + i * 58 + s.w / 2} y="60" textAnchor="middle" fill={dim} style={label}>
              {s.t}
            </text>
          </g>
        ))}
        <path d="M62 40c6 8 14 10 22 8M120 40c6 8 14 10 22 8" fill="none" stroke="rgba(255,160,150,.5)" strokeWidth="1.3" strokeDasharray="3 3" />
      </g>
    ),
  },
  "choosing-an-ecommerce-platform": {
    alt: "Three e-commerce platforms sized against how large the product catalogue is",
    draw: (c) => (
      <g>
        {[
          { t: "SMALL", h: 26 },
          { t: "MID", h: 40 },
          { t: "LARGE", h: 54 },
        ].map((s, i) => (
          <g key={s.t}>
            <rect x={14 + i * 56} y={56 - s.h} width="44" height={s.h} rx="6" fill={i === 1 ? c.soft : surface} stroke={i === 1 ? c.line : stroke} />
            <text x={36 + i * 56} y="66" textAnchor="middle" fill={i === 1 ? c.a : dim} style={label}>
              {s.t}
            </text>
          </g>
        ))}
      </g>
    ),
  },
  "product-photography-on-a-budget": {
    alt: "A product lit on a simple backdrop with a camera and a single light source",
    draw: (c) => (
      <g>
        {/* Backdrop sweep, product, key light, camera — the whole cheap setup. */}
        <path d="M44 58h96V16c0-4-3-7-7-7H51c-4 0-7 3-7 7z" fill={surface} stroke={stroke} />
        <ellipse cx="92" cy="58" rx="30" ry="4" fill="rgba(0,0,0,.4)" />
        <rect x="78" y="30" width="28" height="28" rx="4" fill={c.soft} stroke={c.line} />
        <circle cx="152" cy="14" r="9" fill={c.soft} stroke={c.line} />
        <g stroke={c.a} strokeWidth="1.3" opacity=".75" strokeLinecap="round">
          <path d="M144 20l-12 9M150 25l-10 7M156 25l2 8" />
        </g>
        <g>
          <rect x="6" y="28" width="30" height="20" rx="4" fill={surface} stroke={stroke} />
          <rect x="14" y="24" width="12" height="5" rx="2" fill={surface} stroke={stroke} />
          <circle cx="21" cy="38" r="6" fill="none" stroke={dim} strokeWidth="1.6" />
          <circle cx="21" cy="38" r="2" fill={dim} />
        </g>
      </g>
    ),
  },

  /* --- Digital Growth --- */
  "measuring-website-roi": {
    alt: "Website spend on one side and enquiries returned on the other, with a rising trend",
    draw: (c) => (
      <g>
        <text x="6" y="20" fill={dim} style={label}>
          SPEND
        </text>
        <rect x="6" y="26" width="34" height="10" rx="5" fill="rgba(255,255,255,.14)" />
        <Arrow x="50" y="31" w="24" c={c} />
        <text x="84" y="20" fill={c.a} style={label}>
          ENQUIRIES
        </text>
        <path d="M84 52l22-12 18 8 24-24" fill="none" stroke={c.a} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        {[
          [84, 52],
          [106, 40],
          [124, 48],
          [148, 24],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="2.6" fill={c.a} />
        ))}
      </g>
    ),
  },
  "local-seo-for-uk-businesses": {
    alt: "A map pin above local search results for a UK business",
    draw: (c) => (
      <g>
        <path d="M34 6c-10 0-18 8-18 18 0 13 18 30 18 30s18-17 18-30c0-10-8-18-18-18z" fill={c.soft} stroke={c.line} />
        <circle cx="34" cy="24" r="6" fill={c.a} opacity=".8" />
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <rect x="72" y={6 + i * 20} width="100" height="16" rx="5" fill={i === 0 ? c.soft : surface} stroke={i === 0 ? c.line : stroke} />
            <circle cx="82" cy={14 + i * 20} r="3" fill={i === 0 ? c.a : dim} />
            <rect x="92" y={12 + i * 20} width={62 - i * 14} height="4" rx="2" fill={bar} />
          </g>
        ))}
      </g>
    ),
  },
  "content-that-earns-enquiries": {
    alt: "An article turning a reader into an enquiry rather than just traffic",
    draw: (c) => (
      <g>
        <Sheet x="6" y="4" w="60" h="58" c={c} />
        <Lines x="16" y="16" widths={[40, 34, 40, 28]} gap={8} h={3} />
        <Arrow x="78" y="32" w="30" c={c} />
        <rect x="118" y="16" width="52" height="34" rx="5" fill={c.soft} stroke={c.line} />
        <path d="M118 20l26 18 26-18" fill="none" stroke={c.a} strokeWidth="1.5" />
        <Tick x="160" y="52" c={c} />
      </g>
    ),
  },
};

/**
 * Cover art for one article. `post` needs `slug` and `category`; an optional
 * `image` (with `alt`) takes precedence, for when real photography is licensed.
 */
export default function PostArt({ post, showCategory = false, className = "" }) {
  const hue = HUE_FOR_CATEGORY[post.category] ?? "green";
  const c = HUES[hue];
  const scene = SCENES[post.slug];
  const gid = `pa-${post.slug}`;

  if (post.image) {
    return <img src={post.image} alt={post.alt ?? ""} className={"blog-cover " + className} loading="lazy" decoding="async" />;
  }

  // The scene is drawn in a 176x66 box. On a grid card there is no chip to
  // make room for, so it scales up and centres — at 340x150 the unscaled box
  // filled barely a third of the card and read as empty space. The labelled
  // variants render much larger, so they keep the box at 1:1 under the chip.
  const place = showCategory
    ? { x: 130, y: 74, k: 1 }
    : { x: 99, y: 43, k: 1.35 };
  const alt = scene?.alt ?? `${post.category} article`;

  return (
    <svg
      viewBox="0 0 436 176"
      className={"blog-cover " + className}
      role="img"
      aria-label={alt}
      preserveAspectRatio="xMidYMid slice"
    >
      <title>{alt}</title>
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

      {showCategory && (
        <g>
          <rect
            x="80"
            y="42"
            width={post.category.length * 6.4 + 26}
            height="24"
            rx="12"
            fill="rgba(6,20,16,.72)"
            stroke={c.line}
          />
          <text
            x="93"
            y="58"
            fill={c.a}
            style={{ font: "600 10.5px 'DM Sans', sans-serif", letterSpacing: ".08em" }}
          >
            {post.category.toUpperCase()}
          </text>
        </g>
      )}

      <g transform={`translate(${place.x} ${place.y}) scale(${place.k})`}>{scene ? scene.draw(c) : null}</g>
    </svg>
  );
}
