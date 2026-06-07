"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import mark from "@/public/brand/mark.png";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#works", label: "Works" },
  { href: "#vision", label: "Vision" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy-900/90 backdrop-blur-md border-b border-gold-500/10 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group" aria-label="Ruamjai — home">
          <Image
            src={mark}
            alt="Ruamjai"
            width={40}
            height={40}
            loading="eager"
            className="h-9 w-9 object-contain transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3"
          />
          <div className="hidden sm:block h-8 w-px bg-gold-500/30" />
          <span className="hidden sm:flex flex-col leading-tight">
            <span
              className="text-cream text-sm font-bold tracking-[0.22em] uppercase"
              style={{ fontFamily: "var(--font-lemon-milk)" }}
            >
              Ruamjai
            </span>
            <span className="text-slate-muted text-[0.6rem] tracking-[0.2em] uppercase font-sans">
              Thai-Lao Co., Ltd.
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-cream/70 hover:text-cream text-sm tracking-widest uppercase transition-colors duration-200 relative group font-sans"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 right-0 h-px bg-gold-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>
          ))}
        </nav>

        {/* CTA — hidden at the top (clashes with the hero ribbon); reveals on scroll */}
        <div
          className={`hidden md:flex items-center gap-4 transition-all duration-500 ${
            scrolled
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-1 pointer-events-none"
          }`}
        >
          <a href="#contact" className="btn-outline text-xs px-5 py-2.5">
            Partner With Us
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-px bg-cream transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-px bg-cream transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-px bg-cream transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-400 overflow-hidden ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-navy-900/95 backdrop-blur-md border-t border-gold-500/10 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-cream/80 text-sm tracking-widest uppercase font-sans"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="btn-gold text-center justify-center mt-2"
          >
            Partner With Us
          </a>
        </div>
      </div>
    </header>
  );
}
