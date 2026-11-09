import React from "react";
import { skills } from "../data.js";
import { Reveal } from "./ui.jsx";

const icons = {
  cloud: <path d="M7 18a4 4 0 0 1-.5-7.97A5.5 5.5 0 0 1 17 8.5a4.5 4.5 0 0 1 .5 9.5H7Z" />,
  server: (
    <>
      <rect x="3" y="4" width="18" height="6" rx="2" />
      <rect x="3" y="14" width="18" height="6" rx="2" />
      <path d="M7 7h.01M7 17h.01" />
    </>
  ),
  monitor: (
    <>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8M12 16v4" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 4.5 6v6c0 4.5 3.2 7.8 7.5 9 4.3-1.2 7.5-4.5 7.5-9V6L12 3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  flow: (
    <>
      <rect x="3" y="3" width="6" height="6" rx="1.5" />
      <rect x="15" y="15" width="6" height="6" rx="1.5" />
      <path d="M9 6h3a3 3 0 0 1 3 3v6" />
    </>
  ),
};

function Icon({ name }) {
  return (
    <svg className="sk-icon" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {icons[name]}
    </svg>
  );
}

export default function Skills() {
  return (
    <section className="skills-section">
      <div className="skills-head">
        <h3>Compétences techniques</h3>
        <span className="skills-count">{skills.length} domaines</span>
      </div>
      <div className="skills-cards">
        {skills.map((s, i) => (
          <Reveal key={s.group} delay={(i % 2) * 80}>
            <article className="sk-card">
              <h4>
                <Icon name={s.icon} />
                {s.group}
              </h4>
              <ul className="sk-chips">
                {s.items.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}