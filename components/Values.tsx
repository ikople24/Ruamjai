import ScrollReveal from "./ScrollReveal";

const values = [
  {
    letter: "T",
    en: "Trustworthy",
    th: "ความน่าเชื่อถือ",
    desc: "ความซื่อสัตย์ ความโปรงใส และการรักษาคำพูดคือสิ่งที่ไม่มีการต่อรอง เป็นรากฐานของทุกความสัมพันธ์ที่ RJ สร้างขึ้น",
    tagline: "Our most valuable asset.",
  },
  {
    letter: "R",
    en: "Regional Mindset",
    th: "ความคิดระดับภูมิภาค",
    desc: "มองข้ามพรมแดน คิดเป็นภูมิภาค เข้าใจความหลากหลายทางวัฒนธรรม ภาษา และระบบของไทย–ลาว–อาเซียน ในฐานะข้อได้เปรียบ ไม่ใช่อุปสรรค",
    tagline: "Borders are lines on maps, not limits on opportunity.",
  },
  {
    letter: "U",
    en: "United Collaboration",
    th: "การร่วมมือเป็นหนึ่งเดียว",
    desc: "ความเชื่อว่า &ldquo;ร่วมใจ&rdquo; คือพลังที่แท้จริง การทำงานร่วมกับพันธมิตรทุกภาคส่วนด้วยความเคารพและความเสมอภาค",
    tagline: "Together, we grow further.",
  },
  {
    letter: "S",
    en: "Smart & Data-driven",
    th: "ฉลาดด้วยข้อมูล",
    desc: "ทุกคำแนะนำ ทุกแผน ทุกการตัดสินใจ ตั้งอยู่บนข้อมูลที่ดีที่สุดเท่าที่จะหาได้ ไม่ใช่ความรู้สึกหรือการเดา",
    tagline: "Evidence over opinion. Always.",
  },
  {
    letter: "T",
    en: "Transformative Growth",
    th: "ความยั่งยืนที่เปลี่ยนแปลง",
    desc: "สร้างการเติบโตที่ดีต่อเศรษฐกิจ สังคม และสิ่งแวดล้อมไปพร้อมกัน ไม่ใช่แค่เติบโตเพื่อเติบโต แต่เติบโตเพื่อสร้างความเปลี่ยนแปลงที่ดีขึ้น",
    tagline: "Profit and purpose are not opposites.",
  },
];

export default function Values() {
  return (
    <section id="values" className="relative bg-navy-900 py-28 lg:py-36 overflow-hidden">
      {/* Radial glow */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.04] pointer-events-none"
        style={{
          background: "radial-gradient(circle, #fbb040, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <ScrollReveal>
            <span className="section-label">Core Values</span>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2
              className="mt-5 text-[clamp(2.2rem,5vw,4rem)] font-light text-cream leading-tight"
              style={{ fontFamily: "var(--font-lemon-milk)" }}
            >
              We operate on{" "}
              <span className="text-gold-shimmer font-semibold">
                T.R.U.S.T.
              </span>
            </h2>
          </ScrollReveal>
        </div>

        {/* Values rows */}
        <div className="space-y-0">
          {values.map((v, i) => (
            <ScrollReveal key={`${v.letter}-${i}`} delay={i * 100}>
              <div className="value-row group">
                <div className="py-8 lg:py-10 grid lg:grid-cols-[80px_260px_1fr] gap-6 lg:gap-10 items-start">
                  {/* Giant letter */}
                  <div
                    className="text-[4.5rem] lg:text-[5.5rem] font-bold leading-none text-gold-500/20 group-hover:text-gold-500/40 transition-colors duration-300"
                    style={{ fontFamily: "var(--font-lemon-milk)" }}
                  >
                    {v.letter}
                  </div>

                  {/* Name */}
                  <div className="pt-1 lg:pt-3">
                    <h3
                      className="text-cream text-2xl lg:text-3xl font-medium leading-tight"
                      style={{ fontFamily: "var(--font-lemon-milk)" }}
                    >
                      {v.en}
                    </h3>
                    <p className="text-gold-500/60 text-xs tracking-widest mt-1 uppercase font-sans">
                      {v.th}
                    </p>
                  </div>

                  {/* Description */}
                  <div className="space-y-3 lg:pt-3">
                    <p
                      className="text-slate-muted leading-relaxed text-base font-light"
                      dangerouslySetInnerHTML={{ __html: v.desc }}
                    />
                    <p className="text-gold-500/80 text-sm italic" style={{ fontFamily: "var(--font-lemon-milk)" }}>
                      &ldquo;{v.tagline}&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
