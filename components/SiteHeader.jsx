"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  ["/", "Startseite"],
  ["/ueber-uns", "Über uns"],
  ["/leistungen", "Leistungen"],
  ["/kontakt", "Kontakt"],
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  function toggleTheme() {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("oi-theme", isDark ? "dark" : "light");
  }

  useEffect(() => {
    if (localStorage.getItem("oi-theme") === "dark")
      document.documentElement.classList.add("dark");
  }, []);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`}>
      <div className="nav-shell">
        <Link className="brand" href="/" aria-label="Ö&I CLEAN Startseite">
          <img
            className="brand-logo"
            src="/assets/logo.png"
            alt="Ö&I CLEAN group GmbH"
            width="190"
            height="58"
          />
        </Link>
        <nav className="desktop-nav" aria-label="Hauptnavigation">
          {links.map(([href, label]) => (
            <Link
              className={isActive(href) ? "active" : ""}
              href={href}
              key={href}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <button
            className="icon-button"
            onClick={toggleTheme}
            type="button"
            aria-label="Farbschema wechseln"
            title="Farbschema wechseln"
          >
            <span className="sun-icon">☀</span>
            <span className="moon-icon">☾</span>
          </button>
          <Link className="header-cta" href="/kontakt#anfrage">
            Termin vereinbaren
          </Link>
          <button
            className={`menu-button${menuOpen ? " active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            type="button"
            aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      <nav
        className={`mobile-nav${menuOpen ? " open" : ""}`}
        aria-label="Mobile Navigation"
      >
        {links.map(([href, label]) => (
          <Link href={href} key={href}>
            {label}
          </Link>
        ))}
        <Link className="mobile-cta" href="/kontakt#anfrage">
          Termin vereinbaren
        </Link>
      </nav>
    </header>
  );
}
