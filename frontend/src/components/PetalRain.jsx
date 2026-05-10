import React from "react";

/**
 * PetalRain — soft rose petals falling continuously across the page.
 * CSS-driven animation with minimal JS for randomization.
 *
 * Implementation notes:
 *  - Container is fixed, full viewport, pointer-events:none, behind interactive UI.
 *  - 18 petals (within the 10–25 limit) generated once on mount.
 *  - Each petal has random: x position, size, duration, delay, drift direction,
 *    rotation speed, color tint and opacity.
 *  - Animation: vertical fall (top → bottom) + horizontal sway (sin-like via
 *    keyframed translateX) + spin. Smooth fade-in/out at the edges.
 */

const PETAL_COUNT = 18;

const random = (min, max) => Math.random() * (max - min) + min;

const TINTS = [
  // soft red / pink palette, with a touch of marigold to tie in with garland
  ["#F4A6B6", "#D86F8A"],
  ["#F3B8B0", "#C8606A"],
  ["#F7C9CF", "#E08CA0"],
  ["#F2A07A", "#D96E3A"],
  ["#FBD3C2", "#E89A7A"]
];

const PetalRain = () => {
  const petals = React.useMemo(() => {
    return Array.from({ length: PETAL_COUNT }, (_, i) => {
      const tint = TINTS[i % TINTS.length];
      return {
        id: i,
        left: random(0, 100),         // %
        size: random(14, 26),         // px
        duration: random(11, 19),     // s
        delay: -random(0, 18),        // negative so they're pre-staggered
        drift: random(40, 110) * (Math.random() > 0.5 ? 1 : -1), // px sway
        spinDur: random(4, 9),        // s
        spinDir: Math.random() > 0.5 ? 1 : -1,
        opacity: random(0.4, 0.7),
        startRot: random(0, 360),
        tint
      };
    });
  }, []);

  return (
    <div
      className="kc-petal-rain"
      data-testid="kc-petal-rain"
      aria-hidden="true"
    >
      {petals.map((p) => (
        <span
          key={p.id}
          className="kc-petal"
          data-testid={`kc-petal-${p.id}`}
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size * 1.25}px`,
            opacity: p.opacity,
            animationDuration: `${p.duration}s, ${p.spinDur}s`,
            animationDelay: `${p.delay}s, ${p.delay}s`,
            // CSS custom props consumed by keyframes
            ["--kc-drift"]: `${p.drift}px`,
            ["--kc-spin-dir"]: p.spinDir,
            ["--kc-rot-start"]: `${p.startRot}deg`
          }}
        >
          <svg viewBox="0 0 24 30" width="100%" height="100%" aria-hidden="true">
            <defs>
              <linearGradient id={`pg-${p.id}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={p.tint[0]} />
                <stop offset="100%" stopColor={p.tint[1]} />
              </linearGradient>
            </defs>
            {/* stylised petal: rounded teardrop with a subtle crease */}
            <path
              d="M12 1 C 19 8 22 16 12 29 C 2 16 5 8 12 1 Z"
              fill={`url(#pg-${p.id})`}
            />
            <path
              d="M12 4 C 12 12 12 22 12 28"
              stroke="rgba(255,255,255,0.35)"
              strokeWidth="0.6"
              fill="none"
            />
          </svg>
        </span>
      ))}
    </div>
  );
};

export default PetalRain;
