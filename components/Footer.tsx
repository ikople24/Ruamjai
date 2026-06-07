import Image from "next/image";
import mark from "@/public/brand/mark.png";
import WovenRibbons from "./WovenRibbons";

const navItems = [
  "About RJ",
  "Strategic Pillars",
  "Our Values",
  "Geographic Vision",
  "Partner With Us",
  "Investment Inquiry",
  "Strategic Consultation",
  "Research Collaboration",
];

const socials = [
  {
    label: "Facebook",
    path: "M13 10h2.5l.5-3H13V5.2c0-.8.3-1.4 1.5-1.4H16V1.1C15.7 1 14.8 1 13.8 1 11.6 1 10 2.3 10 4.8V7H7.5v3H10v8h3v-8z",
  },
  {
    label: "LinkedIn",
    path: "M5.4 7.5H2.6V18h2.8V7.5zM4 3.2A1.6 1.6 0 1 0 4 6.4a1.6 1.6 0 0 0 0-3.2zM18 18h-2.8v-5.1c0-1.3 0-2.9-1.8-2.9s-2 1.4-2 2.8V18H8.6V7.5h2.7v1.4h.1c.4-.7 1.3-1.5 2.8-1.5 3 0 3.6 2 3.6 4.5V18z",
  },
  {
    label: "X",
    path: "M14.3 2h2.8l-6.1 7L18 18h-5.6l-3.9-5.1L3.9 18H1.1l6.5-7.5L1 2h5.7l3.5 4.7L14.3 2zm-1 14.3h1.5L6.4 3.6H4.8l8.5 12.7z",
  },
  {
    label: "Instagram",
    path: "M10 5.4A4.6 4.6 0 1 0 10 14.6 4.6 4.6 0 0 0 10 5.4zm0 7.6a3 3 0 1 1 0-6 3 3 0 0 1 0 6zM14.8 4a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2zM10 .9c-2.5 0-2.8 0-3.8.1-1 0-1.6.2-2.2.4a4.5 4.5 0 0 0-1.6 1A4.5 4.5 0 0 0 1.4 4c-.2.6-.4 1.2-.4 2.2C.9 7.2.9 7.5.9 10s0 2.8.1 3.8c0 1 .2 1.6.4 2.2a4.5 4.5 0 0 0 1 1.6 4.5 4.5 0 0 0 1.6 1c.6.2 1.2.4 2.2.4 1 .1 1.3.1 3.8.1s2.8 0 3.8-.1c1 0 1.6-.2 2.2-.4a4.7 4.7 0 0 0 2.6-2.6c.2-.6.4-1.2.4-2.2.1-1 .1-1.3.1-3.8s0-2.8-.1-3.8c0-1-.2-1.6-.4-2.2a4.5 4.5 0 0 0-1-1.6 4.5 4.5 0 0 0-1.6-1c-.6-.2-1.2-.4-2.2-.4-1-.1-1.3-.1-3.8-.1zm0 1.6c2.5 0 2.7 0 3.7.1.9 0 1.4.2 1.7.3.4.2.7.4 1 .7.3.3.5.6.7 1 .1.3.3.8.3 1.7.1 1 .1 1.2.1 3.7s0 2.7-.1 3.7c0 .9-.2 1.4-.3 1.7-.2.4-.4.7-.7 1-.3.3-.6.5-1 .7-.3.1-.8.3-1.7.3-1 .1-1.2.1-3.7.1s-2.7 0-3.7-.1c-.9 0-1.4-.2-1.7-.3a2.9 2.9 0 0 1-1-.7 2.9 2.9 0 0 1-.7-1c-.1-.3-.3-.8-.3-1.7-.1-1-.1-1.2-.1-3.7s0-2.7.1-3.7c0-.9.2-1.4.3-1.7.2-.4.4-.7.7-1 .3-.3.6-.5 1-.7.3-.1.8-.3 1.7-.3 1-.1 1.2-.1 3.7-.1z",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-navy-950 border-t border-gold-500/10 overflow-hidden">
      {/* Corner woven-ribbon graphics (mirror left / normal right) */}
      <WovenRibbons className="hidden md:block absolute left-0 top-0 bottom-0 w-[24%] opacity-40 -scale-x-100 pointer-events-none" />
      <WovenRibbons className="hidden md:block absolute right-0 top-0 bottom-0 w-[24%] opacity-40 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, #0a0822 0%, rgba(10,8,34,0.35) 24%, transparent 42%, transparent 58%, rgba(10,8,34,0.35) 76%, #0a0822 100%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 py-16 lg:py-20 text-center">
        {/* Logo — centered */}
        <div className="flex items-center justify-center gap-4">
          <Image src={mark} alt="Ruamjai" width={64} height={64} className="h-14 w-14 object-contain" />
          <div className="h-12 w-px bg-gold-500/30" />
          <span className="text-cream/60 text-xs tracking-[0.24em] uppercase font-sans text-left leading-relaxed">
            Ruamjai
            <br />
            Thai-Lao Co., Ltd.
          </span>
        </div>

        {/* Tagline */}
        <p
          className="mt-8 text-2xl lg:text-[1.7rem] font-light leading-snug"
          style={{ fontFamily: "var(--font-lemon-milk)" }}
        >
          <span className="text-cream/85">Bridging Trust.</span>{" "}
          <span className="text-gold-500">Expanding Horizons.</span>
        </p>

        <p className="mt-4 text-slate-muted text-sm font-light leading-relaxed max-w-md mx-auto">
          Strategic Knowledge &amp; Investment Hub — connecting Thailand, Laos, and
          ASEAN toward sustainable growth.
        </p>

        {/* Links — centered wrap */}
        <nav className="mt-10 flex flex-wrap justify-center gap-x-7 gap-y-3">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="text-slate-muted hover:text-cream text-sm font-sans font-light transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Divider */}
        <div className="divider-gold my-10 max-w-sm mx-auto" />

        {/* Socials — centered */}
        <div className="flex justify-center gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href="#"
              aria-label={s.label}
              className="w-10 h-10 rounded-full border border-gold-500/20 flex items-center justify-center text-slate-muted hover:text-navy-950 hover:bg-gold-500 hover:border-gold-500 transition-all duration-300"
            >
              <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
                <path d={s.path} />
              </svg>
            </a>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col items-center gap-2">
          <p
            className="text-gold-500/55 text-sm font-light italic"
            style={{ fontFamily: "var(--font-lemon-milk)" }}
          >
            Smart, Sustainable, Together
          </p>
          <p className="text-slate-dim text-xs font-sans tracking-wide">
            &copy; {year} Ruamjai Thai-Lao Co., Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
