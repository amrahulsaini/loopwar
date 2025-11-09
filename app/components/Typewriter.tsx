"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  text: string;
  speed?: number; // ms per character
  startDelay?: number; // ms before typing starts
  loop?: boolean;
  className?: string;
  highlight?: boolean; // optional pill styling
  caret?: boolean; // show blinking caret
};

export default function Typewriter({
  text,
  speed = 35,
  startDelay = 100,
  loop = false,
  className,
  highlight = false,
  caret = true,
}: Props) {
  const [out, setOut] = useState("");
  const indexRef = useRef(0);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (timerRef.current) window.clearTimeout(timerRef.current);
    setOut("");
    indexRef.current = 0;

    const tick = () => {
      setOut(text.slice(0, indexRef.current + 1));
      indexRef.current += 1;
      if (indexRef.current < text.length) {
        timerRef.current = window.setTimeout(tick, speed);
      } else if (loop) {
        timerRef.current = window.setTimeout(() => {
          indexRef.current = 0;
          setOut("");
          timerRef.current = window.setTimeout(tick, speed);
        }, 1000);
      }
    };

    timerRef.current = window.setTimeout(tick, startDelay);
    return () => { if (timerRef.current) window.clearTimeout(timerRef.current); };
  }, [text, speed, startDelay, loop]);

  const classes = [className, caret ? "typewriter-caret" : undefined, highlight ? "highlight-pill" : undefined]
    .filter(Boolean)
    .join(" ");

  return (
    <span aria-label={text} className={classes}>{out}</span>
  );
}
