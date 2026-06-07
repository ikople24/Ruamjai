import ScrollReveal from "./ScrollReveal";

const stats = [
  { value: "2", label: "Nations", sub: "Thailand & Laos" },
  { value: "5", label: "Pillars", sub: "Strategic Functions" },
  { value: "∞", label: "Network", sub: "Regional & ASEAN" },
];

export default function About() {
  return (
    <section id="story" className="relative bg-navy-900 py-28 lg:py-36 overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 80px, #fbb040 80px, #fbb040 81px), repeating-linear-gradient(90deg, transparent, transparent 80px, #fbb040 80px, #fbb040 81px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left — Stats */}
          <div className="space-y-12">
            <ScrollReveal>
              <span className="section-label">Who We Are</span>
            </ScrollReveal>

            <div className="space-y-8">
              {stats.map((stat, i) => (
                <ScrollReveal key={stat.label} delay={i * 120}>
                  <div className="flex items-baseline gap-6 group">
                    <span
                      className="text-[5rem] lg:text-[6.5rem] font-light leading-none text-gold-500/80 group-hover:text-gold-500 transition-colors duration-300"
                      style={{ fontFamily: "var(--font-lemon-milk)" }}
                    >
                      {stat.value}
                    </span>
                    <div>
                      <p className="text-cream text-xl font-medium tracking-wide">
                        {stat.label}
                      </p>
                      <p className="text-slate-muted text-sm mt-0.5 tracking-wider">
                        {stat.sub}
                      </p>
                    </div>
                  </div>
                  <div className="divider-gold mt-6" />
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Right — Text */}
          <div className="space-y-8">
            <ScrollReveal delay={100}>
              <blockquote
                className="text-[clamp(1.4rem,2.5vw,2rem)] font-light leading-relaxed text-cream/90 border-l-2 border-gold-500 pl-6"
                style={{ fontFamily: "var(--font-lemon-milk)" }}
              >
                &ldquo;เราไม่ได้ขายคำปรึกษา
                <br />
                เราส่งมอบ{" "}
                <em className="text-gold-500 not-italic font-medium">
                  การเชื่อมโยงที่ทำให้สิ่งใหม่เกิดขึ้นจริง
                </em>
                &rdquo;
              </blockquote>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-slate-muted leading-relaxed text-base lg:text-lg font-light">
                Ruamjai Thai-Lao Co., Ltd. or{" "}
                <strong className="text-cream font-medium">RJ</strong> is a{" "}
                <strong className="text-cream font-medium">
                  Strategic Knowledge &amp; Investment Hub
                </strong>{" "}
                that bridges knowledge, capital, data, business networks, and
                sustainable development — driving growth for partners across
                the public, private, academic, and civil society sectors in
                Thailand, Laos, and ASEAN.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <p className="text-slate-muted leading-relaxed text-base lg:text-lg font-light">
                ชื่อ{" "}
                <strong className="text-gold-500 font-medium">
                  &ldquo;ร่วมใจ&rdquo;
                </strong>{" "}
                สะท้อนรากฐานของแบรนด์อย่างชัดเจน — การรวมพลัง รวมความคิด
                และรวมโอกาสของผู้คนจากสองฝั่งแม่น้ำโขงให้กลายเป็นพลังของ
                ภูมิภาคเดียวกัน
              </p>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="flex items-start gap-4 pt-4">
                <div className="w-10 h-10 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M8 1l1.8 3.6L14 5.3l-3 2.9.7 4.1L8 10.4 4.3 12.3 5 8.2 2 5.3l4.2-.7L8 1z"
                      fill="#fbb040"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-cream font-medium text-sm">Brand Essence</p>
                  <p
                    className="text-gold-500 text-xl mt-1 font-medium"
                    style={{ fontFamily: "var(--font-lemon-milk)" }}
                  >
                    Smart, Sustainable, Together
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
