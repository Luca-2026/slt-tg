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
        title="IT-Systemhaus Krefeld & Bonn – Medientechnik"
        description="SLT Technology Group – Ihr Systemhaus für Konferenztechnik, Netzwerktechnik und IT-Lösungen in Krefeld, Bonn und NRW. Installation, Integration & Betrieb."
        keywords="Systemhaus Krefeld, IT-Lösungen Krefeld, Konferenztechnik Bonn, Netzwerktechnik Krefeld, Medientechnik Integration, AV-Installation NRW, IT-Dienstleister Krefeld, IT-Dienstleister Bonn"
        canonical="/"
        structuredData={{
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
        }}
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
