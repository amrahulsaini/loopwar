import Reveal from "./components/Reveal";
import { clientProjects, ventures } from "./data/projects";

const Arrow = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
const UpRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

const services = [
  ["Web & app development", "Performance-first websites and web apps on Next.js, React and Node — fast, accessible, and yours to own."],
  ["AI & automation", "LLM features, assistants and workflow automations that remove busywork and add real leverage."],
  ["E-commerce", "Conversion-focused stores with secure payments, catalog and order management built to sell."],
  ["UI/UX & brand", "Research-backed flows and design systems with pixel-clean execution across every screen."],
  ["Cloud & DevOps", "Self-hosted infra, CI/CD, containers and SSL — we ship to the cloud and keep it running."],
  ["Product & maintenance", "From MVP to scale: monitoring, optimisation and iteration that keep products fast."],
];

const steps = [
  ["Discover", "We dig into goals, users and constraints to define what success actually looks like."],
  ["Design", "Wireframes, UI and a design system — so it feels right before a line ships."],
  ["Build", "Agile sprints with frequent demos. Clean, scalable code you actually own."],
  ["Ship & scale", "Deploy, monitor, support and iterate. We stay on long after launch."],
];

function FlipCard({ img, domain, name, category, description, features, role }: {
  img: string; domain: string; name: string; category: string; description: string; features: string[]; role?: string;
}) {
  return (
    <a href={"https://" + domain} target="_blank" rel="noreferrer" className="flip block" style={{ height: 380 }}>
      <div className="flip-inner">
        {/* front */}
        <div className="flip-face">
          <div className="frame-shot" style={{ height: "72%", aspectRatio: "auto" }}>
            <img src={img} alt={name + " — " + category} loading="lazy" />
          </div>
          <div className="flex items-center justify-between" style={{ height: "28%", padding: "0 1.2rem", borderTop: "1px solid var(--border)" }}>
            <div>
              <div style={{ fontWeight: 600, fontSize: "1.15rem", letterSpacing: "-0.02em" }}>{name}</div>
              <div className="mono" style={{ fontSize: ".72rem", color: "var(--gray-500)", marginTop: 2 }}>{category}</div>
            </div>
            {role ? <span className="chip" style={{ borderColor: "var(--accent)", color: "var(--accent)" }}>{role}</span>
                  : <span style={{ color: "var(--gray-400)" }}><UpRight /></span>}
          </div>
        </div>
        {/* back */}
        <div className="flip-face flip-back band-dark" style={{ padding: "1.5rem", display: "flex", flexDirection: "column" }}>
          <div className="index" style={{ color: "var(--accent)" }}>{category}</div>
          <div style={{ fontWeight: 600, fontSize: "1.5rem", letterSpacing: "-0.03em", marginTop: ".5rem", color: "#fff" }}>{name}</div>
          <p style={{ color: "#bdbdbd", marginTop: ".7rem", fontSize: ".92rem", lineHeight: 1.55 }}>{description}</p>
          <div className="flex flex-wrap gap-2 mt-auto" style={{ paddingTop: "1rem" }}>
            {features.slice(0, 3).map((f) => (
              <span key={f} className="mono" style={{ fontSize: ".68rem", color: "#888", border: "1px solid #2a2a2a", borderRadius: 999, padding: ".2rem .55rem" }}>{f}</span>
            ))}
          </div>
          <div className="flex items-center gap-1.5" style={{ marginTop: "1rem", color: "var(--accent)", fontWeight: 500, fontSize: ".9rem" }}>
            Visit {domain} <UpRight />
          </div>
        </div>
      </div>
    </a>
  );
}

