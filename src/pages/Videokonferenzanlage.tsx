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
  Video,
  Mic,
  Network,
  MonitorSmartphone,
  Wrench,
  CheckCircle,
} from "lucide-react";

/**
 * Pillar-Page für das Money-Keyword "Videokonferenzanlage".
 *
 * Nur öffentlich kommunizierte Leistungen und Herstellerpartner.
 * Keine Preise, keine erfundenen Zertifizierungen oder Referenzzahlen.
 */

const blocks = [
  {
    id: "raumgroesse",
    icon: MonitorSmartphone,
    title: "Videokonferenzanlage nach Raumgröße",
    description:
      "Huddle Room, Meetingraum, Boardroom oder Auditorium – Kamera, Mikrofonierung und Display müssen zur Raumgeometrie passen, nicht umgekehrt.",
    features: [
      "Huddle & kleine Räume: All-in-one-Bar mit Weitwinkelkamera",
      "Mittlere Räume: Bar-System plus Erweiterungsmikrofone",
      "Boardroom: getrennte Kamera-, Audio- und Steuerungskomponenten",
      "Auditorium: mehrere Kameras, DSP-basiertes Audio, Regie-Bedienung",
    ],
  },
  {
    id: "plattform",
    icon: Video,
    title: "Microsoft Teams, Zoom & Co.",
    description:
      "Die Anlage folgt Ihrer Kollaborationsplattform. Wir richten Räume so ein, dass sie im Standard Ihrer IT betrieben und verwaltet werden können.",
    features: [
      "Microsoft Teams Rooms und Zoom Rooms zertifizierte Hardware",
      "BYOD-Betrieb per USB-C für gemischte Plattform-Landschaften",
      "Einheitliche Bedienung über alle Räume hinweg",
      "Geräteverwaltung über die Portale der Plattform bzw. des Herstellers",
    ],
  },
  {
    id: "audio",
    icon: Mic,
    title: "Audio: der häufigste Schwachpunkt",
    description:
      "Schlechte Verständlichkeit ist der Hauptgrund, warum Räume gemieden werden. Mikrofonierung und Raumakustik planen wir deshalb vor der Kameraauswahl.",
    features: [
      "Deckenmikrofon-Arrays oder Tischmikrofone je nach Nutzung",
      "Echo-Unterdrückung und Beamforming",
      "DSP-Auslegung für größere Räume",
      "Bewertung der Raumakustik und Maßnahmenvorschläge",
    ],
  },
  {
    id: "netzwerk",
    icon: Network,
    title: "Netzwerk & IT-Integration",
    description:
      "Eine Videokonferenzanlage ist ein IT-System: Sie muss zu Ihren Netz-, Security- und Verwaltungsvorgaben passen.",
    features: [
      "Abstimmung von VLAN, QoS, PoE und Ports mit Ihrer IT",
      "Strukturierte Verkabelung und Anbindung an vorhandene Switch-Infrastruktur",
      "Onboarding in Ihre Geräteverwaltung und Ihr Monitoring",
      "Standardisierte Raumtypen für Multi-Site-Rollouts",
    ],
  },
  {
    id: "rollout",
    icon: Wrench,
    title: "Rollout, Einweisung & Service",
    description:
      "Vom Musterraum über den Rollout bis zum laufenden Betrieb – inklusive Nutzereinweisung, damit die Technik auch angenommen wird.",
    features: [
      "Musterraum als Referenz für alle weiteren Räume",
      "Terminierte Installation mit minimaler Störung des Betriebs",
      "Einweisung der Nutzer und des internen Supports",
      "Optionale Service- und Wartungsbetreuung nach ITIL v4",
    ],
  },
];

