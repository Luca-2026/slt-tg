import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  MapPin,
  Clock,
  ArrowRight,
  Briefcase,
  GraduationCap,
  Wrench,
  Rocket,
  CalendarDays,
} from "lucide-react";

import karriereHero from "@/assets/karriere-hero.png";
import iconFlexibleArbeitszeiten from "@/assets/benefits/flexible-arbeitszeiten.png";
import iconAltersvorsorge from "@/assets/benefits/altersvorsorge.png";
import iconLaptop from "@/assets/benefits/laptop.png";
import iconGetraenke from "@/assets/benefits/getraenke-fruechte.png";
import iconGrillplatz from "@/assets/benefits/grillplatz.png";
import iconWeiterbildung from "@/assets/benefits/weiterbildung.png";
import iconWeihnachtsfeier from "@/assets/benefits/weihnachtsfeier.png";
import iconArbeitskleidung from "@/assets/benefits/arbeitskleidung.png";
import iconBonussystem from "@/assets/benefits/bonussystem.png";
import iconFeedbackkultur from "@/assets/benefits/feedbackkultur.png";

import { JOBS } from "@/data/jobs";

const ICONS = { GraduationCap, Wrench, Briefcase } as const;

const benefits = [
  { image: iconFlexibleArbeitszeiten, label: "Flexible Arbeitszeiten" },
  { image: iconAltersvorsorge, label: "Betriebliche Altersvorsorge" },
  { image: iconLaptop, label: "Eigener Laptop" },
  { image: iconGetraenke, label: "Küche mit Getränken & Obst" },
  { image: iconGrillplatz, label: "Grillplatz" },
  { image: iconWeiterbildung, label: "Weiterbildungen" },
  { image: iconWeihnachtsfeier, label: "Weihnachtsfeier" },
  { image: iconArbeitskleidung, label: "Arbeitskleidung" },
  { image: iconBonussystem, label: "Bonussystem" },
  { image: iconFeedbackkultur, label: "Offene Feedbackkultur" },
];

