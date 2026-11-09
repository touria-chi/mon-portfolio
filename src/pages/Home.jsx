import React from "react";
import { Link } from "react-router-dom";
import { profile, modes, trailhead } from "../data.js";
import { useMode } from "../ModeContext.jsx";
import { Img, Reveal, Cloud, CodeTag } from "../components/ui.jsx";
import { cvs } from "../cv.js";

export default function Home() {
  const { mode, setMode } = useMode();
  const m = modes[mode];
  const other = mode === "dev" ? "sf" : "dev";

  return (
    <section className="hero">
      <div className="hero-text">
        <Reveal>
          <span className="pill">
            <i className="dot" /> {profile.goal}
          </span>
        </Reveal>
        <Reveal delay={80}>
          <p className="hello">Bonjour, je suis</p>
          <h1 className="hero-name">{profile.name}</h1>
        </Reveal>
        <Reveal delay={160}>
          <h2 className="hero-title" key={mode}>
            <span className="grad">{m.title}</span>
          </h2>
          <p className="hero-tagline" key={mode + "t"}>{m.tagline}</p>
        </Reveal>

        <Reveal delay={240}>
          <ul className="role-chips">
            {m.roles.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={320}>
          <div className="cta-row">
            <Link to="/projets" className="btn primary">Voir mes projets →</Link>
            <Link to="/contact" className="btn ghost">Me contacter</Link>
            <a className="btn ghost" href={cvs[mode].file} download={cvs[mode].name}>
              Télécharger mon CV {m.short} ↓
            </a>
            <button className="btn link" onClick={() => setMode(other)}>
              Découvrir mon profil {modes[other].short} ↺
            </button>
          </div>
        </Reveal>

        <Reveal delay={400}>
          <div className="stats">
            {m.stats.map((s) => (
              <div key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <Reveal delay={150} className="hero-visual">
        <div className="photo-wrap">
          <div className="photo-ring" />
          <Img src={profile.photo} alt="Photo de Touria Chiguer" label="TC" className="photo" />
          {mode === "sf" && <Cloud className="hero-cloud" label="Salesforce" />}
          <CodeTag className="hero-code" />
          <span className="float-badge b1">{mode === "dev" ? "Spring Boot" : `Trailhead ★ ${trailhead.badges}`}</span>
          <span className="float-badge b2">{mode === "dev" ? "React.js" : "Flow Builder"}</span>
          <span className="float-badge b3">{mode === "dev" ? "Keycloak" : "Apex · LWC"}</span>
        </div>
      </Reveal>

      <p className="about-line">{m.about}</p>

      <Reveal className="trail-home-wrap">
        <section className="trail-home">
          <Cloud className="tc tc1" />
          <Cloud className="tc tc2" />
          <Cloud className="tc tc3" />
          <CodeTag className="trail-code" />

          <div className="th-main">
            <span className="kicker">Salesforce Trailhead</span>
            <h3>Mon parcours Trailblazer</h3>
            <div className="th-count">
              <strong>{trailhead.badges}</strong>
              <span>badges · rang {trailhead.level}</span>
            </div>
            <p className="th-goal">🎯 {trailhead.goal}</p>
            <div className="cta-row">
              <a className="btn primary" href={profile.trailhead} target="_blank" rel="noreferrer">Voir mon profil Trailhead ↗</a>
              <Link to="/parcours" className="btn ghost">Tout mon parcours</Link>
            </div>
          </div>

          <ul className="th-paths">
            {trailhead.paths.map((p) => (
              <li key={p.name}>
                <span>{p.name}</span>
                <em className={p.done ? "ok" : "wip"}>{p.status}</em>
              </li>
            ))}
          </ul>
        </section>
      </Reveal>
    </section>
  );
}