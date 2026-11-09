import React from "react";
import { certifications, languages } from "../data.js";
import { PageHeader, Reveal } from "../components/ui.jsx";

export default function Certifications() {
  return (
    <div className="page">
      <PageHeader kicker="Reconnaissance" title="Certifications & badges" subtitle="Formations suivies et certificats obtenus en développement, bases de données, versioning et Salesforce." />

      <div className="cert-grid">
        {certifications.map((c, i) => {
          const Wrapper = c.link ? "a" : "div";
          const props = c.link ? { href: c.link, target: "_blank", rel: "noreferrer" } : {};
          return (
            <Reveal key={c.name} delay={(i % 4) * 80}>
              <Wrapper className="cert-frame" style={{ "--c": c.color }} {...props}>
                <i className="corner tl" /><i className="corner tr" /><i className="corner bl" /><i className="corner br" />
                <span className="cert-label">Certificat</span>
                <span className="cert-seal">{c.icon}</span>
                <h3>{c.name}</h3>
                <p className="cert-issuer">{c.issuer}</p>
                {c.link && <span className="cert-open">Voir le profil ↗</span>}
              </Wrapper>
            </Reveal>
          );
        })}
      </div>

      <h3 className="col-title big">Langues</h3>
      <div className="lang-grid">
        {languages.map((l) => (
          <Reveal key={l.name}>
            <div className="card lang">
              <div className="lang-top">
                <strong>{l.name}</strong>
                <span>{l.level}</span>
              </div>
              <div className="bar"><i style={{ width: `${l.pct}%` }} /></div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
