import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function LedService() {
  return <section id="outdoor-led" className="py-12 lg:py-16 bg-muted/30 scroll-mt-24">
    <div className="section-container max-w-5xl">
      <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">Outdoor-LED: Abrufservice oder Wartungsvertrag</h2>
      <p className="text-muted-foreground mb-8">Für LED-Werbeanlagen beschreibt unser Service- und Wartungskonzept zwei Wege. Diese anlagenspezifischen Leistungen ergänzen die CARE-Modelle; entscheidend ist der schriftlich vereinbarte Umfang.</p>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-3">On-Demand Service</h3>
          <ul className="list-disc pl-5 space-y-3 text-muted-foreground">
            <li>Abrufunterstützung ohne Vertragsbindung, nach freier Kapazität; in der Regel drei bis fünf Werktage.</li>
            <li>Einsätze und Anfahrt nach Aufwand; Mindestabrechnung eine Stunde.</li>
            <li>Telefon-Support nach Aufwand im 15-Minuten-Takt.</li>
            <li>Modulbeschaffung und Express-Service nach Aufwand; Arbeitsbühne bei Bedarf.</li>
          </ul>
          <Button asChild variant="outline" className="mt-6 h-auto whitespace-normal"><Link to="/projektanfrage">LED-Service anfragen <ArrowRight className="ml-2 h-4 w-4 shrink-0" /></Link></Button>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-3">SLT CARE LED – Wartungsvertrag</h3>
          <ul className="list-disc pl-5 space-y-3 text-muted-foreground">
            <li>Kostenfreies Onboarding: Anlagenaudit, Lüfterdiagnose und Konfigurationsprüfung.</li>
            <li>Zwei Vor-Ort-Inspektionen und Reinigungen jährlich, im Frühjahr und Herbst: Sichtprüfung der Module und Lüfter, Firmware-Check und Fotodokumentation.</li>
            <li>Arbeitsbühne inklusive Lieferung bei beiden Wartungsterminen; Vorzugskonditionen für zusätzliche Reparatureinsätze.</li>
            <li>Priorisierte Bereitstellung von Ersatzmodulen und Lüftern aus einem Komponentenpool.</li>
            <li>Reaktion werktags innerhalb von 24 Stunden bei Totalausfall und 48 Stunden bei Teilausfall.</li>
            <li>Unbegrenzter Telefon- und Remote-Support Montag bis Freitag, 08:00 bis 17:00 Uhr, mit festem Ansprechpartner.</li>
          </ul>
          <p className="mt-4 text-sm text-muted-foreground">Zwölf Monate Laufzeit, Verlängerung um jeweils zwölf Monate, drei Monate Kündigungsfrist. Zusätzliche Arbeiten und Ersatzteile sind nicht automatisch eingeschlossen. Preise auf Anfrage.</p>
          <Button asChild className="mt-6 h-auto whitespace-normal"><Link to="/projektanfrage">LED-Wartungsvertrag anfragen <ArrowRight className="ml-2 h-4 w-4 shrink-0" /></Link></Button>
        </div>
      </div>
      <p className="mt-8 text-sm text-muted-foreground">Reaktionszeit ist keine garantierte Reparaturzeit. Kontinuierliches Monitoring bedeutet keinen durchgehend besetzten Support. Über <a href="https://www.slt-rental.de" target="_blank" rel="noopener noreferrer" className="text-primary underline">SLT Rental ↗</a> koordinieren wir Technik und Höhenzugang aus unserer Unternehmensgruppe.</p>
      <div className="flex flex-col sm:flex-row gap-3 mt-6">
        <Button asChild variant="outline" className="h-auto whitespace-normal"><Link to="/news/outdoor-led-wartung-servicekonzept">LED-Wartung: Prüfliste & Monitoring <ArrowRight className="ml-2 h-4 w-4 shrink-0" /></Link></Button>
        <Button asChild variant="outline" className="h-auto whitespace-normal"><Link to="/projekte/knauber-outdoor-led-wartung-bonn">Knauber-Projektreferenz ansehen <ArrowRight className="ml-2 h-4 w-4 shrink-0" /></Link></Button>
      </div>
    </div>
  </section>;
}