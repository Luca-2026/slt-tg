import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCountUp } from "@/hooks/useCountUp";

function CountUpStat({ end, suffix, label }: { end: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp({ end, duration: 2000 });
  
  return (
    <div className="text-center" ref={ref}>
      <div className="text-3xl lg:text-4xl font-bold text-primary">
        {count}{suffix}
      </div>
      <div className="text-sm text-muted-foreground mt-1">{label}</div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden -mt-16 lg:-mt-20 pt-24 lg:pt-28">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2306b6d4%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />
      
      <div className="section-container relative z-10 py-8 sm:py-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Installation & Integration von AV-Lösungen
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-6 animate-fade-in-up">
            <span className="gradient-text">your digital future.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Ihr Partner für die technische Ausstattung von Konferenz- & Meetingräumen. 
            Von der Planung über die Installation bis zum laufenden Betrieb – 
            alles aus einer Hand.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Button asChild size="lg" className="btn-glow text-base px-8">
              <Link to="/kontakt">
                Projekt anfragen
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base px-8">
              <Link to="/projekte">
                <Play className="mr-2 h-5 w-5" />
                Referenzen ansehen
              </Link>
            </Button>
          </div>

          {/* Stats with Count Up */}
          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto mt-16 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <CountUpStat end={32} suffix="+" label="Projekte" />
            <CountUpStat end={25} suffix="+" label="Zufriedene Kunden" />
            <CountUpStat end={8} suffix="+" label="Jahre Erfahrung" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-primary" />
        </div>
      </div>
    </section>
  );
}
