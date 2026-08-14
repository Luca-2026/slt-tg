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
  Headphones,
  Activity,
  Settings2,
  ShieldCheck,
  CheckCircle,
  Wrench,
} from "lucide-react";

/**
 * Service & Support-Hub.
 *
 * Die Inhalte basieren ausschließlich auf den Leistungen, die SLT
 * unter slt-tg.de/leistungen ("Service & Support") öffentlich kommuniziert:
 * Service Desk, proaktives 24/7-Monitoring, Managed Rooms, ITIL v4.
 *
 * Es werden hier KEINE konkreten SLA-Preise oder garantierten
 * Reaktionszeiten genannt – diese werden im individuellen Servicevertrag
 * vereinbart.
 */

const services = [
  {
    id: "service-desk",
    icon: Headphones,
    title: "Service Desk",
    description:
      "Direkter Ansprechpartner für Ihre Nutzer bei Störungen rund um Konferenztechnik, AV-Komponenten und unterstützte Infrastruktur.",
    features: [
      "Definierter Ansprechpartner / zentrale Anlaufstelle",
      "Ticketing und Dokumentation aller Vorgänge",
      "Eskalation an Hersteller bei Hardware-Defekten",
      "Übergabe an Vor-Ort-Service, wo erforderlich",
    ],
  },
  {
    id: "monitoring",
    icon: Activity,
    title: "Proaktives 24/7-Monitoring",
    description:
      "Wir überwachen Ihre AV- und Netzwerksysteme laufend und werden auf Wunsch aktiv, bevor Nutzer eine Störung melden.",
    features: [
      "Kontinuierliche Verfügbarkeits-Überwachung",
      "Alarmierung bei Anomalien",
      "Schnelle Eingrenzung der Ursache (Endgerät, Netzwerk, Plattform)",
      "Remote-Eingriff, wo technisch möglich",
    ],
  },
  {
    id: "managed-rooms",
    icon: Settings2,
    title: "Managed Rooms",
    description:
      "Regelmäßige Analyse Ihrer Räume mit Nutzungsdaten und konkreten Optimierungs-Empfehlungen – damit die Technik nicht nur läuft, sondern wirklich genutzt wird.",
    features: [
      "Regelmäßige Inspektion und Funktionsprüfung",
      "Auswertung von Nutzungsdaten",
      "Optimierungs-Empfehlungen (Hardware, Akustik, Bedienung)",
      "Begleitende Anwender-Schulungen auf Wunsch",
    ],
  },
  {
    id: "itil",
    icon: ShieldCheck,
    title: "ITIL v4 Service-Management",
    description:
      "Unsere Service-Prozesse folgen ITIL v4 als international etabliertem Standard – das vereinfacht die Zusammenarbeit mit Ihrer IT-Abteilung erheblich.",
    features: [
      "Incident-, Problem- und Change-Management nach ITIL v4",
      "Klare Eskalations- und Übergabewege",
      "Dokumentierte Service-Berichte",
      "Konzernkompatibel – passt in bestehende IT-Service-Strukturen",
    ],
  },
  {
    id: "wartung",
    icon: Wrench,
    title: "Wartung & Lifecycle-Begleitung",
    description:
      "Vorbeugende Wartung, Firmware-Pflege und Modernisierungs-Planung über den gesamten Lebenszyklus Ihrer AV- und IT-Systeme.",
    features: [
      "Geplante Wartungsfenster mit Funktionsprüfung",
      "Firmware-Updates und Sicherheits-Patches",
      "Dokumentation der durchgeführten Maßnahmen",
      "Beratung zu Erneuerung und Migration aus Altsystemen",
    ],
  },
];

