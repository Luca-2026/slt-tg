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
  Users,
  Video,
  Presentation,
  Building2,
  CheckCircle,
} from "lucide-react";

/**
 * Raumtypen-Übersicht.
 *
 * Hardware-Empfehlungen stammen ausschließlich aus dem von SLT auf
 * slt-tg.de/technologien als zertifiziert ausgewiesenen Hersteller-Portfolio.
 *
 * Es werden hier KEINE konkreten Preis-Spannen, Lieferzeiten oder
 * Installationsdauern angegeben – diese sind streng projektabhängig und werden
 * im Rahmen der Bedarfsanalyse individuell kalkuliert.
 */
const roomTypes = [
  {
    id: "huddle",
    icon: Users,
    title: "Huddle Space / Focus Room",
    size: "ca. 6 – 12 m² · 2 – 4 Personen",
    description:
      "Kompakte Räume für spontane Besprechungen, kurze Check-ins oder Fokusarbeit. Die Technik soll sofort funktionieren – ohne IT-Support.",
    hardware: [
      "All-in-One-Videobar (z. B. Yealink MeetingBar oder vergleichbare Lösung)",
      "Konferenzraum-Display passender Größe",
      "Wireless Presentation (z. B. Barco ClickShare oder Crestron AirMedia)",
    ],
    useCases: ["Stand-up-Meetings", "1:1-Gespräche", "Fokusarbeit mit Video"],
  },
  {
    id: "small",
    icon: Video,
    title: "Small Meeting Room",
    size: "ca. 12 – 20 m² · 4 – 8 Personen",
    description:
      "Standard-Meetingraum für Team- und Projektbesprechungen sowie hybride Calls. Fokus auf gleichberechtigter Teilnahme vor Ort und remote.",
    hardware: [
      "Konferenzraum-Bar oder modulares Kamera-/Audio-System (Yealink, Huddly, Shure)",
      "4K-Display in passender Größe oder Dual-Screen-Setup",
      "Touch-Controller (z. B. Crestron TSW oder vergleichbare Lösung)",
      "Wireless Presentation / BYOM (Barco ClickShare, Crestron AirMedia)",
    ],
    useCases: ["Team-Meetings", "Projektbesprechungen", "Hybride Kundenpräsentationen"],
  },
  {
    id: "medium",
    icon: Presentation,
    title: "Medium Meeting / Training Room",
    size: "ca. 20 – 40 m² · 8 – 16 Personen",
    description:
      "Größere Besprechungsräume für Abteilungen, Schulungen oder Kunden-Workshops. Flexible Nutzung zwischen Präsentation, Video und Kollaboration.",
    hardware: [
      "Konferenzraum-Kamera (z. B. Huddly L1/S1, AVer PTZ)",
      "Großes Display oder interaktives Whiteboard (z. B. Yealink MeetingBoard, Samsung, iiyama)",
      "Deckenmikrofonlösung (Shure MXA920, Sennheiser TeamConnect, Nureva HDL)",
      "DSP (Q-SYS Core, Shure IntelliMix)",
      "Mediensteuerung (Crestron, Q-SYS)",
    ],
    useCases: ["Abteilungsmeetings", "Schulungen & Workshops", "Hybride Kunden-Workshops"],
  },
  {
    id: "boardroom",
    icon: Building2,
    title: "Boardroom / Executive Suite",
    size: "ca. 40 – 80 m² · 12 – 24 Personen",
    description:
      "Repräsentative Räume für Vorstand, Aufsichtsrat und externe Stakeholder. Höchste Anforderungen an Bedienkomfort, Zuverlässigkeit und gestalterische Integration.",
    hardware: [
      "PTZ-Kamera oder KI-basierte Kamera mit Sprecher-Tracking",
      "Großformat-Display oder Dual-Screen-Setup",
      "Unsichtbare Deckenmikrofonlösung (Shure MXA920, Sennheiser TeamConnect)",
      "Dedizierter Audio-DSP (Q-SYS Core, Shure IntelliMix)",
      "Zentrale Touch-Steuerung mit Raumszenarien (Crestron / Q-SYS)",
      "Wireless Presentation (Barco ClickShare)",
    ],
    useCases: ["Vorstandssitzungen", "Aufsichtsrat", "Investor-Präsentationen"],
  },
  {
    id: "auditorium",
    icon: Presentation,
    title: "Auditorium / Großraum / Veranstaltung",
    size: "ca. 80 – 300+ m² · 30 – 200+ Personen",
    description:
      "Großveranstaltungsräume für Mitarbeiterversammlungen, Produktlaunches oder Kongresse – inkl. hybrider Übertragung.",
    hardware: [
      "Mehrere PTZ-Kameras",
      "Großformatige Visualisierung (LED-Wand oder Projektion, z. B. Samsung, Barco, Absen)",
      "Beschallungssystem (QSC, Bose Professional, JBL Commercial)",
      "Professionelle Mikrofonierung",
      "Streaming-Integration (Teams, Zoom, Webex)",
      "Zentrale Mediensteuerung",
    ],
    useCases: ["Hauptversammlungen", "Produktlaunches", "Kongresse", "Live-Streaming-Events"],
  },
];

