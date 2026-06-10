import ScrollReveal from "./ScrollReveal";

/* On-brand abstract "imagery" for each service — gradient + motif SVG. */
function ServiceArt({ variant }: { variant: 1 | 2 | 3 }) {
  return (
    <svg viewBox="0 0 400 240" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id={`svc-bg-${variant}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#332e84" />
          <stop offset="100%" stopColor="#262265" />
        </linearGradient>
        <linearGradient id={`svc-line-${variant}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#30c2f2" />
          <stop offset="100%" stopColor="#fbb040" />
        </linearGradient>
      </defs>
      <rect width="400" height="240" fill={`url(#svc-bg-${variant})`} />

      {variant === 1 && (
        <g fill="none" stroke={`url(#svc-line-${variant})`} strokeWidth="2.5" opacity="0.85">
          <path d="M-20 200 Q 120 60 200 130 T 420 70" />
          <path d="M-20 230 Q 140 110 220 160 T 420 110" opacity="0.5" />
          <circle cx="200" cy="130" r="5" fill="#30c2f2" stroke="none" />
          <circle cx="320" cy="92" r="4" fill="#fbb040" stroke="none" />
        </g>
      )}
      {variant === 2 && (
        <g opacity="0.9">
          {[60, 110, 160, 210].map((h, i) => (
            <rect key={h} x={70 + i * 70} y={200 - h} width="34" height={h} rx="4"
              fill={i % 2 ? "#fbb040" : "#30c2f2"} opacity={0.5 + i * 0.12} />
          ))}
          <path d="M80 70 L 150 120 L 220 60 L 300 100" fill="none" stroke="#fff" strokeWidth="2" opacity="0.5" strokeLinecap="round" />
        </g>
      )}
      {variant === 3 && (
        <g>
          {[[90,80],[200,60],[310,110],[150,170],[280,180],[210,120]].map(([x,y],i)=>(
            <circle key={i} cx={x} cy={y} r={i===5?6:4} fill={i===5?"#fbb040":"#30c2f2"} />
          ))}
          <g stroke="#8db6e6" strokeWidth="1.4" opacity="0.45">
            <line x1="90" y1="80" x2="210" y2="120" /><line x1="200" y1="60" x2="210" y2="120" />
            <line x1="310" y1="110" x2="210" y2="120" /><line x1="150" y1="170" x2="210" y2="120" />
            <line x1="280" y1="180" x2="210" y2="120" />
          </g>
        </g>
      )}
    </svg>
  );
}

const services: { title: string; role: string; desc: string; variant: 1 | 2 | 3 }[] = [
  {
    title: "Strategic Advisory",
    role: "Think Tank",
    desc: "วิเคราะห์ตลาด นโยบาย และโอกาสการลงทุนเชิงลึก ออกแบบกลยุทธ์ระดับองค์กรและแผนการเติบโตที่นำไปปฏิบัติได้จริง",
    variant: 1,
  },
  {
    title: "Investment Facilitation",
    role: "Deal Maker",
    desc: "จัดวางโครงสร้างทางการเงิน ระดมทุน และประสานแหล่งทุนทั้งในและนอกประเทศ เชื่อมดีล MOU และ Joint Venture ข้ามพรมแดน",
    variant: 2,
  },
  {
    title: "Project Enablement",
    role: "Project Enabler",
    desc: "รับช่วงบริหารและขับเคลื่อนโครงการตั้งแต่แนวคิดจนถึงการลงมือทำ พร้อมระบบข้อมูลและเครือข่ายพันธมิตรทั่วภูมิภาค",
    variant: 3,
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-navy-900 py-24 lg:py-32 overflow-hidden">
      <div
        className="absolute top-0 right-0 w-96 h-96 opacity-[0.08] pointer-events-none"
        style={{ background: "radial-gradient(circle at top right, #30c2f2, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <div className="text-center mb-14 lg:mb-20">
            <span className="section-label justify-center">What We Offer</span>
            <h2
              className="mt-5 text-[clamp(2rem,4.5vw,3.4rem)] font-light text-cream"
              style={{ fontFamily: "var(--font-lemon-milk)" }}
            >
              Our <span className="text-gold-shimmer font-semibold">Services</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 120}>
              <article className="group h-full rounded-xl overflow-hidden border border-white/6 bg-navy-950/60 transition-transform duration-300 hover:-translate-y-1.5">
                {/* image + title bar */}
                <div className="relative h-52 overflow-hidden">
                  <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
                    <ServiceArt variant={s.variant} />
                  </div>
                  <div className="absolute inset-0 bg-linear-to-t from-navy-950/90 via-transparent to-transparent" />
                  {/* title bar */}
                  <div className="absolute bottom-0 left-0 right-0 px-6 py-3 bg-navy-700/85 backdrop-blur-sm border-t border-gold-500/30">
                    <h3 className="text-cream text-lg font-semibold leading-tight" style={{ fontFamily: "var(--font-lemon-milk)" }}>
                      {s.title}
                    </h3>
                    <p className="text-gold-500 text-[0.7rem] tracking-widest uppercase font-sans mt-0.5">
                      {s.role}
                    </p>
                  </div>
                </div>
                <p className="text-slate-muted text-sm leading-relaxed font-light px-6 py-6">
                  {s.desc}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
