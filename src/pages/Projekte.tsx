import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
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
  Star,
  Quote
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const categories = [
  { id: "all", name: "Alle Projekte" },
  { id: "boardroom", name: "Boardroom" },
  { id: "schulung", name: "Schulung" },
  { id: "management", name: "Management" },
  { id: "multi-room", name: "Multi-Room" },
];

const projects = [
  {
    id: "aluminium-norf",
    company: "Aluminium Norf GmbH",
    category: "boardroom",
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
    category: "multi-room",
    categoryLabel: "Multi-Room Rollout",
    location: "Köln",
    year: "2023",
    icon: Monitor,
    heroImage: "/assets/projects/pfeifer-langen/pl-boardroom.jpg",
    galleryImages: [
      "/assets/projects/pfeifer-langen/pl-boardroom.jpg",
      "/assets/projects/pfeifer-langen/pl-main.jpg",
      "/assets/projects/pfeifer-langen/pl-meeting-room.jpg",
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
    category: "management",
    categoryLabel: "Management Room",
    location: "Bönen",
    year: "2024",
    icon: Users,
    heroImage: "/assets/projects/gea-farm/gea-main.jpg",
    galleryImages: [
      "/assets/projects/gea-farm/gea-installation.jpg",
      "/assets/projects/gea-farm/gea-room.jpg",
    ],
    shortDescription: "Konzeption und Umsetzung eines modernen Managementraums mit Huddly L1, Nureva HDL-310 und zwei 75\" Iiyama 4K Displays.",
    challenge: "Das Management benötigte einen repräsentativen Raum für Präsentationen, Video-Meetings und strategische Workshops – mit höchsten Ansprüchen an Bild- und Tonqualität.",
    solution: "Installation einer Huddly L1 Kamera für kristallklare Videoübertragung, Nureva HDL-310 Audiobar für professionelle Tonqualität sowie zwei 75\" Iiyama 4K Displays für optimale Visualisierung und Präsentationen.",
    results: [
      "Repräsentativer Raum für Kunden- und Investorenpräsentationen",
      "Kristallklare Video- und Audioqualität bei Konferenzen",
      "Dual-Display-Setup für flexible Präsentationsmöglichkeiten",
      "Nahtlose Integration in bestehende UC-Plattformen",
    ],
    tags: ["Huddly L1", "Nureva HDL-310", "Iiyama 4K", "Dual-Display"],
  },
];

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
                  {t.avatar && <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover grayscale" />}
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

const Projekte = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
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
        title="Referenzen: Realisierte Medientechnik-Projekte"
        description="Erfolgreiche AV-Projekte: Boardrooms, Schulungsräume, Multi-Room-Rollouts. Sehen Sie Referenzen unseres Fachbüros für Medientechnik in NRW."
        keywords="Medientechnik Referenzen, AV-Projekt Beispiele, Konferenzraum Installation, LED-Wall Projekt, Fachbüro Referenzen NRW"
        canonical="/projekte"
      />
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-primary/5 to-background">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="outline" className="mb-6">
              Referenzen
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ausgewählte Projekte
            </h1>
            <p className="text-lg text-muted-foreground">
              Ein Einblick in realisierte Projekte – von einzelnen Boardrooms 
              bis zu unternehmensweiten Rollouts mit über 20 Räumen.
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
                  {/* Project Image */}
                  <div className="aspect-video lg:aspect-auto bg-secondary flex items-center justify-center relative overflow-hidden min-h-[300px]">
                    {project.heroImage ? (
                      <img 
                        src={project.heroImage} 
                        alt={`${project.company} Referenzprojekt: ${project.categoryLabel} in ${project.location} - ${project.shortDescription.substring(0, 80)}`}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <>
                        <project.icon className="h-24 w-24 text-muted-foreground/20" aria-hidden="true" />
                        <p className="absolute bottom-4 left-4 right-4 text-xs text-muted-foreground text-center">
                          Bildplatzhalter – Hier kommt ein Projektfoto
                        </p>
                      </>
                    )}
                    <div className="absolute top-4 left-4">
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
                                    alt={`${project.company} - Bild ${idx + 1}`}
                                    className="w-full h-full object-cover"
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
            alt="Projektbild vergrößert"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </Layout>
  );
};

export default Projekte;
