import { useParams, Link, Navigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Clock, Calendar, CheckCircle, Phone, User } from "lucide-react";
import { getRatgeberPostBySlug } from "@/data/ratgeberPosts";
import heroImage from "@/assets/ratgeber/ki-readiness-hero.jpg";

const checklist = [
  {
    title: "Bestandsaufnahme",
    text: "Alle AV-Systeme, Plattformen und bereits aktiven KI-Funktionen erfassen (auch die, die niemand bewusst eingeschaltet hat).",
  },
  {
    title: "Risiko- und Rechtscheck",
    text: "Eingesetzte KI-Funktionen den Risikokategorien des AI Act zuordnen, Transparenzpflichten prüfen, Bewertung dokumentieren.",
  },
  {
    title: "Infrastruktur prüfen",
    text: "Netzwerk, Segmentierung, Bandbreite und Sicherheitskonzept auf KI- und AV-over-IP-Tauglichkeit bewerten.",
  },
  {
    title: "Raumstandards definieren",
    text: "KI-fähige Referenzräume festlegen (Kamera, Audio, Plattform), statt jeden Raum einzeln zu entscheiden.",
  },
  {
    title: "Mitarbeitende schulen",
    text: "KI-Kompetenz nach Artikel 4 AI Act nachweisbar aufbauen, inklusive klarer Nutzungsrichtlinien.",
  },
  {
    title: "Pilot und Rollout",
    text: "Mit einem Pilotraum starten, Erfahrungen messen (Nutzung, Support-Tickets, Meeting-Ergebnisse) und dann standardisiert ausrollen.",
  },
];

