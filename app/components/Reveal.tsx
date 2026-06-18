"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "zoom" | "blur" | "none";

type Props = {
  children: ReactNode;
  className?: string;
  /** stagger delay in ms */
  delay?: number;
  /** entrance direction */
  from?: Direction;
  as?: ElementType;
  /** re-animate every time it enters the viewport */
  repeat?: boolean;
  style?: React.CSSProperties;
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  from = "up",
  as,
  repeat = false,
  style,
}: Props) {
  const Tag = (as || "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            if (!repeat) io.disconnect();
          } else if (repeat) {
            setShown(false);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [repeat]);

  return (
    <Tag
      ref={ref as never}
      data-from={from}
      className={`reveal ${shown ? "in-view" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </Tag>
  );
}
