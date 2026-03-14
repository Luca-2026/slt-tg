import { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  Users, 
  Monitor, 
  ArrowRight,
  MapPin,
  Calendar,
  CheckCircle,
  X,
  ChevronLeft,
  ChevronRight,
  Star,
  Quote
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const categories = [
  { id: "all", name: "Alle Projekte" },
  { id: "videokonferenz", name: "Videokonferenzlösungen" },
  { id: "digital-signage", name: "Digital-Signage" },
  { id: "it-infrastruktur", name: "IT-Infrastruktur & Netzwerk" },
];

interface ProjectImage {
  src: string;
  position?: string; // CSS object-position value
}

const projects = [
  {
    id: "aluminium-norf",
    company: "Aluminium Norf GmbH",
    category: "videokonferenz",
    categoryLabel: "Boardroom & Schulung",
    location: "Neuss",
    year: "2024",
    icon: Building2,
    heroImage: "/assets/projects/alunorf/alunorf-main.jpg",
    galleryImages: [
      "/assets/projects/alunorf/alunorf-main.jpg",
      "/assets/projects/alunorf/alunorf-control.jpg",
      "/assets/projects/alunorf/alunorf-logo.jpg",
      "/assets/projects/alunorf/alunorf-speaker.jpg",
      "/assets/projects/alunorf/alunorf-dual-screen.jpg",
      "/assets/projects/alunorf/alunorf-ceiling.jpg",
    ],
    shortDescription: "Ausbau von zwei Räumen zu modernen Videokonferenz- und Schulungsumgebungen mit Shure, Nureva und AVer Tracking-Kameras.",
    challenge: "Die bestehenden Räume entsprachen nicht mehr den Anforderungen an moderne hybride Meetings und Schulungen. Es fehlte eine professionelle Audio-/Videolösung für nahtlose Zusammenarbeit mit internationalen Partnern.",
    solution: "Ausstattung mit Shure MXA 920 Deckenmikrofonen, MXN5W-C PoE Deckeneinbaulautsprechern sowie Nureva HDL-310 Mikrofon-/Lautsprecherbar. Ergänzt durch AVer PTZ-Kameras mit intelligenter Presenter-Tracking-Funktion für zukunftssichere Integration in die IT-Infrastruktur.",
    results: [
      "Nahtlose hybride Meetings mit internationalen Partnern",
      "Intelligentes Presenter-Tracking für professionelle Schulungen",
      "Zukunftssichere Integration in bestehende IT-Infrastruktur",
      "Hervorragende Audioqualität durch Shure & Nureva Technik",
    ],
    tags: ["Shure", "Nureva", "AVer Tracking", "Hybride Meetings"],
  },
  {
    id: "pfeifer-langen",
    company: "Pfeifer & Langen GmbH & Co. KG",
    category: "videokonferenz",
    categoryLabel: "Multi-Room Rollout",
    location: "Köln",
    year: "2023",
    icon: Monitor,
    heroImage: "/assets/projects/pfeifer-langen/pl-teams-room.jpg",
    galleryImages: [
      "/assets/projects/pfeifer-langen/pl-main.jpg",
      "/assets/projects/pfeifer-langen/pl-meeting-room.jpg",
      "/assets/projects/pfeifer-langen/pl-led-wall.jpg",
      "/assets/projects/pfeifer-langen/pl-montage.jpg",
      "/assets/projects/pfeifer-langen/pl-construction.jpg",
      "/assets/projects/pfeifer-langen/pl-installation.jpg",
      "/assets/projects/pfeifer-langen/pl-frame.jpg",
    ],
    shortDescription: "Standardisierte Ausstattung von über 20 Konferenzräumen inklusive einer 136\" LED-Wall.",
    challenge: "Die bestehende Konferenzraumausstattung war heterogen und veraltet. Nutzer beklagten eine uneinheitliche Bedienung und häufige technische Probleme bei Video-Meetings.",
    solution: "Entwicklung eines einheitlichen Raumstandards für alle Raumgrößen. Rollout über 20 Räume mit zentraler Managementplattform. Highlight: 136\" LED-Wall im Managementbereich für beeindruckende Präsentationen.",
    results: [
      "Einheitliche Nutzererfahrung in allen Räumen",
      "Zentrale Verwaltung und Monitoring aller Systeme",
      "136\" LED-Wall als Aushängeschild für Kundenbesuche",
      "Deutlich reduzierte Supportanfragen durch intuitive Bedienung",
    ],
    tags: ["20+ Räume", "LED-Wall", "Standardisierung", "Zentrale Verwaltung"],
  },
  {
    id: "gea-farm",
    company: "GEA Farm Technologies",
    category: "videokonferenz",
    categoryLabel: "Management Room & Besprechungsräume",
    location: "Bönen",
    year: "2024–2026",
    icon: Users,
    heroImage: "/assets/projects/gea-farm/gea-display-wall.jpg",
    galleryImages: [
      "/assets/projects/gea-farm/gea-display-wall.jpg",
      "/assets/projects/gea-farm/gea-clickshare.jpg",
      "/assets/projects/gea-farm/gea-dual-display.jpg",
      "/assets/projects/gea-farm/gea-installation.jpg",
      "/assets/projects/gea-farm/gea-camera.jpg",
    ],
    shortDescription: "Management Room und drei weitere Besprechungsräume mit Huddly-Kameras, Nureva HDL-310, Iiyama Displays und Barco ClickShare CX – BYOD-fähig und sofort einsatzbereit.",
    challenge: "Nach der erfolgreichen Ausstattung des Managementraums 2024 benötigte GEA Farm Technologies im März 2026 drei weitere Besprechungsräume mit einer einheitlichen, modernen AV-Ausstattung für hybride Meetings und kabellose Präsentationen.",
    solution: "Ausstattung aller Räume mit Iiyama 65\" Displays, Huddly L1 und Huddly S1 KI-Kameras für automatisches Framing, Nureva HDL-310 Audiobars für kristallklare Sprachverständlichkeit sowie Barco ClickShare CX für kabelloses BYOD – jeder Mitarbeiter kann ohne Adapter sofort präsentieren.",
    results: [
      "Insgesamt vier professionell ausgestattete Konferenzräume",
      "Kabelloses BYOD dank Barco ClickShare CX in allen neuen Räumen",
      "KI-gestützte Kameras (Huddly L1 & S1) mit automatischem Speaker Tracking",
      "Einheitliche Raumausstattung für einfache Bedienung und Wartung",
      "Nahtlose Integration in bestehende UC-Plattformen",
    ],
    tags: ["Huddly L1", "Huddly S1", "Nureva HDL-310", "Iiyama 65\"", "Barco ClickShare CX", "BYOD"],
  },
  {
    id: "bensersiel",
    company: "Tourismus Information Bensersiel",
    category: "digital-signage",
    categoryLabel: "Digital-Signage (interaktiv)",
    location: "Bensersiel",
    year: "2025",
    icon: Monitor,
    heroImage: "/assets/projects/bensersiel/bensersiel-main.jpg",
    galleryImages: [
      "/assets/projects/bensersiel/bensersiel-main.jpg",
      "/assets/projects/bensersiel/bensersiel-strand.jpg",
    ],
    shortDescription: "Interaktives Digital-Signage-System mit Samsung QMC Displays und einem 105\" Iiyama Ultra Wide Touchdisplay für die Tourismus Information.",
    challenge: "Die Tourismus Information Bensersiel benötigte eine moderne, interaktive Lösung, um Gästen jederzeit aktuelle Informationen zu Fährabfahrtzeiten, Gastronomie und Freizeitangeboten zugänglich zu machen – intuitiv bedienbar und zentral pflegbar.",
    solution: "Installation mehrerer Samsung QMC Displays und eines beeindruckenden 105\" interaktiven Iiyama 21:9 Ultra Wide Displays. Der Clou: Gäste können über das Touchdisplay interaktiv Informationen abrufen – von Fährabfahrtzeiten bis zu Gastronomie-Tipps. Alle Displays sind über das Content Management System unseres Partners Connect Signage eingebunden. Die Inhalte können von den Kunden einfach und selbst gepflegt werden – über die Cloud jederzeit erreichbar.",
    results: [
      "Interaktive Gästeinformation über 105\" Ultra Wide Touchdisplay",
      "Mehrere Samsung QMC Displays für Informationsanzeige",
      "Cloud-basiertes Content Management über Connect Signage",
      "Eigenständige Pflege der Inhalte durch den Kunden jederzeit möglich",
      "Intuitive Bedienung für Touristen ohne Einweisung",
    ],
    tags: ["Samsung QMC", "Iiyama 105\" Ultra Wide", "Digital-Signage", "Touchdisplay", "Connect Signage", "CMS"],
  },
  {
    id: "sonoco",
    company: "Sonoco (mehrere Standorte)",
    category: "it-infrastruktur",
    categoryLabel: "WiFi-Infrastruktur & Netzwerk",
    location: "Deutschlandweit",
    year: "2022–2023",
    icon: Building2,
    heroImage: "/assets/projects/sonoco/sonoco-ekahau.jpg",
    galleryImages: [
      "/assets/projects/sonoco/sonoco-ekahau.jpg",
      "/assets/projects/sonoco/sonoco-switch.jpg",
      "/assets/projects/sonoco/sonoco-rack.jpg",
      "/assets/projects/sonoco/sonoco-ap.jpg",
      "/assets/projects/sonoco/sonoco-cabling.jpg",
      "/assets/projects/sonoco/sonoco-ceiling.jpg",
      "/assets/projects/sonoco/sonoco-lift.jpg",
      "/assets/projects/sonoco/sonoco-installation.jpg",
    ],
    heroPosition: "center 60%",
    imagePositions: {
      "/assets/projects/sonoco/sonoco-rack.jpg": "center 30%",
      "/assets/projects/sonoco/sonoco-ap.jpg": "center 40%",
      "/assets/projects/sonoco/sonoco-cabling.jpg": "center 40%",
      "/assets/projects/sonoco/sonoco-lift.jpg": "center 40%",
      "/assets/projects/sonoco/sonoco-installation.jpg": "center 30%",
    },
    shortDescription: "Komplette WiFi-Infrastruktur für mehrere Werksstandorte des Marktführers – von der EKAHAU-Ausleuchtung über Cat-7-Verkabelung bis zur Cisco Meraki Implementierung im laufenden 24/7 Betrieb.",
    challenge: "Sonoco benötigte an mehreren deutschen Standorten eine vollständig neue WiFi-Infrastruktur für die Werke sowie die Anbindung digitaler IoT-Anwendungen. Die größte Herausforderung: Sämtliche Arbeiten mussten während des laufenden 24/7-Betriebs umgesetzt werden – ohne Ausfallzeiten.",
    solution: "Zunächst wurde ein professioneller On-Site Survey mit EKAHAU durchgeführt, um die optimale Access-Point-Platzierung zu ermitteln. Anschließend wurde die gesamte strukturierte Verkabelung auf Cat 7 erneuert. Die neue Infrastruktur wurde mit modernen Cisco Meraki Access Points und Switches ausgestattet, die eine zuverlässige Abdeckung für WiFi und IoT-Anwendungen in den Produktionshallen gewährleisten.",
    results: [
      "Professionelle EKAHAU-Ausleuchtung aller Standorte",
      "Vollständige Erneuerung der strukturierten Verkabelung auf Cat 7",
      "Cisco Meraki Access Points & Switches für zuverlässige WiFi-Abdeckung",
      "Implementierung digitaler IoT-Anwendungen in der Produktion",
      "Gesamte Umsetzung im laufenden 24/7-Betrieb ohne Ausfallzeiten",
    ],
    tags: ["Cisco Meraki", "EKAHAU", "Cat 7", "WiFi", "IoT", "24/7 Betrieb"],
  },
];

const tagLinks: Record<string, string> = {
  "Shure": "/technologien#audio",
  "Nureva": "/technologien#audio",
  "Nureva HDL-310": "/technologien#audio",
  "AVer Tracking": "/technologien#video",
  "Huddly L1": "/technologien#video",
  "Huddly S1": "/technologien#video",
  "Iiyama 4K": "/technologien#displays",
  "Iiyama 65\"": "/technologien#displays",
  "Iiyama 105\" Ultra Wide": "/technologien#displays",
  "LED-Wall": "/technologien#displays",
  "Barco ClickShare CX": "/technologien#praesentationstechnik",
  "BYOD": "/technologien#praesentationstechnik",
  "Samsung QMC": "/technologien#displays",
  "Digital-Signage": "/loesungen#digital-signage",
  "Cisco Meraki": "/technologien#netzwerk",
  "EKAHAU": "/technologien#netzwerk",
  "Cat 7": "/technologien#netzwerk",
  "WiFi": "/technologien#netzwerk",
  "IoT": "/technologien#netzwerk",
};

const testimonials = [
  {
    name: "Thomas Döbber-Rüther",
    position: "Geschäftsführer",
    company: "Rheinhotel Dreesen GmbH",
    rating: 5,
    text: "Wir haben die Firma SLT Technology Group als zuverlässigen Partner im Bereich der Neuausstattung unserer Tagungsräume erlebt. Schnelle Abwicklung, kompetente Monteure und ein insgesamt reibungsloser Ablauf! Vielen Dank und gerne wieder!",
    avatar: "/assets/testimonials/thomas.png",
  },
  {
    name: "Apostolos Parashos",
    position: "Geschäftsführer",
    company: "Laki's Gastro GmbH, Düsseldorf",
    rating: 5,
    text: "SLT hat unseren Gastronomie- und Eventbereich mit modernster LED-Beleuchtungstechnik, einer durchdachten Beschallungslösung, mehreren Digital-Signage Displays und einem leistungsfähigen Gäste-WIFI ausgestattet. Besonders großartig ist die ortsunabhängige Steuerung aller Komponenten über ein Tablet!",
    avatar: "/assets/testimonials/lakis.jpg",
  },
  {
    name: "André Perthel",
    position: "Geschäftsführer",
    company: "Ma2Me2 GmbH, Berlin",
    rating: 5,
    text: "Wir arbeiten bereits seit mehreren Jahren partnerschaftlich mit SLT im Bereich der Netzwerktechnik und der Planung von Videokonferenzlösungen zusammen. Die Zusammenarbeit zeichnet sich durch unkomplizierte Kommunikation und einer schnellen, stets professionellen Ausführung aus.",
  },
];

const clients = [
  { name: "TomTom", logo: "/assets/clients/tomtom.jpg", url: "https://www.tomtom.com" },
  { name: "Rheinhotel Dreesen", logo: "/assets/clients/rheinhotel-dreesen.png", url: "https://www.rheinhoteldreesen.de" },
  { name: "Langeoog Tourismus", logo: "/assets/clients/langeoog.png", url: "https://www.langeoog.de" },
  { name: "Rhenus Lub", logo: "/assets/clients/rhenus.webp", url: "https://www.rhenuslub.de" },
  { name: "Bank-Verlag", logo: "/assets/clients/bank-verlag.svg", url: "https://www.bank-verlag.de" },
  { name: "Montaplast", logo: "/assets/clients/montaplast.png", url: "https://www.montaplast.com" },
  { name: "GEA", logo: "/assets/clients/gea.png", url: "https://www.gea.com" },
  { name: "Pfeifer & Langen", logo: "/assets/clients/pfeifer-langen.svg", url: "https://www.pfeifer-langen.com" },
];

function TestimonialsOnProjekte() {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section className="py-16 lg:py-20 bg-muted/30">
      <div className="section-container">
        <div ref={ref} className={`text-center mb-10 scroll-hidden-blur ${isVisible ? "scroll-visible-blur" : ""}`}>
          <Badge variant="outline" className="mb-4">Kundenstimmen</Badge>
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground">Das sagen unsere Kunden</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Card key={i} className="bg-card border-border relative overflow-hidden">
              <CardContent className="p-6">
                <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/10" />
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">"{t.text}"</p>
                <div className="border-t border-border pt-4 flex items-center gap-3">
                  {t.avatar && <img src={t.avatar} alt={`${t.name}, ${t.position} bei ${t.company}`} className="w-10 h-10 rounded-full object-cover grayscale" />}
                  <div>
                    <p className="font-semibold text-foreground text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.position}, {t.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClientLogosOnProjekte() {
  return (
    <section className="py-12 bg-background">
      <div className="section-container">
        <h3 className="text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-8">Weitere Kunden</h3>
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
          {clients.map((c) => (
            <a key={c.name} href={c.url} target="_blank" rel="noopener noreferrer" className="grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              <img src={c.logo} alt={`${c.name} Logo`} loading="lazy" className="h-10 lg:h-12 w-auto object-contain" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectImageSlider({ images, imagePositions, alt }: { images: string[]; imagePositions?: Record<string, string>; alt: string }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <>
      {images.map((img, idx) => (
        <img
          key={img}
          src={img}
          alt={`${alt} – Bild ${idx + 1}`}
          loading="lazy"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            idx === current ? "opacity-100" : "opacity-0"
          }`}
          style={{ objectPosition: imagePositions?.[img] || "center center" }}
        />
      ))}
    </>
  );
}

const Projekte = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.05 });
  const [activeCategory, setActiveCategory] = useState("all");
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const location = useLocation();

  // Scroll to project if hash is present
  useEffect(() => {
    if (location.hash) {
      const projectId = location.hash.slice(1);
      setExpandedProject(projectId);
      setTimeout(() => {
        document.getElementById(projectId)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, [location.hash]);

  const filteredProjects = projects.filter(
    (p) => activeCategory === "all" || p.category === activeCategory
  );

  return (
    <Layout>
      <SEOHead
        title="Referenzen & Projekte – Medientechnik aus NRW"
        description="Realisierte AV-Projekte: Boardrooms, Schulungsräume, Multi-Room-Rollouts mit LED-Wall. Referenzen der SLT Technology Group – jetzt ansehen!"
        keywords="Medientechnik Referenzen, AV-Projekt Beispiele, Konferenzraum Installation, LED-Wall Projekt, Fachbüro Referenzen NRW"
        canonical="/projekte"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Referenzprojekte der SLT Technology Group",
          "itemListElement": projects.map((p, i) => ({
            "@type": "ListItem",
            "position": i + 1,
            "name": `${p.company} – ${p.categoryLabel}`,
            "description": p.shortDescription,
            "url": `https://www.slt-tg.de/projekte#${p.id}`,
            "image": `https://www.slt-tg.de${p.heroImage}`
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
            <Breadcrumbs items={[{ label: "Projekte" }]} />
            <Badge variant="outline" className="mb-6">
              Referenzen
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Referenzprojekte:{" "}
              <span className="text-primary">Medientechnik, IT & Netzwerk</span>
            </h1>
            <p className="text-base lg:text-lg text-muted-foreground">
              Ein Einblick in realisierte Projekte – von Konferenzräumen über 
              Digital-Signage bis hin zu unternehmensweiten IT-Infrastrukturen.
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-card border-y border-border sticky top-16 lg:top-20 z-40">
        <div className="section-container">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={activeCategory === cat.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(cat.id)}
                className="transition-all"
              >
                {cat.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 lg:py-28">
        <div className="section-container">
          <div className="space-y-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={project.id}
                id={project.id}
                className="bg-card border-border overflow-hidden animate-fade-in-up scroll-mt-32"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="grid lg:grid-cols-2">
                  {/* Project Image Slideshow */}
                  <div className="aspect-video bg-secondary relative overflow-hidden">
                    {project.galleryImages && project.galleryImages.length > 0 ? (
                      <ProjectImageSlider 
                        images={project.galleryImages}
                        imagePositions={(project as any).imagePositions}
                        alt={`${project.company} Referenzprojekt: ${project.categoryLabel} in ${project.location}`}
                      />
                    ) : project.heroImage ? (
                      <img 
                        src={project.heroImage} 
                        alt={`${project.company} Referenzprojekt: ${project.categoryLabel} in ${project.location}`}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover"
                        style={{ objectPosition: (project as any).heroPosition || "center center" }}
                      />
                    ) : (
                      <>
                        <project.icon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-24 w-24 text-muted-foreground/20" aria-hidden="true" />
                      </>
                    )}
                    <div className="absolute top-4 left-4 z-20">
                      <Badge className="bg-primary text-primary-foreground">
                        {project.categoryLabel}
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 lg:p-8">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {project.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {project.year}
                      </span>
                    </div>

                    <h2 className="text-2xl font-bold text-foreground mb-2">
                      {project.company}
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      {project.shortDescription}
                    </p>

                    {expandedProject === project.id ? (
                      <div className="space-y-6 animate-fade-in">
                        {/* Gallery */}
                        {project.galleryImages && project.galleryImages.length > 0 && (
                          <div>
                            <h3 className="font-semibold text-foreground mb-3">Bildergalerie</h3>
                            <div className="grid grid-cols-3 gap-2">
                              {project.galleryImages.map((img, idx) => (
                                <button
                                  key={idx}
                                  onClick={() => setLightboxImage(img)}
                                  className="aspect-video bg-secondary rounded overflow-hidden hover:opacity-80 transition-opacity"
                                >
                                  <img 
                                    src={img} 
                                    alt={`${project.company} – Projektbild ${idx + 1}: AV-Installation ${project.categoryLabel}`}
                                    className="w-full h-full object-cover"
                                    style={{ objectPosition: (project as any).imagePositions?.[img] || "center center" }}
                                  />
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">Ausgangslage</h3>
                          <p className="text-sm text-muted-foreground">{project.challenge}</p>
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">Lösung</h3>
                          <p className="text-sm text-muted-foreground">{project.solution}</p>
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">Ergebnis</h3>
                          <ul className="space-y-2">
                            {project.results.map((result) => (
                              <li key={result} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                {result}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setExpandedProject(null)}
                        >
                          Weniger anzeigen
                        </Button>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => {
                            const link = tagLinks[tag];
                            return link ? (
                              <Link key={tag} to={link}>
                                <Badge variant="outline" className="text-xs hover:bg-primary/10 hover:border-primary/30 transition-colors cursor-pointer">
                                  {tag}
                                </Badge>
                              </Link>
                            ) : (
                              <Badge key={tag} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            );
                          })}
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setExpandedProject(project.id)}
                        >
                          Details anzeigen
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsOnProjekte />

      {/* Client Logos */}
      <ClientLogosOnProjekte />

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="section-container text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Ähnliches Projekt geplant?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Lassen Sie uns über Ihr Vorhaben sprechen. Im kostenfreien Erstgespräch 
            analysieren wir Ihre Anforderungen und entwickeln erste Lösungsansätze.
          </p>
          <Button asChild size="lg" className="btn-glow">
            <Link to="/projektanfrage">
              Projektanfrage starten
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <img 
            src={lightboxImage} 
            alt="Vergrößerte Projektansicht – AV-Installation von SLT Technology Group"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </Layout>
  );
};

export default Projekte;
