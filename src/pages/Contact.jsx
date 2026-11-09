import React from "react";
import { useState } from "react";
import { profile } from "../data.js";
import { PageHeader, Reveal } from "../components/ui.jsx";
import CvModal from "../components/CvModal.jsx";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [cvOpen, setCvOpen] = useState(false);
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  // Ouvre le client mail avec le message pré-rempli (pas de serveur nécessaire)
  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio — message de ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n${form.name}\n${form.email}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const items = [
    { icon: "✉", label: "E-mail", value: profile.email, href: `mailto:${profile.email}` },
    { icon: "☎", label: "Téléphone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { icon: "⌂", label: "Localisation", value: profile.location },
    { icon: "</>", label: "GitHub", value: "github.com/touria-chi", href: profile.github },
    { icon: "☁", label: "Trailhead", value: "Profil Trailblazer", href: profile.trailhead },
    ...(profile.linkedin ? [{ icon: "in", label: "LinkedIn", value: "Mon profil", href: profile.linkedin }] : []),
  ];

  return (
    <div className="page">
      <PageHeader kicker="Contact" title="Travaillons ensemble" subtitle={`${profile.goal}. Une opportunité, une question ? Écrivez-moi.`} />
      <div className="two-col">
        <div className="contact-list">
          {items.map((it, i) => (
            <Reveal key={it.label} delay={i * 60}>
              <div className="card contact-item">
                <span className="c-icon">{it.icon}</span>
                <div>
                  <small>{it.label}</small>
                  {it.href ? (
                    <a href={it.href} target={it.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{it.value}</a>
                  ) : (
                    <p>{it.value}</p>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
          <button className="btn primary" type="button" onClick={() => setCvOpen(true)}>Importer mon CV ↓</button>
          <CvModal open={cvOpen} onClose={() => setCvOpen(false)} />
        </div>

        <Reveal>
          <form className="card form" onSubmit={submit}>
            <label>Nom<input required value={form.name} onChange={set("name")} placeholder="Votre nom" /></label>
            <label>E-mail<input required type="email" value={form.email} onChange={set("email")} placeholder="vous@exemple.com" /></label>
            <label>Message<textarea required rows="5" value={form.message} onChange={set("message")} placeholder="Votre message…" /></label>
            <button className="btn primary" type="submit">Envoyer →</button>
          </form>
        </Reveal>
      </div>
    </div>
  );
}