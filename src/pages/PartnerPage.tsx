import { Link, useParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { getPartnerBySlug } from "@/data/partners";
import { ArrowRight, Award, CheckCircle, ExternalLink } from "lucide-react";

const PartnerPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const partner = slug ? getPartnerBySlug(slug) : undefined;

  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.05 });
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const { ref: faqRef, isVisible: faqVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  if (!partner) {
    return (
      <Layout>
        <div className="section-container py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Partner nicht gefunden</h1>
          <p className="text-muted-foreground mb-6">Der gesuchte Hersteller existiert nicht in unserem Portfolio.</p>
          <Button asChild>
            <Link to="/technologien">Zurück zu Technologien</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEOHead
        title={partner.headline}
        description={partner.description}
        canonical={`/partner/${partner.slug}`}
        ogImage={partner.ogImage}
      />

      {/* Hero */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-primary/5 via-primary/3 to-background relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>
        <div
          ref={heroRef}
          className={`section-container relative z-10 scroll-hidden-blur ${heroVisible ? "scroll-visible-blur" : ""}`}
        >
          <div className="max-w-3xl mx-auto">
            <Breadcrumbs
              items={[
                { label: "Technologien", href: "/technologien" },
                { label: partner.name },
              ]}
            />
            <Badge variant="outline" className="mb-6">
              Zertifizierter Partner
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              {partner.headline}
            </h1>
            <p className="text-base lg:text-lg text-muted-foreground">
              {partner.longDescription}
            </p>

            {/* Partner status */}
            <div className="flex flex-wrap items-center gap-2 mt-6">
              <Award className="h-4 w-4 text-primary" />
              <Badge variant="secondary" className="text-xs">
                {partner.partnerStatus}
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 lg:py-24">
        <div className="section-container">
          <div
            ref={contentRef}
            className={`scroll-hidden-blur ${contentVisible ? "scroll-visible-blur" : ""}`}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8">
              Produktbereiche & Lösungen
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 lg:gap-5">
              {partner.categories.map((category, i) => (
                <Card
                  key={category.name}
                  className="bg-card border-border hover:border-primary/30 hover:shadow-md transition-all duration-300"
                >
                  <CardHeader className="p-4 lg:p-6 pb-2">
                    <CardTitle className="text-sm lg:text-base">{category.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 lg:p-6 pt-2">
                    <p className="text-xs lg:text-sm text-muted-foreground mb-4">
                      {category.description}
                    </p>
                    <ul className="space-y-1.5">
                      {category.products.map((product) => (
                        <li key={product} className="flex items-center gap-2 text-xs lg:text-sm text-muted-foreground">
                          <CheckCircle className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                          {product}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 lg:py-24 bg-card/50">
        <div className="section-container">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8">
            Anwendungsfälle
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {partner.useCases.map((useCase) => (
              <Card key={useCase.title} className="bg-background border-border/60">
                <CardHeader className="p-4 lg:p-5">
                  <CardTitle className="text-sm lg:text-base">{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 lg:p-5 pt-0">
                  <p className="text-xs lg:text-sm text-muted-foreground">{useCase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* References — nur anzeigen, wenn verifizierte Referenzen vorliegen */}
      {partner.references.length > 0 && (
        <section className="py-16 lg:py-24">
          <div className="section-container">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8">
              Referenzprojekte mit {partner.name}
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 lg:gap-5">
              {partner.references.map((ref) => (
                <Card key={ref.projectName} className="bg-card border-border/60">
                  <CardHeader className="p-4 lg:p-5">
                    <CardTitle className="text-sm lg:text-base">{ref.projectName}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 lg:p-5 pt-0">
                    <p className="text-xs lg:text-sm text-muted-foreground">{ref.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-6">
              Weitere Referenzen mit {partner.name} auf Anfrage.
            </p>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-card/50">
        <div className="section-container">
          <div
            ref={faqRef}
            className={`scroll-hidden-blur ${faqVisible ? "scroll-visible-blur" : ""}`}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8">
              Häufige Fragen zu {partner.name}
            </h2>
            <div className="max-w-3xl space-y-4">
              {partner.faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group bg-background rounded-xl border border-border/60 overflow-hidden"
                >
                  <summary className="flex items-center justify-between p-4 lg:p-5 cursor-pointer list-none">
                    <span className="text-sm lg:text-base font-medium text-foreground pr-4">
                      {faq.question}
                    </span>
                    <span className="text-primary transition-transform group-open:rotate-180 flex-shrink-0">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-4 lg:px-5 pb-4 lg:pb-5 text-sm text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary/10 via-background to-background relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        </div>
        <div
          ref={ctaRef}
          className={`section-container text-center relative z-10 scroll-hidden-scale ${ctaVisible ? "scroll-visible-scale" : ""}`}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
            {partner.name}-Integration planen?
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Wir beraten herstellerneutral und finden die optimale Kombination für Ihre Anforderungen.
            Inklusive Bedarfsanalyse, Kostenkalkulation und Rollout-Planung.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="btn-glow">
              <Link to="/projektanfrage">
                Beratungsgespräch vereinbaren
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={partner.websiteUrl} target="_blank" rel="noopener noreferrer">
                {partner.name} Website <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PartnerPage;