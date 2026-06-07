import Reveal from "./components/Reveal";
import { clientProjects, ventures, type Project } from "./data/projects";

const Arrow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
const UpRight = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M8 7h9v9" /></svg>
);

const services = [
  ["Web & app development", "Fast, friendly websites and apps on Next.js, React and Node — yours to keep."],
  ["AI & automation", "Assistants and automations that take the boring work off your plate."],
  ["E-commerce", "Lovely little stores with secure payments, built to actually sell."],
  ["UI/UX & brand", "Warm, clear interfaces and design systems people enjoy using."],
  ["Cloud & DevOps", "Hosting, CI/CD and SSL sorted — we ship it and keep it humming."],
  ["Product & maintenance", "From first MVP to scale: we stick around and keep improving it."],
];
const steps = [
  ["Discover", "We get to know your goals, your users, and what success really means."],
  ["Design", "Sketches, UI and a system — so it feels right before we build."],
  ["Build", "Friendly sprints with frequent demos and clean code you own."],
  ["Ship & scale", "We launch, watch, support and keep making it better."],
];

function WorkCard({ p, role }: { p: Project; role?: string }) {
  return (
    <a href={p.url} target="_blank" rel="noreferrer" className="card hover-lift" style={{ overflow: "hidden", display: "block" }}>
      <div className="shot" style={{ aspectRatio: "16/10", borderRadius: 0 }}>
        <img src={p.image} alt={`${p.name} — ${p.category}`} loading="lazy" />
      </div>
      <div style={{ padding: "1.4rem 1.5rem 1.6rem", borderTop: "2px solid var(--border)" }}>
        <div className="flex items-center justify-between" style={{ gap: ".75rem" }}>
          <span className="muted" style={{ fontSize: ".95rem" }}>{p.category}</span>
          {role ? <span className="chip">{role}</span> : <span className="muted"><UpRight /></span>}
        </div>
        <h3 style={{ fontSize: "1.8rem", marginTop: ".3rem" }}>{p.name}</h3>
        <p className="muted" style={{ marginTop: ".4rem", fontSize: "1.02rem" }}>{p.description}</p>
        <div className="flex items-center gap-1.5" style={{ marginTop: "1rem", fontSize: "1.05rem" }}>Visit {p.domain} <UpRight /></div>
      </div>
    </a>
  );
}

