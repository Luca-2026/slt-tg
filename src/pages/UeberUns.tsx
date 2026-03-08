import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
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
  Mail
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
  { year: "2016", text: "Gründung der SLT Event Production UG (haftungsbeschränkt) mit Sitz in Köln." },
  { year: "2017", text: "Umwandlung in die SLT Event Production GmbH und Umzug in die neuen Geschäftsräume nach Düsseldorf." },
  { year: "2018", text: "Bezug des neuen Standorts in Ratingen-Homberg." },
  { year: "2020", text: 'Erweiterung des Portfolios und Umfirmierung in "SLT Technology Group GmbH & Co. KG".' },
  { year: "2020", text: "Bezug des neuen Standorts in Krefeld-Fichtenhain an der A44 mit neuen Büros und Lagerflächen." },
];

const teamMembers = [
  { name: "Luca Sandhoff", role: "Geschäftsführer", image: "/assets/team/lukas-sandhoff.jpg", email: "l.sandhoff@slt-tg.de" },
  { name: "Benedikt Nöchel", role: "Projektleitung & Vertrieb", image: "/assets/team/benedikt-noechel.jpg", email: "b.noechel@slt-tg.de" },
  { name: "Ersel Uzun", role: "Technik & Service", image: "/assets/team/ersel-uzun.jpg", email: "e.uzun@slt-tg.de" },
  { name: "Andreas Scherzow", role: "Logistik & Lager", image: null, email: "a.scherzow@slt-tg.de" },
  { name: "Patricia Preuss", role: "Verwaltung & Office", image: null, email: "p.preuss@slt-tg.de" },
  { name: "Juno", role: "Feel Good Manager 🐾", image: "/assets/team/juno.png", email: null },
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

const UeberUns = () => {
  return (
    <Layout>
      <SEOHead
        title="Über uns – Ihr Partner für AV- & IT-Lösungen"
        description="SLT Technology Group: Inhabergeführtes Unternehmen für AV- & IT-Lösungen seit 2016. Herstellerneutrale Beratung, maßgeschneiderte Lösungen – nachhaltig und klimaneutral."
        keywords="SLT Technology Group, AV-Lösungen, IT-Lösungen, Inklusionsunternehmen, Medientechnik, Krefeld"
        canonical="/ueber-uns"
      />

      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-primary/5 to-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <Badge variant="outline" className="mb-6">
                Unternehmensprofil
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Die Geschichte der SLT
              </h1>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Seit inzwischen über sieben Jahren stehen wir unseren Kunden als technischer 
                Dienstleister auf dem Weg der Digitalisierung Ihrer Konferenztechnik zur Seite. 
                Wir sind ein junges, inhabergeführtes Unternehmen und kombinieren bewährtes mit 
                neuer, innovativer Technik.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Aufbauend auf einer zuverlässigen und maßgeschneiderten IT-Infrastruktur, entwickeln 
                wir leidenschaftlich gerne individuelle Lösungen für unsere Partner, die stets einen 
                Mehrwert schaffen. Bei der Präsentation, Kommunikation oder Zusammenarbeit – sei es 
                für die Privatwirtschaft oder die öffentliche Hand.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Als <strong className="text-foreground">Inklusionsunternehmen</strong> prägen uns bei der täglichen Arbeit 
                insbesondere die Werte <strong className="text-foreground">Nachhaltigkeit</strong> und <strong className="text-foreground">Klimaneutralität</strong>.
              </p>
              <Button asChild>
                <Link to="/kontakt">
                  Kontakt aufnehmen
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* Team Photo */}
            <div className="relative">
              <div className="aspect-[4/3] bg-secondary rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/assets/team/team-photo.jpg" 
                  alt="SLT Technology Group Team"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Unsere Werte
            </h2>
            <p className="text-lg text-muted-foreground">
              Diese Grundsätze leiten unsere Arbeit – in jedem Projekt, bei jeder Empfehlung.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="p-6 bg-background rounded-xl border border-border card-hover animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 lg:py-28">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Unser Team
            </h2>
            <p className="text-lg text-muted-foreground">
              Hinter SLT stehen engagierte Köpfe, die Technik nicht nur verstehen, sondern leben.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className="text-center group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {member.email ? (
                  <a href={`mailto:${member.email}`} className="block cursor-pointer">
                    <Avatar className="h-24 w-24 mx-auto mb-3 ring-2 ring-transparent group-hover:ring-primary transition-all duration-300 group-hover:shadow-lg">
                      {member.image ? (
                        <AvatarImage src={member.image} alt={member.name} className="object-cover" />
                      ) : null}
                      <AvatarFallback className="bg-primary/10 text-primary text-xl">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex items-center justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-1">
                      <Mail className="h-3 w-3 text-primary" />
                      <span className="text-xs text-primary">E-Mail</span>
                    </div>
                  </a>
                ) : (
                  <Avatar className="h-24 w-24 mx-auto mb-3 ring-2 ring-transparent group-hover:ring-primary transition-all duration-300 group-hover:shadow-lg">
                    {member.image ? (
                      <AvatarImage src={member.image} alt={member.name} className="object-cover" />
                    ) : null}
                    <AvatarFallback className="bg-primary/10 text-primary text-xl">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                )}
                <h3 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-xs text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Unsere Entwicklung
            </h2>
            <p className="text-lg text-muted-foreground">
              Von der Gründung 2016 bis heute – unsere Meilensteine im Überblick.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

              {timeline.map((item, index) => (
                <div
                  key={`${item.year}-${index}`}
                  className="relative pl-8 md:pl-0 pb-12 last:pb-0 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className={`md:flex md:items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background md:-translate-x-1/2" />
                    <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                      <span className="text-sm font-bold text-primary">{item.year}</span>
                      <p className="text-muted-foreground mt-1">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 lg:py-28">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Warum SLT?
            </h2>
            <p className="text-lg text-muted-foreground">
              Was uns von anderen unterscheidet – auf einen Blick.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {whyItems.map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-3 bg-card p-4 rounded-lg border border-border hover:shadow-md hover:border-primary/30 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                <span className="text-foreground font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="section-container text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Lassen Sie uns über Ihr Projekt sprechen
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
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
