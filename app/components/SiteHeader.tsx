"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/#work", label: "Work" },
  { href: "/#ventures", label: "Ventures" },
  { href: "/portfolio", label: "Portfolio" },
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
      <div className="container-page">
        <div className="nav-bar">
          <a href="/" className="inline-flex items-center gap-2.5" aria-label="LoopWar home">
            <img src="/favicon.svg" alt="LoopWar" width={28} height={28} style={{ borderRadius: "8px" }} />
            <span className="brand-word">LoopWar</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
            ))}
          </nav>

          <a href="/contact" className="hidden md:inline-flex btn" style={{ height: "2.7rem", paddingInline: "1.3rem" }}>Get in touch</a>

          <button
            className="md:hidden inline-flex items-center justify-center"
            style={{ width: "2.6rem", height: "2.6rem", borderRadius: "999px", border: "1px solid var(--line-2)", background: "var(--card)", color: "var(--text)" }}
            aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen((v) => !v)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden" style={{ pointerEvents: "auto", paddingBottom: "1rem" }}>
            <div className="card" style={{ padding: ".5rem" }}>
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block px-4 py-3"
                   style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "var(--text)" }}>{l.label}</a>
              ))}
              <a href="/contact" onClick={() => setOpen(false)} className="btn w-full mt-1">Get in touch</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
