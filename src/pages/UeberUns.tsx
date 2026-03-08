import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { 
  ArrowRight, 
  Award, 
  Target, 
  Handshake, 
  Lightbulb,
  Users,
  MapPin,
  Calendar,
  CheckCircle,
  Leaf,
  Heart,
  Mail,
  Building2,
  Rocket,
  TrendingUp
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Herstellerneutral",
    description: "Wir empfehlen nur, was zu Ihren Anforderungen passt – nicht was die höchste Marge bringt.",
  },
  {
    icon: Handshake,
    title: "Partnerschaftlich",
    description: "Wir sehen uns als verlängerten Arm Ihrer IT-Abteilung, nicht als externen Berater.",
  },
  {
    icon: Leaf,
    title: "Nachhaltig",
    description: "Als Inklusionsunternehmen prägen uns die Werte Nachhaltigkeit und Klimaneutralität.",
  },
  {
    icon: Award,
    title: "Qualitätsfokussiert",
    description: "Lieber einmal richtig als dreimal nachbessern. Qualität spart langfristig Kosten.",
  },
];

const timeline = [
  { year: "2016", title: "Gründung", text: "Gründung der SLT Event Production UG (haftungsbeschränkt) mit Sitz in Köln.", icon: Rocket },
  { year: "2017", title: "Umfirmierung", text: "Umwandlung in die SLT Event Production GmbH und Umzug in die neuen Geschäftsräume nach Düsseldorf.", icon: TrendingUp },
  { year: "2018", title: "Neuer Standort", text: "Bezug des neuen Standorts in Ratingen-Homberg.", icon: Building2 },
  { year: "2020", title: "Neuausrichtung", text: 'Erweiterung des Portfolios und Umfirmierung in "SLT Technology Group GmbH & Co. KG".', icon: Lightbulb },
  { year: "2020", title: "Standort Krefeld", text: "Bezug des neuen Standorts in Krefeld-Fichtenhain an der A44 mit neuen Büros und Lagerflächen.", icon: MapPin },
  { year: "2025", title: "Expansion nach Bonn", text: "Eröffnung der Zweigniederlassung in Bonn – Ausbau der Präsenz im Rheinland und stärkere Nähe zu Kunden in der Region Bonn/Koblenz.", icon: Building2 },
];

const teamMembers = [
  { name: "Benedikt Nöchel", role: "Projektleitung & Vertrieb", image: "/assets/team/benedikt-noechel.jpg", email: "b.noechel@slt-tg.de" },
  { name: "Ersel Uzun", role: "Technik & Service", image: "/assets/team/ersel-uzun.jpg", email: "e.uzun@slt-tg.de" },
  { name: "Maibrit Breuer", role: "Marketing & Design", image: null, email: "m.breuer@slt-tg.de" },
  { name: "Juno", role: "Feel Good Manager 🐾", image: "/assets/team/juno.png", email: null },
  { name: "Andreas Scherzow", role: "Logistik & Lager", image: null, email: "a.scherzow@slt-tg.de" },
  { name: "Patricia Preuss", role: "Verwaltung & Office", image: null, email: "p.preuss@slt-tg.de" },
];

const whyItems = [
  "Inhabergeführt & persönlich",
  "Über 7 Jahre Branchenerfahrung",
  "Herstellerneutrale Beratung",
  "Inklusionsunternehmen",
  "Nachhaltig & klimaneutral",
  "Deutschlandweit & europaweit tätig",
  "Maßgeschneiderte AV- & IT-Lösungen",
  "Langfristige Partnerschaften",
];

