"use client";

type Props = {
  items: string[];
  reverse?: boolean;
  className?: string;
};

const Star = () => (
  <svg className="tm-star" width="34" height="34" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 0c.6 6.3 5.7 11.4 12 12-6.3.6-11.4 5.7-12 12-.6-6.3-5.7-11.4-12-12C6.3 11.4 11.4 6.3 12 0z" />
  </svg>
);

export default function TextMarquee({ items, reverse, className = "" }: Props) {
  const group = (
    <span className="tm-item">
      {items.map((t, i) => (
        <span key={i} className="tm-item">
          <span>{t}</span>
          <Star />
        </span>
      ))}
    </span>
  );

  return (
    <div className={`text-marquee ${reverse ? "reverse" : ""} ${className}`} aria-hidden>
      <div className="text-marquee-track">
        {group}
        {group}
      </div>
    </div>
  );
}
