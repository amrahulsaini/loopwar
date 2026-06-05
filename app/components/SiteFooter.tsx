import { clientProjects, ventures } from "../data/projects";

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="surface-dark">
      <div className="container-page section-sm" style={{ paddingBlock: "3.5rem" }}>
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2.5">
              <img src="/favicon.svg" alt="LoopWar" width={38} height={38} style={{ borderRadius: "11px" }} />
              <span style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "1.2rem", color: "#fff" }}>LoopWar</span>
            </div>
            <p style={{ color: "#9a9ca8", maxWidth: "30ch" }}>
              A product & engineering studio building high‑performing websites, apps and AI products — plus our own ventures.
            </p>
            <div className="flex flex-col gap-1 text-sm" style={{ color: "#c9cad3" }}>
              <a href="mailto:contact@loopwar.dev" className="hover:text-white transition-colors">contact@loopwar.dev</a>
              <a href="tel:+916377362603" className="hover:text-white transition-colors">+91 63773 62603</a>
            </div>
          </div>

          <div>
            <h4 style={{ color: "#fff", fontSize: ".95rem", marginBottom: ".9rem" }}>Company</h4>
            <ul className="space-y-2 text-sm" style={{ color: "#9a9ca8" }}>
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="/#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="/portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: "#fff", fontSize: ".95rem", marginBottom: ".9rem" }}>Our ventures</h4>
            <ul className="space-y-2 text-sm" style={{ color: "#9a9ca8" }}>
              {ventures.map((v) => (
                <li key={v.domain}>
                  <a href={v.url} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">{v.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ color: "#fff", fontSize: ".95rem", marginBottom: ".9rem" }}>Selected work</h4>
            <ul className="space-y-2 text-sm" style={{ color: "#9a9ca8" }}>
              {clientProjects.map((p) => (
                <li key={p.domain}>
                  <a href={p.url} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">{p.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm"
             style={{ borderTop: "1px solid rgba(255,255,255,.1)", color: "#8a8b94" }}>
          <span>© {year} LoopWar. All rights reserved.</span>
          <div className="flex gap-5">
            <a href="/terms" className="hover:text-white transition-colors">Terms</a>
            <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
            <a href="/refund" className="hover:text-white transition-colors">Refund</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
