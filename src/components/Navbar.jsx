import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { modes } from "../data.js";
import { useMode } from "../ModeContext.jsx";
import "../logo.css";

const links = [
  { to: "/", label: "Accueil" },
  { to: "/parcours", label: "Parcours" },
  { to: "/projets", label: "Projets" },
  { to: "/experiences", label: "Stages" },
  { to: "/certifications", label: "Certifs" },
  { to: "/vie-associative", label: "Vie associative" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { mode, setMode } = useMode();

  return (
    <nav className="navbar">
      <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
        <img className="brand-logo" src="logo.png" alt="Logo Touria Chiguer" />
        <span className="brand-name">Touria Chiguer</span>
      </NavLink>

      <div className={`nav-links ${open ? "open" : ""}`}>
        {links.map((l) => (
          <NavLink key={l.to} to={l.to} end={l.to === "/"} onClick={() => setOpen(false)}>
            {l.label}
          </NavLink>
        ))}
      </div>

      <div className="mode-switch" role="tablist" aria-label="Choisir le profil">
        {Object.entries(modes).map(([key, m]) => (
          <button key={key} role="tab" aria-selected={mode === key} className={mode === key ? "active" : ""} onClick={() => setMode(key)}>
            {m.short}
          </button>
        ))}
      </div>

      <button className="burger" aria-label="Menu" onClick={() => setOpen(!open)}>
        <span /><span /><span />
      </button>
    </nav>
  );
}