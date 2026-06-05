"use client";

import { useState } from "react";
import { clientProjects, ventures, type Project } from "../data/projects";

type Tab = "ventures" | "clients";

const Arrow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

function Card({ p, role }: { p: Project; role?: string }) {
  return (
    <a href={p.url} target="_blank" rel="noreferrer" className="project-card flex flex-col h-full">
      <div className={`project-media ${p.contain ? "project-media-contain" : ""}`}>
        <img src={p.image} alt={`${p.name} — ${p.category}`} loading="lazy" />
      </div>
      <div className="p-6 flex flex-col flex-1" style={{ borderTop: "1px solid var(--line)" }}>
        <div className="flex items-center justify-between gap-3">
          <span className="label">{p.category}</span>
          {role ? <span className="chip">{role}</span> : <span className="label" style={{ color: "var(--faint)" }}>{p.domain}</span>}
        </div>
        <h3 className="mt-3 text-2xl">{p.name}</h3>
        <p className="mt-2" style={{ color: "var(--text)" }}>{p.description}</p>
        <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2 flex-1">
          {p.features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm" style={{ color: "var(--text)" }}>
              <span style={{ color: "var(--faint)", marginTop: 1 }}>—</span>{f}
            </li>
          ))}
        </ul>
        <span className="link-arrow mt-6">Visit {p.name} <Arrow /></span>
      </div>
    </a>
  );
}

export default function Portfolio() {
  const [tab, setTab] = useState<Tab>("ventures");

  return (
    <div>
      {/* Hero */}
      <section className="container-page" style={{ paddingBlock: "clamp(3.5rem, 7vw, 6rem)" }}>
        <div className="max-w-4xl">
          <span className="eyebrow">Portfolio</span>
          <h1 className="mt-6" style={{ fontSize: "clamp(2.6rem, 7vw, 5rem)", lineHeight: ".98", letterSpacing: "-0.045em" }}>
            Products we&apos;ve built and shipped.
          </h1>
          <p className="lead mt-6" style={{ maxWidth: "56ch", color: "var(--text)" }}>
            From in‑house AI ventures to client platforms across e‑commerce, healthcare and logistics — a closer look at our work.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-12 flex items-center gap-8" style={{ borderBottom: "1px solid var(--line)" }}>
          {([["ventures", "Our ventures"], ["clients", "Client work"]] as const).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className="pb-3"
              style={{
                fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.05rem", letterSpacing: "-0.02em",
                color: tab === key ? "var(--ink)" : "var(--muted)",
                borderBottom: tab === key ? "2px solid var(--ink)" : "2px solid transparent",
                marginBottom: "-1px",
              }}
            >
              {label}
              <span className="idx" style={{ fontSize: ".8rem", marginLeft: ".5rem" }}>
                {key === "ventures" ? ventures.length : clientProjects.length}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="container-page" style={{ paddingBottom: "clamp(3rem, 6vw, 5rem)" }}>
        {tab === "ventures" ? (
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {ventures.map((v) => (
              <Card key={v.domain} p={v} role={v.role} />
            ))}
          </div>
        ) : (
          <div className="grid gap-7 md:grid-cols-2">
            {clientProjects.map((p) => (
              <Card key={p.domain} p={p} />
            ))}
          </div>
        )}
      </section>

      {/* CTA */}
      <section style={{ background: "var(--paper-2)" }}>
        <div className="container-page section text-center">
          <h2 className="section-title">Have a project in mind?</h2>
          <p className="section-subtitle mb-8">Let&apos;s turn your idea into a product people love.</p>
          <div className="flex flex-wrap gap-5 justify-center items-center">
            <a href="/contact" className="btn btn-lg">Start a project</a>
            <a href="mailto:contact@loopwar.dev" className="link-arrow">Get in touch <Arrow /></a>
          </div>
        </div>
      </section>
    </div>
  );
}
