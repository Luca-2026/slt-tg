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
  ],
  navigation: [
    { name: "Startseite", href: "/" },
    { name: "Technologien", href: "/technologien" },
    { name: "Projekte", href: "/projekte" },
    { name: "News", href: "/news" },
    { name: "Über uns", href: "/ueber-uns" },
    { name: "Kontakt", href: "/kontakt" },
  ],
  legal: [
    { name: "Impressum", href: "/impressum" },
    { name: "Datenschutz", href: "/datenschutz" },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="section-container py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img src={sltLogo} alt="SLT Technology Group" className="h-10 w-auto" />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Ihr Partner für die Installation & Integration von
              Konferenz- und Medientechnik in Deutschland und Europa.
            </p>
          </div>

          {/* Leistungen */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Leistungen
            </h3>
            <ul className="space-y-3">
              {footerLinks.leistungen.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Lösungen */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Lösungen
            </h3>
            <ul className="space-y-3">
              {footerLinks.loesungen.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Kontakt
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:+4921514179902" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="h-4 w-4" />
                  +49 (0) 2151 - 417 99 02
                </a>
              </li>
              <li>
                <a href="mailto:info@slt-tg.de" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="h-4 w-4" />
                  info@slt-tg.de
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>
                  Anrather Straße 291<br />
                  47807 Krefeld
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} SLT Technology Group GmbH & Co. KG. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
