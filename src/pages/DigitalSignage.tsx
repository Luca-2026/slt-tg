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
  MonitorPlay,
  Building2,
  Network,
  Wrench,
  CheckCircle,
  LayoutGrid,
} from "lucide-react";

/**
 * Pillar-Page für das Money-Keyword "Digital Signage Anbieter".
 *
 * Inhalte beschreiben ausschließlich Leistungen, die SLT Technology Group
 * öffentlich kommuniziert (Fachplanung, Installation, Integration, Service
 * nach ITIL v4, Multi-Site-Rollouts). Keine Preise, keine erfundenen
 * Referenzzahlen oder Zertifizierungen.
 */

const useCases = [
  {
    id: "empfang",
    icon: Building2,
    title: "Empfang & Foyer",
    description:
      "Begrüßungsdisplays, Besucherinformationen und Unternehmenskommunikation im Eingangsbereich – als Einzeldisplay oder als großformatige LED-Wand.",
    features: [
      "Professional-Displays oder LED-Wall je nach Betrachtungsabstand",
      "Besucher- und Wegeinformationen",
      "Anbindung an vorhandene Corporate-Design-Vorlagen",
      "Zeit- und ereignisgesteuerte Playlists",
    ],
  },
  {
    id: "corporate-communication",
    icon: MonitorPlay,
    title: "Interne Unternehmenskommunikation",
    description:
      "Kennzahlen, Sicherheitshinweise, Schichtpläne und News an Produktions-, Lager- und Pausenflächen – auch für Mitarbeitende ohne festen Arbeitsplatz.",
    features: [
      "Standortübergreifende Content-Verteilung",
      "Rollen- und standortbasierte Ausspielung",
      "Dashboards aus vorhandenen Datenquellen",
      "Redaktionsprozesse mit klaren Freigaben",
    ],
  },
  {
    id: "wegeleitung",
    icon: LayoutGrid,
    title: "Raum- & Wegeleitsysteme",
    description:
      "Türschilder vor Besprechungsräumen und digitale Wegeleitung – gekoppelt an die Raumbuchung, damit Belegung und Anzeige immer zusammenpassen.",
    features: [
      "Room-Booking-Panels vor dem Raum",
      "Anbindung an Microsoft 365 / Exchange oder Google Workspace",
      "Statusanzeige frei / belegt auf einen Blick",
      "Konsistent mit der Konferenzraum-Ausstattung",
    ],
  },
  {
    id: "outdoor-led",
    icon: MonitorPlay,
    title: "Outdoor-LED & Werbeanlagen",
    description:
      "Großflächige LED-Anlagen im Außenbereich inklusive Betriebs- und Wartungskonzept – von der Standortprüfung bis zur laufenden Betreuung.",
    features: [
      "Auslegung nach Pixelpitch, Helligkeit und Betrachtungsabstand",
      "Elektro- und Netzwerkanbindung koordiniert mit dem Gewerk vor Ort",
      "Fernüberwachung des Anlagenzustands",
      "Wartungskonzept für Outdoor-LED verfügbar",
    ],
  },
  {
    id: "integration",
    icon: Network,
    title: "CMS- & Netzwerk-Integration",
    description:
      "Digital Signage ist ein IT-Projekt: Player, Content-Management-System und Netzwerk müssen zu Ihren Sicherheitsvorgaben passen.",
    features: [
      "Abstimmung mit Ihrer IT zu VLAN, Ports und Zugriff",
      "Player-Auswahl passend zum eingesetzten CMS",
      "Zentrale Geräteverwaltung und Monitoring",
      "Betrieb wahlweise on-premises oder cloudbasiert",
    ],
  },
  {
    id: "betrieb",
    icon: Wrench,
    title: "Betrieb, Service & Wartung",
    description:
      "Nach der Inbetriebnahme übernehmen wir auf Wunsch den laufenden Betrieb – nach ITIL v4 strukturiert und in Ihre IT-Serviceprozesse eingebunden.",
    features: [
      "Service Desk als zentrale Anlaufstelle",
      "Proaktives Monitoring der Displays und Player",
      "Firmware- und Software-Pflege",
      "Vor-Ort-Service und Ersatzteil-Handling",
    ],
  },
];

const faqs = [
  {
    question: "Was macht einen guten Digital-Signage-Anbieter aus?",
    answer:
      "Displays kaufen kann jeder – entscheidend ist die Kombination aus Fachplanung, sauberer Netzwerk- und CMS-Integration, Montage im Bestand und einem verlässlichen Betriebskonzept. Genau diese Kette bilden wir als AV-Systemhaus vollständig ab, statt nur Hardware zu liefern.",
  },
  {
    question: "Arbeitet SLT Technology Group herstellerneutral?",
    answer:
      "Ja. Wir wählen Displays, Player und CMS anhand Ihrer Anforderungen aus – Betrachtungsabstand, Betriebsstunden, Content-Art, IT-Vorgaben und vorhandene Systeme. Bestehende Lizenzen und Plattformen binden wir nach Möglichkeit ein.",
  },
  {
    question: "Können mehrere Standorte zentral bespielt werden?",
    answer:
      "Ja. Standortübergreifende Ausspielung mit rollenbasierten Rechten und zentralem Monitoring ist der Regelfall bei Multi-Site-Projekten. Lokale Redaktionen können dabei eigene Inhalte innerhalb Ihrer Vorgaben pflegen.",
  },
  {
    question: "Übernehmt ihr auch bestehende Digital-Signage-Anlagen?",
    answer:
      "Grundsätzlich ja. Wir nehmen den Bestand auf, prüfen Zustand, Lifecycle-Status und CMS-Anbindung und schlagen vor, was wirtschaftlich sinnvoll weiterbetrieben, migriert oder erneuert werden sollte.",
  },
  {
    question: "Wie läuft ein Digital-Signage-Projekt bei euch ab?",
    answer:
      "Bedarfsaufnahme und Standortbegehung, Konzept mit Display-/Player-Auswahl und Netzwerkanforderungen, Abstimmung mit Ihrer IT, Montage und Inbetriebnahme, Einweisung der Redaktion – anschließend optional Service und Wartung.",
  },
];

