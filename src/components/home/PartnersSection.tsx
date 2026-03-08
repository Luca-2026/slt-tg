import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const partners = [
  { name: "Crestron", logo: "/assets/partners/crestron.svg", url: "https://www.crestron.com", hasLogo: true },
  { name: "Q-Sys", logo: "/assets/partners/qsys.jpg", url: "https://www.qsys.com", hasLogo: true },
  { name: "Shure", logo: "/assets/partners/shure.svg", url: "https://www.shure.com", hasLogo: true },
  { name: "Sennheiser", logo: "/assets/partners/sennheiser.svg", url: "https://www.sennheiser.com", hasLogo: true },
  { name: "Nureva", logo: "/assets/partners/nureva.png", url: "https://www.nureva.com", hasLogo: true },
  { name: "Barco", logo: "/assets/partners/barco.png", url: "https://www.barco.com", hasLogo: true },
  { name: "Yealink", logo: "/assets/partners/yealink.png", url: "https://www.yealink.com", hasLogo: true },
  { name: "Lightware", logo: "/assets/partners/lightware.jpg", url: "https://www.lightware.com", hasLogo: true },
  { name: "Purelink", logo: "/assets/partners/purelink.png", url: "https://www.purelink.de", hasLogo: true },
  { name: "Iiyama", logo: "/assets/partners/iiyama.png", url: "https://www.iiyama.com", hasLogo: true },
  { name: "Samsung", logo: "/assets/partners/samsung.png", url: "https://www.samsung.com", hasLogo: true },
  { name: "AVer", logo: "/assets/partners/aver.jpg", url: "https://www.aver.com", hasLogo: true },
  { name: "Huddly", logo: "/assets/partners/huddly.png", url: "https://www.huddly.com", hasLogo: true },
  { name: "Ubiquiti", logo: "/assets/partners/ubiquiti.png", url: "https://www.ui.com", hasLogo: true },
];

export function PartnersSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();
  const { ref: noteRef, isVisible: noteVisible } = useScrollAnimation();

  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="section-container">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-12 scroll-hidden-blur ${
            headerVisible ? "scroll-visible-blur" : ""
          }`}
        >
          <Badge variant="outline" className="mb-6">
            <Award className="h-3 w-3 mr-1" />
            Zertifizierter Partner
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Unsere Technologiepartner
          </h2>
          <p className="text-lg text-muted-foreground">
            Wir arbeiten mit führenden Herstellern der AV/UC-Branche zusammen und verfügen 
            über Direktkontakte sowie offizielle Zertifizierungen. Das bedeutet für Sie: 
            Schneller Support, fundierte Beratung und Zugang zu den neuesten Technologien.
          </p>
        </div>

        {/* Partners Grid */}
        <div ref={gridRef} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-6">
          {partners.map((partner, index) => (
            <a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative bg-background rounded-xl border border-border p-4 lg:p-6 flex items-center justify-center min-h-[88px] lg:min-h-[110px] card-hover scroll-hidden-scale ${
                gridVisible ? "scroll-visible-scale" : ""
              }`}
              style={{ transitionDelay: `${index * 0.05}s` }}
              aria-label={`${partner.name} Website öffnen`}
            >
              {partner.hasLogo && partner.logo ? (
                <div className="w-full h-12 lg:h-14 flex items-center justify-center">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} Logo`}
                    loading="lazy"
                    decoding="async"
                    className={`h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.02] ${
                      partner.name === "Huddly" ? "invert" : ""
                    }`}
                  />
                </div>
              ) : (
                <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                  {partner.name}
                </span>
              )}
            </a>
          ))}
        </div>

        {/* Certification Note */}
        <div 
          ref={noteRef}
          className={`mt-12 text-center scroll-hidden ${
            noteVisible ? "scroll-visible" : ""
          }`}
        >
          <p className="text-sm text-muted-foreground">
            <Award className="h-4 w-4 inline-block mr-1 text-primary" />
            Zertifiziert und autorisierter Partner für alle aufgeführten Hersteller
          </p>
        </div>
      </div>
    </section>
  );
}