export default function Home() {
  return (
    <div>
      {/* ============ HERO (image-forward) ============ */}
      <section className="container" style={{ paddingTop: "clamp(2.5rem,6vw,4.5rem)", paddingBottom: "clamp(2.5rem,5vw,4rem)" }}>
        <div style={{ textAlign: "center", maxWidth: 820, marginInline: "auto" }}>
          <span className="eyebrow animate-fade-up">Hello — we&apos;re LOOPWAR ✦</span>
          <h1 className="display animate-fade-up" style={{ ["--delay" as any]: "70ms", marginTop: "1.4rem" }}>
            We make products that <span style={{ textDecoration: "underline", textDecorationColor: "var(--accent)", textDecorationThickness: 6, textUnderlineOffset: 8 }}>earn their keep.</span>
          </h1>
          <p className="lead animate-fade-up" style={{ ["--delay" as any]: "150ms", marginTop: "1.4rem", maxWidth: "44ch", marginInline: "auto" }}>
            A small studio that designs, builds and ships websites, apps and AI products — for clients, and as our own ventures.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 animate-fade-up" style={{ ["--delay" as any]: "230ms", marginTop: "2rem" }}>
            <a href="/contact" className="btn btn-accent">Start a project <Arrow /></a>
            <a href="/portfolio" className="btn btn-outline">See our work</a>
          </div>
        </div>

      </section>

      {/* big LOOPWAR marquee */}
      <div className="marquee" aria-hidden style={{ marginTop: "clamp(1rem,3vw,2rem)" }}>
        <div className="marquee-track">
          {[0, 1].map((g) => (
            <div className="marquee-item" key={g}>
              <span>LOOPWAR</span><span className="star">✦</span>
              <span className="ghost">LOOPWAR</span><span className="star">✦</span>
              <span>LOOPWAR</span><span className="star">✦</span>
              <span className="ghost">LOOPWAR</span><span className="star">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* ============ WORK ============ */}
      <section id="work" className="section">
        <div className="container">
          <Reveal className="flex flex-wrap items-end justify-between" style={{ gap: "1.25rem", marginBottom: "2.5rem" }}>
            <div>
              <span className="eyebrow">Selected work</span>
              <h2 className="section-title" style={{ marginTop: "1rem" }}>Things we&apos;ve made for clients.</h2>
            </div>
            <a href="/portfolio" className="btn btn-outline btn-sm">All work <Arrow /></a>
          </Reveal>
          <div className="grid gap-7 md:grid-cols-2">
            {clientProjects.map((p, i) => (
              <Reveal key={p.domain} delay={i * 70} className="reveal-zoom"><WorkCard p={p} /></Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ VENTURES ============ */}
      <section id="ventures" className="section block" style={{ borderBlock: "2px solid var(--border)" }}>
        <div className="container">
          <Reveal style={{ marginBottom: "2.5rem", maxWidth: "40ch" }}>
            <span className="eyebrow">Built by us</span>
            <h2 className="section-title" style={{ marginTop: "1rem" }}>Our own little ventures.</h2>
          </Reveal>
          <div className="grid gap-7 md:grid-cols-3">
            {ventures.map((v, i) => (
              <Reveal key={v.domain} delay={i * 70} className="reveal-zoom"><WorkCard p={v} role={v.role} /></Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section id="services" className="section">
        <div className="container">
          <Reveal style={{ marginBottom: "2.5rem", maxWidth: "40ch" }}>
            <span className="eyebrow">What we do</span>
            <h2 className="section-title" style={{ marginTop: "1rem" }}>Everything to launch &amp; grow.</h2>
          </Reveal>
          <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))" }}>
            {services.map(([t, d], i) => (
              <Reveal key={t} delay={i * 50} className="reveal-zoom">
                <div className="card hover-lift" style={{ padding: "1.8rem", height: "100%" }}>
                  <span className="step-num" style={{ width: 44, height: 44, fontSize: "1.1rem" }}>{String(i + 1).padStart(2, "0")}</span>
                  <h3 style={{ fontSize: "1.5rem", marginTop: "1rem" }}>{t}</h3>
                  <p className="muted" style={{ marginTop: ".5rem", fontSize: "1.02rem" }}>{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PROCESS ============ */}
      <section id="process" className="section block" style={{ borderBlock: "2px solid var(--border)" }}>
        <div className="container">
          <Reveal style={{ marginBottom: "2.5rem", maxWidth: "40ch" }}>
            <span className="eyebrow">How we work</span>
            <h2 className="section-title" style={{ marginTop: "1rem" }}>A simple, friendly process.</h2>
          </Reveal>
          <div className="grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
            {steps.map(([t, d], i) => (
              <Reveal key={t} delay={i * 70}>
                <div className="flex items-center gap-3"><span className="step-num">{i + 1}</span><h3 style={{ fontSize: "1.5rem" }}>{t}</h3></div>
                <p className="muted" style={{ marginTop: "1rem", fontSize: "1.02rem" }}>{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="card band-dark" style={{ padding: "clamp(2.5rem,5vw,4.5rem)", textAlign: "center", borderColor: "var(--fg)" }}>
              <h2 className="display" style={{ fontSize: "clamp(2.2rem,5.5vw,4rem)", color: "var(--card)", marginInline: "auto", maxWidth: "18ch" }}>
                Got something in mind? Let&apos;s build it.
              </h2>
              <div className="flex flex-wrap items-center justify-center gap-3" style={{ marginTop: "1.8rem" }}>
                <a href="/contact" className="btn">Start a project <Arrow /></a>
                <a href="mailto:contact@loopwar.dev" className="btn btn-outline">contact@loopwar.dev</a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
