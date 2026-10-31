import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function ServicePractice() {
  return (
    <section className="py-12 lg:py-16 bg-muted/30" id="betriebspraxis">
      <div className="section-container max-w-5xl">
        <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">Was Sie für einen verlässlichen Betrieb vorbereiten sollten</h2>
        <ol className="list-decimal pl-5 space-y-4 text-muted-foreground">
          <li><strong className="text-foreground">Bestand erfassen:</strong> Raum- oder Anlagen-ID, Standort, Hersteller, Modell, Seriennummer, Firmware und zuständige IT-Ansprechperson in einem Anlagenverzeichnis festhalten.</li>
          <li><strong className="text-foreground">Störungen nachvollziehbar melden:</strong> Zeitpunkt, betroffene Funktion, Fehlermeldung, Foto und letzte Änderung angeben. Bei Konferenzräumen Kamera, Mikrofon, Lautsprecher, Bildübertragung und Plattform getrennt prüfen.</li>
          <li><strong className="text-foreground">Änderungen absichern:</strong> Vor Updates Konfiguration sichern, soweit der Hersteller dies unterstützt; Kompatibilität prüfen und mit der IT ein Wartungsfenster samt Rückfallplan vereinbaren. Danach ein Testmeeting mit Bild, Ton und Inhaltsfreigabe durchführen.</li>
          <li><strong className="text-foreground">Service messbar vereinbaren:</strong> Servicezeiten, Prioritäten und Eskalationskontakte schriftlich festlegen. Reaktionszeit ist nicht Wiederherstellungszeit; kontinuierliches Monitoring bedeutet nicht automatisch durchgehend besetzten Support.</li>
        </ol>
        <div className="mt-8 border-t border-border pt-6">
          <h3 className="text-xl font-semibold text-foreground mb-3">Praxiswissen für Outdoor-LED-Anlagen</h3>
          <p className="text-muted-foreground mb-4">Lüftung und Module prüfen, Störungen dokumentieren und Monitoring vorbereiten: mit realen Einblicken in die Outdoor-LED-Wartung bei Knauber in Bonn.</p>
          <Button asChild variant="outline" className="h-auto whitespace-normal text-left">
            <Link to="/news/outdoor-led-wartung-servicekonzept">Outdoor-LED-Wartung: Praxisbeitrag lesen <ArrowRight className="ml-2 h-4 w-4 shrink-0" /></Link>
          </Button>
          <p className="mt-4"><Link to="/projekte/knauber-outdoor-led-wartung-bonn" className="text-primary underline">Knauber: Outdoor-LED-Wartung in Bonn</Link></p>
        </div>
      </div>
    </section>
  );
}