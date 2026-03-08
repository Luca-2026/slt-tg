import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { 
  ArrowRight,
  Video,
  Monitor,
  Mic,
  Settings,
  Wifi,
  Server,
  Network,
  Eye,
  CheckCircle,
  Award
} from "lucide-react";

const technologies = [
  {
    id: "videokonferenz",
    icon: Video,
    title: "Videokonferenzsysteme",
    description: "Professionelle Bild- und Tonqualität für produktive Meetings – von der kompakten USB-Kamera bis zum vollintegrierten Raumsystem.",
    categories: [
      { name: "USB-Kameras & Soundbars", description: "Kompakte Lösungen für kleine bis mittlere Räume", products: ["Poly Studio", "Logitech Rally Bar", "Jabra PanaCast", "Huddly IQ"] },
      { name: "Raumsysteme", description: "Vollintegrierte Lösungen für Konferenzräume", products: ["Microsoft Teams Rooms", "Zoom Rooms", "Cisco Webex Rooms", "Poly G7500"] },
      { name: "PTZ-Kameras", description: "Schwenk-Neige-Zoom-Kameras für große Räume", products: ["Poly Eagle Eye", "AVer PTZ Pro", "Logitech Rally Plus", "Huddly L1"] }
    ],
    partners: ["Yealink", "Shure", "Huddly", "AVer"]
  },
  {
    id: "displays",
    icon: Monitor,
    title: "Displays & Visualisierung",
    description: "Von interaktiven Touch-Displays über LED-Wände bis zu professionellen Präsentationsmonitoren – Inhalte optimal präsentieren.",
    categories: [
      { name: "Interaktive Displays", description: "Touch-fähige Displays für Kollaboration", products: ["Microsoft Surface Hub", "Samsung Flip", "Clevertouch", "Promethean"] },
      { name: "Professionelle Monitore", description: "Hochwertige Displays für Präsentationen", products: ["Samsung Business Display", "LG Signage", "iiyama ProLite", "Philips Professional"] },
      { name: "LED-Wände", description: "Großformatige Visualisierung für Events", products: ["Samsung The Wall", "LG MAGNIT", "Absen LED", "Barco LED"] }
    ],
    partners: ["Samsung", "Iiyama", "Barco"]
  },
  {
    id: "audio",
    icon: Mic,
    title: "Audiotechnik",
    description: "Kristallklare Sprachverständlichkeit durch hochwertige Mikrofone, Lautsprecher und Signalverarbeitung – das Fundament jeder guten Kommunikation.",
    categories: [
      { name: "Konferenzmikrofone", description: "Tisch- und Deckenmikrofone für Meetings", products: ["Shure MXA920", "Sennheiser TeamConnect", "Nureva HDL300", "Biamp Parlé"] },
      { name: "Beschallung", description: "Professionelle Lautsprechersysteme", products: ["QSC Ceiling Speakers", "Bose Professional", "JBL Commercial", "Biamp Desono"] },
      { name: "DSP & Signalverarbeitung", description: "Digitale Audiobearbeitung & Steuerung", products: ["Q-Sys Core", "Biamp TesiraFORTÉ", "Shure IntelliMix", "Crestron DSP"] }
    ],
    partners: ["Shure", "Sennheiser", "Q-Sys", "Nureva"]
  },
  {
    id: "steuerung",
    icon: Settings,
    title: "Mediensteuerung",
    description: "Zentrale Steuerung aller Raumkomponenten über intuitive Touch-Panels oder automatisierte Szenarien – Komplexität wird einfach.",
    categories: [
      { name: "Touch-Controller", description: "Intuitive Bedienung für alle Nutzer", products: ["Crestron TSW", "Q-Sys TSC", "Extron TouchLink", "Logitech Tap"] },
      { name: "Steuerungsprozessoren", description: "Zentrale Intelligenz für Raumautomation", products: ["Crestron CP4", "Q-Sys Core", "Extron IPCP Pro", "Biamp TesiraLUX"] },
      { name: "Gebäudeintegration", description: "Anbindung an Licht, Klima & Jalousien", products: ["KNX-Integration", "DALI-Lichtsteuerung", "API-Schnittstellen", "BACnet-Anbindung"] }
    ],
    partners: ["Crestron", "Q-Sys", "Lightware"]
  },
  {
    id: "wireless",
    icon: Wifi,
    title: "Wireless Präsentation",
    description: "Kabellose Content-Sharing-Lösungen für spontane Präsentationen – vom Laptop, Tablet oder Smartphone direkt auf den Raum-Display.",
    categories: [
      { name: "BYOM-Lösungen", description: "Bring Your Own Meeting – eigenes Gerät nutzen", products: ["Barco ClickShare", "Mersive Solstice", "Kramer VIA", "Crestron AirMedia"] },
      { name: "Wireless Collaboration", description: "Multi-User-Präsentation & Annotation", products: ["Barco ClickShare Conference", "WePresent", "Kramer VIA Campus", "Mersive Solstice Pod"] },
      { name: "Screen Mirroring", description: "Native Protokolle (AirPlay, Miracast)", products: ["Apple TV", "Microsoft Wireless Display", "Chromecast Enterprise", "EZCast Pro"] }
    ],
    partners: ["Barco", "Crestron", "Purelink"]
  },
  {
    id: "signalverteilung",
    icon: Server,
    title: "Signal- & Netzwerktechnik",
    description: "Professionelle AV-over-IP-Lösungen, Matrix-Switcher und Extender für die zuverlässige Verteilung von Video- und Audiosignalen.",
    categories: [
      { name: "AV-over-IP", description: "Signalverteilung über Netzwerk", products: ["Crestron NVX", "Lightware VINX", "Extron NAV", "Kramer KDS"] },
      { name: "Matrix-Switcher", description: "Zentrale Signalverteilung", products: ["Lightware MX2", "Crestron DM NVX", "Extron CrossPoint", "Kramer VS"] },
      { name: "HDBaseT & Extender", description: "Punkt-zu-Punkt-Übertragung", products: ["Lightware HDBT", "Purelink HDBaseT", "Crestron DigitalMedia", "Extron DTP"] }
    ],
    partners: ["Lightware", "Purelink", "Crestron"]
  },
  {
    id: "it-infrastruktur",
    icon: Network,
    title: "IT-Infrastruktur & Netzwerk",
    description: "Leistungsfähige IT-Netzwerke, strukturierte Verkabelung und sichere WLAN-Lösungen – die Basis für alle modernen AV- und Kommunikationssysteme.",
    categories: [
      { name: "Strukturierte Verkabelung", description: "Kupfer- und Glasfasernetze nach Norm", products: ["Cat6a/Cat7 Verkabelung", "LWL-Glasfaser", "Patchfelder & Racks", "Kabelmanagement"] },
      { name: "Netzwerkinfrastruktur", description: "Switches, Router und Firewalls", products: ["Managed Switches", "VLAN-Segmentierung", "Firewall-Systeme", "VPN-Lösungen"] },
      { name: "WLAN & Wireless", description: "Professionelle drahtlose Netzwerke", products: ["Enterprise WLAN Access Points", "Wi-Fi 6E/7", "Site Surveys", "Captive Portal"] }
    ],
    partners: ["Cisco", "HPE Aruba", "Ubiquiti"]
  },
  {
    id: "videoueberwachung",
    icon: Eye,
    title: "Videoüberwachung & Sicherheit",
    description: "Professionelle IP-Videoüberwachungssysteme für Gebäude, Gelände und Produktionsbereiche – von der Einzelkamera bis zur unternehmensweiten Lösung.",
    categories: [
      { name: "IP-Kameras", description: "Hochauflösende Netzwerkkameras", products: ["Dome-Kameras", "Bullet-Kameras", "PTZ-Kameras", "Multisensor-Kameras"] },
      { name: "Aufzeichnung & Management", description: "Zentrale Video-Management-Systeme", products: ["NVR-Systeme", "VMS-Software", "Cloud-Recording", "KI-basierte Videoanalyse"] },
      { name: "Zutrittskontrolle", description: "Integration von Zugangs- und Sicherheitssystemen", products: ["Türsteuerungen", "Kartenleser & Biometrie", "Intercom-Systeme", "Alarmintegration"] }
    ],
    partners: ["Axis", "Hikvision", "Milestone"]
  },
];

