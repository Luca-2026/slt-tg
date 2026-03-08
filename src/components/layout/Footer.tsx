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
  standorte: [
    { name: "Krefeld", href: "/medientechnik/krefeld" },
    { name: "Düsseldorf", href: "/medientechnik/duesseldorf" },
    { name: "Köln", href: "/medientechnik/koeln" },
    { name: "Bonn", href: "/medientechnik/bonn" },
    { name: "Essen", href: "/medientechnik/essen" },
    { name: "Duisburg", href: "/medientechnik/duisburg" },
    { name: "Mönchengladbach", href: "/medientechnik/moenchengladbach" },
    { name: "Konferenztechnik NRW", href: "/konferenztechnik/nrw" },
    { name: "IT-Infrastruktur NRW", href: "/it-infrastruktur/nrw" },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="section-container py-8 lg:py-10">
        {/* Top row: Logo + Contact */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6 pb-6 border-b border-primary-foreground/15">
          <Link to="/">
            <img src={sltLogo} alt="SLT Technology Group" className="h-24 lg:h-32 w-auto brightness-0 invert" />
          </Link>
          <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-primary-foreground/70">
            <a href="tel:+4921514179902" className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <Phone className="h-3.5 w-3.5" /> +49 (0) 2151 - 417 99 02
            </a>
            <a href="mailto:info@slt-tg.de" className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <Mail className="h-3.5 w-3.5" /> info@slt-tg.de
            </a>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" /> Anrather Str. 291, 47807 Krefeld
            </span>
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 lg:gap-6 mb-6">
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-wider mb-2 text-primary-foreground/80">Leistungen</h3>
            <ul className="space-y-1">
              {footerLinks.leistungen.map((l) => (
                <li key={l.name}><Link to={l.href} className="text-[11px] text-primary-foreground/55 hover:text-accent transition-colors">{l.name}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-wider mb-2 text-primary-foreground/80">Lösungen</h3>
            <ul className="space-y-1">
              {footerLinks.loesungen.map((l) => (
                <li key={l.name}><Link to={l.href} className="text-[11px] text-primary-foreground/55 hover:text-accent transition-colors">{l.name}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-wider mb-2 text-primary-foreground/80">Unternehmen</h3>
            <ul className="space-y-1">
              {footerLinks.unternehmen.map((l) => (
                <li key={l.name}><Link to={l.href} className="text-[11px] text-primary-foreground/55 hover:text-accent transition-colors">{l.name}</Link></li>
              ))}
            </ul>
          </div>
          <div className="col-span-2">
            <h3 className="text-[11px] font-semibold uppercase tracking-wider mb-2 text-primary-foreground/80">Standorte</h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-1">
              {footerLinks.standorte.map((l) => (
                <li key={l.name}><Link to={l.href} className="text-[11px] text-primary-foreground/55 hover:text-accent transition-colors">{l.name}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-4 border-t border-primary-foreground/15 flex flex-col sm:flex-row sm:justify-between gap-2">
          <p className="text-[10px] text-primary-foreground/40">
            © {currentYear} SLT Technology Group GmbH & Co. KG
          </p>
          <div className="flex gap-4">
            <Link to="/impressum" className="text-[10px] text-primary-foreground/40 hover:text-accent transition-colors">Impressum</Link>
            <Link to="/datenschutz" className="text-[10px] text-primary-foreground/40 hover:text-accent transition-colors">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
