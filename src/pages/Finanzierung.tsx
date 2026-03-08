import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { 
  ArrowRight,
  CheckCircle,
  XCircle,
  CreditCard,
  RefreshCw,
  Shield,
  TrendingUp,
  Calculator,
  Clock,
  Wrench,
  Headphones
} from "lucide-react";

const financingModels = [
  {
    id: "kauf",
    icon: CreditCard,
    title: "Direktkauf",
    subtitle: "Eigentum ab Tag 1",
    description: "Der klassische Weg: Sie kaufen die Technik und besitzen sie. Ideal, wenn Sie langfristig planen und das Budget vorhanden ist.",
    pros: ["Volle Eigentümerschaft", "Keine laufenden Kosten nach Abschreibung", "Bilanzierung als Anlagevermögen", "Freie Verfügung über die Hardware"],
    cons: ["Hohe Anfangsinvestition", "Technologie-Risiko bei schneller Entwicklung", "Wartung & Support müssen separat geplant werden"],
    bestFor: "Unternehmen mit verfügbarem Budget und langfristiger Nutzungsplanung"
  },
  {
    id: "leasing",
    icon: RefreshCw,
    title: "Leasing",
    subtitle: "Liquidität schonen",
    description: "Monatliche Raten statt hoher Einmalinvestition. Am Ende der Laufzeit können Sie die Technik übernehmen, zurückgeben oder gegen neue austauschen.",
    pros: ["Liquiditätsschonend durch monatliche Raten", "Planbare Kosten über die Laufzeit", "Steuerliche Vorteile (Betriebsausgabe)", "Option zur Übernahme am Laufzeitende"],
    cons: ["Gesamtkosten höher als beim Direktkauf", "Vertragliche Bindung über Laufzeit", "Eingeschränkte Flexibilität bei Änderungen"],
    bestFor: "Unternehmen, die ihre Liquidität schonen und planbare Kosten wünschen"
  },
  {
    id: "miete",
    icon: Clock,
    title: "Miete / Rental",
    subtitle: "Maximale Flexibilität",
    description: "Kurzfristige oder mittelfristige Nutzung ohne langfristige Bindung. Ideal für Projekte, Events oder als Übergangslösung.",
    pros: ["Keine langfristige Bindung", "Schnelle Verfügbarkeit", "Inklusive Wartung & Support", "Einfacher Austausch bei Bedarf"],
    cons: ["Höhere monatliche Kosten", "Kein Eigentumsübergang möglich", "Begrenzte Anpassungsmöglichkeiten"],
    bestFor: "Temporäre Projekte, Pilotphasen oder Events"
  },
  {
    id: "avaas",
    icon: Shield,
    title: "AV-as-a-Service",
    subtitle: "All-inclusive Lösung",
    description: "Das Rundum-sorglos-Paket: Hardware, Software, Wartung, Support und regelmäßige Updates in einem monatlichen Preis.",
    pros: ["Komplettpaket aus einer Hand", "Technologie-Updates während der Laufzeit", "Proaktives Monitoring & Fernwartung", "Planbare TCO (Total Cost of Ownership)", "Kein Technologie-Risiko"],
    cons: ["Langfristige Vertragsbindung üblich", "Abhängigkeit vom Anbieter", "Eingeschränkte Individualität"],
    bestFor: "Unternehmen, die sich auf ihr Kerngeschäft konzentrieren wollen"
  },
];

const serviceInclusions = [
  { icon: Wrench, title: "Installation & Inbetriebnahme", description: "Professionelle Montage und Konfiguration aller Komponenten" },
  { icon: Headphones, title: "Support & Helpdesk", description: "Schnelle Hilfe bei Fragen und Problemen" },
  { icon: RefreshCw, title: "Wartung & Updates", description: "Regelmäßige Wartung und Software-Aktualisierungen" },
  { icon: Shield, title: "Monitoring & Fernwartung", description: "Proaktive Überwachung und Remote-Support" },
];

