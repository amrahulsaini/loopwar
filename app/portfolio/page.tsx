"use client";

import { useState } from "react";
import { clientProjects, ventures, type Project } from "../data/projects";

type Tab = "ventures" | "clients";

function Card({ p, role }: { p: Project; role?: string }) {
  return (
    <a href={p.url} target="_blank" rel="noreferrer" className="project-card flex flex-col h-full">
      <div className={`project-media ${p.contain ? "project-media-contain" : ""}`}>
        <img src={p.image} alt={`${p.name} — ${p.category}`} loading="lazy" />
        <span
          className="chip"
          style={{
            position: "absolute", top: "1rem", left: "1rem",
            background: role ? "var(--grad)" : "rgba(255,255,255,.88)",
            color: role ? "#fff" : "var(--text-body)",
            borderColor: "transparent", backdropFilter: "blur(6px)",
          }}
        >
          {role || p.category}
        </span>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="text-xs font-semibold mb-1" style={{ color: "var(--accent)" }}>{p.category}</div>
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-2xl">{p.name}</h3>
          <span className="text-xs" style={{ color: "var(--muted)" }}>{p.domain}</span>
        </div>
        <p className="mt-2" style={{ color: "var(--text-body)" }}>{p.description}</p>
        <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 flex-1">
          {p.features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm" style={{ color: "var(--text-body)" }}>
              <span style={{ color: "var(--accent)", marginTop: 2 }}>▸</span>{f}
            </li>
          ))}
        </ul>
        <span className="btn secondary mt-5 w-full">Visit {p.name} →</span>
      </div>
    </a>
  );
}

export default function Portfolio() {
  const [tab, setTab] = useState<Tab>("ventures");

  return (
    <div>
      {/* Hero */}
      <section className="surface-dark grid-bg" style={{ position: "relative", overflow: "hidden" }}>
        <div className="glow" style={{ width: 480, height: 480, top: -200, left: "50%", transform: "translateX(-50%)", opacity: .3 }} />
        <div className="container-page" style={{ paddingBlock: "clamp(3.5rem,8vw,6rem)", position: "relative" }}>
          <div className="max-w-3xl mx-auto text-center space-y-5">
            <span className="eyebrow" style={{ color: "#c4b5fd" }}>Our portfolio</span>
            <h1 style={{ fontSize: "clamp(2.4rem,6vw,4rem)", color: "#fff" }}>
              Products we&apos;ve <span className="gradient-text">built & shipped</span>
            </h1>
            <p className="lead mx-auto" style={{ color: "#b9bac4", maxWidth: "56ch" }}>
              From in‑house AI ventures to client platforms across e‑commerce, healthcare and logistics — here&apos;s a look at our work.
            </p>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="container-page section">
        <div className="flex justify-center mb-12">
          <div className="inline-flex gap-1 p-1.5 rounded-2xl" style={{ background: "var(--bg-soft)", border: "1px solid var(--color-border)" }}>
            <button
              onClick={() => setTab("ventures")}
              className="px-6 py-3 rounded-xl font-semibold transition-all"
              style={{
                fontFamily: "var(--font-heading)",
                background: tab === "ventures" ? "var(--grad)" : "transparent",
                color: tab === "ventures" ? "#fff" : "var(--text-body)",
                boxShadow: tab === "ventures" ? "var(--shadow)" : "none",
              }}
            >
              🚀 Our Ventures
            </button>
            <button
              onClick={() => setTab("clients")}
              className="px-6 py-3 rounded-xl font-semibold transition-all"
              style={{
                fontFamily: "var(--font-heading)",
                background: tab === "clients" ? "var(--grad)" : "transparent",
                color: tab === "clients" ? "#fff" : "var(--text-body)",
                boxShadow: tab === "clients" ? "var(--shadow)" : "none",
              }}
            >
              💼 Client Work
            </button>
          </div>
        </div>

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
      <section className="container-page section-sm" style={{ paddingBottom: "5rem" }}>
        <div className="card text-center" style={{ padding: "3rem 1.5rem", background: "var(--bg-soft)" }}>
          <h2 className="section-title">Have a project in mind?</h2>
          <p className="section-subtitle mb-6">Let&apos;s turn your idea into a product people love.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="/contact" className="btn btn-grad btn-lg">Start a project</a>
            <a href="mailto:contact@loopwar.dev" className="btn secondary btn-lg">Get in touch</a>
          </div>
        </div>
      </section>
    </div>
  );
}
