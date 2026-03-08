import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, CheckCircle, MapPin, Phone, Mail } from "lucide-react";
import { cities, topics } from "@/data/localSEO";

interface LocalSEOPageProps {
  topicKey: string;
  cityKey: string;
}

const LocalSEOPage = ({ topicKey, cityKey }: LocalSEOPageProps) => {
  const city = cities[cityKey];
  const topic = topics[topicKey];

  if (!city || !topic) return null;

  const pageTitle = `${topic.metaTitle} ${city.name} – Fachplaner & Integrator | SLT`;
  const pageDesc = `${topic.metaDescription} ${city.description}: Installation, Integration und Service für ${city.name} und Umgebung. Kostenfreies Erstgespräch!`;

  return (
    <Layout>
      <SEOHead
        title={pageTitle}
        description={pageDesc}
        keywords={`${topic.title} ${city.name}, AV-Fachplaner ${city.name}, Konferenztechnik ${city.name}, Medientechnik ${city.region}`}
        canonical={`/${topic.baseSlug}/${city.slug}`}
      />

      {/* Hero */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-primary/5 to-background">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="outline" className="mb-6">
              <MapPin className="h-3 w-3 mr-1" />
              {city.name} & Umgebung
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {topic.heroTitle(city.name)}
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              {topic.heroSubtitle(city.name)}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="btn-glow">
                <Link to="/projektanfrage">
                  Kostenfreies Erstgespräch
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

      {/* Intro */}
      <section className="py-16 lg:py-20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
              {topic.title} {city.description} – professionell geplant und installiert
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {topic.intro(city.name)}
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-20 bg-card">
        <div className="section-container">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8 text-center">
            Unsere {topic.title}-Leistungen in {city.name}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topic.services.map((service, i) => (
              <Card key={i} className="bg-background border-border">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why SLT */}
      <section className="py-16 lg:py-20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8">
              Warum SLT Technology Group in {city.name}?
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 text-left">
              {[
                { title: "Kurze Wege", desc: `Unser Sitz in Krefeld ermöglicht schnelle Einsätze in ${city.name} und Umgebung.` },
                { title: "Herstellerneutral", desc: "Wir empfehlen, was zu Ihnen passt – nicht was die höchste Marge bringt." },
                { title: "Alles aus einer Hand", desc: "Planung, Installation, Inbetriebnahme und laufender Service." },
                { title: "Zertifizierte Partner", desc: "Offizielle Zertifizierungen bei Crestron, Shure, Barco, Q-Sys u.v.m." },
              ].map((item, i) => (
                <div key={i} className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20 bg-card">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8 text-center">
              Häufige Fragen zu {topic.title} in {city.name}
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {topic.faqItems(city.name).map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="section-container text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
            {topic.title}-Projekt in {city.name} geplant?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Lassen Sie uns in einem kostenfreien Erstgespräch über Ihre Anforderungen sprechen.
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
