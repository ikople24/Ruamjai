import ScrollReveal from "./ScrollReveal";
import WovenRibbons from "./WovenRibbons";

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative py-28 lg:py-40 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #080620 0%, #110e35 40%, #181449 100%)",
      }}
    >
      {/* Gold radial burst */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(251,176,64,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Decorative corner lines */}
      <div className="absolute top-0 left-0 w-24 h-24 pointer-events-none" aria-hidden="true">
        <svg width="96" height="96" viewBox="0 0 96 96" fill="none">
          <line x1="0" y1="1" x2="96" y2="1" stroke="#fbb040" strokeOpacity="0.2" strokeWidth="1"/>
          <line x1="1" y1="0" x2="1" y2="96" stroke="#fbb040" strokeOpacity="0.2" strokeWidth="1"/>
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-24 h-24 pointer-events-none" aria-hidden="true">
        <svg width="96" height="96" viewBox="0 0 96 96" fill="none">
          <line x1="0" y1="95" x2="96" y2="95" stroke="#fbb040" strokeOpacity="0.2" strokeWidth="1"/>
          <line x1="95" y1="0" x2="95" y2="96" stroke="#fbb040" strokeOpacity="0.2" strokeWidth="1"/>
        </svg>
      </div>

      {/* Woven-ribbon graphic — the R/J hook weaving through the warp strands */}
      <WovenRibbons className="hidden lg:block absolute right-0 top-0 bottom-0 w-[46%] z-0" />
      <div
        className="hidden lg:block absolute right-0 top-0 bottom-0 w-[46%] z-1 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, #110e35 0%, rgba(17,14,53,0.85) 8%, rgba(17,14,53,0) 46%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mx-auto text-center lg:mx-0 lg:max-w-xl lg:text-left">
        <ScrollReveal>
          <span className="section-label justify-center lg:justify-start">
            Ready to Connect?
          </span>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h2
            className="mt-6 text-[clamp(2.5rem,6vw,5rem)] font-light text-cream leading-tight"
            style={{ fontFamily: "var(--font-lemon-milk)" }}
          >
            Ready to Bridge Your
            <br />
            <span className="text-gold-shimmer font-semibold">
              Next Horizon?
            </span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="divider-gold-full my-8 mx-auto max-w-xs lg:mx-0" />
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <p className="text-slate-muted text-base lg:text-lg leading-relaxed font-light max-w-xl mx-auto lg:mx-0">
            ไม่ว่าคุณจะเป็นนักลงทุน ผู้ประกอบการ หน่วยงานภาครัฐ หรือองค์กรที่
            ต้องการขยายธุรกิจข้ามพรมแดน — RJ พร้อมเป็นพันธมิตรเชิงกลยุทธ์ของคุณ
          </p>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-10">
            <a
              href="mailto:contact@ruamjai.com"
              className="btn-gold text-sm"
            >
              Start a Conversation
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 9h12M11 5l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#about" className="btn-outline text-sm">
              Learn More About RJ
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={500}>
          <div className="mt-16 flex flex-col sm:flex-row gap-8 justify-center lg:justify-start items-center text-slate-muted text-sm">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-gold-500" />
              <span className="font-sans">Bangkok, Thailand</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-gold-500" />
              <span className="font-sans">Vientiane, Laos</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-gold-500/50" />
              <span className="font-sans text-slate-dim">ASEAN — Expanding</span>
            </div>
          </div>
        </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
