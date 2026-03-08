import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { 
  Lightbulb, 
  FileText, 
  Monitor, 
  ArrowRight,
  CheckCircle,
  ClipboardList,
  Scale,
  Users,
  Gauge,
  Headphones,
  Wrench,
  LineChart,
  Award
} from "lucide-react";

const services = [
  {
    id: "konzeption",
    icon: Lightbulb,
    title: "Konzeption & Beratung",
    subtitle: "Die Basis für erfolgreiche Projekte",
    step: "01",
    description:
      "Bevor Hardware bestellt wird, analysieren wir Ihre Anforderungen, entwickeln Nutzungsszenarien und prüfen die Wirtschaftlichkeit. So vermeiden Sie Fehlinvestitionen und erhalten genau die Lösung, die Sie brauchen.",
    deliverables: [
      { icon: ClipboardList, title: "Bedarfsanalyse", description: "Strukturierte Erfassung Ihrer Anforderungen und Nutzungsszenarien" },
      { icon: Scale, title: "Wirtschaftlichkeitsbetrachtung", description: "Kosten-Nutzen-Analyse verschiedener Lösungsansätze" },
      { icon: Monitor, title: "Testsysteme", description: "Praxistest ausgewählter Technologien vor der Entscheidung" },
      { icon: FileText, title: "Planungskonzept", description: "Dokumentiertes Konzept als Grundlage für die Umsetzung" },
    ],
  },
  {
    id: "fachplanung",
    icon: FileText,
    title: "Fachplanung & Ausschreibung",
    subtitle: "Herstellerneutral und fundiert",
    step: "02",
    description:
      "Wir erstellen detaillierte Leistungsverzeichnisse, entwickeln objektive Bewertungskriterien und begleiten Sie durch den gesamten Vergabeprozess. So erhalten Sie vergleichbare Angebote und eine fundierte Entscheidungsgrundlage.",
    deliverables: [
      { icon: FileText, title: "Leistungsverzeichnisse", description: "Detaillierte, herstellerneutrale Ausschreibungsunterlagen" },
      { icon: CheckCircle, title: "Bewertungsmatrizen", description: "Objektive Kriterien für die Angebotsvergleichbarkeit" },
      { icon: Users, title: "Vergabebegleitung", description: "Unterstützung bei Bietergesprächen und Angebotsauswertung" },
      { icon: ClipboardList, title: "Vergabeempfehlung", description: "Fundierte Empfehlung auf Basis der Bewertung" },
    ],
  },
  {
    id: "integration",
    icon: Wrench,
    title: "Installation & Integration",
    subtitle: "Technik, die zuverlässig funktioniert",
    step: "03",
    description:
      "Professionelle Montage, Verkabelung und Inbetriebnahme Ihrer AV- und IT-Systeme. Wir integrieren alle Komponenten nahtlos in Ihre bestehende IT-Infrastruktur – von der strukturierten Verkabelung bis zum Enterprise-WLAN.",
    deliverables: [
      { icon: Wrench, title: "Montage & Verkabelung", description: "Fachgerechte Installation aller Systemkomponenten" },
      { icon: Monitor, title: "Systemintegration", description: "Nahtlose Einbindung in Ihre bestehende IT-Infrastruktur" },
      { icon: Gauge, title: "Inbetriebnahme", description: "Konfiguration, Test und Abnahme aller Systeme" },
      { icon: Users, title: "Nutzerschulung", description: "Einweisung Ihrer Mitarbeiter in die neue Technik" },
    ],
  },
  {
    id: "service",
    icon: Headphones,
    title: "Service & Support",
    subtitle: "Zuverlässig im laufenden Betrieb",
    step: "04",
    description:
      "Die beste Technik bringt nichts, wenn sie nicht läuft. Wir sorgen für proaktives Monitoring, schnellen Support und regelmäßige Wartung – damit Ihre Systeme immer einsatzbereit sind. Dabei arbeiten wir nach ITIL v4 IT Service Management Standards.",
    deliverables: [
      { icon: Headphones, title: "Service Desk", description: "Direkter Ansprechpartner für Ihre Nutzer bei Störungen" },
      { icon: Gauge, title: "Proaktives Monitoring", description: "24/7 Systemüberwachung mit Alarmierung bei Problemen" },
      { icon: LineChart, title: "Managed Rooms", description: "Regelmäßige Analyse und Optimierungsempfehlungen" },
      { icon: Award, title: "ITIL v4 zertifiziert", description: "Strukturierte Serviceprozesse nach internationalem Standard" },
    ],
  },
];