const faqs = [
  {
    question: "Bietet SLT Technology Group standardisierte SLA-Pakete?",
    answer:
      "Wir vereinbaren Service-Umfang, Reaktionszeiten und Verfügbarkeiten individuell mit jedem Kunden – passend zu Anzahl der Räume, Kritikalität und Standortverteilung. Pauschale Preislisten würden Ihrer Situation nicht gerecht.",
  },
  {
    question: "Übernehmt ihr auch die Wartung von Fremdsystemen?",
    answer:
      "Grundsätzlich ja, sofern die Hardware nicht End-of-Life ist. Im Rahmen einer Bestandsaufnahme prüfen wir, was wir wirtschaftlich sinnvoll in unsere Wartung übernehmen können.",
  },
  {
    question: "Was bedeutet ITIL v4 in der Praxis für uns?",
    answer:
      "ITIL v4 ist ein international etablierter Standard für IT-Service-Management. Für Sie bedeutet das vor allem: nachvollziehbare Prozesse für Störungen, Änderungen und Anfragen sowie eine saubere Schnittstelle zu Ihrer eigenen IT.",
  },
  {
    question: "Funktioniert das Monitoring auch für mehrere Standorte?",
    answer:
      "Ja. Sowohl auf der AV- als auch auf der Netzwerkseite (z. B. mit Cisco Meraki) lässt sich Multi-Site-Monitoring zentral umsetzen.",
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
        title="AV-Service, Wartung & Managed Rooms (ITIL v4)"
        description="Service Desk, proaktives 24/7-Monitoring, Managed Rooms und Wartung für AV- und IT-Systeme – nach ITIL v4. SLT Technology Group für Enterprise-Kunden in NRW und bundesweit."
        keywords="AV-Service, AV-Wartung, Managed Rooms, ITIL v4, Service Desk, proaktives Monitoring, Wartungsvertrag, Medientechnik Service"
        canonical="/service-wartung"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "AV-Service & Wartungsleistungen",
          description:
            "Service Desk, proaktives Monitoring, Managed Rooms, ITIL v4 Service-Management und Wartung.",
          numberOfItems: services.length,
          itemListElement: services.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: s.title,
            description: s.description,
            url: `https://www.slt-tg.de/service-wartung#${s.id}`,
          })),
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
              Managed Services nach ITIL v4
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              AV-Service & Wartung –{" "}
              <span className="text-primary">individuell vereinbart</span>
            </h1>
            <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
              Service Desk, proaktives 24/7-Monitoring, Managed Rooms und Wartung –
              nach ITIL v4 strukturiert und auf Ihre Umgebung zugeschnitten.
            </p>
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
              Unsere Service-Leistungen
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
              {services.map((service, index) => (
                <a
                  key={service.id}
                  href={`#${service.id}`}
                  className={`block group scroll-hidden ${gridVisible ? "scroll-visible" : ""}`}
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

            <div>
              <h3 className="text-xs font-semibold text-foreground uppercase tracking-wide mb-3">
                Typischer Leistungsumfang
              </h3>
              <ul className="space-y-2 max-w-2xl">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-xs lg:text-sm text-muted-foreground"
                  >
                    <CheckCircle className="h-3.5 w-3.5 text-primary mt-0.5 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
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
                        <path
                          d="M4 6L8 10L12 6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
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

      {/* Vertiefende Ratgeber – informationelle Ankertexte, damit
          Service-/Wartungs-Keywords auf dieser Pillar-Page bleiben. */}
      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="section-container">
          <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-2">Hintergrundwissen im Ratgeber</h2>
          <p className="text-sm text-muted-foreground mb-6 max-w-2xl">
            Service, Wartung und Managed Rooms erbringen wir über diese Seite. Ergänzendes
            Hintergrundwissen zum Betrieb moderner Medientechnik finden Sie in unseren Ratgebern.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { slug: "ki-readiness-av-medientechnik-2026", label: "Ratgeber: KI-Readiness und Predictive Maintenance verstehen" },
              { slug: "konferenztechnik-raumgroesse", label: "Ratgeber: Technik je Raumtyp verstehen" },
            ].map((g) => (
              <Link
                key={g.slug}
                to={`/ratgeber/${g.slug}`}
                className="group flex h-full flex-col justify-between gap-3 p-5 rounded-xl border border-border bg-card hover:border-primary/40 hover:shadow-md transition-all"
              >
                <span className="block text-sm font-medium text-foreground leading-snug group-hover:text-primary transition-colors">
                  {g.label}
                </span>
                <span className="inline-flex items-center text-xs font-medium text-primary">
                  Weiterlesen <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
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
            Service-Konzept für Ihre Umgebung
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Service-Umfang, Reaktionszeiten und Verfügbarkeiten vereinbaren wir
            individuell – passend zu Anzahl der Räume, Standorten und Kritikalität.
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
