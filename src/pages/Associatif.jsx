import React from "react";
import { associations } from "../data.js";
import { PageHeader, Reveal, Logo } from "../components/ui.jsx";

export default function Associatif() {
  return (
    <div className="page">
      <PageHeader kicker="Engagement" title="Vie associative & leadership" subtitle="Leadership, gestion et prise de parole au sein des clubs de l'ENSA Safi." />
      <div className="asso-grid">
        {associations.map((a, i) => (
          <Reveal key={a.club} delay={i * 100}>
            <article className="card asso">
              <Logo src={a.logo} alt={`Logo ${a.club}`}>
                <span className="logo-fallback">{a.icon}</span>
              </Logo>
              <h3>{a.role}</h3>
              <p className="asso-club">
                {a.club}
                {a.year && ` · ${a.year}`}
              </p>
              <p>{a.desc}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
