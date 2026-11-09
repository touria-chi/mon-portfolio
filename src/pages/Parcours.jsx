import React from "react";
import { education, trailhead, skills } from "../data.js";
import { PageHeader, Reveal, Tags } from "../components/ui.jsx";
import Skills from "../components/Skills.jsx";
export default function Parcours() {
  return (
    <div className="page">
      <PageHeader kicker="Parcours" title="Formation" subtitle="De l'ENSA Safi au Trailhead : une base d'ingénieure et une montée en compétence Salesforce." />

      <div className="two-col">
        <div>
          <h3 className="col-title">🎓 ENSA Safi & parcours scolaire</h3>
          <div className="timeline">
            {education.map((e, i) => (
              <Reveal key={e.title} delay={i * 90}>
                <article className="tl-item">
                  <span className="tl-period">{e.period}</span>
                  <h4>{e.title}</h4>
                  <p className="tl-place">{e.place}</p>
                  {e.desc && <p>{e.desc}</p>}
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <h3 className="col-title">☁️ Salesforce Trailhead</h3>
          <Reveal>
            <article className="card trail-card">
              <div className="trail-top">
                <div className="trail-count">{trailhead.badges}</div>
                <div>
                  <strong>badges Trailhead</strong>
                  <p>Rang {trailhead.level}</p>
                </div>
              </div>
              <ul className="paths">
                {trailhead.paths.map((p) => (
                  <li key={p.name}>
                    <span>{p.name}</span>
                    <em className={p.done ? "ok" : "wip"}>{p.status}</em>
                  </li>
                ))}
              </ul>
              <p className="trail-goal">🎯 {trailhead.goal}</p>
            </article>
          </Reveal>
        </div>
      </div>

            <Skills />
    </div>
  );
}
