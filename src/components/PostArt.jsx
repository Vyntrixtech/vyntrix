// Per-article cover art.
//
// The blog previously drew one cover per category, so four Web Development
// posts shared a picture and none of them said anything about their own
// subject. Each article gets a scene drawn for its title.
//
// The scenes below are vector icons supplied by the client, one per post,
// extracted from a set of debug-template exports (each a 1200x630 render with
// scaffolding — a page counter, pixel-dimension label and a light theme —
// baked into the raster/SVG). The chrome is stripped and the icon geometry is
// refitted into this file's existing scene box so it drops into the same
// frame the rest of the site already uses: ink and the muted secondary tone
// recoloured to read on a dark ground, the accent recolored to the post's
// category hue (so it moves with the theme rather than staying a fixed hex),
// everything else — position, stroke weight, composition — left as supplied.
//
// Licensing: owned outright, supplied directly by the client for this site.
// Kept as inline SVG (as the hand-drawn scenes were) rather than raster, so
// the blog index still makes zero image requests — the main LCP lever on a
// listing page — and stays crisp at any density.
//
// Frame contract, inherited from the previous covers and still load-bearing:
// covers are cropped with `slice` and the crop differs per slot (a wide
// featured card loses horizontally, a 320px article hero loses vertically).
// So everything meaningful lives in a central safe zone — x 80..356,
// y 40..142 — and nothing is anchored to an edge. Scenes are drawn in a local
// 176x66 box (top-left origin) and positioned by one transform.
//
// If a post has no image and none of the client's scenes cover it, give the
// post an `image` and `alt` and PostArt renders that instead (see the
// component below); nothing else has to change.

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

/* ---------- one scene per article ---------- */

