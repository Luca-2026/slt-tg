import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  ArrowRight,
  Wrench,
  Phone,
  Monitor,
  Shield,
  Clock,
  Settings,
  CheckCircle,
  FileText
} from "lucide-react";

const services = [
  {
    id: "wartungsvertrag",
    icon: Wrench,
    title: "Wartungsvertrag mit SLA",
    description: "Feste Service-Level-Agreements für Reaktionszeiten, Ersatzteilverfügbarkeit und vorbeugende Wartung. Planbare Kosten, vorhersagbarer Service.",
    features: [
      "Definierte Reaktionszeiten (4h / 8h / 24h)",
      "Vorbeugende Inspektionen (halbjährlich / jährlich)",
      "Firmware-Updates und Sicherheitspatches",
      "Ersatzteil-Management mit Critical-Spares",
      "Dokumentation aller Maßnahmen",
    ],
    slas: [
      { name: "Basic SLA", response: "24h", prevention: "Jährlich", price: "ab 180 EUR / Raum / Jahr" },
      { name: "Professional SLA", response: "8h", prevention: "Halbjährlich", price: "ab 350 EUR / Raum / Jahr" },
      { name: "Enterprise SLA", response: "4h", prevention: "Quartalsweise", price: "auf Anfrage" },
    ],
  },
  {
    id: "fernwartung",
    icon: Monitor,
    title: "Fernwartung & Remote-Support",
    description: "Proaktive Überwachung Ihrer AV-Systeme mit Remote-Diagnose und schneller Problemlösung – oft noch bevor Nutzer einen Support-Call tätigen.",
    features: [
      "24/7 System-Monitoring mit Dashboard",
      "Remote-Diagnose und -Reparatur",
      "Automatische Störungsbenachrichtigung",
      "Remote-Firmware-Updates",
      "Nutzungsanalyse für Capacity-Planning",
    ],
    slas: [],
  },
  {
    id: "notfallservice",
    icon: Phone,
    title: "Notfallservice & 24/7-Hotline",
    description: "Wenn vor dem wichtigen Meeting etwas nicht funktioniert: Unser Notfallservice ist erreichbar und sorgt für schnelle Lösungen – telefonisch oder vor Ort.",
    features: [
      "Telefonische Notfall-Hotline",
      "Vor-Ort-Service bei nicht-lösbarer Remote-Problematik",
      "Ersatzgeräte aus Critical-Spares-Lager",
      "Esclation-Management mit festem Ansprechpartner",
      "Nachbereitung und Root-Cause-Analyse",
    ],
    slas: [],
  },
  {
    id: "it-service",
    icon: Settings,
    title: "IT-Service & Netzwerk-Wartung",
    description: "AV-Systeme sind nur so gut wie das Netzwerk darunter. Wir warten auch Ihre IT-Infrastruktur: Switches, WLAN, Firewall und Verkabelung.",
    features: [
      "Netzwerk-Monitoring und Performance-Optimierung",
      "WLAN-Health-Checks und Heatmap-Analyse",
      "Firewall- und Security-Updates",
      "Strukturierte Verkabelung: Audit und Sanierung",
      "Dokumentation und Asset-Management",
    ],
    slas: [],
  },
  {
    id: "lifecycle",
    icon: Shield,
    title: "Lifecycle-Management & Modernisierung",
    description: "AV-Technik altert. Wir begleiten den gesamten Lebenszyklus: von der Inbetriebnahme über die Nutzung bis zur planvollen Erneuerung.",
    features: [
      "Technologie-Roadmap und Erneuerungsplanung",
      "Trade-in- und Recycling-Koordination",
      "Budget-Planung für CAPEX-Perioden",
      "Migration aus Alt-Systemen",
      "Neuausstattung mit minimaler Downtime",
    ],
    slas: [],
  },
];

