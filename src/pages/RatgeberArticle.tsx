import { useParams, Link, Navigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Clock, BookOpen, CheckCircle } from "lucide-react";

/* =========================================================
   Ratgeber-Artikel – basierend auf Recherche (Stand März 2026)
   Quellen: Yealink, Heise IT-Kenner, Insight Visual, Crunchy Tech,
   Archie App, Bechtle, TrustRadius, Gartner Peer Insights
   ========================================================= */

interface GuideData {
  slug: string;
  title: string;
  metaDescription: string;
  keywords: string;
  readTime: string;
  category: string;
  content: React.ReactNode;
}

const guides: Record<string, GuideData> = {
  "konferenztechnik-raumgroesse": {
    slug: "konferenztechnik-raumgroesse",
    title: "Welche Konferenztechnik für welche Raumgröße?",
    metaDescription: "Vom Huddle Space bis zum Boardroom: Welche AV-Ausstattung für welchen Raumtyp sinnvoll ist – mit konkreten Empfehlungen für Displays, Audio und Kameras.",
    keywords: "Konferenztechnik Raumgröße, Huddle Space Ausstattung, Boardroom Technik, Konferenzraum Planung, Meetingraum Technik",
    readTime: "8 Min.",
    category: "Planung",
    content: (
      <>
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          Nicht jeder Konferenzraum braucht die gleiche Technik. Ein Huddle Space für vier Personen hat andere 
          Anforderungen als ein Boardroom für 20 Teilnehmer. Dieser Ratgeber zeigt, welche Ausstattung für welche 
          Raumgröße sinnvoll ist – herstellerneutral und praxisorientiert.
        </p>

        <h2 className="text-2xl font-bold text-foreground mb-4 mt-12">Huddle Space (2–6 Personen)</h2>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          Huddle Spaces sind kompakte Räume für spontane Abstimmungen und kurze Meetings. Sie bieten typischerweise 
          Platz für zwei bis sechs Personen und zeichnen sich durch eine einfache, schnell nutzbare Technik aus.
        </p>
        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="p-6">
            <h3 className="font-semibold text-foreground mb-3">Empfohlene Ausstattung</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> <strong>Display:</strong> 1× Bildschirm (55–65 Zoll) oder interaktives Touch-Display</li>
              <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> <strong>Kamera & Audio:</strong> All-in-One-Videobar mit integriertem Mikrofon, Lautsprecher und Kamera (z. B. Poly Studio, Jabra PanaCast, Yealink MeetingBar A10/A20)</li>
              <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> <strong>Steuerung:</strong> Touch-Panel oder BYOD-Lösung (Laptop + drahtlose Präsentation)</li>
              <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> <strong>Netzwerk:</strong> PoE-Anschluss für die Videobar, stabiles WLAN für BYOD</li>
            </ul>
          </CardContent>
        </Card>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Der Vorteil von All-in-One-Videobars: Sie reduzieren Kabelchaos auf ein Minimum. Ein einzelnes Gerät ersetzt 
          separate Kamera, Mikrofon und Lautsprecher. Moderne Modelle bieten KI-gestützte Funktionen wie 
          Rauschunterdrückung, automatisches Framing und Hintergrundunschärfe.
        </p>

        <h2 className="text-2xl font-bold text-foreground mb-4 mt-12">Mittlerer Meetingraum (6–12 Personen)</h2>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          Standard-Meetingräume für reguläre Team-Meetings und Kundenpräsentationen. Hier wächst die Komplexität: 
          Separate Komponenten liefern bessere Ergebnisse als All-in-One-Lösungen.
        </p>
        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="p-6">
            <h3 className="font-semibold text-foreground mb-3">Empfohlene Ausstattung</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> <strong>Displays:</strong> 1–2× professionelle Displays (65–86 Zoll), optional Dual-Screen für Inhalt + Videokonferenz</li>
              <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> <strong>Kamera:</strong> PTZ-Kamera oder KI-gestützte Kamera mit Sprecherverfolgung (z. B. Huddly L1, AVer CAM570)</li>
              <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> <strong>Audio:</strong> Dedizierte Deckenmikrofone oder Tischmikrofone + externe Lautsprecher</li>
              <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> <strong>Steuerung:</strong> Touch-Panel (z. B. Crestron TSW, Yealink RoomPanel) für One-Touch-Join</li>
              <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> <strong>Netzwerk:</strong> Kabelgebundene Anbindung (Cat6a), PoE für Peripheriegeräte</li>
            </ul>
          </CardContent>
        </Card>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Bei mittleren Räumen ist die Audio-Qualität entscheidend: Deckenmikrofone (z. B. Shure MXA920, Sennheiser 
          TeamConnect Ceiling) erfassen alle Sprecher gleichmäßig – unabhängig von der Sitzposition. Separate 
          Lautsprecher sorgen für klare Wiedergabe auch am Ende des Tisches.
        </p>

        <h2 className="text-2xl font-bold text-foreground mb-4 mt-12">Großer Konferenzraum (12–20 Personen)</h2>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          Größere Räume für Abteilungsmeetings, Schulungen und Workshops. Hier werden professionelle 
          AV-Komponenten mit zentraler Mediensteuerung kombiniert.
        </p>
        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="p-6">
            <h3 className="font-semibold text-foreground mb-3">Empfohlene Ausstattung</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> <strong>Displays:</strong> 2× große Displays (75–86 Zoll) oder LED-Wall für besonders große Räume</li>
              <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> <strong>Kamera:</strong> PTZ-Kamera mit 4K-Auflösung und optischem Zoom (z. B. AVer CAM570, Huddly L1) oder mehrere Kameras</li>
              <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> <strong>Audio:</strong> Deckenmikrofone + DSP-Audioprozessor (z. B. Q-Sys, Biamp) für professionelle Klangverteilung</li>
              <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> <strong>Steuerung:</strong> Zentrale Mediensteuerung (z. B. Crestron, Q-Sys) mit Raumszenarien</li>
              <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> <strong>Netzwerk:</strong> Dediziertes AV-VLAN, PoE+ Switches, Quality-of-Service</li>
            </ul>
          </CardContent>
        </Card>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Je größer der Raum, desto wichtiger wird die Audio-Qualität. Ein DSP-Audioprozessor sorgt für 
          akustische Echounterdrückung (AEC), automatische Mikrofonmischung und gleichmäßige Lautsprecherverteilung. 
          Ohne professionelle Audiotechnik entstehen typische Probleme wie Echo, Rückkopplung und unverständliche 
          Remote-Teilnehmer.
        </p>

        <h2 className="text-2xl font-bold text-foreground mb-4 mt-12">Boardroom (20+ Personen)</h2>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          Der repräsentative Konferenzraum für Vorstandssitzungen, Kundenbesuche und wichtige Präsentationen. 
          Hier zählt nicht nur Funktionalität, sondern auch Ästhetik und Bedienkomfort.
        </p>
        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="p-6">
            <h3 className="font-semibold text-foreground mb-3">Empfohlene Ausstattung</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> <strong>Displays:</strong> LED-Wall oder mehrere große Displays, optional mit Wireless-Präsentation</li>
              <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> <strong>Kamera:</strong> Multiple KI-Kameras oder steuerbare PTZ-Kameras mit 4K und Sprecherverfolgung</li>
              <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> <strong>Audio:</strong> Deckenmikrofon-Array + DSP + verteilte Lautsprecher (ggf. mit Akustikberatung)</li>
              <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> <strong>Steuerung:</strong> Voll integrierte Mediensteuerung mit Touch-Panel, Raumautomation (Licht, Jalousien, Szenarien)</li>
              <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> <strong>Extras:</strong> Drahtlose Präsentation (z. B. Barco ClickShare), Raumbuchungssystem, Digital Signage am Eingang</li>
            </ul>
          </CardContent>
        </Card>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Im Boardroom sollte die Technik unsichtbar funktionieren. Per Knopfdruck startet ein vordefiniertes Szenario: 
          Displays fahren hoch, Licht dimmt, Jalousien schließen, die Videokonferenz startet. Für die Nutzer bedeutet 
          das: kein technisches Vorwissen nötig, kein IT-Support beim Meeting-Start.
        </p>

        <h2 className="text-2xl font-bold text-foreground mb-4 mt-12">Zusammenfassung: Ausstattung nach Raumtyp</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-foreground">Raumtyp</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Personen</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Display</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Audio</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Kamera</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium text-foreground">Huddle Space</td>
                <td className="py-3 px-4">2–6</td>
                <td className="py-3 px-4">1× 55–65"</td>
                <td className="py-3 px-4">All-in-One Videobar</td>
                <td className="py-3 px-4">In Videobar integriert</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium text-foreground">Meetingraum</td>
                <td className="py-3 px-4">6–12</td>
                <td className="py-3 px-4">1–2× 65–86"</td>
                <td className="py-3 px-4">Deckenmikrofon + Lautsprecher</td>
                <td className="py-3 px-4">PTZ oder KI-Kamera</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium text-foreground">Konferenzraum</td>
                <td className="py-3 px-4">12–20</td>
                <td className="py-3 px-4">2× 75–86" oder LED</td>
                <td className="py-3 px-4">Deckenmikrofone + DSP</td>
                <td className="py-3 px-4">PTZ 4K + Zoom</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-foreground">Boardroom</td>
                <td className="py-3 px-4">20+</td>
                <td className="py-3 px-4">LED-Wall / Multi-Display</td>
                <td className="py-3 px-4">Mikrofon-Array + DSP + verteilte Lautsprecher</td>
                <td className="py-3 px-4">Multiple Kameras</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Card className="bg-accent/10 border-accent/20 mb-8">
          <CardContent className="p-6">
            <h3 className="font-semibold text-foreground mb-2">💡 Praxis-Tipp</h3>
            <p className="text-sm text-muted-foreground">
              Planen Sie nicht nur den Ist-Zustand: Wählen Sie Technik, die mit Ihren Anforderungen wachsen kann. 
              Modulare Systeme (z. B. erweiterbare Mikrofonzonen, zusätzliche Displays) vermeiden kostspielige 
              Neuanschaffungen bei veränderten Raumnutzungen. Lassen Sie außerdem bei der Verkabelung 
              Reserve-Leitungen verlegen – nachträgliches Nachrüsten ist deutlich teurer.
            </p>
          </CardContent>
        </Card>
      </>
    ),
  },

  "teams-rooms-vs-zoom-rooms": {
    slug: "teams-rooms-vs-zoom-rooms",
    title: "Microsoft Teams Rooms vs. Zoom Rooms",
    metaDescription: "Neutraler Vergleich von Microsoft Teams Rooms und Zoom Rooms: Funktionen, Lizenzkosten, Ökosystem und Hardware-Kompatibilität.",
    keywords: "Teams Rooms vs Zoom Rooms, Microsoft Teams Rooms, Zoom Rooms Vergleich, Videokonferenz Plattform, Meeting Room System",
    readTime: "6 Min.",
    category: "Plattformen",
    content: (
      <>
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          Microsoft Teams Rooms und Zoom Rooms sind die beiden führenden Plattformen für dedizierte 
          Videokonferenzraumsysteme. Beide verwandeln physische Meetingräume in professionelle Konferenzräume 
          mit One-Touch-Join, automatischem Framing und Content-Sharing. Die richtige Wahl hängt von Ihrer 
          bestehenden IT-Infrastruktur ab.
        </p>

        <h2 className="text-2xl font-bold text-foreground mb-4 mt-12">Das Wichtigste vorab</h2>
        <Card className="mb-8 bg-accent/10 border-accent/20">
          <CardContent className="p-6">
            <p className="text-muted-foreground text-sm">
              <strong className="text-foreground">Die Kurzfassung:</strong> Nutzt Ihr Unternehmen Microsoft 365 
              (Outlook, OneDrive, SharePoint), ist Microsoft Teams Rooms die naheliegende Wahl – alles greift nahtlos 
              ineinander. Setzt Ihr Unternehmen primär auf Zoom für Meetings und Webinare, bietet Zoom Rooms das 
              bessere Nutzererlebnis. Bei einem Mischbetrieb ist eine herstellerneutrale Beratung empfehlenswert.
            </p>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold text-foreground mb-4 mt-12">Ökosystem & Integration</h2>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          Der größte Unterschied liegt nicht in der Hardware, sondern im Software-Ökosystem:
        </p>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-6">
              <h3 className="font-semibold text-foreground mb-3">Microsoft Teams Rooms</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> Nahtlose Integration mit Microsoft 365 (Outlook-Kalender, OneDrive, SharePoint, Planner)</li>
                <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> Automatische Raumbuchung über Outlook</li>
                <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> Microsoft Copilot für Meeting-Zusammenfassungen und Aufgaben</li>
                <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> Erweiterte Sicherheits- und Compliance-Funktionen</li>
                <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> Direkte Anrufe an SIP/H.323-Systeme (mit Pro-Lizenz)</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-6">
              <h3 className="font-semibold text-foreground mb-3">Zoom Rooms</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> Integration mit Drittanbieter-Tools: Slack, Google Workspace, Salesforce</li>
                <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> Kiosk-Modus für Empfangsbereiche und öffentliche Displays</li>
                <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> Integriertes Digital Signage (in der Lizenz enthalten)</li>
                <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> Zoom Webinar-Integration für größere Events</li>
                <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> Plattformübergreifende Interoperabilität</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-2xl font-bold text-foreground mb-4 mt-12">Hardware-Kompatibilität</h2>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          Nicht jede Hardware funktioniert mit jeder Plattform. Viele Hersteller bieten plattformspezifische 
          Versionen (SKUs) ihrer Geräte an:
        </p>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-foreground">Hersteller</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Teams Rooms</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Zoom Rooms</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Hinweis</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium text-foreground">Logitech</td>
                <td className="py-3 px-4">✅ Zertifiziert</td>
                <td className="py-3 px-4">✅ Zertifiziert</td>
                <td className="py-3 px-4">Breite Kompatibilität für beide Plattformen</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium text-foreground">Poly (HP)</td>
                <td className="py-3 px-4">✅ Zertifiziert</td>
                <td className="py-3 px-4">✅ Zertifiziert</td>
                <td className="py-3 px-4">Einige Modelle plattformspezifisch</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium text-foreground">Yealink</td>
                <td className="py-3 px-4">✅ Zertifiziert</td>
                <td className="py-3 px-4">✅ Zertifiziert</td>
                <td className="py-3 px-4">Separate Kits für Teams und Zoom</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium text-foreground">Crestron</td>
                <td className="py-3 px-4">✅ Zertifiziert</td>
                <td className="py-3 px-4">✅ Zertifiziert</td>
                <td className="py-3 px-4">Ideal für größere und automatisierte Räume</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium text-foreground">Neat</td>
                <td className="py-3 px-4">✅ Zertifiziert</td>
                <td className="py-3 px-4">✅ Zertifiziert</td>
                <td className="py-3 px-4">Ursprünglich Zoom-first, jetzt auch Teams-zertifiziert</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-foreground">DTEN</td>
                <td className="py-3 px-4">✅ Zertifiziert</td>
                <td className="py-3 px-4">✅ Zertifiziert</td>
                <td className="py-3 px-4">Zoom-nativ, Teams-Zertifizierung vorhanden</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-foreground mb-4 mt-12">Lizenzkosten im Vergleich</h2>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          Beide Plattformen erfordern eine monatliche Lizenz pro Raum (Stand: Anfang 2026):
        </p>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <h3 className="font-semibold text-foreground mb-3">Microsoft Teams Rooms</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><strong>Basic (kostenlos):</strong> Bis zu 25 Räume pro Tenant. Standard-Funktionen: Meeting-Join, Kalender, Content-Sharing. Keine erweiterten Layouts, kein Room-Panel-Support.</li>
                <li><strong>Pro (~40 €/Raum/Monat):</strong> Erweiterte Layouts (Front Row, Dual Screen), KI-Funktionen, Remote-Management, Analytics. Lizenz deckt auch Room-Panel ab.</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <h3 className="font-semibold text-foreground mb-3">Zoom Rooms</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><strong>~50 €/Raum/Monat:</strong> Voller Funktionsumfang inklusive Scheduling Display und Digital Signage – ohne Zusatzkosten.</li>
                <li><strong>Erfordert zusätzlich:</strong> Zoom Workplace-Lizenz (ab ~14 €/User/Monat) für die Meeting-Hosts.</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-2xl font-bold text-foreground mb-4 mt-12">Nutzererlebnis</h2>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          Beide Plattformen unterstützen One-Touch-Join, automatisches Kamera-Framing und drahtloses Content-Sharing. 
          Im Alltag unterscheiden sie sich vor allem im Look & Feel:
        </p>
        <ul className="space-y-3 text-muted-foreground mb-8">
          <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> <strong>Teams Rooms</strong> eignen sich besonders für strukturierte, Microsoft-zentrierte Organisationen mit festen Meeting-Abläufen.</li>
          <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> <strong>Zoom Rooms</strong> fühlen sich etwas flexibler an und eignen sich gut für Unternehmen mit vielen externen Teilnehmern oder kreativeren Meeting-Formaten.</li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground mb-4 mt-12">Sicherheit & Compliance</h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Microsoft Teams wird häufig von Unternehmen mit strengen Sicherheitsanforderungen bevorzugt – die 
          Compliance-Zertifizierungen von Microsoft (ISO 27001, SOC 2, DSGVO) sind umfangreich. Zoom hat in den 
          letzten Jahren stark nachgezogen und bietet mittlerweile ebenfalls SSO, Ende-zu-Ende-Verschlüsselung 
          und umfangreiche Admin-Kontrollen.
        </p>

        <Card className="bg-accent/10 border-accent/20 mb-8">
          <CardContent className="p-6">
            <h3 className="font-semibold text-foreground mb-2">💡 Unsere Empfehlung</h3>
            <p className="text-sm text-muted-foreground">
              Die Plattform-Entscheidung sollte sich an Ihrer bestehenden IT-Landschaft orientieren – nicht an 
              Marketing-Versprechen. Nutzen Sie Microsoft 365? Dann Teams Rooms. Nutzen Sie Zoom? Dann Zoom Rooms. 
              Bei Mischbetrieb (z. B. intern Teams, extern Zoom) gibt es Interoperabilitätslösungen. 
              Wir beraten Sie herstellerneutral und helfen bei der Entscheidung.
            </p>
          </CardContent>
        </Card>
      </>
    ),
  },

  "konferenzraum-kosten": {
    slug: "konferenzraum-kosten",
    title: "Was kostet ein Konferenzraum?",
    metaDescription: "Realistische Kostenrahmen für die Ausstattung von Konferenzräumen: Vom Huddle Space ab 3.000 € bis zum Boardroom für 80.000+ € – transparent und nachvollziehbar.",
    keywords: "Konferenzraum Kosten, Videokonferenz Preis, Meetingraum Ausstattung Budget, Konferenztechnik Investition",
    readTime: "7 Min.",
    category: "Budget",
    content: (
      <>
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          „Was kostet ein Konferenzraum?" ist die häufigste Frage, die wir von IT-Entscheidern und Facility Managern 
          hören. Die ehrliche Antwort: Es kommt drauf an. Aber wir können Ihnen realistische Kostenrahmen geben, 
          damit Sie ein Budget planen können.
        </p>

        <Card className="mb-8 bg-accent/10 border-accent/20">
          <CardContent className="p-6">
            <h3 className="font-semibold text-foreground mb-2">⚠️ Wichtiger Hinweis</h3>
            <p className="text-sm text-muted-foreground">
              Die folgenden Preise sind Richtwerte auf Basis unserer Projekterfahrung (Stand: Anfang 2026). 
              Sie beinhalten Hardware, Installation und Inbetriebnahme. Nicht enthalten sind: Möbel, bauliche 
              Maßnahmen (Akustik, Elektro), Netzwerk-Infrastruktur und laufende Lizenzkosten. 
              Jedes Projekt wird individuell kalkuliert.
            </p>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold text-foreground mb-4 mt-12">Kostenrahmen nach Raumgröße</h2>

        <div className="space-y-6 mb-8">
          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-foreground text-lg">Huddle Space (2–6 Personen)</h3>
                <Badge className="bg-primary/10 text-primary border-primary/20">ab 3.000 €</Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                All-in-One-Videobar + Display + Montage. Die einfachste und kosteneffizienteste Lösung.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Basis: All-in-One-Videobar (z. B. Poly Studio, Yealink MeetingBar) ab ca. 800–2.000 €</li>
                <li>• Display 55–65" ab ca. 500–1.500 €</li>
                <li>• Installation, Verkabelung, Inbetriebnahme ab ca. 500–1.500 €</li>
                <li>• <strong>Gesamtrahmen: 3.000–5.000 €</strong></li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-foreground text-lg">Meetingraum (6–12 Personen)</h3>
                <Badge className="bg-primary/10 text-primary border-primary/20">8.000–15.000 €</Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Separate Kamera, dedizierte Mikrofone, 1–2 Displays und Touch-Steuerung.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• PTZ-/KI-Kamera ab ca. 1.500–4.000 €</li>
                <li>• Deckenmikrofon (z. B. Shure, Sennheiser) ab ca. 1.500–3.500 €</li>
                <li>• 1–2× Display 65–86" ab ca. 1.000–4.000 €</li>
                <li>• Compute-Unit (Teams/Zoom) + Touch-Panel ab ca. 2.000–3.500 €</li>
                <li>• Installation und Inbetriebnahme ab ca. 1.500–3.000 €</li>
                <li>• <strong>Gesamtrahmen: 8.000–15.000 €</strong></li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-foreground text-lg">Großer Konferenzraum (12–20 Personen)</h3>
                <Badge className="bg-primary/10 text-primary border-primary/20">15.000–30.000 €</Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Professionelle AV-Komponenten, DSP-Audioprozessor und zentrale Mediensteuerung.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• PTZ-Kamera(s) mit 4K ab ca. 3.000–6.000 €</li>
                <li>• Deckenmikrofone + DSP-Audioprozessor ab ca. 4.000–8.000 €</li>
                <li>• 2× Display 75–86" oder LED-Display ab ca. 3.000–8.000 €</li>
                <li>• Mediensteuerung (Crestron, Q-Sys) + Touch-Panel ab ca. 3.000–6.000 €</li>
                <li>• Installation, Programmierung, Inbetriebnahme ab ca. 2.000–5.000 €</li>
                <li>• <strong>Gesamtrahmen: 15.000–30.000 €</strong></li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-foreground text-lg">Boardroom (20+ Personen)</h3>
                <Badge className="bg-primary/10 text-primary border-primary/20">25.000–80.000+ €</Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Repräsentative Ausstattung mit LED-Wall, vollintegrierter Steuerung und Raumautomation.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• LED-Wall oder Multi-Display-Setup ab ca. 8.000–30.000+ €</li>
                <li>• Multiple Kameras + KI-Tracking ab ca. 4.000–10.000 €</li>
                <li>• Mikrofon-Array + DSP + verteilte Lautsprecher ab ca. 5.000–12.000 €</li>
                <li>• Vollintegrierte Mediensteuerung + Raumautomation ab ca. 5.000–15.000 €</li>
                <li>• Wireless-Präsentation, Raumbuchung, Extras ab ca. 2.000–5.000 €</li>
                <li>• Installation, Programmierung, Inbetriebnahme, Schulung ab ca. 3.000–8.000 €</li>
                <li>• <strong>Gesamtrahmen: 25.000–80.000+ €</strong></li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-2xl font-bold text-foreground mb-4 mt-12">Laufende Kosten nicht vergessen</h2>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          Neben der einmaligen Investition fallen laufende Kosten an, die bei der Budgetplanung berücksichtigt 
          werden sollten:
        </p>
        <ul className="space-y-3 text-muted-foreground mb-8">
          <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> <strong>Plattform-Lizenzen:</strong> Microsoft Teams Rooms Pro ~40 €/Raum/Monat oder Zoom Rooms ~50 €/Raum/Monat</li>
          <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> <strong>Service & Wartung:</strong> Abhängig vom Umfang, typischerweise 5–15 % der Hardware-Investition pro Jahr</li>
          <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> <strong>Remote-Monitoring:</strong> Proaktive Überwachung aller Systeme, Fehlererkennung vor dem Meeting</li>
          <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> <strong>Software-Updates:</strong> Firmware-Updates für Kameras, Mikrofone und Steuerungen</li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground mb-4 mt-12">Finanzierungsmöglichkeiten</h2>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          Nicht jedes Unternehmen möchte die gesamte Investition auf einmal tätigen. Es gibt verschiedene 
          Finanzierungsmodelle:
        </p>
        <ul className="space-y-3 text-muted-foreground mb-8">
          <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> <strong>Leasing:</strong> Monatliche Raten über 36–60 Monate, Technik bleibt aktuell</li>
          <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> <strong>Mietkauf:</strong> Monatliche Raten mit Eigentumsübergang am Ende</li>
          <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> <strong>AV-as-a-Service:</strong> Alles inklusive (Hardware, Installation, Service) als monatliche Pauschale</li>
        </ul>
        <p className="text-muted-foreground mb-8">
          Mehr zu unseren Finanzierungsoptionen finden Sie auf unserer{" "}
          <Link to="/finanzierung" className="text-primary hover:underline">Finanzierungsseite</Link>.
        </p>

        <Card className="bg-accent/10 border-accent/20 mb-8">
          <CardContent className="p-6">
            <h3 className="font-semibold text-foreground mb-2">💡 Spar-Tipp: Standardisierung</h3>
            <p className="text-sm text-muted-foreground">
              Wenn Sie mehrere Räume ausstatten, sparen Sie durch Standardisierung: Gleiche Hersteller und Modelle 
              in allen Räumen reduzieren Schulungsaufwand, vereinfachen die Wartung und ermöglichen Mengenrabatte. 
              Bei Rollouts mit 10+ Räumen können die Stückkosten um 15–25 % sinken.
            </p>
          </CardContent>
        </Card>
      </>
    ),
  },
};

