import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCountUp } from "@/hooks/useCountUp";
import { useState, useRef, useCallback } from "react";
import heroImage from "@/assets/hero-konferenzraum.jpg";

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

const initialHotspots = [
  {
    id: "display",
    label: "Displays & Visualisierung",
    href: "/technologien#displays",
    top: 33,
    left: 38,
  },
  {
    id: "kamera",
    label: "Videokonferenzsysteme",
    href: "/technologien#videokonferenz",
    top: 20,
    left: 38,
  },
  {
    id: "steuerung",
    label: "Mediensteuerung",
    href: "/technologien#steuerung",
    top: 68,
    left: 33,
  },
  {
    id: "audio",
    label: "Audiotechnik",
    href: "/technologien#audio",
    top: 58,
    left: 24,
  },
  {
    id: "sensor",
    label: "Videoüberwachung & Sicherheit",
    href: "/technologien#videoueberwachung",
    top: 23,
    left: 49,
  },
];

// Set to true to enable drag-to-position mode (dev only)
const DEV_MODE = true;

export function HeroSection() {
  const [hotspots, setHotspots] = useState(initialHotspots);
  const containerRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef<string | null>(null);

  const handleMouseDown = useCallback((e: React.MouseEvent, id: string) => {
    if (!DEV_MODE) return;
    e.preventDefault();
    e.stopPropagation();
    draggingRef.current = id;

    const handleMouseMove = (ev: MouseEvent) => {
      if (!containerRef.current || !draggingRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const top = Math.max(0, Math.min(100, ((ev.clientY - rect.top) / rect.height) * 100));
      const left = Math.max(0, Math.min(100, ((ev.clientX - rect.left) / rect.width) * 100));
      setHotspots(prev =>
        prev.map(h => h.id === draggingRef.current ? { ...h, top: Math.round(top * 10) / 10, left: Math.round(left * 10) / 10 } : h)
      );
    };

    const handleMouseUp = () => {
      draggingRef.current = null;
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      // Log current positions for easy copy-paste
      console.log("=== HOTSPOT POSITIONS ===");
      setHotspots(prev => {
        prev.forEach(h => console.log(`${h.id}: top=${h.top}%, left=${h.left}%`));
        return prev;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden -mt-24 lg:-mt-28">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Moderner Konferenzraum mit professioneller AV-Technik von SLT Technology Group"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-[#0a2a42]/90 via-[#0a2a42]/60 to-transparent" />
      </div>

      {/* Hotspots on devices */}
      <div ref={containerRef} className="absolute inset-0 z-10 hidden md:block">
        {hotspots.map((spot) => {
          const inner = (
            <>
              {/* Gentle pulsating ring */}
              <span className="absolute -inset-2 rounded-full bg-accent/15 animate-[pulse_3s_ease-in-out_infinite]" />
              {/* Dot */}
              <span className="relative block w-2.5 h-2.5 rounded-full bg-accent border border-accent/80 shadow-[0_0_8px_hsl(var(--accent)/0.5)]
                transition-transform group-hover:scale-150" />
              {/* Tooltip */}
              <span className="absolute left-5 top-1/2 -translate-y-1/2 whitespace-nowrap bg-background/95 backdrop-blur-sm text-foreground text-xs font-medium px-3 py-1.5 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-border">
                {spot.label}
              </span>
              {/* Dev mode label */}
              {DEV_MODE && (
                <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[9px] text-accent bg-black/70 px-1 rounded whitespace-nowrap pointer-events-none">
                  {spot.id} ({spot.left}%, {spot.top}%)
                </span>
              )}
            </>
          );

          if (DEV_MODE) {
            return (
              <div
                key={spot.id}
                className="group absolute cursor-grab active:cursor-grabbing"
                style={{ top: `${spot.top}%`, left: `${spot.left}%` }}
                onMouseDown={(e) => handleMouseDown(e, spot.id)}
              >
                {inner}
              </div>
            );
          }

          return (
            <Link
              key={spot.id}
              to={spot.href}
              className="group absolute"
              style={{ top: `${spot.top}%`, left: `${spot.left}%` }}
              title={spot.label}
            >
              {inner}
            </Link>
          );
        })}
      </div>

      {/* Content - Right aligned */}
      <div className="section-container relative z-20 py-8 sm:py-12">
        <div className="ml-auto max-w-xl lg:max-w-2xl text-right">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/15 border border-accent/25 text-accent text-sm font-medium mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-accent animate-[pulse_3s_ease-in-out_infinite]" />
            Installation & Integration von AV- & IT-Lösungen
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 animate-fade-in-up text-white">
            <span className="text-primary">your digital</span>
            <br />
            <span className="text-accent">future.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-white/80 max-w-lg ml-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Ihr Partner für die technische Ausstattung von Konferenz- & Meetingräumen 
            sowie IT-Infrastruktur. Von der Planung über die Installation bis zum 
            laufenden Betrieb – alles aus einer Hand.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Button asChild size="lg" className="btn-glow text-base px-8">
              <Link to="/kontakt">
                Projekt anfragen
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base px-8 border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white">
              <Link to="/projekte">
                <Play className="mr-2 h-5 w-5" />
                Referenzen ansehen
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-lg ml-auto mt-16 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <CountUpStat end={32} suffix="+" label="Projekte" />
            <CountUpStat end={25} suffix="+" label="Zufriedene Kunden" />
            <CountUpStat end={8} suffix="+" label="Jahre Erfahrung" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-accent" />
        </div>
      </div>
    </section>
  );
}
