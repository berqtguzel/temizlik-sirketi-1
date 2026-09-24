import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Link className="brand brand-footer" href="/">
            <img
              className="brand-logo"
              src="/assets/logo.png"
              alt="Ö&I CLEAN group GmbH"
              width="190"
              height="58"
            />
          </Link>
          <p>
            Deutsche Gründlichkeit und Zuverlässigkeit in der professionellen
            Reinigung, Wartung und im Gebäudemanagement.
          </p>
        </div>
        <div>
          <h3>Navigation</h3>
          <Link href="/">Startseite</Link>
          <Link href="/ueber-uns">Über uns</Link>
          <Link href="/leistungen">Leistungen</Link>
          <Link href="/kontakt">Kontakt</Link>
        </div>
        <div>
          <h3>Kontakt & Rechtliches</h3>
          <a href="tel:+4973615561144">+49 7361 556 11 44</a>
          <a href="mailto:info@oi-clean-group.de">info@oi-clean-group.de</a>
          <span>Mo–Fr: 08:00–17:00</span>
          <Link href="/cookie-richtlinie">Cookie-Richtlinie</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Ö&I CLEAN group GmbH. Alle Rechte vorbehalten.</span>
        <a href="#top">Nach oben ↑</a>
      </div>
    </footer>
  );
}
