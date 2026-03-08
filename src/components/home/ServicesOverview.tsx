import { Link } from "react-router-dom";
import { Wrench, FileText, Monitor, ArrowRight, Headphones, Lightbulb } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: Lightbulb,
    title: "Konzeption & Beratung",
    description:
      "Bedarfsgerechte Konzepte und Planungen für Ihre Konferenzräume und Meeting Spaces. Wir beraten herstellerunabhängig.",
    features: ["Bedarfsanalyse", "Raumkonzepte", "Wirtschaftlichkeitsbetrachtung"],
    link: "/leistungen#konzeption",
  },
  {
    icon: FileText,
    title: "Fachplanung & Ausschreibung",
    description:
      "Herstellerneutrale Leistungsverzeichnisse, objektive Bewertungskriterien und professionelle Vergabebegleitung.",
    features: ["Leistungsverzeichnisse", "Bewertungsmatrizen", "Vergabebegleitung"],
    link: "/leistungen#fachplanung",
  },
  {
    icon: Wrench,
    title: "Installation & Integration",
    description:
      "Professionelle Installation und Inbetriebnahme Ihrer AV- und IT-Systeme. Nahtlose Integration in Ihre bestehende Infrastruktur.",
    features: ["Montage & Verkabelung", "IT-Integration", "IT-Infrastruktur & Netzwerk"],
    link: "/leistungen#integration",
  },
  {
    icon: Headphones,
    title: "Service & Support",
    description:
      "Zuverlässiger After-Sales Support, proaktives Monitoring und strukturierte Serviceprozesse nach ITIL v4.",
    features: ["Service Desk", "Managed Rooms", "Wartung & Updates"],
    link: "/leistungen#service",
  },
];

export function ServicesOverview() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  return (
    <section className="py-20 lg:py-28">
      <div className="section-container">
        <div 
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 scroll-hidden-blur ${
            headerVisible ? "scroll-visible-blur" : ""
          }`}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Unsere Leistungen
          </h2>
          <p className="text-lg text-muted-foreground">
            Von der Planung über die Installation bis zum laufenden Betrieb – 
            wir begleiten Ihr Projekt in allen Phasen.
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={service.link}
              className={`block group scroll-hidden ${
                cardsVisible ? "scroll-visible" : ""
              }`}
              style={{ transitionDelay: `${index * 0.12}s` }}
            >
              <Card className="bg-card border-border card-hover h-full hover:border-primary/30 transition-colors">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <span className="text-xs text-primary inline-flex items-center gap-1">
                    Mehr erfahren <ArrowRight className="h-3 w-3" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div 
          ref={ctaRef}
          className={`text-center mt-12 scroll-hidden-scale ${
            ctaVisible ? "scroll-visible-scale" : ""
          }`}
        >
          <Button asChild variant="outline" size="lg">
            <Link to="/leistungen">
              Alle Leistungen im Detail
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
