import { Link, Navigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Clock, Calendar, CheckCircle, Phone, User } from "lucide-react";
import { getRatgeberPostBySlug } from "@/data/ratgeberPosts";
import heroImage from "@/assets/ratgeber/raumbuchung-hero.jpg";

const criteria = [
  {
    title: "Kalender-Backend",
    text: "Arbeitet das System direkt auf den Raumpostfächern in Microsoft 365/Exchange oder auf Google-Workspace-Ressourcen? Eine zweite, parallele Buchungsdatenbank erzeugt dauerhaft Abweichungen.",
  },
  {
    title: "Bedienung am Raum",
    text: "Ad-hoc-Buchung, Verlängern und vorzeitiges Freigeben müssen am Panel ohne Anmeldung in wenigen Sekunden möglich sein – sonst wird es nicht genutzt.",
  },
  {
    title: "Belegungsdaten",
    text: "Auswertbare Daten zu Buchungen, No-Shows und tatsächlicher Nutzung sind die Grundlage, um Raumgrößen und Ausstattung zu planen statt zu raten.",
  },
  {
    title: "Netzwerk und Strom",
    text: "Panels werden in der Regel über PoE versorgt. Prüfen Sie früh, ob am Raum eine Datendose liegt und welches VLAN vorgesehen ist.",
  },
  {
    title: "Verwaltung im Betrieb",
    text: "Zentrale Konfiguration, Firmware-Updates und Monitoring über eine Managementkonsole – bei mehreren Standorten der entscheidende Punkt.",
  },
  {
    title: "Datenschutz",
    text: "Klären Sie vorab, welche personenbezogenen Daten (Organisator, Betreff, Sensordaten) angezeigt und gespeichert werden – und binden Sie Datenschutz und Mitbestimmung früh ein.",
  },
];

