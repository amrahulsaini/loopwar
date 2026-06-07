import Reveal from "./components/Reveal";
import Counter from "./components/Counter";
import Shot from "./components/Shot";
import TextMarquee from "./components/TextMarquee";
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
    <path d="M7 17L17 7M17 7H8M17 7v9" />
  </svg>
);

const SpinBadge = () => (
  <div className="spin-badge" aria-hidden>
    <div className="ring">
      <svg viewBox="0 0 100 100" width="96" height="96">
        <defs><path id="circ" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" /></defs>
        <text><textPath href="#circ">LOOPWAR • DESIGN • BUILD • SHIP • </textPath></text>
      </svg>
    </div>
    <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", color: "var(--accent)" }}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H8M17 7v9" /></svg>
    </div>
  </div>
);

const showcase = [...clientProjects, ...ventures];

export default function Home() {
  return (
    <div>
      {/* ============ HERO ============ */}
      <section className="container-page" style={{ paddingTop: "clamp(7rem, 12vw, 10rem)", paddingBottom: "clamp(2rem, 5vw, 4rem)" }}>
        <div className="flex items-center gap-3 animate-fade-up">
          <span className="eyebrow"><span className="dot" /> Available for new projects — 2026</span>
        </div>

        <h1 className="giant mt-8" style={{ fontSize: "clamp(3rem, 11vw, 10rem)" }}>
          <span className="line-clip"><span style={{ ['--delay' as any]: '60ms' }}>We build</span></span>
          <span className="line-clip"><span style={{ ['--delay' as any]: '160ms' }}>products that</span></span>
          <span className="line-clip"><span style={{ ['--delay' as any]: '260ms' }} className="accent">earn their keep.</span></span>
        </h1>

        <div className="grid lg:grid-cols-12 gap-8 items-end mt-12">
          <div className="lg:col-span-7">
            <div className="rule mb-7" />
            <div className="grid sm:grid-cols-[1fr_auto] gap-6 items-end">
              <p className="lead animate-fade-up" style={{ ['--delay' as any]: '360ms', maxWidth: "44ch" }}>
                A senior product &amp; engineering studio. We design, build and ship
                websites, apps and AI products — for clients, and as our own ventures.
              </p>
              <div className="flex flex-wrap items-center gap-3 animate-fade-up" style={{ ['--delay' as any]: '440ms' }}>
                <a className="btn btn-lg" href="/contact">Start a project</a>
                <a className="btn secondary btn-lg" href="/portfolio">See our work <Arrow /></a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative animate-fade-up" style={{ ['--delay' as any]: '300ms', minHeight: "clamp(300px, 34vw, 400px)" }}>
            <div className="softglow" style={{ width: "70%", height: "70%", top: "6%", right: "2%" }} />
            <div className="relative h-full" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div className="tiltA" style={{ width: "86%", position: "relative", zIndex: 2 }}>
                <Shot src="/shots/xirevoa.png" alt="Xirevoa AI" tag="xirevoa.com" ratio="16 / 11" priority />
              </div>
              <div className="tiltB" style={{ width: "52%", position: "absolute", left: "-4%", bottom: "-8%", zIndex: 3 }}>
                <Shot src="/shots/tirupatimedix.png" alt="Tirupati Medix" tag="tirupatimedix.com" ratio="16 / 11" />
              </div>
              <div className="float-chip floaty" style={{ top: "-2%", right: "-2%" }}>
                <span className="ic">↗</span> 7+ products live
              </div>
              <div style={{ position: "absolute", bottom: "-10%", right: "2%", zIndex: 4 }}>
                <SpinBadge />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ BIG TEXT MARQUEE ============ */}
      <section className="py-8 md:py-12" style={{ borderBlock: "1px solid var(--line)" }}>
        <TextMarquee
          className="marquee-strip-word"
          items={["Web apps", "AI products", "E‑commerce", "Brand & UI", "Cloud & DevOps", "Ventures"]}
        />
      </section>

      {/* ============ SHOWCASE MARQUEE ============ */}
      <section className="marquee" style={{ paddingBlock: "clamp(2.5rem, 5vw, 4rem)" }}>
        <div className="marquee-track">
          {[...showcase, ...showcase].map((p, i) => (
            <a key={i} href={p.url} target="_blank" rel="noreferrer" className="marquee-item">
              <Shot src={p.image} alt={p.name} tag={p.domain} ratio="16 / 10" />
            </a>
          ))}
        </div>
      </section>

      {/* ============ STATS ============ */}
      <section className="container-page section-sm">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-8" style={{ borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", paddingBlock: "clamp(2rem,4vw,3rem)" }}>
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 70}>
              <Counter className="stat-value" value={s.value} suffix={s.suffix} />
              <div className="label mt-3">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section id="services" className="container-page section">
        <Reveal className="grid gap-6 md:grid-cols-12 mb-12 items-end">
          <div className="md:col-span-7">
            <span className="eyebrow">[ 01 ] — What we do</span>
            <h2 className="section-title mt-6">Everything you need<br />to launch &amp; grow.</h2>
          </div>
          <p className="md:col-span-4 md:col-start-9 section-subtitle">
            One senior team, end to end — from a first MVP to a product at scale.
          </p>
        </Reveal>

        <div className="bento">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 60} className={s.span}>
              <div className="tile h-full flex flex-col">
                <div className="flex items-start justify-between">
                  <span className="idx" style={{ fontSize: ".95rem" }}>{String(i + 1).padStart(2, "0")}</span>
                  <span style={{ color: "var(--faint)" }}><Arrow /></span>
                </div>
                <h3 className="mt-6" style={{ fontSize: "1.55rem" }}>{s.title}</h3>
                <p className="mt-2" style={{ color: "var(--muted)" }}>{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ SELECTED WORK ============ */}
      <section id="work" className="container-page section">
        <Reveal className="flex flex-wrap items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="eyebrow">[ 02 ] — Selected client work</span>
            <h2 className="section-title mt-6">Real products,<br />shipped for real businesses.</h2>
          </div>
          <a href="/portfolio" className="link-arrow">All work <Arrow /></a>
        </Reveal>

        <div className="space-y-24 md:space-y-32">
          {clientProjects.map((p, i) => {
            const flip = i % 2 === 1;
            return (
              <Reveal key={p.domain}>
                <div className="grid gap-8 md:gap-16 md:grid-cols-2 items-center">
                  <a href={p.url} target="_blank" rel="noreferrer" className={flip ? "md:order-2" : ""}>
                    <Shot src={p.image} alt={`${p.name} — ${p.category}`} tag={p.domain} ratio="16 / 11" pan />
                  </a>
                  <div className={flip ? "md:order-1" : ""}>
                    <div className="flex items-center gap-4">
                      <span className="idx" style={{ fontSize: "1.1rem" }}>{String(i + 1).padStart(2, "0")}</span>
                      <span className="label">{p.category}</span>
                    </div>
                    <h3 className="mt-4" style={{ fontSize: "clamp(2.1rem, 4.2vw, 3.4rem)", letterSpacing: "-0.04em" }}>{p.name}</h3>
                    <p className="mt-5" style={{ color: "var(--muted)", maxWidth: "46ch" }}>{p.description}</p>
                    <div className="flex flex-wrap gap-2 mt-7">
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

      {/* ============ MID TEXT MARQUEE ============ */}
      <section className="py-6 md:py-10" style={{ borderBlock: "1px solid var(--line)" }}>
        <TextMarquee
          reverse
          className="marquee-strip-word outline-text"
          items={["Design", "Build", "Ship", "Scale"]}
        />
      </section>

      {/* ============ VENTURES ============ */}
      <section id="ventures" className="container-page section">
        <Reveal className="grid gap-6 md:grid-cols-12 mb-14 items-end">
          <div className="md:col-span-8">
            <span className="eyebrow">[ 03 ] — Built &amp; owned by us</span>
            <h2 className="section-title mt-6">Our ventures.</h2>
          </div>
          <p className="md:col-span-4 section-subtitle">
            We don&apos;t only build for clients — we build, own and run our own products.
          </p>
        </Reveal>

        <div className="grid gap-7 md:grid-cols-3">
          {ventures.map((v, i) => (
            <Reveal key={v.domain} delay={i * 80}>
              <a href={v.url} target="_blank" rel="noreferrer" className="card hover-lift flex flex-col h-full" style={{ padding: "1rem" }}>
                <Shot src={v.image} alt={`${v.name} — ${v.category}`} ratio="16 / 10" pan />
                <div className="flex flex-col flex-1 px-3 pt-6 pb-2">
                  <div className="flex items-center justify-between">
                    <span className="label" style={{ color: "var(--accent)" }}>{v.category}</span>
                    <span className="chip chip-accent">{v.role}</span>
                  </div>
                  <h3 className="mt-4 text-2xl">{v.name}</h3>
                  <p className="mt-2 flex-1" style={{ color: "var(--muted)" }}>{v.description}</p>
                  <span className="link-arrow mt-6">Visit {v.name} <Arrow /></span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ PROCESS ============ */}
      <section className="container-page section-sm" style={{ paddingBottom: "clamp(3rem,6vw,5rem)" }}>
        <Reveal className="mb-14 max-w-2xl">
          <span className="eyebrow">[ 04 ] — How we work</span>
          <h2 className="section-title mt-6">A simple,<br />transparent process.</h2>
          <p className="section-subtitle mt-3">Clear milestones, frequent demos, no surprises.</p>
        </Reveal>
        <div className="grid gap-px md:grid-cols-2 lg:grid-cols-4" style={{ background: "var(--line)", border: "1px solid var(--line)", borderRadius: "var(--radius-lg)", overflow: "hidden" }}>
          {steps.map(([title, body], i) => (
            <Reveal key={title} delay={i * 70} style={{ background: "var(--bg)" }} className="p-7">
              <div className="flex items-center gap-3">
                <span className="step-no">{i + 1}</span>
                <h3 className="text-xl">{title}</h3>
              </div>
              <p className="mt-5" style={{ color: "var(--muted)" }}>{body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ CONTACT CTA ============ */}
      <section className="container-page" style={{ paddingBottom: "clamp(4rem,8vw,7rem)" }}>
        <Reveal>
          <div style={{ background: "var(--card)", border: "1px solid var(--line)", borderRadius: "var(--radius-xl)", padding: "clamp(2.4rem, 5vw, 5rem)", position: "relative", overflow: "hidden" }}>
            <div className="softglow" style={{ width: "50%", height: "120%", top: "-20%", right: "-10%" }} />
            <div className="grid gap-12 md:grid-cols-12 items-end" style={{ position: "relative", zIndex: 1 }}>
              <div className="md:col-span-8">
                <span className="eyebrow"><span className="dot" /> Let&apos;s talk</span>
                <h2 className="mt-6" style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)", lineHeight: ".95", letterSpacing: "-0.05em" }}>
                  Have something in mind?<br />Let&apos;s build it <span className="accent">properly.</span>
                </h2>
                <div className="flex flex-wrap items-center gap-3 mt-9">
                  <a href="/contact" className="btn btn-lg">Start a project</a>
                  <a href="mailto:contact@loopwar.dev" className="btn secondary btn-lg">contact@loopwar.dev</a>
                </div>
              </div>
              <div className="md:col-span-4 md:text-right space-y-5">
                <div>
                  <div className="label">Call</div>
                  <a href="tel:+916377362603" style={{ color: "var(--text)", fontSize: "1.15rem", fontWeight: 600 }}>+91 63773 62603</a>
                  <div className="text-sm mt-1" style={{ color: "var(--muted)" }}>Mon–Sat, 9 AM – 7 PM IST</div>
                </div>
                <div>
                  <div className="label">Email</div>
                  <a href="mailto:contact@loopwar.dev" style={{ color: "var(--text)" }}>contact@loopwar.dev</a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
