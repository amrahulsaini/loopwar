import type { Project } from "../data/projects";
import Reveal from "./Reveal";

type Item = Project & { role?: string };

const UpRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M8 7h9v9" /></svg>
);

/**
 * Editorial product-grid showcase (Shopify-storefront style):
 * image-forward cards, hairline borders, calm hover zoom — no carousel.
 */
export default function ProjectShowcase({ items }: { items: Item[]; autoMs?: number }) {
  return (
    <div className="pgrid">
      {items.map((p, idx) => (
        <Reveal key={p.domain} delay={idx * 70} from="up">
          <a href={p.url} target="_blank" rel="noreferrer" className="pcard">
            <div className="pcard-media">
              <img
                src={p.image}
                alt={`${p.name} — ${p.category}`}
                loading={idx < 2 ? "eager" : "lazy"}
              />
              <span className="pcard-visit">Visit site <UpRight /></span>
            </div>
            <div className="pcard-body">
              <div className="pcard-meta">
                <span className="pcard-cat">{p.category}</span>
                {p.role && <span className="pcard-role">{p.role}</span>}
              </div>
              <h3 className="pcard-name">{p.name}</h3>
              <p className="pcard-tag">{p.tagline}</p>
              <span className="pcard-domain">{p.domain} <UpRight /></span>
            </div>
          </a>
        </Reveal>
      ))}
    </div>
  );
}
