import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";
import image from "@/assets/news/outdoor-led-wartung.jpg";
import { outdoorLedArticle as article } from "@/data/outdoorLedArticle";

export default function NewsOutdoorLed() {
  return <Layout>
    <SEOHead title={article.title} description={article.description} canonical={`/news/${article.slug}`} type="article" ogImage={article.image} keywords="Outdoor LED Wartung, LED Werbeanlage Service, LED Wand Reinigung, Wartungsvertrag LED" />
    <article className="section-container max-w-4xl py-10 lg:py-16">
      <Breadcrumbs items={[{ label: "News & Wissen", href: "/news" }, { label: "Outdoor-LED-Wartung" }]} />
      <p className="text-sm text-muted-foreground mt-6 mb-3"><time dateTime={article.date}>31. Oktober 2026</time> · {article.category} · {article.readTime} Lesezeit</p>
      <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 leading-tight">{article.title}</h1>
      <p className="text-lg text-muted-foreground mb-6">Bei einer Outdoor-LED-Werbeanlage müssen Bildausgabe, Belüftung, Stromversorgung und Steuerung zusammen funktionieren. Dieser Beitrag übersetzt unser Service-Whitepaper in konkrete Prüfschritte für Betreiber und eine klare Abgrenzung der Serviceleistungen.</p>
      <figure className="mb-8">
        <img src={image} alt="Illustration einer Outdoor-LED-Anlage mit Wartungszugang per Hubarbeitsbühne" width={1536} height={864} className="w-full aspect-video object-cover rounded-lg" />
        <figcaption className="mt-2 text-xs text-muted-foreground">KI-generierte Illustration; keine Kundenreferenz.</figcaption>
      </figure>
      <div className="space-y-10 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">1. Anlagenakte anlegen, bevor eine Störung auftritt</h2>
          <p>Erfassen Sie Wandfläche, Modulaufbau, Hersteller, Modell, Seriennummern, Controller, Firmwarestand und Servicezugang. Hinterlegen Sie Schaltzeiten, Helligkeitseinstellungen und Ansprechpartner für Stromversorgung, Netzwerk und Content-System. Sichern Sie die Konfiguration mit den vorgesehenen Herstellerwerkzeugen, sofern unterstützt.</p>
          <p className="mt-3">Für ein Angebot sind außerdem Montagehöhe, Zufahrt und Aufstellfläche für eine Hubarbeitsbühne wichtig. Ein Ersatzmodul muss zur Anlage passen; eine ähnliche Pixelteilung allein reicht als Kompatibilitätsnachweis nicht.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">2. Prüfliste für Frühjahr und Herbst</h2>
          <p className="mb-4">Unser Whitepaper sieht im Wartungsmodell zwei Vor-Ort-Termine pro Jahr vor. Das ist der beschriebene Leistungsumfang, kein universelles Herstellerintervall. Zusätzliche Kontrollen richten sich nach Modell, Standort und Umgebungsbelastung.</p>
          <ul className="list-disc pl-5 space-y-3">
            <li><strong className="text-foreground">Bild und Module:</strong> Testbilder nach Herstellervorgabe anzeigen. Dunkle Bereiche, abweichende Farben und intermittierende Fehler mit Foto und Position dokumentieren.</li>
            <li><strong className="text-foreground">Luftwege und Lüfter:</strong> Zugängliche Lüftungsöffnungen auf Blockaden prüfen. Auffällige Lüftergeräusche und verfügbare Temperaturmeldungen festhalten. Keine pauschalen Grenztemperaturen annehmen – das Modellhandbuch ist maßgeblich.</li>
            <li><strong className="text-foreground">Gehäuse und Zugang:</strong> Sichtbare Beschädigungen, Feuchtigkeitsspuren und beschädigte Kabel melden. Gehäuse nur durch qualifiziertes Personal und nach den Sicherheitsvorgaben öffnen lassen.</li>
            <li><strong className="text-foreground">Reinigung:</strong> Nur modellfreigegebene Verfahren und Mittel verwenden. Keine improvisierte Hochdruckreinigung, Lösungsmittel oder Sprays; Schutzart und Reinigungsfreigabe sind nicht dasselbe.</li>
            <li><strong className="text-foreground">Steuerung und Firmware:</strong> Version, Helligkeitsregelung, Zeitplan und Content-Zuspielung prüfen. Updates nur nach Kompatibilitätsprüfung und mit dokumentiertem Rückfallplan einspielen.</li>
            <li><strong className="text-foreground">Abschlussprotokoll:</strong> Fotos vor und nach der Wartung, Maßnahmen, ausgetauschte Teile und offene Punkte festhalten. Anschließend Bildausgabe und Steuerung prüfen.</li>
          </ul>
          <p className="mt-4 font-medium text-foreground">Elektrische Arbeiten, Arbeiten in der Höhe und Eingriffe in die Anlage gehören in qualifizierte Hände. Betreiberkontrollen ersetzen keine vorgeschriebenen Prüfungen.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">3. Störung eingrenzen statt mehrfach neu starten</h2>
          <ol className="list-decimal pl-5 space-y-3">
            <li><strong className="text-foreground">Umfang bestimmen:</strong> Ist die gesamte Wand dunkel, nur ein Bereich betroffen oder wird lediglich der falsche Inhalt angezeigt?</li>
            <li><strong className="text-foreground">Belege sichern:</strong> Zeitpunkt, Foto oder kurzes Video, Controller-Meldung und letzte Änderung notieren. Wenn verfügbar, ein Testbild mit dem normalen Inhalt vergleichen.</li>
            <li><strong className="text-foreground">Zuspielung prüfen:</strong> Im freigegebenen Bedienbereich Content-Player, Zeitplan und Verbindung kontrollieren. Ein schwarzes Bild beweist keinen Moduldefekt.</li>
            <li><strong className="text-foreground">Gezielt eskalieren:</strong> Anlagen-ID und Befund an den Service geben. Bei Geruch, Rauch oder sichtbaren elektrischen Schäden nicht weiter testen; den betrieblichen Sicherheits- und Abschaltprozess anwenden lassen.</li>
          </ol>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">4. Abrufservice oder Wartungsvertrag?</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div><h3 className="text-lg font-semibold text-foreground mb-2">Abrufunterstützung</h3><p>Das Whitepaper beschreibt Unterstützung ohne Vertragsbindung nach freier Kapazität, in der Regel innerhalb von drei bis fünf Werktagen. Einsätze, Anfahrt, Telefon-Support, Teilebeschaffung und Bühneneinsatz werden nach dem beschriebenen Aufwand abgerechnet. Daraus entsteht keine garantierte Verfügbarkeit.</p></div>
            <div><h3 className="text-lg font-semibold text-foreground mb-2">Wartungsvertrag</h3><p>Beschrieben sind ein Onboarding-Audit, zwei Inspektions- und Reinigungstermine einschließlich Bühne, priorisierte Ersatzmodul- und Lüfterbereitstellung sowie ein fester Ansprechpartner. Telefon- und Remote-Support ist im Whitepaper montags bis freitags von 8 bis 17 Uhr vorgesehen.</p></div>
          </div>
          <p className="mt-5">Für das LED-Wartungsmodell nennt das Whitepaper werktags 24 Stunden Reaktionszeit bei Totalausfall und 48 Stunden bei Teilausfall. Das sind <strong className="text-foreground">keine garantierten Reparatur- oder Wiederherstellungszeiten</strong>. Ersatzteilverfügbarkeit, Zugang und Fehlerbild beeinflussen die Behebung. Diese LED-Konditionen gelten nicht automatisch für andere Managed Services.</p>
          <p className="mt-3">Lassen Sie vor Vertragsabschluss Servicezeiten, Beginn der Reaktionsfrist, Prioritäten, zusätzliche Reparaturen und Ersatzteile schriftlich abgrenzen. Das Whitepaper nennt zwölf Monate Laufzeit, Verlängerungen um zwölf Monate und drei Monate Kündigungsfrist; verbindlich ist Ihr vereinbartes Angebot.</p>
          <p className="mt-3 text-sm">Hinweis zur Preisangabe: Einstiegspreis und Preisstaffel im beigefügten Whitepaper sind nicht durchgehend konsistent. Deshalb übernehmen wir hier keine pauschale Preisempfehlung und keine unbelegte Marktwert- oder Ersparnisrechnung. Fragen Sie ein konkretes Angebot für Wandfläche und Anlagenzahl an.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">5. AV-Service an Ihre IT anbinden</h2>
          <p>SLT Technology Group ist ITIL 4 zertifiziert und richtet die Serviceprozesse daran aus – besonders dort, wo Medientechnik mit Netzwerk, Geräteverwaltung und IT-Sicherheit zusammenarbeitet. Praktisch heißt das: Störungen als Incidents dokumentieren, wiederkehrende Ursachen im Problem-Management untersuchen und Änderungen mit Freigabe, Wartungsfenster und Rückfallplan durchführen.</p>
          <p className="mt-3">Legen Sie gemeinsam mit Ihrer IT fest, wer Fernzugriffe freigibt, Konten verwaltet, Firmwareänderungen genehmigt und bei Netzwerkproblemen übernimmt. Lesen Sie dazu mehr über <Link to="/managed-services" className="text-primary underline">Managed Services für Medientechnik</Link> und <Link to="/service-wartung" className="text-primary underline">Service &amp; Wartung</Link>.</p>
        </section>
        <section className="border-t border-border pt-6">
          <h2 className="text-2xl font-bold text-foreground mb-4">Whitepaper und Quellen</h2>
          <p className="mb-4">Leistungsumfang und LED-Servicekonditionen stammen aus dem beigefügten Service- und Wartungskonzept der SLT Technology Group. Technische Hinweise sind modellabhängig; maßgeblich bleiben die Anleitung und Freigaben des Herstellers.</p>
          <Button asChild variant="outline" className="h-auto whitespace-normal"><a href="/downloads/slt-outdoor-led-service-whitepaper-2026.pdf" download><Download className="mr-2 h-4 w-4 shrink-0" />Service-Whitepaper (PDF)</a></Button>
          <ul className="mt-5 list-disc pl-5 space-y-2 text-sm">
            <li><a href="https://www.absen.com/wp-content/uploads/2025/06/K-V3-Series-User-Manual-V202407-K-V3-Series-User-Manual-V202407.pdf" target="_blank" rel="noopener noreferrer" className="text-primary underline">Absen K V3: modellbezogene Sicherheit, Wartung und Fehlerdiagnose ↗</a></li>
            <li><a href="https://www.samsung.com/us/business/support/owners/product/oh-f-series-digital-signage-oh85f/" target="_blank" rel="noopener noreferrer" className="text-primary underline">Samsung OH85F: Handbücher für Outdoor-Digital-Signage ↗</a> – LCD-Produkt, keine allgemeine LED-Wartungsanweisung.</li>
          </ul>
        </section>
        <Button asChild className="h-auto whitespace-normal"><Link to="/projektanfrage">Anlagenprüfung anfragen <ArrowRight className="ml-2 h-4 w-4 shrink-0" /></Link></Button>
      </div>
    </article>
  </Layout>;
}