const fieldStyle: React.CSSProperties = {
  width: "100%", height: 46, padding: "0 .9rem", borderRadius: 8,
  border: "1px solid var(--border-strong)", background: "var(--bg)", color: "var(--fg)",
  fontSize: ".95rem", outline: "none",
};
const labelStyle: React.CSSProperties = { display: "block", fontSize: ".8rem", fontWeight: 500, marginBottom: ".4rem" };

export const metadata = { title: "Contact" };

export default function Contact() {
  return (
    <div>
      <section className="container" style={{ paddingTop: "clamp(3rem,7vw,5.5rem)", paddingBottom: "1rem" }}>
        <span className="eyebrow">Contact</span>
        <h1 className="display" style={{ marginTop: "1.2rem", maxWidth: "15ch" }}>Let&apos;s build something <span className="accent">great.</span></h1>
        <p className="lead" style={{ marginTop: "1.3rem", maxWidth: "48ch" }}>Tell us about your project — we usually reply within 24 hours.</p>
      </section>

      <section className="container" style={{ paddingBottom: "clamp(3rem,6vw,5rem)" }}>
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          {/* form */}
          <div className="card" style={{ padding: "clamp(1.5rem,3vw,2.5rem)" }}>
            <form action="mailto:contact@loopwar.dev" method="post" encType="text/plain" className="flex flex-col" style={{ gap: "1.1rem" }}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div><label style={labelStyle} htmlFor="name">Full name</label><input style={fieldStyle} id="name" name="name" required placeholder="Jane Doe" /></div>
                <div><label style={labelStyle} htmlFor="email">Email</label><input style={fieldStyle} id="email" name="email" type="email" required placeholder="jane@company.com" /></div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div><label style={labelStyle} htmlFor="company">Company <span style={{ color: "var(--gray-400)" }}>(optional)</span></label><input style={fieldStyle} id="company" name="company" placeholder="Company" /></div>
                <div><label style={labelStyle} htmlFor="budget">Budget</label>
                  <select style={fieldStyle} id="budget" name="budget" defaultValue="">
                    <option value="" disabled>Select a range</option>
                    <option>Under ₹1L</option><option>₹1L – ₹5L</option><option>₹5L – ₹15L</option><option>₹15L+</option>
                  </select>
                </div>
              </div>
              <div><label style={labelStyle} htmlFor="message">Project details</label>
                <textarea style={{ ...fieldStyle, height: "auto", padding: ".8rem .9rem", minHeight: 140, resize: "vertical" }} id="message" name="message" required placeholder="What are you building?" />
              </div>
              <button type="submit" className="btn btn-accent" style={{ alignSelf: "flex-start" }}>Send message</button>
            </form>
          </div>

          {/* details */}
          <div className="flex flex-col" style={{ gap: "1rem" }}>
            {[
              ["Email", "contact@loopwar.dev", "mailto:contact@loopwar.dev"],
              ["Call", "+91 63773 62603", "tel:+916377362603"],
            ].map(([k, v, href]) => (
              <a key={k} href={href} className="card hover-lift" style={{ padding: "1.4rem" }}>
                <div className="mono" style={{ fontSize: ".72rem", color: "var(--gray-400)", textTransform: "uppercase", letterSpacing: ".06em" }}>{k}</div>
                <div style={{ fontSize: "1.05rem", marginTop: ".4rem", fontWeight: 500 }}>{v}</div>
              </a>
            ))}
            <div className="card" style={{ padding: "1.4rem" }}>
              <div className="mono" style={{ fontSize: ".72rem", color: "var(--gray-400)", textTransform: "uppercase", letterSpacing: ".06em" }}>Hours</div>
              <div style={{ marginTop: ".4rem" }}>Mon–Sat · 9 AM – 7 PM IST</div>
              <div className="muted" style={{ fontSize: ".88rem", marginTop: ".3rem" }}>Email answered 24/7</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
