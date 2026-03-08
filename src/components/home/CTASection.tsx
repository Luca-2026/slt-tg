import { Link } from "react-router-dom";
import { ArrowRight, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function CTASection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

      <div className="section-container relative z-10">
        <div 
          ref={ref}
          className={`max-w-4xl mx-auto text-center scroll-hidden-blur ${
            isVisible ? "scroll-visible-blur" : ""
          }`}
        >
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-6">
            Bereit für Ihre <span className="gradient-text">digitale Zukunft</span>?
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Wir sind immer offen für interessante Ideen, neue Kontakte und spannende Anfragen. 
            Kontaktieren Sie uns für ein unverbindliches Erstgespräch.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4 text-primary" />
              +49 (0) 2151 - 417 99 02
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4 text-primary" />
              Kostenfreies Erstgespräch
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="btn-glow text-base px-8">
              <Link to="/kontakt">
                Kontakt aufnehmen
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base px-8">
              <Link to="/projekte">
                Referenzen ansehen
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
