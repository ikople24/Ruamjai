import ScrollReveal from "./ScrollReveal";

const timeline = [
  {
    phase: "Now",
    label: "ปัจจุบัน",
    markets: ["Thailand", "Laos"],
    color: "#fbb040",
    active: true,
  },
  {
    phase: "3–5 Years",
    label: "ระยะกลาง",
    markets: ["Cambodia", "Vietnam", "Myanmar"],
    color: "#c07e12",
    active: false,
  },
  {
    phase: "Long-term",
    label: "ระยะยาว",
    markets: ["ASEAN Platform", "China · Japan", "Korea · Europe"],
    color: "#8f5e0a",
    active: false,
  },
];

const stakeholders = [
  "บริษัทเอกชนไทยและลาว",
  "นักลงทุนสถาบัน",
  "หน่วยงานภาครัฐ",
  "สถาบันการศึกษา",
  "ผู้ประกอบการในอุตสาหกรรมเป้าหมาย",
];

export default function GeoVision() {
  return (
    <section id="vision" className="relative bg-navy-950 py-28 lg:py-36 overflow-hidden">
      {/* Background map-like grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #fbb040 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left — Geographic expansion */}
          <div>
            <ScrollReveal>
              <span className="section-label">Geographic Vision</span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2
                className="mt-5 text-[clamp(2.2rem,5vw,4rem)] font-light text-cream leading-tight"
                style={{ fontFamily: "var(--font-lemon-milk)" }}
              >
                A Region,
                <br />
                <span className="text-gold-shimmer font-medium">
                  One Ecosystem
                </span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="mt-4 text-slate-muted leading-relaxed font-light max-w-md">
                พรมแดนคือเส้นบนแผนที่ ไม่ใช่ขีดจำกัดของโอกาส RJ
                มองไทย–ลาว–อาเซียนเป็นตลาดเดียว
              </p>
            </ScrollReveal>

            <div className="mt-12 space-y-6 relative">
              {/* Vertical connector line */}
              <div className="absolute left-4 top-6 bottom-6 w-px bg-gradient-to-b from-gold-500 via-gold-700 to-gold-900" />

              {timeline.map((phase, i) => (
                <ScrollReveal key={phase.phase} delay={i * 150}>
                  <div className="flex gap-8 items-start group">
                    {/* Node */}
                    <div className="relative flex-shrink-0 mt-1">
                      <div
                        className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                          phase.active
                            ? "border-gold-500 bg-gold-500/20"
                            : "border-gold-700/50 bg-navy-900 group-hover:border-gold-600"
                        }`}
                      >
                        <div
                          className={`w-2.5 h-2.5 rounded-full ${
                            phase.active ? "bg-gold-500" : "bg-gold-700/40"
                          }`}
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="pt-1">
                      <div className="flex items-baseline gap-3 mb-2">
                        <span className="text-cream font-medium text-lg" style={{ fontFamily: "var(--font-lemon-milk)" }}>
                          {phase.phase}
                        </span>
                        <span className="text-slate-muted text-xs tracking-wider">
                          {phase.label}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {phase.markets.map((market) => (
                          <span
                            key={market}
                            className="px-3 py-1 rounded-full text-xs font-sans tracking-wide"
                            style={{
                              background: `${phase.color}18`,
                              color: phase.color,
                              border: `1px solid ${phase.color}40`,
                            }}
                          >
                            {market}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Right — Stakeholders */}
          <div className="lg:pt-16">
            <ScrollReveal delay={200}>
              <span className="section-label">Who We Work With</span>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <h3
                className="mt-5 text-[clamp(1.8rem,3vw,2.8rem)] font-light text-cream leading-snug"
                style={{ fontFamily: "var(--font-lemon-milk)" }}
              >
                Target{" "}
                <span className="text-gold-500 font-medium">
                  Stakeholders
                </span>
              </h3>
            </ScrollReveal>

            <div className="mt-8 space-y-3">
              {stakeholders.map((s, i) => (
                <ScrollReveal key={s} delay={300 + i * 80}>
                  <div className="flex items-center gap-4 group py-3 border-b border-gold-500/10 hover:border-gold-500/25 transition-colors duration-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0 group-hover:scale-150 transition-transform duration-300" />
                    <span className="text-slate-muted group-hover:text-cream/80 transition-colors duration-300 text-sm lg:text-base font-light">
                      {s}
                    </span>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Industries */}
            <ScrollReveal delay={700}>
              <div className="mt-10 p-6 border border-gold-500/15 bg-gold-500/[0.03] rounded-sm">
                <p className="text-gold-500/70 text-xs tracking-widest uppercase mb-4 font-sans">
                  Target Industries
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Clean Energy",
                    "Healthcare",
                    "Education",
                    "Premium Agriculture",
                    "Digital Technology",
                  ].map((industry) => (
                    <span
                      key={industry}
                      className="text-xs text-cream/70 px-3 py-1.5 border border-cream/10 hover:border-gold-500/30 hover:text-cream transition-all duration-200 font-sans tracking-wide"
                    >
                      {industry}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
