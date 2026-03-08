import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustBar } from "@/components/home/TrustBar";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { PartnersSection } from "@/components/home/PartnersSection";
import { ReferencesTeaser } from "@/components/home/ReferencesTeaser";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
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
      <TrustBar />
      <ServicesOverview />
      <ProcessTimeline />
      <PartnersSection />
      <ReferencesTeaser />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