const RatgeberRaumbuchung = () => {
  const post = getRatgeberPostBySlug("raumbuchungssystem-konferenzraeume");

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
            <Breadcrumbs
              items={[{ label: "Ratgeber", href: "/ratgeber" }, { label: post.title }]}
            />

            <div className="flex items-center gap-3 mt-4 lg:mt-6 mb-4 flex-wrap">
              <Badge variant="secondary" className="text-xs">{post.category}</Badge>
              <span className="text-xs sm:text-sm text-muted-foreground flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" /> Lesezeit: ca. 7 Minuten
              </span>
              <span className="text-xs sm:text-sm text-muted-foreground flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" /> 10.09.2026
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
              alt="Raumbuchungspanel mit grüner Frei-Anzeige neben der Glastür eines Konferenzraums"
              width={1600}
              height={912}
              className="w-full rounded-lg mb-8 lg:mb-10"
            />

            <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">
              Belegte Räume, die leer stehen. Besprechungen, die im Flur beginnen, weil zwei Teams denselben
              Raum gebucht haben. Und eine Raumplanung, die niemand mit Zahlen belegen kann. Ein
              Raumbuchungssystem löst diese Alltagsprobleme – aber nur, wenn Kalender, Türpanel und
              Raumtechnik sauber zusammenspielen. Dieser Fachbeitrag zeigt, aus welchen Bausteinen ein
              Raumbuchungssystem besteht, worauf es bei der Integration in Microsoft 365 oder Google
              Workspace ankommt und welche Fehler in Rollouts regelmäßig Geld kosten.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 mt-10">
              Was ein Raumbuchungssystem konkret leistet
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
              Ein Raumbuchungssystem verbindet die Kalenderwelt Ihres Unternehmens mit dem physischen Raum.
              Der Kalender bleibt die führende Quelle, das Panel an der Tür macht den Status sichtbar und
              erlaubt Eingriffe vor Ort:
            </p>
            <Card className="mb-6 bg-primary/5 border-primary/20">
              <CardContent className="p-4 sm:p-6">
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /><span><strong>Status auf einen Blick:</strong> frei oder belegt, meist zusätzlich über eine farbige LED-Leiste aus einigen Metern Entfernung erkennbar.</span></li>
                  <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /><span><strong>Ad-hoc-Buchung:</strong> spontane Reservierung direkt am Panel, ohne Umweg über Laptop oder Handy.</span></li>
                  <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /><span><strong>Check-in und Auto-Release:</strong> Wird eine Buchung nicht bestätigt, gibt das System den Raum nach einer definierten Frist wieder frei.</span></li>
                  <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /><span><strong>Alternativvorschläge:</strong> Ist der Raum belegt, zeigen viele Systeme freie Räume in der Nähe an.</span></li>
                  <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /><span><strong>Auswertungen:</strong> Belegungsgrad, No-Show-Quote und typische Gruppengrößen als Basis für die Flächen- und Ausstattungsplanung.</span></li>
                </ul>
              </CardContent>
            </Card>

            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 mt-10">
              Die drei Bausteine: Kalender, Panel, Sensorik
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
              <strong className="text-foreground">1. Das Kalender-Backend.</strong> In den meisten Unternehmen
              ist das Microsoft 365 beziehungsweise Exchange mit Raumpostfächern oder Google Workspace mit
              Ressourcenkalendern. Wichtig ist, dass das Buchungssystem auf genau diesen Ressourcen arbeitet.
              Alles andere führt zu zwei Wahrheiten – und die im Kalender gewinnt am Ende immer.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
              <strong className="text-foreground">2. Das Panel an der Tür.</strong> Hier gibt es zwei Wege:
              plattformeigene Panels, die zur Kollaborationsplattform gehören (etwa Scheduling-Displays für
              Microsoft Teams oder Zoom), und herstellerunabhängige Raumbuchungspanels, die per API an den
              Kalender andocken. Plattformeigene Panels sind eng in die Meeting-Erfahrung integriert,
              unabhängige Panels sind flexibler, wenn mehrere Plattformen parallel im Einsatz sind.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed">
              <strong className="text-foreground">3. Sensorik und Auswertung.</strong> Belegungssensoren oder
              Personenzählung in der Raumtechnik zeigen, ob ein gebuchter Raum tatsächlich genutzt wird und mit
              wie vielen Personen. Erst diese Daten machen sichtbar, ob Sie zusätzliche Räume brauchen oder
              lediglich die vorhandenen besser bewirtschaften müssen.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 mt-10">
              Auswahlkriterien: sechs Punkte, die vor der Bestellung geklärt gehören
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {criteria.map((item, i) => (
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
              Raumbuchung ist ein IT-Projekt, kein Möbelstück
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
              Türpanels sind vernetzte Endgeräte. Sie brauchen eine Datendose am Raum, PoE-Ports am Switch,
              ein passendes VLAN, eine Update-Strategie und eine Konvention für Gerätenamen. Genau diese
              Punkte werden erfahrungsgemäß spät geklärt – und verzögern dann den Rollout, obwohl die Panels
              längst geliefert sind. Wir stimmen diese Anforderungen deshalb parallel zur{" "}
              <Link to="/konferenzraum-ausstattung" className="text-primary underline underline-offset-4">
                Konferenzraum-Ausstattung
              </Link>{" "}
              mit Ihrer IT ab, statt sie nachträglich zu reparieren.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed">
              Denken Sie außerdem an das Umfeld: Wegeleitung im Flur und Übersichtsanzeigen im Empfangsbereich
              beziehen ihre Daten aus demselben Kalender. Wer Raumbuchung und{" "}
              <Link to="/digital-signage" className="text-primary underline underline-offset-4">
                Digital Signage
              </Link>{" "}
              gemeinsam plant, spart eine zweite Datenschnittstelle.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 mt-10">
              Vier typische Fehler im Rollout
            </h2>
            <ul className="space-y-3 text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed list-disc pl-5">
              <li>
                <strong className="text-foreground">Panels ohne Regelwerk.</strong> Ohne Buchungsrichtlinie
                (maximale Dauer, Serientermine, Auto-Release-Frist) verschiebt die Technik das Problem nur.
              </li>
              <li>
                <strong className="text-foreground">Raumpostfächer unsauber gepflegt.</strong> Falsche
                Kapazitäten, veraltete Raumnamen und fehlende Ausstattungsmerkmale führen dazu, dass
                Mitarbeitende die Suche im Kalender umgehen.
              </li>
              <li>
                <strong className="text-foreground">Keine Kommunikation.</strong> Ein Panel, das niemand
                erklärt bekommt, wird ignoriert. Kurze Einweisungen und eine Ein-Seiten-Anleitung wirken mehr
                als jede Zusatzfunktion.
              </li>
              <li>
                <strong className="text-foreground">Kein Betriebskonzept.</strong> Firmware, Zertifikate und
                Störungen brauchen einen Verantwortlichen – intern oder über{" "}
                <Link to="/managed-services" className="text-primary underline underline-offset-4">
                  Managed Services
                </Link>
                .
              </li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 mt-10">
              Fazit
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed">
              Ein Raumbuchungssystem ist schnell gekauft und selten allein wirksam. Den Nutzen bringt die
              Kombination aus sauber gepflegten Raumressourcen, klaren Buchungsregeln, gut bedienbaren Panels
              und einem Betriebskonzept. Wer zusätzlich die Belegungsdaten auswertet, plant die nächste
              Ausbaustufe seiner{" "}
              <Link to="/loesungen/konferenzraeume" className="text-primary underline underline-offset-4">
                Konferenzräume
              </Link>{" "}
              mit Fakten statt Bauchgefühl.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 mt-10">
              Häufige Fragen zu Raumbuchungssystemen
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

            <div className="mt-10 pt-8 border-t border-border">
              <h2 className="text-lg sm:text-xl font-bold text-foreground mb-3">
                Raumbuchung für Ihre Standorte planen
              </h2>
              <p className="text-sm text-muted-foreground mb-6">
                Wir nehmen Ihre Räume und Kalenderstruktur auf, stimmen Netzwerk und Panels mit Ihrer IT ab und
                rollen standardisiert über alle Standorte aus.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button asChild size="lg" className="btn-glow">
                  <Link to="/projektanfrage">
                    Projekt anfragen
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

export default RatgeberRaumbuchung;
