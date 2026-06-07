export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ borderTop: "1px solid var(--border)", background: "var(--bg-subtle)" }}>
      <div className="container" style={{ paddingBlock: "3.5rem" }}>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <div className="flex items-center gap-2">
              <span aria-hidden style={{ width: 22, height: 22, borderRadius: 6, background: "var(--fg)", position: "relative", display: "inline-block" }}>
                <span style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", color: "var(--accent)", fontWeight: 800, fontSize: 14 }}>L</span>
              </span>
              <span className="wordmark">LOOPWAR</span>
            </div>
            <p className="muted" style={{ marginTop: 14, maxWidth: "34ch" }}>
              A product &amp; engineering studio building high-performing websites, apps and AI products.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-12 gap-y-6 mono" style={{ fontSize: ".82rem" }}>
            <div className="flex flex-col gap-2.5">
              <span style={{ color: "var(--gray-400)" }}>SITEMAP</span>
              <a href="/#work" className="nav-link">Work</a>
              <a href="/#ventures" className="nav-link">Ventures</a>
              <a href="/portfolio" className="nav-link">Portfolio</a>
              <a href="/contact" className="nav-link">Contact</a>
            </div>
            <div className="flex flex-col gap-2.5">
              <span style={{ color: "var(--gray-400)" }}>CONTACT</span>
              <a href="mailto:contact@loopwar.dev" className="nav-link">contact@loopwar.dev</a>
              <a href="tel:+916377362603" className="nav-link">+91 63773 62603</a>
            </div>
            <div className="flex flex-col gap-2.5">
              <span style={{ color: "var(--gray-400)" }}>LEGAL</span>
              <a href="/terms" className="nav-link">Terms</a>
              <a href="/privacy" className="nav-link">Privacy</a>
              <a href="/refund" className="nav-link">Refund</a>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mono" style={{ marginTop: "3rem", paddingTop: "1.5rem", borderTop: "1px solid var(--border)", fontSize: ".75rem", color: "var(--gray-400)" }}>
          <span>© {year} LOOPWAR</span>
          <span>Made in India</span>
        </div>
      </div>
    </footer>
  );
}
