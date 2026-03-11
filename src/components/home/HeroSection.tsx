import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCountUp } from "@/hooks/useCountUp";
const heroImage = "/assets/hero-konferenzraum.jpg";

function CountUpStat({ end, suffix, label, light = false }: { end: number; suffix: string; label: string; light?: boolean }) {
  const { count, ref } = useCountUp({ end, duration: 2000 });
  
  return (
    <div className="text-center" ref={ref}>
      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white/80">
        {count}{suffix}
      </div>
      <div className="text-xs sm:text-sm mt-1 text-white/50">{label}</div>
    </div>
  );
}

const hotspots = [
  {
    id: "display",
    label: "Displays & Visualisierung",
    href: "/technologien#displays",
    top: 30,
    left: 35,
  },
  {
    id: "kamera",
    label: "Videokonferenzsysteme",
    href: "/technologien#videokonferenz",
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
    href: "/technologien#it-infrastruktur",
    top: 18,
    left: 46,
  },
];

export function HeroSection() {
  return (
    <>
      {/* Single SEO H1 – visually hidden, keyword-optimized */}
      <h1 className="sr-only">
        Konferenz- & Medientechnik Systemhaus – Installation, Integration & Betrieb | SLT Technology Group Krefeld
      </h1>

      {/* ===== MOBILE HERO (below sm) ===== */}
      <section className="sm:hidden -mt-20">
        <div className="min-h-[100svh] flex flex-col justify-between bg-gradient-to-br from-primary/10 via-background to-accent/5 px-4 pt-24 pb-6">
          {/* Top content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-medium mb-5 animate-fade-in">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-[pulse_3s_ease-in-out_infinite]" />
              AV- & IT-Lösungen
            </div>

            {/* Headline – decorative, not h1 */}
            <p className="text-4xl font-bold leading-[1.1] mb-4 animate-fade-in-up" style={{ textShadow: "0 2px 20px hsl(200 100% 25% / 0.4)" }} role="presentation">
              <span className="text-primary">your digital</span>
              <br />
              <span className="text-primary">future.</span>
            </p>

            {/* Subheadline */}
            <p className="text-sm text-muted-foreground mb-8 leading-relaxed max-w-xs animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Ihr Partner für Konferenz- & Meetingräume sowie IT-Infrastruktur – alles aus einer Hand.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <Button asChild size="lg" className="text-sm bg-accent/15 border border-accent/40 text-accent hover:bg-accent/25 hover:text-accent">
                <Link to="/projektanfrage">
                  Projekt anfragen
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" className="text-sm bg-accent/15 border border-accent/40 text-accent hover:bg-accent/25 hover:text-accent">
                <Link to="/projekte">
                  Referenzen
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="rounded-xl overflow-hidden my-6 animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
            <img
              src={heroImage}
              alt="Moderner Konferenzraum mit professioneller AV-Technik"
              className="w-full h-40 object-cover object-center rounded-xl"
              fetchPriority="high"
              loading="eager"
            />
          </div>

          {/* Stats - pushed to bottom */}
          <div className="grid grid-cols-3 gap-4 rounded-xl bg-primary/90 p-6 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <CountUpStat end={400} suffix="+" label="Projekte" />
            <CountUpStat end={300} suffix="+" label="Kunden" />
            <CountUpStat end={10} suffix="+" label="Jahre" />
          </div>
        </div>
      </section>

      {/* ===== TABLET HERO (sm to lg) ===== */}
      <section className="relative hidden sm:flex lg:hidden items-center min-h-[100svh] overflow-hidden -mt-20">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Moderner Konferenzraum mit professioneller AV-Technik von SLT Technology Group"
            className="w-full h-full object-cover object-[50%_center]"
            fetchPriority="high"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a2a42]/90 via-[#0a2a42]/70 to-[#0a2a42]/30" />
        </div>

        <div className="section-container relative z-20 py-16">
          <div className="max-w-md">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/15 border border-accent/25 text-accent text-xs font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-[pulse_3s_ease-in-out_infinite]" />
              Installation & Integration von AV- & IT-Lösungen
            </div>

            <p className="text-5xl font-bold leading-[1.1] mb-4 text-white" style={{ textShadow: "0 2px 30px hsl(33 100% 50% / 0.3)" }} role="presentation">
              <span className="text-accent">your digital</span>
              <br />
              <span className="text-accent">future.</span>
            </p>

            <p className="text-base text-white/80 mb-8 leading-relaxed max-w-sm">
              Ihr Partner für Konferenz- & Meetingräume sowie IT-Infrastruktur. 
              Von der Planung bis zum Betrieb – alles aus einer Hand.
            </p>

            <div className="flex gap-3 mb-10">
              <Button asChild size="lg" className="text-base bg-accent/15 border border-accent/40 text-accent hover:bg-accent/25 hover:text-accent">
                <Link to="/projektanfrage">
                  Projekt anfragen
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" className="text-base bg-accent/15 border border-accent/40 text-accent hover:bg-accent/25 hover:text-accent">
                <Link to="/projekte">
                  <Play className="mr-2 h-5 w-5" />
                  Referenzen
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/20">
              <CountUpStat end={400} suffix="+" label="Projekte" />
              <CountUpStat end={300} suffix="+" label="Zufriedene Kunden" />
              <CountUpStat end={10} suffix="+" label="Jahre Erfahrung" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== DESKTOP HERO (lg+) ===== */}
      <section className="relative hidden lg:flex items-center min-h-screen overflow-hidden -mt-24">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Moderner Konferenzraum mit professioneller AV-Technik von SLT Technology Group"
            className="w-full h-full object-cover object-center"
            fetchPriority="high"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-[#0a2a42]/90 via-[#0a2a42]/60 to-transparent" />
        </div>

        {/* Hotspots - Desktop only */}
        <div className="absolute inset-0 z-30 pointer-events-none">
          {hotspots.map((spot) => (
            <Link
              key={spot.id}
              to={spot.href}
              className="group absolute"
              style={{ top: `${spot.top}%`, left: `${spot.left}%`, pointerEvents: "auto" }}
              title={spot.label}
            >
              <span className="absolute -inset-2 rounded-full bg-accent/15 animate-[pulse_3s_ease-in-out_infinite]" />
              <span className="relative block w-2.5 h-2.5 rounded-full bg-accent border border-accent/80 shadow-[0_0_8px_hsl(var(--accent)/0.5)] transition-transform group-hover:scale-150" />
              <span className="absolute left-5 top-1/2 -translate-y-1/2 whitespace-nowrap bg-background/95 backdrop-blur-sm text-foreground text-xs font-medium px-3 py-1.5 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-border">
                {spot.label}
              </span>
            </Link>
          ))}
        </div>

        {/* Desktop Content - Right aligned */}
        <div className="section-container relative z-20 py-12">
          <div className="ml-auto max-w-xl lg:max-w-2xl text-right">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/15 border border-accent/25 text-accent text-sm font-medium mb-8 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-accent animate-[pulse_3s_ease-in-out_infinite]" />
              Installation & Integration von AV- & IT-Lösungen
            </div>

            <p className="text-6xl xl:text-7xl font-bold leading-tight mb-6 animate-fade-in-up" style={{ textShadow: "0 4px 40px hsl(33 100% 50% / 0.3)" }} role="presentation">
              <span className="text-accent">your digital</span>
              <br />
              <span className="text-accent">future.</span>
            </p>

            <p className="text-base sm:text-lg lg:text-xl text-white/80 max-w-sm sm:max-w-md lg:max-w-xl ml-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Medientechnische Exzellenz trifft auf IT-Kompetenz: Wir realisieren Konferenz- und Meetingräume von der Planung bis zum Betrieb – alles aus einer Hand.
            </p>

            <div className="flex items-center justify-end gap-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <Button asChild size="lg" className="text-base px-8 bg-accent/15 border border-accent/40 text-accent hover:bg-accent/25 hover:text-accent">
                <Link to="/projektanfrage">
                  Projekt anfragen
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" className="text-base px-8 bg-accent/15 border border-accent/40 text-accent hover:bg-accent/25 hover:text-accent">
                <Link to="/projekte">
                  <Play className="mr-2 h-5 w-5" />
                  Referenzen ansehen
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 max-w-lg ml-auto mt-16 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <CountUpStat end={400} suffix="+" label="Projekte" />
              <CountUpStat end={300} suffix="+" label="Zufriedene Kunden" />
              <CountUpStat end={10} suffix="+" label="Jahre Erfahrung" />
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
    </>
  );
}
