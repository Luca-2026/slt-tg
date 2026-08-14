import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { msModules, msModels, msProcess, msFaqs } from "@/data/managedServices";
import { ArrowRight, CheckCircle, AlertTriangle } from "lucide-react";
import monitoringImg from "@/assets/managed-services/managed-av-services-monitoring-slt.webp";
import helpdeskImg from "@/assets/managed-services/managed-av-services-helpdesk-slt.webp";

const problems = [
  "Störungen fallen erst auf, wenn das Meeting bereits begonnen hat.",
  "Zuständigkeiten pendeln zwischen IT, Facility Management und Hersteller.",
  "Kein belastbarer Überblick, welche Räume wie genutzt werden.",
  "Ungeplante Einsätze und Ersatzbeschaffungen sprengen das Budget.",
];

const reasons = [
  {
    title: "AV und IT aus einer Hand",
    text: "Wir betreiben Medientechnik und die zugehörige Netzwerk-/IT-Seite gemeinsam – kein Fingerzeigen zwischen Gewerken.",
  },
  {
    title: "ITIL v4 als Prozessbasis",
    text: "Incident-, Problem- und Change-Management nach international etabliertem Standard, anschlussfähig an Konzern-IT.",
  },
  {
    title: "Herstellerneutral",
    text: "Wir betreuen Umgebungen von Crestron über Q-SYS bis Yealink – auch gemischte Bestände aus mehreren Projekten.",
  },
  {
    title: "Multi-Site-erfahren",
    text: "Zentrales Monitoring und Ticketing, koordinierte Vor-Ort-Einsätze über unsere Standorte Krefeld und Bonn.",
  },
];

