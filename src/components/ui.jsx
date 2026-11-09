import React from "react";
import { useEffect, useRef, useState } from "react";

// Image avec visuel de remplacement si le fichier est absent
export function Img({ src, alt, label, className = "" }) {
  const [failed, setFailed] = useState(false);
  if (!src || failed) {
    return (
      <div className={`img-fallback ${className}`} role="img" aria-label={alt}>
        <span>{label || alt}</span>
      </div>
    );
  }
  return <img className={className} src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />;
}

// Logo de club dans un cadre rond stylé (affiche `children` si l'image est absente)
export function Logo({ src, alt, children }) {
  const [failed, setFailed] = useState(false);
  const ok = src && !failed;
  return (
    <div className="logo-frame">
      <div className="logo-inner">
        {ok ? <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} /> : children}
      </div>
    </div>
  );
}

// Balise </> flottante (le web)
export function CodeTag({ className = "" }) {
  return (
    <div className={`code-tag ${className}`} aria-hidden="true">
      <span>&lt;/&gt;</span>
    </div>
  );
}

// Apparition douce au scroll
export function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${shown ? "in" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

// Nuage décoratif (dessin original, évoque le thème cloud/CRM)
export function Cloud({ className = "", label }) {
  return (
    <div className={`cloud ${className}`} aria-hidden="true">
      <svg viewBox="0 0 200 130" width="100%" height="100%">
        <defs>
          <linearGradient id="cloudGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#4cc3ff" />
            <stop offset="1" stopColor="#1076e6" />
          </linearGradient>
        </defs>
        <path
          d="M52 112c-22 0-40-15-40-35 0-17 12-31 29-34 3-22 22-38 46-38 17 0 31 8 40 21 5-3 11-5 18-5 21 0 38 16 38 36 0 3 0 6-1 9 12 5 20 16 20 29 0 17-14 17-31 17H52z"
          fill="url(#cloudGrad)"
        />
        <path d="M60 50c8-14 24-22 40-18" stroke="#fff" strokeOpacity=".45" strokeWidth="5" strokeLinecap="round" fill="none" />
      </svg>
      {label && <span>{label}</span>}
    </div>
  );
}

export function PageHeader({ kicker, title, subtitle }) {
  return (
    <header className="page-header">
      <span className="kicker">{kicker}</span>
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </header>
  );
}

export function Tags({ items }) {
  return (
    <ul className="tags">
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}
