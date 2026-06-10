import ScrollReveal from "./ScrollReveal";

const pillars = [
  {
    num: "01",
    en: "Strategic Architect",
    th: "สถาปนิกเชิงกลยุทธ์",
    desc: "ออกแบบกลยุทธ์ระดับองค์กร แผนการเติบโต และโครงสร้างโครงการขนาดใหญ่ตั้งแต่แนวคิดจนถึงการลงมือทำ",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4L4 10v14h20V10L14 4z" stroke="#fbb040" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M10 24V16h8v8" stroke="#fbb040" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M14 4v6" stroke="#fbb040" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: "02",
    en: "Finance Orchestrator",
    th: "ผู้ประสานทางการเงิน",
    desc: "จัดวางโครงสร้างทางการเงิน ระดมทุน ประสานแหล่งทุนทั้งในและนอกประเทศ และบริหารความเสี่ยงอย่างมืออาชีพ",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="#fbb040" strokeWidth="1.5"/>
        <path d="M14 8v2M14 18v2M10.5 11.5c0-1.5 1.5-2.5 3.5-2.5s3.5 1 3.5 2.5-3.5 2.5-3.5 2.5-3.5 1-3.5 2.5 1.5 2.5 3.5 2.5 3.5-1 3.5-2.5" stroke="#fbb040" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: "03",
    en: "Integrated Data Platform",
    th: "แพลตฟอร์มข้อมูลแบบบูรณาการ",
    desc: "พัฒนาและบริหารระบบข้อมูลกลาง รวมข้อมูลตลาด อุตสาหกรรม การลงทุน และนโยบายของไทย–ลาว–อาเซียน",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="6" width="20" height="4" rx="1" stroke="#fbb040" strokeWidth="1.5"/>
        <rect x="4" y="12" width="20" height="4" rx="1" stroke="#fbb040" strokeWidth="1.5"/>
        <rect x="4" y="18" width="20" height="4" rx="1" stroke="#fbb040" strokeWidth="1.5"/>
        <circle cx="8" cy="8" r="1" fill="#fbb040"/>
        <circle cx="8" cy="14" r="1" fill="#fbb040"/>
        <circle cx="8" cy="20" r="1" fill="#fbb040"/>
      </svg>
    ),
  },
  {
    num: "04",
    en: "Business Development Engine",
    th: "เครื่องยนต์พัฒนาธุรกิจ",
    desc: "สร้างโอกาสทางธุรกิจใหม่ผ่านการเชื่อมโยง Deal, MOU, JV และ Strategic Partnership ระหว่างไทย–ลาว–อาเซียน",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M8 20l4-8 4 4 4-10" stroke="#fbb040" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="20" cy="8" r="2.5" stroke="#fbb040" strokeWidth="1.5"/>
        <path d="M4 24h20" stroke="#fbb040" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: "05",
    en: "Organizational Outsourcing",
    th: "บริการบริหารองค์กรแบบเอาต์ซอร์ส",
    desc: "ให้บริการรับช่วงบริหารงานที่องค์กรพันธมิตรไม่จำเป็นต้องดำเนินการเอง เพื่อให้โฟกัสที่ Core Business ได้เต็มที่",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="9" r="4" stroke="#fbb040" strokeWidth="1.5"/>
        <path d="M6 23c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="#fbb040" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M20 13l2 2-2 2" stroke="#fbb040" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 15h-4" stroke="#fbb040" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function Pillars() {
  return (
    <section id="capabilities" className="relative bg-navy-950 py-28 lg:py-36 overflow-hidden">
      {/* Gradient accent top-right */}
      <div
        className="absolute top-0 right-0 w-96 h-96 opacity-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at top right, #fbb040, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <ScrollReveal>
            <span className="section-label">What We Do</span>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2
              className="mt-5 text-[clamp(2.2rem,5vw,4rem)] font-light text-cream leading-tight"
              style={{ fontFamily: "var(--font-lemon-milk)" }}
            >
              Five Strategic{" "}
              <span className="text-gold-shimmer font-medium">
                Pillars
              </span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="mt-4 text-slate-muted max-w-xl leading-relaxed font-light">
              RJ ไม่ใช่บริษัทที่ปรึกษาทั่วไป แต่คือ &ldquo;องค์กรเชื่อมโยง&rdquo; ที่ทำหน้าที่ 5
              อย่างพร้อมกัน
            </p>
          </ScrollReveal>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <ScrollReveal key={pillar.num} delay={i * 80}>
              <div className="pillar-card rounded-sm p-8 h-full">
                {/* Number + icon */}
                <div className="flex items-start justify-between mb-6">
                  <span
                    className="text-gold-500/30 text-5xl font-light leading-none"
                    style={{ fontFamily: "var(--font-lemon-milk)" }}
                  >
                    {pillar.num}
                  </span>
                  <div className="p-2">{pillar.icon}</div>
                </div>

                {/* Title */}
                <h3
                  className="text-cream text-xl font-semibold mb-1"
                  style={{ fontFamily: "var(--font-lemon-milk)" }}
                >
                  {pillar.en}
                </h3>
                <p className="text-gold-500/70 text-xs mb-4 tracking-wider font-sans">
                  {pillar.th}
                </p>

                {/* Description */}
                <p className="text-white text-sm leading-relaxed font-light font-sans">
                  {pillar.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}

          {/* Connector card */}
          <ScrollReveal delay={pillars.length * 80}>
            <div className="md:col-span-2 lg:col-span-1 rounded-sm p-8 flex flex-col justify-center items-center text-center border border-gold-500/20 bg-gold-500/5">
              <div
                className="text-4xl text-gold-500 mb-4 font-light"
                style={{ fontFamily: "var(--font-lemon-milk)" }}
              >
                Think Tank
                <br />
                <span className="text-2xl text-slate-muted">+</span>
                <br />
                Deal Maker
              </div>
              <p className="text-slate-muted text-sm font-light">
                All five roles. One organization.
              </p>
              <a href="#contact" className="btn-gold mt-6 text-xs px-6 py-3">
                Partner With Us
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
