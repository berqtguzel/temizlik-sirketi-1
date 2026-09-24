import Link from "next/link";

export const metadata = {
  title: "Cookie-Richtlinie",
  description:
    "Informationen zur lokalen Speicherung und zu Cookies auf unserer Website.",
};

export default function CookiePolicyPage() {
  return (
    <main>
      <section className="legal-page section">
        <div className="container legal-content reveal">
          <div className="breadcrumb legal-breadcrumb">
            <Link href="/">Startseite</Link>
            <span>/</span>
            <span>Cookie-Richtlinie</span>
          </div>
          <span className="eyebrow dark">Datenschutz</span>
          <h1>Cookie-Richtlinie</h1>
          <p>Stand: September 2026</p>
          <h2>Welche Daten werden gespeichert?</h2>
          <p>
            Diese statische Website setzt keine Analyse-, Marketing- oder
            Tracking-Cookies ein. Im lokalen Speicher Ihres Browsers werden
            ausschließlich Ihre Auswahl im Cookie-Banner und – falls verwendet –
            Ihre Auswahl des Farbschemas gespeichert.
          </p>
          <h2>Technisch notwendige Speicherung</h2>
          <p>
            Die Einträge <code>oi-cookie-consent</code> und{" "}
            <code>oi-theme</code> sorgen dafür, dass Ihre Auswahl bei einem
            späteren Besuch erhalten bleibt. Diese Daten verlassen Ihren Browser
            nicht und werden nicht an uns übertragen.
          </p>
          <h2>Einstellungen zurücksetzen</h2>
          <p>
            Sie können die gespeicherten Einstellungen jederzeit über die
            Website-Daten in Ihrem Browser löschen. Beim nächsten Besuch
            erscheint das Cookie-Banner dann erneut.
          </p>
          <h2>Kontakt</h2>
          <p>
            Bei Fragen erreichen Sie uns unter{" "}
            <a href="mailto:info@oi-clean-group.de">info@oi-clean-group.de</a>.
          </p>
          <Link className="button button-primary" href="/">
            Zur Startseite
          </Link>
        </div>
      </section>
    </main>
  );
}
