import { useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqs = [
  {
    question: "Welche Leistungen bietet SLT an?",
    answer:
      "Wir bieten die komplette Bandbreite: Von der Bedarfsanalyse und Planung über die professionelle Installation und Integration bis hin zum laufenden Betrieb und Support. Unser Schwerpunkt liegt auf AV- & IT-Lösungen, Konferenz- und Medientechnik, IT-Netzwerktechnik, Digital Signage und Steuerungslösungen.",
  },
  {
    question: "In welchem Gebiet sind Sie tätig?",
    answer:
      "Wir sind deutschlandweit und im europäischen Ausland tätig. Unser Hauptsitz ist in Krefeld, NRW. Wir betreuen Kunden aller Branchen und Größen.",
  },
  {
    question: "Was kostet eine erste Beratung?",
    answer:
      "Das Erstgespräch zur Bedarfsanalyse ist kostenfrei. Erst wenn wir gemeinsam entscheiden, ein Projekt zu starten, erstellen wir ein transparentes Angebot ohne versteckte Kosten.",
  },
  {
    question: "Wie lange dauert ein typisches Projekt?",
    answer:
      "Die Dauer hängt vom Projektumfang ab. Ein einzelner Konferenzraum kann in 4-8 Wochen umgesetzt werden, größere Rollouts benötigen entsprechend mehr Zeit. Im Erstgespräch erstellen wir einen realistischen Zeitplan.",
  },
  {
    question: "Bieten Sie auch After-Sales Support?",
    answer:
      "Ja, unser Service Desk steht Ihnen nach der Installation zur Verfügung. Wir bieten proaktives Monitoring, regelmäßige Wartung, Updates und schnellen Support bei Problemen – damit Ihre Technik zuverlässig läuft.",
  },
  {
    question: "Mit welchen Herstellern arbeiten Sie zusammen?",
    answer:
      "Wir arbeiten mit führenden Herstellern wie Crestron, Barco, Shure, Sennheiser, Samsung, iiyama, Nureva, Huddly und vielen weiteren zusammen. Wir beraten bedarfsgerecht und empfehlen die optimale Lösung für Ihre Anforderungen.",
  },
];

const generateFAQSchema = () => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer,
    },
  })),
});

export function FAQSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: accordionRef, isVisible: accordionVisible } = useScrollAnimation();

  useEffect(() => {
    const existingScript = document.querySelector('script[data-faq-schema]');
    if (existingScript) existingScript.remove();
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-faq-schema", "true");
    script.textContent = JSON.stringify(generateFAQSchema());
    document.head.appendChild(script);

    return () => {
      const script = document.querySelector('script[data-faq-schema]');
      if (script) script.remove();
    };
  }, []);

  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="section-container">
        <div 
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 scroll-hidden-blur ${
            headerVisible ? "scroll-visible-blur" : ""
          }`}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Häufige Fragen
          </h2>
          <p className="text-lg text-muted-foreground">
            Antworten auf die wichtigsten Fragen zu unserer Arbeitsweise und unseren Leistungen.
          </p>
        </div>

        <div ref={accordionRef} className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className={`bg-background border border-border rounded-lg px-6 data-[state=open]:border-primary/50 scroll-hidden ${
                  accordionVisible ? "scroll-visible" : ""
                }`}
                style={{ transitionDelay: `${index * 0.08}s` }}
              >
                <AccordionTrigger className="text-left hover:no-underline hover:text-primary py-5">
                  <span className="text-base font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
