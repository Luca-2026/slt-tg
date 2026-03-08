import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
    pros: [
      "Volle Eigentümerschaft",
      "Keine laufenden Kosten nach Abschreibung",
      "Bilanzierung als Anlagevermögen",
      "Freie Verfügung über die Hardware"
    ],
    cons: [
      "Hohe Anfangsinvestition",
      "Technologie-Risiko bei schneller Entwicklung",
      "Wartung & Support müssen separat geplant werden"
    ],
    bestFor: "Unternehmen mit verfügbarem Budget und langfristiger Nutzungsplanung"
  },
  {
    id: "leasing",
    icon: RefreshCw,
    title: "Leasing",
    subtitle: "Liquidität schonen",
    description: "Monatliche Raten statt hoher Einmalinvestition. Am Ende der Laufzeit können Sie die Technik übernehmen, zurückgeben oder gegen neue austauschen.",
    pros: [
      "Liquiditätsschonend durch monatliche Raten",
      "Planbare Kosten über die Laufzeit",
      "Steuerliche Vorteile (Betriebsausgabe)",
      "Option zur Übernahme am Laufzeitende"
    ],
    cons: [
      "Gesamtkosten höher als beim Direktkauf",
      "Vertragliche Bindung über Laufzeit",
      "Eingeschränkte Flexibilität bei Änderungen"
    ],
    bestFor: "Unternehmen, die ihre Liquidität schonen und planbare Kosten wünschen"
  },
  {
    id: "miete",
    icon: Clock,
    title: "Miete / Rental",
    subtitle: "Maximale Flexibilität",
    description: "Kurzfristige oder mittelfristige Nutzung ohne langfristige Bindung. Ideal für Projekte, Events oder als Übergangslösung.",
    pros: [
      "Keine langfristige Bindung",
      "Schnelle Verfügbarkeit",
      "Inklusive Wartung & Support",
      "Einfacher Austausch bei Bedarf"
    ],
    cons: [
      "Höhere monatliche Kosten",
      "Kein Eigentumsübergang möglich",
      "Begrenzte Anpassungsmöglichkeiten"
    ],
    bestFor: "Temporäre Projekte, Pilotphasen oder Events"
  },
  {
    id: "avaas",
    icon: Shield,
    title: "AV-as-a-Service",
    subtitle: "All-inclusive Lösung",
    description: "Das Rundum-sorglos-Paket: Hardware, Software, Wartung, Support und regelmäßige Updates in einem monatlichen Preis. Sie zahlen für den Service, nicht für die Technik.",
    pros: [
      "Komplettpaket aus einer Hand",
      "Technologie-Updates während der Laufzeit",
      "Proaktives Monitoring & Fernwartung",
      "Planbare TCO (Total Cost of Ownership)",
      "Kein Technologie-Risiko"
    ],
    cons: [
      "Langfristige Vertragsbindung üblich",
      "Abhängigkeit vom Anbieter",
      "Eingeschränkte Individualität"
    ],
    bestFor: "Unternehmen, die sich auf ihr Kerngeschäft konzentrieren wollen"
  },
];

const serviceInclusions = [
  {
    icon: Wrench,
    title: "Installation & Inbetriebnahme",
    description: "Professionelle Montage und Konfiguration aller Komponenten"
  },
  {
    icon: Headphones,
    title: "Support & Helpdesk",
    description: "Schnelle Hilfe bei Fragen und Problemen"
  },
  {
    icon: RefreshCw,
    title: "Wartung & Updates",
    description: "Regelmäßige Wartung und Software-Aktualisierungen"
  },
  {
    icon: Shield,
    title: "Monitoring & Fernwartung",
    description: "Proaktive Überwachung und Remote-Support"
  },
];

