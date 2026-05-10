import React from "react";

/**
 * Garland — stylised marigold + jasmine-style hanging garland.
 * SVG only (no images). Subtle sway animation in CSS.
 *
 * Props:
 *   variant: "top" (default) — straight rope, slight droop
 *            "curve"          — used as a section separator with a curved string
 *   accent:  override accent color for variations
 */
const Garland = ({ variant = "top", className = "" }) => {
  // Generate flower positions once
  const flowers = React.useMemo(() => {
    const items = [];
    // 22 flowers spread evenly, alternating big/small + color tones
    const palette = [
      { outer: "#E8772A", inner: "#F6B042", core: "#7A2E0E" }, // marigold orange
      { outer: "#E8B95E", inner: "#FFD980", core: "#8A5A1A" }, // marigold yellow
      { outer: "#C8351F", inner: "#E8772A", core: "#5C1A0A" }, // deep red marigold
      { outer: "#F1F1E8", inner: "#FFFFFF", core: "#C9A24A" }  // jasmine white
    ];
    for (let i = 0; i < 22; i++) {
      const palIdx = i % palette.length;
      const isJasmine = palIdx === 3;
      items.push({
        x: 4 + i * (92 / 21), // 4 → 96 percent
        size: isJasmine ? 9 : 13 + (i % 3) * 1.5,
        wobble: (i % 2 === 0 ? 1 : -1) * (3 + (i % 3)),
        delay: (i % 7) * 0.25,
        kind: isJasmine ? "jasmine" : "marigold",
        ...palette[palIdx]
      });
    }
    return items;
  }, []);

  // Leaf positions (between flowers, every other gap)
  const leaves = React.useMemo(() => {
    const items = [];
    for (let i = 0; i < 11; i++) {
      items.push({ x: 8 + i * 8.4, side: i % 2 === 0 ? -1 : 1 });
    }
    return items;
  }, []);

  // String path: gentle droop (catenary-like quadratic curve)
  const ropeD = variant === "curve"
    ? "M0,8 Q50,42 100,8"
    : "M0,6 Q50,22 100,6";

  return (
    <div
      className={`kc-garland kc-garland--${variant} ${className}`}
      data-testid="kc-garland"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 100 60"
        preserveAspectRatio="none"
        className="kc-garland__svg"
      >
        {/* String / rope */}
        <path
          d={ropeD}
          fill="none"
          stroke="#5C3A1E"
          strokeOpacity="0.55"
          strokeWidth="0.4"
          strokeLinecap="round"
        />

        {/* Leaves */}
        {leaves.map((l, idx) => {
          // y on the rope curve approx
          const t = l.x / 100;
          const ropeY = variant === "curve"
            ? 8 + 4 * 4 * t * (1 - t) * (42 - 8) / 4 // quadratic bezier y
            : 6 + 4 * t * (1 - t) * 16;
          return (
            <g key={`l-${idx}`} transform={`translate(${l.x} ${ropeY + 1.5}) rotate(${l.side * 25})`}>
              <ellipse rx="2.2" ry="1" cx="1.5" cy="0" fill="#3F6B3A" opacity="0.85" />
              <ellipse rx="2.2" ry="1" cx="1.5" cy="0" fill="#5A8C44" opacity="0.6" />
            </g>
          );
        })}

        {/* Flowers — placed below rope, hanging by a tiny stem */}
        {flowers.map((f, idx) => {
          const t = f.x / 100;
          const ropeY = variant === "curve"
            ? 8 + (42 - 8) * 4 * t * (1 - t)
            : 6 + 16 * 4 * t * (1 - t) / 4; // small droop
          const flowerY = ropeY + (f.kind === "jasmine" ? 5 : 7);
          return (
            <g
              key={`f-${idx}`}
              className="kc-garland__flower"
              style={{
                transformOrigin: `${f.x}% ${ropeY}px`,
                animationDelay: `${f.delay}s`
              }}
            >
              {/* tiny stem */}
              <line
                x1={f.x}
                y1={ropeY}
                x2={f.x}
                y2={flowerY - f.size * 0.12}
                stroke="#3F6B3A"
                strokeWidth="0.18"
                opacity="0.7"
              />
              {f.kind === "marigold" ? (
                <g transform={`translate(${f.x} ${flowerY})`}>
                  {/* outer petal ring */}
                  {Array.from({ length: 10 }).map((_, p) => (
                    <circle
                      key={p}
                      cx={Math.cos((p / 10) * Math.PI * 2) * (f.size * 0.18)}
                      cy={Math.sin((p / 10) * Math.PI * 2) * (f.size * 0.18)}
                      r={f.size * 0.18}
                      fill={f.outer}
                      opacity="0.95"
                    />
                  ))}
                  {/* inner ring */}
                  {Array.from({ length: 7 }).map((_, p) => (
                    <circle
                      key={`i-${p}`}
                      cx={Math.cos((p / 7) * Math.PI * 2) * (f.size * 0.11)}
                      cy={Math.sin((p / 7) * Math.PI * 2) * (f.size * 0.11)}
                      r={f.size * 0.13}
                      fill={f.inner}
                    />
                  ))}
                  {/* core */}
                  <circle r={f.size * 0.09} fill={f.core} />
                </g>
              ) : (
                /* jasmine — five-petal small white flower */
                <g transform={`translate(${f.x} ${flowerY})`}>
                  {Array.from({ length: 5 }).map((_, p) => (
                    <ellipse
                      key={p}
                      cx={Math.cos((p / 5) * Math.PI * 2) * (f.size * 0.18)}
                      cy={Math.sin((p / 5) * Math.PI * 2) * (f.size * 0.18)}
                      rx={f.size * 0.2}
                      ry={f.size * 0.12}
                      fill={f.outer}
                      opacity="0.95"
                      transform={`rotate(${(p / 5) * 360} ${
                        Math.cos((p / 5) * Math.PI * 2) * (f.size * 0.18)
                      } ${Math.sin((p / 5) * Math.PI * 2) * (f.size * 0.18)})`}
                    />
                  ))}
                  <circle r={f.size * 0.1} fill={f.core} />
                </g>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default Garland;
