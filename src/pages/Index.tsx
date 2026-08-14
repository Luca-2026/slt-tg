import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { HeroSection } from "@/components/home/HeroSection";
import { IntroSection } from "@/components/home/IntroSection";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { ReferencesTeaser } from "@/components/home/ReferencesTeaser";
import { ClientLogosSlider } from "@/components/home/ClientLogosSlider";

import { PartnersSection } from "@/components/home/PartnersSection";
import { FAQSection } from "@/components/home/FAQSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <SEOHead
        title="Konferenzraum-Ausstattung & AV-Systemhaus NRW"
        description="AV-Systemhaus für Konferenzraum-Ausstattung, Videokonferenz und Digital Signage: Fachplanung, Rollout und Service nach ITIL v4. Krefeld & Bonn, NRW-weit."
        keywords="AV-Systemintegration Enterprise, Konferenzraum Rollout NRW, Boardroom Integration, Microsoft Teams Rooms Integrator, Crestron Partner NRW, Q-SYS zertifiziert, Managed AV Services, Multi-Site AV Rollout, Enterprise Medientechnik Krefeld Bonn, Servicepartner Outdoor-LED, Wartung LED-Werbeanlage"

        canonical="/"
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "SLT Technology Group",
            "url": "https://www.slt-tg.de",
            "description": "Ihr Partner für Installation, Integration und Betrieb von AV- & IT-Lösungen in NRW und deutschlandweit.",
            "publisher": {
              "@type": "Organization",
              "name": "SLT Technology Group GmbH & Co. KG",
              "url": "https://www.slt-tg.de",
              "logo": "https://www.slt-tg.de/favicon.png"
            },
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.slt-tg.de/?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Wartung und Service für Outdoor-LED-Werbeanlagen",
            "name": "SLT CARE LED – Wartungsvertrag für Outdoor-LED-Werbeanlagen",
            "description": "Servicepartner für Outdoor-LED-Werbeanlagen in NRW: 2× jährliche Vor-Ort-Inspektion & Reinigung, Modulpool, garantierte Reaktionszeiten (24 h Totalausfall / 48 h Teilausfall), Remote-Support und eigene Hubarbeitsbühnen-Logistik. Alternativ flexibler On-Demand-Service.",
            "provider": {
              "@type": "Organization",
              "name": "SLT Technology Group GmbH & Co. KG",
              "url": "https://www.slt-tg.de",
              "logo": "https://www.slt-tg.de/favicon.png",
              "address": [
                { "@type": "PostalAddress", "streetAddress": "Anrather Straße 291", "postalCode": "47807", "addressLocality": "Krefeld", "addressCountry": "DE" },
                { "@type": "PostalAddress", "streetAddress": "Drachenburgstraße 8", "postalCode": "53179", "addressLocality": "Bonn", "addressCountry": "DE" }
              ]
            },
            "areaServed": [
              { "@type": "AdministrativeArea", "name": "Nordrhein-Westfalen" },
              { "@type": "Country", "name": "Deutschland" }
            ],
            "category": "Wartung Outdoor-LED-Werbeanlagen",
            "termsOfService": "https://www.slt-tg.de/downloads/slt-wartungskonzept-outdoor-led.pdf",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Service- und Wartungskonzept Outdoor-LED-Werbeanlagen",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "name": "SLT On-Demand Service",
                  "description": "Abrufunterstützung ohne Bindung für Outdoor-LED-Werbeanlagen.",
                  "price": "115",
                  "priceCurrency": "EUR",
                  "priceSpecification": { "@type": "UnitPriceSpecification", "price": "115", "priceCurrency": "EUR", "unitText": "HUR" }
                },
                {
                  "@type": "Offer",
                  "name": "SLT CARE LED – Wartungsvertrag",
                  "description": "Planbarer Wartungsvertrag pro LED-Wand mit 2× Inspektion, Modulpool und garantierten Reaktionszeiten.",
                  "price": "1490",
                  "priceCurrency": "EUR",
                  "priceSpecification": { "@type": "UnitPriceSpecification", "price": "1490", "priceCurrency": "EUR", "unitText": "ANN", "referenceQuantity": { "@type": "QuantitativeValue", "value": 1, "unitText": "LED-Wand / Jahr" } }
                }
              ]
            }
          }
        ]}
      />
      <HeroSection />
      <IntroSection />
      <ServicesOverview />
      <ProcessTimeline />
      <ReferencesTeaser />
      <ClientLogosSlider />
      
      <PartnersSection />
      <FAQSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