function RoomCard({ room, index }: { room: typeof roomTypes[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id={room.id}
      className={`py-16 lg:py-24 ${index % 2 === 0 ? "bg-card/50" : ""}`}
    >
      <div className="section-container">
        <div
          ref={ref}
          className={`scroll-hidden-blur ${isVisible ? "scroll-visible-blur" : ""}`}
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <room.icon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-1">
                {room.title}
              </h2>
              <p className="text-sm text-primary font-medium">{room.size}</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <p className="text-sm lg:text-base text-muted-foreground mb-6 leading-relaxed">
                {room.description}
              </p>

              <div className="mb-6">
                <h3 className="text-xs font-semibold text-foreground uppercase tracking-wide mb-3">
                  Typische Komponenten-Auswahl
                </h3>
                <ul className="space-y-2">
                  {room.hardware.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs lg:text-sm text-muted-foreground">
                      <CheckCircle className="h-3.5 w-3.5 text-primary mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-[11px] text-muted-foreground/70 mt-3 italic">
                  Konkrete Modellauswahl, Akustik- und Lichtplanung sowie Kosten- und Zeitplan
                  erstellen wir herstellerneutral im Rahmen der Bedarfsanalyse.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {room.useCases.map((useCase) => (
                  <Badge key={useCase} variant="secondary" className="text-xs">
                    {useCase}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <Card className="border-border/60">
                <CardHeader className="p-4 lg:p-6 pb-3">
                  <CardTitle className="text-sm lg:text-base">Kosten & Zeitplan</CardTitle>
                </CardHeader>
                <CardContent className="p-4 lg:p-6 pt-0 space-y-3 text-sm text-muted-foreground">
                  <p>
                    Wir nennen bewusst keine pauschalen Preisspannen oder Lieferzeiten:
                    Hardware-Auswahl, Akustik, Verkabelung, bauliche Randbedingungen,
                    Standortanzahl und Service-Umfang beeinflussen sowohl Investitions- als
                    auch Betriebskosten erheblich.
                  </p>
                  <p>
                    Im kostenfreien Erstgespräch klären wir Ihre Anforderungen und liefern
                    danach ein nachvollziehbares, herstellerneutrales Angebot inklusive
                    Zeitplan.
                  </p>
                  <Button asChild size="sm" variant="outline" className="mt-2">
                    <Link to="/projektanfrage">
                      Erstgespräch anfragen <ArrowRight className="ml-2 h-3.5 w-3.5" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const KonferenzraumAusstattung = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.05 });
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  return (
    <Layout>
      <SEOHead
        title="Konferenzraum-Ausstattung: Huddle bis Boardroom & Auditorium"
        description="Konferenzraum-Ausstattung nach Raumgröße: typische Komponenten-Auswahl für Huddle Spaces, Meeting-Räume, Boardrooms und Auditorien – herstellerneutral geplant."
        keywords="Konferenzraum Ausstattung, Huddle Room, Meetingraum Technik, Boardroom AV, Auditorium Medientechnik, AV-Rollout, Raumgröße Konferenztechnik"
        canonical="/konferenzraum-ausstattung"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Konferenzraum-Ausstattung nach Raumgröße",
          description:
            "Typische Komponenten-Auswahl für Huddle Space, Small Meeting, Medium Meeting, Boardroom und Auditorium.",
          numberOfItems: 5,
          itemListElement: roomTypes.map((r, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: r.title,
            description: r.description,
            url: `https://www.slt-tg.de/konferenzraum-ausstattung#${r.id}`,
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
            <Breadcrumbs items={[{ label: "Konferenzraum-Ausstattung" }]} />
            <Badge variant="outline" className="mb-6">
              Lösungs-Hub
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Konferenzraum-Ausstattung{" "}
              <span className="text-primary">nach Raumgröße</span>
            </h1>
            <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
              Vom Huddle Space bis zum Auditorium: typische Komponenten-Auswahl und
              Anwendungsfälle. Die konkrete Planung erfolgt herstellerneutral und
              projektspezifisch.
            </p>

            <div className="flex flex-wrap justify-center gap-2 mt-10">
              {roomTypes.map((r) => (
                <a
                  key={r.id}
                  href={`#${r.id}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-background/80 backdrop-blur-sm text-xs lg:text-sm text-muted-foreground hover:border-primary/40 hover:text-primary transition-all duration-200"
                >
                  <r.icon className="h-3 w-3 lg:h-3.5 lg:w-3.5" />
                  {r.title.split(" ")[0]}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Room Detail Sections */}
      {roomTypes.map((room, index) => (
        <RoomCard key={room.id} room={room} index={index} />
      ))}

      {/* Kommerzielle Schwesterseiten (Money-Keywords) */}
      <section className="py-12 lg:py-16">
        <div className="section-container">
          <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-6">
            Passende Leistungen
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { to: "/videokonferenzanlage", label: "Videokonferenzanlage planen und installieren lassen" },
              { to: "/digital-signage", label: "Digital Signage für Unternehmen umsetzen lassen" },
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

      {/* Vertiefende Ratgeber – bewusst informationelle Ankertexte,
          damit die Money-Keywords bei dieser Pillar-Page bleiben. */}
      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="section-container">
          <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-2">Hintergrundwissen im Ratgeber</h2>
          <p className="text-sm text-muted-foreground mb-6 max-w-2xl">
            Die Planung und Umsetzung Ihrer Konferenzraum-Ausstattung übernehmen wir auf dieser Seite.
            Die folgenden Ratgeber liefern ergänzendes Hintergrundwissen zur Entscheidungsfindung.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { slug: "konferenztechnik-raumgroesse", label: "Ratgeber: Technik je Raumtyp verstehen" },
              { slug: "teams-rooms-vs-zoom-rooms", label: "Ratgeber: Plattform-Vergleich Teams / Zoom" },
              { slug: "konferenzraum-kosten", label: "Ratgeber: Kostenfaktoren im Überblick" },
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


      {/* Multi-Site CTA */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-primary/10 via-background to-background relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        </div>
        <div
          ref={ctaRef}
          className={`section-container relative z-10 scroll-hidden-scale ${ctaVisible ? "scroll-visible-scale" : ""}`}
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Multi-Site-Rollout geplant?
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground mb-8">
              Wir standardisieren Raumkonzepte und rollen sie über mehrere Standorte aus –
              mit einheitlicher Bedienung, zentralem Device-Management und transparentem
              Projekt-Management.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="btn-glow">
                <Link to="/projektanfrage">
                  Projektanfrage starten
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/loesungen">Unsere Leistungen</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default KonferenzraumAusstattung;
