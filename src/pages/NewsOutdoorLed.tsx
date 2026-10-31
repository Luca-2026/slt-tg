import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { LedService } from "@/components/services/LedService";
import { outdoorLedArticle as article } from "@/data/outdoorLedArticle";

export default function NewsOutdoorLed() {
  return <Layout>
    <SEOHead title={article.title} description={article.description} canonical={`/news/${article.slug}`} type="article" ogImage={article.image} keywords="Outdoor LED Wartung, LED Werbeanlage Service, LED Wand Reinigung, Wartungsvertrag LED" />
    <article className="section-container max-w-4xl py-10 lg:py-16">
      <Breadcrumbs items={[{ label: "News & Wissen", href: "/news" }, { label: "Outdoor-LED-Wartung" }]} />
      <p className="text-sm text-muted-foreground mt-6 mb-3"><time dateTime={article.date}>31. Oktober 2026</time> · {article.category} · {article.readTime} Lesezeit</p>
      <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 leading-tight">{article.title}</h1>
      <p className="text-lg text-muted-foreground mb-6">Bei einer Outdoor-LED-Werbetafel müssen Bildausgabe, Belüftung, Stromversorgung und Steuerung zusammen funktionieren. Hier finden Betreiber konkrete Prüfschritte, eine Anleitung zur Störungsmeldung und die Abgrenzung von Wartung und Monitoring – mit realen Einblicken bei unserem Kunden Knauber in Bonn.</p>
      <figure className="mb-8">
        <img src={article.image} alt="Outdoor-LED-Anlage bei Knauber in Bonn mit Höhenarbeitsbühne von SLT Rental am rückseitigen Wartungszugang" width={1600} height={1200} fetchPriority="high" className="w-full h-auto rounded-lg" />
        <figcaption className="mt-2 text-xs text-muted-foreground">Reale Kundenreferenz: Outdoor-LED-Anlage bei Knauber in Bonn, mit Höhenarbeitsbühne von SLT Rental.</figcaption>
      </figure>
      <div className="space-y-10 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">1. Anlagenakte anlegen, bevor eine Störung auftritt</h2>
          <p>Erfassen Sie Wandfläche, Modulaufbau, Hersteller, Modell, Seriennummern, Controller, Firmwarestand und Servicezugang. Hinterlegen Sie Schaltzeiten, Helligkeitseinstellungen und Ansprechpartner für Stromversorgung, Netzwerk und Content-System. Sichern Sie die Konfiguration mit den vorgesehenen Herstellerwerkzeugen, sofern unterstützt.</p>
          <p className="mt-3">Für ein Angebot sind außerdem Montagehöhe, Zufahrt und Aufstellfläche für eine Hubarbeitsbühne wichtig. Ein Ersatzmodul muss zur Anlage passen; eine ähnliche Pixelteilung allein reicht als Kompatibilitätsnachweis nicht.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">2. Prüfliste für Frühjahr und Herbst</h2>
          <p className="mb-4">Unser LED-Wartungsmodell sieht zwei Vor-Ort-Termine pro Jahr vor: im Frühjahr und im Herbst. Das ist der beschriebene Leistungsumfang, kein universelles Herstellerintervall. Zusätzliche Kontrollen richten sich nach Modell, Standort und Umgebungsbelastung.</p>
          <ul className="list-disc pl-5 space-y-3">
            <li><strong className="text-foreground">Bild und Module:</strong> Testbilder nach Herstellervorgabe anzeigen. Dunkle Bereiche, abweichende Farben und intermittierende Fehler mit Foto und Position dokumentieren.</li>
            <li><strong className="text-foreground">Luftwege und Lüfter:</strong> Zugängliche Lüftungsöffnungen auf Blockaden prüfen. Auffällige Lüftergeräusche und verfügbare Temperaturmeldungen festhalten. Keine pauschalen Grenztemperaturen annehmen – das Modellhandbuch ist maßgeblich.</li>
            <li><strong className="text-foreground">Gehäuse und Zugang:</strong> Sichtbare Beschädigungen, Feuchtigkeitsspuren und beschädigte Kabel melden. Gehäuse nur durch qualifiziertes Personal und nach den Sicherheitsvorgaben öffnen lassen.</li>
            <li><strong className="text-foreground">Reinigung:</strong> Nur modellfreigegebene Verfahren und Mittel verwenden. Keine improvisierte Hochdruckreinigung, Lösungsmittel oder Sprays; Schutzart und Reinigungsfreigabe sind nicht dasselbe.</li>
            <li><strong className="text-foreground">Steuerung und Firmware:</strong> Version, Helligkeitsregelung, Zeitplan und Content-Zuspielung prüfen. Updates nur nach Kompatibilitätsprüfung und mit dokumentiertem Rückfallplan einspielen.</li>
            <li><strong className="text-foreground">Abschlussprotokoll:</strong> Fotos vor und nach der Wartung, Maßnahmen, ausgetauschte Teile und offene Punkte festhalten. Anschließend Bildausgabe und Steuerung prüfen.</li>
          </ul>
          <p className="mt-4 font-medium text-foreground">Elektrische Arbeiten, Arbeiten in der Höhe und Eingriffe in die Anlage gehören in qualifizierte Hände. Betreiberkontrollen ersetzen keine vorgeschriebenen Prüfungen.</p>
          <figure className="mt-6">
            <img src="/assets/projects/knauber/knauber-led-servicezugang.webp" alt="Geöffnete rückseitige Serviceklappen der Knauber-LED-Anlage mit sichtbaren Lüftern, Netzteilen und Verkabelung" width={1200} height={1600} loading="lazy" className="w-full max-w-lg h-auto rounded-lg" />
            <figcaption className="mt-2 text-xs">Realer Servicezugang bei Knauber: Lüfter, Netzteile und Verkabelung sind über rückseitige Klappen zugänglich. Das Foto belegt keinen konkreten Defekt.</figcaption>
          </figure>
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
            <div><h3 className="text-lg font-semibold text-foreground mb-2">Abrufunterstützung</h3><p>Unterstützung ohne Vertragsbindung erfolgt nach freier Kapazität, in der Regel innerhalb von drei bis fünf Werktagen. Einsätze, Anfahrt, Telefon-Support, Teilebeschaffung und Bühneneinsatz werden nach Aufwand abgerechnet. Daraus entsteht keine garantierte Verfügbarkeit.</p></div>
            <div><h3 className="text-lg font-semibold text-foreground mb-2">Wartungsvertrag</h3><p>Das LED-Servicekonzept umfasst ein kostenfreies Onboarding-Audit, zwei Inspektions- und Reinigungstermine einschließlich Bühne, priorisierte Ersatzmodul- und Lüfterbereitstellung sowie einen festen Ansprechpartner. Unbegrenzter Telefon- und Remote-Support ist montags bis freitags von 8 bis 17 Uhr vorgesehen. Das macht Ersatzteile oder zusätzliche Reparaturen nicht automatisch kostenfrei.</p></div>
          </div>
          <p className="mt-5">Das LED-Wartungsmodell sieht werktags 24 Stunden Reaktionszeit bei Totalausfall und 48 Stunden bei Teilausfall vor. Das sind <strong className="text-foreground">keine garantierten Reparatur- oder Wiederherstellungszeiten</strong>. Ersatzteilverfügbarkeit, Zugang und Fehlerbild beeinflussen die Behebung. Diese LED-Konditionen gelten nicht automatisch für andere Managed Services.</p>
          <p className="mt-3">Lassen Sie vor Vertragsabschluss Servicezeiten, Beginn der Reaktionsfrist, Prioritäten, zusätzliche Reparaturen und Ersatzteile schriftlich abgrenzen. Das Modell sieht zwölf Monate Laufzeit, Verlängerungen um zwölf Monate und drei Monate Kündigungsfrist vor; verbindlich ist Ihr vereinbartes Angebot. Fragen Sie ein individuelles Angebot für Wandfläche, Anlagenzahl und Zugang an.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">5. NovaStar VNNOX EU Cloud: Monitoring und Fernwartung</h2>
          <p>Für kontinuierliches Monitoring und Fernwartung migrieren wir geeignete LED-Wände in die NovaStar VNNOX EU Cloud. Für die Überwachung nutzen wir VNNOX Care; Content-Verteilung und Wiedergabe sind davon zu unterscheiden. Welche Statusdaten und Fernwartungsfunktionen verfügbar sind, hängt von Controller, Empfangskarten, Firmware und Konfiguration ab.</p>
          <ol className="mt-4 list-decimal pl-5 space-y-3">
            <li><strong className="text-foreground">Kompatibilität prüfen:</strong> Controller und Empfangskarten inventarisieren, unterstützte Funktionen und Firmware anhand der NovaStar-Unterlagen prüfen.</li>
            <li><strong className="text-foreground">Zugriff abstimmen:</strong> Netzwerkverbindung, EU-Portal, Konten und Berechtigungen gemeinsam mit der IT festlegen. Keine Konten oder Geräteschnittstellen unkontrolliert öffentlich freigeben.</li>
            <li><strong className="text-foreground">Monitoring einrichten:</strong> Unterstützte Gerätestatus-, Temperatur- und Spannungsdaten sowie Fehlermeldungen erfassen. Alarmempfänger und Eskalation festlegen, statt lediglich ein Dashboard anzulegen.</li>
            <li><strong className="text-foreground">Übergabe testen:</strong> Online-/Offline-Erkennung und Alarmwege prüfen, Konfiguration dokumentieren und freigegebene Fernwartungsmaßnahmen festlegen.</li>
          </ol>
          <p className="mt-4">Kontinuierliches technisches Monitoring ist keine Zusage für rund um die Uhr besetzten Support. Fernwartung ersetzt weder die Reinigung noch den mechanischen oder elektrischen Austausch vor Ort. Bei Knauber haben wir die Anlagen vollständig in die NovaStar VNNOX EU Cloud migriert.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">6. Knauber in Bonn: Wartung mit direktem Höhenzugang</h2>
          <a href="https://www.knauber.de/" target="_blank" rel="noopener noreferrer" className="inline-block mb-4 text-primary"><img src="/assets/projects/knauber/knauber-logo.webp" alt="Knauber Logo" width={1600} height={432} loading="lazy" className="w-48 h-auto mb-2" />Carl Knauber Holding GmbH &amp; Co. KG ↗</a>
          <p>Unser Kunde Carl Knauber Holding GmbH &amp; Co. KG aus Bonn hat die Wartung seiner LED-Outdoor-Anlagen vertrauensvoll in unsere Hände gelegt. Als erste Maßnahmen haben wir die Lüfter und Netzteile getauscht und einen anlagenspezifischen Ersatzteilpool aufgebaut, damit benötigte Komponenten schnellstmöglich bereitgestellt werden können. Die Migration der Anlagen in die NovaStar VNNOX EU Cloud ist abgeschlossen. Monitoring und Fernwartung ergänzen seitdem die Arbeiten vor Ort. Die Fotos zeigen die tatsächlichen Kundenanlagen.</p>
          <p className="mt-3">Über unseren Partnerbetrieb beziehungsweise das verbundene Unternehmen <a href="https://www.slt-rental.de" target="_blank" rel="noopener noreferrer" className="text-primary underline">SLT Rental ↗</a> haben wir direkten Zugriff auf Höhenarbeitsbühnen. So können wir Technikeinsatz und Höhenzugang gemeinsam koordinieren und Kunden flexibel sowie kurzfristig bedienen. Dieser organisatorische Vorteil reduziert zusätzliche Abstimmung mit einem separat zu beauftragenden Bühnenvermieter; konkrete Verfügbarkeit, Zufahrt, Tragfähigkeit und sichere Aufstellung müssen vor jedem Einsatz geprüft werden.</p>
          <figure className="mt-6">
            <img src="/assets/projects/knauber/knauber-led-werbetafel-bonn.webp" alt="Outdoor-LED-Werbetafel am Knauber-Standort in Bonn mit dem Knauber-Logo auf der Bildfläche" width={1200} height={1600} loading="lazy" className="w-full max-w-lg h-auto rounded-lg" />
            <figcaption className="mt-2 text-xs">LED-Werbetafel bei Knauber in Bonn. Hersteller, Pixelabstand, Flächengröße und gemessene Ausfallzeiten sind nicht dokumentiert und werden nicht ergänzt.</figcaption>
          </figure>
          <p className="mt-4"><Link to="/projekte/knauber-outdoor-led-wartung-bonn" className="text-primary underline">Zur Projektreferenz: Knauber – Outdoor-LED-Wartung in Bonn</Link></p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">7. AV-Service an Ihre IT anbinden</h2>
          <p>SLT Technology Group ist ITIL 4 zertifiziert und richtet die Serviceprozesse daran aus – besonders dort, wo Medientechnik mit Netzwerk, Geräteverwaltung und IT-Sicherheit zusammenarbeitet. Praktisch heißt das: Störungen als Incidents dokumentieren, wiederkehrende Ursachen im Problem-Management untersuchen und Änderungen mit Freigabe, Wartungsfenster und Rückfallplan durchführen.</p>
          <p className="mt-3">Legen Sie gemeinsam mit Ihrer IT fest, wer Fernzugriffe freigibt, Konten verwaltet, Firmwareänderungen genehmigt und bei Netzwerkproblemen übernimmt. Lesen Sie dazu mehr über <Link to="/managed-services" className="text-primary underline">Managed Services für Medientechnik</Link> mit den <Link to="/managed-services#service-modelle" className="text-primary underline">CARE-Service-Modellen</Link>.</p>
        </section>
        <section className="border-t border-border pt-6">
          <h2 className="text-2xl font-bold text-foreground mb-4">Fachquellen und Leistungsabgrenzung</h2>
          <p className="mb-4">Die LED-Servicekonditionen basieren auf dem realen Service- und Wartungskonzept der SLT Technology Group, Stand Mai 2026. Die Prüfschritte sind ergänzende, modellabhängige Fachhinweise; maßgeblich bleiben Herstellerfreigaben und Ihr vereinbarter Leistungsumfang.</p>
          <ul className="mt-5 list-disc pl-5 space-y-2 text-sm">
            <li><a href="https://www.absen.com/wp-content/uploads/2025/06/K-V3-Series-User-Manual-V202407-K-V3-Series-User-Manual-V202407.pdf" target="_blank" rel="noopener noreferrer" className="text-primary underline">Absen K V3: modellbezogene Sicherheit, Wartung und Fehlerdiagnose ↗</a></li>
            <li><a href="https://www.novastar.tech/products/nova-cloud/vnnox-care-3/" target="_blank" rel="noopener noreferrer" className="text-primary underline">NovaStar VNNOX Care: Monitoring und Wartungsfunktionen ↗</a></li>
            <li><a href="https://monitor-eu.vnnox.com/" target="_blank" rel="noopener noreferrer" className="text-primary underline">VNNOX Care: EU-Monitoringportal ↗</a></li>
            <li><a href="https://www.samsung.com/us/business/support/owners/product/oh-f-series-digital-signage-oh85f/" target="_blank" rel="noopener noreferrer" className="text-primary underline">Samsung OH85F: Handbücher für Outdoor-Digital-Signage ↗</a> – LCD-Produkt, keine allgemeine LED-Wartungsanweisung.</li>
          </ul>
        </section>
        <Button asChild className="h-auto whitespace-normal"><Link to="/projektanfrage">Anlagenprüfung anfragen <ArrowRight className="ml-2 h-4 w-4 shrink-0" /></Link></Button>
      </div>
    </article>
    <LedService />
  </Layout>;
}