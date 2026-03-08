import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import sltLogo from "@/assets/slt-logo.png";

const footerLinks = {
  leistungen: [
    { name: "Installation & Integration", href: "/leistungen#integration" },
    { name: "Fachplanung & Beratung", href: "/leistungen#konzeption" },
    { name: "Ausschreibung & Vergabe", href: "/leistungen#fachplanung" },
    { name: "Service & Betrieb", href: "/leistungen#service" },
    { name: "Finanzierung", href: "/finanzierung" },
  ],
  loesungen: [
    { name: "Konferenzräume", href: "/loesungen#konferenzraum-detail" },
    { name: "Auditorien", href: "/loesungen#auditorium-detail" },
    { name: "Schulungsräume", href: "/loesungen#bildung-detail" },
    { name: "Digital Signage", href: "/loesungen#empfang-detail" },
    { name: "Technologien", href: "/technologien" },
  ],
  navigation: [
    { name: "Projekte", href: "/projekte" },
    { name: "Über uns", href: "/ueber-uns" },
    { name: "News", href: "/news" },
    { name: "Kontakt", href: "/kontakt" },
    { name: "Impressum", href: "/impressum" },
    { name: "Datenschutz", href: "/datenschutz" },
  ],
  standorte: [
    { name: "Medientechnik Krefeld", href: "/medientechnik/krefeld" },
    { name: "Medientechnik Düsseldorf", href: "/medientechnik/duesseldorf" },
    { name: "Medientechnik Köln", href: "/medientechnik/koeln" },
    { name: "Medientechnik Bonn", href: "/medientechnik/bonn" },
    { name: "Medientechnik Essen", href: "/medientechnik/essen" },
    { name: "Medientechnik Duisburg", href: "/medientechnik/duisburg" },
    { name: "Medientechnik Mönchengladbach", href: "/medientechnik/moenchengladbach" },
    { name: "Konferenztechnik NRW", href: "/konferenztechnik/nrw" },
    { name: "IT-Infrastruktur NRW", href: "/it-infrastruktur/nrw" },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="section-container py-10 lg:py-12">
        {/* Top: Logo + Contact inline */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8 pb-8 border-b border-primary-foreground/20">
          <Link to="/" className="inline-block">
            <img src={sltLogo} alt="SLT Technology Group" className="h-16 lg:h-20 w-auto brightness-0 invert" />
          </Link>
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-primary-foreground/70">
            <a href="tel:+4921514179902" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="h-4 w-4" />
              +49 (0) 2151 - 417 99 02
            </a>
            <a href="mailto:info@slt-tg.de" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail className="h-4 w-4" />
              info@slt-tg.de
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Anrather Str. 291, 47807 Krefeld
            </span>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 mb-8">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider mb-3 text-primary-foreground/90">Leistungen</h3>
            <ul className="space-y-1.5">
              {footerLinks.leistungen.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-xs text-primary-foreground/60 hover:text-accent transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider mb-3 text-primary-foreground/90">Lösungen</h3>
            <ul className="space-y-1.5">
              {footerLinks.loesungen.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-xs text-primary-foreground/60 hover:text-accent transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider mb-3 text-primary-foreground/90">Unternehmen</h3>
            <ul className="space-y-1.5">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-xs text-primary-foreground/60 hover:text-accent transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider mb-3 text-primary-foreground/90">Standorte & Regionen</h3>
            <ul className="space-y-1.5">
              {footerLinks.standorte.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-xs text-primary-foreground/60 hover:text-accent transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-primary-foreground/20">
          <p className="text-center text-xs text-primary-foreground/50">
            © {currentYear} SLT Technology Group GmbH & Co. KG. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
