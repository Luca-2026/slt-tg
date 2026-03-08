import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight,
  Users,
  Video,
  Presentation,
  Building2,
  GraduationCap,
  Factory,
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
    image: "/assets/solutions/reception.jpg"
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
];

const Loesungen = () => {
  return (
    <Layout>
      <SEOHead
        title="Raumlösungen: Konferenzraum, Auditorium & mehr"
        description="Maßgeschneiderte AV-Lösungen für Konferenzräume, Auditorien, Schulungsräume und Industrie. Fachplanung und Integration von Medientechnik in NRW und deutschlandweit."
        keywords="Konferenzraum Planung, Auditorium Medientechnik, Schulungsraum AV, Digital Signage Fachplanung, Hybride Meetings Lösung, AV-Integration NRW"
        canonical="/loesungen"
      />
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-primary/5 to-background">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="outline" className="mb-6">
              Lösungen nach Anwendungsfall
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Maßgeschneiderte Lösungen für jeden Raum
            </h1>
             <p className="text-lg text-muted-foreground">
               Ob Konferenzraum, Auditorium oder Produktionshalle – jeder Raum hat eigene 
               Anforderungen. Wir entwickeln Konzepte, die genau zu Ihren Nutzungsszenarien passen.
             </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 lg:py-24">
        <div className="section-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {solutions.map((solution, index) => (
              <Card
                key={solution.id}
                className="group bg-card border-border overflow-hidden card-hover animate-fade-in-up flex flex-col h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="aspect-video bg-secondary overflow-hidden">
                  <img 
                    src={solution.image} 
                    alt={`${solution.title}: ${solution.subtitle} - Professionelle AV-Lösung für ${solution.useCases.join(", ")}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                <CardHeader className="flex-grow-0">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <solution.icon className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{solution.title}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {solution.subtitle}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="flex flex-col flex-grow">
                  <p className="text-sm text-muted-foreground mb-4 flex-grow">
                    {solution.description}
                  </p>
                  
                  {/* Use Cases as Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {solution.useCases.map((useCase) => (
                      <Badge key={useCase} variant="secondary" className="text-xs">
                        {useCase}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button asChild variant="outline" className="w-full mt-auto">
                    <a href={`#${solution.id}-detail`}>
                      Details ansehen
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Solution Sections */}
      {solutions.map((solution, sectionIndex) => (
        <section
          key={solution.id}
          id={`${solution.id}-detail`}
          className={`py-20 lg:py-28 ${sectionIndex % 2 === 0 ? "bg-card" : ""}`}
        >
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Image */}
              <div className={sectionIndex % 2 === 1 ? "lg:order-2" : ""}>
                <div className="aspect-video bg-secondary rounded-2xl overflow-hidden">
                  <img 
                    src={solution.image} 
                    alt={solution.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className={sectionIndex % 2 === 1 ? "lg:order-1" : ""}>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <solution.icon className="h-7 w-7 text-primary" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
                  {solution.title}
                </h2>
                <p className="text-lg text-primary font-medium mb-4">
                  {solution.subtitle}
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {solution.description}
                </p>

                {/* Features */}
                <div className="mb-8">
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-4">
                    Typische Komponenten
                  </h3>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {solution.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Use Cases */}
                <div className="mb-8">
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-4">
                    Anwendungsfälle
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {solution.useCases.map((useCase) => (
                      <Badge key={useCase} variant="secondary">
                        {useCase}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button asChild>
                  <Link to="/projektanfrage">
                    Projekt anfragen
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="section-container text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Ihre Anforderung ist nicht dabei?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
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
