import { clientProjects, ventures } from "../data/projects";

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="surface-dark">
      <div className="container-page" style={{ paddingTop: "3.5rem", paddingBottom: "1.5rem" }}>
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2.5">
              <img src="/favicon.svg" alt="LoopWar" width={36} height={36} style={{ borderRadius: "10px" }} />
              <span style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1.2rem", color: "var(--text)", letterSpacing: "-.04em" }}>LoopWar</span>
            </div>
            <p style={{ color: "var(--muted)", maxWidth: "30ch" }}>
              A product &amp; engineering studio building high‑performing websites, apps and AI products — plus our own ventures.
            </p>
            <div className="flex flex-col gap-1 text-sm">
              <a href="mailto:contact@loopwar.dev" className="transition-colors" style={{ color: "var(--text)" }}>contact@loopwar.dev</a>
              <a href="tel:+916377362603" className="transition-colors" style={{ color: "var(--text)" }}>+91 63773 62603</a>
            </div>
          </div>

          <div>
            <h4 className="label" style={{ marginBottom: ".9rem" }}>Company</h4>
            <ul className="space-y-2 text-sm" style={{ color: "var(--muted)" }}>
              <li><a href="/" className="hover:text-[var(--accent)] transition-colors">Home</a></li>
              <li><a href="/#services" className="hover:text-[var(--accent)] transition-colors">Services</a></li>
              <li><a href="/portfolio" className="hover:text-[var(--accent)] transition-colors">Portfolio</a></li>
              <li><a href="/contact" className="hover:text-[var(--accent)] transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="label" style={{ marginBottom: ".9rem" }}>Our ventures</h4>
            <ul className="space-y-2 text-sm" style={{ color: "var(--muted)" }}>
              {ventures.map((v) => (
                <li key={v.domain}>
                  <a href={v.url} target="_blank" rel="noreferrer" className="hover:text-[var(--accent)] transition-colors">{v.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="label" style={{ marginBottom: ".9rem" }}>Selected work</h4>
            <ul className="space-y-2 text-sm" style={{ color: "var(--muted)" }}>
              {clientProjects.map((p) => (
                <li key={p.domain}>
                  <a href={p.url} target="_blank" rel="noreferrer" className="hover:text-[var(--accent)] transition-colors">{p.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Giant wordmark */}
        <div className="text-marquee mt-14" aria-hidden>
          <div className="footer-giant">LOOPWAR</div>
        </div>

        <div className="mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm"
             style={{ borderTop: "1px solid var(--line)", color: "var(--faint)" }}>
          <span>© {year} LoopWar. All rights reserved.</span>
          <div className="flex gap-5">
            <a href="/terms" className="hover:text-[var(--accent)] transition-colors">Terms</a>
            <a href="/privacy" className="hover:text-[var(--accent)] transition-colors">Privacy</a>
            <a href="/refund" className="hover:text-[var(--accent)] transition-colors">Refund</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
