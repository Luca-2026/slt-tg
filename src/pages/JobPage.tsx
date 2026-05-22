import { useParams, Link, Navigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, GraduationCap, Wrench, MapPin, Clock, CalendarDays, Euro, ArrowRight } from "lucide-react";
import { getJobBySlug } from "@/data/jobs";
import { JobApplicationForm } from "@/components/karriere/JobApplicationForm";

const ICONS = { GraduationCap, Wrench, Briefcase } as const;

export default function JobPage() {
  const { slug } = useParams<{ slug: string }>();
  const job = slug ? getJobBySlug(slug) : undefined;

  if (!job) return <Navigate to="/karriere" replace />;

  const Icon = ICONS[job.iconName];
  // SEOHead hängt automatisch " | SLT Technology Group" an – Titel kurz halten.
  const shortTitle = `${job.title} – ${job.locationLabel}`;
  const breadcrumbItems = [
    { label: "Karriere", href: "/karriere" },
    { label: job.title },
  ];

  return (
    <Layout>
      <SEOHead
        title={shortTitle}
        description={job.seoDescription}
        keywords={`${job.title}, Karriere, Jobs, SLT Technology Group, ${job.addresses
          .map((a) => a.addressLocality)
          .join(", ")}, Medientechnik, AV-Technik`}
        canonical={`/karriere/${job.slug}`}
        type="article"
      />

      <section className="bg-gradient-to-b from-primary/5 to-background border-b border-border">
        <div className="section-container py-8 sm:py-12">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="mt-6 flex flex-col md:flex-row md:items-start gap-5">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Icon className="h-7 w-7 text-primary" />
            </div>
            <div className="flex-1">
              <Badge className="bg-accent/15 border border-accent/40 text-accent mb-3">
                Offene Stelle · Jetzt bewerben
              </Badge>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight">
                {job.title}
              </h1>
              {job.subtitle && (
                <p className="text-base sm:text-lg text-accent font-medium mt-2">{job.subtitle}</p>
              )}
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4" /> {job.locationLabel}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" /> {job.employmentTypeLabel}
                </span>
                <span className="flex items-center gap-1.5 text-primary font-medium">
                  <CalendarDays className="h-4 w-4" /> {job.startLabel}
                </span>
                {job.baseSalary && (
                  <span className="flex items-center gap-1.5">
                    <Euro className="h-4 w-4" />
                    {job.baseSalary.minValue.toLocaleString("de-DE")} –{" "}
                    {job.baseSalary.maxValue.toLocaleString("de-DE")} {job.baseSalary.currency} / Jahr
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container py-10 sm:py-14">
        <div className="grid lg:grid-cols-[1fr,400px] gap-10">
          <article className="space-y-8">
            <p className="text-lg text-foreground/90 leading-relaxed">{job.description}</p>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">Deine Aufgaben</h2>
              <ul className="space-y-2">
                {job.tasks.map((t, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground">
                    <ArrowRight className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">Das bringst du mit</h2>
              <ul className="space-y-2">
                {job.requirements.map((r, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground">
                    <ArrowRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            {job.weOffer && (
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">Das bieten wir dir</h2>
                <ul className="space-y-2">
                  {job.weOffer.map((o, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground">
                      <ArrowRight className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="pt-4 text-sm text-muted-foreground">
              <p>
                Bewerbungen bitte über das Formular oder per E-Mail an{" "}
                <a
                  href={`mailto:karriere@slt-tg.de?subject=${encodeURIComponent("Bewerbung: " + job.title)}`}
                  className="text-primary underline hover:text-primary/80"
                >
                  karriere@slt-tg.de
                </a>
                .
              </p>
            </div>
          </article>

          <aside id="bewerbung" className="lg:sticky lg:top-28 self-start">
            <Card className="shadow-lg border-primary/20">
              <CardContent className="p-5 sm:p-6">
                <h2 className="text-lg font-bold text-foreground mb-1">Jetzt bewerben</h2>
                <p className="text-sm text-muted-foreground mb-5">
                  Schick uns deine Unterlagen – wir melden uns zeitnah.
                </p>
                <JobApplicationForm job={job} />
              </CardContent>
            </Card>
          </aside>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <Link
            to="/karriere"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            ← Alle offenen Stellen
          </Link>
        </div>
      </section>
    </Layout>
  );
}
