import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { HeroSection } from "@/components/home/HeroSection";
import { IntroSection } from "@/components/home/IntroSection";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { ReferencesTeaser } from "@/components/home/ReferencesTeaser";
import { ClientLogosSlider } from "@/components/home/ClientLogosSlider";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { PartnersSection } from "@/components/home/PartnersSection";
import { FAQSection } from "@/components/home/FAQSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <SEOHead
        title="Installation & Integration von AV- & IT-Lösungen"
        description="SLT Technology Group – Ihr Partner für Installation, Integration und Betrieb von AV- & IT-Lösungen. Konferenz- und Medientechnik, IT-Infrastruktur – alles aus einer Hand."
        keywords="AV Installation, IT-Lösungen, Medientechnik Integration, IT-Infrastruktur, Konferenztechnik Krefeld, Videokonferenz Installation NRW"
        canonical="/"
      />
      <HeroSection />
      <IntroSection />
      <ServicesOverview />
      <ProcessTimeline />
      <ReferencesTeaser />
      <ClientLogosSlider />
      <TestimonialsSection />
      <PartnersSection />
      <FAQSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
