import ContactForm from "../components/ContactForm";

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
          <div className="card" style={{ padding: "clamp(1.5rem,3vw,2.5rem)" }}>
            <ContactForm />
          </div>

          <div className="flex flex-col" style={{ gap: "1rem" }}>
            {[
              ["Email", "rahul@loopwar.dev", "mailto:rahul@loopwar.dev"],
              ["Call", "+91 63773 62603", "tel:+916377362603"],
            ].map(([k, v, href]) => (
              <a key={k} href={href} className="card hover-lift" style={{ padding: "1.4rem" }}>
                <div className="muted" style={{ fontSize: ".95rem", textTransform: "uppercase", letterSpacing: ".06em" }}>{k}</div>
                <div style={{ fontSize: "1.2rem", marginTop: ".3rem" }}>{v}</div>
              </a>
            ))}
            <div className="card" style={{ padding: "1.4rem" }}>
              <div className="muted" style={{ fontSize: ".95rem", textTransform: "uppercase", letterSpacing: ".06em" }}>Hours</div>
              <div style={{ marginTop: ".3rem", fontSize: "1.1rem" }}>Mon–Sat · 9 AM – 7 PM IST</div>
              <div className="muted" style={{ fontSize: "1rem", marginTop: ".3rem" }}>Email answered 24/7</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
