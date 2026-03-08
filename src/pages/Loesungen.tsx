import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { 
  ArrowRight,
  Users,
  Video,
  Presentation,
  Building2,
  GraduationCap,
  Factory,
  Network,
  Eye,
  CheckCircle
} from "lucide-react";

const solutions = [
  {
    id: "konferenzraum",
    icon: Video,
    title: "Konferenzräume & Meeting-Spaces",
    subtitle: "Produktive Zusammenarbeit – vor Ort und remote",
    description: "Moderne Konferenzräume müssen hybride Meetings unterstützen, einfach zu bedienen sein und zuverlässig funktionieren. Wir planen und integrieren Lösungen für Microsoft Teams Rooms, Zoom Rooms oder BYOM-Konzepte (Bring Your Own Meeting).",
    features: [
      "Microsoft Teams Rooms & Zoom Rooms Integration",
      "BYOM-Lösungen für flexible Nutzung",
      "Hochwertige Audio-/Videoqualität",
      "Intuitive Touch-Steuerung",
      "Kabellose Präsentation (Barco ClickShare, etc.)",
      "Raumakustik-Optimierung"
    ],
    useCases: ["Huddle Rooms", "Mittlere Besprechungsräume", "Boardrooms", "Projektbüros"],
    image: "/assets/solutions/conference-room.jpg"
  },
  {
    id: "kollaboration",
    icon: Users,
    title: "Kollaborationsräume & Kreativzonen",
    subtitle: "Raum für Ideen und agiles Arbeiten",
    description: "Agile Teams brauchen flexible Räume, die spontane Zusammenarbeit fördern. Interaktive Displays, digitale Whiteboards und mobile Videokonferenzlösungen schaffen die technische Grundlage für kreative Prozesse.",
    features: [
      "Interaktive Displays & Digital Whiteboards",
      "Mobile Videokonferenz-Rollwagen",
      "Wireless Content Sharing",
      "Integration mit Microsoft 365 & Google Workspace",
      "Flexible Möblierung mit Medientechnik",
      "Einfache Spontan-Meetings ohne Buchung"
    ],
    useCases: ["Design Thinking Labs", "Scrum-Räume", "Brainstorming-Zonen", "Co-Working Spaces"],
    image: "/assets/solutions/collaboration-space.jpg"
  },
  {
    id: "auditorium",
    icon: Presentation,
    title: "Auditorien & Veranstaltungsräume",
    subtitle: "Professionelle Präsentationen vor großem Publikum",
    description: "Große Veranstaltungen erfordern professionelle Beschallung, hochauflösende Displays und zuverlässige Streaming-Lösungen. Wir planen Auditorien und Veranstaltungsräume, die sowohl Präsenz- als auch Hybrid-Events ermöglichen.",
    features: [
      "Professionelle Beschallungssysteme",
      "LED-Wände & großformatige Displays",
      "Livestreaming & Recording",
      "Dolmetschertechnik & Übersetzung",
      "Zentralisierte Mediensteuerung",
      "Barrierefreie Lösungen (Induktionsschleifen)"
    ],
    useCases: ["Hauptversammlungen", "Produktpräsentationen", "Mitarbeiter-Events", "Kongresse"],
    image: "/assets/solutions/auditorium.jpg"
  },
  {
    id: "empfang",
    icon: Building2,
    title: "Empfangsbereiche & Digital Signage",
    subtitle: "Der erste Eindruck zählt",
    description: "Digitale Begrüßungssysteme, Wegeleitsysteme und dynamische Informationsdisplays prägen den ersten Eindruck Ihres Unternehmens. Wir integrieren Digital-Signage-Lösungen, die informieren und beeindrucken.",
    features: [
      "Digitale Welcome-Screens",
      "Raumbuchungssysteme mit Türschildern",
      "Wegeleitsysteme & Orientierungshilfen",
      "Kennzahlen- & KPI-Displays",
      "Digitale Schwarze Bretter",
      "Corporate-Design-konforme Gestaltung"
    ],
    useCases: ["Empfangslobbys", "Wartebereiche", "Cafeterien", "Showrooms"],
    image: "/assets/solutions/langeoog-display.jpg"
  },
  {
    id: "bildung",
    icon: GraduationCap,
    title: "Bildung & Schulung",
    subtitle: "Moderne Lernumgebungen gestalten",
    description: "Bildungseinrichtungen und Schulungsräume erfordern besondere Lösungen: Einfache Bedienung für wechselnde Nutzer, robuste Technik und die Integration von eLearning-Plattformen.",
    features: [
      "Interaktive Displays für Unterricht",
      "Dokumentenkameras & Visualizer",
      "Lecture Capture & Aufzeichnung",
      "Integration in LMS-Plattformen",
      "Hybride Schulungskonzepte",
      "Einfache Bedienung ohne IT-Kenntnisse"
    ],
    useCases: ["Akademien", "Weiterbildungszentren", "Hörsäle", "Werkstattschulungen"],
    image: "/assets/solutions/education.jpg"
  },
  {
    id: "industrie",
    icon: Factory,
    title: "Industrie & Produktion",
    subtitle: "Robuste Lösungen für anspruchsvolle Umgebungen",
    description: "In Produktionsumgebungen gelten besondere Anforderungen: Staub, Lärm und schwierige Lichtverhältnisse. Wir planen robuste Medientechnik, die auch unter industriellen Bedingungen zuverlässig funktioniert.",
    features: [
      "Industrietaugliche Displays & Monitore",
      "Robuste Beschallungssysteme",
      "Krisenstabs- & Leitwarten-Ausstattung",
      "Integration in Gebäudeautomation",
      "Videoüberwachung & Monitoring",
      "24/7-Betrieb mit Fernwartung"
    ],
    useCases: ["Fertigungslinien", "Kontrollräume", "Logistikzentren", "Qualitätslabore"],
    image: "/assets/solutions/industry.jpg"
  },
  {
    id: "it-netzwerk",
    icon: Network,
    title: "IT-Infrastruktur & Netzwerk",
    subtitle: "Das digitale Fundament Ihres Unternehmens",
    description: "Eine leistungsfähige IT-Infrastruktur ist die Grundlage für alle modernen Kommunikations- und AV-Systeme. Wir planen und implementieren strukturierte Verkabelung, Netzwerke und WLAN-Lösungen für den zuverlässigen Betrieb.",
    features: [
      "Strukturierte Verkabelung (Kupfer & LWL)",
      "Netzwerk-Design & Segmentierung",
      "Enterprise WLAN (Wi-Fi 6E/7)",
      "Firewall & VPN-Lösungen",
      "Server- & Rack-Infrastruktur",
      "Netzwerk-Monitoring & Management"
    ],
    useCases: ["Neubauten", "Bestandssanierung", "Campus-Netzwerke", "Rechenzentren"],
    image: "/assets/solutions/it-network.jpg"
  },
  {
    id: "videoueberwachung",
    icon: Eye,
    title: "Videoüberwachung & Sicherheit",
    subtitle: "Schutz für Gebäude, Gelände und Werte",
    description: "Professionelle IP-Videoüberwachungssysteme sorgen für Sicherheit und Überblick. Von der Einzelkamera bis zur unternehmensweiten Lösung mit KI-gestützter Videoanalyse – wir planen, installieren und betreiben Ihre Sicherheitstechnik.",
    features: [
      "IP-Kamerasysteme (Dome, Bullet, PTZ)",
      "Video-Management-Software (VMS)",
      "KI-basierte Videoanalyse",
      "Zutrittskontrollsysteme",
      "Gegensprech- & Intercom-Anlagen",
      "24/7 Monitoring & Alarmierung"
    ],
    useCases: ["Firmengelände", "Produktionshallen", "Parkhäuser", "Kritische Infrastruktur"],
    image: "/assets/solutions/surveillance.jpg"
  },
];

