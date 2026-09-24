import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import {
  highlights,
  homeProcessSteps,
  services,
  trustStats,
} from "@/data/siteData";

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/assets/home-cleaning.jpg"
        >
          <source src="/assets/header-video.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
        <div className="hero-content container reveal">
          <span className="eyebrow">Seit 1997 für Sie im Einsatz</span>
          <h1>Ihr zuverlässiger Partner für professionelle Hotelreinigung</h1>
          <p>
            Seit 1997 – alles aus einer Hand: Wir übernehmen sämtliche
            Reinigungsarten zuverlässig und professionell.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/leistungen">
              Unsere Services entdecken <span>→</span>
            </Link>
            <Link className="button button-glass" href="/kontakt">
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </section>
      <section className="trust-strip" aria-label="Unsere Qualitätsmerkmale">
        <div className="container trust-grid">
          {trustStats.map((stat) => (
            <div key={stat.value}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="section highlights">
        <div className="container">
          <div className="section-heading reveal">
            <span className="eyebrow dark">Stark in Deutschland</span>
            <h2>Qualität, die deutschlandweit überzeugt</h2>
            <p>
              Verlässliche Reinigungs- und Gebäudedienstleistungen mit klaren
              Standards, persönlicher Betreuung und flexibler Organisation.
            </p>
          </div>
          <div className="highlight-grid">
            {highlights.map((item, index) => (
              <article
                className="highlight-card reveal"
                style={{ transitionDelay: `${index * 70}ms` }}
                key={item.title}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading={index ? "lazy" : "eager"}
                  width="600"
                  height="375"
                />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section services">
        <div className="container">
          <div className="service-section-heading reveal">
            <div>
              <span className="eyebrow dark">Alles aus einer Hand</span>
              <h2>Dienstleistungen, die mitdenken</h2>
              <p>
                Vom Hotelzimmer bis zur Produktionsfläche: Wir verbinden
                gründliche Reinigung mit festen Abläufen und persönlicher
                Betreuung.
              </p>
            </div>
            <Link className="text-link" href="/leistungen">
              Alle Leistungen ansehen <span>↗</span>
            </Link>
          </div>
          <div className="service-grid">
            {services.slice(0, 8).map((item, index) => (
              <Link
                className="service-card reveal"
                href={`/leistungen/${item.id}`}
                style={{ transitionDelay: `${index * 45}ms` }}
                aria-label={`${item.title} – Details ansehen`}
                key={item.id}
              >
                <div className="service-card-image">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    width="600"
                    height="375"
                  />
                  <span className="service-card-index">0{index + 1}</span>
                </div>
                <div className="service-card-content">
                  <div className="service-card-meta">
                    <span>{index === 0 ? "Im Fokus" : "Leistung"}</span>
                    <span>{item.audience.split(" ").slice(-1)[0]}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <ul>
                    {item.benefits.slice(0, 1).map((benefit) => (
                      <li key={benefit}>{benefit}</li>
                    ))}
                  </ul>
                  <span className="service-link">
                    Details ansehen <span>→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section home-process">
        <div className="container">
          <div className="section-heading reveal">
            <span className="eyebrow dark">Unser Ablauf</span>
            <h2>Von der Anfrage bis zum sauberen Ergebnis</h2>
            <p>
              Sie bekommen eine klare Planung, ein eingespieltes Team und eine
              Ansprechperson, die erreichbar bleibt.
            </p>
          </div>
          <div className="home-process-grid">
            {homeProcessSteps.map((step) => (
              <article className="home-process-card reveal" key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <Link href={step.link}>
                  {step.linkLabel} <span>→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section contact">
        <div className="container contact-shell reveal">
          <div className="contact-copy">
            <span className="eyebrow">Unverbindlich anfragen</span>
            <h2>Kontaktieren Sie uns</h2>
            <p>
              Professionelle Reinigungsdienstleistungen für Ihr Unternehmen. Wir
              beraten Sie gerne individuell.
            </p>
            <div className="contact-links">
              <a href="tel:+4973615561144">
                <span>☎</span>
                <div>
                  <small>Telefon</small>
                  <strong>+49 7361 556 11 44</strong>
                </div>
              </a>
              <a href="mailto:info@oi-clean-group.de">
                <span>✉</span>
                <div>
                  <small>E-Mail</small>
                  <strong>info@oi-clean-group.de</strong>
                </div>
              </a>
            </div>
          </div>
          <ContactForm compact />
        </div>
      </section>
    </main>
  );
}