const faqs = [
  {
    question: "Was gehört zu einer vollständigen Videokonferenzanlage?",
    answer:
      "Mindestens Kamera, Mikrofonierung, Lautsprecher, Display und eine Bedienlösung – dazu Netzwerkanbindung, Verkabelung, Montage und die Anbindung an Ihre Kollaborationsplattform. In größeren Räumen kommen DSP-Audio, mehrere Kameras und Mediensteuerung hinzu.",
  },
  {
    question: "Welche Videokonferenzanlage passt zu welcher Raumgröße?",
    answer:
      "Kleine Räume bis etwa sechs Personen werden meist mit einer All-in-one-Bar gelöst. Mittlere Räume brauchen zusätzliche Mikrofone, Boardrooms getrennte Komponenten mit DSP-Audio. Details zu Raumtypen finden Sie auf unserer Seite zur Konferenzraum-Ausstattung.",
  },
  {
    question: "Funktioniert die Anlage mit Microsoft Teams und Zoom gleichzeitig?",
    answer:
      "Ja. Räume lassen sich im nativen Modus einer Plattform betreiben und zusätzlich per USB-C für andere Dienste freigeben. Welcher Weg sinnvoll ist, hängt von Ihrer IT-Strategie und den Gästeszenarien ab.",
  },
  {
    question: "Kann bestehende Technik weiterverwendet werden?",
    answer:
      "Häufig ja. Wir nehmen den Bestand auf, prüfen Lifecycle-Status und Plattform-Kompatibilität und schlagen vor, was weiterbetrieben, ergänzt oder ersetzt werden sollte.",
  },
  {
    question: "Wie lange dauert die Installation eines Konferenzraums?",
    answer:
      "Standardisierte Räume werden in der Regel innerhalb weniger Tage installiert und in Betrieb genommen. Bei Multi-Site-Rollouts richtet sich der Zeitplan nach Raumanzahl, Lieferzeiten und Ihren Betriebszeiten.",
  },
];

const Videokonferenzanlage = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.05 });
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();
  const { ref: faqRef, isVisible: faqVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  return (
    <Layout>
      <SEOHead
        title="Videokonferenzanlage für Konferenzräume"
        description="Videokonferenzanlage planen, installieren und betreiben lassen: Kamera, Audio, Display und Steuerung für Teams- und Zoom-Räume – herstellerneutral von SLT Technology Group aus NRW."
        keywords="Videokonferenzanlage, Videokonferenzsystem, Videokonferenz Konferenzraum, Microsoft Teams Rooms, Zoom Rooms, Videokonferenz Installation"
        canonical="/videokonferenzanlage"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Videokonferenzanlagen für Unternehmen",
          serviceType: "Planung, Installation und Betrieb von Videokonferenzanlagen",
          provider: {
            "@type": "Organization",
            name: "SLT Technology Group",
            url: "https://www.slt-tg.de/",
          },
          areaServed: "DE",
          url: "https://www.slt-tg.de/videokonferenzanlage",
          description:
            "Videokonferenzanlagen nach Raumgröße: Kamera, Mikrofonierung, Display, Steuerung sowie Netzwerk-Integration und Service.",
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
            <Breadcrumbs items={[{ label: "Videokonferenzanlage" }]} />
            <Badge variant="outline" className="mb-6">
              Teams- und Zoom-Räume vom AV-Systemhaus
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Videokonferenzanlage –{" "}
              <span className="text-primary">passend zum Raum geplant</span>
            </h1>
            <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
              Kamera, Audio, Display und Bedienung als durchdachtes Gesamtsystem: Wir planen,
              installieren und betreuen Videokonferenzanlagen vom Huddle Room bis zum
              Auditorium – herstellerneutral und IT-konform.
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
              Was eine gute Videokonferenzanlage ausmacht
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
              {blocks.map((item, index) => (
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
      {blocks.map((item, index) => (
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
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">{item.title}</h2>
                <p className="text-sm lg:text-base text-muted-foreground max-w-2xl">
                  {item.description}
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-xs font-semibold text-foreground uppercase tracking-wide mb-3">
                Worauf es ankommt
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
              Häufige Fragen zur Videokonferenzanlage
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
            Videokonferenz ist Teil der Raumausstattung – diese Seiten ergänzen die Planung.
          </p>
          <div className="grid sm:grid-cols-4 gap-4">
            {[
              { to: "/konferenzraum-ausstattung", label: "Konferenzraum-Ausstattung nach Raumgröße" },
              { to: "/partner/yealink", label: "Yealink MeetingBar & MeetingBoard" },
              { to: "/partner/huddly", label: "Huddly Konferenzkameras" },
              { to: "/service-wartung", label: "Service & Wartung für Konferenzräume" },
            ].map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="group block p-5 rounded-xl border border-border bg-card hover:border-primary/40 hover:shadow-md transition-all"
              >
                <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  {l.label}
                </span>
                <span className="inline-flex items-center text-xs text-primary mt-3">
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
            Videokonferenzanlage anfragen
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Nennen Sie uns Raumanzahl, Raumgrößen und Ihre Plattform – wir erstellen ein
            Konzept mit passender Technik und Rollout-Plan.
          </p>
          <Button asChild size="lg" className="btn-glow">
            <Link to="/projektanfrage">
              Videokonferenz-Anfrage starten
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Videokonferenzanlage;
