import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    name: "Thomas Döbber-Rüther",
    position: "Geschäftsführer",
    company: "Rheinhotel Dreesen GmbH",
    rating: 5,
    text: "Wir haben die Firma SLT Technology Group als zuverlässigen Partner im Bereich der Neuausstattung unserer Tagungsräume erlebt. Schnelle Abwicklung, kompetente Monteure und ein insgesamt reibungsloser Ablauf! Vielen Dank und gerne wieder!",
    avatar: "/assets/testimonials/thomas.png",
  },
  {
    name: "Apostolos Parashos",
    position: "Geschäftsführer",
    company: "Laki's Gastro GmbH, Düsseldorf",
    rating: 5,
    text: "SLT hat unseren Gastronomie- und Eventbereich mit modernster LED-Beleuchtungstechnik, einer durchdachten Beschallungslösung, mehreren Digital-Signage Displays und einem leistungsfähigen Gäste-WIFI ausgestattet. Besonders großartig ist die ortsunabhängige Steuerung aller Komponenten über ein Tablet!",
    avatar: "/assets/testimonials/lakis.jpg",
  },
  {
    name: "André Perthel",
    position: "Geschäftsführer",
    company: "Ma2Me2 GmbH, Berlin",
    rating: 5,
    text: "Wir arbeiten bereits seit mehreren Jahren partnerschaftlich mit SLT im Bereich der Netzwerktechnik und der Planung von Videokonferenzlösungen zusammen. Die Zusammenarbeit zeichnet sich durch unkomplizierte Kommunikation und einer schnellen, stets professionellen Ausführung aus.",
  },
];

export const TestimonialsSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();
  const { ref: trustRef, isVisible: trustVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={headerRef}
          className={`text-center mb-12 scroll-hidden-blur ${
            headerVisible ? "scroll-visible-blur" : ""
          }`}
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-primary/10 text-primary rounded-full">
            Referenzen
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Das sagen unsere Kunden
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Erfahren Sie, wie Unternehmen von professioneller AV-Integration profitieren
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className={`bg-card border-border hover:shadow-lg transition-shadow duration-300 relative overflow-hidden scroll-hidden-right ${
                cardsVisible ? "scroll-visible-x" : ""
              }`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-6">
                <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/10" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div className="border-t border-border pt-4 flex items-center gap-3">
                  {testimonial.avatar && (
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover grayscale"
                    />
                  )}
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                    <p className="text-sm text-primary">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div 
          ref={trustRef}
          className={`mt-12 text-center scroll-hidden-scale ${
            trustVisible ? "scroll-visible-scale" : ""
          }`}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-card rounded-full border border-border">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              25+ zufriedene Kunden vertrauen auf SLT
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
