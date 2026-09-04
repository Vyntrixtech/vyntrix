// Compact decorative illustrations for service cards — CSS-shape compositions
// that echo the hi-fi design's animated glass rectangles, orbit rings and
// pulsing nodes, keyed by service icon type.

const compositions = {
  website: (
    <>
      <div className="si-panel si-panel--wide" />
      <div className="si-bar si-bar--a" style={{ animation: "vt-breathe 3s ease-in-out infinite" }} />
      <div className="si-node si-node--type" />
    </>
  ),
  app: (
    <>
      <div className="si-panel si-panel--tall" style={{ left: "30%", animation: "vt-float 7s ease-in-out infinite" }} />
      <div className="si-panel si-panel--tall si-panel--accent" style={{ left: "54%", animation: "vt-float2 7s ease-in-out infinite" }} />
    </>
  ),
  brand: (
    <>
      <div className="si-ring" style={{ animation: "vt-orbit 30s linear infinite" }} />
      <div className="si-dot si-dot--core" style={{ animation: "vt-breathe 3.6s ease-in-out infinite" }} />
    </>
  ),
  design: (
    <>
      <div className="si-panel si-panel--sq" style={{ left: "32%", animation: "vt-float2 7s ease-in-out infinite" }} />
      <div className="si-panel si-panel--sq si-panel--accent" style={{ left: "48%", top: "16%", animation: "vt-float 7s ease-in-out infinite" }} />
    </>
  ),
  ecommerce: (
    <>
      <div className="si-path" />
      <div className="si-dot si-dot--a" />
      <div className="si-dot si-dot--b" />
      <div className="si-panel si-panel--sq si-panel--accent" style={{ left: "44%", top: "24%" }} />
    </>
  ),
  it: (
    <>
      <div className="si-ring si-ring--lg" style={{ animation: "vt-orbit 26s linear infinite" }} />
      <div className="si-dot si-dot--core" style={{ animation: "vt-pulse 3s ease-in-out infinite" }} />
    </>
  ),
  maintenance: (
    <>
      <div className="si-panel si-panel--wide" />
      <div className="si-dot si-dot--a" style={{ animation: "vt-pulse 2.6s ease-in-out infinite" }} />
      <div className="si-dot si-dot--b" style={{ animation: "vt-pulse 2.6s .4s ease-in-out infinite" }} />
    </>
  ),
};

export default function ServiceIllustration({ type, height = 120 }) {
  return (
    <div className="service-illustration" style={{ height }}>
      {compositions[type] || compositions.website}
    </div>
  );
}
