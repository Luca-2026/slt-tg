import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCountUp } from "@/hooks/useCountUp";
import { TypewriterText } from "@/components/home/TypewriterText";
import { useState, useEffect, useCallback, useRef } from "react";

const inspirationImages = [
  "/assets/inspirationen/gea-display.jpg",
  "/assets/inspirationen/meetingraum-display.jpg",
  "/assets/inspirationen/teams-room.jpg",
  "/assets/inspirationen/konferenzraum-byod.jpg",
  "/assets/inspirationen/dual-display.jpg",
  "/assets/inspirationen/langeoog-sunset.jpg",
  "/assets/inspirationen/langeoog-strand.jpg",
];

function InspirationSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % inspirationImages.length);
  }, []);

  useEffect(() => {
    if (isPaused || window.matchMedia("(prefers-reduced-motion: reduce)").matches || "__SLT_PRERENDER__" in window) return;
    const timer = setInterval(next, 3500);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  return (
    <div className="animate-fade-in-up h-full flex flex-col" style={{ animationDelay: "0.9s", animationFillMode: "forwards" }}>
      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1 shrink-0">Inspirationen</p>
      <div
        className="relative rounded-xl overflow-hidden flex-1 min-h-0 sm:aspect-[2/1] sm:flex-none"
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {inspirationImages.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`Inspiration ${i + 1}`}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out"
            style={{ opacity: i === current ? 1 : 0 }}
            loading={i === 0 ? "eager" : "lazy"}
          />
        ))}
        {/* Dots */}
        <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {inspirationImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                i === current ? "bg-white w-4" : "bg-white/50"
              }`}
              aria-label={`Bild ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function CountUpStat({ end, suffix, label }: { end: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp({ end, duration: 2000 });
  
  return (
    <div className="text-center" ref={ref}>
      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-hero-foreground/80">
        {count}{suffix}
      </div>
      <div className="text-xs sm:text-sm mt-1 text-hero-foreground/50">
        {label === "Zufriedene Kunden" ? <><span className="hidden sm:inline">Zufriedene </span>Kunden</> : label === "Jahre Erfahrung" ? <>Jahre<span className="hidden sm:inline"> Erfahrung</span></> : label}
      </div>
    </div>
  );
}

const hotspots = [
  {
    id: "display",
    label: "Displays & Visualisierung",
    href: "/digital-signage",
    top: 30,
    left: 35,
  },
  {
    id: "kamera",
    label: "Videokonferenzsysteme",
    href: "/videokonferenzanlage",
    top: 20,
    left: 35,
  },
  {
    id: "steuerung",
    label: "Mediensteuerung",
    href: "/technologien#steuerung",
    top: 65,
    left: 30,
  },
  {
    id: "audio",
    label: "Audiotechnik",
    href: "/technologien#audio",
    top: 45,
    left: 22,
  },
  {
    id: "accesspoint",
    label: "IT-Infrastruktur & Netzwerk",
    href: "/loesungen/it-infrastruktur-netzwerk",
    top: 18,
    left: 46,
  },
];

// Image natural aspect ratio (hero-konferenzraum.jpg)
const IMAGE_ASPECT = 16 / 9;

function HeroHotspots() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ scaleX: 1, scaleY: 1, offsetX: 0, offsetY: 0 });

  useEffect(() => {
    const calculate = () => {
      const el = containerRef.current;
      if (!el) return;
      const cw = el.clientWidth;
      const ch = el.clientHeight;
      const containerAspect = cw / ch;

      let renderW: number, renderH: number, ox: number, oy: number;
      if (containerAspect > IMAGE_ASPECT) {
        renderW = cw;
        renderH = cw / IMAGE_ASPECT;
        ox = 0;
        oy = (ch - renderH) / 2;
      } else {
        renderH = ch;
        renderW = ch * IMAGE_ASPECT;
        ox = (cw - renderW) / 2;
        oy = 0;
      }
      setOffset({ scaleX: renderW / 100, scaleY: renderH / 100, offsetX: ox, offsetY: oy });
    };

    calculate();
    window.addEventListener("resize", calculate);
    return () => window.removeEventListener("resize", calculate);
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 z-30 pointer-events-none">
      {hotspots.map((spot) => (
        <Link
          key={spot.id}
          to={spot.href}
          className="group absolute"
          style={{
            top: offset.offsetY + spot.top * offset.scaleY,
            left: offset.offsetX + spot.left * offset.scaleX,
            pointerEvents: "auto",
          }}
          title={spot.label}
          aria-label={spot.label}
        >
          <span className="absolute -inset-2 rounded-full bg-accent/15 animate-[pulse_3s_ease-in-out_infinite]" />
          <span className="relative block w-2.5 h-2.5 rounded-full bg-accent border border-accent/80 shadow-[0_0_8px_hsl(var(--accent)/0.5)] transition-transform group-hover:scale-150" />
          <span className="absolute left-5 top-1/2 -translate-y-1/2 whitespace-nowrap bg-background/95 backdrop-blur-sm text-foreground text-xs font-medium px-3 py-1.5 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-border">
            {spot.label}
          </span>
        </Link>
      ))}
    </div>
  );
}