function SolutionDetailSection({ solution, index }: { solution: typeof solutions[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation();
  const isReversed = index % 2 === 1;

  return (
    <section
      id={`${solution.id}-detail`}
      className={`py-16 lg:py-24 ${index % 2 === 0 ? "bg-card/50" : ""}`}
    >
      <div className="section-container">
        <div
          ref={ref}
          className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
        >
          {/* Image */}
          <div className={`${isReversed ? "lg:order-2" : ""} scroll-hidden-${isReversed ? "right" : "left"} ${isVisible ? "scroll-visible-x" : ""}`}>
            <div className="aspect-video bg-secondary rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={solution.image} 
                alt={`${solution.title}: ${solution.subtitle} – AV-Lösung von SLT Technology Group`}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Content */}
          <div className={`${isReversed ? "lg:order-1" : ""} scroll-hidden-${isReversed ? "left" : "right"} ${isVisible ? "scroll-visible-x" : ""}`}>
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
              <solution.icon className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
              {solution.title}
            </h2>
            <p className="text-base text-primary font-medium mb-3">
              {solution.subtitle}
            </p>
            <p className="text-sm lg:text-base text-muted-foreground mb-6 leading-relaxed">
              {solution.description}
            </p>

            {/* Features */}
            <div className="mb-6">
              <h3 className="text-xs font-semibold text-foreground uppercase tracking-wide mb-3">
                Typische Komponenten
              </h3>
              <ul className="grid sm:grid-cols-2 gap-1.5">
                {solution.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-xs lg:text-sm text-muted-foreground">
                    <CheckCircle className="h-3.5 w-3.5 text-primary mt-0.5 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Use Cases */}
            <div className="mb-6">
              <h3 className="text-xs font-semibold text-foreground uppercase tracking-wide mb-3">
                Anwendungsfälle
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {solution.useCases.map((useCase) => (
                  <Badge key={useCase} variant="secondary" className="text-xs">
                    {useCase}
                  </Badge>
                ))}
              </div>
            </div>

            <Button asChild>
              <Link to="/projektanfrage">
                Projekt anfragen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

const Loesungen = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.05 });
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  return (
    <Layout>
      <SEOHead
        title="Lösungen: Konferenzraum, Auditorium & Digital Signage"
        description="Maßgeschneiderte AV-Lösungen für Konferenzräume, Auditorien, Schulungsräume und Industrie. Fachplanung und Integration – jetzt beraten lassen!"
        keywords="Konferenzraum Planung, AV-Lösungen, IT-Lösungen, Auditorium Medientechnik, Schulungsraum AV, IT-Infrastruktur, AV-Integration NRW"
        canonical="/loesungen"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "AV- & IT-Lösungen von SLT Technology Group",
          "description": "Maßgeschneiderte Lösungen für Konferenzräume, Auditorien, Schulungsräume und Industrie.",
          "numberOfItems": 6,
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Konferenzräume & Meeting-Spaces", "url": "https://www.slt-tg.de/loesungen#konferenzraum-detail" },
            { "@type": "ListItem", "position": 2, "name": "Kollaborationsräume", "url": "https://www.slt-tg.de/loesungen#kollaboration-detail" },
            { "@type": "ListItem", "position": 3, "name": "Auditorien & Veranstaltungsräume", "url": "https://www.slt-tg.de/loesungen#auditorium-detail" },
            { "@type": "ListItem", "position": 4, "name": "Schulungsräume", "url": "https://www.slt-tg.de/loesungen#schulung-detail" },
            { "@type": "ListItem", "position": 5, "name": "Digital Signage & Empfang", "url": "https://www.slt-tg.de/loesungen#empfang-detail" },
            { "@type": "ListItem", "position": 6, "name": "Industrie & Produktion", "url": "https://www.slt-tg.de/loesungen#industrie-detail" }
          ]
        }}
      />

      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-primary/5 via-primary/3 to-background relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        </div>
        <div
          ref={heroRef}
          className={`section-container relative z-10 scroll-hidden-blur ${heroVisible ? "scroll-visible-blur" : ""}`}
        >
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="outline" className="mb-6">
              Lösungen nach Anwendungsfall
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              AV-Lösungen für{" "}
              <span className="text-primary">Konferenzraum, Auditorium & mehr</span>
            </h1>
            <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
              Ob Konferenzraum, Auditorium oder Produktionshalle – jeder Raum hat eigene 
              Anforderungen. Wir entwickeln Konzepte, die genau zu Ihren Nutzungsszenarien passen.
            </p>

            {/* Quick nav pills */}
            <div className="flex flex-wrap justify-center gap-2 mt-10">
              {solutions.slice(0, 6).map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}-detail`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-background/80 backdrop-blur-sm text-xs lg:text-sm text-muted-foreground hover:border-primary/40 hover:text-primary transition-all duration-200"
                >
                  <s.icon className="h-3 w-3 lg:h-3.5 lg:w-3.5" />
                  <span className="hidden sm:inline">{s.title.split(" ")[0]}</span>
                  <span className="sm:hidden">{s.title.split(" ")[0]}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 lg:py-24">
        <div className="section-container">
          <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {solutions.map((solution, index) => (
              <a
                key={solution.id}
                href={`#${solution.id}-detail`}
                className={`block group scroll-hidden ${gridVisible ? "scroll-visible" : ""}`}
                style={{ transitionDelay: `${index * 0.06}s` }}
              >
                <Card className="bg-card border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col h-full">
                  <div className="aspect-[16/10] bg-secondary overflow-hidden">
                    <img 
                      src={solution.image} 
                      alt={`${solution.title}: ${solution.subtitle}`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <CardHeader className="p-3 lg:p-4 flex-grow-0">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <solution.icon className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                    <CardTitle className="text-sm lg:text-base">{solution.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-3 lg:p-4 pt-0 mt-auto">
                    <span className="text-xs text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Details ansehen <ArrowRight className="h-3 w-3" />
                    </span>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Solution Sections */}
      {solutions.map((solution, sectionIndex) => (
        <SolutionDetailSection key={solution.id} solution={solution} index={sectionIndex} />
      ))}

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary/10 via-background to-background relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        </div>
        <div
          ref={ctaRef}
          className={`section-container text-center relative z-10 scroll-hidden-scale ${ctaVisible ? "scroll-visible-scale" : ""}`}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Ihre Anforderung ist nicht dabei?
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Jeder Raum ist anders. Im kostenfreien Erstgespräch analysieren wir gemeinsam, 
            welche Lösung zu Ihren spezifischen Anforderungen passt.
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

export default Loesungen;
