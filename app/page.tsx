import Reveal from "./components/Reveal";
import { clientProjects, ventures } from "./data/projects";

const services = [
  { title: "Web & app development", body: "Fast, scalable websites and web apps built on modern stacks — Next.js, React and Node — with clean code you own." },
  { title: "AI & automation", body: "Assistants, generation, insights and automations that remove busywork and put intelligence where it earns its keep." },
  { title: "E‑commerce", body: "Conversion‑focused stores with secure payments, catalog and order management, and a checkout tuned to sell." },
  { title: "UI/UX & brand", body: "Research‑backed flows, design systems and pixel‑clean execution that make products feel effortless." },
  { title: "Cloud & DevOps", body: "Self‑hosted infrastructure, CI/CD, containers and SSL — we ship to the cloud and keep it running." },
  { title: "Product & maintenance", body: "From MVP to scale: ongoing optimisation, monitoring and iteration to keep products performing." },
];

const stats = [
  { value: "7+", label: "Products shipped" },
  { value: "3", label: "In‑house ventures" },
  { value: "4+", label: "Industries served" },
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

export default function Home() {
  return (
    <div>
      {/* ============ HERO ============ */}
      <section className="container-page" style={{ paddingBlock: "clamp(4rem, 9vw, 8rem)" }}>
        <div className="max-w-5xl">
          <span className="eyebrow animate-fade-up">
            <span style={{ display: "inline-flex", alignItems: "center", gap: ".45rem" }}>
              <span style={{ width: 7, height: 7, borderRadius: 99, background: "#1f9d55", display: "inline-block" }} />
              Available for new projects
            </span>
          </span>

          <h1 className="animate-fade-up mt-6" style={{ ['--delay' as any]: '80ms', fontSize: "clamp(2.6rem, 7.5vw, 6rem)", lineHeight: ".98", letterSpacing: "-0.045em" }}>
            We design, build and ship digital products that earn their keep.
          </h1>

          <p className="lead animate-fade-up mt-7" style={{ ['--delay' as any]: '160ms', maxWidth: "58ch", color: "var(--text)" }}>
            LoopWar is a small, senior product & engineering studio. We build high‑performing
            websites, apps and AI products for clients — and our own ventures, Xirevoa, MyAIDiary and CRMRS.
          </p>

          <div className="flex flex-wrap items-center gap-6 animate-fade-up mt-9" style={{ ['--delay' as any]: '240ms' }}>
            <a className="btn btn-lg" href="/contact">Start a project</a>
            <a className="link-arrow" href="/portfolio">View our work <Arrow /></a>
          </div>
        </div>

        {/* Inline stats */}
        <div className="mt-16 pt-8" style={{ borderTop: "1px solid var(--line)" }}>
          <div className="flex flex-wrap gap-x-14 gap-y-6">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="stat-value">{s.value}</div>
                <div className="label mt-1">{s.label}</div>
              </div>
            ))}
            <div className="ml-auto self-end label" style={{ maxWidth: "26ch", textTransform: "none", letterSpacing: 0, fontSize: ".95rem", color: "var(--muted)" }}>
              Based in India · working with founders &amp; teams worldwide.
            </div>
          </div>
        </div>
      </section>

      {/* ============ QUIET CLIENT LINE ============ */}
      <section className="container-page section-sm" style={{ paddingBlock: "1.5rem" }}>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 label" style={{ borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", paddingBlock: "1.25rem" }}>
          <span style={{ color: "var(--faint)" }}>Selected:</span>
          {[...clientProjects, ...ventures].map((p, i) => (
            <span key={p.domain} className="inline-flex items-center gap-3" style={{ color: "var(--text)" }}>
              {i > 0 && <span style={{ color: "var(--faint)" }}>·</span>}
              {p.name}
            </span>
          ))}
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section id="services" className="container-page section">
        <Reveal className="grid gap-6 md:grid-cols-12 mb-10">
          <div className="md:col-span-5">
            <span className="eyebrow">What we do</span>
            <h2 className="section-title mt-4">Everything you need to launch and grow.</h2>
          </div>
          <p className="md:col-span-6 md:col-start-7 self-end section-subtitle">
            One senior team, end to end — from a first MVP to a product at scale.
          </p>
        </Reveal>

        <div>
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 50}>
              <div className="work-row grid gap-3 md:grid-cols-12 items-baseline" style={{ paddingBlock: "1.6rem" }}>
                <div className="md:col-span-1 idx" style={{ fontSize: "1rem" }}>{String(i + 1).padStart(2, "0")}</div>
                <h3 className="md:col-span-4 text-2xl" style={{ fontSize: "1.5rem" }}>{s.title}</h3>
                <p className="md:col-span-6 md:col-start-7" style={{ color: "var(--text)" }}>{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ SELECTED WORK ============ */}
      <section id="work" style={{ background: "var(--paper-2)" }}>
        <div className="container-page section">
          <Reveal className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <span className="eyebrow">Selected client work</span>
              <h2 className="section-title mt-4">Real products, shipped for real businesses.</h2>
            </div>
            <a href="/portfolio" className="link-arrow">All work <Arrow /></a>
          </Reveal>

          <div className="space-y-20 md:space-y-28">
            {clientProjects.map((p, i) => {
              const flip = i % 2 === 1;
              return (
                <Reveal key={p.domain}>
                  <div className="grid gap-8 md:gap-12 md:grid-cols-2 items-center">
                    <a href={p.url} target="_blank" rel="noreferrer"
                       className={`framed block ${flip ? "md:order-2" : ""}`} style={{ aspectRatio: "16 / 11" }}>
                      <img src={p.image} alt={`${p.name} — ${p.category}`} loading="lazy"
                           style={{ width: "100%", height: "100%", objectFit: p.contain ? "contain" : "cover", padding: p.contain ? "2rem" : 0, background: "#fff" }} />
                    </a>
                    <div className={flip ? "md:order-1" : ""}>
                      <div className="flex items-center gap-4">
                        <span className="idx" style={{ fontSize: "1.05rem" }}>{String(i + 1).padStart(2, "0")}</span>
                        <span className="label">{p.category}</span>
                      </div>
                      <h3 className="mt-3" style={{ fontSize: "clamp(1.8rem, 3.4vw, 2.6rem)", letterSpacing: "-0.035em" }}>{p.name}</h3>
                      <p className="mt-4" style={{ color: "var(--text)", maxWidth: "46ch" }}>{p.description}</p>
                      <div className="flex flex-wrap gap-x-2 gap-y-2 mt-6 label" style={{ textTransform: "none", letterSpacing: 0, color: "var(--muted)" }}>
                        {p.features.map((f, k) => (
                          <span key={f} className="inline-flex items-center gap-2">
                            {k > 0 && <span style={{ color: "var(--faint)" }}>·</span>}{f}
                          </span>
                        ))}
                      </div>
                      <a href={p.url} target="_blank" rel="noreferrer" className="link-arrow mt-7">
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
            <h2 className="section-title mt-4">Our ventures.</h2>
          </div>
          <p className="md:col-span-5 self-end section-subtitle">
            We don&apos;t only build for clients — we build, own and run our own products.
          </p>
        </Reveal>

        <div className="grid gap-7 md:grid-cols-3">
          {ventures.map((v, i) => (
            <Reveal key={v.domain} delay={i * 70}>
              <a href={v.url} target="_blank" rel="noreferrer" className="project-card flex flex-col h-full">
                <div className={`project-media ${v.contain ? "project-media-contain" : ""}`} style={{ aspectRatio: "16 / 11" }}>
                  <img src={v.image} alt={`${v.name} — ${v.category}`} loading="lazy" />
                </div>
                <div className="p-6 flex flex-col flex-1" style={{ borderTop: "1px solid var(--line)" }}>
                  <div className="flex items-center justify-between">
                    <span className="label">{v.category}</span>
                    <span className="chip">{v.role}</span>
                  </div>
                  <h3 className="mt-3 text-2xl">{v.name}</h3>
                  <p className="mt-2 flex-1" style={{ color: "var(--text)" }}>{v.description}</p>
                  <span className="link-arrow mt-5">Visit {v.name} <Arrow /></span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ PROCESS ============ */}
      <section style={{ background: "var(--paper-2)" }}>
        <div className="container-page section">
          <Reveal className="mb-12 max-w-2xl">
            <span className="eyebrow">How we work</span>
            <h2 className="section-title mt-4">A simple, transparent process.</h2>
            <p className="section-subtitle mt-2">Clear milestones, frequent demos, no surprises.</p>
          </Reveal>
          <div className="grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
            {steps.map(([title, body], i) => (
              <Reveal key={title} delay={i * 70}>
                <div className="flex items-center gap-3">
                  <span className="step-no">{i + 1}</span>
                  <h3 className="text-xl">{title}</h3>
                </div>
                <p className="mt-4" style={{ color: "var(--text)" }}>{body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CONTACT CTA ============ */}
      <section className="container-page section">
        <Reveal className="grid gap-10 md:grid-cols-12 items-end">
          <div className="md:col-span-8">
            <span className="eyebrow">Let&apos;s talk</span>
            <h2 className="section-title mt-4" style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}>
              Have something in mind?<br />Let&apos;s build it properly.
            </h2>
            <div className="flex flex-wrap items-center gap-6 mt-8">
              <a href="/contact" className="btn btn-lg">Start a project</a>
              <a href="mailto:contact@loopwar.dev" className="link-arrow">contact@loopwar.dev <Arrow /></a>
            </div>
          </div>
          <div className="md:col-span-4 md:text-right space-y-4 label" style={{ textTransform: "none", letterSpacing: 0, fontSize: "1rem", color: "var(--text)" }}>
            <div>
              <div className="label">Email</div>
              <a href="mailto:contact@loopwar.dev" className="hover:text-black">contact@loopwar.dev</a>
            </div>
            <div>
              <div className="label">Call</div>
              <a href="tel:+916377362603" className="hover:text-black">+91 63773 62603</a>
              <div style={{ color: "var(--muted)" }} className="text-sm">Mon–Sat, 9 AM – 7 PM IST</div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
