import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata = { title: "Kontakt", description: "Kontaktieren Sie die Ö&I CLEAN group GmbH für ein unverbindliches Angebot." };

export default function ContactPage() {
  return <main>
    <section className="page-hero"><img className="page-hero-image" src="/assets/home-cleaning.jpg" alt="Saubere und gepflegte Räumlichkeiten" /><div className="container page-hero-content reveal"><div className="breadcrumb"><Link href="/">Startseite</Link><span>/</span><span>Kontakt</span></div><span className="eyebrow">Wir sind für Sie da</span><h1>Gemeinsam finden wir die passende Lösung</h1><p>Erzählen Sie uns von Ihrem Objekt und Ihren Anforderungen. Wir beraten Sie persönlich, transparent und unverbindlich.</p></div></section>
    <section className="section contact-page" id="anfrage"><div className="container contact-page-grid"><div className="contact-panel reveal"><span className="eyebrow dark">Direkter Kontakt</span><h2>Wie können wir helfen?</h2><p>Ob regelmäßige Reinigung, einmaliger Einsatz oder individuelles Gebäudemanagement – wir freuen uns auf Ihre Anfrage.</p><div className="contact-detail-list"><a className="contact-detail" href="tel:+4973615561144"><span>☎</span><div><small>Telefon</small><strong>+49 7361 556 11 44</strong></div></a><a className="contact-detail" href="mailto:info@oi-clean-group.de"><span>✉</span><div><small>E-Mail</small><strong>info@oi-clean-group.de</strong></div></a><div className="contact-detail"><span>◷</span><div><small>Erreichbarkeit</small><strong>Mo–Fr: 08:00–17:00</strong></div></div></div></div><ContactForm /></div></section>
    <section className="cta-band"><div className="container reveal"><div><h2>Lieber direkt sprechen?</h2><p>Rufen Sie uns an – wir nehmen uns Zeit für Ihre Fragen.</p></div><a className="button" href="tel:+4973615561144">+49 7361 556 11 44</a></div></section>
  </main>;
}
