import Link from "next/link";
import { notFound } from "next/navigation";
import ContactForm from "@/components/ContactForm";
import { getService, services } from "@/data/siteData";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.id }));
}

export async function generateMetadata({ params }) {
  const service = getService((await params).slug);
  return service
    ? { title: service.title, description: service.description }
    : {};
}

export default async function ServiceDetailPage({ params }) {
  const service = getService((await params).slug);
  if (!service) notFound();

  return (
    <main>
      <section className="page-hero service-detail-hero">
        <img
          className="page-hero-image"
          src={service.image}
          alt={service.title}
        />
        <div className="container page-hero-content reveal">
          <div className="breadcrumb">
            <Link href="/">Startseite</Link>
            <span>/</span>
            <Link href="/leistungen">Leistungen</Link>
            <span>/</span>
            <span>{service.title}</span>
          </div>
          <span className="eyebrow">Unsere Leistung</span>
          <h1>{service.title}</h1>
          <p>{service.description}</p>
        </div>
      </section>
      <section className="section service-detail">
        <div className="container">
          <div className="content-split">
            <div className="content-copy reveal">
              <span className="eyebrow dark">Passend für Ihr Objekt</span>
              <h2>{service.intro}</h2>
              <p>
                {service.audience}. Wir stimmen Umfang, Rhythmus und Ausführung
                persönlich mit Ihnen ab.
              </p>
              <ul className="check-list">
                {service.benefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
              <Link
                className="button button-primary"
                href={`/kontakt?leistung=${service.id}#anfrage`}
              >
                Unverbindlich anfragen <span>→</span>
              </Link>
            </div>
            <div className="content-media reveal">
              <img src={service.image} alt={`${service.title} bei Ö&I CLEAN`} />
            </div>
          </div>
        </div>
      </section>
      <section className="section process">
        <div className="container">
          <div className="section-heading reveal">
            <span className="eyebrow dark">So geht es weiter</span>
            <h2>Ihr passendes Reinigungskonzept</h2>
            <p>
              Wir lernen Ihr Objekt kennen und planen die Leistung so, dass sie
              zuverlässig in Ihren Alltag passt.
            </p>
          </div>
          <div className="process-grid">
            <article className="process-card reveal">
              <h3>Besprechen</h3>
              <p>
                Sie erzählen uns von Ihrem Objekt, Ihren Zeiten und Ihren
                Anforderungen.
              </p>
            </article>
            <article className="process-card reveal">
              <h3>Planen</h3>
              <p>
                Wir stimmen Umfang, Intervalle und ein passendes Team mit Ihnen
                ab.
              </p>
            </article>
            <article className="process-card reveal">
              <h3>Starten</h3>
              <p>
                Unser Team beginnt strukturiert und hält die vereinbarten
                Abläufe ein.
              </p>
            </article>
            <article className="process-card reveal">
              <h3>Betreuen</h3>
              <p>
                Eine feste Ansprechperson begleitet Sie auch nach dem Start.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="section detail-contact">
        <div className="container contact-shell reveal">
          <div className="contact-copy">
            <span className="eyebrow">Jetzt beraten lassen</span>
            <h2>Sauber geplant. Zuverlässig umgesetzt.</h2>
            <p>
              Schreiben Sie uns kurz, was Sie benötigen. Wir melden uns mit
              einer passenden Lösung für Ihr Objekt.
            </p>
          </div>
          <ContactForm compact />
        </div>
      </section>
    </main>
  );
}
