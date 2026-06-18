import Reveal from "./components/Reveal";
import Counter from "./components/Counter";
import Magnetic from "./components/Magnetic";
import Parallax from "./components/Parallax";
import ProjectShowcase from "./components/ProjectShowcase";
import { clientProjects, ventures } from "./data/projects";

const Arrow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
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

const stats: [number, string, string][] = [
  [7, "+", "Products shipped"],
  [3, "", "In-house ventures"],
  [4, "+", "Industries served"],
  [100, "%", "Code you own"],
];

const stacks: [string, string, string[]][] = [
  ["01", "Languages", ["JavaScript", "TypeScript", "PHP", "C#", "Kotlin", "Dart"]],
  ["02", "Frameworks", ["React", "Angular", "Express", "Django", "ASP.NET Core", "Next.js", "Flutter"]],
  ["03", "Windows & Desktop", ["WPF", "WinUI 3", ".NET MAUI", "Win32"]],
];

const testimonials: [string, string, string][] = [
  ["They turned our idea into a real product faster than we thought possible — and it just works.", "Founder", "CaseBuddy"],
  ["Clean, thoughtful engineering. Communication was clear the whole way through.", "Owner", "Tirupati Medix"],
  ["LOOPWAR built and shipped our platform end-to-end. Genuinely a partner, not a vendor.", "Director", "Carry Pack Logistics"],
];

const faqs: [string, string][] = [
  ["How long does a typical project take?", "Most websites take 2–5 weeks; apps and AI products run 6–12 weeks depending on scope. We share a clear timeline with milestones before we start."],
  ["How do you charge?", "Either fixed-price per project or a monthly retainer for ongoing work. We agree everything up front — no surprises."],
  ["Do we own the code?", "100%. Everything we build is handed over to you — source code, designs and documentation."],
  ["Do you work with early-stage startups?", "Absolutely — we build our own ventures too, so we love MVPs and moving fast with founders."],
  ["Can you maintain it after launch?", "Yes. We offer ongoing support, monitoring and iteration so your product keeps performing."],
];