const generateGuideSchema = (guide: GuideData) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: guide.title,
  description: guide.metaDescription,
  author: {
    "@type": "Organization",
    name: "SLT Technology Group",
    url: "https://www.slt-tg.de/ueber-uns",
  },
  publisher: {
    "@type": "Organization",
    name: "SLT Technology Group",
    logo: { "@type": "ImageObject", url: "https://www.slt-tg.de/favicon.png" },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `https://www.slt-tg.de/ratgeber/${guide.slug}`,
  },
  datePublished: "2026-03-14",
  dateModified: "2026-03-14",
  keywords: guide.keywords,
});

const RatgeberArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const guide = slug ? guides[slug] : undefined;

  if (!guide) return <Navigate to="/ratgeber" replace />;

  return (
    <Layout>
      <SEOHead
        title={guide.title}
        description={guide.metaDescription}
        keywords={guide.keywords}
        canonical={`/ratgeber/${guide.slug}`}
        type="article"
        structuredData={generateGuideSchema(guide)}
      />

      <article className="pt-28 pb-12 lg:pt-36 lg:pb-20">
        <div className="section-container px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <Breadcrumbs items={[
              { label: "Ratgeber", href: "/ratgeber" },
              { label: guide.title },
            ]} />

            <div className="flex items-center gap-3 mt-4 lg:mt-6 mb-4 lg:mb-6">
              <Badge variant="secondary" className="text-xs">{guide.category}</Badge>
              <span className="text-xs sm:text-sm text-muted-foreground flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                Lesezeit: {guide.readTime}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6 lg:mb-8 leading-tight">
              {guide.title}
            </h1>

            {guide.content}

            {/* CTA */}
            <div className="mt-12 pt-8 border-t border-border">
              <h2 className="text-xl font-bold text-foreground mb-3">
                Individuelle Beratung für Ihr Projekt
              </h2>
              <p className="text-muted-foreground mb-6">
                Dieser Ratgeber gibt Ihnen eine solide Grundlage. Für Ihr konkretes Projekt erstellen wir 
                Ihnen ein individuelles Konzept – kostenfrei und unverbindlich.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="btn-glow">
                  <Link to="/projektanfrage">
                    Projekt anfragen
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/ratgeber">
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    Alle Ratgeber
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default RatgeberArticle;
