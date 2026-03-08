import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

function AnimatedBlock({ children, className }: { children: React.ReactNode; className?: string }) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        className
      )}
    >
      {children}
    </div>
  );
}

export function IntroSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="section-container space-y-24 lg:space-y-32">

        {/* Block 1: Das sind wir */}
        <AnimatedBlock className="max-w-3xl mx-auto text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
            Digital natives mit einer Passion für Technik
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Das sind wir
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8">
            Ihr Partner zum Durchstarten in die Zukunft der digitalen Zusammenarbeit!
            Seit 2016 stehen wir unseren Kunden aller Branchen und Größen in Deutschland 
            sowie dem europäischen Ausland als Partner zur Seite und begleiten Sie 
            Schritt für Schritt bei der Digitalisierung Ihrer Konferenzräume &amp; Meeting Spaces.
          </p>
          <Button asChild variant="outline" size="lg">
            <Link to="/ueber-uns">
              Lerne uns kennen
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </AnimatedBlock>

        {/* Block 2: Unsere Mission */}
        <AnimatedBlock className="max-w-3xl mx-auto text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
            Einfach und gut funktionierende hybride Zusammenarbeit.
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Das ist unsere Mission
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8">
            SLT steht für funktionale, leicht zu bedienende Audio-Visuelle und IT-Komplettlösungen, 
            bis hin zu individuellem Signalmanagement und Automatisierungslösungen. 
            Wir bringen Ihren Konferenzraum auf die nächste Stufe!
          </p>
          <Button asChild variant="outline" size="lg">
            <Link to="/leistungen">
              Unsere Leistungen
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </AnimatedBlock>

        {/* Block 3: Das zeichnet uns aus */}
        <AnimatedBlock className="max-w-3xl mx-auto text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
            Passion für Videokonferenzen.
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Das zeichnet uns aus
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Als inhabergeführtes Unternehmen legen wir besonderen Wert auf bedarfsgerechte Lösungen, 
            die spürbare Mehrwerte für unsere Kunden erzielen, dabei bestehende Prozesse optimieren 
            und somit die Zusammenarbeit unserer Kunden nachhaltig steigern. Hierbei stehen wir 
            unseren Kunden stets partnerschaftlich zur Seite – zum Beispiel durch unseren 
            ausgezeichneten After-Sales Support und unseren Service Desk.
          </p>
        </AnimatedBlock>

      </div>
    </section>
  );
}