const ManagedServices = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.05 });
  const { ref: problemRef, isVisible: problemVisible } = useScrollAnimation();
  const { ref: modulesRef, isVisible: modulesVisible } = useScrollAnimation();
  const { ref: modelsRef, isVisible: modelsVisible } = useScrollAnimation();
  const { ref: processRef, isVisible: processVisible } = useScrollAnimation();
  const { ref: whyRef, isVisible: whyVisible } = useScrollAnimation();
  const { ref: faqRef, isVisible: faqVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  return (
    <Layout>
      <SEOHead
        title="Managed Services für AV- & Konferenztechnik"
        description="Managed Services für Konferenz- und Medientechnik: Service Desk, proaktives 24/7-Monitoring, Managed Rooms und Wartung nach ITIL v4 – multi-site-fähig, herstellerneutral, aus NRW."
        keywords="Managed Services, AV Managed Services, Managed Rooms, Service Desk, 24/7 Monitoring, ITIL v4, AV-Betrieb, Konferenztechnik Betrieb"
        canonical="/managed-services"
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
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="min-w-0">
              <Breadcrumbs items={[{ label: "Managed Services" }]} />
              <Badge variant="outline" className="mb-6">
                Betrieb nach ITIL v4
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                Managed Services für{" "}
                <span className="text-primary">Konferenz- und Medientechnik</span>
              </h1>
              <p className="text-base lg:text-lg text-muted-foreground mb-8">
                Wir übernehmen den laufenden Betrieb Ihrer AV-Umgebung: zentraler Service Desk,
                proaktives 24/7-Monitoring, Managed Rooms und planbare Wartung – über alle
                Standorte hinweg und abgestimmt mit Ihrer IT.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="btn-glow w-full sm:w-auto">
                  <Link to="/projektanfrage" className="w-full justify-center whitespace-normal text-center">
                    Managed-Service-Gespräch vereinbaren
                    <ArrowRight className="ml-2 h-5 w-5 shrink-0" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                  <Link to="/service-wartung" className="w-full justify-center whitespace-normal text-center">
                    Service &amp; Wartung im Überblick
                  </Link>
                </Button>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-border shadow-lg">
              <img
                src={monitoringImg}
                alt="Zentral überwachter Konferenzraum im Managed-Service-Betrieb der SLT Technology Group"
                width={1280}
                height={720}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem-Framing */}
      <section className="py-16 lg:py-24 bg-card/50">
        <div className="section-container">
          <div
            ref={problemRef}
            className={`grid lg:grid-cols-2 gap-10 items-center scroll-hidden-blur ${problemVisible ? "scroll-visible-blur" : ""}`}
          >
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                Warum der Eigenbetrieb an Grenzen stößt
              </h2>
              <p className="text-sm lg:text-base text-muted-foreground mb-6 max-w-xl">
                Je mehr Räume, Standorte und Plattformen im Einsatz sind, desto aufwendiger wird
                der Betrieb. Typische Symptome, die wir in Bestandsaufnahmen sehen:
              </p>
              <ul className="space-y-3 max-w-xl">
                {problems.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm lg:text-base text-muted-foreground">
                    <AlertTriangle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden border border-border shadow-lg">
              <img
                src={helpdeskImg}
                alt="Service-Desk-Mitarbeiter der SLT Technology Group betreut AV-Störungsmeldungen"
                loading="lazy"
                width={1280}
                height={720}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leistungsmodule */}
      <section className="py-16 lg:py-24">
        <div className="section-container">
          <div
            ref={modulesRef}
            className={`scroll-hidden-blur ${modulesVisible ? "scroll-visible-blur" : ""}`}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
              Leistungsmodule im Managed Service
            </h2>
            <p className="text-sm lg:text-base text-muted-foreground mb-8 max-w-2xl">
              Sie kombinieren die Module, die Sie brauchen – vom reinen Anwender-Support bis zum
              vollständig ausgelagerten Raumbetrieb.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
              {msModules.map((m, index) => (
                <Card
                  key={m.id}
                  id={m.id}
                  className={`bg-card border-border h-full flex flex-col scroll-hidden ${modulesVisible ? "scroll-visible" : ""}`}
                  style={{ transitionDelay: `${index * 0.06}s` }}
                >
                  <CardHeader className="p-5 pb-3">
                    <CardTitle className="text-base lg:text-lg">{m.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-5 pt-0">
                    <p className="text-xs lg:text-sm text-muted-foreground mb-4">{m.description}</p>
                    <ul className="space-y-2">
                      {m.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-xs lg:text-sm text-muted-foreground">
                          <CheckCircle className="h-3.5 w-3.5 text-primary mt-0.5 flex-shrink-0" />
                          <span>{b}</span>
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

      {/* Service-Modelle */}
      <section className="py-16 lg:py-24 bg-card/50">
        <div className="section-container">
          <div
            ref={modelsRef}
            className={`scroll-hidden-blur ${modelsVisible ? "scroll-visible-blur" : ""}`}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
              Service-Modelle
            </h2>
            <p className="text-sm lg:text-base text-muted-foreground mb-8 max-w-2xl">
              Drei Ausbaustufen als Orientierung. Servicezeiten, Reaktionszeiten und Umfang
              vereinbaren wir individuell im Servicevertrag.
            </p>
            <div className="grid md:grid-cols-3 gap-4 lg:gap-5">
              {msModels.map((model, index) => (
                <div
                  key={model.name}
                  className={`flex h-full flex-col rounded-xl border border-border bg-card p-6 scroll-hidden ${modelsVisible ? "scroll-visible" : ""}`}
                  style={{ transitionDelay: `${index * 0.08}s` }}
                >
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-accent mb-2">
                    {model.focus}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{model.name}</h3>
                  <p className="text-xs lg:text-sm text-muted-foreground mb-4">{model.description}</p>
                  <ul className="space-y-2 mt-auto">
                    {model.includes.map((i) => (
                      <li key={i} className="flex items-start gap-2 text-xs lg:text-sm text-muted-foreground">
                        <CheckCircle className="h-3.5 w-3.5 text-primary mt-0.5 flex-shrink-0" />
                        <span>{i}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ablauf */}
      <section className="py-16 lg:py-24">
        <div className="section-container">
          <div
            ref={processRef}
            className={`scroll-hidden-blur ${processVisible ? "scroll-visible-blur" : ""}`}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8">
              So läuft die Zusammenarbeit
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {msProcess.map((p, index) => (
                <div
                  key={p.step}
                  className={`rounded-xl border border-border bg-card p-5 h-full scroll-hidden ${processVisible ? "scroll-visible" : ""}`}
                  style={{ transitionDelay: `${index * 0.06}s` }}
                >
                  <div className="text-2xl font-bold text-primary/30 mb-2">{p.step}</div>
                  <h3 className="text-sm font-semibold text-foreground mb-2">{p.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Warum SLT */}
      <section className="py-16 lg:py-24 bg-card/50">
        <div className="section-container">
          <div
            ref={whyRef}
            className={`scroll-hidden-blur ${whyVisible ? "scroll-visible-blur" : ""}`}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8">
              Warum SLT Technology Group als Managed-Service-Partner
            </h2>
            <div className="grid sm:grid-cols-2 gap-5 max-w-4xl">
              {reasons.map((r) => (
                <div key={r.title} className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{r.title}</h3>
                    <p className="text-sm text-muted-foreground">{r.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mt-10">
              <Link
                to="/konferenzraum-ausstattung"
                className="group flex h-full flex-col justify-between gap-3 p-5 rounded-xl border border-border bg-card hover:border-primary/40 hover:shadow-md transition-all"
              >
                <span className="block text-sm font-medium text-foreground leading-snug group-hover:text-primary transition-colors">
                  Konferenzraum-Ausstattung nach Raumgröße
                </span>
                <span className="inline-flex items-center text-xs font-medium text-primary">
                  Ansehen <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
              <Link
                to="/videokonferenzanlage"
                className="group flex h-full flex-col justify-between gap-3 p-5 rounded-xl border border-border bg-card hover:border-primary/40 hover:shadow-md transition-all"
              >
                <span className="block text-sm font-medium text-foreground leading-snug group-hover:text-primary transition-colors">
                  Videokonferenzanlage planen und betreiben lassen
                </span>
                <span className="inline-flex items-center text-xs font-medium text-primary">
                  Ansehen <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24">
        <div className="section-container">
          <div
            ref={faqRef}
            className={`scroll-hidden-blur ${faqVisible ? "scroll-visible-blur" : ""}`}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8">
              Häufige Fragen zu Managed Services
            </h2>
            <div className="max-w-3xl space-y-4">
              {msFaqs.map((faq) => (
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
            Betrieb abgeben, Verfügbarkeit gewinnen
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Wir starten mit einer Bestandsaufnahme Ihrer Räume und Standorte und schlagen ein
            Service-Modell mit fester monatlicher Pauschale vor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="btn-glow">
              <Link to="/projektanfrage">
                Managed Services anfragen
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/kontakt">Kontakt aufnehmen</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ManagedServices;
