import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const partners = [
  { name: "Crestron", logo: "/assets/partners/crestron.svg", url: "https://www.crestron.com" },
  { name: "Q-Sys", logo: "/assets/partners/qsys.jpg", url: "https://www.qsys.com" },
  { name: "Shure", logo: "/assets/partners/shure.svg", url: "https://www.shure.com" },
  { name: "Sennheiser", logo: "/assets/partners/sennheiser.svg", url: "https://www.sennheiser.com" },
  { name: "Nureva", logo: "/assets/partners/nureva.png", url: "https://www.nureva.com" },
  { name: "Barco", logo: "/assets/partners/barco.png", url: "https://www.barco.com" },
  { name: "Yealink", logo: "/assets/partners/yealink.png", url: "https://www.yealink.com" },
  { name: "Lightware", logo: "/assets/partners/lightware.jpg", url: "https://www.lightware.com" },
  { name: "Purelink", logo: "/assets/partners/purelink.png", url: "https://www.purelink.de" },
  { name: "Iiyama", logo: "/assets/partners/iiyama.png", url: "https://www.iiyama.com" },
  { name: "Samsung", logo: "/assets/partners/samsung.png", url: "https://www.samsung.com" },
  { name: "AVer", logo: "/assets/partners/aver.jpg", url: "https://www.aver.com" },
  { name: "Huddly", logo: "/assets/partners/huddly-premier.png", url: "https://www.huddly.com" },
  { name: "Ubiquiti", logo: "/assets/partners/ubiquiti.png", url: "https://www.ui.com" },
  { name: "Connect Signage", logo: "/assets/partners/connect-signage.svg", url: "https://www.connectsignage.com" },
];

const duplicatedPartners = [...partners, ...partners];

export function PartnersSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: noteRef, isVisible: noteVisible } = useScrollAnimation();

  return (
    <section className="py-20 lg:py-28 bg-card overflow-hidden">
      <div className="section-container">
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
      </div>

      {/* Infinite scroll slider */}
      <div className="relative"
        onTouchStart={(e) => {
          const el = e.currentTarget.querySelector('.animate-scroll-logos-slow') as HTMLElement;
          if (el) el.style.animationPlayState = 'paused';
        }}
        onTouchEnd={(e) => {
          const el = e.currentTarget.querySelector('.animate-scroll-logos-slow') as HTMLElement;
          if (el) setTimeout(() => { el.style.animationPlayState = ''; }, 2000);
        }}
      >
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-card to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-card to-transparent z-10 pointer-events-none" />

        <div className="overflow-hidden">
          <div className="flex animate-scroll-logos-slow w-max">
            {duplicatedPartners.map((partner, index) => (
              <a
                key={`${partner.name}-${index}`}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 mx-6 lg:mx-10 flex items-center justify-center group"
                aria-label={`${partner.name} Website öffnen`}
              >
                <div className="w-28 h-14 lg:w-36 lg:h-16 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-all duration-500">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} Logo`}
                    loading="lazy"
                    decoding="async"
                    className={`max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.05] ${
                      (partner as any).invert ? "invert" : ""
                    }`}
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="section-container">
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
