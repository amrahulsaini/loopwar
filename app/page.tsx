import { clientProjects, ventures } from "./data/projects";

const Arrow = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export default function Home() {
  const names = [...clientProjects, ...ventures].map((p) => p.name);
  return (
    <div>
      {/* ============ HERO ============ */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        {/* grid backdrop */}
        <div
          aria-hidden
          className="grid-backdrop"
          style={{
            position: "absolute", inset: "0 0 auto 0", height: 560, opacity: .5,
            WebkitMaskImage: "radial-gradient(120% 100% at 50% 0%, #000 30%, transparent 72%)",
            maskImage: "radial-gradient(120% 100% at 50% 0%, #000 30%, transparent 72%)",
          }}
        />
        <div className="container" style={{ position: "relative", paddingTop: "clamp(3.5rem, 8vw, 7rem)", paddingBottom: "clamp(2.5rem,5vw,4rem)", textAlign: "center" }}>
          <span className="eyebrow animate-fade-up" style={{ ["--delay" as any]: "0ms" }}>Product &amp; engineering studio</span>

          <h1 className="display animate-fade-up" style={{ ["--delay" as any]: "70ms", marginTop: "1.4rem", maxWidth: "16ch", marginInline: "auto" }}>
            We build products that <span className="accent">earn their keep.</span>
          </h1>

          <p className="lead animate-fade-up" style={{ ["--delay" as any]: "150ms", marginTop: "1.6rem", maxWidth: "52ch", marginInline: "auto" }}>
            LOOPWAR designs, builds and ships high-performing websites, apps and AI products —
            for clients, and as our own ventures.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 animate-fade-up" style={{ ["--delay" as any]: "230ms", marginTop: "2.2rem" }}>
            <a href="/contact" className="btn btn-accent">Start a project <Arrow /></a>
            <a href="/portfolio" className="btn btn-outline">View our work</a>
          </div>

          {/* trusted strip */}
          <div className="animate-fade-up" style={{ ["--delay" as any]: "320ms", marginTop: "3rem" }}>
            <div className="mono" style={{ fontSize: ".72rem", letterSpacing: ".08em", color: "var(--gray-400)", textTransform: "uppercase", marginBottom: "1rem" }}>
              Shipped across e-commerce · healthcare · logistics · AI
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2 mono" style={{ fontSize: ".85rem", color: "var(--gray-500)" }}>
              {names.map((n, i) => (
                <span key={n} className="inline-flex items-center gap-7">
                  {i > 0 && <span style={{ color: "var(--border-strong)" }}>/</span>}
                  {n}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* hero product frame */}
        <div className="container animate-fade-up" style={{ ["--delay" as any]: "400ms", paddingBottom: "clamp(3rem,6vw,5rem)" }}>
          <div className="card" style={{ overflow: "hidden", borderRadius: "var(--radius-xl)", boxShadow: "0 40px 90px -50px rgba(0,0,0,.45)" }}>
            <div className="flex items-center gap-1.5" style={{ padding: ".7rem .9rem", borderBottom: "1px solid var(--border)", background: "var(--bg-subtle)" }}>
              <span style={{ width: 10, height: 10, borderRadius: 99, background: "var(--border-strong)" }} />
              <span style={{ width: 10, height: 10, borderRadius: 99, background: "var(--border-strong)" }} />
              <span style={{ width: 10, height: 10, borderRadius: 99, background: "var(--border-strong)" }} />
              <span className="mono" style={{ marginLeft: ".6rem", fontSize: ".72rem", color: "var(--gray-400)" }}>xirevoa.com</span>
            </div>
            <div style={{ aspectRatio: "16 / 9", overflow: "hidden", background: "var(--bg-subtle)" }}>
              <img src="/shots/xirevoa.png" alt="Xirevoa AI — LOOPWAR work"
                   style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} />
            </div>
          </div>
        </div>
      </section>

      {/* placeholder anchors so header links resolve until next batches land */}
      <section id="work" />
      <section id="ventures" />
      <section id="services" />
      <section id="process" />
    </div>
  );
}
