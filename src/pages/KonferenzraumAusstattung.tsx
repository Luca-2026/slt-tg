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
  Clock,
  Euro,
  Truck
} from "lucide-react";

const roomTypes = [
  {
    id: "huddle",
    icon: Users,
    title: "Huddle Space / Focus Room",
    size: "6 – 12 m² · 2 – 4 Personen",
    description: "Kompakte Räume für spontane Besprechungen, kurze Check-ins oder Fokusarbeit. Die Technik muss sofort funktionieren – ohne IT-Support.",
    hardware: [
      "All-in-One-Videobar (Logitech Rally Bar Mini, Yealink MeetingBar A10)",
      "27–32" Display oder Interaktives Whiteboard",
      "Kabellose Präsentation (Barco ClickShare, Crestron AirMedia)",
      "Integriertes Mikrofonarray (keine sichtboren Mikrofone)",
    ],
    budget: "3.500 – 7.000 EUR",
    delivery: "2 – 3 Wochen",
    rolloutPerRoom: "0,5 – 1 Tag",
    useCases: ["Schnelle Stand-up-Meetings", "1:1-Gespräche", "Fokusarbeit mit Video"],
    image: "/assets/solutions/conference-room.jpg"
  },
  {
    id: "small",
    icon: Video,
    title: "Small Meeting Room",
    size: "12 – 20 m² · 4 – 8 Personen",
    description: "Der Standard-Meetingraum für Teams, Projektbesprechungen und hybride Calls. Klarer Fokus auf gleichberechtigte Teilnahme vor Ort und remote.",
    hardware: [
      "Videokonferenz-Soundbar (Poly Studio X50, Logitech Rally Bar, Yealink A20)",
      "55–65" 4K-Display oder Dual-Screen-Setup",
      "Touch-Controller (Logitech Tap, Crestron TSW-770)",
      "Kabellose Präsentation + BYOM",
      "Akustik-Optimierung (absorptive Wand-/Deckenelemente)",
    ],
    budget: "8.000 – 15.000 EUR",
    delivery: "3 – 4 Wochen",
    rolloutPerRoom: "1 – 1,5 Tage",
    useCases: ["Team-Meetings", "Projektbesprechungen", "Hybride Kundenpräsentationen"],
    image: "/assets/solutions/collaboration-space.jpg"
  },
  {
    id: "medium",
    icon: Presentation,
    title: "Medium Meeting / Training Room",
    size: "20 – 40 m² · 8 – 16 Personen",
    description: "Größere Besprechungsräume für Abteilungen, Schulungen oder Kundenworkshops. Flexible Nutzung zwischen Präsentation, Video und Kollaboration.",
    hardware: [
      "Modulares Videokonferenzsystem (Poly G7500, Logitech Rally Plus)",
      "65–86" Display oder Interaktives Whiteboard (Yealink MeetingBoard)",
      "Deckenmikrofonlösung (Sennheiser TeamConnect Ceiling 2, Shure MXA920)",
      "Erweiterte Mikrofon-Abdeckung (bis 7 Mic Pods bei Rally Plus)",
      "Zwei-Wege-Lautsprecher oder Soundbar-Erweiterung",
      "Zentrale Mediensteuerung (Crestron, Q-SYS)",
    ],
    budget: "18.000 – 35.000 EUR",
    delivery: "4 – 6 Wochen",
    rolloutPerRoom: "2 – 3 Tage",
    useCases: ["Abteilungsmeetings", "Schulungen & Workshops", "Hybride Kundenworkshops"],
    image: "/assets/solutions/auditorium.jpg"
  },
  {
    id: "boardroom",
    icon: Building2,
    title: "Boardroom / Executive Suite",
    size: "40 – 80 m² · 12 – 24 Personen",
    description: "Repräsentative Räume für Vorstand, Aufsichtsrat und wichtige Stakeholder. Höchste Anforderungen an Design, Bedienkomfort und Zuverlässigkeit.",
    hardware: [
      "PTZ-Kamera mit Speaker-Tracking (Poly EagleEye Director, Crestron Auto-Framing)",
      "86–98" Display oder Dual-75"-Setup",
      "Unsichtbare Deckenmikrofonlösung (Sennheiser TeamConnect Ceiling 2)",
      "Dedizierte DSP mit Echo-Unterdrückung (Q-SYS Core, Biamp Tesira)",
      "Zentrale Touch-Steuerung mit Raumszenarien (Licht, Klima, Jalousien)",
      "Kabellose Präsentation + dokumentenkamera",
      "Dolmetscher-Loop für internationale Gäste",
    ],
    budget: "45.000 – 90.000 EUR",
    delivery: "6 – 10 Wochen",
    rolloutPerRoom: "4 – 6 Tage",
    useCases: ["Vorstandssitzungen", "Aufsichtsrat", "Investoren-Präsentationen", "Internationale Konferenzen"],
    image: "/assets/solutions/langeoog-display.jpg"
  },
  {
    id: "auditorium",
    icon: Presentation,
    title: "Auditorium / Großraum / Veranstaltung",
    size: "80 – 300+ m² · 30 – 200+ Personen",
    description: "Großveranstaltungsräume für Mitarbeiterversammlungen, Produktlaunches oder Kongresse. Hybride Events mit Live-Streaming und professioneller Beschallung.",
    hardware: [
      "Mehrfach-PTZ-Kamera-Setup mit Director-Software",
      "LED-Wand oder großformatige Projektion (3.000+ ANSI Lumen)",
      "Line-Array-Beschallung oder mehrzoniges Lautsprechersystem",
      "Professionelle Mikrofonierung (Funkmikrofone, Gooseneck, Audience Mics)",
      "Livestreaming-Encoder (für Teams/Zoom/Webex-Integration)",
      "Simultane Dolmetschertechnik",
      "Zentrale Mediensteuerung mit redundanter Steuerung",
    ],
    budget: "75.000 – 250.000+ EUR",
    delivery: "10 – 16 Wochen",
    rolloutPerRoom: "10 – 20 Tage",
    useCases: ["Hauptversammlungen", "Produktlaunches", "Kongresse & Messen", "Live-Streaming-Events"],
    image: "/assets/solutions/education.jpg"
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
            {/* Left: Description + Hardware */}
            <div>
              <p className="text-sm lg:text-base text-muted-foreground mb-6 leading-relaxed">
                {room.description}
              </p>

              <div className="mb-6">
                <h3 className="text-xs font-semibold text-foreground uppercase tracking-wide mb-3">
                  Typische Hardware-Konfiguration
                </h3>
                <ul className="space-y-2">
                  {room.hardware.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs lg:text-sm text-muted-foreground">
                      <CheckCircle className="h-3.5 w-3.5 text-primary mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {room.useCases.map((useCase) => (
                  <Badge key={useCase} variant="secondary" className="text-xs">
                    {useCase}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Right: Stats Card */}
            <div>
              <Card className="border-border/60">
                <CardHeader className="p-4 lg:p-6 pb-3">
                  <CardTitle className="text-sm lg:text-base">Kosten & Zeitrahmen</CardTitle>
                </CardHeader>
                <CardContent className="p-4 lg:p-6 pt-0 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Euro className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Investitionsschwerpunkt</p>
                      <p className="text-sm lg:text-base font-semibold text-foreground">{room.budget}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Truck className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Lieferzeit</p>
                      <p className="text-sm lg:text-base font-semibold text-foreground">{room.delivery}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Installationsaufwand pro Raum</p>
                      <p className="text-sm lg:text-base font-semibold text-foreground">{room.rolloutPerRoom}</p>
                    </div>
                  </div>
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
  const { ref: matrixRef, isVisible: matrixVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  return (
    <Layout>
      <SEOHead
        title="Konferenzraum-Ausstattung: Huddle bis Boardroom & Auditorium"
        description="Enterprise-Konferenzraum-Ausstattung nach Raumgröße mit konkreten Hardware-Empfehlungen, Kostenrahmen und Rollout-Zeitplan. Standardisierbar für Multi-Site."
        keywords="Konferenzraum Ausstattung, Huddle Room, Meetingraum Technik, Boardroom AV, Auditorium Medientechnik, AV-Rollout, Raumgröße Konferenztechnik"
        canonical="/konferenzraum-ausstattung"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Konferenzraum-Ausstattung nach Raumgröße",
          "description": "AV-Ausstattungsempfehlungen für Huddle Space, Small Meeting, Medium Meeting, Boardroom und Auditorium.",
          "numberOfItems": 5,
          "itemListElement": roomTypes.map((r, i) => ({
            "@type": "ListItem",
            "position": i + 1,
            "name": r.title,
            "description": r.description,
            "url": `https://www.slt-tg.de/konferenzraum-ausstattung#${r.id}`
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
            <Breadcrumbs items={[{ label: "Konferenzraum-Ausstattung" }]} />
            <Badge variant="outline" className="mb-6">
              Enterprise-Pillar
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Konferenzraum-Ausstattung{" "}
              <span className="text-primary">nach Raumgröße</span>
            </h1>
            <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
              Vom Huddle Space bis zum Auditorium: konkrete Hardware-Empfehlungen,
              realistische Kostenrahmen und standardisierbare Konzepte für Ihren Multi-Site-Rollout.
            </p>

            {/* Quick nav */}
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

      {/* Quick-Compare Matrix */}
      <section className="py-12 lg:py-16">
        <div className="section-container">
          <div
            ref={matrixRef}
            className={`scroll-hidden-blur ${matrixVisible ? "scroll-visible-blur" : ""}`}
          >
            <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-6 text-center">
              Übersicht: Budget & Zeitrahmen
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-3 font-semibold text-foreground">Raumtyp</th>
                    <th className="text-left py-3 px-3 font-semibold text-foreground">Größe</th>
                    <th className="text-left py-3 px-3 font-semibold text-foreground">Budget</th>
                    <th className="text-left py-3 px-3 font-semibold text-foreground">Lieferzeit</th>
                    <th className="text-left py-3 px-3 font-semibold text-foreground">Installation</th>
                  </tr>
                </thead>
                <tbody>
                  {roomTypes.map((room) => (
                    <tr key={room.id} className="border-b border-border/50 hover:bg-card/50 transition-colors">
                      <td className="py-3 px-3">
                        <a href={`#${room.id}`} className="text-primary font-medium hover:underline">
                          {room.title}
                        </a>
                      </td>
                      <td className="py-3 px-3 text-muted-foreground">{room.size}</td>
                      <td className="py-3 px-3 font-medium text-foreground">{room.budget}</td>
                      <td className="py-3 px-3 text-muted-foreground">{room.delivery}</td>
                      <td className="py-3 px-3 text-muted-foreground">{room.rolloutPerRoom}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Room Detail Sections */}
      {roomTypes.map((room, index) => (
        <RoomCard key={room.id} room={room} index={index} />
      ))}

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
              Wir standardisieren Ihre Raumkonzepte und rollen sie effizient über alle Standorte aus – 
              mit zentraler Verwaltung, einheitlicher Bedienung und transparentem Projektmanagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="btn-glow">
                <Link to="/projektanfrage">
                  Rollout-Anfrage starten
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/leistungen">
                  Unsere Leistungen
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default KonferenzraumAusstattung;