const Finanzierung = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.05 });
  const { ref: compRef, isVisible: compVisible } = useScrollAnimation();
  const { ref: tcoRef, isVisible: tcoVisible } = useScrollAnimation();
  const { ref: serviceRef, isVisible: serviceVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  return (
    <Layout>
      <SEOHead
        title="Finanzierung: Leasing, Miete & AV-as-a-Service"
        description="Flexible Finanzierungsoptionen für Medientechnik-Projekte: Kauf, Leasing, Miete oder AV-as-a-Service. TCO-Beratung durch unseren AV-Consultant."
        keywords="AV Finanzierung, Leasing Medientechnik, AV-as-a-Service, Managed Service AV, TCO Berechnung, Medientechnik Miete"
        canonical="/finanzierung"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Finanzierungsmodelle für Medientechnik",
          "description": "Vergleich verschiedener Finanzierungsoptionen: Kauf, Leasing, Miete und AV-as-a-Service.",
          "mainEntity": {
            "@type": "ItemList",
            "name": "Finanzierungsmodelle",
            "itemListElement": financingModels.map((m, i) => ({
              "@type": "ListItem",
              "position": i + 1,
              "name": m.title,
              "description": m.description
            }))
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
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="outline" className="mb-6">Finanzierung & Servicemodelle</Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Flexible{" "}
              <span className="text-primary">Finanzierungs&shy;optionen</span>
            </h1>
            <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
              Medientechnik muss nicht immer eine große Investition sein. Wir beraten Sie 
              zu verschiedenen Finanzierungsmodellen – von Kauf über Leasing bis zum 
              All-inclusive-Service.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Overview */}
      <section className="py-16 lg:py-24">
        <div className="section-container">
          <div
            ref={compRef}
            className={`text-center max-w-3xl mx-auto mb-12 scroll-hidden-blur ${compVisible ? "scroll-visible-blur" : ""}`}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
              Finanzierungsmodelle im Vergleich
            </h2>
            <p className="text-base text-muted-foreground">
              Jedes Modell hat seine Berechtigung. Welches zu Ihnen passt, hängt von 
              Ihren Anforderungen, Ihrem Budget und Ihrer IT-Strategie ab.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
            {financingModels.map((model, index) => (
              <Card
                key={model.id}
                className={`bg-card border-border overflow-hidden hover:border-primary/30 hover:shadow-md transition-all duration-300 scroll-hidden ${compVisible ? "scroll-visible" : ""}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                      <model.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{model.title}</CardTitle>
                      <CardDescription className="text-primary font-medium text-sm">
                        {model.subtitle}
                      </CardDescription>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">{model.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-xs font-semibold text-foreground mb-2 flex items-center gap-2">
                      <CheckCircle className="h-3.5 w-3.5 text-green-500" />
                      Vorteile
                    </h4>
                    <ul className="space-y-1">
                      {model.pros.map((pro) => (
                        <li key={pro} className="text-xs lg:text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-green-500 mt-0.5">+</span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-foreground mb-2 flex items-center gap-2">
                      <XCircle className="h-3.5 w-3.5 text-muted-foreground" />
                      Zu bedenken
                    </h4>
                    <ul className="space-y-1">
                      {model.cons.map((con) => (
                        <li key={con} className="text-xs lg:text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-muted-foreground mt-0.5">−</span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-3 border-t border-border">
                    <p className="text-xs lg:text-sm">
                      <span className="font-semibold text-foreground">Ideal für: </span>
                      <span className="text-muted-foreground">{model.bestFor}</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* TCO Visualization */}
      <section className="py-16 lg:py-24 bg-card/50">
        <div className="section-container">
          <div
            ref={tcoRef}
            className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
          >
            <div className={`scroll-hidden-left ${tcoVisible ? "scroll-visible-x" : ""}`}>
              <Badge variant="outline" className="mb-6">Total Cost of Ownership</Badge>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-5">
                Die wahren Kosten verstehen
              </h2>
              <p className="text-sm lg:text-base text-muted-foreground mb-6 leading-relaxed">
                Der Kaufpreis ist nur ein Teil der Gesamtkosten. Wartung, Support, 
                Ausfallzeiten und Technologie-Updates machen oft den größeren Anteil aus. 
                Wir helfen Ihnen, die Total Cost of Ownership (TCO) realistisch zu kalkulieren.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  { icon: Calculator, title: "Anschaffungskosten", desc: "Hardware, Software, Installation, Schulung" },
                  { icon: Wrench, title: "Betriebskosten", desc: "Wartung, Support, Energie, Lizenzen" },
                  { icon: TrendingUp, title: "Versteckte Kosten", desc: "Ausfallzeiten, Produktivitätsverluste, veraltete Technik" },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm">{item.title}</h3>
                      <p className="text-xs lg:text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button asChild>
                <Link to="/projektanfrage">
                  TCO-Analyse anfordern
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className={`scroll-hidden-right ${tcoVisible ? "scroll-visible-x" : ""}`}>
              <div className="bg-background rounded-2xl border border-border p-6 lg:p-8">
                <h3 className="text-base lg:text-lg font-semibold text-foreground mb-6 text-center">
                  Typische Kostenverteilung über 5 Jahre
                </h3>
                <div className="space-y-4">
                  {[
                    { label: "Hardware", pct: 30, color: "bg-primary" },
                    { label: "Software & Lizenzen", pct: 15, color: "bg-primary/80" },
                    { label: "Installation & Schulung", pct: 10, color: "bg-primary/60" },
                    { label: "Wartung & Support", pct: 25, color: "bg-accent" },
                    { label: "Ausfälle & Produktivitätsverlust", pct: 20, color: "bg-destructive/70" },
                  ].map((bar) => (
                    <div key={bar.label}>
                      <div className="flex justify-between text-xs lg:text-sm mb-1">
                        <span className="text-muted-foreground">{bar.label}</span>
                        <span className="font-medium text-foreground">~{bar.pct}%</span>
                      </div>
                      <div className="h-3 lg:h-4 bg-secondary rounded-full overflow-hidden">
                        <div className={`h-full ${bar.color} rounded-full transition-all duration-1000`} style={{ width: tcoVisible ? `${bar.pct}%` : '0%' }} />
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-[10px] lg:text-xs text-muted-foreground text-center mt-6">
                  *Beispielhafte Darstellung basierend auf Branchenerfahrungen
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Inclusions */}
      <section className="py-16 lg:py-24">
        <div className="section-container">
          <div
            ref={serviceRef}
            className={`text-center max-w-3xl mx-auto mb-10 scroll-hidden-blur ${serviceVisible ? "scroll-visible-blur" : ""}`}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
              Was in Service-Modellen enthalten ist
            </h2>
            <p className="text-base text-muted-foreground">
              Bei Leasing-, Miet- oder AV-as-a-Service-Modellen können verschiedene 
              Leistungen inkludiert sein.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {serviceInclusions.map((service, index) => (
              <div
                key={service.title}
                className={`p-5 bg-card rounded-xl border border-border/60 text-center hover:border-primary/30 hover:shadow-md transition-all duration-300 group scroll-hidden ${serviceVisible ? "scroll-visible" : ""}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/15 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-1.5">{service.title}</h3>
                <p className="text-xs lg:text-sm text-muted-foreground">{service.description}</p>
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
            Welches Modell passt zu Ihnen?
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Die richtige Finanzierung hängt von vielen Faktoren ab. Im kostenfreien 
            Erstgespräch analysieren wir Ihre Situation und finden das optimale Modell.
          </p>
          <Button asChild size="lg" className="btn-glow">
            <Link to="/projektanfrage">
              Kostenlose Beratung anfordern
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Finanzierung;