const RatgeberKiReadiness = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getRatgeberPostBySlug(slug) : undefined;

  if (!post) return <Navigate to="/ratgeber" replace />;

  return (
    <Layout>
      <SEOHead
        title={post.title}
        description={post.description}
        keywords={post.keywords}
        canonical={`/ratgeber/${post.slug}`}
        type="article"
        ogImage={post.ogImage}
      />

      <article className="pb-12 lg:pb-20">
        <div className="section-container px-4 sm:px-6 pt-8 lg:pt-12">
          <div className="max-w-3xl mx-auto">
            <Breadcrumbs items={[
              { label: "Ratgeber", href: "/ratgeber" },
              { label: post.title },
            ]} />

            <div className="flex items-center gap-3 mt-4 lg:mt-6 mb-4 flex-wrap">
              <Badge variant="secondary" className="text-xs">{post.category}</Badge>
              <span className="text-xs sm:text-sm text-muted-foreground flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" /> Lesezeit: ca. 8 Minuten
              </span>
              <span className="text-xs sm:text-sm text-muted-foreground flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" /> 06.08.2026
              </span>
              <span className="text-xs sm:text-sm text-muted-foreground flex items-center gap-1">
                <User className="h-3.5 w-3.5" /> {post.author}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6 lg:mb-8 leading-tight">
              {post.h1}
            </h1>

            <img
              src={heroImage}
              alt="Moderner Konferenzraum mit Display und Kamera-Soundbar, überlagert von einer abstrakten Visualisierung von KI-Datenströmen"
              width={1600}
              height={912}
              className="w-full rounded-lg mb-8 lg:mb-10"
            />

            <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">
              Künstliche Intelligenz ist in der professionellen Medientechnik angekommen. Nicht als Messedemo,
              sondern im Produktivbetrieb: Kameras, die Sprecher automatisch verfolgen. Audio-DSPs, die
              Störgeräusche in Echtzeit herausrechnen. Wartungsplattformen, die Ausfälle melden, bevor sie
              passieren. Gleichzeitig gelten seit dem 2. August 2026 zentrale Pflichten der EU-KI-Verordnung.
              Wer jetzt nicht prüft, wie KI-fähig die eigene AV-Infrastruktur ist, investiert in Technik von
              gestern. Dieser Ratgeber zeigt, was KI-Readiness konkret bedeutet und wie Sie Ihr Unternehmen
              Schritt für Schritt vorbereiten.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 mt-10">
              Was bedeutet KI-Readiness in der Medientechnik?
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
              KI-Readiness beschreibt die Fähigkeit eines Unternehmens, KI-Funktionen in der Medien- und
              Konferenztechnik sinnvoll, sicher und rechtskonform einzusetzen. Das umfasst vier Ebenen:
            </p>
            <Card className="mb-6 bg-primary/5 border-primary/20">
              <CardContent className="p-4 sm:p-6">
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /><span><strong>Technik:</strong> Sind Kameras, Mikrofone, DSPs und Displays KI-fähig oder per Update KI-fähig zu machen?</span></li>
                  <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /><span><strong>Infrastruktur:</strong> Trägt das Netzwerk KI-Workloads, Cloud-Anbindung und AV-over-IP, und ist es abgesichert?</span></li>
                  <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /><span><strong>Organisation:</strong> Gibt es Richtlinien, wer KI-Funktionen wie nutzen darf, und sind Mitarbeitende geschult?</span></li>
                  <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /><span><strong>Recht:</strong> Erfüllen die eingesetzten Systeme die Transparenz- und Kompetenzpflichten der EU-KI-Verordnung?</span></li>
                </ul>
              </CardContent>
            </Card>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed">
              Wer alle vier Ebenen im Griff hat, kann neue KI-Funktionen produktiv nutzen, statt ihnen
              hinterherzulaufen.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 mt-10">
              KI im Konferenzraum: Vom Assistenzsystem zum Meeting-Agenten
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed">
              Die Branchenverbände sind sich einig: Die Konvergenz von AV, IT und KI war das beherrschende
              Thema der großen Fachmessen ISE und InfoComm 2026. In der Praxis sind heute vor allem drei
              Anwendungsfelder relevant:
            </p>

            <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 mt-8">
              Intelligente Kamera- und Audiotechnik
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed">
              Moderne Konferenzkameras rahmen Teilnehmer automatisch ein, verfolgen Sprecher und liefern
              Regie-ähnliche Bildwechsel ohne Bedienpersonal. KI-gestützte Audio-DSPs unterdrücken
              Störgeräusche, gleichen Pegel automatisch an und passen sich in Echtzeit an die Raumakustik an.
              Für hybride Meetings bedeutet das: Remote-Teilnehmer sind gleichberechtigt eingebunden, ohne dass
              jemand im Raum Technik bedienen muss. Welche Kombination aus Kamera, Audio und Plattform pro
              Raumgröße sinnvoll ist, zeigt unsere Übersicht zur{" "}
              <Link to="/konferenzraum-ausstattung" className="text-primary underline underline-offset-4">
                Konferenzraum-Ausstattung nach Raumgröße
              </Link>.
            </p>

            <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 mt-8">
              Agentische Meeting-Assistenten
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed">
              Die nächste Stufe sind agentische KI-Systeme, die nicht nur transkribieren, sondern Aufgaben
              ableiten, Protokolle verteilen und Folgetermine anstoßen. Der Maßstab verschiebt sich damit von
              der reinen Bild- und Tonqualität hin zur Frage: Was passiert nach dem Meeting? Räume und
              Plattformen werden zunehmend daran gemessen, wie gut sie Gespräche in messbare Ergebnisse
              überführen.
            </p>

            <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 mt-8">
              Predictive Maintenance für AV-Systeme
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed">
              KI-gestützte Monitoring-Plattformen analysieren Gerätedaten kontinuierlich und erkennen
              Ausfallmuster, bevor ein Raum stillsteht. Für Unternehmen mit vielen Standorten und Räumen ist das
              ein direkter Hebel gegen Ausfallzeiten und gegen den Fachkräftemangel in der AV-Branche, denn
              qualifizierte Servicetechniker sind knapp und werden es absehbar bleiben. Wie ein solcher Betrieb
              organisiert wird, beschreiben wir unter{" "}
              <Link to="/service-wartung" className="text-primary underline underline-offset-4">
                Service &amp; Wartung
              </Link>.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 mt-10">
              Der rechtliche Rahmen: EU AI Act, NIS2 und Cyber Resilience Act
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
              KI-Readiness ist 2026 auch eine Compliance-Frage. Drei Regelwerke sind für AV-Verantwortliche
              relevant:
            </p>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
              <strong className="text-foreground">EU-KI-Verordnung (AI Act):</strong> Seit dem 2. August 2026
              sind zentrale Bestimmungen anwendbar, darunter die Transparenzpflichten nach Artikel 50 sowie der
              Beginn von Durchsetzung und Sanktionierung. Nutzer müssen etwa erkennen können, wenn sie mit einem
              KI-System interagieren, und bestimmte KI-generierte Inhalte sind zu kennzeichnen. Die umfangreichen
              Pflichten für Hochrisiko-KI-Systeme wurden durch den sogenannten Digital Omnibus verschoben
              (Anhang III voraussichtlich auf Dezember 2027, in Produkte eingebettete KI nach Anhang I auf
              August 2028). Wichtig: Bereits seit dem 2. Februar 2025 gilt die KI-Kompetenzpflicht nach
              Artikel 4 für alle Unternehmen, die KI-Systeme einsetzen, unabhängig von der Risikokategorie.
              Mitarbeitende, die KI-Funktionen bedienen oder deren Ergebnisse nutzen, müssen nachweisbar
              geschult sein. Das schließt KI-Funktionen in Konferenzräumen ein.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
              <strong className="text-foreground">NIS2 und Cyber Resilience Act:</strong> Vernetzte Medientechnik
              ist Teil der IT-Angriffsfläche. Jedes netzwerkfähige Display, jede Kamera und jede
              Kollaborationsplattform muss in das Sicherheitskonzept einbezogen werden. Moderne Meetingräume
              müssen deshalb drei Prioritäten ausbalancieren: vertrauenswürdige Intelligenz, einfache
              Bedienbarkeit für Nutzer und IT sowie Konformität mit den geltenden Sicherheitsstandards.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed">
              Praktisch heißt das: KI-Funktionen in der Medientechnik sollten nicht einfach aktiviert, sondern
              gemeinsam mit IT, Datenschutz und dem AV-Integrator bewertet und dokumentiert werden.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 mt-10">
              Warum sich das Warten nicht lohnt
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed">
              Der professionelle AV-Markt wächst und investiert. Der Corporate-AV-Sektor erreichte laut
              AVIXA-Marktanalyse zuletzt ein Volumen von rund 72,5 Milliarden US-Dollar, getragen von hybriden
              Arbeitsmodellen und dem Wunsch nach reibungslosen, gleichberechtigten Meetings. Unternehmen, die
              jetzt Räume planen oder modernisieren, treffen Investitionsentscheidungen mit fünf bis zehn Jahren
              Nutzungsdauer. Wer dabei KI-Fähigkeit, Netzwerintegration und Compliance nicht mitdenkt, kauft
              absehbar doppelt.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 mt-10">
              KI-Readiness-Checkliste: In sechs Schritten zur KI-fähigen Medientechnik
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {checklist.map((item, i) => (
                <Card key={item.title} className="bg-secondary/40 border-border">
                  <CardContent className="p-4 sm:p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center flex-shrink-0">
                        {i + 1}
                      </span>
                      <h3 className="font-semibold text-foreground text-sm sm:text-base">{item.title}</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 mt-10">
              Fazit: KI-Readiness ist Planungsaufgabe, keine Produktentscheidung
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed">
              KI in der Medientechnik ist kein einzelnes Gerät, das man kauft, sondern das Ergebnis sauberer
              Planung über Technik, Netzwerk, Organisation und Recht hinweg. Genau hier setzt professionelle{" "}
              <Link to="/leistungen" className="text-primary underline underline-offset-4">
                AV-Systemintegration
              </Link>{" "}
              an: herstellerneutrale Fachplanung, die KI-Fähigkeit, IT-Sicherheit und Compliance von Anfang an
              mitdenkt. So wird aus dem Schlagwort KI ein messbarer Vorteil im Arbeitsalltag.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 mt-10">
              Häufige Fragen zur KI-Readiness in der AV-Branche
            </h2>
            <div className="space-y-4 mb-10">
              {post.faqs.map((faq) => (
                <Card key={faq.question} className="border-border">
                  <CardContent className="p-4 sm:p-5">
                    <h3 className="font-semibold text-foreground text-sm sm:text-base mb-2">{faq.question}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 pt-8 border-t border-border">
              <h2 className="text-lg sm:text-xl font-bold text-foreground mb-3">
                Sprechen Sie mit unseren AV-Fachplanern über die KI-Fähigkeit Ihrer Räume
              </h2>
              <p className="text-sm text-muted-foreground mb-6">
                Wir nehmen Ihren Bestand auf, bewerten Update-Fähigkeit, Netzwerk und Compliance und definieren
                gemeinsam einen KI-fähigen Raumstandard.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button asChild size="lg" className="btn-glow">
                  <Link to="/kontakt">
                    Kontakt aufnehmen
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="tel:+4921514179902">
                    <Phone className="mr-2 h-5 w-5" />
                    +49 2151 417 99 02
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default RatgeberKiReadiness;
