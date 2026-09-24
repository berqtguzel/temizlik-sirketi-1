"use client";

import { useState } from "react";

export default function ContactForm({ compact = false }) {
  const [status, setStatus] = useState("");
  const [sent, setSent] = useState(false);

  function submit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) { setStatus("Bitte füllen Sie alle Pflichtfelder korrekt aus."); form.reportValidity(); return; }
    setStatus("Demo-Anfrage erfolgreich vorbereitet.");
    setSent(true);
    form.reset();
    window.setTimeout(() => setSent(false), 4500);
  }

  return <>
    <form className="contact-form reveal" onSubmit={submit} noValidate>
      <div className="field-row"><label>Name *<input type="text" name="name" autoComplete="name" required /></label><label>Telefon *<input type="tel" name="phone" autoComplete="tel" required /></label></div>
      <label>E-Mail *<input type="email" name="email" autoComplete="email" required /></label>
      {!compact && <label>Gewünschte Leistung<select name="service" defaultValue=""><option value="">Bitte auswählen</option><option>Hotelreinigung</option><option>Gebäudereinigung</option><option>Unterhaltsreinigung</option><option>Bauendreinigung</option><option>Fenster- & Glasreinigung</option><option>Industriereinigung</option><option>Renovierung & Reparatur</option></select></label>}
      <label>Nachricht *<textarea name="message" rows={compact ? 5 : 6} required /></label>
      <p className="form-note">Demo-Modus: Ihre Angaben werden nicht versendet oder gespeichert.</p>
      <button className="button button-primary submit-button" type="submit">Nachricht senden <span>→</span></button>
      <p className="form-status" role="status">{status}</p>
    </form>
    <div className={`toast${sent ? " show" : ""}`} role="status">Vielen Dank! Dies ist eine Demo – es wurden keine Daten versendet.</div>
  </>;
}