function TimelineItem({ item, index, isActive, onClick }: { 
  item: typeof timeline[0]; index: number; isActive: boolean; onClick: () => void 
}) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative pl-10 md:pl-0 pb-8 last:pb-0 cursor-pointer group scroll-hidden ${isVisible ? "scroll-visible" : ""}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
      onClick={onClick}
    >
      <div className={`md:flex md:items-start ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
        {/* Dot on timeline */}
        <div
          className={`absolute left-0 md:left-1/2 w-5 h-5 rounded-full border-4 border-background md:-translate-x-1/2 z-10 transition-all duration-300 ${
            isActive ? "bg-accent scale-125 shadow-md" : "bg-primary group-hover:scale-110"
          }`}
        />

        {/* Content card */}
        <div className={`md:w-[calc(50%-2rem)] ${isLeft ? "md:text-right md:mr-8" : "md:ml-8"}`}>
          <div
            className={`p-4 rounded-xl border transition-all duration-300 ${
              isActive
                ? "bg-primary/5 border-primary/30 shadow-md"
                : "bg-background/60 border-border/40 group-hover:border-primary/20 group-hover:shadow-sm"
            }`}
          >
            <div className={`flex items-center gap-2 mb-2 ${isLeft ? "md:justify-end" : ""}`}>
              <item.icon className={`h-4 w-4 transition-colors ${isActive ? "text-accent" : "text-primary"}`} />
              <span className={`text-sm font-bold transition-colors ${isActive ? "text-accent" : "text-primary"}`}>
                {item.year}
              </span>
              <span className="text-xs text-muted-foreground">–</span>
              <span className="text-sm font-semibold text-foreground">{item.title}</span>
            </div>
            <p
              className={`text-sm text-muted-foreground leading-relaxed overflow-hidden transition-all duration-400 ${
                isActive ? "max-h-40 opacity-100" : "max-h-0 opacity-0 md:max-h-40 md:opacity-100"
              }`}
            >
              {item.text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const UeberUns = () => {
  const [activeTimeline, setActiveTimeline] = useState(timeline.length - 1);
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.05 });
  const { ref: valuesHeaderRef, isVisible: valuesHeaderVisible } = useScrollAnimation();
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollAnimation();
  const { ref: teamHeaderRef, isVisible: teamHeaderVisible } = useScrollAnimation();
  const { ref: teamRef, isVisible: teamVisible } = useScrollAnimation();
  const { ref: tlHeaderRef, isVisible: tlHeaderVisible } = useScrollAnimation();
  const { ref: whyRef, isVisible: whyVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  return (
    <Layout>
      <SEOHead
        title="Über uns – AV-Systemhaus aus Krefeld"
        description="SLT Technology Group: Inhabergeführtes Unternehmen für AV- & IT-Lösungen seit 2016. Herstellerneutrale Beratung, maßgeschneiderte Lösungen – nachhaltig und klimaneutral."
        keywords="SLT Technology Group, AV-Lösungen, IT-Lösungen, Inklusionsunternehmen, Medientechnik, Krefeld"
        canonical="/ueber-uns"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "mainEntity": {
            "@type": "Organization",
            "name": "SLT Technology Group GmbH & Co. KG",
            "url": "https://www.slt-tg.de",
            "foundingDate": "2016",
            "description": "Inhabergeführtes Unternehmen für AV- & IT-Lösungen. Herstellerneutrale Beratung und maßgeschneiderte Integration.",
            "address": { "@type": "PostalAddress", "streetAddress": "Anrather Straße 291", "addressLocality": "Krefeld", "postalCode": "47807", "addressCountry": "DE" },
            "telephone": "+49 2151 4179902",
            "email": "info@slt-tg.de",
            "numberOfEmployees": { "@type": "QuantitativeValue", "minValue": 10, "maxValue": 50 }
          }
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
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <Badge variant="outline" className="mb-6">
                Unternehmensprofil
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                Die Geschichte der{" "}
                <span className="text-primary">SLT</span>
              </h1>
              <p className="text-sm lg:text-base text-muted-foreground mb-5 leading-relaxed">
                Seit inzwischen über sieben Jahren stehen wir unseren Kunden als technischer 
                Dienstleister auf dem Weg der Digitalisierung Ihrer Konferenztechnik zur Seite. 
                Wir sind ein junges, inhabergeführtes Unternehmen und kombinieren bewährtes mit 
                neuer, innovativer Technik.
              </p>
              <p className="text-sm lg:text-base text-muted-foreground mb-5 leading-relaxed">
                Aufbauend auf einer zuverlässigen und maßgeschneiderten IT-Infrastruktur, entwickeln 
                wir leidenschaftlich gerne individuelle Lösungen für unsere Partner, die stets einen 
                Mehrwert schaffen.
              </p>
              <p className="text-sm lg:text-base text-muted-foreground mb-8 leading-relaxed">
                Als <a href="https://www.bih.de/integrationsaemter/zb-magazin/ausgabe-02-2024-lvr/gewagt-und-gewonnen/" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">Inklusionsunternehmen</a> prägen uns bei der täglichen Arbeit 
                insbesondere die Werte <strong className="text-foreground">Nachhaltigkeit</strong> und <strong className="text-foreground">Klimaneutralität</strong>.
              </p>
              <Button asChild size="lg">
                <Link to="/kontakt">
                  Kontakt aufnehmen
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] bg-secondary rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/assets/team/team-photo.jpg" 
                  alt="Das Team der SLT Technology Group – AV- und IT-Spezialisten aus Krefeld"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 w-24 lg:w-32 h-24 lg:h-32 bg-primary/10 rounded-2xl -z-10" />
              <div className="absolute -top-4 -left-4 lg:-top-6 lg:-left-6 w-16 lg:w-20 h-16 lg:h-20 bg-accent/10 rounded-xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-card/50">
        <div className="section-container">
          <div
            ref={valuesHeaderRef}
            className={`text-center max-w-3xl mx-auto mb-12 scroll-hidden-blur ${valuesHeaderVisible ? "scroll-visible-blur" : ""}`}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
              Unsere Werte
            </h2>
            <p className="text-base text-muted-foreground">
              Diese Grundsätze leiten unsere Arbeit – in jedem Projekt, bei jeder Empfehlung.
            </p>
          </div>

          <div ref={valuesRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {values.map((value, index) => (
              <div
                key={value.title}
                className={`p-5 bg-background rounded-xl border border-border/60 hover:border-primary/30 hover:shadow-md transition-all duration-300 group scroll-hidden ${valuesVisible ? "scroll-visible" : ""}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/15 transition-colors">
                  <value.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-1.5">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24">
        <div className="section-container">
          <div
            ref={teamHeaderRef}
            className={`text-center max-w-3xl mx-auto mb-12 scroll-hidden-blur ${teamHeaderVisible ? "scroll-visible-blur" : ""}`}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
              Unser Team
            </h2>
            <p className="text-base text-muted-foreground">
              Hinter SLT stehen engagierte Köpfe, die Technik nicht nur verstehen, sondern leben.
            </p>
          </div>

          <div ref={teamRef} className="flex flex-wrap justify-center gap-6 lg:gap-10">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className={`text-center group w-28 lg:w-32 scroll-hidden ${teamVisible ? "scroll-visible" : ""}`}
                style={{ transitionDelay: `${index * 0.08}s` }}
              >
                {member.email ? (
                  <a href={`mailto:${member.email}`} className="block cursor-pointer">
                    <Avatar className="h-20 w-20 lg:h-24 lg:w-24 mx-auto mb-2 ring-2 ring-transparent group-hover:ring-primary transition-all duration-300 group-hover:shadow-lg group-hover:scale-105">
                      {member.image ? (
                        <AvatarImage src={member.image} alt={member.name} className="object-cover" />
                      ) : null}
                      <AvatarFallback className="bg-primary/10 text-primary text-lg lg:text-xl">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex items-center justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-0.5">
                      <Mail className="h-3 w-3 text-primary" />
                      <span className="text-[10px] text-primary">E-Mail</span>
                    </div>
                  </a>
                ) : (
                  <Avatar className="h-20 w-20 lg:h-24 lg:w-24 mx-auto mb-2 ring-2 ring-transparent group-hover:ring-primary transition-all duration-300 group-hover:shadow-lg group-hover:scale-105">
                    {member.image ? (
                      <AvatarImage src={member.image} alt={member.name} className="object-cover" />
                    ) : null}
                    <AvatarFallback className="bg-primary/10 text-primary text-lg lg:text-xl">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                )}
                <h3 className="font-semibold text-foreground text-xs lg:text-sm group-hover:text-primary transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-[10px] lg:text-xs text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 lg:py-24 bg-card/50">
        <div className="section-container">
          <div
            ref={tlHeaderRef}
            className={`text-center max-w-3xl mx-auto mb-12 scroll-hidden-blur ${tlHeaderVisible ? "scroll-visible-blur" : ""}`}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
              Unsere Entwicklung
            </h2>
            <p className="text-base text-muted-foreground">
              Von der Gründung 2016 bis heute – unsere Meilensteine im Überblick.
            </p>
          </div>

          {/* Interactive year selector (mobile-friendly) */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {timeline.map((item, i) => (
              <button
                key={`${item.year}-${i}`}
                onClick={() => setActiveTimeline(i)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                  activeTimeline === i
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-background border border-border text-muted-foreground hover:border-primary/40 hover:text-primary"
                }`}
              >
                {item.year}
              </button>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-2 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

              {timeline.map((item, index) => (
                <TimelineItem
                  key={`${item.year}-${index}`}
                  item={item}
                  index={index}
                  isActive={activeTimeline === index}
                  onClick={() => setActiveTimeline(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-16 lg:py-24">
        <div className="section-container">
          <div
            ref={whyRef}
            className={`max-w-3xl mx-auto text-center mb-10 scroll-hidden-blur ${whyVisible ? "scroll-visible-blur" : ""}`}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
              Warum SLT?
            </h2>
            <p className="text-base text-muted-foreground">
              Was uns von anderen unterscheidet – auf einen Blick.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-4xl mx-auto">
            {whyItems.map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-3 bg-card p-4 rounded-xl border border-border/60 hover:shadow-md hover:border-primary/30 transition-all duration-300 group"
              >
                <CheckCircle className="h-4 w-4 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm text-foreground font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

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
            Lassen Sie uns über Ihr Projekt sprechen
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Ob konkretes Vorhaben oder erste Orientierung – wir nehmen uns gerne Zeit 
            für ein unverbindliches Gespräch.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="btn-glow">
              <Link to="/projektanfrage">
                Projektanfrage starten
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/kontakt">
                Direkt kontaktieren
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default UeberUns;
