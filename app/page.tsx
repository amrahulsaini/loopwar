import Reveal from "./components/Reveal";
import Counter from "./components/Counter";
import BrowserFrame from "./components/BrowserFrame";
import { clientProjects, ventures } from "./data/projects";

const services = [
  { title: "Web & app development", body: "Fast, scalable websites and web apps on modern stacks — Next.js, React, Node — with clean code you own.", span: "col-4" },
  { title: "AI & automation", body: "Assistants, generation and insights that put intelligence where it earns its keep.", span: "col-2" },
  { title: "E‑commerce", body: "Conversion‑focused stores with secure payments and a checkout tuned to sell.", span: "col-2" },
  { title: "UI/UX & brand", body: "Research‑backed flows, design systems and pixel‑clean execution that make products feel effortless.", span: "col-4" },
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

const showcase = [...clientProjects, ...ventures];

export default function Home() {
  return (
    <div>
      {/* ============ HERO ============ */}
      <section className="grid-bg" style={{ position: "relative", overflow: "hidden", borderBottom: "1px solid var(--line)" }}>
        <div className="glow pulse-glow" style={{ width: 620, height: 620, top: -320, left: "12%", opacity: .16 }} />
        <div className="container-page" style={{ position: "relative", paddingBlock: "clamp(3.5rem, 8vw, 7rem)" }}>
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Copy */}
            <div className="lg:col-span-7">
              <span className="eyebrow animate-fade-up"><span className="dot" /> Available for new projects</span>

              <h1 className="animate-fade-up mt-6" style={{ ['--delay' as any]: '80ms', fontSize: "clamp(2.6rem, 6.4vw, 5.4rem)", lineHeight: ".97", letterSpacing: "-0.045em" }}>
                We build digital products that <span className="accent">earn their keep.</span>
              </h1>

              <p className="lead animate-fade-up mt-7" style={{ ['--delay' as any]: '160ms', maxWidth: "52ch" }}>
                LoopWar is a senior product & engineering studio — high‑performing websites, apps and
                AI products for clients, plus our own ventures: Xirevoa, MyAIDiary and CRMRS.
              </p>

              <div className="flex flex-wrap items-center gap-5 animate-fade-up mt-9" style={{ ['--delay' as any]: '240ms' }}>
                <a className="btn btn-lg" href="/contact">Start a project <Arrow /></a>
                <a className="btn secondary btn-lg" href="/portfolio">View our work</a>
              </div>
            </div>

            {/* 3D mockups */}
            <div className="lg:col-span-5 relative" style={{ minHeight: 320 }}>
              <div className="glow" style={{ width: 360, height: 360, top: "10%", right: "-10%", opacity: .22 }} />
              <div className="relative animate-fade-up" style={{ ['--delay' as any]: '200ms' }}>
                <div className="tilt-3d floaty">
                  <BrowserFrame src="/shots/xirevoa.png" alt="Xirevoa AI" domain="xirevoa.com" ratio="16 / 11" priority />
                </div>
                <div className="hidden sm:block tilt-r" style={{ position: "absolute", right: "-6%", bottom: "-14%", width: "58%" }}>
                  <BrowserFrame src="/shots/crmrs.png" alt="CRMRS" domain="crmrecoverysoftware.com" ratio="16 / 11" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Showcase marquee */}
        <div className="marquee" style={{ paddingBottom: "2.5rem" }}>
          <div className="marquee-track">
            {[...showcase, ...showcase].map((p, i) => (
              <a key={i} href={p.url} target="_blank" rel="noreferrer" className="marquee-item">
                <BrowserFrame src={p.image} alt={`${p.name}`} domain={p.domain} ratio="16 / 10" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ============ STATS ============ */}
      <section className="surface-dark">
        <div className="container-page" style={{ paddingBlock: "clamp(2.5rem, 5vw, 4rem)" }}>
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

      {/* ============ SERVICES (bento) ============ */}
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
      <section id="work" className="surface-dark">
        <div className="container-page section">
          <Reveal className="flex flex-wrap items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <span className="eyebrow">Selected client work</span>
              <h2 className="section-title mt-5">Real products, shipped for real businesses.</h2>
            </div>
            <a href="/portfolio" className="link-arrow">All work <Arrow /></a>
          </Reveal>

          <div className="space-y-24 md:space-y-36">
            {clientProjects.map((p, i) => {
              const flip = i % 2 === 1;
              return (
                <Reveal key={p.domain}>
                  <div className="grid gap-10 md:gap-14 md:grid-cols-2 items-center">
                    <a href={p.url} target="_blank" rel="noreferrer" className={`relative ${flip ? "md:order-2" : ""}`}>
                      <div className="glow glow-soft" style={{ inset: "10% 5%", opacity: .25 }} />
                      <div className={`relative ${flip ? "tilt-r" : "tilt-3d"}`}>
                        <BrowserFrame src={p.image} alt={`${p.name} — ${p.category}`} domain={p.domain} ratio="16 / 11" className="browser-pan" />
                      </div>
                    </a>
                    <div className={flip ? "md:order-1" : ""}>
                      <div className="flex items-center gap-4">
                        <span className="idx" style={{ fontSize: "1.1rem" }}>{String(i + 1).padStart(2, "0")}</span>
                        <span className="label">{p.category}</span>
                      </div>
                      <h3 className="mt-3" style={{ fontSize: "clamp(1.9rem, 3.6vw, 2.8rem)", letterSpacing: "-0.035em" }}>{p.name}</h3>
                      <p className="mt-4" style={{ color: "var(--muted)", maxWidth: "46ch" }}>{p.description}</p>
                      <div className="flex flex-wrap gap-2 mt-6">
                        {p.features.map((f) => (
                          <span key={f} className="chip">{f}</span>
                        ))}
                      </div>
                      <a href={p.url} target="_blank" rel="noreferrer" className="link-arrow mt-8">
                        Visit {p.domain} <Arrow />
                      </a>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
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
              <a href={v.url} target="_blank" rel="noreferrer" className="project-card flex flex-col h-full">
                <BrowserFrame src={v.image} alt={`${v.name} — ${v.category}`} domain={v.domain} ratio="16 / 10" embed />
                <div className="p-6 flex flex-col flex-1" style={{ borderTop: "1px solid var(--line)" }}>
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
      <section className="surface-dark">
        <div className="container-page section">
          <Reveal className="mb-14 max-w-2xl">
            <span className="eyebrow">How we work</span>
            <h2 className="section-title mt-5">A simple, transparent process.</h2>
            <p className="section-subtitle mt-2">Clear milestones, frequent demos, no surprises.</p>
          </Reveal>
          <div className="grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
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
      <section className="container-page section">
        <Reveal>
          <div className="grid-bg" style={{ position: "relative", overflow: "hidden", border: "1px solid var(--line-2)", borderRadius: "var(--radius-xl)", background: "var(--surface)", padding: "clamp(2.5rem, 6vw, 5rem)" }}>
            <div className="glow pulse-glow" style={{ width: 480, height: 480, bottom: -260, right: -120, opacity: .18 }} />
            <div className="relative grid gap-10 md:grid-cols-12 items-end">
              <div className="md:col-span-8">
                <span className="eyebrow"><span className="dot" /> Let&apos;s talk</span>
                <h2 className="section-title mt-5" style={{ fontSize: "clamp(2.2rem, 5.2vw, 4rem)" }}>
                  Have something in mind?<br />Let&apos;s build it <span className="accent">properly.</span>
                </h2>
                <div className="flex flex-wrap items-center gap-5 mt-8">
                  <a href="/contact" className="btn btn-lg">Start a project <Arrow /></a>
                  <a href="mailto:contact@loopwar.dev" className="link-arrow">contact@loopwar.dev <Arrow /></a>
                </div>
              </div>
              <div className="md:col-span-4 md:text-right space-y-4" style={{ color: "var(--muted)" }}>
                <div>
                  <div className="label">Email</div>
                  <a href="mailto:contact@loopwar.dev" className="hover:text-white" style={{ color: "var(--text)" }}>contact@loopwar.dev</a>
                </div>
                <div>
                  <div className="label">Call</div>
                  <a href="tel:+916377362603" style={{ color: "var(--text)" }}>+91 63773 62603</a>
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
