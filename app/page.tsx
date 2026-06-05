import Typewriter from "./components/Typewriter";
import Reveal from "./components/Reveal";
import { clientProjects, ventures } from "./data/projects";

const services = [
  {
    title: "Web & App Development",
    body: "Fast, scalable websites and web apps built with modern stacks — Next.js, React, Node and clean, maintainable code.",
    icon: (
      <path d="M3 5h18v12H3zM3 19h18M9 9l-2 2 2 2m6-4 2 2-2 2" />
    ),
  },
  {
    title: "AI & Automation",
    body: "We embed AI where it counts — assistants, generation, insights and automations that remove busywork and add real value.",
    icon: <path d="M12 3v3m0 12v3M5 12H2m20 0h-3M6 6l2 2m8 8 2 2M6 18l2-2m8-8 2-2M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />,
  },
  {
    title: "E‑Commerce",
    body: "Conversion‑focused stores with secure payments, catalog & order management, and a checkout tuned to sell.",
    icon: <path d="M3 4h2l2.4 12.5a1 1 0 0 0 1 .8h8.7a1 1 0 0 0 1-.8L21 8H6m3 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm9 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />,
  },
  {
    title: "UI/UX & Brand",
    body: "Interfaces people love to use — research‑backed flows, design systems and pixel‑clean execution across devices.",
    icon: <path d="M12 2 2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />,
  },
  {
    title: "Cloud & DevOps",
    body: "Self‑hosted infra, CI/CD, containers and SSL done right — we ship to the cloud and keep it running smoothly.",
    icon: <path d="M7 18a4 4 0 0 1 0-8 5 5 0 0 1 9.6-1.5A4.5 4.5 0 0 1 17 18H7zM12 12v6m0 0-2-2m2 2 2-2" />,
  },
  {
    title: "Product & Maintenance",
    body: "From MVP to scale — ongoing optimization, monitoring, support and iteration to keep products performing.",
    icon: <path d="M10.3 3.2a2 2 0 0 1 3.4 0l1 1.7 2-.2a2 2 0 0 1 2 2.5l-.5 1.9 1.4 1.5a2 2 0 0 1 0 2.8l-1.4 1.5.5 1.9a2 2 0 0 1-2 2.5l-2-.2-1 1.7a2 2 0 0 1-3.4 0l-1-1.7-2 .2a2 2 0 0 1-2-2.5l.5-1.9-1.4-1.5a2 2 0 0 1 0-2.8L4.3 9l-.5-1.9a2 2 0 0 1 2-2.5l2 .2 1-1.7zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />,
  },
];

const stats = [
  { value: "7+", label: "Products shipped & live" },
  { value: "3", label: "In‑house ventures" },
  { value: "4+", label: "Industries served" },
  { value: "100%", label: "Owned & operated code" },
];

const steps = [
  ["Discover", "We dig into goals, users and constraints to align on what success actually looks like."],
  ["Design", "Wireframes, UI and a design system — so the product feels right before a line ships."],
  ["Build", "Agile sprints with frequent demos. Clean, scalable code you actually own."],
  ["Ship & Scale", "Deploy, monitor, support and iterate — we stay on after launch."],
];

function Icon({ children }: { children: React.ReactNode }) {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      {children}
    </svg>
  );
}