const SCENES = {
  "why-your-website-is-losing-enquiries": {
    alt: "A browser window with a broken, jagged connection line and its signal fading into dots",
    draw: (c) => (
      <g transform="translate(-12.36 -25.46) scale(0.1673)">
        <g transform="translate(600,293)">
      <rect x="-190" y="-125" width="380" height="250" rx="14" fill="none" stroke="rgba(238,255,246,.88)" strokeWidth="4"/>
      <line x1="-190" y1="-75" x2="190" y2="-75" stroke="rgba(238,255,246,.88)" strokeWidth="4"/>
      <circle cx="-165" cy="-100" r="7" fill="rgba(238,255,246,.88)"/>
      <circle cx="-140" cy="-100" r="7" fill="rgba(238,255,246,.88)"/>
      <circle cx="-115" cy="-100" r="7" fill="rgba(238,255,246,.88)"/>
      <path d="M -20 -75 L 30 -10 L -15 40 L 40 125" fill="none" stroke={c.a} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="60" cy="170" r="8" fill={c.a}/>
      <circle cx="90" cy="205" r="5" fill={c.a} opacity="0.6"/>
      <circle cx="110" cy="235" r="3" fill={c.a} opacity="0.35"/>
    </g>
      </g>
    ),
  },
  "how-long-a-website-really-takes": {
    alt: "Four boxes in a fading sequence, the last one solid, marking out a week-by-week timeline",
    draw: (c) => (
      <g transform="translate(-72.71 -40.23) scale(0.2417)">
        <g transform="translate(600,293)"><rect x="-270" y="-70" width="130" height="140" rx="10" fill="none" fillOpacity="1" stroke="rgba(238,255,246,.88)" strokeWidth="4"/><rect x="-90" y="-70" width="130" height="140" rx="10" fill="none" fillOpacity="1" stroke="rgba(238,255,246,.88)" strokeWidth="4"/><rect x="90" y="-70" width="130" height="140" rx="10" fill={c.a} fillOpacity="0.4" stroke="rgba(238,255,246,.88)" strokeWidth="4"/><rect x="270" y="-70" width="130" height="140" rx="10" fill={c.a} fillOpacity="1" stroke="rgba(238,255,246,.88)" strokeWidth="4"/><line x1="-270" y1="90" x2="130" y2="90" stroke="rgba(238,255,246,.88)" strokeWidth="2" strokeDasharray="2 10"/></g>
      </g>
    ),
  },
  "wordpress-or-custom-build": {
    alt: "A puzzle-piece outline beside a single solid block, contrasting a plugin-built site with a custom one",
    draw: (c) => (
      <g transform="translate(-52.12 -35.43) scale(0.2335)">
        <g transform="translate(600,293)">
      <path d="M -230 -100 h140 v50 a25 25 0 0 1 0 50 v50 h-140 z" fill="none" stroke="rgba(238,255,246,.88)" strokeWidth="4"/>
    <rect x="90" y="-100" width="140" height="200" rx="6" fill={c.a} fillOpacity="0.85" stroke="rgba(238,255,246,.88)" strokeWidth="4"/><line x1="-15" y1="-130" x2="-15" y2="130" stroke="rgba(238,255,246,.88)" strokeWidth="2" strokeDasharray="1 12"/></g>
      </g>
    ),
  },
  "website-accessibility-basics-uk": {
    alt: "A circle split evenly between light and dark either side of a centre dot, radiating like a contrast check",
    draw: (c) => (
      <g transform="translate(-7.87 -13.82) scale(0.1598)">
        <g transform="translate(600,293)">
      <line x1="0" y1="-190" x2="0" y2="-165" stroke="rgba(238,255,246,.88)" strokeWidth="4" transform="rotate(0)"/><line x1="0" y1="-190" x2="0" y2="-165" stroke="rgba(238,255,246,.88)" strokeWidth="4" transform="rotate(30)"/><line x1="0" y1="-190" x2="0" y2="-165" stroke="rgba(238,255,246,.88)" strokeWidth="4" transform="rotate(60)"/><line x1="0" y1="-190" x2="0" y2="-165" stroke="rgba(238,255,246,.88)" strokeWidth="4" transform="rotate(90)"/><line x1="0" y1="-190" x2="0" y2="-165" stroke="rgba(238,255,246,.88)" strokeWidth="4" transform="rotate(120)"/><line x1="0" y1="-190" x2="0" y2="-165" stroke="rgba(238,255,246,.88)" strokeWidth="4" transform="rotate(150)"/><line x1="0" y1="-190" x2="0" y2="-165" stroke="rgba(238,255,246,.88)" strokeWidth="4" transform="rotate(180)"/><line x1="0" y1="-190" x2="0" y2="-165" stroke="rgba(238,255,246,.88)" strokeWidth="4" transform="rotate(210)"/><line x1="0" y1="-190" x2="0" y2="-165" stroke="rgba(238,255,246,.88)" strokeWidth="4" transform="rotate(240)"/><line x1="0" y1="-190" x2="0" y2="-165" stroke="rgba(238,255,246,.88)" strokeWidth="4" transform="rotate(270)"/><line x1="0" y1="-190" x2="0" y2="-165" stroke="rgba(238,255,246,.88)" strokeWidth="4" transform="rotate(300)"/><line x1="0" y1="-190" x2="0" y2="-165" stroke="rgba(238,255,246,.88)" strokeWidth="4" transform="rotate(330)"/>
      <circle r="150" fill="none" stroke="rgba(238,255,246,.88)" strokeWidth="4"/>
      <path d="M 0 -150 A 150 150 0 0 1 0 150 Z" fill="rgba(238,255,246,.88)"/>
      <circle r="150" fill="none" stroke="rgba(238,255,246,.88)" strokeWidth="4"/>
      <circle cx="0" cy="0" r="34" fill={c.a}/>
    </g>
      </g>
    ),
  },
  "native-vs-cross-platform-2026": {
    alt: "Two phone outlines side by side, one left plain and one filled in as the platform actually chosen",
    draw: (c) => (
      <g transform="translate(-18.55 -21.50) scale(0.1776)">
        <g transform="translate(600,293)">
      <rect x="-190" y="-160" width="180" height="320" rx="26" fill="none" stroke="rgba(238,255,246,.88)" strokeWidth="4" transform="rotate(-8)"/>
      <rect x="10" y="-160" width="180" height="320" rx="26" fill={c.a} fillOpacity="0.85" stroke="rgba(238,255,246,.88)" strokeWidth="4" transform="rotate(8)"/>
    </g>
      </g>
    ),
  },
  "what-an-mvp-should-actually-contain": {
    alt: "Concentric rings closing in on a single centred dot, the one core feature an MVP keeps",
    draw: (c) => (
      <g transform="translate(-13.20 -16.42) scale(0.1687)">
        <g transform="translate(600,293)">
      <circle r="180" fill="none" stroke="rgba(238,255,246,.88)" strokeWidth="2" strokeDasharray="4 10" opacity="0.5"/>
      <circle r="120" fill="none" stroke="rgba(238,255,246,.88)" strokeWidth="2" strokeDasharray="10 8" opacity="0.7"/>
      <circle r="60" fill="none" stroke="rgba(238,255,246,.88)" strokeWidth="3"/>
      <circle r="20" fill={c.a}/>
    </g>
      </g>
    ),
  },
  "app-store-submission-what-to-expect": {
    alt: "A shield with a checkmark drawn inside it, standing for a submission that passed review",
    draw: (c) => (
      <g transform="translate(-13.20 -19.79) scale(0.1687)">
        <g transform="translate(600,293)">
      <path d="M 0 -160 L 140 -110 L 140 20 C 140 120 70 175 0 200 C -70 175 -140 120 -140 20 L -140 -110 Z" fill="none" stroke="rgba(238,255,246,.88)" strokeWidth="4" strokeLinejoin="round"/>
      <path d="M -55 5 L -15 50 L 65 -60" fill="none" stroke={c.a} strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"/>
    </g>
      </g>
    ),
  },
  "domain-hosting-email-explained": {
    alt: "Three overlapping circles, each with its own dot, representing three separate things bundled into one conversation",
    draw: (c) => (
      <g transform="translate(1.26 -15.14) scale(0.1446)">
        <g transform="translate(600,293)">
      <circle cx="-90" cy="-40" r="130" fill="none" stroke="rgba(238,255,246,.88)" strokeWidth="3.5"/>
      <circle cx="90" cy="-40" r="130" fill="none" stroke="rgba(238,255,246,.88)" strokeWidth="3.5"/>
      <circle cx="0" cy="120" r="130" fill="none" stroke="rgba(238,255,246,.88)" strokeWidth="3.5"/>
      <circle cx="-90" cy="-40" r="6" fill={c.a}/>
      <circle cx="90" cy="-40" r="6" fill={c.a}/>
      <circle cx="0" cy="120" r="6" fill={c.a}/>
      <circle cx="0" cy="20" r="10" fill="rgba(238,255,246,.88)"/>
    </g>
      </g>
    ),
  },
  "moving-away-from-an-agency": {
    alt: "A key beside an open folder, standing for account access handed from one owner to another",
    draw: (c) => (
      <g transform="translate(-37.98 -43.42) scale(0.2065)">
        <g transform="translate(600,293)">
      <circle cx="-140" cy="0" r="70" fill="none" stroke="rgba(238,255,246,.88)" strokeWidth="4"/>
      <circle cx="-140" cy="0" r="24" fill={c.a} stroke="rgba(238,255,246,.88)" strokeWidth="4"/>
      <line x1="-70" y1="0" x2="160" y2="0" stroke="rgba(238,255,246,.88)" strokeWidth="4"/>
      <line x1="90" y1="0" x2="90" y2="40" stroke="rgba(238,255,246,.88)" strokeWidth="4"/>
      <line x1="130" y1="0" x2="130" y2="55" stroke="rgba(238,255,246,.88)" strokeWidth="4"/>
      <line x1="160" y1="0" x2="160" y2="40" stroke="rgba(238,255,246,.88)" strokeWidth="4"/>
    <path d="M -30 90 h90 l20 24 h150 v110 h-260 z" transform="translate(0,0)" fill={c.a} fillOpacity="0.85" stroke="rgba(238,255,246,.88)" strokeWidth="3.5"/></g>
      </g>
    ),
  },
  "backups-that-actually-work": {
    alt: "A stack of floppy disks, the top one lifting slightly to show a backup being taken",
    draw: (c) => (
      <g transform="translate(-20.71 -20.63) scale(0.1818)">
        <g transform="translate(585,278)">
          <g transform="translate(26,34)">
            <rect x="-150" y="-150" width="300" height="300" rx="16" fill={c.a} fillOpacity="1" stroke="rgba(238,255,246,.88)" strokeWidth="4"/>
            <rect x="-80" y="-150" width="160" height="80" fill={c.a} stroke="rgba(238,255,246,.88)" strokeWidth="3.5"/>
            <rect x="-40" y="-150" width="20" height="55" fill="rgba(238,255,246,.88)"/>
            <rect x="-100" y="60" width="200" height="70" rx="6" fill="none" stroke="rgba(238,255,246,.88)" strokeWidth="3"/>
          </g>
        
          <g transform="translate(13,17)">
            <rect x="-150" y="-150" width="300" height="300" rx="16" fill={c.a} fillOpacity="1" stroke="rgba(238,255,246,.88)" strokeWidth="4"/>
            <rect x="-80" y="-150" width="160" height="80" fill={c.a} stroke="rgba(238,255,246,.88)" strokeWidth="3.5"/>
            <rect x="-40" y="-150" width="20" height="55" fill="rgba(238,255,246,.88)"/>
            <rect x="-100" y="60" width="200" height="70" rx="6" fill="none" stroke="rgba(238,255,246,.88)" strokeWidth="3"/>
          </g>
        
          <g transform="translate(0,0)">
            <rect x="-150" y="-150" width="300" height="300" rx="16" fill={c.a} fillOpacity="0.85" stroke="rgba(238,255,246,.88)" strokeWidth="4"/>
            <rect x="-80" y="-150" width="160" height="80" fill={c.a} stroke="rgba(238,255,246,.88)" strokeWidth="3.5"/>
            <rect x="-40" y="-150" width="20" height="55" fill="rgba(238,255,246,.88)"/>
            <rect x="-100" y="60" width="200" height="70" rx="6" fill="none" stroke="rgba(238,255,246,.88)" strokeWidth="3"/>
          </g>
        </g>
      </g>
    ),
  },
  "print-vs-digital-marketing-material": {
    alt: "A printed page beside a monitor showing a dotted grid, comparing print and digital",
    draw: (c) => (
      <g transform="translate(-9.47 -13.82) scale(0.1598)">
        <g transform="translate(600,293)">
      <path d="M -260 -160 h180 l40 40 v240 h-220 z" fill="none" stroke="rgba(238,255,246,.88)" strokeWidth="4" strokeLinejoin="round"/>
      <path d="M -80 -160 v40 h40 z" fill="none" stroke="rgba(238,255,246,.88)" strokeWidth="3"/>
      <line x1="-230" y1="-40" x2="-40" y2="-40" stroke="rgba(238,255,246,.88)" strokeWidth="3"/>
      <line x1="-230" y1="10" x2="-40" y2="10" stroke="rgba(238,255,246,.88)" strokeWidth="3"/>
      <line x1="-230" y1="60" x2="-100" y2="60" stroke="rgba(238,255,246,.88)" strokeWidth="3"/>
    
      <rect x="40" y="-140" width="240" height="220" rx="10" fill="none" stroke="rgba(238,255,246,.88)" strokeWidth="4"/>
      <rect x="130" y="90" width="60" height="16" fill="rgba(238,255,246,.88)"/>
    <circle cx="60" cy="-100" r="7" fill={c.a} opacity="0.9"/><circle cx="60" cy="-60" r="7" fill={c.a} opacity="0.4"/><circle cx="60" cy="-20" r="7" fill={c.a} opacity="0.9"/><circle cx="60" cy="20" r="7" fill={c.a} opacity="0.4"/><circle cx="100" cy="-100" r="7" fill={c.a} opacity="0.4"/><circle cx="100" cy="-60" r="7" fill={c.a} opacity="0.9"/><circle cx="100" cy="-20" r="7" fill={c.a} opacity="0.4"/><circle cx="100" cy="20" r="7" fill={c.a} opacity="0.9"/><circle cx="140" cy="-100" r="7" fill={c.a} opacity="0.9"/><circle cx="140" cy="-60" r="7" fill={c.a} opacity="0.4"/><circle cx="140" cy="-20" r="7" fill={c.a} opacity="0.9"/><circle cx="140" cy="20" r="7" fill={c.a} opacity="0.4"/><circle cx="180" cy="-100" r="7" fill={c.a} opacity="0.4"/><circle cx="180" cy="-60" r="7" fill={c.a} opacity="0.9"/><circle cx="180" cy="-20" r="7" fill={c.a} opacity="0.4"/><circle cx="180" cy="20" r="7" fill={c.a} opacity="0.9"/><circle cx="220" cy="-100" r="7" fill={c.a} opacity="0.9"/><circle cx="220" cy="-60" r="7" fill={c.a} opacity="0.4"/><circle cx="220" cy="-20" r="7" fill={c.a} opacity="0.9"/><circle cx="220" cy="20" r="7" fill={c.a} opacity="0.4"/><line x1="-10" y1="-190" x2="-10" y2="190" stroke="rgba(238,255,246,.88)" strokeWidth="2" strokeDasharray="1 12"/></g>
      </g>
    ),
  },
  "what-to-send-your-designer": {
    alt: "A dot, a square, a triangle and a line scattered above an open folder, the assorted assets a designer is handed",
    draw: (c) => (
      <g transform="translate(-21.37 -26.21) scale(0.1886)">
        <g transform="translate(600,293)"><path d="M -220 -20 h140 l24 32 h230 v170 h-394 z" fill="none" stroke="rgba(238,255,246,.88)" strokeWidth="4"/>
      <circle cx="-150" cy="-110" r="26" fill={c.a}/>
      <rect x="-40" y="-140" width="55" height="55" fill="none" stroke="rgba(238,255,246,.88)" strokeWidth="4"/>
      <polygon points="80,-85 115,-140 150,-85" fill="none" stroke="rgba(238,255,246,.88)" strokeWidth="4" strokeLinejoin="round"/>
      <line x1="180" y1="-140" x2="180" y2="-85" stroke={c.a} strokeWidth="8" strokeLinecap="round"/>
    </g>
      </g>
    ),
  },
  "file-formats-explained-for-clients": {
    alt: "A checkerboard swatch, a curved path and a page icon, standing for a raster image, a vector path and a document",
    draw: (c) => (
      <g transform="translate(-50.18 -40.78) scale(0.2435)">
        <g transform="translate(600,293)"><g><rect x="-365" y="-45" width="28" height="28" fill="rgba(238,255,246,.88)" stroke="rgba(238,255,246,.88)" strokeWidth="2"/><rect x="-365" y="-15" width="28" height="28" fill={c.a} stroke="rgba(238,255,246,.88)" strokeWidth="2"/><rect x="-365" y="15" width="28" height="28" fill="rgba(238,255,246,.88)" stroke="rgba(238,255,246,.88)" strokeWidth="2"/><rect x="-335" y="-45" width="28" height="28" fill={c.a} stroke="rgba(238,255,246,.88)" strokeWidth="2"/><rect x="-335" y="-15" width="28" height="28" fill="rgba(238,255,246,.88)" stroke="rgba(238,255,246,.88)" strokeWidth="2"/><rect x="-335" y="15" width="28" height="28" fill={c.a} stroke="rgba(238,255,246,.88)" strokeWidth="2"/><rect x="-305" y="-45" width="28" height="28" fill="rgba(238,255,246,.88)" stroke="rgba(238,255,246,.88)" strokeWidth="2"/><rect x="-305" y="-15" width="28" height="28" fill={c.a} stroke="rgba(238,255,246,.88)" strokeWidth="2"/><rect x="-305" y="15" width="28" height="28" fill="rgba(238,255,246,.88)" stroke="rgba(238,255,246,.88)" strokeWidth="2"/></g><path d="M -100 40 C -70 -100 30 -100 60 40 C 90 160 170 160 190 40" transform="translate(-90,0)" fill="none" stroke={c.a} strokeWidth="7" strokeLinecap="round"/>
      <g transform="translate(230,0)">
        <path d="M -70 -110 h100 l40 40 v180 h-140 z" fill="none" stroke="rgba(238,255,246,.88)" strokeWidth="4" strokeLinejoin="round"/>
        <path d="M 30 -110 v40 h40 z" fill="none" stroke="rgba(238,255,246,.88)" strokeWidth="3"/>
        <line x1="-45" y1="10" x2="15" y2="10" stroke="rgba(238,255,246,.88)" strokeWidth="3"/>
        <line x1="-45" y1="45" x2="15" y2="45" stroke="rgba(238,255,246,.88)" strokeWidth="3"/>
      </g>
    </g>
      </g>
    ),
  },
  "logo-refresh-vs-full-rebrand": {
    alt: "A circle assembling itself from an open arc with a spark beside it, mid-way through becoming a mark",
    draw: (c) => (
      <g transform="translate(-17.54 -19.98) scale(0.1701)">
        <g transform="translate(600,293)"><circle r="160" fill="none" stroke="rgba(238,255,246,.88)" strokeWidth="4"/><circle cx="-160" cy="0" r="14" fill="rgba(238,255,246,.88)"/><polygon points="215.0,0.0 177.0,17.0 160.0,55.0 143.0,17.0 105.0,0.0 143.0,-17.0 160.0,-55.0 177.0,-17.0" fill={c.a}/>
      <path d="M -170 190 A 170 170 0 0 1 170 190" fill="none" stroke="rgba(238,255,246,.88)" strokeWidth="3" strokeDasharray="3 9"/>
      <line x1="0" y1="190" x2="90" y2="120" stroke={c.a} strokeWidth="6" strokeLinecap="round"/>
      <circle cx="0" cy="190" r="7" fill="rgba(238,255,246,.88)"/>
    </g>
      </g>
    ),
  },
  "brand-guidelines-small-business": {
    alt: "Five small colour swatches in a row, standing for a brand's defined palette",
    draw: (c) => (
      <g transform="translate(-39.53 -28.96) scale(0.2065)">
        <g transform="translate(600,293)"><rect x="-260" y="-140" width="95" height="95" rx="10" fill="rgba(238,255,246,.88)"/><rect x="-145" y="-140" width="95" height="95" rx="10" fill={c.a}/><rect x="-30" y="-140" width="95" height="95" rx="10" fill={c.a}/><rect x="85" y="-140" width="95" height="95" rx="10" fill={c.a}/><rect x="200" y="-140" width="95" height="95" rx="10" fill="rgba(255,255,255,.42)"/><rect x="-260" y="40" width="520" height="24" fill="none" stroke="rgba(238,255,246,.88)" strokeWidth="3"/><rect x="-260" y="85" width="380" height="24" fill="none" stroke="rgba(238,255,246,.88)" strokeWidth="3"/><rect x="-260" y="130" width="240" height="24" fill="none" stroke="rgba(238,255,246,.88)" strokeWidth="3"/></g>
      </g>
    ),
  },
  "naming-a-business-practical-checks": {
    alt: "A checklist of tick, cross and dash marks beside a magnifying glass and a final tick, a name being checked and cleared",
    draw: (c) => (
      <g transform="translate(-100.91 -40.29) scale(0.2841)">
        <g transform="translate(600,333)"><rect x="-220" y="-40" width="120" height="60" rx="10" fill="none" stroke="rgba(238,255,246,.88)" strokeWidth="3"/><path d="M -185 -10 L -165 12 L -130 -28" fill="none" stroke="rgba(238,255,246,.88)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/><rect x="-70" y="-40" width="120" height="60" rx="10" fill="none" stroke="rgba(238,255,246,.88)" strokeWidth="3"/><line x1="-30" y1="-20" x2="10" y2="20" stroke="rgba(255,255,255,.42)" strokeWidth="6" strokeLinecap="round"/><line x1="10" y1="-20" x2="-30" y2="20" stroke="rgba(255,255,255,.42)" strokeWidth="6" strokeLinecap="round"/><rect x="80" y="-40" width="120" height="60" rx="10" fill="none" stroke="rgba(238,255,246,.88)" strokeWidth="3"/><line x1="120" y1="0" x2="160" y2="0" stroke="rgba(255,255,255,.42)" strokeWidth="6" strokeLinecap="round"/><rect x="230" y="-40" width="120" height="60" rx="10" fill="none" stroke="rgba(238,255,246,.88)" strokeWidth="3"/><path d="M 265 -10 L 285 12 L 320 -28" fill="none" stroke={c.a} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="90" cy="-100" r="70" fill="none" stroke="rgba(238,255,246,.88)" strokeWidth="7"/>
      <line x1="140" y1="-50" x2="200" y2="10" stroke="rgba(238,255,246,.88)" strokeWidth="10" strokeLinecap="round"/>
    </g>
      </g>
    ),
  },
  "reduce-cart-abandonment": {
    alt: "A shopping basket beside a row of dots, three filled and two empty, marking a checkout someone did not finish",
    draw: (c) => (
      <g transform="translate(-50.14 -43.66) scale(0.2530)">
        <g transform="translate(600,293)">
      <path d="M -260 -110 h40 l40 170 h190" fill="none" stroke="rgba(238,255,246,.88)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M -180 -110 h230 l-30 120 h-170 z" fill="none" stroke="rgba(238,255,246,.88)" strokeWidth="6" strokeLinejoin="round"/>
      <circle cx="-100" cy="110" r="20" fill="rgba(238,255,246,.88)"/>
      <circle cx="0" cy="110" r="20" fill="rgba(238,255,246,.88)"/>
    <circle cx="140" cy="-90" r="12" fill={c.a} stroke="rgba(238,255,246,.88)" strokeWidth="3"/><circle cx="140" cy="-45" r="12" fill={c.a} stroke="rgba(238,255,246,.88)" strokeWidth="3"/><circle cx="140" cy="0" r="12" fill={c.a} stroke="rgba(238,255,246,.88)" strokeWidth="3"/><circle cx="140" cy="45" r="12" fill="none" stroke="rgba(238,255,246,.88)" strokeWidth="3"/><circle cx="140" cy="90" r="12" fill="none" stroke="rgba(238,255,246,.88)" strokeWidth="3"/></g>
      </g>
    ),
  },
  "choosing-an-ecommerce-platform": {
    alt: "Three dotted panels growing from small to large, sized to how big a catalogue is",
    draw: (c) => (
      <g transform="translate(-52.12 -33.09) scale(0.2335)">
        <g transform="translate(600,413)"><line x1="-300" y1="0" x2="300" y2="0" stroke="rgba(238,255,246,.88)" strokeWidth="3"/><rect x="-280.0" y="-90" width="120" height="90" fill="none" fillOpacity="1" stroke="rgba(238,255,246,.88)" strokeWidth="4"/><circle cx="-262.0" cy="-72" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="-262.0" cy="-50" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="-262.0" cy="-28" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="-262.0" cy="-6" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="-240.0" cy="-72" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="-240.0" cy="-50" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="-240.0" cy="-28" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="-240.0" cy="-6" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="-218.0" cy="-72" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="-218.0" cy="-50" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="-218.0" cy="-28" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="-218.0" cy="-6" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="-196.0" cy="-72" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="-196.0" cy="-50" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="-196.0" cy="-28" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="-196.0" cy="-6" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="-174.0" cy="-72" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="-174.0" cy="-50" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="-174.0" cy="-28" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="-174.0" cy="-6" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><rect x="-105.0" y="-170" width="150" height="170" fill="none" fillOpacity="1" stroke="rgba(238,255,246,.88)" strokeWidth="4"/><circle cx="-87.0" cy="-152" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="-87.0" cy="-130" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="-87.0" cy="-108" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="-87.0" cy="-86" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="-87.0" cy="-64" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="-87.0" cy="-42" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="-87.0" cy="-20" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="-65.0" cy="-152" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="-65.0" cy="-130" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="-65.0" cy="-108" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="-65.0" cy="-86" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="-65.0" cy="-64" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="-65.0" cy="-42" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="-65.0" cy="-20" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="-43.0" cy="-152" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="-43.0" cy="-130" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="-43.0" cy="-108" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="-43.0" cy="-86" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="-43.0" cy="-64" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="-43.0" cy="-42" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="-43.0" cy="-20" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="-21.0" cy="-152" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="-21.0" cy="-130" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="-21.0" cy="-108" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="-21.0" cy="-86" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="-21.0" cy="-64" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="-21.0" cy="-42" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="-21.0" cy="-20" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="1.0" cy="-152" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="1.0" cy="-130" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="1.0" cy="-108" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="1.0" cy="-86" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="1.0" cy="-64" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="1.0" cy="-42" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="1.0" cy="-20" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="23.0" cy="-152" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="23.0" cy="-130" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="23.0" cy="-108" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="23.0" cy="-86" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="23.0" cy="-64" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="23.0" cy="-42" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="23.0" cy="-20" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><rect x="95.0" y="-260" width="190" height="260" fill={c.a} fillOpacity="0.8" stroke="rgba(238,255,246,.88)" strokeWidth="4"/><circle cx="113.0" cy="-242" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="113.0" cy="-220" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="113.0" cy="-198" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="113.0" cy="-176" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="113.0" cy="-154" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="113.0" cy="-132" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="113.0" cy="-110" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="113.0" cy="-88" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="113.0" cy="-66" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="113.0" cy="-44" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="113.0" cy="-22" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="135.0" cy="-242" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="135.0" cy="-220" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="135.0" cy="-198" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="135.0" cy="-176" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="135.0" cy="-154" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="135.0" cy="-132" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="135.0" cy="-110" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="135.0" cy="-88" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="135.0" cy="-66" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="135.0" cy="-44" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="135.0" cy="-22" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="157.0" cy="-242" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="157.0" cy="-220" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="157.0" cy="-198" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="157.0" cy="-176" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="157.0" cy="-154" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="157.0" cy="-132" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="157.0" cy="-110" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="157.0" cy="-88" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="157.0" cy="-66" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="157.0" cy="-44" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="157.0" cy="-22" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="179.0" cy="-242" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="179.0" cy="-220" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="179.0" cy="-198" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="179.0" cy="-176" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="179.0" cy="-154" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="179.0" cy="-132" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="179.0" cy="-110" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="179.0" cy="-88" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="179.0" cy="-66" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="179.0" cy="-44" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="179.0" cy="-22" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="201.0" cy="-242" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="201.0" cy="-220" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="201.0" cy="-198" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="201.0" cy="-176" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="201.0" cy="-154" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="201.0" cy="-132" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="201.0" cy="-110" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="201.0" cy="-88" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="201.0" cy="-66" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="201.0" cy="-44" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="201.0" cy="-22" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="223.0" cy="-242" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="223.0" cy="-220" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="223.0" cy="-198" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="223.0" cy="-176" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="223.0" cy="-154" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="223.0" cy="-132" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="223.0" cy="-110" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="223.0" cy="-88" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="223.0" cy="-66" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="223.0" cy="-44" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="223.0" cy="-22" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="245.0" cy="-242" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="245.0" cy="-220" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="245.0" cy="-198" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="245.0" cy="-176" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="245.0" cy="-154" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="245.0" cy="-132" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="245.0" cy="-110" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="245.0" cy="-88" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="245.0" cy="-66" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="245.0" cy="-44" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="245.0" cy="-22" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="267.0" cy="-242" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="267.0" cy="-220" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="267.0" cy="-198" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="267.0" cy="-176" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="267.0" cy="-154" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="267.0" cy="-132" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="267.0" cy="-110" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="267.0" cy="-88" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="267.0" cy="-66" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="267.0" cy="-44" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/><circle cx="267.0" cy="-22" r="4" fill="rgba(238,255,246,.88)" opacity="0.6"/></g>
      </g>
    ),
  },
  "product-photography-on-a-budget": {
    alt: "A camera aperture opening around a centred dot, framing a product to be photographed",
    draw: (c) => (
      <g transform="translate(5.20 -7.43) scale(0.1380)">
        <g transform="translate(600,293)"><path d="M 0 0 L 150.0 0.0 A 150 150 0 0 1 88.2 121.4 Z" fill="none" stroke="rgba(238,255,246,.88)" strokeWidth="3"/><path d="M 0 0 L 75.0 129.9 A 150 150 0 0 1 -61.0 137.0 Z" fill="none" stroke="rgba(238,255,246,.88)" strokeWidth="3"/><path d="M 0 0 L -75.0 129.9 A 150 150 0 0 1 -149.2 15.7 Z" fill="none" stroke="rgba(238,255,246,.88)" strokeWidth="3"/><path d="M 0 0 L -150.0 0.0 A 150 150 0 0 1 -88.2 -121.4 Z" fill="none" stroke="rgba(238,255,246,.88)" strokeWidth="3"/><path d="M 0 0 L -75.0 -129.9 A 150 150 0 0 1 61.0 -137.0 Z" fill="none" stroke="rgba(238,255,246,.88)" strokeWidth="3"/><path d="M 0 0 L 75.0 -129.9 A 150 150 0 0 1 149.2 -15.7 Z" fill="none" stroke="rgba(238,255,246,.88)" strokeWidth="3"/><line x1="0" y1="-220" x2="0" y2="-190" stroke={c.a} strokeWidth="5" strokeLinecap="round" transform="rotate(0)"/><line x1="0" y1="-220" x2="0" y2="-190" stroke={c.a} strokeWidth="5" strokeLinecap="round" transform="rotate(45)"/><line x1="0" y1="-220" x2="0" y2="-190" stroke={c.a} strokeWidth="5" strokeLinecap="round" transform="rotate(90)"/><line x1="0" y1="-220" x2="0" y2="-190" stroke={c.a} strokeWidth="5" strokeLinecap="round" transform="rotate(135)"/><line x1="0" y1="-220" x2="0" y2="-190" stroke={c.a} strokeWidth="5" strokeLinecap="round" transform="rotate(180)"/><line x1="0" y1="-220" x2="0" y2="-190" stroke={c.a} strokeWidth="5" strokeLinecap="round" transform="rotate(225)"/><line x1="0" y1="-220" x2="0" y2="-190" stroke={c.a} strokeWidth="5" strokeLinecap="round" transform="rotate(270)"/><line x1="0" y1="-220" x2="0" y2="-190" stroke={c.a} strokeWidth="5" strokeLinecap="round" transform="rotate(315)"/><circle r="60" fill={c.a}/><circle r="150" fill="none" stroke="rgba(238,255,246,.88)" strokeWidth="4"/></g>
      </g>
    ),
  },
  "measuring-website-roi": {
    alt: "A bar chart with one bar picked out by a dashed target circle above it",
    draw: (c) => (
      <g transform="translate(-55.30 -46.66) scale(0.2429)">
        <g transform="translate(600,293)"><rect x="-260" y="90" width="90" height="70" fill="none" fillOpacity="0.85" stroke="rgba(238,255,246,.88)" strokeWidth="4"/><rect x="-130" y="40" width="90" height="120" fill="none" fillOpacity="0.85" stroke="rgba(238,255,246,.88)" strokeWidth="4"/><rect x="0" y="65" width="90" height="95" fill="none" fillOpacity="0.85" stroke="rgba(238,255,246,.88)" strokeWidth="4"/><rect x="130" y="-30" width="90" height="190" fill={c.a} fillOpacity="0.85" stroke="rgba(238,255,246,.88)" strokeWidth="4"/><line x1="-280" y1="160" x2="260" y2="160" stroke="rgba(238,255,246,.88)" strokeWidth="4"/>
      <circle cx="180" cy="-30" r="46" fill="none" stroke="rgba(238,255,246,.88)" strokeWidth="2" strokeDasharray="4 6"/>
      <circle cx="180" cy="-30" r="10" fill="rgba(238,255,246,.88)"/>
      <line x1="180" y1="-90" x2="180" y2="-64" stroke="rgba(238,255,246,.88)" strokeWidth="2"/>
      <line x1="180" y1="14" x2="180" y2="40" stroke="rgba(238,255,246,.88)" strokeWidth="2"/>
    </g>
      </g>
    ),
  },
  "local-seo-for-uk-businesses": {
    alt: "A map pin dropped with soft rings spreading out beneath it, marking a local search result",
    draw: (c) => (
      <g transform="translate(22.94 -10.70) scale(0.1084)">
        <g transform="translate(600,293)"><circle cy="190" r="80" fill="none" stroke="rgba(238,255,246,.88)" strokeWidth="2" strokeDasharray="4 9" opacity="0.6"/><circle cy="190" r="140" fill="none" stroke="rgba(238,255,246,.88)" strokeWidth="2" strokeDasharray="4 9" opacity="0.44999999999999996"/><circle cy="190" r="200" fill="none" stroke="rgba(238,255,246,.88)" strokeWidth="2" strokeDasharray="4 9" opacity="0.3"/>
      <path d="M 0 -170 C 90 -170 150 -105 150 -30 C 150 70 0 190 0 190 C 0 190 -150 70 -150 -30 C -150 -105 -90 -170 0 -170 Z"
            fill={c.a} fillOpacity="0.85" stroke="rgba(238,255,246,.88)" strokeWidth="4"/>
      <circle cx="0" cy="-35" r="46" fill={c.a} stroke="rgba(238,255,246,.88)" strokeWidth="4"/>
    </g>
      </g>
    ),
  },
  "content-that-earns-enquiries": {
    alt: "A speech bubble full of text with a cursor arrow reaching toward it, content turning into a response",
    draw: (c) => (
      <g transform="translate(-44.59 -28.96) scale(0.2065)">
        <g transform="translate(600,293)"><path d="M -230 -140 h380 a30 30 0 0 1 30 30 v140 a30 30 0 0 1 -30 30 h-260 l-70 70 v-70 h-20 a30 30 0 0 1 -30 -30 v-140 a30 30 0 0 1 30 -30 z" fill="none" stroke="rgba(238,255,246,.88)" strokeWidth="4" strokeLinejoin="round"/><line x1="-190" y1="-70" x2="110" y2="-70" stroke="rgba(238,255,246,.88)" strokeWidth="6" strokeLinecap="round"/><line x1="-190" y1="-25" x2="80" y2="-25" stroke="rgba(238,255,246,.88)" strokeWidth="6" strokeLinecap="round"/><line x1="-190" y1="20" x2="50" y2="20" stroke="rgba(238,255,246,.88)" strokeWidth="6" strokeLinecap="round"/>
      <line x1="200" y1="60" x2="290" y2="130" stroke={c.a} strokeWidth="7" strokeLinecap="round"/>
      <circle cx="300" cy="140" r="14" fill={c.a}/>
    </g>
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