export default function Home() {
  const featured = clientProjects[0];
  return (
    <div>
      {/* ============ HERO (asymmetric, left-led) ============ */}
      <section className="section" style={{ paddingTop: "clamp(2rem,5vw,4rem)", paddingBottom: "clamp(2rem,4vw,3rem)" }}>
        <div className="container">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            {/* copy */}
            <div>
              <span className="eyebrow animate-fade-up">Product &amp; engineering studio ✦</span>
              <h1 className="display animate-fade-up" style={{ ["--delay" as never]: "70ms", marginTop: "1.4rem" }}>
                We build products that{" "}
                <span style={{ textDecoration: "underline", textDecorationColor: "var(--accent)", textDecorationThickness: 6, textUnderlineOffset: 8 }}>earn their keep.</span>
              </h1>
              <p className="lead animate-fade-up" style={{ ["--delay" as never]: "150ms", marginTop: "1.4rem", maxWidth: "46ch" }}>
                A small studio that designs, builds and ships websites, apps and AI products — for clients, and as our own ventures.
              </p>
              <div className="flex flex-wrap items-center gap-3 animate-fade-up" style={{ ["--delay" as never]: "230ms", marginTop: "2rem" }}>
                <Magnetic><a href="/contact" className="btn btn-accent">Start a project <Arrow /></a></Magnetic>
                <Magnetic><a href="/portfolio" className="btn btn-outline">See our work</a></Magnetic>
              </div>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 animate-fade-up" style={{ ["--delay" as never]: "310ms", marginTop: "2.2rem", color: "var(--muted)", fontSize: "1.02rem" }}>
                <span>★★★★★ trusted by founders</span>
                <span>7+ products shipped</span>
                <span>100% code you own</span>
              </div>
            </div>

            {/* visual */}
            <Reveal from="right" className="hero-visual">
              <div className="frame" style={{ ["--accent" as never]: featured.accent, transform: "rotate(2deg)" }}>
                <div className="frame-bar"><i /><i /><i /><span className="frame-url">{featured.domain}</span></div>
                <div className="frame-view"><img src={featured.image} alt={`${featured.name} — ${featured.category}`} /></div>
              </div>
              <span className="hero-badge float-y">
                <span className="logo-tile" style={{ width: 34, height: 34, borderRadius: 9 }}>
                  <img src="/loopwar-shortlogoforfaviconsadnicons.png" alt="" />
                </span>
                Shipped by LOOPWAR
              </span>
            </Reveal>
          </div>
        </div>
      </section>

      {/* single big LOOPWAR wordmark */}
      <div className="container" aria-hidden style={{ overflow: "hidden", paddingBlock: "clamp(1.5rem,4vw,3rem)" }}>
        <Reveal from="zoom"><Parallax speed={40}><div className="bigword shimmer">LOOPWAR</div></Parallax></Reveal>
      </div>

      {/* ============ STATS ============ */}
      <section className="container" style={{ paddingBottom: "clamp(2rem,5vw,3.5rem)" }}>
        <div className="card" style={{ padding: "clamp(1.5rem,3vw,2.5rem)" }}>
          <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: "1.5rem" }}>
            {stats.map(([n, suf, label], i) => (
              <Reveal key={label} delay={i * 70} style={{ textAlign: "center" }}>
                <Counter className="stat-num" value={n} suffix={suf} />
                <div className="muted" style={{ marginTop: ".3rem", fontSize: "1.05rem" }}>{label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WORK (slideshow) ============ */}
      <section id="work" className="section">
        <div className="container">
          <Reveal from="left" className="flex flex-wrap items-end justify-between" style={{ gap: "1.25rem", marginBottom: "2.5rem" }}>
            <div>
              <span className="eyebrow">Selected work</span>
              <h2 className="section-title" style={{ marginTop: "1rem" }}>Things we&apos;ve made for clients.</h2>
            </div>
            <Magnetic><a href="/portfolio" className="btn btn-outline btn-sm">All work <Arrow /></a></Magnetic>
          </Reveal>
          <Reveal from="none"><ProjectShowcase items={clientProjects} /></Reveal>
        </div>
      </section>

      {/* ============ VENTURES (slideshow) ============ */}
      <section id="ventures" className="section block" style={{ borderBlock: "2px solid var(--border)" }}>
        <div className="container">
          <Reveal from="left" style={{ marginBottom: "2.5rem", maxWidth: "44ch" }}>
            <span className="eyebrow">Built by us</span>
            <h2 className="section-title" style={{ marginTop: "1rem" }}>Our own little ventures.</h2>
          </Reveal>
          <Reveal from="none"><ProjectShowcase items={ventures} autoMs={7000} /></Reveal>
        </div>
      </section>

      {/* ============ ABOUT ============ */}
      <section id="about" className="section">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] items-center">
            <Reveal from="left">
              <div className="card" style={{ padding: 14 }}>
                <div style={{ borderRadius: "var(--radius-sm)", overflow: "hidden", aspectRatio: "1/1", background: "var(--white)", display: "grid", placeItems: "center" }}>
                  <img src="/loopwar-fulllogo.png" alt="LOOPWAR" style={{ width: "70%", height: "70%", objectFit: "contain" }} />
                </div>
              </div>
            </Reveal>
            <Reveal from="right">
              <span className="eyebrow">Who we are</span>
              <h2 className="section-title" style={{ marginTop: "1rem" }}>A small studio with a builder&apos;s heart.</h2>
              <p className="muted" style={{ marginTop: "1rem", fontSize: "1.15rem" }}>
                We&apos;re a tight team of designers and engineers who love shipping. We&apos;ve built e-commerce stores,
                healthcare and logistics platforms for clients — and we run our own products like Xirevoa, MyAIDiary and CRMRS.
              </p>
              <p className="muted" style={{ marginTop: "1rem", fontSize: "1.15rem" }}>
                Because we build our own ventures, we think like owners: fast, pragmatic, and focused on what actually moves the needle.
              </p>
              <Magnetic style={{ marginTop: "1.6rem" }}><a href="/contact" className="btn btn-accent">Work with us <Arrow /></a></Magnetic>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section id="services" className="section block" style={{ borderBlock: "2px solid var(--border)" }}>
        <div className="container">
          <Reveal from="left" style={{ marginBottom: "2.5rem", maxWidth: "40ch" }}>
            <span className="eyebrow">What we do</span>
            <h2 className="section-title" style={{ marginTop: "1rem" }}>Everything to launch &amp; grow.</h2>
          </Reveal>
          <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))" }}>
            {services.map(([t, d], i) => (
              <Reveal key={t} delay={i * 50} from="zoom">
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

      {/* ============ TOOLKIT (categorised) ============ */}
      <section className="section">
        <div className="container">
          <Reveal from="left" style={{ marginBottom: "2.5rem", maxWidth: "46ch" }}>
            <span className="eyebrow">Our toolkit</span>
            <h2 className="section-title" style={{ marginTop: "1rem" }}>The stacks we build on.</h2>
            <p className="muted" style={{ marginTop: "1rem", fontSize: "1.1rem" }}>From web and mobile to native Windows apps — we pick the right tool for the job.</p>
          </Reveal>
          <div className="toolkit">
            {stacks.map(([num, title, items], i) => (
              <Reveal key={title} delay={i * 90} from="up">
                <div className="toolkit-col">
                  <div className="toolkit-head">
                    <span className="num">{num}</span>
                    <h3>{title}</h3>
                  </div>
                  <div className="toolkit-tags">
                    {items.map((t) => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PROCESS ============ */}
      <section id="process" className="section block" style={{ borderBlock: "2px solid var(--border)" }}>
        <div className="container">
          <Reveal from="left" style={{ marginBottom: "2.5rem", maxWidth: "40ch" }}>
            <span className="eyebrow">How we work</span>
            <h2 className="section-title" style={{ marginTop: "1rem" }}>A simple, friendly process.</h2>
          </Reveal>
          <div className="grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
            {steps.map(([t, d], i) => (
              <Reveal key={t} delay={i * 70} from="up">
                <div className="flex items-center gap-3"><span className="step-num">{i + 1}</span><h3 style={{ fontSize: "1.5rem" }}>{t}</h3></div>
                <p className="muted" style={{ marginTop: "1rem", fontSize: "1.02rem" }}>{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="section">
        <div className="container">
          <Reveal from="left" style={{ marginBottom: "2.5rem", maxWidth: "40ch" }}>
            <span className="eyebrow">Kind words</span>
            <h2 className="section-title" style={{ marginTop: "1rem" }}>What clients say.</h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map(([q, who, where], i) => (
              <Reveal key={where} delay={i * 70} from="zoom">
                <figure className="quote" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                  <span className="mark" aria-hidden>&ldquo;</span>
                  <blockquote style={{ fontSize: "1.2rem", marginTop: ".4rem", flex: 1 }}>{q}</blockquote>
                  <figcaption className="muted" style={{ marginTop: "1.2rem", fontSize: "1rem" }}>
                    <strong style={{ color: "var(--fg)" }}>{who}</strong> · {where}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="section block" style={{ borderBlock: "2px solid var(--border)" }}>
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal from="left">
              <span className="eyebrow">Good to know</span>
              <h2 className="section-title" style={{ marginTop: "1rem" }}>Frequently asked.</h2>
              <p className="muted" style={{ marginTop: "1rem" }}>Got another question? <a href="/contact" style={{ textDecoration: "underline" }}>Just ask</a>.</p>
            </Reveal>
            <Reveal from="right" className="faq">
              {faqs.map(([q, a]) => (
                <details key={q}>
                  <summary>{q}</summary>
                  <div className="faq-body">{a}</div>
                </details>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="section">
        <div className="container">
          <Reveal from="zoom">
            <div className="card band-dark" style={{ padding: "clamp(2.25rem,5vw,4rem)", borderColor: "var(--fg)" }}>
              <div className="grid gap-8 items-center lg:grid-cols-[1.3fr_0.7fr]">
                <h2 className="display" style={{ fontSize: "clamp(2.1rem,5vw,3.6rem)", color: "var(--card)", maxWidth: "16ch" }}>
                  Got something in mind? Let&apos;s build it.
                </h2>
                <div className="flex flex-wrap items-center gap-3 lg:justify-end">
                  <Magnetic><a href="/contact" className="btn">Start a project <Arrow /></a></Magnetic>
                  <Magnetic><a href="mailto:rahul@loopwar.dev" className="btn btn-outline">rahul@loopwar.dev</a></Magnetic>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* big LOOPWAR wordmark at the bottom */}
      <div className="container" aria-hidden style={{ overflow: "hidden", paddingBottom: "clamp(2rem,5vw,4rem)" }}>
        <Reveal from="zoom"><Parallax speed={-40}><div className="bigword outline">LOOPWAR</div></Parallax></Reveal>
      </div>
    </div>
  );
}
