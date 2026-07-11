"use client";

import { useEffect, useRef, useState } from "react";
import { clientProjects, ventures } from "../data/projects";

const services = [
  ["Web & app development", "Websites and apps on Next.js, React and Node."],
  ["AI & automation", "Assistants and automations that do the boring work."],
  ["E-commerce", "Stores with secure payments, built to sell."],
  ["UI/UX & brand", "Warm, clear interfaces and design systems."],
  ["Cloud & DevOps", "Hosting, CI/CD and SSL — shipped and humming."],
  ["Product & maintenance", "From first MVP to scale, we stick around."],
];

const steps = [
  ["Discover", "Your goals, your users, what success means."],
  ["Design", "Sketches, UI and a system before we build."],
  ["Build", "Friendly sprints, frequent demos, clean code."],
  ["Ship & scale", "Launch, watch, support, keep improving."],
];

type MenuKey = "work" | "ventures" | "services" | "process";

const navItems: { key: MenuKey; href: string; label: string }[] = [
  { key: "work", href: "/#work", label: "Work" },
  { key: "ventures", href: "/#ventures", label: "Ventures" },
  { key: "services", href: "/#services", label: "Services" },
  { key: "process", href: "/#process", label: "Process" },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);          // mobile
  const [menu, setMenu] = useState<MenuKey | null>(null); // desktop mega menu
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

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

  // close mega menu on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMenu(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const openMenu = (k: MenuKey) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMenu(k);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMenu(null), 140);
  };
  const cancelClose = () => { if (closeTimer.current) clearTimeout(closeTimer.current); };

  return (
    <header className="site-header" data-scrolled={scrolled}>
      <div className="hd-bar" data-menu-open={!!menu} onMouseLeave={scheduleClose} onMouseEnter={cancelClose}>
        <div className="hd-row">
          {/* Brand — top left */}
          <a href="/" className="hd-brand" aria-label="LOOPWAR home" onClick={() => { setOpen(false); setMenu(null); }}>
            <span className="hd-mark" aria-hidden="true">
              <img src="/loopwar-shortlogoforfaviconsadnicons.png" alt="" />
            </span>
            <span className="hd-lockup">
              <span className="hd-wordmark">LOOPWAR</span>
              <span className="hd-tagline">Product Studio</span>
            </span>
          </a>

          {/* Center nav */}
          <nav className="hd-nav" aria-label="Primary">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="hd-link"
                data-active={menu === item.key}
                aria-expanded={menu === item.key}
                onMouseEnter={() => openMenu(item.key)}
                onFocus={() => openMenu(item.key)}
                onClick={() => setMenu(null)}
              >
                {item.label}
                <span className="hd-link-dot" aria-hidden="true" />
              </a>
            ))}
          </nav>

          {/* Right */}
          <div className="hd-right">
            <a href="/portfolio" className="hd-plain" onMouseEnter={scheduleClose}>Portfolio</a>
            <a href="/contact" className="hd-cta" onMouseEnter={scheduleClose}>
              <span>Get in touch</span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M7 17L17 7" /><path d="M9 7h8v8" />
              </svg>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="hd-burger"
            aria-label="Toggle menu" aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <><path d="M3 8h18" /><path d="M3 16h18" /></>}
            </svg>
          </button>
        </div>

        {/* ============ Mega menu panels ============ */}
        {menu && (
          <div className="hd-panel" key={menu} onMouseEnter={cancelClose} onMouseLeave={scheduleClose}>
            {menu === "work" && (
              <div>
                <div className="hd-panel-head">
                  <span className="hd-panel-eyebrow">Selected work</span>
                  <a href="/#work" className="hd-panel-more" onClick={() => setMenu(null)}>View all work →</a>
                </div>
                <div className="hd-grid hd-grid-2">
                  {clientProjects.map((p) => (
                    <a key={p.name} href={p.url} target="_blank" rel="noreferrer" className="hd-card">
                      <span className="hd-thumb"><img src={p.image} alt="" loading="lazy" /></span>
                      <span className="hd-card-body">
                        <span className="hd-card-cat">{p.category}</span>
                        <span className="hd-card-name">{p.name}</span>
                        <span className="hd-card-tag">{p.tagline}</span>
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {menu === "ventures" && (
              <div>
                <div className="hd-panel-head">
                  <span className="hd-panel-eyebrow">Things we own &amp; run</span>
                  <a href="/#ventures" className="hd-panel-more" onClick={() => setMenu(null)}>All ventures →</a>
                </div>
                <div className="hd-grid hd-grid-3">
                  {ventures.map((v) => (
                    <a key={v.name} href={v.url} target="_blank" rel="noreferrer" className="hd-card hd-card-v">
                      <span className="hd-thumb hd-thumb-wide"><img src={v.image} alt="" loading="lazy" /></span>
                      <span className="hd-card-body">
                        <span className="hd-card-cat">{v.category}</span>
                        <span className="hd-card-name">{v.name}</span>
                        <span className="hd-card-tag">{v.tagline}</span>
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {menu === "services" && (
              <div>
                <div className="hd-panel-head">
                  <span className="hd-panel-eyebrow">What we do</span>
                  <a href="/#services" className="hd-panel-more" onClick={() => setMenu(null)}>All services →</a>
                </div>
                <div className="hd-grid hd-grid-3">
                  {services.map(([t, d], i) => (
                    <a key={t} href="/#services" className="hd-item" onClick={() => setMenu(null)}>
                      <span className="hd-item-num">{String(i + 1).padStart(2, "0")}</span>
                      <span className="hd-card-body">
                        <span className="hd-card-name hd-item-name">{t}</span>
                        <span className="hd-card-tag">{d}</span>
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {menu === "process" && (
              <div>
                <div className="hd-panel-head">
                  <span className="hd-panel-eyebrow">How we work</span>
                  <a href="/#process" className="hd-panel-more" onClick={() => setMenu(null)}>Full process →</a>
                </div>
                <div className="hd-grid hd-grid-4">
                  {steps.map(([t, d], i) => (
                    <a key={t} href="/#process" className="hd-item hd-step" onClick={() => setMenu(null)}>
                      <span className="hd-item-num">{String(i + 1).padStart(2, "0")}</span>
                      <span className="hd-card-body">
                        <span className="hd-card-name hd-item-name">{t}</span>
                        <span className="hd-card-tag">{d}</span>
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ============ Mobile panel ============ */}
        <div className="hd-mobile" data-open={open} style={{ maxHeight: open ? 560 : 0 }}>
          <nav className="hd-mobile-nav" aria-label="Mobile">
            {[...navItems, { key: "portfolio", href: "/portfolio", label: "Portfolio" }].map((l, i) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="hd-mobile-link">
                <span className="hd-mobile-num">0{i + 1}</span>
                <span className="hd-mobile-label">{l.label}</span>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M7 17L17 7" /><path d="M9 7h8v8" />
                </svg>
              </a>
            ))}
            <a href="/contact" onClick={() => setOpen(false)} className="hd-cta hd-mobile-cta">
              <span>Get in touch</span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M7 17L17 7" /><path d="M9 7h8v8" />
              </svg>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