export function HeroSection() {
  return (
    <section data-home-hero className="relative -mt-20 lg:-mt-24 sm:flex sm:items-center sm:min-h-[100svh] lg:min-h-screen overflow-hidden">
      <h1 className="sr-only">
        Konferenzraum-Ausstattung &amp; AV-Systemintegration in NRW – SLT Technology Group
      </h1>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5 sm:bg-hero">
        <picture className="hidden sm:block w-full h-full">
          <source srcSet="/assets/hero-konferenzraum.webp" type="image/webp" />
          <img src="/assets/hero-konferenzraum-opt.jpg"
            alt="Moderner Konferenzraum mit professioneller AV-Technik von SLT Technology Group"
            className="w-full h-full object-cover object-center" fetchPriority="high" loading="eager" decoding="sync" />
        </picture>
        <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-hero/90 via-hero/70 to-hero/30 lg:bg-gradient-to-l lg:from-hero/90 lg:via-hero/60 lg:to-transparent" />
      </div>
      <div className="hidden lg:block absolute inset-0"><HeroHotspots /></div>
      <div className="relative z-20 h-[100svh] flex flex-col justify-between px-5 pt-24 pb-4 sm:h-auto sm:block sm:w-full sm:max-w-7xl sm:mx-auto sm:px-6 sm:py-16 lg:max-w-none lg:mx-0 lg:absolute lg:inset-0 lg:flex lg:items-end lg:justify-center lg:pr-16 xl:pr-24 lg:pt-16 lg:pb-0">
        <div className="shrink-0 flex flex-col gap-4 sm:block sm:max-w-md lg:max-w-lg lg:w-full">
          <div className="self-start inline-flex items-center gap-2 px-3 py-1.5 lg:px-4 lg:py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs lg:text-sm font-medium sm:bg-accent/15 sm:border-accent/25 sm:mb-6 lg:mb-8 animate-fade-in">
            <span className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-accent animate-[pulse_3s_ease-in-out_infinite]" />
            <span><span className="hidden sm:inline">Installation &amp; Integration von </span>AV- &amp; IT-Lösungen</span>
          </div>
          <TypewriterText />
          <p className="text-base text-muted-foreground sm:text-hero-foreground/80 lg:text-xl leading-relaxed sm:mb-8 lg:mb-10 sm:max-w-sm lg:max-w-xl animate-fade-in-up">
            <span className="hidden sm:inline lg:whitespace-nowrap">Medientechnische Exzellenz trifft auf IT-Kompetenz:</span>
            <br className="hidden lg:block" /><span className="hidden sm:inline"> Wir realisieren </span>
            Konferenz- und Meetingräume{" "}
            von der Planung bis zum <span className="sm:hidden">laufenden </span>Betrieb – alles aus einer Hand.
            <span className="hidden sm:inline lg:hidden"> Als Ihr Systemhaus für Installation und Integration.</span><span className="hidden lg:inline"> Ihr Systemhaus in Krefeld &amp; Bonn.</span>
          </p>
          <div className="flex gap-3 sm:mb-10 lg:mb-0 lg:gap-4 animate-fade-in-up">
            <Button asChild className="text-sm sm:text-base sm:h-11 sm:px-8 bg-accent/15 border border-accent/40 text-accent hover:bg-accent/25 hover:text-accent">
              <Link to="/projektanfrage">Projekt anfragen<ArrowRight className="ml-1.5 h-4 w-4 sm:ml-2 sm:h-5 sm:w-5" /></Link>
            </Button>
            <Button asChild className="text-sm sm:text-base sm:h-11 sm:px-8 bg-accent/15 border border-accent/40 text-accent hover:bg-accent/25 hover:text-accent">
              <Link to="/projekte"><Play className="hidden sm:block mr-2 h-5 w-5" />Referenzen<span className="hidden lg:inline">&nbsp;ansehen</span><ArrowRight className="sm:hidden ml-1.5 h-4 w-4" /></Link>
            </Button>
          </div>
          <p className="hidden sm:block -mt-6 mb-10 lg:mb-0 lg:mt-6 text-sm lg:text-base text-hero-foreground/80 animate-fade-in-up">
            Laufender Betrieb gesucht?{" "}
            <Link to="/managed-services" className="font-medium text-accent underline underline-offset-4 hover:text-accent/80">Managed Services für Konferenztechnik</Link>
          </p>
        </div>
        <div className="sm:hidden flex-1 min-h-0 flex flex-col justify-center py-4"><InspirationSlider /></div>
        <div className="grid grid-cols-3 gap-3 rounded-xl bg-primary/90 p-4 shrink-0 sm:bg-transparent sm:rounded-none sm:p-0 sm:gap-6 sm:pt-6 sm:border-t sm:border-white/20 sm:max-w-md lg:max-w-lg lg:w-full lg:gap-8 lg:pt-0 lg:border-0 lg:mt-16 animate-fade-in-up">
          <CountUpStat end={305} suffix="+" label="Projekte" />
          <CountUpStat end={228} suffix="+" label="Zufriedene Kunden" />
          <CountUpStat end={10} suffix="+" label="Jahre Erfahrung" />
        </div>
      </div>
      <div className="hidden lg:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"><div className="w-1 h-2 rounded-full bg-accent" /></div>
      </div>
    </section>
  );
}
