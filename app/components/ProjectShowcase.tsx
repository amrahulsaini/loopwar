"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Project } from "../data/projects";

type Item = Project & { role?: string };

const UpRight = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M8 7h9v9" /></svg>
);

export default function ProjectShowcase({ items, autoMs = 6500 }: { items: Item[]; autoMs?: number }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = items.length;
  const touchX = useRef<number | null>(null);

  const go = useCallback((to: number) => setI(((to % n) + n) % n), [n]);
  const next = useCallback(() => setI((v) => (v + 1) % n), [n]);
  const prev = useCallback(() => setI((v) => (v - 1 + n) % n), [n]);

  // autoplay (paused on hover / focus / reduced-motion)
  useEffect(() => {
    if (paused) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((v) => (v + 1) % n), autoMs);
    return () => clearInterval(t);
  }, [paused, n, autoMs]);

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  };

  return (
    <div
      className="showcase"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={onKey}
      tabIndex={0}
      role="group"
      aria-roledescription="carousel"
      aria-label="Project showcase"
      onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
      onTouchEnd={(e) => {
        if (touchX.current == null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (dx > 50) prev(); else if (dx < -50) next();
        touchX.current = null;
      }}
    >
      <div className="showcase-stage">
        {items.map((p, idx) => {
          const state = idx === i ? "active" : idx === (i - 1 + n) % n ? "left" : "right";
          return (
            <article key={p.domain} className={`showcase-slide is-${state}`} aria-hidden={idx !== i} style={{ ["--accent" as never]: p.accent }}>
              <div className="showcase-media">
                <span className="showcase-index" aria-hidden>{String(idx + 1).padStart(2, "0")}</span>
                <a href={p.url} target="_blank" rel="noreferrer" className="frame" tabIndex={idx === i ? 0 : -1}>
                  <div className="frame-bar"><i /><i /><i /><span className="frame-url">{p.domain}</span></div>
                  <div className="frame-view"><img src={p.image} alt={`${p.name} — ${p.category}`} loading={idx === 0 ? "eager" : "lazy"} /></div>
                </a>
              </div>

              <div className="showcase-info">
                <div className="flex items-center gap-2" style={{ flexWrap: "wrap" }}>
                  <span className="chip">{p.category}</span>
                  {p.role && <span className="chip">{p.role}</span>}
                </div>
                <h3 className="showcase-name">{p.name}</h3>
                <p className="showcase-tag">{p.tagline}</p>
                <p className="muted showcase-desc">{p.description}</p>
                <ul className="showcase-feats">
                  {p.features.map((f) => <li key={f}>{f}</li>)}
                </ul>
                <a href={p.url} target="_blank" rel="noreferrer" className="btn btn-accent" tabIndex={idx === i ? 0 : -1}>
                  Visit {p.domain} <UpRight />
                </a>
              </div>
            </article>
          );
        })}
      </div>

      <div className="showcase-controls">
        <button className="showcase-nav" onClick={prev} aria-label="Previous project">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M15 6l-6 6 6 6" /></svg>
        </button>
        <div className="showcase-dots" role="tablist">
          {items.map((p, idx) => (
            <button key={p.domain} className={`dot ${idx === i ? "on" : ""}`} onClick={() => go(idx)} aria-label={`Show ${p.name}`} aria-selected={idx === i} role="tab">
              <span className="dot-fill" style={{ animationDuration: paused ? "0s" : `${autoMs}ms` }} />
            </button>
          ))}
        </div>
        <button className="showcase-nav" onClick={next} aria-label="Next project">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
        </button>
      </div>
    </div>
  );
}
