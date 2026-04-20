import { useParams, Link, Navigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MapPin, Calendar, Building2, CheckCircle, ExternalLink } from "lucide-react";
import { getProjectBySlug, getRelatedProjects, PROJECTS } from "@/data/projects";

const ProjectPage = () => {
  const { slug = "" } = useParams<{ slug: string }>();
  const project = getProjectBySlug(slug);

  if (!project) {
    return <Navigate to="/projekte" replace />;
  }

  const related = getRelatedProjects(slug, 2);
  const url = `/projekte/${project.slug}`;

  return (
    <Layout>
      <SEOHead
        title={`${project.name} – Referenzprojekt`}
        description={project.shortDescription}
        canonical={url}
        ogImage={project.heroImage}
        type="article"
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-b from-primary/5 via-background to-background pt-8 pb-12 lg:pt-12 lg:pb-16">
        <div className="section-container">
          <Breadcrumbs
            items={[
              { label: "Projekte", href: "/projekte" },
              { label: project.client },
            ]}
          />

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center mt-6">
            <div>
              <Badge variant="outline" className="mb-4">
                {project.category}
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5 leading-tight">
                {project.name}
              </h1>
              <p className="text-base lg:text-lg text-muted-foreground mb-6">
                {project.shortDescription}
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-primary" />
                  {project.client}
                </span>
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  {project.location}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  {project.year}
                </span>
              </div>
            </div>

            <div className="aspect-video rounded-xl overflow-hidden bg-secondary shadow-lg">
              <img
                src={project.heroImage}
                alt={`${project.client} – ${project.category} in ${project.location}`}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-12 lg:py-16">
        <div className="section-container max-w-4xl">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
            Die Herausforderung
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
            {project.challenge}
          </p>
        </div>
      </section>

      {/* Solution */}
      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="section-container max-w-4xl">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
            Unsere Lösung
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
            {project.solution}
          </p>
        </div>
      </section>

      {/* Gallery */}
      {project.galleryImages && project.galleryImages.length > 1 && (
        <section className="py-12 lg:py-16">
          <div className="section-container">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
              Eindrücke aus dem Projekt
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.galleryImages.map((img, i) => (
                <div
                  key={img}
                  className="aspect-video rounded-lg overflow-hidden bg-secondary"
                >
                  <img
                    src={img}
                    alt={`${project.client} – Projektbild ${i + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Results */}
      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="section-container max-w-5xl">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8">
            Das Ergebnis
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {project.results.map((r) => (
              <Card key={r.title} className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{r.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {r.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-12 lg:py-16">
        <div className="section-container max-w-4xl">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
            Eingesetzte Technik
          </h2>
          <div className="rounded-lg border border-border overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {project.techStack.map((spec, i) => (
                  <tr
                    key={spec.label}
                    className={i % 2 === 0 ? "bg-card" : "bg-muted/30"}
                  >
                    <td className="px-5 py-3 font-medium text-foreground w-1/3 align-top">
                      {spec.label}
                    </td>
                    <td className="px-5 py-3 text-muted-foreground">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Tags + External Link */}
      <section className="pb-12 lg:pb-16">
        <div className="section-container max-w-4xl">
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          {project.externalLink && (
            <a
              href={project.externalLink.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline text-sm"
            >
              <ExternalLink className="h-4 w-4" />
              {project.externalLink.label} ↗
            </a>
          )}
        </div>
      </section>

      {/* Related Projects */}
      {related.length > 0 && (
        <section className="py-12 lg:py-16 bg-muted/30">
          <div className="section-container">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8">
              Weitere Projekte
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to={`/projekte/${p.slug}`}
                  className="group"
                >
                  <Card className="bg-card border-border overflow-hidden h-full hover:shadow-lg transition-shadow">
                    <div className="aspect-video overflow-hidden bg-secondary">
                      <img
                        src={p.heroImage}
                        alt={`${p.client} – ${p.category}`}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-5">
                      <Badge variant="outline" className="mb-2 text-xs">
                        {p.category}
                      </Badge>
                      <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {p.name}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {p.shortDescription}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-card">
        <div className="section-container text-center max-w-2xl">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
            Ähnliches Projekt umsetzen?
          </h2>
          <p className="text-muted-foreground mb-8">
            Lassen Sie uns über Ihr Vorhaben sprechen. Im kostenfreien Erstgespräch
            analysieren wir Ihre Anforderungen.
          </p>
          <Button asChild size="lg" className="btn-glow">
            <Link to="/projektanfrage">
              Projektanfrage stellen
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectPage;
