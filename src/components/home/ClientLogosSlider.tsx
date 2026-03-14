import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Badge } from "@/components/ui/badge";
import { Building2 } from "lucide-react";

const clients = [
  { name: "TomTom", logo: "/assets/clients/tomtom.jpg", url: "https://www.tomtom.com" },
  { name: "Rheinhotel Dreesen", logo: "/assets/clients/rheinhotel-dreesen.png", url: "https://www.rheinhoteldreesen.de" },
  { name: "Langeoog Tourismus", logo: "/assets/clients/langeoog.png", url: "https://www.langeoog.de" },
  { name: "Rhenus Lub", logo: "/assets/clients/rhenus.webp", url: "https://www.rhenuslub.de" },
  { name: "Bank-Verlag", logo: "/assets/clients/bank-verlag.svg", url: "https://www.bank-verlag.de" },
  { name: "Montaplast", logo: "/assets/clients/montaplast.png", url: "https://www.montaplast.com" },
  { name: "GEA", logo: "/assets/clients/gea.png", url: "https://www.gea.com" },
  { name: "Pfeifer & Langen", logo: "/assets/clients/pfeifer-langen.svg", url: "https://www.pfeifer-langen.com" },
];

// Duplicate for seamless infinite scroll
const duplicatedClients = [...clients, ...clients];

export function ClientLogosSlider() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  return (
    <section className="py-16 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headerRef}
          className={`text-center mb-10 scroll-hidden-blur ${
            headerVisible ? "scroll-visible-blur" : ""
          }`}
        >
          <Badge variant="outline" className="mb-4">
            <Building2 className="h-3 w-3 mr-1" />
            Unsere Kunden
          </Badge>
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
            Vertrauen führender Unternehmen
          </h2>
        </div>
      </div>

      {/* Infinite scroll slider */}
      <div className="relative"
        onTouchStart={(e) => {
          const el = e.currentTarget.querySelector('.animate-scroll-logos') as HTMLElement;
          if (el) el.style.animationPlayState = 'paused';
        }}
        onTouchEnd={(e) => {
          const el = e.currentTarget.querySelector('.animate-scroll-logos') as HTMLElement;
          if (el) setTimeout(() => { el.style.animationPlayState = ''; }, 2000);
        }}
      >
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-muted/30 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-muted/30 to-transparent z-10 pointer-events-none" />

        <div className="overflow-x-auto scrollbar-hide touch-pan-x">
          <div className="flex animate-scroll-logos w-max">
            {duplicatedClients.map((client, index) => (
              <a
                key={`${client.name}-${index}`}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 mx-6 lg:mx-10 flex items-center justify-center group"
                aria-label={`${client.name} Website öffnen`}
              >
                <div className="w-32 h-16 lg:w-40 lg:h-20 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-all duration-500">
                  <img
                    src={client.logo}
                    alt={`${client.name} Logo`}
                    loading="lazy"
                    decoding="async"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
