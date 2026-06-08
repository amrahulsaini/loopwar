"use client";

import { useState } from "react";

const fieldStyle: React.CSSProperties = {
  width: "100%", height: 48, padding: "0 .9rem", borderRadius: 12,
  border: "2px solid var(--border)", background: "var(--white)", color: "var(--fg)",
  fontFamily: "var(--font-hand)", fontSize: "1.05rem", outline: "none",
};
const labelStyle: React.CSSProperties = { display: "block", fontSize: "1rem", marginBottom: ".35rem", color: "var(--fg)" };

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const subject = `Project enquiry — ${fd.get("name") || "LOOPWAR"}`;
    const body =
      `Name: ${fd.get("name") || ""}\n` +
      `Email: ${fd.get("email") || ""}\n` +
      `Company: ${fd.get("company") || "—"}\n` +
      `Budget: ${fd.get("budget") || "—"}\n\n` +
      `${fd.get("message") || ""}`;
    window.location.href = `mailto:rahul@loopwar.dev?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col" style={{ gap: "1.1rem" }}>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label style={labelStyle} htmlFor="name">Full name</label>
          <input style={fieldStyle} id="name" name="name" required autoComplete="name" placeholder="Jane Doe" />
        </div>
        <div>
          <label style={labelStyle} htmlFor="email">Email</label>
          <input style={fieldStyle} id="email" name="email" type="email" required autoComplete="email" placeholder="jane@company.com" />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label style={labelStyle} htmlFor="company">Company <span className="muted">(optional)</span></label>
          <input style={fieldStyle} id="company" name="company" autoComplete="organization" placeholder="Company" />
        </div>
        <div>
          <label style={labelStyle} htmlFor="budget">Budget</label>
          <select style={fieldStyle} id="budget" name="budget" defaultValue="">
            <option value="" disabled>Select a range</option>
            <option>Under ₹1L</option><option>₹1L – ₹5L</option><option>₹5L – ₹15L</option><option>₹15L+</option>
          </select>
        </div>
      </div>
      <div>
        <label style={labelStyle} htmlFor="message">Project details</label>
        <textarea style={{ ...fieldStyle, height: "auto", padding: ".8rem .9rem", minHeight: 150, resize: "vertical" }} id="message" name="message" required placeholder="What are you building?" />
      </div>
      <button type="submit" className="btn btn-accent" style={{ alignSelf: "flex-start" }}>Send message</button>
      {sent && <p className="muted" style={{ fontSize: "1rem" }}>Opening your email app… if nothing happens, write to <a href="mailto:rahul@loopwar.dev" style={{ textDecoration: "underline" }}>rahul@loopwar.dev</a>.</p>}
    </form>
  );
}
