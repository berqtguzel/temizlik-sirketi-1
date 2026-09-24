import "../styles.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CookieBanner from "@/components/CookieBanner";
import RevealEffects from "@/components/RevealEffects";
import WhatsAppButton from "@/components/WhatsAppButton";
import { siteUrl } from "@/lib/siteConfig";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ö&I CLEAN group GmbH",
    template: "%s | Ö&I CLEAN group GmbH",
  },
  description:
    "Professionelle Hotel-, Gebäude-, Unterhalts- und Industriereinigung seit 1997. Ö&I CLEAN group ist deutschlandweit für Unternehmen, Hotels und Immobilien da.",
  keywords: [
    "Hotelreinigung",
    "Gebäudereinigung",
    "Unterhaltsreinigung",
    "Industriereinigung",
    "Housekeeping",
    "Reinigungsfirma Deutschland",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Ö&I CLEAN group GmbH",
    title: "Ö&I CLEAN group GmbH",
    description:
      "Professionelle Reinigungs- und Gebäudedienstleistungen seit 1997.",
    url: siteUrl,
    images: [
      {
        url: "/assets/home-cleaning.jpg",
        width: 1200,
        height: 800,
        alt: "Professionelle Reinigung von Ö&I CLEAN",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ö&I CLEAN group GmbH",
    description:
      "Professionelle Reinigungs- und Gebäudedienstleistungen seit 1997.",
    images: ["/assets/home-cleaning.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: { icon: "/assets/favicon.webp" },
};

export const viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({ children }) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body id="top">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Ö&I CLEAN group GmbH",
              url: siteUrl,
              logo: `${siteUrl}/assets/favicon.webp`,
              telephone: "+49 7361 556 11 44",
              email: "info@oi-clean-group.de",
              areaServed: "DE",
              sameAs: [],
            }),
          }}
        />
        <SiteHeader />
        {children}
        <SiteFooter />
        <WhatsAppButton />
        <CookieBanner />
        <RevealEffects />
      </body>
    </html>
  );
}