const faqs = [
  {
    question: "Was kostet ein AV-Wartungsvertrag?",
    answer: "Für einen Standard-Meetingraum beginnt der Basic-SLA bei ca. 180 EUR pro Raum und Jahr. Der Preis hängt von Raumkomplexität, Gerätewarte, SLA-Stufe und Standortanzahl ab. Für Enterprise-Kunden mit 50+ Räumen erstellen wir individuelle Pakete.",
  },
  {
    question: "Wie schnell reagieren Sie bei Störungen?",
    answer: "Je nach Vertrag: Basic-SLA innerhalb eines Werktags, Professional-SLA innerhalb 8 Stunden, Enterprise-SLA innerhalb 4 Stunden. Remote-Diagnose erfolgt oft noch schneller – in vielen Fällen können wir Probleme bereits telefonisch oder remote lösen.",
  },
  {
    question: "Können Sie auch Fremdsysteme warten?",
    answer: "Ja. Auch wenn SLT nicht der ursprüngliche Installateur war, können wir bestehende Systeme auditieren, dokumentieren und in unsere Wartung übernehmen – vorausgesetzt, die Hardware ist nicht End-of-Life.",
  },
  {
    question: "Was ist in der vorbeugenden Wartung enthalten?",
    answer: "Regelmäßige Inspektion aller Komponenten, Reinigung von Lüftern und Filtern, Firmware-Updates, Verbindungsprüfungen, Akustik- und Bild-Qualitäts-Tests, sowie eine Dokumentation aller Maßnahmen mit Handlungsempfehlungen.",
  },
  {
    question: "Gibt es einen Remote-Support für Außenstandorte?",
    answer: "Absolut. Unser Fernwartungs-Monitoring erlaubt die Überwachung aller Standorte zentral. Probleme werden oft proaktiv erkannt und gelöst – auch an entfernten Standorten ohne eigenes IT-Personal.",
  },
];

const ServiceWartung = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.05 });
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();
  const { ref: faqRef, isVisible: faqVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  return (
    <Layout>
      <SEOHead
        title="AV-Service & Wartung: SLA, Fernwartung & Support"
        description="Professioneller Service für AV- und IT-Systeme: Wartungsverträge mit SLA, Fernwartung, Notfallservice und Lifecycle-Management. Für Enterprise-Kunden in NRW und bundesweit."
        keywords="AV-Service, AV-Wartung, SLA-Service, Fernwartung Konferenzraum, Medientechnik Service, IT-Support, Wartungsvertrag"
        canonical="/service-wartung"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "AV-Service & Wartungsleistungen",
          "description": "Wartungsverträge, Fernwartung, Notfallservice und Lifecycle-Management für Enterprise-AV-Systeme.",
          "numberOfItems": 5,
          "itemListElement": services.map((s, i) => ({
            "@type": "ListItem",
            "position": i + 1,
            "name": s.title,
            "description": s.description,
            "url": `https://www.slt-tg.de/service-wartung#${s.id}`
          }))
        }}
      />

      {/* Hero */}
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
            <Breadcrumbs items={[{ label: "Service & Wartung" }]} />
            <Badge variant="outline" className="mb-6">
              Managed Services
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              AV-Service &{" "}
              <span className="text-primary">Wartung mit SLA</span>
            </h1>
            <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
              Ihre Konferenzräume müssen immer funktionieren. Mit unseren Wartungsverträgen,
              Fernwartung und Notfallservice sorgen wir dafür – planbar, proaktiv und mit