function ServiceSection({ service, index }: { service: typeof services[0]; index: number }) {
  const { ref: sectionRef, isVisible } = useScrollAnimation();
  const isReversed = index % 2 === 1;

  return (
    <section
      id={service.id}
      className={`py-16 lg:py-24 ${index % 2 === 1 ? "bg-card/50" : ""}`}
    >
      <div className="section-container">
        <div
          ref={sectionRef}
          className={`grid lg:grid-cols-12 gap-8 lg:gap-12 items-center`}
        >
          {/* Service Info */}
          <div
            className={`lg:col-span-5 ${isReversed ? "lg:order-2" : ""} scroll-hidden-${isReversed ? "right" : "left"} ${
              isVisible ? "scroll-visible-x" : ""
            }`}
          >
            {/* Step number */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-5xl lg:text-6xl font-black text-primary/10 leading-none select-none">
                {service.step}
              </span>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
            </div>

            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
              {service.title}
            </h2>
            <p className="text-base text-primary font-medium mb-4">
              {service.subtitle}
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed text-sm lg:text-base">
              {service.description}
            </p>
            <Button asChild size="lg">
              <Link to="/projektanfrage">
                Projekt anfragen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Deliverables */}
          <div
            className={`lg:col-span-7 ${isReversed ? "lg:order-1" : ""} scroll-hidden-${isReversed ? "left" : "right"} ${
              isVisible ? "scroll-visible-x" : ""
            }`}
          >
            <div className="grid sm:grid-cols-2 gap-3 lg:gap-4">
              {service.deliverables.map((item, i) => (
                <Card
                  key={item.title}
                  className="bg-background/80 backdrop-blur-sm border-border/60 group hover:border-primary/30 hover:shadow-md transition-all duration-300 overflow-hidden"
                  style={{ transitionDelay: isVisible ? `${i * 80}ms` : "0ms" }}
                >
                  <CardHeader className="pb-2 p-4 lg:p-5 lg:pb-2">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-2 group-hover:bg-primary/15 transition-colors">
                      <item.icon className="h-4 w-4 text-primary" />
                    </div>
                    <CardTitle className="text-sm lg:text-base font-semibold break-words hyphens-auto leading-tight">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0 lg:p-5 lg:pt-0">
                    <CardDescription className="text-xs lg:text-sm break-words leading-relaxed">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const Leistungen = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.05 });
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  return (
    <Layout>
      <SEOHead
        title="Leistungen: AV-Fachplanung & Integration"
        description="Von der Konzeption bis zum Betrieb: Herstellerneutrale AV-Fachplanung, Installation und Integration von Medientechnik und IT-Infrastruktur. Jetzt beraten lassen!"
        keywords="AV-Fachplanung, IT-Lösungen, Ausschreibung Medientechnik, Fachplaner Konferenztechnik, IT-Infrastruktur, Medientechnik Consultant NRW"
        canonical="/leistungen"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "AV- & IT-Fachplanung und Integration",
          "provider": { "@type": "Organization", "name": "SLT Technology Group GmbH & Co. KG", "url": "https://www.slt-tg.de" },
          "description": "Herstellerneutrale AV- & IT-Fachplanung von der Konzeption über Ausschreibung bis zum Betrieb.",
          "areaServed": { "@type": "State", "name": "Nordrhein-Westfalen" },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Leistungen",
            "itemListElement": [
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Konzeption & Beratung" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Fachplanung & Ausschreibung" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Installation & Integration" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Service & Betrieb" } }
            ]
          }
        }}
      />

      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-primary/5 via-primary/3 to-background relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div
          ref={heroRef}
          className={`section-container relative z-10 scroll-hidden-blur ${heroVisible ? "scroll-visible-blur" : ""}`}
        >
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="outline" className="mb-6 animate-fade-in">
              Leistungsübersicht
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              AV-Fachplanung & Integration –{" "}
              <span className="text-primary">alle Leistungen</span>
            </h1>
            <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
              Von der ersten Idee bis zum laufenden Betrieb – wir begleiten Ihr Projekt 
              in allen Phasen mit Expertise und Leidenschaft für durchdachte Lösungen.
            </p>

            {/* Quick nav pills */}
            <div className="flex flex-wrap justify-center gap-2 mt-10">
              {services.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background/80 backdrop-blur-sm text-sm text-muted-foreground hover:border-primary/40 hover:text-primary transition-all duration-200"
                >
                  <s.icon className="h-3.5 w-3.5" />
                  {s.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Sections */}
      {services.map((service, sectionIndex) => (
        <ServiceSection key={service.id} service={service} index={sectionIndex} />
      ))}

      {/* Final CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary/10 via-background to-background relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        </div>
        <div
          ref={ctaRef}
          className={`section-container text-center relative z-10 scroll-hidden-scale ${ctaVisible ? "scroll-visible-scale" : ""}`}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Welches Leistungspaket passt zu Ihrem Projekt?
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Jedes Projekt ist individuell. Im kostenfreien Erstgespräch analysieren 
            wir gemeinsam, welche Leistungen Sie wirklich brauchen.
          </p>
          <Button asChild size="lg" className="btn-glow">
            <Link to="/projektanfrage">
              Unverbindlich anfragen
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Leistungen;
