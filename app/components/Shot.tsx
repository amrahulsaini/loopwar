type Props = {
  src: string;
  alt: string;
  tag?: string;
  ratio?: string;
  pan?: boolean;
  priority?: boolean;
  className?: string;
};

export default function Shot({ src, alt, tag, ratio = "16 / 10", pan, priority, className = "" }: Props) {
  return (
    <div className={`shot ${pan ? "shot-pan" : ""} ${className}`} style={{ aspectRatio: ratio }}>
      {tag && <span className="shot-tag">{tag}</span>}
      <img src={src} alt={alt} loading={priority ? "eager" : "lazy"} />
    </div>
  );
}
