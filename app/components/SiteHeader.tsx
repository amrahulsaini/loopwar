"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#ventures", label: "Ventures" },
  { href: "/#services", label: "Services" },
  { href: "/#process", label: "Process" },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="site-header" data-scrolled={scrolled}>
      <div className="container flex items-center justify-between" style={{ height: 64 }}>
        {/* Brand */}
        <a href="/" className="flex items-center gap-2" aria-label="LOOPWAR home" onClick={() => setOpen(false)}>
          <span
            aria-hidden
            style={{
              width: 22, height: 22, borderRadius: 6, display: "inline-block",
              background: "var(--fg)", position: "relative", flex: "none",
            }}
          >
            <span style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", color: "var(--accent)", fontWeight: 800, fontSize: 14, lineHeight: 1 }}>L</span>
          </span>
          <span className="wordmark">LOOPWAR</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Primary">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
          ))}
        </nav>

        {/* Right */}
        <div className="hidden md:flex items-center gap-3">
          <a href="/portfolio" className="nav-link">Portfolio</a>
          <a href="/contact" className="btn btn-sm">Get in touch</a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden inline-flex items-center justify-center"
          style={{ width: 40, height: 40, borderRadius: 8, border: "1px solid var(--border)", background: "var(--bg)" }}
          aria-label="Toggle menu" aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>}
          </svg>
        </button>
      </div>

      {/* Mobile panel */}
      <div
        className="md:hidden"
        style={{
          overflow: "hidden",
          maxHeight: open ? 420 : 0,
          transition: "max-height .35s cubic-bezier(.2,.7,.2,1)",
          borderTop: open ? "1px solid var(--border)" : "1px solid transparent",
          background: "var(--bg)",
        }}
      >
        <nav className="container flex flex-col" style={{ paddingBlock: 8 }} aria-label="Mobile">
          {[...links, { href: "/portfolio", label: "Portfolio" }].map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
               className="nav-link" style={{ paddingBlock: 14, fontSize: "1.05rem", color: "var(--fg)", borderBottom: "1px solid var(--border)" }}>
              {l.label}
            </a>
          ))}
          <a href="/contact" onClick={() => setOpen(false)} className="btn" style={{ marginTop: 14, marginBottom: 6 }}>Get in touch</a>
        </nav>
      </div>
    </header>
  );
}
