import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
      {
        name: "USB-Kameras & Soundbars",
        description: "Kompakte Lösungen für kleine bis mittlere Räume",
        products: ["Poly Studio", "Logitech Rally Bar", "Jabra PanaCast", "Huddly IQ"]
      },
      {
        name: "Raumsysteme",
        description: "Vollintegrierte Lösungen für Konferenzräume",
        products: ["Microsoft Teams Rooms", "Zoom Rooms", "Cisco Webex Rooms", "Poly G7500"]
      },
      {
        name: "PTZ-Kameras",
        description: "Schwenk-Neige-Zoom-Kameras für große Räume",
        products: ["Poly Eagle Eye", "AVer PTZ Pro", "Logitech Rally Plus", "Huddly L1"]
      }
    ],
    partners: ["Yealink", "Shure", "Huddly", "AVer"]
  },
  {
    id: "displays",
    icon: Monitor,
    title: "Displays & Visualisierung",
    description: "Von interaktiven Touch-Displays über LED-Wände bis zu professionellen Präsentationsmonitoren – Inhalte optimal präsentieren.",
    categories: [
      {
        name: "Interaktive Displays",
        description: "Touch-fähige Displays für Kollaboration",
        products: ["Microsoft Surface Hub", "Samsung Flip", "Clevertouch", "Promethean"]
      },
      {
        name: "Professionelle Monitore",
        description: "Hochwertige Displays für Präsentationen",
        products: ["Samsung Business Display", "LG Signage", "iiyama ProLite", "Philips Professional"]
      },
      {
        name: "LED-Wände",
        description: "Großformatige Visualisierung für Events",
        products: ["Samsung The Wall", "LG MAGNIT", "Absen LED", "Barco LED"]
      }
    ],
    partners: ["Samsung", "Iiyama", "Barco"]
  },
  {
    id: "audio",
    icon: Mic,
    title: "Audiotechnik",
    description: "Kristallklare Sprachverständlichkeit durch hochwertige Mikrofone, Lautsprecher und Signalverarbeitung – das Fundament jeder guten Kommunikation.",
    categories: [
      {
        name: "Konferenzmikrofone",
        description: "Tisch- und Deckenmikrofone für Meetings",
        products: ["Shure MXA920", "Sennheiser TeamConnect", "Nureva HDL300", "Biamp Parlé"]
      },
      {
        name: "Beschallung",
        description: "Professionelle Lautsprechersysteme",
        products: ["QSC Ceiling Speakers", "Bose Professional", "JBL Commercial", "Biamp Desono"]
      },
      {
        name: "DSP & Signalverarbeitung",
        description: "Digitale Audiobearbeitung & Steuerung",
        products: ["Q-Sys Core", "Biamp TesiraFORTÉ", "Shure IntelliMix", "Crestron DSP"]
      }
    ],
    partners: ["Shure", "Sennheiser", "Q-Sys", "Nureva"]
  },
  {
    id: "steuerung",
    icon: Settings,
    title: "Mediensteuerung",
    description: "Zentrale Steuerung aller Raumkomponenten über intuitive Touch-Panels oder automatisierte Szenarien – Komplexität wird einfach.",
    categories: [
      {
        name: "Touch-Controller",
        description: "Intuitive Bedienung für alle Nutzer",
        products: ["Crestron TSW", "Q-Sys TSC", "Extron TouchLink", "Logitech Tap"]
      },
      {
        name: "Steuerungsprozessoren",
        description: "Zentrale Intelligenz für Raumautomation",
        products: ["Crestron CP4", "Q-Sys Core", "Extron IPCP Pro", "Biamp TesiraLUX"]
      },
      {
        name: "Gebäudeintegration",
        description: "Anbindung an Licht, Klima & Jalousien",
        products: ["KNX-Integration", "DALI-Lichtsteuerung", "API-Schnittstellen", "BACnet-Anbindung"]
      }
    ],
    partners: ["Crestron", "Q-Sys", "Lightware"]
  },
  {
    id: "wireless",
    icon: Wifi,
    title: "Wireless Präsentation",
    description: "Kabellose Content-Sharing-Lösungen für spontane Präsentationen – vom Laptop, Tablet oder Smartphone direkt auf den Raum-Display.",
    categories: [
      {
        name: "BYOM-Lösungen",
        description: "Bring Your Own Meeting – eigenes Gerät nutzen",
        products: ["Barco ClickShare", "Mersive Solstice", "Kramer VIA", "Crestron AirMedia"]
      },
      {
        name: "Wireless Collaboration",
        description: "Multi-User-Präsentation & Annotation",
        products: ["Barco ClickShare Conference", "WePresent", "Kramer VIA Campus", "Mersive Solstice Pod"]
      },
      {
        name: "Screen Mirroring",
        description: "Native Protokolle (AirPlay, Miracast)",
        products: ["Apple TV", "Microsoft Wireless Display", "Chromecast Enterprise", "EZCast Pro"]
      }
    ],
    partners: ["Barco", "Crestron", "Purelink"]
  },
  {
    id: "signalverteilung",
    icon: Server,
    title: "Signal- & Netzwerktechnik",
    description: "Professionelle AV-over-IP-Lösungen, Matrix-Switcher und Extender für die zuverlässige Verteilung von Video- und Audiosignalen.",
    categories: [
      {
        name: "AV-over-IP",
        description: "Signalverteilung über Netzwerk",
        products: ["Crestron NVX", "Lightware VINX", "Extron NAV", "Kramer KDS"]
      },
      {
        name: "Matrix-Switcher",
        description: "Zentrale Signalverteilung",
        products: ["Lightware MX2", "Crestron DM NVX", "Extron CrossPoint", "Kramer VS"]
      },
      {
        name: "HDBaseT & Extender",
        description: "Punkt-zu-Punkt-Übertragung",
        products: ["Lightware HDBT", "Purelink HDBaseT", "Crestron DigitalMedia", "Extron DTP"]
      }
    ],
    partners: ["Lightware", "Purelink", "Crestron"]
  },
  {
    id: "it-infrastruktur",
    icon: Network,
    title: "IT-Infrastruktur & Netzwerk",
    description: "Leistungsfähige IT-Netzwerke, strukturierte Verkabelung und sichere WLAN-Lösungen – die Basis für alle modernen AV- und Kommunikationssysteme.",
    categories: [
      {
        name: "Strukturierte Verkabelung",
        description: "Kupfer- und Glasfasernetze nach Norm",
        products: ["Cat6a/Cat7 Verkabelung", "LWL-Glasfaser", "Patchfelder & Racks", "Kabelmanagement"]
      },
      {
        name: "Netzwerkinfrastruktur",
        description: "Switches, Router und Firewalls",
        products: ["Managed Switches", "VLAN-Segmentierung", "Firewall-Systeme", "VPN-Lösungen"]
      },
      {
        name: "WLAN & Wireless",
        description: "Professionelle drahtlose Netzwerke",
        products: ["Enterprise WLAN Access Points", "Wi-Fi 6E/7", "Site Surveys", "Captive Portal"]
      }
    ],
    partners: ["Cisco", "HPE Aruba", "Ubiquiti"]
  },
  {
    id: "videoueberwachung",
    icon: Eye,
    title: "Videoüberwachung & Sicherheit",
    description: "Professionelle IP-Videoüberwachungssysteme für Gebäude, Gelände und Produktionsbereiche – von der Einzelkamera bis zur unternehmensweiten Lösung.",
    categories: [
      {
        name: "IP-Kameras",
        description: "Hochauflösende Netzwerkkameras",
        products: ["Dome-Kameras", "Bullet-Kameras", "PTZ-Kameras", "Multisensor-Kameras"]
      },
      {
        name: "Aufzeichnung & Management",
        description: "Zentrale Video-Management-Systeme",
        products: ["NVR-Systeme", "VMS-Software", "Cloud-Recording", "KI-basierte Videoanalyse"]
      },
      {
        name: "Zutrittskontrolle",
        description: "Integration von Zugangs- und Sicherheitssystemen",
        products: ["Türsteuerungen", "Kartenleser & Biometrie", "Intercom-Systeme", "Alarmintegration"]
      }
    ],
    partners: ["Axis", "Hikvision", "Milestone"]
  },
];

