import Link from "next/link";
import { services } from "@/data/siteData";

export const metadata = {
  title: "Leistungen",
  description:
    "Reinigungs-, Housekeeping- und Gebäudedienstleistungen der Ö&I CLEAN group GmbH.",
};

export default function ServicesPage() {
  return (
    <main>
      <section className="page-hero">
        <img
          className="page-hero-image"
          src="/assets/industrial-cleaning.jpg"
          alt="Professionelle Gebäudereinigung"
        />
        <div className="container page-hero-content reveal">
          <div className="breadcrumb">
            <Link href="/">Startseite</Link>
            <span>/</span>
            <span>Leistungen</span>
          </div>
          <span className="eyebrow">Alles aus einer Hand</span>
          <h1>Leistungen für dauerhaft gepflegte Räume</h1>
          <p>
            Von Housekeeping bis Industriereinigung: Wir stellen genau das
            Leistungspaket zusammen, das zu Ihrem Objekt und Ihren Abläufen
            passt.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-heading reveal">
            <span className="eyebrow dark">Unser Angebot</span>
            <h2>Professionell. Flexibel. Gründlich.</h2>
            <p>
              Alle Leistungen werden individuell geplant, dokumentiert und durch
              feste Qualitätsstandards begleitet.
            </p>
          </div>
          <div className="page-service-grid">
            {services.map((service) => (
              <article className="page-service-card reveal" key={service.id}>
                <img src={service.image} alt={service.title} loading="lazy" />
                <div>
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                  <Link
                    className="detail-link"
                    href={`/leistungen/${service.id}`}
                  >
                    Leistung ansehen →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section process">
        <div className="container">
          <div className="section-heading reveal">
            <span className="eyebrow dark">So arbeiten wir</span>
            <h2>Einfach zum passenden Reinigungskonzept</h2>
          </div>
          <div className="process-grid">
            {[
              [
                "Erstgespräch",
                "Wir klären Objekt, Anforderungen, Zeiten und gewünschte Leistungen.",
              ],
              [
                "Besichtigung",
                "Vor Ort erfassen wir Flächen und besondere Anforderungen genau.",
              ],
              [
                "Individuelles Angebot",
                "Sie erhalten ein transparentes, passgenau kalkuliertes Leistungspaket.",
              ],
              [
                "Umsetzung",
                "Unser Team startet strukturiert und sichert die Qualität fortlaufend.",
              ],
            ].map(([title, text]) => (
              <article className="process-card reveal" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="cta-band">
        <div className="container reveal">
          <div>
            <h2>Welche Leistung benötigen Sie?</h2>
            <p>
              Beschreiben Sie uns kurz Ihr Objekt – wir melden uns mit einer
              passenden Lösung.
            </p>
          </div>
          <Link className="button" href="/kontakt#anfrage">
            Jetzt anfragen →
          </Link>
        </div>
      </section>
    </main>
  );
}
