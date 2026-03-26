import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BookOpen, Clock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const guides = [
  {
    slug: "yealink-meetingboard-pro",
    title: "Yealink MeetingBoard Pro: All-in-One für Teams Rooms",
    description: "Funktionen, Größen und Einsatzszenarien des Yealink MeetingBoard Pro – inklusive Installation und Inbetriebnahme durch SLT als autorisierter Partner.",
    readTime: "7 Min.",
    category: "Produkte",
    featured: true,
  },
  {
    slug: "konferenztechnik-raumgroesse",
    title: "Welche Konferenztechnik für welche Raumgröße?",
    description: "Vom Huddle Space bis zum Boardroom: Welche AV-Ausstattung für welchen Raumtyp sinnvoll ist – mit konkreten Empfehlungen.",
    readTime: "8 Min.",
    category: "Planung",
  },
  {
    slug: "teams-rooms-vs-zoom-rooms",
    title: "Microsoft Teams Rooms vs. Zoom Rooms",
    description: "Funktionen, Lizenzkosten und Ökosysteme im Vergleich – eine neutrale Entscheidungshilfe für Ihr Unternehmen.",
    readTime: "6 Min.",
    category: "Plattformen",
  },
  {
    slug: "konferenzraum-kosten",
    title: "Was kostet ein Konferenzraum?",
    description: "Realistische Kostenrahmen für verschiedene Raumgrößen und Ausstattungsstufen – von der Basisausstattung bis zum Boardroom.",
    readTime: "7 Min.",
    category: "Budget",
  },
];

const Ratgeber = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();

  return (
    <Layout>
      <SEOHead
        title="Ratgeber Konferenz- & Medientechnik"
        description="Praxiswissen für die Planung Ihres Konferenzraums: Raumgrößen, Plattform-Vergleiche und Kosten – neutral und herstellerunabhängig."
        keywords="Konferenztechnik Ratgeber, Konferenzraum planen, Teams vs Zoom, Videokonferenz Kosten"
        canonical="/ratgeber"
      />

      <section className="py-20 lg:py-28 bg-gradient-to-b from-primary/5 via-primary/3 to-background">
        <div
          ref={heroRef}
          className={`section-container scroll-hidden-blur ${heroVisible ? "scroll-visible-blur" : ""}`}
        >
          <Breadcrumbs items={[{ label: "Ratgeber" }]} />
          <div className="max-w-3xl mx-auto text-center mt-6">
            <Badge variant="outline" className="mb-6">
              <BookOpen className="h-3 w-3 mr-1" />
              Wissen & Praxis
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Ratgeber{" "}
              <span className="text-primary">Konferenz- & Medientechnik</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Praxiswissen für IT-Entscheider und Facility Manager: Neutrale Empfehlungen, 
              realistische Kostenrahmen und fundierte Vergleiche – ohne Verkaufsdruck.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="section-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide, index) => (
              <Link
                key={guide.slug}
                to={`/ratgeber/${guide.slug}`}
                className={`group block ${guide.featured ? "md:col-span-2 lg:col-span-3" : ""}`}
              >
                <Card className={`h-full transition-all duration-300 group-hover:shadow-lg ${
                  guide.featured
                    ? "bg-primary/5 border-primary/30 hover:border-primary/50"
                    : "bg-card border-border hover:border-primary/30"
                }`}>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <Badge variant={guide.featured ? "default" : "secondary"} className="text-xs">
                        {guide.featured ? "⭐ Neu" : guide.category}
                      </Badge>
                      {guide.featured && (
                        <Badge variant="secondary" className="text-xs">{guide.category}</Badge>
                      )}
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {guide.readTime}
                      </span>
                    </div>
                    <CardTitle className={`group-hover:text-primary transition-colors ${guide.featured ? "text-2xl lg:text-3xl" : "text-xl"}`}>
                      {guide.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className={`text-muted-foreground mb-4 ${guide.featured ? "text-base max-w-2xl" : "text-sm"}`}>
                      {guide.description}
                    </p>
                    <span className="text-primary text-sm font-medium flex items-center gap-1">
                      Ratgeber lesen <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-card">
        <div className="section-container text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
            Individuelle Beratung gewünscht?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Unsere Ratgeber geben Ihnen eine solide Grundlage. Für Ihr konkretes Projekt 
            beraten wir Sie gerne persönlich – kostenfrei und unverbindlich.
          </p>
          <Button asChild size="lg" className="btn-glow">
            <Link to="/projektanfrage">
              Kostenfreies Erstgespräch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Ratgeber;
