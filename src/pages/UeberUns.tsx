import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Award, 
  Target, 
  Handshake, 
  Lightbulb,
  User
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
    icon: Lightbulb,
    title: "Pragmatisch",
    description: "Keine Luftschlösser, sondern umsetzbare Lösungen, die im Alltag funktionieren.",
  },
  {
    icon: Award,
    title: "Qualitätsfokussiert",
    description: "Lieber einmal richtig als dreimal nachbessern. Qualität spart langfristig Kosten.",
  },
];

const timeline = [
  { year: "2016", text: "Einstieg als Veranstaltungstechniker und -kaufmann – Planung und Umsetzung technischer Lösungen für Messe und Retail" },
  { year: "2019", text: "Fokus auf Systemintegration und Fachplanung von AV/UC-Komponenten" },
  { year: "2022", text: "Implementierung von Managed Service Lösungen und Umsetzung EU-weiter Medientechnik-Ausschreibungen" },
  { year: "04/2024", text: "Leitende Position als Verantwortlicher für Medientechnik in einem Konzern" },
  { year: "05/2024", text: "ITIL 4 IT Service Management Zertifizierung" },
  { year: "Laufend", text: "Herstellerzertifizierungen: Crestron, Q-Sys, Shure, Barco, Microsoft, Yealink" },
];

const UeberUns = () => {
  return (
    <Layout>
      <SEOHead
        title="Über uns – Fachbüro für Medientechnik"
        description="Luca Sandhoff: AV-Consultant und Fachplaner für Medientechnik mit über 8 Jahren Erfahrung. Herstellerneutrale Beratung für Unternehmen in NRW und deutschlandweit."
        keywords="Luca Sandhoff, AV-Consultant, Medientechnik Fachplaner, Fachbüro Medientechnik, AV-Berater NRW"
        canonical="/ueber-uns"
      />
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-primary/5 to-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div>
              <Badge variant="outline" className="mb-6">
                Über uns
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                SLT Technology Group
              </h1>
              <p className="text-xl text-primary font-medium mb-4">
                Ihr Spezialist für Videokonferenz- & AV-Lösungen
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Mit über 8 Jahren Erfahrung in der AV/UC-Branche haben wir eines gelernt: 
                Die beste Technik nützt nichts, wenn sie nicht zum Unternehmen passt. 
                Deshalb setzen wir auf herstellerneutrale Beratung, pragmatische Lösungen 
                und langfristige Partnerschaften.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Unser Fokus liegt auf modernen Arbeitswelten – vom einzelnen Konferenzraum 
                bis zum unternehmensweiten Rollout. Wir begleiten Sie von der ersten Idee 
                bis zum laufenden Betrieb und sorgen dafür, dass Ihre Technik zuverlässig funktioniert.
              </p>
              <Button asChild>
                <Link to="/kontakt">
                  Kontakt aufnehmen
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* Portrait Image */}
            <div className="relative">
              <div className="aspect-[3/4] bg-secondary rounded-2xl overflow-hidden">
                <img 
                  src="/assets/team/lukas-sandhoff.jpg" 
                  alt="Luca Sandhoff - IT- & Mediensysteme"
                  className="w-full h-full object-cover object-[center_25%]"
                />
              </div>
              {/* Decorative Element */}
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
               Unsere Arbeitsweise
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

      {/* Timeline Section */}
      <section className="py-20 lg:py-28">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Mein Werdegang
            </h2>
            <p className="text-lg text-muted-foreground">
              Über 8 Jahre Erfahrung in der AV/UC-Branche – vom Projektingenieur zum 
              selbstständigen Fachplaner.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className="relative pl-8 md:pl-0 pb-12 last:pb-0 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className={`md:flex md:items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    {/* Dot */}
                    <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background md:-translate-x-1/2" />

                    {/* Content */}
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

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="section-container text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Lassen Sie uns über Ihr Projekt sprechen
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Ob konkretes Vorhaben oder erste Orientierung – ich nehme mir gerne Zeit 
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