export default function Home() {
  const names = [...clientProjects, ...ventures].map((p) => p.name);
  return (
    <div>
      {/* ============ HERO ============ */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        <div aria-hidden className="grid-backdrop" style={{ position: "absolute", inset: "0 0 auto 0", height: 560, opacity: .5, WebkitMaskImage: "radial-gradient(120% 100% at 50% 0%, #000 30%, transparent 72%)", maskImage: "radial-gradient(120% 100% at 50% 0%, #000 30%, transparent 72%)" }} />
        <div className="container" style={{ position: "relative", paddingTop: "clamp(3.5rem, 8vw, 7rem)", paddingBottom: "clamp(2.5rem,5vw,4rem)", textAlign: "center" }}>
          <span className="eyebrow animate-fade-up">Product &amp; engineering studio</span>
          <h1 className="display animate-fade-up" style={{ ["--delay" as any]: "70ms", marginTop: "1.4rem", maxWidth: "16ch", marginInline: "auto" }}>
            We build products that <span className="accent">earn their keep.</span>
          </h1>
          <p className="lead animate-fade-up" style={{ ["--delay" as any]: "150ms", marginTop: "1.6rem", maxWidth: "52ch", marginInline: "auto" }}>
            LOOPWAR designs, builds and ships high-performing websites, apps and AI products — for clients, and as our own ventures.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 animate-fade-up" style={{ ["--delay" as any]: "230ms", marginTop: "2.2rem" }}>
            <a href="/contact" className="btn btn-accent">Start a project <Arrow /></a>
            <a href="/portfolio" className="btn btn-outline">View our work</a>
          </div>
          <div className="animate-fade-up" style={{ ["--delay" as any]: "320ms", marginTop: "3rem" }}>
            <div className="mono" style={{ fontSize: ".72rem", letterSpacing: ".08em", color: "var(--gray-400)", textTransform: "uppercase", marginBottom: "1rem" }}>
              Shipped across e-commerce · healthcare · logistics · AI
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2 mono" style={{ fontSize: ".85rem", color: "var(--gray-500)" }}>
              {names.map((n, i) => (
                <span key={n} className="inline-flex items-center gap-7">{i > 0 && <span style={{ color: "var(--border-strong)" }}>/</span>}{n}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="container animate-fade-up" style={{ ["--delay" as any]: "400ms", paddingBottom: "clamp(3rem,6vw,5rem)" }}>
          <div className="frame" style={{ borderRadius: "var(--radius-xl)", boxShadow: "0 40px 90px -50px rgba(0,0,0,.45)" }}>
            <div className="frame-bar"><span className="frame-dot" /><span className="frame-dot" /><span className="frame-dot" /><span className="mono" style={{ marginLeft: ".6rem", fontSize: ".72rem", color: "var(--gray-400)" }}>xirevoa.com</span></div>
            <div className="frame-shot" style={{ aspectRatio: "16/9" }}><img src="/shots/xirevoa.png" alt="Xirevoa AI — LOOPWAR" /></div>
          </div>
        </div>
      </section>

      {/* ============ WORK ============ */}
      <section id="work" className="section" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <Reveal className="section-head" style={{ marginBottom: "3rem" }}>
            <div>
              <span className="eyebrow">Selected work</span>
              <h2 className="section-title" style={{ marginTop: "1rem" }}>Products, shipped for real businesses.</h2>
            </div>
            <a href="/portfolio" className="btn btn-outline btn-sm">All work <Arrow /></a>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {clientProjects.map((p, i) => (
              <Reveal key={p.domain} delay={i * 70} className="reveal-zoom">
                <FlipCard img={p.image} domain={p.domain} name={p.name} category={p.category} description={p.description} features={p.features} />
              </Reveal>
            ))}
          </div>
          <p className="mono" style={{ textAlign: "center", marginTop: "1.5rem", fontSize: ".74rem", color: "var(--gray-400)" }}>↜ hover a card to flip ↝</p>
        </div>
      </section>

      {/* ============ VENTURES ============ */}
      <section id="ventures" className="section" style={{ borderTop: "1px solid var(--border)", background: "var(--bg-subtle)" }}>
        <div className="container">
          <Reveal className="section-head" style={{ marginBottom: "3rem" }}>
            <div>
              <span className="eyebrow">Built by us</span>
              <h2 className="section-title" style={{ marginTop: "1rem" }}>Our own ventures.</h2>
            </div>
            <p className="muted" style={{ maxWidth: "32ch" }}>We don&apos;t only build for clients — we build, own and run our own products.</p>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {ventures.map((v, i) => (
              <Reveal key={v.domain} delay={i * 70} className="reveal-zoom">
                <FlipCard img={v.image} domain={v.domain} name={v.name} category={v.category} description={v.description} features={v.features} role={v.role} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section id="services" className="section" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <Reveal style={{ marginBottom: "3rem", maxWidth: "40ch" }}>
            <span className="eyebrow">What we do</span>
            <h2 className="section-title" style={{ marginTop: "1rem" }}>Everything you need to launch and grow.</h2>
          </Reveal>
          <div className="grid gap-px" style={{ border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", overflow: "hidden", background: "var(--border)", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))" }}>
            {services.map(([t, d], i) => (
              <Reveal key={t} delay={i * 50}>
                <div className="hover-lift" style={{ background: "var(--bg)", padding: "2rem", height: "100%" }}>
                  <span className="index">{String(i + 1).padStart(2, "0")}</span>
                  <h3 style={{ fontSize: "1.25rem", marginTop: "1rem", letterSpacing: "-0.02em" }}>{t}</h3>
                  <p className="muted" style={{ marginTop: ".6rem", fontSize: ".92rem" }}>{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PROCESS ============ */}
      <section id="process" className="section" style={{ borderTop: "1px solid var(--border)", background: "var(--bg-subtle)" }}>
        <div className="container">
          <Reveal style={{ marginBottom: "3rem", maxWidth: "40ch" }}>
            <span className="eyebrow">How we work</span>
            <h2 className="section-title" style={{ marginTop: "1rem" }}>A simple, transparent process.</h2>
          </Reveal>
          <div className="grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
            {steps.map(([t, d], i) => (
              <Reveal key={t} delay={i * 70}>
                <div className="flex items-center gap-3"><span className="step-num">{i + 1}</span><h3 style={{ fontSize: "1.2rem" }}>{t}</h3></div>
                <p className="muted" style={{ marginTop: "1rem", fontSize: ".92rem" }}>{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="section band-dark">
        <div className="container" style={{ textAlign: "center" }}>
          <Reveal>
            <span className="eyebrow" style={{ color: "#999" }}>Let&apos;s talk</span>
            <h2 className="display" style={{ fontSize: "clamp(2.2rem,5.5vw,4rem)", color: "#fff", marginTop: "1.2rem", marginInline: "auto", maxWidth: "18ch" }}>
              Have something in mind? Let&apos;s build it <span className="accent">properly.</span>
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-3" style={{ marginTop: "2rem" }}>
              <a href="/contact" className="btn btn-accent">Start a project <Arrow /></a>
              <a href="mailto:contact@loopwar.dev" className="btn btn-outline" style={{ background: "transparent", color: "#fff", borderColor: "#333" }}>contact@loopwar.dev</a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