const Finanzierung = () => {
  return (
    <Layout>
      <SEOHead
        title="Finanzierung & AV-as-a-Service Modelle"
        description="Flexible Finanzierungsoptionen für Medientechnik-Projekte: Kauf, Leasing, Miete oder AV-as-a-Service. TCO-Beratung durch unseren AV-Consultant."
        keywords="AV Finanzierung, Leasing Medientechnik, AV-as-a-Service, Managed Service AV, TCO Berechnung, Medientechnik Miete"
        canonical="/finanzierung"
      />
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-primary/5 to-background">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="outline" className="mb-6">
              Finanzierung & Servicemodelle
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Flexible Finanzierungs&shy;optionen
            </h1>
            <p className="text-lg text-muted-foreground">
              Medientechnik muss nicht immer eine große Investition sein. Ich berate Sie 
              zu verschiedenen Finanzierungsmodellen – von Kauf über Leasing bis zum 
              All-inclusive-Service.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Overview */}
      <section className="py-16 lg:py-24">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Finanzierungsmodelle im Vergleich
            </h2>
            <p className="text-lg text-muted-foreground">
              Jedes Modell hat seine Berechtigung. Welches zu Ihnen passt, hängt von 
              Ihren Anforderungen, Ihrem Budget und Ihrer IT-Strategie ab.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {financingModels.map((model, index) => (
              <Card
                key={model.id}
                className="bg-card border-border overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <model.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{model.title}</CardTitle>
                      <CardDescription className="text-primary font-medium">
                        {model.subtitle}
                      </CardDescription>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {model.description}
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Pros */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Vorteile
                    </h4>
                    <ul className="space-y-1">
                      {model.pros.map((pro) => (
                        <li key={pro} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-green-500 mt-1">+</span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Cons */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                      <XCircle className="h-4 w-4 text-muted-foreground" />
                      Zu bedenken
                    </h4>
                    <ul className="space-y-1">
                      {model.cons.map((con) => (
                        <li key={con} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-muted-foreground mt-1">−</span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Best For */}
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm">
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
      <section className="py-20 lg:py-28 bg-card">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div>
              <Badge variant="outline" className="mb-6">
                Total Cost of Ownership
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Die wahren Kosten verstehen
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Der Kaufpreis ist nur ein Teil der Gesamtkosten. Wartung, Support, 
                Ausfallzeiten und Technologie-Updates machen oft den größeren Anteil aus. 
                Ich helfe Ihnen, die Total Cost of Ownership (TCO) realistisch zu 
                kalkulieren.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Calculator className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Anschaffungskosten</h3>
                    <p className="text-sm text-muted-foreground">Hardware, Software, Installation, Schulung</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Wrench className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Betriebskosten</h3>
                    <p className="text-sm text-muted-foreground">Wartung, Support, Energie, Lizenzen</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Versteckte Kosten</h3>
                    <p className="text-sm text-muted-foreground">Ausfallzeiten, Produktivitätsverluste, veraltete Technik</p>
                  </div>
                </div>
              </div>

              <Button asChild>
                <Link to="/projektanfrage">
                  TCO-Analyse anfordern
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* Visual */}
            <div className="bg-background rounded-2xl border border-border p-8">
              <h3 className="text-lg font-semibold text-foreground mb-6 text-center">
                Typische Kostenverteilung über 5 Jahre
              </h3>
              
              {/* Simple Bar Chart */}
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">Hardware</span>
                    <span className="font-medium text-foreground">~30%</span>
                  </div>
                  <div className="h-4 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: '30%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">Software & Lizenzen</span>
                    <span className="font-medium text-foreground">~15%</span>
                  </div>
                  <div className="h-4 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-primary/80 rounded-full" style={{ width: '15%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">Installation & Schulung</span>
                    <span className="font-medium text-foreground">~10%</span>
                  </div>
                  <div className="h-4 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-primary/60 rounded-full" style={{ width: '10%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">Wartung & Support</span>
                    <span className="font-medium text-foreground">~25%</span>
                  </div>
                  <div className="h-4 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-accent rounded-full" style={{ width: '25%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">Ausfälle & Produktivitätsverlust</span>
                    <span className="font-medium text-foreground">~20%</span>
                  </div>
                  <div className="h-4 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-destructive/70 rounded-full" style={{ width: '20%' }} />
                  </div>
                </div>
              </div>

              <p className="text-xs text-muted-foreground text-center mt-6">
                *Beispielhafte Darstellung basierend auf Branchenerfahrungen
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Inclusions */}
      <section className="py-20 lg:py-28">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Was in Service-Modellen enthalten ist
            </h2>
            <p className="text-lg text-muted-foreground">
              Bei Leasing-, Miet- oder AV-as-a-Service-Modellen können verschiedene 
              Leistungen inkludiert sein.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceInclusions.map((service, index) => (
              <div
                key={service.title}
                className="p-6 bg-card rounded-xl border border-border text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="section-container text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Welches Modell passt zu Ihnen?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
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
