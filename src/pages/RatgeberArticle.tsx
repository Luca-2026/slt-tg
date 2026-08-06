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
        <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
          Nicht jeder Konferenzraum braucht die gleiche Technik. Ein Huddle Space für vier Personen hat andere 
          Anforderungen als ein Boardroom für 20 Teilnehmer. Dieser Ratgeber zeigt, welche Ausstattung für welche 
          Raumgröße sinnvoll ist – herstellerneutral und praxisorientiert.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4 mt-8 sm:mt-12">Huddle Space (2–6 Personen)</h2>
        <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
          Huddle Spaces sind kompakte Räume für spontane Abstimmungen und kurze Meetings. Sie bieten typischerweise 
          Platz für zwei bis sechs Personen und zeichnen sich durch eine einfache, schnell nutzbare Technik aus.
        </p>
        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="p-4 sm:p-6">
            <h3 className="font-semibold text-foreground mb-3 text-sm sm:text-base">Empfohlene Ausstattung</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> <span><strong>Display:</strong> 1× Bildschirm (55–65 Zoll) oder interaktives Touch-Display</span></li>
              <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> <span><strong>Kamera & Audio:</strong> All-in-One-Videobar (z. B. Poly Studio, Jabra PanaCast, Yealink MeetingBar A10/A20)</span></li>
              <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> <span><strong>Steuerung:</strong> Touch-Panel oder BYOD-Lösung (Laptop + drahtlose Präsentation)</span></li>
              <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> <span><strong>Netzwerk:</strong> PoE-Anschluss für die Videobar, stabiles WLAN für BYOD</span></li>
            </ul>
          </CardContent>
        </Card>
        <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
          Der Vorteil von All-in-One-Videobars: Sie reduzieren Kabelchaos auf ein Minimum. Ein einzelnes Gerät ersetzt 
          separate Kamera, Mikrofon und Lautsprecher. Moderne Modelle bieten KI-gestützte Funktionen wie 
          Rauschunterdrückung, automatisches Framing und Hintergrundunschärfe.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4 mt-8 sm:mt-12">Mittlerer Meetingraum (6–12 Personen)</h2>
        <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
          Standard-Meetingräume für reguläre Team-Meetings und Kundenpräsentationen. Hier wächst die Komplexität: 
          Separate Komponenten liefern bessere Ergebnisse als All-in-One-Lösungen.
        </p>
        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="p-4 sm:p-6">
            <h3 className="font-semibold text-foreground mb-3 text-sm sm:text-base">Empfohlene Ausstattung</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> <span><strong>Displays:</strong> 1–2× professionelle Displays (65–86 Zoll), optional Dual-Screen</span></li>
              <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> <span><strong>Kamera:</strong> PTZ-Kamera oder KI-gestützte Kamera mit Sprecherverfolgung (z. B. Huddly L1, AVer CAM570)</span></li>
              <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> <span><strong>Audio:</strong> Dedizierte Deckenmikrofone oder Tischmikrofone + externe Lautsprecher</span></li>
              <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> <span><strong>Steuerung:</strong> Touch-Panel (z. B. Crestron TSW, Yealink RoomPanel) für One-Touch-Join</span></li>
              <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> <span><strong>Netzwerk:</strong> Kabelgebundene Anbindung (Cat6a), PoE für Peripheriegeräte</span></li>
            </ul>
          </CardContent>
        </Card>
        <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
          Bei mittleren Räumen ist die Audio-Qualität entscheidend: Deckenmikrofone (z. B. Shure MXA920, Sennheiser 
          TeamConnect Ceiling) erfassen alle Sprecher gleichmäßig – unabhängig von der Sitzposition.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4 mt-8 sm:mt-12">Großer Konferenzraum (12–20 Personen)</h2>
        <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
          Größere Räume für Abteilungsmeetings, Schulungen und Workshops. Hier werden professionelle 
          AV-Komponenten mit zentraler Mediensteuerung kombiniert.
        </p>
        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="p-4 sm:p-6">
            <h3 className="font-semibold text-foreground mb-3 text-sm sm:text-base">Empfohlene Ausstattung</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> <span><strong>Displays:</strong> 2× große Displays (75–86 Zoll) oder LED-Wall</span></li>
              <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> <span><strong>Kamera:</strong> PTZ-Kamera mit 4K und optischem Zoom oder mehrere Kameras</span></li>
              <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> <span><strong>Audio:</strong> Deckenmikrofone + DSP-Audioprozessor (z. B. Q-Sys, Biamp)</span></li>
              <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> <span><strong>Steuerung:</strong> Zentrale Mediensteuerung (z. B. Crestron, Q-Sys) mit Raumszenarien</span></li>
              <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> <span><strong>Netzwerk:</strong> Dediziertes AV-VLAN, PoE+ Switches, Quality-of-Service</span></li>
            </ul>
          </CardContent>
        </Card>
        <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
          Je größer der Raum, desto wichtiger wird die Audio-Qualität. Ein DSP-Audioprozessor sorgt für 
          akustische Echounterdrückung (AEC), automatische Mikrofonmischung und gleichmäßige Lautsprecherverteilung.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4 mt-8 sm:mt-12">Boardroom (20+ Personen)</h2>
        <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
          Der repräsentative Konferenzraum für Vorstandssitzungen, Kundenbesuche und wichtige Präsentationen. 
          Hier zählt nicht nur Funktionalität, sondern auch Ästhetik und Bedienkomfort.
        </p>
        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="p-4 sm:p-6">
            <h3 className="font-semibold text-foreground mb-3 text-sm sm:text-base">Empfohlene Ausstattung</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> <span><strong>Displays:</strong> LED-Wall oder mehrere große Displays + Wireless-Präsentation</span></li>
              <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> <span><strong>Kamera:</strong> Multiple KI-Kameras oder steuerbare PTZ-Kameras mit Sprecherverfolgung</span></li>
              <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> <span><strong>Audio:</strong> Deckenmikrofon-Array + DSP + verteilte Lautsprecher</span></li>
              <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> <span><strong>Steuerung:</strong> Voll integrierte Mediensteuerung mit Raumautomation</span></li>
              <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> <span><strong>Extras:</strong> Barco ClickShare, Raumbuchungssystem, Digital Signage</span></li>
            </ul>
          </CardContent>
        </Card>
        <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
          Im Boardroom sollte die Technik unsichtbar funktionieren. Per Knopfdruck startet ein vordefiniertes Szenario: 
          Displays fahren hoch, Licht dimmt, Jalousien schließen, die Videokonferenz startet.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4 mt-8 sm:mt-12">Zusammenfassung: Ausstattung nach Raumtyp</h2>
        <div className="overflow-x-auto -mx-4 sm:mx-0 mb-6 sm:mb-8">
          <table className="w-full text-xs sm:text-sm min-w-[600px]">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 sm:py-3 px-3 sm:px-4 font-semibold text-foreground">Raumtyp</th>
                <th className="text-left py-2 sm:py-3 px-3 sm:px-4 font-semibold text-foreground">Personen</th>
                <th className="text-left py-2 sm:py-3 px-3 sm:px-4 font-semibold text-foreground">Display</th>
                <th className="text-left py-2 sm:py-3 px-3 sm:px-4 font-semibold text-foreground">Audio</th>
                <th className="text-left py-2 sm:py-3 px-3 sm:px-4 font-semibold text-foreground">Kamera</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border/50">
                <td className="py-2 sm:py-3 px-3 sm:px-4 font-medium text-foreground">Huddle Space</td>
                <td className="py-2 sm:py-3 px-3 sm:px-4">2–6</td>
                <td className="py-2 sm:py-3 px-3 sm:px-4">1× 55–65"</td>
                <td className="py-2 sm:py-3 px-3 sm:px-4">All-in-One Videobar</td>
                <td className="py-2 sm:py-3 px-3 sm:px-4">In Videobar integriert</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 sm:py-3 px-3 sm:px-4 font-medium text-foreground">Meetingraum</td>
                <td className="py-2 sm:py-3 px-3 sm:px-4">6–12</td>
                <td className="py-2 sm:py-3 px-3 sm:px-4">1–2× 65–86"</td>
                <td className="py-2 sm:py-3 px-3 sm:px-4">Deckenmikrofon + Lautsprecher</td>
                <td className="py-2 sm:py-3 px-3 sm:px-4">PTZ oder KI-Kamera</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 sm:py-3 px-3 sm:px-4 font-medium text-foreground">Konferenzraum</td>
                <td className="py-2 sm:py-3 px-3 sm:px-4">12–20</td>
                <td className="py-2 sm:py-3 px-3 sm:px-4">2× 75–86" / LED</td>
                <td className="py-2 sm:py-3 px-3 sm:px-4">Deckenmikrofone + DSP</td>
                <td className="py-2 sm:py-3 px-3 sm:px-4">PTZ 4K + Zoom</td>
              </tr>
              <tr>
                <td className="py-2 sm:py-3 px-3 sm:px-4 font-medium text-foreground">Boardroom</td>
                <td className="py-2 sm:py-3 px-3 sm:px-4">20+</td>
                <td className="py-2 sm:py-3 px-3 sm:px-4">LED-Wall / Multi</td>
                <td className="py-2 sm:py-3 px-3 sm:px-4">Array + DSP + Lautspr.</td>
                <td className="py-2 sm:py-3 px-3 sm:px-4">Multiple Kameras</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Card className="bg-accent/10 border-accent/20 mb-6 sm:mb-8">
          <CardContent className="p-4 sm:p-6">
            <h3 className="font-semibold text-foreground mb-2 text-sm sm:text-base">💡 Praxis-Tipp</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Planen Sie nicht nur den Ist-Zustand: Wählen Sie Technik, die mit Ihren Anforderungen wachsen kann. 
              Modulare Systeme vermeiden kostspielige Neuanschaffungen. Lassen Sie bei der Verkabelung 
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
        <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
          Microsoft Teams Rooms und Zoom Rooms sind die beiden führenden Plattformen für dedizierte 
          Videokonferenzraumsysteme. Die richtige Wahl hängt von Ihrer bestehenden IT-Infrastruktur ab.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4 mt-8 sm:mt-12">Das Wichtigste vorab</h2>
        <Card className="mb-6 sm:mb-8 bg-accent/10 border-accent/20">
          <CardContent className="p-4 sm:p-6">
            <p className="text-muted-foreground text-xs sm:text-sm">
              <strong className="text-foreground">Die Kurzfassung:</strong> Nutzt Ihr Unternehmen Microsoft 365 
              (Outlook, OneDrive, SharePoint), ist Microsoft Teams Rooms die naheliegende Wahl. 
              Setzt Ihr Unternehmen primär auf Zoom, bietet Zoom Rooms das bessere Nutzererlebnis. 
              Bei Mischbetrieb ist eine herstellerneutrale Beratung empfehlenswert.
            </p>
          </CardContent>
        </Card>

        <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4 mt-8 sm:mt-12">Ökosystem & Integration</h2>
        <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
          Der größte Unterschied liegt nicht in der Hardware, sondern im Software-Ökosystem:
        </p>
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-4 sm:p-6">
              <h3 className="font-semibold text-foreground mb-3 text-sm sm:text-base">Microsoft Teams Rooms</h3>
              <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> <span>Nahtlose Integration mit Microsoft 365</span></li>
                <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> <span>Automatische Raumbuchung über Outlook</span></li>
                <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> <span>Microsoft Copilot für Meeting-Zusammenfassungen</span></li>
                <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> <span>Erweiterte Sicherheits- und Compliance-Funktionen</span></li>
                <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> <span>Direkte Anrufe an SIP/H.323-Systeme (Pro-Lizenz)</span></li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-4 sm:p-6">
              <h3 className="font-semibold text-foreground mb-3 text-sm sm:text-base">Zoom Rooms</h3>
              <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> <span>Integration mit Slack, Google Workspace, Salesforce</span></li>
                <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> <span>Kiosk-Modus für Empfangsbereiche</span></li>
                <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> <span>Integriertes Digital Signage (in der Lizenz)</span></li>
                <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> <span>Zoom Webinar-Integration für Events</span></li>
                <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> <span>Plattformübergreifende Interoperabilität</span></li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4 mt-8 sm:mt-12">Hardware-Kompatibilität</h2>
        <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
          Nicht jede Hardware funktioniert mit jeder Plattform. Viele Hersteller bieten plattformspezifische 
          Versionen (SKUs) ihrer Geräte an:
        </p>
        <div className="overflow-x-auto -mx-4 sm:mx-0 mb-6 sm:mb-8">
          <table className="w-full text-xs sm:text-sm min-w-[500px]">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 sm:py-3 px-3 sm:px-4 font-semibold text-foreground">Hersteller</th>
                <th className="text-left py-2 sm:py-3 px-3 sm:px-4 font-semibold text-foreground">Teams</th>
                <th className="text-left py-2 sm:py-3 px-3 sm:px-4 font-semibold text-foreground">Zoom</th>
                <th className="text-left py-2 sm:py-3 px-3 sm:px-4 font-semibold text-foreground">Hinweis</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border/50">
                <td className="py-2 sm:py-3 px-3 sm:px-4 font-medium text-foreground">Logitech</td>
                <td className="py-2 sm:py-3 px-3 sm:px-4">✅</td>
                <td className="py-2 sm:py-3 px-3 sm:px-4">✅</td>
                <td className="py-2 sm:py-3 px-3 sm:px-4">Breite Kompatibilität</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 sm:py-3 px-3 sm:px-4 font-medium text-foreground">Poly (HP)</td>
                <td className="py-2 sm:py-3 px-3 sm:px-4">✅</td>
                <td className="py-2 sm:py-3 px-3 sm:px-4">✅</td>
                <td className="py-2 sm:py-3 px-3 sm:px-4">Teils plattformspezifisch</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 sm:py-3 px-3 sm:px-4 font-medium text-foreground">Yealink</td>
                <td className="py-2 sm:py-3 px-3 sm:px-4">✅</td>
                <td className="py-2 sm:py-3 px-3 sm:px-4">✅</td>
                <td className="py-2 sm:py-3 px-3 sm:px-4">Separate Kits</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 sm:py-3 px-3 sm:px-4 font-medium text-foreground">Crestron</td>
                <td className="py-2 sm:py-3 px-3 sm:px-4">✅</td>
                <td className="py-2 sm:py-3 px-3 sm:px-4">✅</td>
                <td className="py-2 sm:py-3 px-3 sm:px-4">Ideal für große Räume</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 sm:py-3 px-3 sm:px-4 font-medium text-foreground">Neat</td>
                <td className="py-2 sm:py-3 px-3 sm:px-4">✅</td>
                <td className="py-2 sm:py-3 px-3 sm:px-4">✅</td>
                <td className="py-2 sm:py-3 px-3 sm:px-4">Ursprünglich Zoom-first</td>
              </tr>
              <tr>
                <td className="py-2 sm:py-3 px-3 sm:px-4 font-medium text-foreground">DTEN</td>
                <td className="py-2 sm:py-3 px-3 sm:px-4">✅</td>
                <td className="py-2 sm:py-3 px-3 sm:px-4">✅</td>
                <td className="py-2 sm:py-3 px-3 sm:px-4">Zoom-nativ</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4 mt-8 sm:mt-12">Lizenzkosten im Vergleich</h2>
        <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
          Beide Plattformen erfordern eine monatliche Lizenz pro Raum (Stand: Anfang 2026):
        </p>
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <Card className="bg-card border-border">
            <CardContent className="p-4 sm:p-6">
              <h3 className="font-semibold text-foreground mb-3 text-sm sm:text-base">Microsoft Teams Rooms</h3>
              <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                <li><strong>Basic (kostenlos):</strong> Bis zu 25 Räume. Standard-Funktionen.</li>
                <li><strong>Pro (~40 €/Raum/Monat):</strong> Erweiterte Layouts, KI-Funktionen, Remote-Management.</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-card border-border">
            <CardContent className="p-4 sm:p-6">
              <h3 className="font-semibold text-foreground mb-3 text-sm sm:text-base">Zoom Rooms</h3>
              <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                <li><strong>~50 €/Raum/Monat:</strong> Voller Umfang inkl. Scheduling Display und Digital Signage.</li>
                <li><strong>Zusätzlich:</strong> Zoom Workplace-Lizenz (ab ~14 €/User/Monat) für Hosts.</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4 mt-8 sm:mt-12">Nutzererlebnis</h2>
        <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
          Beide Plattformen unterstützen One-Touch-Join, automatisches Kamera-Framing und drahtloses Content-Sharing. 
          Im Alltag unterscheiden sie sich vor allem im Look & Feel:
        </p>
        <ul className="space-y-3 text-sm text-muted-foreground mb-6 sm:mb-8">
          <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> <span><strong>Teams Rooms</strong> eignen sich besonders für strukturierte, Microsoft-zentrierte Organisationen.</span></li>
          <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> <span><strong>Zoom Rooms</strong> fühlen sich flexibler an und eignen sich gut für Unternehmen mit vielen externen Teilnehmern.</span></li>
        </ul>

        <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4 mt-8 sm:mt-12">Sicherheit & Compliance</h2>
        <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
          Microsoft Teams wird häufig von Unternehmen mit strengen Sicherheitsanforderungen bevorzugt – die 
          Compliance-Zertifizierungen (ISO 27001, SOC 2, DSGVO) sind umfangreich. Zoom hat stark nachgezogen 
          und bietet mittlerweile ebenfalls SSO, Ende-zu-Ende-Verschlüsselung und umfangreiche Admin-Kontrollen.
        </p>

        <Card className="bg-accent/10 border-accent/20 mb-6 sm:mb-8">
          <CardContent className="p-4 sm:p-6">
            <h3 className="font-semibold text-foreground mb-2 text-sm sm:text-base">💡 Unsere Empfehlung</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Die Plattform-Entscheidung sollte sich an Ihrer bestehenden IT-Landschaft orientieren. 
              Nutzen Sie Microsoft 365? Dann Teams Rooms. Nutzen Sie Zoom? Dann Zoom Rooms. 
              Bei Mischbetrieb gibt es Interoperabilitätslösungen. 
              Wir beraten Sie herstellerneutral.
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
        <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
          „Was kostet ein Konferenzraum?" ist die häufigste Frage, die wir von IT-Entscheidern und Facility Managern 
          hören. Die ehrliche Antwort: Es kommt drauf an. Aber wir können Ihnen realistische Kostenrahmen geben.
        </p>

        <Card className="mb-6 sm:mb-8 bg-accent/10 border-accent/20">
          <CardContent className="p-4 sm:p-6">
            <h3 className="font-semibold text-foreground mb-2 text-sm sm:text-base">⚠️ Wichtiger Hinweis</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Die folgenden Preise sind Richtwerte auf Basis unserer Projekterfahrung (Stand: Anfang 2026). 
              Sie beinhalten Hardware, Installation und Inbetriebnahme. Nicht enthalten: Möbel, bauliche 
              Maßnahmen, Netzwerk-Infrastruktur und laufende Lizenzkosten.
            </p>
          </CardContent>
        </Card>

        <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4 mt-8 sm:mt-12">Kostenrahmen nach Raumgröße</h2>

        <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
          <Card className="bg-card border-border">
            <CardContent className="p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                <h3 className="font-semibold text-foreground text-base sm:text-lg">Huddle Space (2–6 Pers.)</h3>
                <Badge className="bg-primary/10 text-primary border-primary/20 w-fit">ab 3.000 €</Badge>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground mb-3">
                All-in-One-Videobar + Display + Montage. Die einfachste Lösung.
              </p>
              <ul className="text-xs sm:text-sm text-muted-foreground space-y-1">
                <li>• Videobar (Poly Studio, Yealink) ab ca. 800–2.000 €</li>
                <li>• Display 55–65" ab ca. 500–1.500 €</li>
                <li>• Installation ab ca. 500–1.500 €</li>
                <li>• <strong>Gesamt: 3.000–5.000 €</strong></li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                <h3 className="font-semibold text-foreground text-base sm:text-lg">Meetingraum (6–12 Pers.)</h3>
                <Badge className="bg-primary/10 text-primary border-primary/20 w-fit">8.000–15.000 €</Badge>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground mb-3">
                Separate Kamera, dedizierte Mikrofone, 1–2 Displays und Touch-Steuerung.
              </p>
              <ul className="text-xs sm:text-sm text-muted-foreground space-y-1">
                <li>• PTZ-/KI-Kamera ab ca. 1.500–4.000 €</li>
                <li>• Deckenmikrofon ab ca. 1.500–3.500 €</li>
                <li>• 1–2× Display 65–86" ab ca. 1.000–4.000 €</li>
                <li>• Compute-Unit + Touch-Panel ab ca. 2.000–3.500 €</li>
                <li>• Installation ab ca. 1.500–3.000 €</li>
                <li>• <strong>Gesamt: 8.000–15.000 €</strong></li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                <h3 className="font-semibold text-foreground text-base sm:text-lg">Konferenzraum (12–20 Pers.)</h3>
                <Badge className="bg-primary/10 text-primary border-primary/20 w-fit">15.000–30.000 €</Badge>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground mb-3">
                Professionelle AV-Komponenten, DSP-Audioprozessor und zentrale Mediensteuerung.
              </p>
              <ul className="text-xs sm:text-sm text-muted-foreground space-y-1">
                <li>• PTZ-Kamera(s) 4K ab ca. 3.000–6.000 €</li>
                <li>• Deckenmikrofone + DSP ab ca. 4.000–8.000 €</li>
                <li>• 2× Display 75–86" / LED ab ca. 3.000–8.000 €</li>
                <li>• Mediensteuerung + Touch-Panel ab ca. 3.000–6.000 €</li>
                <li>• Installation ab ca. 2.000–5.000 €</li>
                <li>• <strong>Gesamt: 15.000–30.000 €</strong></li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                <h3 className="font-semibold text-foreground text-base sm:text-lg">Boardroom (20+ Pers.)</h3>
                <Badge className="bg-primary/10 text-primary border-primary/20 w-fit">25.000–80.000+ €</Badge>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground mb-3">
                Repräsentative Ausstattung mit LED-Wall, vollintegrierter Steuerung und Raumautomation.
              </p>
              <ul className="text-xs sm:text-sm text-muted-foreground space-y-1">
                <li>• LED-Wall / Multi-Display ab ca. 8.000–30.000+ €</li>
                <li>• Multiple Kameras + KI ab ca. 4.000–10.000 €</li>
                <li>• Audio-Array + DSP ab ca. 5.000–12.000 €</li>
                <li>• Mediensteuerung + Automation ab ca. 5.000–15.000 €</li>
                <li>• Wireless, Raumbuchung, Extras ab ca. 2.000–5.000 €</li>
                <li>• Installation + Schulung ab ca. 3.000–8.000 €</li>
                <li>• <strong>Gesamt: 25.000–80.000+ €</strong></li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4 mt-8 sm:mt-12">Laufende Kosten nicht vergessen</h2>
        <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
          Neben der einmaligen Investition fallen laufende Kosten an:
        </p>
        <ul className="space-y-3 text-sm text-muted-foreground mb-6 sm:mb-8">
          <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> <span><strong>Plattform-Lizenzen:</strong> Teams Pro ~40 €/Raum/Monat oder Zoom Rooms ~50 €/Raum/Monat</span></li>
          <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> <span><strong>Service & Wartung:</strong> Typischerweise 5–15 % der Hardware-Investition pro Jahr</span></li>
          <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> <span><strong>Remote-Monitoring:</strong> Proaktive Überwachung aller Systeme</span></li>
          <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> <span><strong>Software-Updates:</strong> Firmware-Updates für alle Komponenten</span></li>
        </ul>

        <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4 mt-8 sm:mt-12">Finanzierungsmöglichkeiten</h2>
        <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
          Nicht jedes Unternehmen möchte die gesamte Investition auf einmal tätigen:
        </p>
        <ul className="space-y-3 text-sm text-muted-foreground mb-6 sm:mb-8">
          <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> <span><strong>Leasing:</strong> Monatliche Raten über 36–60 Monate</span></li>
          <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> <span><strong>Mietkauf:</strong> Monatliche Raten mit Eigentumsübergang</span></li>
          <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> <span><strong>AV-as-a-Service:</strong> Alles inklusive als monatliche Pauschale</span></li>
        </ul>
        <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">
          Mehr zu unseren Finanzierungsoptionen finden Sie auf unserer{" "}
          <Link to="/finanzierung" className="text-primary hover:underline">Finanzierungsseite</Link>.
        </p>

        <Card className="bg-accent/10 border-accent/20 mb-6 sm:mb-8">
          <CardContent className="p-4 sm:p-6">
            <h3 className="font-semibold text-foreground mb-2 text-sm sm:text-base">💡 Spar-Tipp: Standardisierung</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Wenn Sie mehrere Räume ausstatten, sparen Sie durch Standardisierung: Gleiche Hersteller und Modelle 
              reduzieren Schulungsaufwand und ermöglichen Mengenrabatte. 
              Bei 10+ Räumen können die Stückkosten um 15–25 % sinken.
            </p>
          </CardContent>
        </Card>
      </>
    ),
  },

  "yealink-meetingboard-pro": {
    slug: "yealink-meetingboard-pro",
    title: "Yealink MeetingBoard Pro: All-in-One Lösung für Microsoft Teams Rooms",
    metaDescription: "Yealink MeetingBoard Pro im Detail: Funktionen, Größen (65/75/86 Zoll), Kamera, Whiteboard & Installation. SLT Technology Group – autorisierter Yealink-Partner in NRW.",
    keywords: "Yealink MeetingBoard Pro, MeetingBoard Pro Microsoft Teams, Yealink Whiteboard, All-in-One Konferenzsystem, Teams Rooms Whiteboard, Yealink MeetingBoard kaufen, Yealink Partner NRW",
    readTime: "7 Min.",
    category: "Produkte",
    content: (
      <>
        <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
          Das <strong>Yealink MeetingBoard Pro</strong> vereint Videokonferenz, Display und interaktives Whiteboard 
          in einem einzigen Gerät – zertifiziert für <strong>Microsoft Teams Rooms</strong> und <strong>Zoom Rooms</strong>. 
          Als <strong>autorisierter Yealink-Partner</strong> übernehmen wir bei der SLT Technology Group die komplette 
          Planung, Installation und Inbetriebnahme für Ihr Unternehmen.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4 mt-8 sm:mt-12">Was ist das Yealink MeetingBoard Pro?</h2>
        <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
          Das MeetingBoard Pro ist Yealinks Flaggschiff unter den All-in-One-Konferenzsystemen. Es kombiniert 
          ein 4K-Multi-Touch-Display, ein leistungsstarkes Kamerasystem und professionelle Audiotechnik in einem 
          eleganten Gehäuse. In nur 10 Minuten aufgebaut, ersetzt es separate Bildschirme, Kameras, Mikrofone 
          und Lautsprecher – ideal für Unternehmen, die Kabelchaos reduzieren und Meetings effizienter gestalten wollen.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4 mt-8 sm:mt-12">Verfügbare Größen & Raumempfehlung</h2>
        <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
          Das MeetingBoard Pro ist in drei Displaygrößen erhältlich, die jeweils für unterschiedliche Raumtypen optimiert sind:
        </p>
        <div className="overflow-x-auto -mx-4 sm:mx-0 mb-6">
          <table className="w-full text-xs sm:text-sm border-collapse min-w-[500px]">
            <thead>
              <tr className="border-b border-border bg-primary/5">
                <th className="text-left p-3 font-semibold text-foreground">Modell</th>
                <th className="text-left p-3 font-semibold text-foreground">Displaygröße</th>
                <th className="text-left p-3 font-semibold text-foreground">Raumgröße</th>
                <th className="text-left p-3 font-semibold text-foreground">Personenanzahl</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border/50">
                <td className="p-3 font-medium text-foreground">MeetingBoard 65 Pro</td>
                <td className="p-3">65 Zoll</td>
                <td className="p-3">Klein</td>
                <td className="p-3">1–6 Personen</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="p-3 font-medium text-foreground">MeetingBoard 75 Pro</td>
                <td className="p-3">75 Zoll</td>
                <td className="p-3">Mittel / Open Space</td>
                <td className="p-3">6–12 Personen</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="p-3 font-medium text-foreground">MeetingBoard 86 Pro</td>
                <td className="p-3">86 Zoll</td>
                <td className="p-3">Groß</td>
                <td className="p-3">12–20 Personen</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4 mt-8 sm:mt-12">Triple-Kamerasystem mit KI</h2>
        <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
          Das integrierte Kamerasystem besteht aus <strong>drei 50-Megapixel-Kameras</strong> mit Tele- und 
          Weitwinkelobjektiven. Dank <strong>12-fachem PTZ-Zoom</strong> (Pan-Tilt-Zoom) werden selbst entfernte 
          Teilnehmer gestochen scharf dargestellt. KI-gestützte Funktionen sorgen für ein natürliches Meetingerlebnis:
        </p>
        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="p-4 sm:p-6">
            <h3 className="font-semibold text-foreground mb-3 text-sm sm:text-base">KI-Kamerafunktionen</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> <span><strong>IntelliFocus:</strong> Zeigt automatisch Nahaufnahmen des aktiven Sprechers – wie in einem Vor-Ort-Gespräch</span></li>
              <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> <span><strong>Video Fence:</strong> Definiert virtuelle Meeting-Grenzen – nur Personen im Rahmen werden angezeigt</span></li>
              <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> <span><strong>Automatisches Framing:</strong> Die Kamera passt den Bildausschnitt dynamisch an die Teilnehmerzahl an</span></li>
              <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> <span><strong>Elektrischer Privacy Shutter:</strong> Physischer Verschluss für maximale Privatsphäre</span></li>
            </ul>
          </CardContent>
        </Card>

        <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4 mt-8 sm:mt-12">Professionelle Audiotechnik</h2>
        <p className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed">
          Mit <strong>36 Watt Stereo-Lautsprechern</strong> und <strong>16 MEMS-Mikrofonarrays</strong> liefert das 
          MeetingBoard Pro kraftvollen, raumfüllenden Sound. Die KI-gestützte Rauschunterdrückung und 
          Vollduplex-Audioverarbeitung sorgen für kristallklare Gespräche mit einer Reichweite von bis zu 12 Metern – 
          auch in großen Meetingräumen wird jede Stimme klar erfasst.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4 mt-8 sm:mt-12">Interaktives Whiteboard</h2>
        <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
          Das 4K-Touch-Display mit Anti-Glare-Beschichtung bietet ein natürliches Schreiberlebnis 
          mit nur <strong>21 ms Latenz</strong>. Ob natives Microsoft Whiteboard, Zoom Whiteboard oder die 
          Yealink-eigene Whiteboard-App – kollaboratives Arbeiten wird zum Kinderspiel:
        </p>
        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="p-4 sm:p-6">
            <h3 className="font-semibold text-foreground mb-3 text-sm sm:text-base">Whiteboard-Features</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> <span>Stift zum Schreiben, Stiftende zum Radieren</span></li>
              <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> <span>Multi-User-Schreiben – mehrere Personen gleichzeitig</span></li>
              <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> <span>Handflächen-Erkennung (Palm Rejection) gegen versehentliche Eingaben</span></li>
              <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> <span>Finger-Navigation zum Zoomen und Bewegen</span></li>
            </ul>
          </CardContent>
        </Card>

        <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4 mt-8 sm:mt-12">Flexible Plattform: Windows oder Android</h2>
        <p className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed">
          Das MeetingBoard Pro ist sowohl mit <strong>Windows-Compute</strong> (für Microsoft Teams Rooms) als auch 
          mit <strong>Android-Basis</strong> erhältlich. So können Sie die Plattform wählen, die am besten zu Ihrer 
          bestehenden Infrastruktur passt. Das Gerät unterstützt neben Microsoft Teams auch Zoom und weitere 
          Cloud-Meeting-Plattformen.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4 mt-8 sm:mt-12">Montage & Zubehör</h2>
        <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
          Ob Wandmontage oder mobiler Standfuß – das MeetingBoard Pro ist für verschiedene Einsatzszenarien konzipiert. 
          Optionales Zubehör wie das <strong>Yealink CTP25 Touch-Panel</strong> für die Raumsteuerung oder 
          externe Erweiterungsmikrofone ergänzen das System bei Bedarf.
        </p>

        <Card className="bg-accent/10 border-accent/20 mb-6 sm:mb-8 mt-8">
          <CardContent className="p-4 sm:p-6">
            <h3 className="font-semibold text-foreground mb-2 text-sm sm:text-base">🏆 SLT Technology Group – Ihr autorisierter Yealink-Partner</h3>
            <p className="text-xs sm:text-sm text-muted-foreground mb-3">
              Als autorisierter Yealink-Provider sind wir Ihr Ansprechpartner für das MeetingBoard Pro in NRW und deutschlandweit. 
              Unser Service umfasst:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" /> <span><strong>Beratung & Raumplanung:</strong> Welche Größe und Konfiguration passt zu Ihrem Raum?</span></li>
              <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" /> <span><strong>Beschaffung:</strong> Direkte Lieferung über unsere Partnerkanäle</span></li>
              <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" /> <span><strong>Installation & Montage:</strong> Professionelle Wand- oder Standfußmontage inkl. Verkabelung</span></li>
              <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" /> <span><strong>Inbetriebnahme & Konfiguration:</strong> Einrichtung mit Microsoft Teams, Zoom oder Ihrer bevorzugten Plattform</span></li>
              <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" /> <span><strong>Support & Wartung:</strong> Laufende Betreuung und schnelle Hilfe bei Fragen</span></li>
            </ul>
          </CardContent>
        </Card>

        <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4 mt-8 sm:mt-12">Für wen eignet sich das MeetingBoard Pro?</h2>
        <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
          Das Yealink MeetingBoard Pro ist ideal für Unternehmen, die:
        </p>
        <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground mb-6 list-outside ml-5">
          <li>Meetings, Präsentationen und Brainstorming-Sessions in einem Gerät vereinen möchten</li>
          <li>Wert auf eine <strong>aufgeräumte, professionelle Optik</strong> im Meetingraum legen</li>
          <li>Eine <strong>Microsoft Teams Rooms</strong> oder <strong>Zoom Rooms</strong>-zertifizierte Lösung suchen</li>
          <li>Mehrere Räume mit einer einheitlichen, skalierbaren Lösung ausstatten wollen</li>
          <li>Hybrides Arbeiten mit interaktivem Whiteboarding verbinden möchten</li>
        </ul>
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

            {/* Money-Keyword-Anker zeigen bewusst auf die Pillar-Seiten,
                nicht auf weitere Ratgeber-Beiträge. */}
            <div className="mt-8 sm:mt-10 p-5 rounded-xl border border-border bg-muted/30">
              <h2 className="text-base sm:text-lg font-bold text-foreground mb-3">Passende Leistungen von SLT Technology Group</h2>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/konferenzraum-ausstattung" className="text-primary hover:underline font-medium">
                    Konferenzraum-Ausstattung planen und umsetzen lassen
                  </Link>
                </li>
                <li>
                  <Link to="/service-wartung" className="text-primary hover:underline font-medium">
                    Wartung und Service für Konferenztechnik
                  </Link>
                </li>
                <li>
                  <Link to="/leistungen" className="text-primary hover:underline font-medium">
                    AV-Systemintegration als Medientechnik-Systemhaus
                  </Link>
                </li>
              </ul>
            </div>



            {/* CTA */}
            <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-border">
              <h2 className="text-lg sm:text-xl font-bold text-foreground mb-3">
                Individuelle Beratung für Ihr Projekt
              </h2>
              <p className="text-sm text-muted-foreground mb-6">
                Dieser Ratgeber gibt Ihnen eine solide Grundlage. Für Ihr konkretes Projekt erstellen wir 
                Ihnen ein individuelles Konzept – kostenfrei und unverbindlich.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
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