echten Service-Level-Agreements.
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-10 max-w-2xl mx-auto">
              {[
                { label: "Reaktionszeit", value: "4–24h", icon: Clock },
                { label: "Vor-Ort-Teams", value: "Krefeld & Bonn", icon: Wrench },
                { label: "Remote-Monitoring", value: "24/7", icon: Monitor },
                { label: "SLA-Stufen", value: "3 Pakete", icon: Shield },
              ].map((stat) => (
                <div key={stat.label} className="bg-background/80 backdrop-blur-sm border border-border rounded-xl p-3 text-center">
                  <stat.icon className="h-4 w-4 text-primary mx-auto mb-1" />
                  <p className="text-sm font-semibold text-foreground">{stat.value}</p>
                  <p className="text-[10px] text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-16 lg:py-24">
        <div className="section-container">
          <div
            ref={gridRef}
            className={`scroll-hidden-blur ${gridVisible ? "scroll-visible-blur" : ""}`}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8">
              Unsere Serviceleistungen
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
              {services.map((service, index) => (
                <a
                  key={service.id}
                  href={`#${service.id}`}
                  className="block group scroll-hidden"
                  style={{ transitionDelay: `${index * 0.06}s` }}
                >
                  <Card className="bg-card border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                    <CardHeader className="p-4 lg:p-6 flex-1">
                      <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/15 transition-colors">
                        <service.icon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-sm lg:text-base">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0 p-4 lg:p-6 mt-auto">
                      <p className="text-xs lg:text-sm text-muted-foreground mb-3 line-clamp-3">
                        {service.description}
                      </p>
                      <span className="text-xs text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                        Details ansehen <ArrowRight className="h-3 w-3" />
                      </span>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-16 lg:py-24 ${index % 2 === 0 ? "bg-card/50" : ""}`}
        >
          <div className="section-container">
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
                  {service.title}
                </h2>
                <p className="text-sm lg:text-base text-muted-foreground max-w-2xl">
                  {service.description}
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xs font-semibold text-foreground uppercase tracking-wide mb-3">
                  Leistungsumfang
                </h3>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-xs lg:text-sm text-muted-foreground">
                      <CheckCircle className="h-3.5 w-3.5 text-primary mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {service.slas.length > 0 && (
                <div>
                  <h3 className="text-xs font-semibold text-foreground uppercase tracking-wide mb-3">
                    SLA-Pakete
                  </h3>
                  <div className="space-y-3">
                    {service.slas.map((sla) => (
                      <Card key={sla.name} className="bg-background border-border/60">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-semibold text-foreground">{sla.name}</span>
                            <Badge variant="secondary" className="text-xs">{sla.price}</Badge>
                          </div>
                          <div className="flex gap-4 text-xs text-muted-foreground">
                            <span>Reaktion: {sla.response}</span>
                            <span>Wartung: {sla.prevention}</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* FAQ */}
      <section className="py-16 lg:py-24">
        <div className="section-container">
          <div
            ref={faqRef}
            className={`scroll-hidden-blur ${faqVisible ? "scroll-visible-blur" : ""}`}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8">
              Häufige Fragen zu Service & Wartung
            </h2>
            <div className="max-w-3xl space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group bg-card rounded-xl border border-border/60 overflow-hidden"
                >
                  <summary className="flex items-center justify-between p-4 lg:p-5 cursor-pointer list-none">
                    <span className="text-sm lg:text-base font-medium text-foreground pr-4">
                      {faq.question}
                    </span>
                    <span className="text-primary transition-transform group-open:rotate-180 flex-shrink-0">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-4 lg:px-5 pb-4 lg:pb-5 text-sm text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Whitepaper CTA */}
      <section className="py-16 lg:py-20 bg-card/50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Whitepaper: Kosten senken durch professionelle AV-Wartung
            </h2>
            <p className="text-base text-muted-foreground mb-6">
              Wie Wartungsverträge die Total Cost of Ownership (TCO) Ihrer Konferenzraum-Technik
              nachweislich senken – mit Zahlen, Beispielen und einem ROI-Rechner.
            </p>
            <Button asChild variant="outline" size="lg">
              <Link to="/ratgeber">
                Zum Ratgeber-Hub
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary/10 via-background to-background relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        </div>
        <div
          ref={ctaRef}
          className={`section-container text-center relative z-10 scroll-hidden-scale ${ctaVisible ? "scroll-visible-scale" : ""}`}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Ihre AV-Systeme im besten Zustand
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Lassen Sie uns gemeinsam das passende Service-Paket für Ihre Umgebung definieren.
            Von der Einzelraum-Wartung bis zum unternehmensweiten SLA.
          </p>
          <Button asChild size="lg" className="btn-glow">
            <Link to="/projektanfrage">
              Service-Anfrage starten
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceWartung;