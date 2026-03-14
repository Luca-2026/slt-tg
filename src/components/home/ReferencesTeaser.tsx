import { useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, Users, Monitor } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const allReferences = [
  {
    id: "aluminium-norf",
    company: "Aluminium Norf GmbH",
    category: "Boardroom & Schulung",
    description: "Ausbau von zwei Räumen zu modernen Videokonferenz- und Schulungsumgebungen mit Shure, Nureva und AVer Tracking-Kameras.",
    icon: Building2,
    tags: ["Shure", "Nureva", "AVer Tracking"],
    image: "/assets/projects/alunorf/alunorf-main.jpg",
  },
  {
    id: "pfeifer-langen",
    company: "Pfeifer & Langen",
    category: "Multi-Room Rollout",
    description: "Standardisierte Ausstattung von über 20 Konferenzräumen inklusive einer 136\" LED-Wall für das Management.",
    icon: Monitor,
    tags: ["20+ Räume", "LED-Wall", "Standardisierung"],
    image: "/assets/projects/pfeifer-langen/pl-main.jpg",
  },
  {
    id: "gea-farm",
    company: "GEA Farm Technologies",
    category: "Besprechungsräume",
    description: "Management Room und drei weitere Besprechungsräume mit Huddly-Kameras, Nureva, Iiyama und Barco ClickShare.",
    icon: Users,
    tags: ["Huddly L1", "Nureva", "Barco ClickShare"],
    image: "/assets/projects/gea-farm/gea-display-wall.jpg",
  },
  {
    id: "bensersiel",
    company: "Tourismus Information Bensersiel",
    category: "Digital-Signage (interaktiv)",
    description: "Interaktives Digital-Signage mit Samsung QMC Displays und 105\" Iiyama Ultra Wide Touchdisplay für Gästeinformation.",
    icon: Monitor,
    tags: ["Samsung QMC", "Touchdisplay", "Connect Signage"],
    image: "/assets/projects/bensersiel/bensersiel-main.jpg",
  },
  {
    id: "sonoco",
    company: "Sonoco",
    category: "WiFi & Netzwerk",
    description: "Komplette WiFi-Infrastruktur mit EKAHAU-Ausleuchtung, Cat-7-Verkabelung und Cisco Meraki – im laufenden 24/7 Betrieb.",
    icon: Building2,
    tags: ["Cisco Meraki", "EKAHAU", "Cat 7"],
    image: "/assets/projects/sonoco/sonoco-ekahau.jpg",
  },
];

function shuffleArray<T>(arr: T[]): T[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function ReferencesTeaser() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  return (
    <section className="py-20 lg:py-28">
      <div className="section-container">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 scroll-hidden-blur ${
            headerVisible ? "scroll-visible-blur" : ""
          }`}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Ausgewählte Referenzen
          </h2>
          <p className="text-lg text-muted-foreground">
            Ein Auszug aus unseren realisierten Projekten – von Boardrooms bis Multi-Room-Rollouts.
          </p>
        </div>

        {/* References Grid */}
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {references.map((ref, index) => (
            <Link
              key={ref.id}
              to={`/projekte#${ref.id}`}
              className="block"
            >
              <Card
                className={`group bg-card border-border card-hover overflow-hidden h-full cursor-pointer scroll-hidden-left ${
                  cardsVisible ? "scroll-visible-x" : ""
                }`}
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                {/* Image */}
                <div className="aspect-video bg-secondary flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent z-10" />
                  {ref.image ? (
                    <img 
                      src={ref.image} 
                      alt={`${ref.company} Referenzprojekt: ${ref.category} - ${ref.description.substring(0, 60)}...`}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <ref.icon className="h-16 w-16 text-muted-foreground/30" aria-hidden="true" />
                  )}
                  <div className="absolute top-3 left-3 z-20">
                    <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                      {ref.category}
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {ref.company}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {ref.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {ref.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div 
          ref={ctaRef}
          className={`text-center mt-12 scroll-hidden-scale ${
            ctaVisible ? "scroll-visible-scale" : ""
          }`}
        >
          <Button asChild size="lg">
            <Link to="/projekte">
              Alle Projekte ansehen
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
