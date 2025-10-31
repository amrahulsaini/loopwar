"use client";

import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  prompt: string;
  height?: number; // used only for placeholder height when image missing
  className?: string;
};

export default function OptionalImage({ src, alt, prompt, height = 240, className }: Props) {
  const [ok, setOk] = useState(true);

  if (!ok) {
    return (
      <div className={`image-placeholder w-full ${className ?? ""}`} style={{ height }}>
        <div className="text-center text-xs leading-5 px-4">
          <div className="font-semibold" style={{ color: "var(--color-primary)" }}>
            Image placeholder
          </div>
          <div>Line-art prompt:</div>
          <div className="mt-1 italic">{prompt}</div>
          <div className="mt-2">Drop file at <code>/public{src}</code></div>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`max-w-full h-auto block ${className ?? ""}`}
      style={{ display: "block" }}
      onError={() => setOk(false)}
    />
  );
}
