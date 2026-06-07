"use client";

import { useState } from "react";
import { clientProjects, ventures, type Project } from "../data/projects";

const UpRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M8 7h9v9" /></svg>
);

function Card({ p, role }: { p: Project; role?: string }) {
  return (
    <a href={p.url} target="_blank" rel="noreferrer" className="card hover-lift" style={{ overflow: "hidden", display: "block" }}>
      <div className="shot" style={{ aspectRatio: "16/10" }}>
        <img src={p.image} alt={`${p.name} — ${p.category}`} loading="lazy" />
      </div>
      <div style={{ padding: "1.4rem", borderTop: "1px solid var(--border)" }}>
        <div className="flex items-center justify-between">
          <span className="mono accent" style={{ fontSize: ".72rem", letterSpacing: ".04em" }}>{p.category}</span>
          {role ? <span className="chip" style={{ borderColor: "var(--accent)", color: "var(--accent)" }}>{role}</span>
                : <span className="mono" style={{ fontSize: ".72rem", color: "var(--gray-400)" }}>{p.domain}</span>}
        </div>
        <h3 style={{ fontSize: "1.4rem", marginTop: ".6rem", letterSpacing: "-0.02em" }}>{p.name}</h3>
        <p className="muted" style={{ marginTop: ".5rem", fontSize: ".92rem" }}>{p.description}</p>
        <div className="flex items-center gap-1.5" style={{ marginTop: "1rem", fontWeight: 500, fontSize: ".9rem" }}>Visit {p.domain} <UpRight /></div>
      </div>
    </a>
  );
}

export default function Portfolio() {
  const [tab, setTab] = useState<"ventures" | "clients">("clients");
  return (
    <div>
      <section className="container" style={{ paddingTop: "clamp(3rem,7vw,5.5rem)", paddingBottom: "2rem" }}>
        <span className="eyebrow">Portfolio</span>
        <h1 className="display" style={{ marginTop: "1.2rem", maxWidth: "16ch" }}>Products we&apos;ve <span className="accent">built and shipped.</span></h1>
        <p className="lead" style={{ marginTop: "1.3rem", maxWidth: "54ch" }}>From in-house AI ventures to client platforms across e-commerce, healthcare and logistics.</p>

        <div className="flex items-center gap-7" style={{ marginTop: "2.5rem", borderBottom: "1px solid var(--border)" }}>
          {([["clients", "Client work"], ["ventures", "Our ventures"]] as const).map(([k, label]) => (
            <button key={k} onClick={() => setTab(k)} style={{
              paddingBottom: 14, marginBottom: -1, fontWeight: 500, fontSize: ".98rem",
              color: tab === k ? "var(--fg)" : "var(--gray-500)",
              borderBottom: tab === k ? "2px solid var(--accent)" : "2px solid transparent",
            }}>
              {label} <span className="mono" style={{ fontSize: ".72rem", color: "var(--gray-400)" }}>{k === "ventures" ? ventures.length : clientProjects.length}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="container" style={{ paddingBottom: "clamp(3rem,6vw,5rem)" }}>
        {tab === "clients" ? (
          <div className="grid gap-6 md:grid-cols-2">{clientProjects.map((p) => <Card key={p.domain} p={p} />)}</div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{ventures.map((v) => <Card key={v.domain} p={v} role={v.role} />)}</div>
        )}
      </section>

      <section className="section band-dark">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="display" style={{ fontSize: "clamp(2rem,5vw,3.4rem)", color: "#fff", marginInline: "auto", maxWidth: "16ch" }}>Have a project in mind?</h2>
          <div className="flex flex-wrap items-center justify-center gap-3" style={{ marginTop: "1.8rem" }}>
            <a href="/contact" className="btn btn-accent">Start a project</a>
            <a href="mailto:contact@loopwar.dev" className="btn btn-outline" style={{ background: "transparent", color: "#fff", borderColor: "#333" }}>Get in touch</a>
          </div>
        </div>
      </section>
    </div>
  );
}
