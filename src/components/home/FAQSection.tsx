import { homeFaqs as faqs } from "@/data/pageFaqs";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { scrollReveal, useScrollAnimation } from "@/hooks/useScrollAnimation";



// The visible UI and schema catalogue consume pageFaqs together.

export function FAQSection() {
  const [openItem, setOpenItem] = useState("");
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: accordionRef, isVisible: accordionVisible } = useScrollAnimation();

  return (
    <section className="py-12 lg:py-28 bg-card">
      <div className="section-container">
        <div 
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-10 lg:mb-16 ${scrollReveal(headerVisible, "blur")}`}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Häufige Fragen
          </h2>
          <p className="text-lg text-muted-foreground">
            Antworten auf die wichtigsten Fragen zu unserer Arbeitsweise und unseren Leistungen.
          </p>
        </div>

        <div ref={accordionRef} className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible value={openItem} onValueChange={setOpenItem} className="rounded-lg border border-border bg-background px-4 sm:border-0 sm:bg-transparent sm:px-0 sm:space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className={`border-b border-border last:border-b-0 sm:bg-background sm:border sm:rounded-lg sm:px-6 sm:last:border-b data-[state=open]:border-primary/50 ${scrollReveal(accordionVisible)}`}
                style={{ transitionDelay: `${index * 0.08}s` }}
              >
                <AccordionTrigger className="text-left hover:no-underline hover:text-primary py-5">
                  <span className="text-base font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent forceMount hidden={openItem !== `item-${index}`} className="text-muted-foreground pb-5">
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
