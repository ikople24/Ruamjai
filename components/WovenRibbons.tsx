/* Vertical "warp" strands — blue group then amber group.
   Index parity drives the weave: even strands pass UNDER the weft on the
   top run (and over on the bottom run); odd strands do the opposite. */
const warp: { x: number; w: number; kind: "blue" | "amber" }[] = [
  { x: 166, w: 8, kind: "blue" },
  { x: 184, w: 9, kind: "blue" },
  { x: 202, w: 8, kind: "blue" },
  { x: 244, w: 8, kind: "blue" },
  { x: 262, w: 9, kind: "blue" },
  { x: 280, w: 8, kind: "blue" },
  { x: 332, w: 8, kind: "amber" },
  { x: 350, w: 9, kind: "amber" },
  { x: 368, w: 8, kind: "amber" },
  { x: 410, w: 8, kind: "amber" },
  { x: 428, w: 9, kind: "amber" },
];

/* Weft "ribbon" — three nested strands that U-turn on the left (the R/J hook)
   and run right across the warp, weaving over and under it. */
const weft = [
  { d: "M 440 591 H 150 A 9 9 0 0 0 150 609 H 440", w: 7 },
  { d: "M 440 580 H 150 A 20 20 0 0 0 150 620 H 440", w: 7 },
  { d: "M 440 569 H 150 A 31 31 0 0 0 150 631 H 440", w: 7 },
];

export default function WovenRibbons({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`woven ${className}`}
      viewBox="0 0 440 780"
      fill="none"
      preserveAspectRatio="xMaxYMid slice"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="warpBlue"
          gradientUnits="userSpaceOnUse"
          x1="0"
          y1="0"
          x2="0"
          y2="780"
        >
          <stop offset="0%" stopColor="#a6e4f9" />
          <stop offset="38%" stopColor="#4ccbf4" />
          <stop offset="72%" stopColor="#46abe8" />
          <stop offset="100%" stopColor="#4f7ad4" />
        </linearGradient>
        <linearGradient
          id="warpAmber"
          gradientUnits="userSpaceOnUse"
          x1="0"
          y1="0"
          x2="0"
          y2="780"
        >
          <stop offset="0%" stopColor="#ffe9c2" />
          <stop offset="38%" stopColor="#fdbe5b" />
          <stop offset="72%" stopColor="#f5ab44" />
          <stop offset="100%" stopColor="#d99022" />
        </linearGradient>
        <linearGradient
          id="weftGrad"
          gradientUnits="userSpaceOnUse"
          x1="119"
          y1="0"
          x2="440"
          y2="0"
        >
          <stop offset="0%" stopColor="#dcebfc" />
          <stop offset="50%" stopColor="#9fc1ef" />
          <stop offset="100%" stopColor="#7fa3e4" />
        </linearGradient>
        <radialGradient id="hookGlow" cx="0.32" cy="0.77" r="0.4">
          <stop offset="0%" stopColor="#30c2f2" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#30c2f2" stopOpacity="0" />
        </radialGradient>

        {/* Checkerboard weave mask: black hides the weft so the warp shows
            through. Even warp strands punch the TOP run, odd the BOTTOM run. */}
        <mask id="weave">
          <rect width="440" height="780" fill="#fff" />
          {warp.map((v, i) => (
            <rect
              key={v.x}
              x={v.x - (v.w + 3) / 2}
              y={i % 2 === 0 ? 566 : 600}
              width={v.w + 3}
              height={i % 2 === 0 ? 36 : 40}
              fill="#000"
            />
          ))}
        </mask>
      </defs>

      {/* soft glow behind the hook */}
      <rect x="60" y="520" width="320" height="220" fill="url(#hookGlow)" />

      {/* WARP — vertical strands as rects (drawn first = behind the weft).
          Rects keep a non-zero bbox so the gradient fill actually paints. */}
      <g>
        {warp.map((v) => (
          <rect
            key={v.x}
            x={v.x - v.w / 2}
            y={-4}
            width={v.w}
            height={788}
            fill={v.kind === "blue" ? "url(#warpBlue)" : "url(#warpAmber)"}
          />
        ))}
      </g>

      {/* WEFT — the hooking ribbon, masked to weave through the warp */}
      <g mask="url(#weave)" strokeLinecap="round">
        {weft.map((s) => (
          <path key={s.d} d={s.d} stroke="url(#weftGrad)" strokeWidth={s.w} />
        ))}
      </g>
    </svg>
  );
}
