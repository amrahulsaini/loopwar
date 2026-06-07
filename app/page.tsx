import Reveal from "./components/Reveal";
import Counter from "./components/Counter";
import Shot from "./components/Shot";
import { clientProjects, ventures } from "./data/projects";

const services = [
  { title: "Web & app development", body: "Fast, scalable websites and web apps on modern stacks — Next.js, React, Node — with clean code you own.", span: "col-4" },
  { title: "AI & automation", body: "Assistants, generation and insights that put intelligence where it earns its keep.", span: "col-2" },
  { title: "E‑commerce", body: "Conversion‑focused stores with secure payments and a checkout tuned to sell.", span: "col-2" },
  { title: "UI/UX & brand", body: "Research‑backed flows, design systems and pixel‑clean execution that feel effortless.", span: "col-4" },
  { title: "Cloud & DevOps", body: "Self‑hosted infra, CI/CD, containers and SSL — we ship and keep it running.", span: "col-3" },
  { title: "Product & maintenance", body: "From MVP to scale: monitoring, optimisation and iteration that keep products fast.", span: "col-3" },
];

const stats = [
  { value: 7, suffix: "+", label: "Products shipped" },
  { value: 3, suffix: "", label: "In‑house ventures" },
  { value: 4, suffix: "+", label: "Industries served" },
  { value: 100, suffix: "%", label: "Code you own" },
];

const steps = [
  ["Discover", "We dig into goals, users and constraints to define what success actually looks like."],
  ["Design", "Wireframes, UI and a design system — so it feels right before a line ships."],
  ["Build", "Agile sprints with frequent demos. Clean, scalable code you actually own."],
  ["Ship & scale", "Deploy, monitor, support and iterate. We stay on after launch."],
];

const Arrow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const SpinBadge = () => (
  <div className="spin-badge" aria-hidden>
    <div className="ring">
      <svg viewBox="0 0 100 100" width="84" height="84">
        <defs><path id="circ" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" /></defs>
        <text><textPath href="#circ">LOOPWAR • DESIGN • BUILD • SHIP • </textPath></text>
      </svg>
    </div>
    <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", color: "#fff" }}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H8M17 7v9" /></svg>
    </div>
  </div>
);

const showcase = [...clientProjects, ...ventures];

