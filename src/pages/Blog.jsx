import React, { useState } from "react";
import { Link } from "react-router-dom";
import { posts } from "../data.js";
import { PageHeader, Reveal } from "../components/ui.jsx";

const filters = [
  { key: "all", label: "Tous" },
  { key: "dev", label: "Full-Stack" },
  { key: "sf", label: "Salesforce" },
];
const tagLabel = { dev: "Full-Stack", sf: "Salesforce" };

export function formatDate(d) {
  return new Date(d).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
}

export default function Blog() {
  const [f, setF] = useState("all");
  const list = posts.filter((p) => f === "all" || p.tag === f);

  return (
    <div className="page">
      <PageHeader kicker="Blog" title="Notes & retours d'expérience" subtitle="Ce que j'apprends sur Salesforce et le développement full-stack, expliqué pas à pas." />

      <div className="filters">
        {filters.map((x) => (
          <button key={x.key} className={f === x.key ? "active" : ""} onClick={() => setF(x.key)}>
            {x.label}
          </button>
        ))}
      </div>

      <div className="blog-grid">
        {list.map((p, i) => (
          <Reveal key={p.id} delay={i * 80}>
            <Link to={`/blog/${p.id}`} className="card post-card">
              <div className="post-meta">
                <span className={`post-tag ${p.tag}`}>{tagLabel[p.tag]}</span>
                <span>{p.level}</span>
                <span>· {p.readTime} de lecture</span>
              </div>
              <h3>{p.title}</h3>
              <p>{p.summary}</p>
              <div className="post-foot">
                <time>{formatDate(p.date)}</time>
                <span className="post-more">Lire l'article →</span>
              </div>
            </Link>
          </Reveal>
        ))}
        {list.length === 0 && <p className="empty">Aucun article dans cette catégorie pour le moment.</p>}
      </div>
    </div>
  );
}