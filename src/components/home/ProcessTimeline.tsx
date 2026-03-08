import { MessageSquare, Search, FileCheck, Wrench, HeartHandshake } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Bedarf klären",
    description: "Im Erstgespräch analysieren wir Ihre Anforderungen, Nutzungsszenarien und Rahmenbedingungen.",
  },
  {
    icon: Search,
    number: "02",
    title: "Konzept entwickeln",
    description: "Wir erstellen ein maßgeschneidertes Konzept mit Testsystemen und Wirtschaftlichkeitsbetrachtung.",
  },
  {
    icon: FileCheck,
    number: "03",
    title: "Ausschreibung begleiten",
    description: "Herstellerneutrale Leistungsverzeichnisse und fundierte Vergabeempfehlungen.",
  },
  {
    icon: Wrench,
    number: "04",
    title: "Integration umsetzen",
    description: "Koordination der Umsetzung, Qualitätssicherung und nahtlose IT-Integration.",
  },
  {
    icon: HeartHandshake,
    number: "05",
    title: "Betrieb sichern",
    description: "Proaktives Monitoring, Support und kontinuierliche Optimierung als Managed Service.",
  },
];

export function ProcessTimeline() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: timelineRef, isVisible: timelineVisible } = useScrollAnimation();

  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="section-container">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 scroll-hidden-blur ${
            headerVisible ? "scroll-visible-blur" : ""
          }`}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            So arbeiten wir zusammen
          </h2>
          <p className="text-lg text-muted-foreground">
            Ein strukturierter Prozess für erfolgreiche Projekte – von der ersten Idee 
            bis zum laufenden Betrieb.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative" ref={timelineRef}>
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-border" />
          
          <div className="grid lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`relative flex flex-col items-center text-center scroll-hidden ${
                  timelineVisible ? "scroll-visible" : ""
                }`}
                style={{ transitionDelay: `${index * 0.12}s` }}
              >
                {/* Icon Circle with Number */}
                <div className="relative z-10 w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-6">
                  <step.icon className="h-7 w-7 text-primary-foreground" />
                  {/* Number Badge */}
                  <span className="absolute -top-2 -right-2 w-7 h-7 flex items-center justify-center text-xs font-bold text-primary-foreground bg-accent rounded-full border-2 border-background">
                    {step.number}
                  </span>
                </div>

                {/* Content - Fixed Height */}
                <div className="flex flex-col flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
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
