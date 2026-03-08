import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import introTeam from "@/assets/intro-team.jpg";
import introRakete from "@/assets/intro-rakete.png";
import introLogo from "@/assets/intro-logo.png";

function AnimatedBlock({
  children,
  className,
  direction = "up",
}: {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "left" | "right";
}) {
  const { ref, isVisible } = useScrollAnimation({ rootMargin: "0px 0px -80px 0px" });

  const hiddenTransform = {
    up: "translate-y-12",
    left: "-translate-x-12",
    right: "translate-x-12",
  }[direction];

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]",
        isVisible ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${hiddenTransform}`,
        className
      )}
    >
      {children}
    </div>
  );
}

function ImageCard({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <div className={cn("relative group overflow-hidden rounded-2xl shadow-xl", className)}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      {/* Subtle shine overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}

export function IntroSection() {
  return (
    <section className="py-20 lg:py-28 overflow-hidden">
      <div className="section-container space-y-28 lg:space-y-40">

        {/* Block 1: Das sind wir — Image right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <AnimatedBlock direction="left">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
              Digital natives mit einer Passion für Technik
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Das sind wir
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8">
              Ihr Partner zum Durchstarten in die Zukunft der digitalen Zusammenarbeit!
              Seit 2016 stehen wir unseren Kunden aller Branchen und Größen in Deutschland 
              sowie dem europäischen Ausland als Partner zur Seite und begleiten Sie 
              Schritt für Schritt bei der Digitalisierung Ihrer Konferenzräume &amp; Meeting Spaces.
            </p>
            <Button asChild variant="outline" size="lg" className="group/btn">
              <Link to="/ueber-uns">
                Lerne uns kennen
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </Link>
            </Button>
          </AnimatedBlock>

          <AnimatedBlock direction="right">
            <ImageCard
              src={introTeam}
              alt="Das SLT Team bei der Arbeit"
              className="aspect-[3/2]"
            />
          </AnimatedBlock>
        </div>

        {/* Block 2: Unsere Mission — Image left */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <AnimatedBlock direction="left" className="order-2 lg:order-1">
            <ImageCard
              src={introRakete}
              alt="SLT Rakete – Ihr Partner zum Durchstarten"
              className="aspect-[16/9]"
            />
          </AnimatedBlock>

          <AnimatedBlock direction="right" className="order-1 lg:order-2">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
              Einfach und gut funktionierende hybride Zusammenarbeit.
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Das ist unsere Mission
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8">
              SLT steht für funktionale, leicht zu bedienende Audio-Visuelle und IT-Komplettlösungen, 
              bis hin zu individuellem Signalmanagement und Automatisierungslösungen. 
              Wir bringen Ihren Konferenzraum auf die nächste Stufe!
            </p>
            <Button asChild variant="outline" size="lg" className="group/btn">
              <Link to="/leistungen">
                Unsere Leistungen
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </Link>
            </Button>
          </AnimatedBlock>
        </div>

        {/* Block 3: Das zeichnet uns aus — Image right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <AnimatedBlock direction="left">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
              Passion für Videokonferenzen.
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
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

          <AnimatedBlock direction="right">
            <ImageCard
              src={introLogo}
              alt="SLT Technology Group Logo"
              className="aspect-[16/9]"
            />
          </AnimatedBlock>
        </div>

      </div>
    </section>
  );
}