export default function Home() {
  return (
    <div>
      {/* ============ HERO ============ */}
      <section className="container-page" style={{ paddingTop: ".5rem" }}>
        <div className="warm-card" style={{ minHeight: "clamp(540px, 84vh, 800px)", padding: "clamp(1.5rem, 4vw, 3.2rem)", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
          <div style={{ position: "absolute", top: "clamp(1.5rem,4vw,3rem)", right: "clamp(1.5rem,4vw,3rem)" }}>
            <SpinBadge />
          </div>

          <div className="relative" style={{ maxWidth: "20ch" }}>
            <span className="eyebrow eyebrow-light animate-fade-up"><span className="dot" style={{ background: "#fff" }} /> Available for new projects</span>
          </div>

          <h1 className="animate-fade-up mt-5" style={{ ['--delay' as any]: '80ms', color: "#fff", fontSize: "clamp(2.7rem, 7.4vw, 6.4rem)", lineHeight: ".96", letterSpacing: "-0.045em", maxWidth: "16ch" }}>
            We build products that earn their keep.
          </h1>

          <p className="lead animate-fade-up mt-6" style={{ ['--delay' as any]: '160ms', color: "rgba(255,255,255,.9)", maxWidth: "48ch" }}>
            A senior product & engineering studio. We design, build and ship websites, apps and
            AI products — for clients, and as our own ventures.
          </p>

          <div className="flex flex-wrap items-center gap-4 animate-fade-up mt-8" style={{ ['--delay' as any]: '240ms' }}>
            <a className="btn btn-on-warm btn-lg" href="/contact">Start a project</a>
            <a className="btn btn-ghost-warm btn-lg" href="/portfolio">See our work <Arrow /></a>
          </div>
        </div>
      </section>

      {/* ============ MARQUEE ============ */}
      <section className="marquee" style={{ paddingBlock: "clamp(2rem, 4vw, 3.5rem)" }}>
        <div className="marquee-track">
          {[...showcase, ...showcase].map((p, i) => (
            <a key={i} href={p.url} target="_blank" rel="noreferrer" className="marquee-item">
              <Shot src={p.image} alt={p.name} tag={p.domain} ratio="16 / 10" />
            </a>
          ))}
        </div>
      </section>

      {/* ============ STATS ============ */}
      <section className="container-page">
        <div className="card" style={{ padding: "clamp(1.5rem,3vw,2.5rem)" }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <Reveal key={s.label}>
                <Counter className="stat-value" value={s.value} suffix={s.suffix} />
                <div className="label mt-2">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section id="services" className="container-page section">
        <Reveal className="grid gap-6 md:grid-cols-12 mb-10">
          <div className="md:col-span-6">
            <span className="eyebrow">What we do</span>
            <h2 className="section-title mt-5">Everything you need to launch and grow.</h2>
          </div>
          <p className="md:col-span-5 md:col-start-8 self-end section-subtitle">
            One senior team, end to end — from a first MVP to a product at scale.
          </p>
        </Reveal>

        <div className="bento">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 60} className={s.span}>
              <div className="tile h-full">
                <span className="idx" style={{ fontSize: ".95rem" }}>{String(i + 1).padStart(2, "0")}</span>
                <h3 className="text-2xl mt-4" style={{ fontSize: "1.5rem" }}>{s.title}</h3>
                <p className="mt-2" style={{ color: "var(--muted)" }}>{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ SELECTED WORK ============ */}
      <section id="work" className="container-page section">
        <Reveal className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <span className="eyebrow">Selected client work</span>
            <h2 className="section-title mt-5">Real products, shipped for real businesses.</h2>
          </div>
          <a href="/portfolio" className="link-arrow">All work <Arrow /></a>
        </Reveal>

        <div className="space-y-20 md:space-y-28">
          {clientProjects.map((p, i) => {
            const flip = i % 2 === 1;
            return (
              <Reveal key={p.domain}>
                <div className="grid gap-8 md:gap-14 md:grid-cols-2 items-center">
                  <a href={p.url} target="_blank" rel="noreferrer" className={flip ? "md:order-2" : ""}>
                    <Shot src={p.image} alt={`${p.name} — ${p.category}`} tag={p.domain} ratio="16 / 11" pan />
                  </a>
                  <div className={flip ? "md:order-1" : ""}>
                    <div className="flex items-center gap-4">
                      <span className="idx" style={{ fontSize: "1.1rem" }}>{String(i + 1).padStart(2, "0")}</span>
                      <span className="label">{p.category}</span>
                    </div>
                    <h3 className="mt-3" style={{ fontSize: "clamp(1.9rem, 3.6vw, 2.8rem)" }}>{p.name}</h3>
                    <p className="mt-4" style={{ color: "var(--muted)", maxWidth: "46ch" }}>{p.description}</p>
                    <div className="flex flex-wrap gap-2 mt-6">
                      {p.features.map((f) => <span key={f} className="chip">{f}</span>)}
                    </div>
                    <a href={p.url} target="_blank" rel="noreferrer" className="link-arrow mt-8">Visit {p.domain} <Arrow /></a>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ============ VENTURES ============ */}
      <section id="ventures" className="container-page section">
        <Reveal className="grid gap-6 md:grid-cols-12 mb-12">
          <div className="md:col-span-7">
            <span className="eyebrow">Built by us</span>
            <h2 className="section-title mt-5">Our ventures.</h2>
          </div>
          <p className="md:col-span-5 self-end section-subtitle">
            We don&apos;t only build for clients — we build, own and run our own products.
          </p>
        </Reveal>

        <div className="grid gap-7 md:grid-cols-3">
          {ventures.map((v, i) => (
            <Reveal key={v.domain} delay={i * 70}>
              <a href={v.url} target="_blank" rel="noreferrer" className="card hover-lift flex flex-col h-full" style={{ padding: "1rem" }}>
                <Shot src={v.image} alt={`${v.name} — ${v.category}`} ratio="16 / 10" pan />
                <div className="flex flex-col flex-1 px-3 pt-5 pb-2">
                  <div className="flex items-center justify-between">
                    <span className="label" style={{ color: "var(--accent)" }}>{v.category}</span>
                    <span className="chip-accent chip">{v.role}</span>
                  </div>
                  <h3 className="mt-3 text-2xl">{v.name}</h3>
                  <p className="mt-2 flex-1" style={{ color: "var(--muted)" }}>{v.description}</p>
                  <span className="link-arrow mt-5">Visit {v.name} <Arrow /></span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ PROCESS ============ */}
      <section className="container-page section-sm" style={{ paddingBottom: "clamp(3rem,6vw,5rem)" }}>
        <div className="card" style={{ padding: "clamp(2rem,4vw,3.5rem)" }}>
          <Reveal className="mb-12 max-w-2xl">
            <span className="eyebrow">How we work</span>
            <h2 className="section-title mt-5">A simple, transparent process.</h2>
            <p className="section-subtitle mt-2">Clear milestones, frequent demos, no surprises.</p>
          </Reveal>
          <div className="grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
            {steps.map(([title, body], i) => (
              <Reveal key={title} delay={i * 70}>
                <div className="flex items-center gap-3">
                  <span className="step-no">{i + 1}</span>
                  <h3 className="text-xl">{title}</h3>
                </div>
                <p className="mt-4" style={{ color: "var(--muted)" }}>{body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CONTACT CTA ============ */}
      <section className="container-page" style={{ paddingBottom: "clamp(3rem,6vw,6rem)" }}>
        <Reveal>
          <div className="warm-card" style={{ padding: "clamp(2.2rem, 5vw, 4.5rem)" }}>
            <div className="relative grid gap-10 md:grid-cols-12 items-end">
              <div className="md:col-span-8">
                <span className="eyebrow eyebrow-light"><span className="dot" style={{ background: "#fff" }} /> Let&apos;s talk</span>
                <h2 className="mt-5" style={{ color: "#fff", fontSize: "clamp(2.2rem, 5.4vw, 4.2rem)", lineHeight: ".98", letterSpacing: "-0.04em" }}>
                  Have something in mind? Let&apos;s build it properly.
                </h2>
                <div className="flex flex-wrap items-center gap-4 mt-8">
                  <a href="/contact" className="btn btn-on-warm btn-lg">Start a project</a>
                  <a href="mailto:contact@loopwar.dev" className="btn btn-ghost-warm btn-lg">contact@loopwar.dev</a>
                </div>
              </div>
              <div className="md:col-span-4 md:text-right space-y-4" style={{ color: "rgba(255,255,255,.85)" }}>
                <div>
                  <div className="label" style={{ color: "rgba(255,255,255,.7)" }}>Call</div>
                  <a href="tel:+916377362603" style={{ color: "#fff" }}>+91 63773 62603</a>
                  <div className="text-sm">Mon–Sat, 9 AM – 7 PM IST</div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