export default function Karriere() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: profileRef, isVisible: profileVisible } = useScrollAnimation();
  const { ref: jobsRef, isVisible: jobsVisible } = useScrollAnimation();
  const { ref: benefitsRef, isVisible: benefitsVisible } = useScrollAnimation();

  return (
    <Layout>
      <SEOHead
        title="Karriere & Jobs – Medien- & Veranstaltungstechnik"
        description="Jetzt bewerben bei SLT Technology Group: Offene Stellen in Medientechnik, Veranstaltungstechnik, AV-Systemintegration & Büromanagement in Krefeld und Bonn."
        keywords="Karriere, Jobs, Medientechniker, Ausbildung, SLT Technology Group, AV-Technik, Krefeld, Bonn"
        canonical="/karriere"
      />

      {/* Hero */}
      <section className="relative overflow-hidden h-[100svh] flex flex-col">
        <img
          src={karriereHero}
          alt="Karriere bei der SLT Technology Group – offene Stellen in der Medientechnik und IT-Branche"
          className="absolute inset-0 w-full h-full object-cover object-[center_30%] sm:object-center lg:object-right-bottom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/80 to-primary/40 sm:bg-gradient-to-r sm:from-primary/85 sm:via-primary/60 sm:to-transparent" />
        <div className="h-16 sm:h-18 lg:h-14 shrink-0" />
        <div className="flex-1 flex flex-col justify-start gap-6 sm:gap-8 lg:gap-10 px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 lg:pt-2 pb-6">
          <div
            ref={heroRef}
            className={`relative z-10 max-w-xl scroll-hidden ${heroVisible ? "scroll-visible" : ""}`}
          >
            <Badge className="bg-accent/15 border border-accent/40 text-accent mb-3 sm:mb-5 text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-1.5">
              Wir stellen ein 🚀
            </Badge>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-3 sm:mb-5 leading-tight text-primary-foreground">
              Starte mit uns durch.
            </h1>
            <p className="text-sm sm:text-lg md:text-xl text-primary-foreground/90 max-w-lg mb-4 sm:mb-6">
              Wir suchen stetig neue und technikbegeisterte Talente, die sich gemeinsam mit uns entwickeln möchten.
            </p>
            <Button
              size="lg"
              className="bg-accent/15 border border-accent/40 text-accent hover:bg-accent/25 hover:text-accent group text-sm sm:text-base"
              onClick={() => document.getElementById("positions")?.scrollIntoView({ behavior: "smooth" })}
            >
              Offene Stellen ansehen
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div ref={profileRef} className={`relative z-10 max-w-md scroll-hidden ${profileVisible ? "scroll-visible" : ""}`}>
            <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl p-4 sm:p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-primary-foreground/15 flex items-center justify-center shrink-0">
                  <Rocket className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-sm sm:text-base font-semibold text-accent uppercase tracking-wider">Unternehmensprofil</span>
              </div>
              <p className="text-sm sm:text-base text-primary-foreground/85 leading-relaxed">
                Seit inzwischen über sieben Jahren stehen wir unseren Kunden als technischer Dienstleister auf dem Weg der Digitalisierung Ihrer Konferenztechnik zur Seite. Wir sind ein junges, inhabergeführtes Unternehmen und kombinieren bewährtes mit neuer, innovativer Technik.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Positions – jede Stelle verlinkt auf eigene Detailseite */}
      <section ref={jobsRef} id="positions" className={`py-12 sm:py-16 md:py-24 scroll-hidden ${jobsVisible ? "scroll-visible" : ""}`}>
        <div className="section-container">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2 sm:mb-3">
            Offene Stellen
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6 sm:mb-10">
            Stellenmarkt
          </h2>
          <div className="space-y-4">
            {JOBS.map((job, index) => {
              const Icon = ICONS[job.iconName];
              return (
                <Card
                  key={job.slug}
                  className="card-hover overflow-hidden hover:border-primary/40 transition-all duration-300"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <Link
                    to={`/karriere/${job.slug}`}
                    className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    aria-label={`Stellenanzeige: ${job.title}`}
                  >
                    <CardContent className="p-4 sm:p-6 md:p-8">
                      <div className="flex flex-col md:flex-row md:items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-1 leading-snug">
                            {job.title}
                          </h3>
                          {job.subtitle && (
                            <p className="text-sm text-accent font-medium mb-2">{job.subtitle}</p>
                          )}
                          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                            {job.description}
                          </p>
                          <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1.5">
                              <MapPin className="h-4 w-4" /> {job.locationLabel}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <Clock className="h-4 w-4" /> {job.employmentTypeLabel}
                            </span>
                            <span className="flex items-center gap-1.5 text-primary font-medium">
                              <CalendarDays className="h-4 w-4" /> {job.startLabel}
                            </span>
                          </div>
                        </div>
                        <div className="md:self-center inline-flex items-center gap-2 text-sm font-semibold text-primary group">
                          Zur Stellenanzeige
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              );
            })}
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            Keine passende Stelle dabei? Schick uns gerne eine Initiativbewerbung an{" "}
            <a href="mailto:karriere@slt-tg.de" className="text-primary underline hover:text-primary/80">
              karriere@slt-tg.de
            </a>
            .
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section ref={benefitsRef} className={`py-12 sm:py-16 md:py-24 bg-secondary/30 scroll-hidden ${benefitsVisible ? "scroll-visible" : ""}`}>
        <div className="section-container">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2 sm:mb-3">
            Wir möchten etwas zurückgeben
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6 sm:mb-10">
            Das bieten wir unserem Team
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.label}
                className="flex flex-col items-center text-center p-3 sm:p-4 md:p-6 rounded-xl bg-background border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <img src={benefit.image} alt={benefit.label} className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain mb-2 sm:mb-3" />
                <span className="text-xs sm:text-sm font-medium text-foreground">{benefit.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