function TechOverviewCard({ tech, index }: { tech: typeof technologies[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation<HTMLAnchorElement>();
  return (
    <a
      ref={ref}
      href={`#${tech.id}`}
      className={`block group scroll-hidden ${isVisible ? "scroll-visible" : ""}`}
      style={{ transitionDelay: `${index * 0.06}s` }}
    >
      <Card className="bg-card border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 flex flex-col h-full">
        <CardHeader className="flex-1 p-4 lg:p-6">
          <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/15 transition-colors">
            <tech.icon className="h-5 w-5 text-primary" />
          </div>
          <CardTitle className="text-base lg:text-lg">{tech.title}</CardTitle>
          <CardDescription className="text-xs lg:text-sm line-clamp-2">{tech.description}</CardDescription>
        </CardHeader>
        <CardContent className="pt-0 p-4 lg:p-6 lg:pt-0 mt-auto">
          <div className="flex flex-wrap gap-1.5 mb-3">
            {tech.partners.map((partner) => (
              <Badge key={partner} variant="secondary" className="text-[10px] lg:text-xs px-2 py-0.5">
                {partner}
              </Badge>
            ))}
          </div>
          <span className="text-xs text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all">
            Details ansehen <ArrowRight className="h-3 w-3" />
          </span>
        </CardContent>
      </Card>
    </a>
  );
}

function TechDetailSection({ tech, index }: { tech: typeof technologies[0]; index: number }) {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();
  const isEven = index % 2 === 0;

  return (
    <section
      id={tech.id}
      className={`py-16 lg:py-24 ${isEven ? "bg-card/50" : ""}`}
    >
      <div className="section-container">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`flex flex-col sm:flex-row items-start gap-4 mb-10 scroll-hidden-blur ${headerVisible ? "scroll-visible-blur" : ""}`}
        >
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
            <tech.icon className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-1">
              {tech.title}
            </h2>
            <p className="text-sm lg:text-base text-muted-foreground max-w-2xl">
              {tech.description}
            </p>
          </div>
        </div>

        {/* Categories Grid */}
        <div
          ref={cardsRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 mb-8"
        >
          {tech.categories.map((category, i) => (
            <Card
              key={category.name}
              className={`bg-background/80 backdrop-blur-sm border-border/60 hover:border-primary/30 hover:shadow-md transition-all duration-300 scroll-hidden ${cardsVisible ? "scroll-visible" : ""}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <CardHeader className="p-4 lg:p-5 pb-2 lg:pb-2">
                <CardTitle className="text-sm lg:text-base font-semibold">{category.name}</CardTitle>
                <CardDescription className="text-xs lg:text-sm">{category.description}</CardDescription>
              </CardHeader>
              <CardContent className="p-4 lg:p-5 pt-2">
                <ul className="space-y-1.5">
                  {category.products.map((product) => (
                    <li key={product} className="flex items-center gap-2 text-xs lg:text-sm text-muted-foreground">
                      <CheckCircle className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                      {product}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Partners */}
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-xs lg:text-sm text-muted-foreground flex items-center gap-1.5">
            <Award className="h-3.5 w-3.5 text-primary" />
            Zertifizierter Partner:
          </span>
          {tech.partners.map((partner) => (
            <Badge key={partner} variant="outline" className="text-xs">
              {partner}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}

const Technologien = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.05 });
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  return (
    <Layout>
      <SEOHead
        title="Technologien & Hersteller – AV-Expertise"
        description="Herstellerneutrale Beratung zu Videokonferenzsystemen, IT-Infrastruktur, Displays, Audiotechnik und Mediensteuerung. Zertifizierter Partner von Shure, Crestron, Barco und mehr."
        keywords="AV-Technologie, IT-Lösungen, Videokonferenzsystem, Shure Mikrofon, Crestron Steuerung, Microsoft Teams Rooms, IT-Infrastruktur, Fachplaner Medientechnik"
        canonical="/technologien"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "AV- & IT-Technologien",
          "description": "Herstellerneutrale Technologieberatung für professionelle Medientechnik und IT-Infrastruktur.",
          "itemListElement": technologies.map((t, i) => ({
            "@type": "ListItem",
            "position": i + 1,
            "name": t.title,
            "description": t.description
          }))
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
              Technologien & Produkte
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Herstellerneutrale{" "}
              <span className="text-primary">Technologieberatung</span>
            </h1>
            <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
              Wir empfehlen nur Produkte, die zu Ihren Anforderungen passen – nicht die mit 
              der höchsten Marge. Durch Zertifizierungen bei führenden Herstellern kennen 
              wir die Stärken und Schwächen jeder Lösung.
            </p>

            {/* Quick nav pills */}
            <div className="flex flex-wrap justify-center gap-2 mt-10">
              {technologies.map((t) => (
                <a
                  key={t.id}
                  href={`#${t.id}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-background/80 backdrop-blur-sm text-xs lg:text-sm text-muted-foreground hover:border-primary/40 hover:text-primary transition-all duration-200"
                >
                  <t.icon className="h-3 w-3 lg:h-3.5 lg:w-3.5" />
                  <span className="hidden sm:inline">{t.title}</span>
                  <span className="sm:hidden">{t.title.split(" ")[0]}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Overview Grid */}
      <section className="py-16 lg:py-24">
        <div className="section-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5">
            {technologies.map((tech, index) => (
              <TechOverviewCard key={tech.id} tech={tech} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Technology Sections */}
      {technologies.map((tech, sectionIndex) => (
        <TechDetailSection key={tech.id} tech={tech} index={sectionIndex} />
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
            Welche Technologie passt zu Ihrem Projekt?
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Die Auswahl der richtigen Technologie hängt von vielen Faktoren ab. 
            Im kostenfreien Erstgespräch analysieren wir Ihre Anforderungen und 
            finden die optimale Lösung.
          </p>
          <Button asChild size="lg" className="btn-glow">
            <Link to="/projektanfrage">
              Beratungsgespräch vereinbaren
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Technologien;
