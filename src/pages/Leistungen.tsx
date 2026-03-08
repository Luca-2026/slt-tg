import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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

const Leistungen = () => {
  return (
    <Layout>
      <SEOHead
        title="Fachplanung & Ausschreibung für AV- & IT-Lösungen"
        description="Herstellerneutrale AV- & IT-Fachplanung von der Konzeption über Ausschreibung bis zum Betrieb. Installation und Integration von Medientechnik und IT-Infrastruktur in NRW und deutschlandweit."
        keywords="AV-Fachplanung, IT-Lösungen, Ausschreibung Medientechnik, Fachplaner Konferenztechnik, IT-Infrastruktur, Medientechnik Consultant NRW"
        canonical="/leistungen"
      />
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-primary/5 to-background">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="outline" className="mb-6">
              Leistungsübersicht
            </Badge>
             <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
               Unsere Leistungen im Detail
             </h1>
             <p className="text-lg text-muted-foreground">
               Von der ersten Idee bis zum laufenden Betrieb – wir begleiten Ihr Projekt 
               in allen Phasen mit Expertise und Leidenschaft für durchdachte Lösungen.
             </p>
          </div>
        </div>
      </section>

      {/* Services Sections */}
      {services.map((service, sectionIndex) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-20 lg:py-28 ${sectionIndex % 2 === 1 ? "bg-card" : ""}`}
        >
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Left: Service Info */}
              <div className={sectionIndex % 2 === 1 ? "lg:order-2" : ""}>
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
                  {service.title}
                </h2>
                <p className="text-lg text-primary font-medium mb-4">
                  {service.subtitle}
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {service.description}
                </p>
                <Button asChild>
                  <Link to="/projektanfrage">
                    Projekt anfragen
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>

              {/* Right: Deliverables */}
              <div className={`grid sm:grid-cols-2 gap-4 ${sectionIndex % 2 === 1 ? "lg:order-1" : ""}`}>
                {service.deliverables.map((item, index) => (
                  <Card
                    key={item.title}
                    className="bg-card border-border card-hover animate-fade-in-up overflow-hidden"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader className="pb-2">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2 flex-shrink-0">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-base break-words hyphens-auto leading-tight">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm break-words">
                        {item.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Final CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="section-container text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Welches Leistungspaket passt zu Ihrem Projekt?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
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
