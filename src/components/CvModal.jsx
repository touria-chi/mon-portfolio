import React, { useEffect } from "react";
import { cvs } from "../cv.js";
import "../cv.css";

// Fenêtre de choix : le visiteur choisit le CV à télécharger
export default function CvModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="cv-overlay" onClick={onClose}>
      <div className="cv-modal card" role="dialog" aria-modal="true" aria-label="Choisir un CV" onClick={(e) => e.stopPropagation()}>
        <button className="cv-close" onClick={onClose} aria-label="Fermer">×</button>
        <h3>Quel CV souhaitez-vous importer ?</h3>
        <p className="cv-sub">Choisissez le profil qui correspond à votre besoin.</p>
        <div className="cv-choices">
          {Object.entries(cvs).map(([key, cv]) => (
            <a key={key} className="cv-choice" href={cv.file} download={cv.name} onClick={onClose}>
              <span className="cv-ico">{key === "dev" ? "</>" : "☁"}</span>
              <strong>{cv.label}</strong>
              <small>{cv.desc}</small>
              <em>Télécharger (PDF) ↓</em>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}