export default function Home() {
  return (
    <div>
      {/* ============ HERO ============ */}
      <section className="surface-dark grid-bg" style={{ position: "relative", overflow: "hidden" }}>
        <div className="glow" style={{ width: "560px", height: "560px", top: "-220px", left: "50%", transform: "translateX(-50%)", opacity: .35 }} />
        <div className="glow" style={{ width: "320px", height: "320px", bottom: "-160px", right: "-60px", opacity: .25 }} />
        <div className="container-page" style={{ paddingBlock: "clamp(4.5rem, 11vw, 8.5rem)", position: "relative" }}>
          <div className="max-w-4xl mx-auto text-center space-y-7">
            <span className="chip" style={{ background: "rgba(255,255,255,.06)", borderColor: "rgba(255,255,255,.15)", color: "#fff" }}>
              <span style={{ width: 8, height: 8, borderRadius: 99, background: "#34d399", display: "inline-block" }} />
              <Typewriter text="A product & engineering studio" speed={32} caret className="text-sm" />
            </span>

            <h1 className="animate-fade-up" style={{ fontSize: "clamp(2.4rem, 6vw, 4.4rem)", lineHeight: 1.05 }}>
              We design, build & ship
              <br className="hidden sm:block" />{" "}
              <span className="gradient-text">digital products</span> that grow your business
            </h1>

            <p className="lead animate-fade-up mx-auto" style={{ ['--delay' as any]: '120ms', color: "#b9bac4", maxWidth: "60ch" }}>
              LoopWar is a small, senior team building high‑performing websites, apps and AI products for clients —
              and our own ventures like <strong style={{ color: "#fff" }}>Xirevoa</strong>, <strong style={{ color: "#fff" }}>MyAIDiary</strong> and <strong style={{ color: "#fff" }}>CRMRS</strong>.
            </p>

            <div className="flex flex-wrap gap-3 justify-center animate-fade-up" style={{ ['--delay' as any]: '200ms' }}>
              <a className="btn btn-grad btn-lg" href="/contact">Start a project →</a>
              <a className="btn btn-ghost-light btn-lg" href="/portfolio">View our work</a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 max-w-3xl mx-auto">
              {stats.map((s) => (
                <div key={s.label} className="glass" style={{ padding: "1.1rem .75rem" }}>
                  <div className="stat-value gradient-text">{s.value}</div>
                  <div className="text-xs mt-1" style={{ color: "#9a9ca8" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Marquee strip */}
        <div className="marquee" style={{ borderTop: "1px solid rgba(255,255,255,.1)", padding: "1.1rem 0" }}>
          <div className="marquee-track" style={{ color: "#7e8090", fontFamily: "var(--font-heading)", fontWeight: 700, letterSpacing: ".02em" }}>
            {[...clientProjects, ...ventures, ...clientProjects, ...ventures].map((p, i) => (
              <span key={i} className="inline-flex items-center gap-3">
                {p.name}
                <span style={{ color: "var(--accent)" }}>✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section id="services" className="container-page section">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">What we do</span>
          <h2 className="section-title mt-2">Everything you need to launch & grow</h2>
          <p className="section-subtitle">From a first MVP to a product at scale — one team, end to end.</p>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 mt-10">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 70}>
              <div className="card hover-lift h-full">
                <div className="inline-flex items-center justify-center mb-4"
                     style={{ width: "3rem", height: "3rem", borderRadius: ".9rem", background: "var(--grad-soft)", color: "var(--accent)" }}>
                  <Icon>{s.icon}</Icon>
                </div>
                <h3 className="text-xl mb-2">{s.title}</h3>
                <p style={{ color: "var(--text-body)" }}>{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ FEATURED WORK ============ */}
      <section id="work" style={{ background: "var(--bg-soft)" }}>
        <div className="container-page section">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <span className="eyebrow">Selected client work</span>
              <h2 className="section-title mt-2">Real products, shipped for real businesses</h2>
              <p className="section-subtitle">A few of the websites and platforms we&apos;ve built for our clients.</p>
            </div>
            <a href="/portfolio" className="btn secondary">See all work →</a>
          </Reveal>

          <div className="grid gap-7 md:grid-cols-2 mt-10">
            {clientProjects.map((p, i) => (
              <Reveal key={p.domain} delay={i * 80}>
                <a href={p.url} target="_blank" rel="noreferrer" className="project-card block h-full">
                  <div className={`project-media ${p.contain ? "project-media-contain" : ""}`}>
                    <img src={p.image} alt={`${p.name} — ${p.category}`} loading="lazy" />
                    <span className="chip" style={{ position: "absolute", top: "1rem", left: "1rem", backdropFilter: "blur(6px)", background: "rgba(255,255,255,.85)" }}>{p.category}</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-2xl">{p.name}</h3>
                      <span className="text-sm" style={{ color: "var(--muted)" }}>{p.domain}</span>
                    </div>
                    <p className="mt-2" style={{ color: "var(--text-body)" }}>{p.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {p.features.slice(0, 3).map((f) => (
                        <span key={f} className="chip-accent chip">{f}</span>
                      ))}
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ VENTURES ============ */}
      <section id="ventures" className="container-page section">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Built by us, for the world</span>
          <h2 className="section-title mt-2">Our ventures</h2>
          <p className="section-subtitle">We don&apos;t just build for clients — we build and run our own products.</p>
        </Reveal>

        <div className="grid gap-7 lg:grid-cols-3 mt-10">
          {ventures.map((v, i) => (
            <Reveal key={v.domain} delay={i * 90}>
              <div className="project-card h-full flex flex-col">
                <div className={`project-media ${v.contain ? "project-media-contain" : ""}`} style={{ aspectRatio: "16 / 11" }}>
                  <img src={v.image} alt={`${v.name} — ${v.category}`} loading="lazy" />
                  <span className="chip" style={{ position: "absolute", top: "1rem", left: "1rem", background: "var(--grad)", color: "#fff", borderColor: "transparent" }}>{v.role}</span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="text-xs font-semibold mb-1" style={{ color: "var(--accent)" }}>{v.category}</div>
                  <h3 className="text-2xl">{v.name}</h3>
                  <p className="mt-2 flex-1" style={{ color: "var(--text-body)" }}>{v.description}</p>
                  <a href={v.url} target="_blank" rel="noreferrer" className="btn secondary mt-5 w-full">Visit {v.name} →</a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ PROCESS ============ */}
      <section className="surface-dark">
        <div className="container-page section">
          <Reveal className="max-w-2xl">
            <span className="eyebrow" style={{ color: "#c4b5fd" }}>How we work</span>
            <h2 className="section-title mt-2" style={{ color: "#fff" }}>A simple, transparent process</h2>
            <p className="section-subtitle" style={{ color: "#9a9ca8" }}>Clear milestones, frequent demos, no surprises.</p>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4 mt-10">
            {steps.map(([title, body], i) => (
              <Reveal key={title} delay={i * 90}>
                <div className="glass h-full" style={{ padding: "1.5rem" }}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="step-no">{i + 1}</span>
                    <h3 style={{ color: "#fff" }} className="text-lg">{title}</h3>
                  </div>
                  <p style={{ color: "#b9bac4" }}>{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CONTACT CTA ============ */}
      <section className="container-page section">
        <Reveal>
          <div style={{ position: "relative", overflow: "hidden", borderRadius: "var(--radius-lg)", background: "var(--grad)", backgroundSize: "180% 180%" }}>
            <div className="glow" style={{ width: 360, height: 360, top: -160, right: -80, background: "#fff", opacity: .12 }} />
            <div className="grid gap-8 md:grid-cols-[1.4fr_1fr] items-center p-8 md:p-12" style={{ color: "#fff", position: "relative" }}>
              <div className="space-y-4">
                <h2 style={{ color: "#fff", fontSize: "clamp(1.8rem,3.5vw,2.8rem)" }}>Let&apos;s build your next big thing</h2>
                <p style={{ color: "rgba(255,255,255,.9)", maxWidth: "52ch" }}>
                  Whether you&apos;re starting from scratch or scaling an existing product, we&apos;d love to help.
                  Tell us what you&apos;re building.
                </p>
                <div className="flex flex-wrap gap-3 pt-1">
                  <a href="/contact" className="btn btn-lg" style={{ background: "#fff", color: "var(--ink)", border: "none" }}>Start a project</a>
                  <a href="mailto:contact@loopwar.dev" className="btn btn-lg btn-ghost-light">Email us</a>
                </div>
              </div>
              <div className="space-y-3 text-sm md:justify-self-end">
                <div>
                  <div style={{ color: "rgba(255,255,255,.7)" }}>Email</div>
                  <a className="font-semibold hover:underline" href="mailto:contact@loopwar.dev">contact@loopwar.dev</a>
                </div>
                <div>
                  <div style={{ color: "rgba(255,255,255,.7)" }}>Call</div>
                  <a className="font-semibold hover:underline" href="tel:+916377362603">+91 63773 62603</a>
                  <div style={{ color: "rgba(255,255,255,.7)" }} className="text-xs">Mon–Sat, 9 AM – 7 PM IST</div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
