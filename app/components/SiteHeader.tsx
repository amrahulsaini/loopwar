"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#work", label: "Work" },
  { href: "/#ventures", label: "Ventures" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="container-page flex items-center justify-between" style={{ height: "4.5rem" }}>
        <a href="/" className="inline-flex items-center gap-2.5" aria-label="LoopWar home">
          <img
            src="/favicon.svg"
            alt="LoopWar"
            width={30}
            height={30}
            style={{ borderRadius: "8px" }}
          />
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.12rem", color: "var(--ink)", letterSpacing: "-.03em" }}>
            LoopWar
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
          ))}
          <a href="/contact" className="btn" style={{ height: "2.5rem", paddingInline: "1.05rem" }}>Start a project</a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden inline-flex items-center justify-center"
          style={{ width: "2.6rem", height: "2.6rem", borderRadius: ".7rem", border: "1px solid var(--color-border)", background: "var(--bg-card)" }}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden container-page pb-4">
          <div className="card" style={{ padding: ".5rem" }}>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 rounded-lg"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 600, color: "var(--text-heading)" }}
              >
                {l.label}
              </a>
            ))}
            <a href="/contact" onClick={() => setOpen(false)} className="btn w-full mt-1">Start a project</a>
          </div>
        </div>
      )}
    </header>
  );
}
