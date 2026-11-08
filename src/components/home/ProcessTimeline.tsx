import { MessageSquare, Search, FileCheck, Wrench, HeartHandshake } from "lucide-react";
import { scrollReveal, useScrollAnimation } from "@/hooks/useScrollAnimation";

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

function ProcessStep({ step, index }: { step: typeof steps[number]; index: number }) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div ref={ref} className={`relative pl-16 lg:pl-20 ${scrollReveal(isVisible)}`} style={{ transitionDelay: `${index * 0.1}s` }}>
      <div className={`absolute left-0 top-0 w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center z-10 transition-all duration-500 ${isVisible ? "bg-primary scale-100" : "bg-muted scale-75"}`}>
        <step.icon className={`h-5 w-5 lg:h-6 lg:w-6 transition-colors duration-500 ${isVisible ? "text-primary-foreground" : "text-muted-foreground"}`} />
      </div>
      <div>
        <span className={`inline-block text-xs font-semibold uppercase tracking-wider mb-1 transition-colors duration-500 ${isVisible ? "text-primary" : "text-muted-foreground"}`}>{step.label}</span>
        <h3 className="text-lg lg:text-2xl font-bold text-foreground mb-1.5 lg:mb-2">{step.title}</h3>
        <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{step.description}</p>
      </div>
    </div>
  );
}

export function ProcessTimeline() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: timelineRef, isVisible: timelineVisible } = useScrollAnimation();

  return (
    <section className="py-12 lg:py-28 bg-card">
      <div className="section-container">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-10 lg:mb-16 ${scrollReveal(headerVisible, "blur")}`}
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
        <div ref={timelineRef} className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 lg:left-8 top-0 bottom-0 w-0.5 bg-border" />
          {/* Animated fill line */}
          <div
            className="absolute left-6 lg:left-8 top-0 w-0.5 bg-primary transition-all duration-1000 ease-out"
            style={{
              height: timelineVisible ? "100%" : "0%",
            }}
          />

          <div className="space-y-8 lg:space-y-16">
            {steps.map((step, index) => <ProcessStep key={step.number} step={step} index={index} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
