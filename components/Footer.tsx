import Image from "next/image";
import mark from "@/public/brand/mark.png";
import WovenRibbons from "./WovenRibbons";

const links = {
  Company: ["About RJ", "Strategic Pillars", "Our Values", "Geographic Vision"],
  Connect: ["Partner With Us", "Investment Inquiry", "Strategic Consultation", "Research Collaboration"],
};

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
      <WovenRibbons className="hidden md:block absolute left-0 top-0 bottom-0 w-[26%] opacity-40 -scale-x-100 pointer-events-none" />
      <WovenRibbons className="hidden md:block absolute right-0 top-0 bottom-0 w-[26%] opacity-40 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, #0a0822 0%, rgba(10,8,34,0.4) 22%, transparent 38%, transparent 62%, rgba(10,8,34,0.4) 78%, #0a0822 100%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand col */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-5">
              <Image
                src={mark}
                alt="Ruamjai"
                width={56}
                height={56}
                className="h-12 w-12 object-contain"
              />
              <div className="h-10 w-px bg-gold-500/30" />
              <span className="text-cream/50 text-xs tracking-[0.2em] uppercase font-sans">
                Ruamjai
                <br />
                Thai-Lao Co., Ltd.
              </span>
            </div>
            <p
              className="text-cream/80 text-xl font-light mb-4 leading-snug"
              style={{ fontFamily: "var(--font-lemon-milk)" }}
            >
              Bridging Trust.
              <br />
              <span className="text-gold-500">Expanding Horizons.</span>
            </p>
            <p className="text-slate-muted text-sm font-light leading-relaxed max-w-xs">
              Strategic Knowledge & Investment Hub — connecting Thailand, Laos,
              and ASEAN toward sustainable growth.
            </p>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-cream/90 text-xs tracking-[0.18em] uppercase mb-5 font-sans font-medium">
                {category}
              </h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-slate-muted hover:text-cream/80 text-sm transition-colors duration-200 font-sans font-light"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="divider-gold mb-8" />

        {/* Social icons */}
        <div className="flex justify-center gap-3 mb-10">
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

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-slate-dim text-xs font-sans tracking-wide">
            &copy; {year} Ruamjai Thai-Lao Co., Ltd. All rights reserved.
          </p>
          <p
            className="text-gold-500/50 text-sm font-light italic"
            style={{ fontFamily: "var(--font-lemon-milk)" }}
          >
            Smart, Sustainable, Together
          </p>
        </div>
      </div>
    </footer>
  );
}