const Technologien = () => {
  return (
    <Layout>
      <SEOHead
        title="AV- & IT-Technologien & Hersteller-Expertise"
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
      <section className="py-20 lg:py-28 bg-gradient-to-b from-primary/5 to-background">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="outline" className="mb-6">
              Technologien & Produkte
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Herstellerneutrale Technologieberatung
            </h1>
             <p className="text-lg text-muted-foreground">
               Wir empfehlen nur Produkte, die zu Ihren Anforderungen passen – nicht die mit 
               der höchsten Marge. Durch Zertifizierungen bei führenden Herstellern kennen 
               wir die Stärken und Schwächen jeder Lösung.
             </p>
          </div>
        </div>
      </section>

      {/* Technology Overview */}
      <section className="py-16 lg:py-24">
        <div className="section-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <Card
                key={tech.id}
                className="group bg-card border-border card-hover animate-fade-in-up flex flex-col h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="flex-1">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <tech.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{tech.title}</CardTitle>
                  <CardDescription>{tech.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0 mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {tech.partners.map((partner) => (
                      <Badge key={partner} variant="secondary" className="text-xs">
                        {partner}
                      </Badge>
                    ))}
                  </div>
                  <Button asChild variant="outline" className="w-full">
                    <a href={`#${tech.id}`}>
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

      {/* Detailed Technology Sections */}
      {technologies.map((tech, sectionIndex) => (
        <section
          key={tech.id}
          id={tech.id}
          className={`py-20 lg:py-28 ${sectionIndex % 2 === 0 ? "bg-card" : ""}`}
        >
          <div className="section-container">
            {/* Section Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <tech.icon className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                  {tech.title}
                </h2>
                <p className="text-muted-foreground">
                  {tech.description}
                </p>
              </div>
            </div>

            {/* Categories Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {tech.categories.map((category, index) => (
                <Card
                  key={category.name}
                  className="bg-background border-border animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <CardTitle className="text-lg">{category.name}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.products.map((product) => (
                        <li key={product} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          {product}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Partners */}
            <div className="flex items-center gap-4 flex-wrap">
              <span className="text-sm text-muted-foreground flex items-center gap-2">
                <Award className="h-4 w-4 text-primary" />
                Zertifizierter Partner:
              </span>
              {tech.partners.map((partner) => (
                <Badge key={partner} variant="outline">
                  {partner}
                </Badge>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="section-container text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Welche Technologie passt zu Ihrem Projekt?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
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
