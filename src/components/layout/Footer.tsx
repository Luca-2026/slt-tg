import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import sltLogo from "@/assets/slt-logo.png";

const footerLinks = {
  leistungen: [
    { name: "Installation & Integration", href: "/leistungen#integration" },
    { name: "Fachplanung & Beratung", href: "/leistungen#konzeption" },
    { name: "Service & Betrieb", href: "/leistungen#service" },
    { name: "Finanzierung", href: "/finanzierung" },
  ],
  loesungen: [
    { name: "Konferenzräume", href: "/loesungen#konferenzraum-detail" },
    { name: "Auditorien", href: "/loesungen#auditorium-detail" },
    { name: "Digital Signage", href: "/loesungen#empfang-detail" },
    { name: "Technologien", href: "/technologien" },
  ],
  unternehmen: [
    { name: "Projekte", href: "/projekte" },
    { name: "Über uns", href: "/ueber-uns" },
    { name: "News", href: "/news" },
    { name: "Kontakt", href: "/kontakt" },
  ],
  regionen: [
    { name: "Krefeld", href: "/medientechnik/krefeld" },
    { name: "Düsseldorf", href: "/medientechnik/duesseldorf" },
    { name: "Köln", href: "/medientechnik/koeln" },
    { name: "Bonn", href: "/medientechnik/bonn" },
    { name: "Essen", href: "/medientechnik/essen" },
    { name: "Duisburg", href: "/medientechnik/duisburg" },
    { name: "Mönchengladbach", href: "/medientechnik/moenchengladbach" },
    { name: "Konferenztechnik NRW", href: "/konferenztechnik/nrw" },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="section-container py-6 lg:py-8">
        {/* Main row: Logo + Links + Standorte — all compact */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:items-start mb-5">
          {/* Logo + Contact */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <Link to="/">
              <img src={sltLogo} alt="SLT Technology Group" className="h-36 lg:h-44 w-auto brightness-0 invert" />
            </Link>
            <div className="flex flex-col gap-1 text-[11px] text-primary-foreground/60">
              <a href="tel:+4921514179902" className="flex items-center gap-1.5 hover:text-accent transition-colors">
                <Phone className="h-3 w-3 flex-shrink-0" /> +49 (0) 2151 - 417 99 02
              </a>
              <a href="mailto:info@slt-tg.de" className="flex items-center gap-1.5 hover:text-accent transition-colors">
                <Mail className="h-3 w-3 flex-shrink-0" /> info@slt-tg.de
              </a>
            </div>
          </div>

          {/* Link columns */}
          <div className="md:col-span-5 grid grid-cols-3 gap-4">
            <div>
              <h3 className="text-[10px] font-semibold uppercase tracking-wider mb-1.5 text-primary-foreground/70">Leistungen</h3>
              <ul className="space-y-0.5">
                {footerLinks.leistungen.map((l) => (
                  <li key={l.name}><Link to={l.href} className="text-[11px] text-primary-foreground/50 hover:text-accent transition-colors leading-tight">{l.name}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-[10px] font-semibold uppercase tracking-wider mb-1.5 text-primary-foreground/70">Lösungen</h3>
              <ul className="space-y-0.5">
                {footerLinks.loesungen.map((l) => (
                  <li key={l.name}><Link to={l.href} className="text-[11px] text-primary-foreground/50 hover:text-accent transition-colors leading-tight">{l.name}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-[10px] font-semibold uppercase tracking-wider mb-1.5 text-primary-foreground/70">Unternehmen</h3>
              <ul className="space-y-0.5">
                {footerLinks.unternehmen.map((l) => (
                  <li key={l.name}><Link to={l.href} className="text-[11px] text-primary-foreground/50 hover:text-accent transition-colors leading-tight">{l.name}</Link></li>
                ))}
              </ul>
            </div>
          </div>

          {/* Standorte */}
          <div className="md:col-span-4">
            <h3 className="text-[10px] font-semibold uppercase tracking-wider mb-1.5 text-primary-foreground/70">Standorte & Regionen</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 mb-3">
              <div className="flex items-start gap-1.5">
                <MapPin className="h-3 w-3 text-accent flex-shrink-0 mt-0.5" />
                <div className="text-[11px] text-primary-foreground/60 leading-tight">
                  <span className="font-medium text-primary-foreground/75">Krefeld</span><br />
                  Anrather Str. 291, 47807
                </div>
              </div>
              <div className="flex items-start gap-1.5">
                <MapPin className="h-3 w-3 text-accent flex-shrink-0 mt-0.5" />
                <div className="text-[11px] text-primary-foreground/60 leading-tight">
                  <span className="font-medium text-primary-foreground/75">Bonn</span><br />
                  Drachenburgstr. 8, 53179
                </div>
              </div>
            </div>
            <ul className="flex flex-wrap gap-x-3 gap-y-0.5">
              {footerLinks.regionen.map((l) => (
                <li key={l.name}><Link to={l.href} className="text-[10px] text-primary-foreground/45 hover:text-accent transition-colors">{l.name}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-3 border-t border-primary-foreground/10 flex flex-col sm:flex-row sm:justify-between gap-1">
          <p className="text-[10px] text-primary-foreground/35">
            © {currentYear} SLT Technology Group GmbH & Co. KG
          </p>
          <div className="flex gap-4">
            <Link to="/impressum" className="text-[10px] text-primary-foreground/35 hover:text-accent transition-colors">Impressum</Link>
            <Link to="/datenschutz" className="text-[10px] text-primary-foreground/35 hover:text-accent transition-colors">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
