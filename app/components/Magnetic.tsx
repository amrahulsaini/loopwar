"use client";

import { useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** pull strength in px */
  strength?: number;
  style?: React.CSSProperties;
};

/**
 * Wraps an element so it gently leans toward the cursor on hover.
 * Honours prefers-reduced-motion (no transform applied).
 */
export default function Magnetic({ children, className = "", strength = 14, style }: Props) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const reduce =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const onMove = (e: React.MouseEvent) => {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    el.style.transform = `translate(${(x / r.width) * strength * 2}px, ${(y / r.height) * strength * 2}px)`;
  };
  const reset = () => {
    const el = ref.current;
    if (el) el.style.transform = "translate(0px, 0px)";
  };

  return (
    <span
      ref={ref}
      className={`magnetic ${className}`}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={style}
    >
      {children}
    </span>
  );
}
