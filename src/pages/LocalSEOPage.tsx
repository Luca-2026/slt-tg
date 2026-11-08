import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, CheckCircle, MapPin, Phone, Mail, Building2, Clock, User, ExternalLink } from "lucide-react";
import { cities, topics, getContentOverride } from "@/data/localSEO";
import { getRegion, referenzenFuerLeistung, visibleFaqs } from "@/data/regionen";

interface LocalSEOPageProps {
  topicKey: string;
  cityKey: string;
}

const LocalSEOPage = ({ topicKey, cityKey }: LocalSEOPageProps) => {
  const city = cities[cityKey];
  const topic = topics[topicKey];

  if (!city || !topic) return null;

  const region = getRegion(cityKey);

  // NRW-Seite: keiner einzelnen Stadt zugeordnet, redaktioneller Override.
  if (!region) {
    return <NrwFallback topicKey={topicKey} cityKey={cityKey} />;
  }

  const h1 = `${topic.shortTitle} ${city.name}`;
  const referenzen = referenzenFuerLeistung(region, topic.leistung);
  const faqs = visibleFaqs(region);

  return (
    <Layout>
      <SEOHead title={h1} description={region.intro} />

      {/* Hero */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-primary/5 to-background">
        <div className="section-container">
          <Breadcrumbs items={[
            { label: topic.title, href: `/${topic.baseSlug}/krefeld` },
            { label: city.name },
          ]} />
          <div className="max-w-3xl mx-auto text-center mt-6">
            <Badge variant="outline" className="mb-6">
              <MapPin className="h-3 w-3 mr-1" />
              {city.name} & Umgebung
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {h1}
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              {region.intro}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="btn-glow">
                <Link to="/projektanfrage">
                  Projekt anfragen
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="tel:+4921514179902">
                  <Phone className="mr-2 h-5 w-5" />
                  Jetzt anrufen
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Standort & Erreichbarkeit */}
      <section className="py-16 lg:py-20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8 text-center">
              Standort & Erreichbarkeit für {city.name}
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <Building2 className="h-6 w-6 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground mb-1">Zuständiger Standort</h3>
                  <p className="text-sm text-muted-foreground">{region.standort}</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <Clock className="h-6 w-6 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground mb-1">Anfahrt</h3>
                  <p className="text-sm text-muted-foreground">{region.fahrzeit}</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <User className="h-6 w-6 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground mb-1">Ansprechpartner</h3>
                  <p className="text-sm text-muted-foreground">{region.ansprechpartner}</p>
                </CardContent>
              </Card>
            </div>
            {region.gbpUrl && (
              <p className="text-center mt-6">
                <a
                  href={region.gbpUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                >
                  Unser Google-Unternehmensprofil <ExternalLink className="h-3.5 w-3.5" /> ↗
                </a>
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Referenzen – nur freigegebene, nur passend zur Leistung */}
      {referenzen.length > 0 && (
        <section className="py-16 lg:py-20 bg-card">
          <div className="section-container">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8 text-center">
              {topic.shortTitle}-Referenzen in {city.name} & Umgebung
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {referenzen.map((ref) => {
                const card = (
                  <Card className={`bg-background border-border h-full ${ref.url ? "hover:border-primary/30 transition-colors" : ""}`}>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        {ref.name}
                      </CardTitle>
                      <p className="text-xs text-accent font-medium uppercase tracking-wider">{ref.ort}</p>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-sm text-muted-foreground">{ref.detail}</p>
                      {ref.url && (
                        <span className="text-xs text-primary inline-flex items-center gap-1 mt-3">
                          Referenz ansehen <ArrowRight className="h-3 w-3" />
                        </span>
                      )}
                    </CardContent>
                  </Card>
                );
                return ref.url ? (
                  <Link key={ref.name} to={ref.url} className="block h-full">{card}</Link>
                ) : (
                  <div key={ref.name}>{card}</div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Branchen */}
      {region.branchen.length > 0 && (
        <section className="py-16 lg:py-20">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
                Branchen-Erfahrung in {city.name}
              </h2>
              <div className="flex flex-wrap justify-center gap-3">
                {region.branchen.map((branche) => (
                  <Badge key={branche} variant="outline" className="text-sm px-4 py-2">
                    {branche}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Ausschlüsse */}
      {region.ausschluesse.length > 0 && (
        <section className="pb-16 lg:pb-20">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <Card className="bg-muted/30 border-border">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">Nicht unser Geschäft</h3>
                  <ul className="space-y-2">
                    {region.ausschluesse.map((item) => (
                      <li key={item} className="text-sm text-muted-foreground">
                        {item.includes("slt-rental.de") ? (
                          <>
                            Eventtechnik-Vermietung über SLT Rental am gleichen Standort (
                            <a
                              href="https://www.slt-rental.de"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:underline"
                            >
                              slt-rental.de ↗
                            </a>
                            )
                          </>
                        ) : (
                          item
                        )}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {faqs.length > 0 && (
        <section className="py-16 lg:py-20 bg-card">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8 text-center">
                Häufige Fragen zu {topic.shortTitle} in {city.name}
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      )}

      {/* Weiterführende Inhalte */}
      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="section-container">
          <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-6 text-center">
            Weiterführende Themen
          </h2>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            <Link to="/konferenzraum-ausstattung" className="group block p-5 rounded-xl border border-border bg-card hover:border-primary/40 hover:shadow-md transition-all">
              <div className="text-[10px] font-semibold uppercase tracking-wider text-accent mb-1">Pillar-Page</div>
              <h3 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors">Konferenzraum-Ausstattung im Überblick</h3>
              <p className="text-sm text-muted-foreground">Raumgrößen-Matrix von Huddle bis Boardroom mit Hardware-Empfehlungen.</p>
            </Link>
            <Link to="/managed-services" className="group block p-5 rounded-xl border border-border bg-card hover:border-primary/40 hover:shadow-md transition-all">
              <div className="text-[10px] font-semibold uppercase tracking-wider text-accent mb-1">Betrieb</div>
              <h3 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors">Managed Services & Wartung (ITIL v4)</h3>
              <p className="text-sm text-muted-foreground">Service Desk, Monitoring und planbare Wartung für AV- und Signage-Flotten.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="section-container text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
            {topic.shortTitle}-Projekt in {city.name} geplant?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Sprechen Sie mit uns über Ihre Anforderungen – wir beraten Sie persönlich und herstellerneutral.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="btn-glow">
              <Link to="/projektanfrage">
                Projektanfrage starten
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="mailto:info@slt-tg.de">
                <Mail className="mr-2 h-5 w-5" />
                info@slt-tg.de
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

/** NRW-Seite: redaktioneller Override, keiner einzelnen Stadt zugeordnet. */
const NrwFallback = ({ topicKey, cityKey }: LocalSEOPageProps) => {
  const city = cities[cityKey];
  const topic = topics[topicKey];
  const override = getContentOverride(topicKey, cityKey);
  if (!override) return null;

  return (
    <Layout>
      <SEOHead title={override.heroTitle} description={override.heroSubtitle} />

      <section className="py-20 lg:py-28 bg-gradient-to-b from-primary/5 to-background">
        <div className="section-container">
          <Breadcrumbs items={[{ label: topic.title, href: `/${topic.baseSlug}/krefeld` }, { label: city.name }]} />
          <div className="max-w-3xl mx-auto text-center mt-6">
            <Badge variant="outline" className="mb-6">
              <MapPin className="h-3 w-3 mr-1" />
              {city.name}
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">{override.heroTitle}</h1>
            <p className="text-lg text-muted-foreground mb-8">{override.heroSubtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="btn-glow">
                <Link to="/projektanfrage">
                  Projekt anfragen
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="tel:+4921514179902">
                  <Phone className="mr-2 h-5 w-5" />
                  Jetzt anrufen
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <p className="text-muted-foreground leading-relaxed text-lg">{override.intro}</p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-card">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
              Was wir in {city.name} leisten
            </h2>
            <ul className="space-y-3">
              {override.services.map((s, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8 text-center">
              Häufige Fragen zu {topic.title} in {city.name}
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {override.faqItems.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="section-container text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
            {topic.title}-Projekt in {city.name} geplant?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Sprechen Sie mit uns über Ihre Anforderungen – wir beraten Sie persönlich und herstellerneutral.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="btn-glow">
              <Link to="/projektanfrage">
                Projektanfrage starten
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="mailto:info@slt-tg.de">
                <Mail className="mr-2 h-5 w-5" />
                info@slt-tg.de
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LocalSEOPage;
