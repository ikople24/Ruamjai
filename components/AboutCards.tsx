import ScrollReveal from "./ScrollReveal";

const cards = [
  {
    title: "The Trusted Strategist",
    th: "ที่ปรึกษาที่ไว้วางใจ",
    desc: "ออกแบบกลยุทธ์บนข้อมูลจริงและความเข้าใจบริบทท้องถิ่น ส่งมอบคำแนะนำที่นำไปปฏิบัติได้จริง ด้วยความโปร่งใสและรักษาคำพูดเป็นที่ตั้ง",
    icon: (
      <svg width="30" height="30" viewBox="0 0 28 28" fill="none">
        <path
          d="M3 14l4-4 4 3 3-3 4 4M14 13l3 3 4-4 1 1M9 17l3 3 5-5"
          stroke="#fff"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "The Regional Connector",
    th: "ผู้เชื่อมโยงภูมิภาค",
    desc: "เชื่อมองค์ความรู้ เงินทุน และเครือข่ายธุรกิจระหว่างไทย–ลาว–อาเซียน ทำให้ดีล MOU และความร่วมมือข้ามพรมแดนเกิดขึ้นได้จริง",
    icon: (
      <svg width="30" height="30" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="#fff" strokeWidth="1.6" />
        <path d="M4 14h20M14 4c3 3 3 17 0 20M14 4c-3 3-3 17 0 20" stroke="#fff" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    title: "The Visionary Builder",
    th: "ผู้สร้างอนาคต",
    desc: "ขับเคลื่อนโครงการที่สร้างผลกระทบเชิงบวกต่อเศรษฐกิจ สังคม และสิ่งแวดล้อม เติบโตอย่างยั่งยืนเพื่อภูมิภาคลุ่มน้ำโขงร่วมกัน",
    icon: (
      <svg width="30" height="30" viewBox="0 0 28 28" fill="none">
        <path d="M14 3a8 8 0 0 1 5 14c-.7.6-1 1.3-1 2.2V20h-8v-.8c0-.9-.3-1.6-1-2.2A8 8 0 0 1 14 3z" stroke="#fff" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M11 23h6M12 25.5h4" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function AboutCards() {
  return (
    <section id="about" className="relative bg-navy-800 py-24 lg:py-32 overflow-hidden">
      {/* faint dot grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)",
          backgroundSize: "34px 34px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <div className="text-center mb-14 lg:mb-20">
            <span className="section-label justify-center">Who We Are</span>
            <h2
              className="mt-5 text-[clamp(2rem,4.5vw,3.4rem)] font-light text-cream"
              style={{ fontFamily: "var(--font-lemon-milk)" }}
            >
              About <span className="text-gold-shimmer font-semibold">Us</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((c, i) => (
            <ScrollReveal key={c.title} delay={i * 120}>
              <article className="group relative h-full rounded-xl overflow-hidden border border-white/6 bg-linear-to-b from-navy-900 to-navy-950 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)] transition-transform duration-300 hover:-translate-y-1.5">
                {/* Diagonal indigo header with white icon */}
                <div
                  className="relative h-24"
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 100% 55%, 0 86%)",
                    background:
                      "linear-gradient(120deg, #262265 0%, #1f1a59 55%, #30c2f2 165%)",
                  }}
                >
                  <div className="absolute top-6 right-7 transition-transform duration-300 group-hover:scale-110">
                    {c.icon}
                  </div>
                  {/* amber accent tick */}
                  <div className="absolute left-7 top-6 h-7 w-1 rounded-full bg-gold-500" />
                </div>

                <div className="px-7 pb-9 pt-5">
                  <h3
                    className="text-cream text-xl font-semibold leading-snug"
                    style={{ fontFamily: "var(--font-lemon-milk)" }}
                  >
                    {c.title}
                  </h3>
                  <p className="text-gold-500/70 text-xs tracking-widest uppercase mt-1.5 font-sans">
                    {c.th}
                  </p>
                  <p className="text-slate-muted text-sm leading-relaxed font-light mt-4">
                    {c.desc}
                  </p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
