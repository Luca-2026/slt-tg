import { Link, useParams, Navigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { getSolutionPage, solutionsNav } from "@/data/solutionPages";
import { ArrowRight, CheckCircle } from "lucide-react";

/**
 * Generische Detailseite je Anwendungsfall unter /loesungen/{slug}.
 * Inhalte kommen ausschließlich aus src/data/solutionPages.ts.
 */
const SolutionPage = () => {
  const { slug } = useParams();
  const solution = getSolutionPage(slug);

  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.05 });
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  if (!solution) {
    return <Navigate to="/loesungen" replace />;
  }

  const canonical = `/loesungen/${solution.slug}`;

  return (
    <Layout>
      <SEOHead
        title={solution.title.replace(" | SLT Technology Group", "")}
        description={solution.description}
        keywords={solution.keywords}
        canonical={canonical}
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: solution.h1,
            serviceType: solution.navLabel,
            provider: {
              "@type": "Organization",
              name: "SLT Technology Group",
              url: "https://www.slt-tg.de/",
            },
            areaServed: "DE",
            url: `https://www.slt-tg.de${canonical}`,
            description: solution.description,
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: solution.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          },
        ]}
      />

      {/* Hero */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-primary/5 via-primary/3 to-background relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        </div>
        <div
          ref={heroRef}
          className={`section-container relative z-10 scroll-hidden-blur ${heroVisible ? "scroll-visible-blur" : ""}`}
        >
          <div className="max-w-3xl">
            <Breadcrumbs
              items={[
                { label: "Lösungen", href: "/loesungen" },
                { label: solution.navLabel },
              ]}
            />
            <Badge variant="outline" className="mb-6">
              {solution.badge}
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              {solution.h1}
            </h1>
            <p className="text-base lg:text-lg text-muted-foreground">{solution.heroLead}</p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Button asChild>
                <Link to="/projektanfrage">
                  Projekt anfragen
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/loesungen">Alle Lösungen ansehen</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Bild + Kernkriterien */}
      <section className="py-16 lg:py-20">
        <div className="section-container">
          <div
            ref={gridRef}
            className={`grid lg:grid-cols-2 gap-10 lg:gap-14 items-center scroll-hidden-blur ${gridVisible ? "scroll-visible-blur" : ""}`}
          >
            <div className="aspect-video bg-secondary rounded-2xl overflow-hidden shadow-lg">
              <img
                src={solution.image}
                alt={`${solution.navLabel}: AV- und IT-Lösung von SLT Technology Group`}
                loading="lazy"
                className={`w-full h-full object-cover ${solution.imagePosition || ""}`}
              />
            </div>
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
                Worauf es bei {solution.navLabel} ankommt
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {solution.criteria.map((c) => (
                  <Card key={c.title} className="bg-card border-border h-full">
                    <CardHeader className="p-4 pb-2">
                      <CardTitle className="text-sm lg:text-base">{c.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-xs lg:text-sm text-muted-foreground leading-relaxed">
                        {c.text}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fachabschnitte */}
      {solution.sections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className={`py-14 lg:py-20 ${index % 2 === 0 ? "bg-card/50" : ""}`}
        >
          <div className="section-container">
            <div className="grid lg:grid-cols-[1fr_1fr] gap-8 lg:gap-14">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  {section.title}
                </h2>
                <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                  {section.body}
                </p>
              </div>
              <div>
                <h3 className="text-xs font-semibold text-foreground uppercase tracking-wide mb-3">
                  Planungspunkte
                </h3>
                <ul className="space-y-2">
                  {section.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-xs lg:text-sm text-muted-foreground"
                    >
                      <CheckCircle className="h-3.5 w-3.5 text-primary mt-0.5 flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Anwendungsfälle */}
      <section className="py-12 lg:py-16">
        <div className="section-container">
          <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-4">
            Typische Anwendungsfälle
          </h2>
          <div className="flex flex-wrap gap-2">
            {solution.useCases.map((u) => (
              <Badge key={u} variant="secondary" className="text-xs">
                {u}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 lg:py-20 bg-card/50">
        <div className="section-container">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8">
            Häufige Fragen: {solution.navLabel}
          </h2>
          <div className="max-w-3xl space-y-4">
            {solution.faqs.map((faq) => (
              <details
                key={faq.question}
                className="group bg-card rounded-xl border border-border/60 overflow-hidden"
              >
                <summary className="flex items-center justify-between p-4 lg:p-5 cursor-pointer list-none">
                  <span className="text-sm lg:text-base font-medium text-foreground pr-4">
                    {faq.question}
                  </span>
                  <span className="text-primary transition-transform group-open:rotate-180 flex-shrink-0">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M4 6L8 10L12 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
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
      </section>

      {/* Interne Verlinkung */}
      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="section-container">
          <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-6">
            Weiterführende Themen
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {solution.relatedLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="group flex h-full flex-col justify-between gap-3 p-5 rounded-xl border border-border bg-card hover:border-primary/40 hover:shadow-md transition-all"
              >
                <span className="block text-sm font-medium text-foreground leading-snug group-hover:text-primary transition-colors">
                  {l.label}
                </span>
                <span className="inline-flex items-center text-xs font-medium text-primary">
                  Ansehen
                  <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>

          <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mt-10 mb-3">
            Weitere Lösungsbereiche
          </h3>
          <div className="flex flex-wrap gap-2">
            {solutionsNav
              .filter((n) => n.href !== canonical)
              .map((n) => (
                <Link
                  key={n.href}
                  to={n.href}
                  className="inline-flex items-center px-3 py-1.5 rounded-full border border-border bg-background text-xs text-muted-foreground hover:border-primary/40 hover:text-primary transition-all"
                >
                  {n.name}
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-background to-primary/5">
        <div
          ref={ctaRef}
          className={`section-container text-center scroll-hidden-scale ${ctaVisible ? "scroll-visible-scale" : ""}`}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
            {solution.navLabel} planen lassen
          </h2>
          <p className="text-sm lg:text-base text-muted-foreground max-w-2xl mx-auto mb-8">
            Wir nehmen Ihre Räume, Standorte und IT-Vorgaben auf und erarbeiten ein
            umsetzbares Konzept – herstellerneutral und mit klarer Leistungsbeschreibung.
          </p>
          <Button asChild size="lg" className="btn-glow">
            <Link to="/projektanfrage">
              Projekt anfragen
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default SolutionPage;
