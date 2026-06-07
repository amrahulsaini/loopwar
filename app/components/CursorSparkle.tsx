"use client";

import { useEffect } from "react";

export default function CursorSparkle() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    // skip on touch / reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(hover: none)").matches) return;

    let last = 0;
    const onMove = (e: PointerEvent) => {
      const now = performance.now();
      if (now - last < 60) return; // throttle
      last = now;
      const s = document.createElement("span");
      s.className = "lw-sparkle";
      s.textContent = "✦";
      const jitter = (Math.random() - 0.5) * 14;
      s.style.left = e.clientX + jitter + "px";
      s.style.top = e.clientY + jitter + "px";
      s.style.fontSize = 8 + Math.random() * 10 + "px";
      document.body.appendChild(s);
      window.setTimeout(() => s.remove(), 750);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return null;
}
