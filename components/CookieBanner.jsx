"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  useEffect(() => setVisible(!localStorage.getItem("oi-cookie-consent")), []);

  function save(value) {
    localStorage.setItem("oi-cookie-consent", value);
    setVisible(false);
  }

  if (!visible) return null;
  return (
    <aside className="cookie-banner" aria-label="Cookie-Einstellungen">
      <div><strong>Ihre Privatsphäre ist uns wichtig</strong><p>Diese statische Website verwendet nur technisch notwendige Speicherung für Ihre Design- und Cookie-Einstellungen. <Link href="/cookie-richtlinie">Mehr erfahren</Link></p></div>
      <div className="cookie-actions"><button className="cookie-secondary" onClick={() => save("necessary")}>Nur notwendige</button><button className="cookie-primary" onClick={() => save("accepted")}>Alle akzeptieren</button></div>
    </aside>
  );
}
