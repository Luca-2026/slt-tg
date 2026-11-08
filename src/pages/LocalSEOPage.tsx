import { Link } from "react-router-dom";
import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, CheckCircle, MapPin, Phone, Mail, ChevronDown } from "lucide-react";
import { cities, topics, getContentOverride } from "@/data/localSEO";
import { getRegion, referenzenFuerLeistung, visibleFaqs, isServiceKey, isPlaceholder } from "@/data/regionen";
import { regionalSupplements } from "@/data/regionalSupplements";

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

  if (!isServiceKey(topicKey)) return null;
  const content = region.leistungen[topicKey];
  if (!content) return null;
  const h1 = `${topic.shortTitle} ${region.stadt}`;
  const referenzen = referenzenFuerLeistung(region, topicKey);
  const faqs = visibleFaqs(region, topicKey);
  const supplement = regionalSupplements[`/${topicKey}/${cityKey}`];

  return (
    <Layout>
      <SEOHead title={h1} description={content.einleitung ?? ""} />
      <section className="py-20 lg:py-28 bg-gradient-to-b from-primary/5 to-background">
        <div className="section-container">
          <Breadcrumbs items={[{ label: topic.title, href: `/${topic.baseSlug}/krefeld` }, { label: region.stadt }]} />
          <div className="max-w-3xl mx-auto mt-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">{h1}</h1>
            {content.einleitung && <p className="text-muted-foreground leading-relaxed" data-regional-intro>{content.einleitung}</p>}
          </div>
        </div>
      </section>
      {content.anforderungen && <section className="py-16 lg:py-20">
        <div className="section-container"><div className="max-w-3xl mx-auto">
          {content.anforderungen_titel && <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">{content.anforderungen_titel}</h2>}
          <p className="text-muted-foreground leading-relaxed" data-regional-requirements>{content.anforderungen}</p>
        </div></div>
      </section>}
      {referenzen.length > 0 && <section className="py-16 lg:py-20 bg-card">
        <div className="section-container">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8 text-center">Referenzen in {region.stadt} und Umgebung</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {referenzen.map(ref => {
              const card = <Card className="bg-background border-border h-full" data-regional-reference>
                <CardHeader><CardTitle className="text-lg">{ref.name}</CardTitle><p className="text-sm text-accent">{ref.ort}</p></CardHeader>
                <CardContent><p className="text-sm text-muted-foreground">{ref.beschreibung}</p></CardContent>
              </Card>;
              return ref.url ? <Link key={ref.name} to={ref.url} className="block h-full">{card}</Link> : <div key={ref.name}>{card}</div>;
            })}
          </div>
        </div>
      </section>}
      {content.arbeitsweise && <section className="py-16 lg:py-20">
        <div className="section-container"><div className="max-w-3xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">So arbeiten wir in {region.stadt}</h2>
          <p className="text-muted-foreground leading-relaxed">{content.arbeitsweise}</p>
          <p className="text-sm text-muted-foreground mt-6">{region.standort.name} · {region.fahrzeit} · {region.ansprechpartner.name}, {region.ansprechpartner.funktion}</p>
          {region.gbpUrl && !isPlaceholder(region.gbpUrl) && <a href={region.gbpUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">Google-Unternehmensprofil ↗</a>}
        </div></div>
      </section>}
      {supplement && <section className="py-16 lg:py-20">
        <div className="section-container"><div className="max-w-3xl mx-auto" data-regional-supplement>
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">{supplement.title}</h2>
          <p className="text-muted-foreground leading-relaxed">{supplement.text}</p>
        </div></div>
      </section>}
      {faqs.length > 0 && <section className="py-16 lg:py-20 bg-card">
        <div className="section-container"><div className="max-w-3xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8">Häufige Fragen</h2>
          {faqs.map(faq => <details key={faq.frage} className="group border-b border-border" data-regional-faq>
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-medium text-foreground hover:underline">{faq.frage}<ChevronDown className="h-4 w-4 shrink-0 transition-transform group-open:rotate-180" /></summary>
            <p className="pb-4 text-sm text-muted-foreground">{faq.antwort}</p>
          </details>)}
        </div></div>
      </section>}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="section-container text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">{topic.shortTitle}-Projekt in {region.stadt} geplant?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">Sprechen Sie mit uns über Ihre Anforderungen – wir beraten Sie persönlich und herstellerneutral.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="btn-glow"><Link to="/projektanfrage">Projektanfrage starten<ArrowRight className="ml-2 h-5 w-5" /></Link></Button>
            <Button asChild size="lg" variant="outline"><a href="mailto:info@slt-tg.de"><Mail className="mr-2 h-5 w-5" />info@slt-tg.de</a></Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

/** NRW-Seite: redaktioneller Override, keiner einzelnen Stadt zugeordnet. */
const NrwFallback = ({ topicKey, cityKey }: LocalSEOPageProps) => {
  const [openFaq, setOpenFaq] = useState("");
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

      {override.planningContext && <section className="py-16 lg:py-20">
        <div className="section-container"><div className="max-w-3xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">Raumstandards und Betrieb gemeinsam planen</h2>
          <p className="text-muted-foreground leading-relaxed">{override.planningContext}</p>
        </div></div>
      </section>}

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
            <Accordion type="single" collapsible value={openFaq} onValueChange={setOpenFaq} className="w-full">
              {override.faqItems.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent forceMount hidden={openFaq !== `faq-${i}`} className="text-muted-foreground">{faq.answer}</AccordionContent>
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
