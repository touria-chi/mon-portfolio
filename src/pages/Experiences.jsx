import React from "react";
import { experiences } from "../data.js";
import { PageHeader, Reveal, Tags } from "../components/ui.jsx";

export default function Experiences() {
  return (
    <div className="page">
      <PageHeader kicker="Expérience" title="Stages" subtitle="Trois expériences en entreprise, du stage d'observation au développement full-stack." />
      <div className="timeline wide">
        {experiences.map((e, i) => (
          <Reveal key={e.role + e.company} delay={i * 100}>
            <article className="card exp">
              <div className="exp-head">
                <div>
                  <h3>{e.role}</h3>
                  <a href={e.url} target="_blank" rel="noreferrer" className="company">
                    {e.company} ↗
                  </a>
                </div>
                <span className="tl-period">{e.period}</span>
              </div>
              <ul className="points">
                {e.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <Tags items={e.stack} />
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
