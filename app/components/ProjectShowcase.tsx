import type { Project } from "../data/projects";
import Reveal from "./Reveal";

type Item = Project & { role?: string };

const UpRight = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M8 7h9v9" /></svg>
);

/**
 * Edge-to-edge editorial feature rows (Prestige / Impact storytelling style):
 * each project is a full-width row whose image is flush to the viewport edge,
 * alternating sides, with scroll-reveal + parallax motion.
 */
export default function ProjectShowcase({ items, startIndex = 0 }: { items: Item[]; autoMs?: number; startIndex?: number }) {
  return (
    <div className="features">
      {items.map((p, idx) => {
        const n = startIndex + idx + 1;
        const flip = (startIndex + idx) % 2 === 1;
        return (
          <article key={p.domain} className="feature" data-flip={flip ? "1" : "0"} style={{ ["--accent" as never]: p.accent }}>
            <Reveal from={flip ? "right" : "left"} className="feature-media-wrap">
              <a href={p.url} target="_blank" rel="noreferrer" className="feature-frame" tabIndex={-1} aria-hidden>
                <span className="frame-bar"><i /><i /><i /><span className="frame-url">{p.domain}</span></span>
                <span className="frame-view"><img src={p.image} alt={`${p.name} — ${p.category}`} loading={idx < 2 ? "eager" : "lazy"} /></span>
              </a>
            </Reveal>

            <div className="feature-content">
              <Reveal from="up">
                <span className="feature-num">{String(n).padStart(2, "0")}</span>
                <div className="feature-meta">
                  <span className="pcard-cat">{p.category}</span>
                  {p.role && <span className="pcard-role">{p.role}</span>}
                </div>
                <h3 className="feature-name">{p.name}</h3>
                <p className="feature-tag">{p.tagline}</p>
                <p className="muted feature-desc">{p.description}</p>
                <ul className="feature-feats">
                  {p.features.map((f) => <li key={f}>{f}</li>)}
                </ul>
                <a href={p.url} target="_blank" rel="noreferrer" className="btn btn-accent feature-cta">
                  Visit {p.domain} <UpRight />
                </a>
              </Reveal>
            </div>
          </article>
        );
      })}
    </div>
  );
}
