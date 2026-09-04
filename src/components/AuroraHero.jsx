// Reusable "aurora" hero wrapper: a radial ground gradient plus one or two
// drifting glow blobs, matching the hi-fi design's animated backgrounds.

export default function AuroraHero({ ground, blobs = [], children, className = "" }) {
  return (
    <div className={"aurora " + className}>
      <div className="aurora-ground" style={{ background: ground }} />
      {blobs.map((b, i) => (
        <div
          key={i}
          className="aurora-blob"
          style={{
            left: b.left,
            right: b.right,
            top: b.top,
            width: b.width,
            height: b.height,
            transform: b.center ? "translateX(-50%)" : undefined,
            background: `radial-gradient(closest-side, ${b.color}, transparent 70%)`,
            animationDuration: b.duration || "20s",
            animationDirection: b.reverse ? "reverse" : "normal",
          }}
        />
      ))}
      <div style={{ position: "relative" }}>{children}</div>
    </div>
  );
}
