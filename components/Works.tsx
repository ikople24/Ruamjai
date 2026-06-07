import ScrollReveal from "./ScrollReveal";

/* Constellation / network "imagery" — evokes the Mekong-region connectivity. */
function WorkArt({ seed }: { seed: number }) {
  // deterministic pseudo-random nodes per seed
  const rnd = (n: number) => {
    const x = Math.sin(seed * 99.7 + n * 12.9) * 43758.5453;
    return x - Math.floor(x);
  };
  const nodes = Array.from({ length: 9 }, (_, i) => ({
    x: 20 + rnd(i) * 360,
    y: 20 + rnd(i + 50) * 200,
    r: 1.5 + rnd(i + 80) * 2.5,
    amber: rnd(i + 30) > 0.75,
  }));
  const links = nodes.flatMap((a, i) =>
    nodes.slice(i + 1).map((b) => ({ a, b, d: Math.hypot(a.x - b.x, a.y - b.y) }))
  ).filter((l) => l.d < 130);

  return (
    <svg viewBox="0 0 400 240" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id={`wk-${seed}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1a1650" />
          <stop offset="100%" stopColor="#080620" />
        </linearGradient>
      </defs>
      <rect width="400" height="240" fill={`url(#wk-${seed})`} />
      <g stroke="#30c2f2" strokeWidth="0.8" opacity="0.3">
        {links.map((l, i) => (
          <line key={i} x1={l.a.x} y1={l.a.y} x2={l.b.x} y2={l.b.y} />
        ))}
      </g>
      {nodes.map((n, i) => (
        <circle key={i} cx={n.x} cy={n.y} r={n.r} fill={n.amber ? "#fbb040" : "#6fd2f5"} opacity={n.amber ? 0.95 : 0.75} />
      ))}
    </svg>
  );
}

const works = [
  { title: "Mekong Energy Corridor", tag: "Clean Energy", seed: 3, cls: "md:row-span-2" },
  { title: "Cross-Border Trade Platform", tag: "Digital Technology", seed: 7, cls: "" },
  { title: "ASEAN Data Hub", tag: "Data Platform", seed: 11, cls: "" },
  { title: "Thai–Lao JV Initiative", tag: "Investment", seed: 5, cls: "md:col-span-2" },
];

export default function Works() {
  return (
    <section id="works" className="relative bg-navy-800 py-24 lg:py-32 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <div className="text-center mb-14 lg:mb-20">
            <span className="section-label justify-center">Selected Initiatives</span>
            <h2
              className="mt-5 text-[clamp(2rem,4.5vw,3.4rem)] font-light text-cream"
              style={{ fontFamily: "var(--font-lemon-milk)" }}
            >
              Our Latest <span className="text-gold-shimmer font-semibold">Works</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:auto-rows-[230px]">
          {works.map((w, i) => (
            <ScrollReveal key={w.title} delay={i * 100} className={`${w.cls} h-full`}>
              <article className={`group relative h-full min-h-[230px] overflow-hidden rounded-xl border border-white/6`}>
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                  <WorkArt seed={w.seed} />
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-navy-950/95 via-navy-950/20 to-transparent" />
                {/* label */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block text-gold-500 text-[0.65rem] tracking-[0.2em] uppercase font-sans mb-2">
                    {w.tag}
                  </span>
                  <h3
                    className="text-cream text-lg lg:text-xl font-semibold leading-tight"
                    style={{ fontFamily: "var(--font-lemon-milk)" }}
                  >
                    {w.title}
                  </h3>
                  <div className="h-px w-0 group-hover:w-16 bg-gold-500 mt-3 transition-all duration-400" />
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
