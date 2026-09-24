import Link from "next/link";

export const metadata = { title: "Seite nicht gefunden" };

export default function NotFound() {
  return (
    <main className="not-found">
      <div className="not-found-card reveal">
        <span className="error-code">404</span>
        <span className="eyebrow dark">Seite nicht gefunden</span>
        <h1>Diese Seite ist nicht verfügbar.</h1>
        <p>
          Die Adresse wurde möglicherweise verschoben oder ist nicht korrekt.
          Über die Startseite finden Sie schnell zu unseren Leistungen.
        </p>
        <div className="hero-actions">
          <Link className="button button-primary" href="/">
            Zur Startseite
          </Link>
          <Link className="button button-outline" href="/leistungen">
            Leistungen ansehen
          </Link>
        </div>
      </div>
    </main>
  );
}