const DigitalSignage = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.05 });
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();
  const { ref: faqRef, isVisible: faqVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  return (
    <Layout>
      <SEOHead
        title="Digital Signage Anbieter für Unternehmen"
        description="Digital Signage Anbieter für Unternehmen: Fachplanung, Displays, LED-Walls, CMS- und Netzwerk-Integration, Multi-Site-Rollout und Service nach ITIL v4 – SLT Technology Group aus NRW."
        keywords="Digital Signage Anbieter, Digital Signage Unternehmen, Digital Signage Lösungen, LED-Wall, Room Booking Panel, Digital Signage NRW"
        canonical="/digital-signage"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Digital Signage für Unternehmen",
          serviceType: "Digital Signage Planung, Installation und Betrieb",
          provider: {
            "@type": "Organization",
            name: "SLT Technology Group",
            url: "https://www.slt-tg.de/",
          },
          areaServed: "DE",
          url: "https://www.slt-tg.de/digital-signage",
          description:
            "Fachplanung, Installation, CMS- und Netzwerk-Integration sowie Service für Digital-Signage-Anlagen in Unternehmen.",
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
            <Breadcrumbs items={[{ label: "Digital Signage" }]} />
            <Badge variant="outline" className="mb-6">
              Digital Signage Anbieter für Enterprise & Mittelstand
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Digital Signage –{" "}
              <span className="text-primary">geplant, integriert, betrieben</span>
            </h1>
            <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
              Von der Empfangs-LED bis zum standortübergreifenden Display-Netz: Wir planen,
              installieren und betreuen Digital-Signage-Anlagen als AV-Systemhaus – inklusive
              CMS-, Netzwerk- und IT-Integration.
            </p>
          </div>
        </div>
      </section>

      {/* Übersicht */}
      <section className="py-16 lg:py-24">
        <div className="section-container">
          <div
            ref={gridRef}
            className={`scroll-hidden-blur ${gridVisible ? "scroll-visible-blur" : ""}`}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8">
              Digital-Signage-Anwendungen im Unternehmen
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
              {useCases.map((item, index) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`block group scroll-hidden ${gridVisible ? "scroll-visible" : ""}`}
                  style={{ transitionDelay: `${index * 0.06}s` }}
                >
                  <Card className="bg-card border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                    <CardHeader className="p-4 lg:p-6 flex-1">
                      <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/15 transition-colors">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-sm lg:text-base">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0 p-4 lg:p-6 mt-auto">
                      <p className="text-xs lg:text-sm text-muted-foreground mb-3 line-clamp-3">
                        {item.description}
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

      {/* Details */}
      {useCases.map((item, index) => (
        <section
          key={item.id}
          id={item.id}
          className={`py-16 lg:py-24 ${index % 2 === 0 ? "bg-card/50" : ""}`}
        >
          <div className="section-container">
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="min-w-0">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-2 break-words hyphens-auto">{item.title}</h2>
                <p className="text-sm lg:text-base text-muted-foreground max-w-2xl">
                  {item.description}
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-xs font-semibold text-foreground uppercase tracking-wide mb-3">
                Typischer Leistungsumfang
              </h3>
              <ul className="space-y-2 max-w-2xl">
                {item.features.map((feature) => (
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
              Häufige Fragen zu Digital Signage
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

      {/* Interne Verlinkung */}
      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="section-container">
          <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-2">
            Weiterführende Themen
          </h2>
          <p className="text-sm text-muted-foreground mb-6 max-w-2xl">
            Digital Signage ist selten ein isoliertes Projekt – meist gehören Konferenzräume,
            Videokonferenz und der laufende Betrieb dazu.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { to: "/konferenzraum-ausstattung", label: "Konferenzraum-Ausstattung planen lassen" },
              { to: "/videokonferenzanlage", label: "Videokonferenzanlage einrichten lassen" },
              { to: "/service-wartung", label: "Service & Wartung für AV-Anlagen" },
            ].map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="group flex h-full flex-col justify-between gap-3 p-5 rounded-xl border border-border bg-card hover:border-primary/40 hover:shadow-md transition-all"
              >
                <span className="block text-sm font-medium text-foreground leading-snug group-hover:text-primary transition-colors">
                  {l.label}
                </span>
                <span className="inline-flex items-center text-xs font-medium text-primary">
                  Ansehen{" "}
                  <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-background to-primary/5">
        <div
          ref={ctaRef}
          className={`section-container text-center scroll-hidden-scale ${ctaVisible ? "scroll-visible-scale" : ""}`}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Digital-Signage-Konzept für Ihre Standorte
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Sagen Sie uns, welche Flächen Sie bespielen möchten – wir erstellen ein
            Konzept mit Display-Auswahl, Netzwerkanforderungen und Betriebsmodell.
          </p>
          <Button asChild size="lg" className="btn-glow">
            <Link to="/projektanfrage">
              Digital-Signage-Anfrage starten
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default DigitalSignage;
