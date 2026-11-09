import React from "react";
import { useState } from "react";
import { projects } from "../data.js";
import { Img, PageHeader, Reveal, Tags, Cloud } from "../components/ui.jsx";

const filters = [
  { key: "all", label: "Tous" },
  { key: "dev", label: "Full-Stack" },
  { key: "sf", label: "Salesforce" },
];

export default function Projets() {
  const [f, setF] = useState("all");
  const list = projects.filter((p) => f === "all" || p.tags.includes(f));

  return (
    <div className="page">
      <PageHeader kicker="Réalisations" title="Projets" subtitle="Chaque projet renvoie vers son dépôt GitHub." />

      <div className="filters">
        {filters.map((x) => (
          <button key={x.key} className={f === x.key ? "active" : ""} onClick={() => setF(x.key)}>
            {x.label}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {list.map((p, i) => (
          <Reveal key={p.title} delay={i * 80}>
            <article className="card project">
              <div className="project-img">
                <Img src={p.image} alt={`Aperçu du projet ${p.title}`} label={p.title} />
                <span className="project-type">{p.type}</span>
                {p.featured && <Cloud className="project-cloud" />}
              </div>
              <div className="project-body">
                <h3>{p.title}</h3>
                <p className="project-sub">{p.subtitle}</p>
                <p>{p.desc}</p>
                {p.points.length > 0 && (
                  <ul className="points">
                    {p.points.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                )}
                <Tags items={p.stack} />
               
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
