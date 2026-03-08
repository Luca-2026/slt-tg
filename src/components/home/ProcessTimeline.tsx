import { useEffect, useRef, useState } from "react";
import { MessageSquare, Search, FileCheck, Wrench, HeartHandshake } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    label: "Schritt 1",
    title: "Bedarf klären",
    description: "Im Erstgespräch analysieren wir Ihre Anforderungen, Nutzungsszenarien und Rahmenbedingungen. Vertrauen ist die Basis – daher nehmen wir uns Zeit, um Ihre Ziele zu verstehen.",
  },
  {
    icon: Search,
    number: "02",
    label: "Schritt 2",
    title: "Konzept entwickeln",
    description: "Wir erstellen ein maßgeschneidertes Konzept mit Testsystemen und Wirtschaftlichkeitsbetrachtung. So haben Sie vor der Umsetzung vollständige Transparenz über Kosten und Nutzen.",
  },
  {
    icon: FileCheck,
    number: "03",
    label: "Schritt 3",
    title: "Ausschreibung begleiten",
    description: "Herstellerneutrale Leistungsverzeichnisse und fundierte Vergabeempfehlungen sorgen für vergleichbare Angebote und eine objektive Entscheidungsgrundlage.",
  },
  {
    icon: Wrench,
    number: "04",
    label: "Schritt 4",
    title: "Integration umsetzen",
    description: "Koordination der Umsetzung, Qualitätssicherung und nahtlose IT-Integration. Wir halten Sie über den Fortschritt transparent auf dem Laufenden.",
  },
  {
    icon: HeartHandshake,
    number: "05",
    label: "Schritt 5",
    title: "Betrieb sichern",
    description: "Proaktives Monitoring, Support und kontinuierliche Optimierung als Managed Service. Wir schließen erst ab, wenn Sie vollends zufrieden sind.",
  },
];

function useStepVisibility() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const [visible, setVisible] = useState<boolean[]>(new Array(steps.length).fill(false));

  useEffect(() => {
    const observers = refs.current.map((ref, index) => {
      if (!ref) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible((prev) => {
              const next = [...prev];
              next[index] = true;
              return next;
            });
          }
        },
        { threshold: 0.3 }
      );
      observer.observe(ref);
      return observer;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return { refs, visible };
}

export function ProcessTimeline() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { refs, visible } = useStepVisibility();

  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="section-container">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 scroll-hidden-blur ${
            headerVisible ? "scroll-visible-blur" : ""
          }`}
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-primary/10 text-primary rounded-full">
            Projektablauf
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            So arbeiten wir zusammen
          </h2>
          <p className="text-lg text-muted-foreground">
            Ein strukturierter Prozess für erfolgreiche Projekte – von der ersten Idee
            bis zum laufenden Betrieb.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 lg:left-8 top-0 bottom-0 w-0.5 bg-border" />
          {/* Animated fill line */}
          <div
            className="absolute left-6 lg:left-8 top-0 w-0.5 bg-primary transition-all duration-1000 ease-out"
            style={{
              height: `${(visible.filter(Boolean).length / steps.length) * 100}%`,
            }}
          />

          <div className="space-y-12 lg:space-y-16">
            {steps.map((step, index) => (
              <div
                key={step.number}
                ref={(el) => { refs.current[index] = el; }}
                className={`relative pl-16 lg:pl-20 transition-all duration-700 ease-out ${
                  visible[index]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                {/* Circle on timeline */}
                <div
                  className={`absolute left-0 top-0 w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center z-10 transition-all duration-500 ${
                    visible[index]
                      ? "bg-primary scale-100"
                      : "bg-muted scale-75"
                  }`}
                >
                  <step.icon className={`h-5 w-5 lg:h-6 lg:w-6 transition-colors duration-500 ${
                    visible[index] ? "text-primary-foreground" : "text-muted-foreground"
                  }`} />
                </div>

                {/* Content */}
                <div>
                  <span className={`inline-block text-xs font-semibold uppercase tracking-wider mb-1 transition-colors duration-500 ${
                    visible[index] ? "text-primary" : "text-muted-foreground"
                  }`}>
                    {step.label}
                  </span>
                  <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
