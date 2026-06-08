import WovenRibbons from "./WovenRibbons";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-navy-950">
      {/* Background gradient mesh */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 68% 55% at 80% 12%, rgba(251,176,64,0.09) 0%, transparent 65%), radial-gradient(ellipse 62% 58% at 12% 86%, rgba(48,194,242,0.10) 0%, transparent 65%), radial-gradient(ellipse 60% 80% at 88% 82%, rgba(38,34,101,0.55) 0%, transparent 70%), linear-gradient(180deg, #0a0822 0%, #110e35 50%, #0d0a2e 100%)",
          }}
        />
      </div>

      {/* Animated SVG bridge/connection lines */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Main bridge — flows blue → amber, echoing the logo */}
            <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#30c2f2" stopOpacity="0" />
              <stop offset="22%" stopColor="#30c2f2" stopOpacity="0.45" />
              <stop offset="52%" stopColor="#5cd0f5" stopOpacity="0.3" />
              <stop offset="74%" stopColor="#fbb040" stopOpacity="0.42" />
              <stop offset="100%" stopColor="#fbb040" stopOpacity="0" />
            </linearGradient>
            {/* Secondary — sky blue */}
            <linearGradient id="lineGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#30c2f2" stopOpacity="0" />
              <stop offset="50%" stopColor="#30c2f2" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#30c2f2" stopOpacity="0" />
            </linearGradient>
            {/* Tertiary — amber */}
            <linearGradient id="lineGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#fbb040" stopOpacity="0" />
              <stop offset="50%" stopColor="#fbb040" stopOpacity="0.24" />
              <stop offset="100%" stopColor="#fbb040" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="dotGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fbb040" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#fbb040" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="dotGradBlue" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#30c2f2" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#30c2f2" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* Main arc — the bridge */}
          <path
            d="M 0 620 Q 360 220 720 380 Q 1080 540 1440 200"
            stroke="url(#lineGrad1)"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="2000"
            className="animate-draw"
            style={{ animationDelay: "0.3s" }}
          />

          {/* Secondary arc */}
          <path
            d="M -100 750 Q 400 300 800 500 Q 1100 650 1540 350"
            stroke="url(#lineGrad2)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="2000"
            className="animate-draw"
            style={{ animationDelay: "0.7s" }}
          />

          {/* Tertiary subtle arc */}
          <path
            d="M 200 900 Q 600 400 1000 600 Q 1250 720 1600 480"
            stroke="url(#lineGrad3)"
            strokeWidth="0.6"
            fill="none"
            strokeDasharray="2000"
            className="animate-draw"
            style={{ animationDelay: "1.1s" }}
          />

          {/* Connection nodes — blue at the ends, amber in the middle */}
          <circle cx="360" cy="360" r="3" fill="url(#dotGradBlue)" className="animate-fade-in delay-700" />
          <circle cx="360" cy="360" r="8" stroke="#30c2f2" strokeOpacity="0.25" strokeWidth="1" fill="none" className="animate-fade-in delay-800" />

          <circle cx="720" cy="380" r="3" fill="url(#dotGrad)" className="animate-fade-in delay-800" />
          <circle cx="720" cy="380" r="8" stroke="#fbb040" strokeOpacity="0.22" strokeWidth="1" fill="none" className="animate-fade-in delay-900" />

          <circle cx="1080" cy="280" r="3" fill="url(#dotGradBlue)" className="animate-fade-in delay-900" />
          <circle cx="1080" cy="280" r="8" stroke="#30c2f2" strokeOpacity="0.25" strokeWidth="1" fill="none" className="animate-fade-in delay-1000" />

          {/* Corner decorative lines — sky blue top-left, amber bottom-right */}
          <line x1="0" y1="0" x2="80" y2="0" stroke="#30c2f2" strokeOpacity="0.35" strokeWidth="1" className="animate-fade-in delay-300" />
          <line x1="0" y1="0" x2="0" y2="80" stroke="#30c2f2" strokeOpacity="0.35" strokeWidth="1" className="animate-fade-in delay-300" />
          <line x1="1440" y1="900" x2="1360" y2="900" stroke="#fbb040" strokeOpacity="0.3" strokeWidth="1" className="animate-fade-in delay-300" />
          <line x1="1440" y1="900" x2="1440" y2="820" stroke="#fbb040" strokeOpacity="0.3" strokeWidth="1" className="animate-fade-in delay-300" />
        </svg>
      </div>

      {/* Woven-ribbon graphic — top-right signature.
          Masked (not overlaid) so it dissolves into the background with no seam. */}
      <div
        className="hidden lg:block absolute right-0 top-0 bottom-0 w-[44%] z-1 pointer-events-none"
        style={{
          WebkitMaskImage: "linear-gradient(90deg, transparent 0%, #000 50%, #000 100%)",
          maskImage: "linear-gradient(90deg, transparent 0%, #000 50%, #000 100%)",
        }}
      >
        <WovenRibbons className="absolute inset-0 h-full w-full" />
      </div>

      {/* Grain overlay — breaks up gradient banding for a smoother wash */}
      <div className="noise absolute inset-0 z-2 pointer-events-none" aria-hidden="true" />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Section label */}
          <div className="animate-fade-up delay-100">
            <span className="section-label mb-8 block">
              Strategic Knowledge &amp; Investment Hub
            </span>
          </div>

          {/* Main headline */}
          <h1
            className="animate-fade-up delay-200"
            style={{ fontFamily: "var(--font-lemon-milk)", lineHeight: 1.1, letterSpacing: "-0.01em" }}
          >
            <span className="block text-cream text-[clamp(3rem,8vw,6.5rem)] font-light">
              Building a
            </span>
            <span className="block text-[clamp(3rem,8vw,6.5rem)] font-bold text-gold-shimmer">
              Sustainable Future.
            </span>
          </h1>

          {/* Sub-headline */}
          <div className="animate-fade-up delay-400 mt-3">
            <p
              className="text-[clamp(1.2rem,3.5vw,2.8rem)] font-light tracking-wide text-cream/55"
              style={{ fontFamily: "var(--font-lemon-milk)" }}
            >
              Through{" "}
              <span className="text-cream/85 font-medium">Collaborative Innovation.</span>
            </p>
          </div>

          {/* Divider */}
          <div className="animate-fade-in delay-600 mt-8 mb-8 w-16 h-px bg-gold-500/60" />

          {/* Descriptor */}
          <p className="animate-fade-up delay-600 text-slate-muted text-base md:text-lg leading-relaxed max-w-xl font-sans font-light">
            เชื่อมโยงองค์ความรู้ เงินทุน และเครือข่ายธุรกิจ เพื่อขับเคลื่อน
            การเติบโตอย่างยั่งยืนในภูมิภาคไทย–ลาว–อาเซียน
          </p>

          {/* CTAs */}
          <div className="animate-fade-up delay-800 flex flex-wrap gap-4 mt-10">
            <a href="#contact" className="btn-gold">
              Start a Conversation
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#about" className="btn-outline">
              Discover RJ
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator — pinned to the very bottom of the hero */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2 animate-fade-in delay-1200 pointer-events-none">
        <span className="text-slate-muted/70 text-[0.65rem] tracking-[0.3em] uppercase font-sans">
          Scroll
        </span>
        <div className="animate-scroll-bounce">
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
            <path d="M10 4v12M4 11l6 6 6-6" stroke="#fbb040" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7"/>
          </svg>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-navy-900 to-transparent pointer-events-none" />
    </section>
  );
}
