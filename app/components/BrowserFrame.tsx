type Props = {
  src: string;
  alt: string;
  domain?: string;
  className?: string;
  /** crop to a fixed aspect ratio (top-aligned). e.g. "16 / 10" */
  ratio?: string;
  priority?: boolean;
  /** strip the frame's own border/shadow/radius so it sits flush inside a card */
  embed?: boolean;
};

export default function BrowserFrame({ src, alt, domain, className = "", ratio = "16 / 10", priority, embed }: Props) {
  return (
    <figure className={`browser ${embed ? "browser-embed" : ""} ${className}`}>
      <div className="browser-bar">
        <span className="browser-dot" />
        <span className="browser-dot" />
        <span className="browser-dot" />
        {domain && <span className="browser-url">{domain}</span>}
      </div>
      <div className="browser-view" style={{ aspectRatio: ratio }}>
        <img src={src} alt={alt} loading={priority ? "eager" : "lazy"} />
      </div>
    </figure>
  );
}
