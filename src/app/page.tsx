
import WelcomeSection from "@/components/WelcomeSection";
import PillarsSection from "@/components/PillarsSection";
import StatsSection from "@/components/StatsSection";
import FeaturedToolSection from "@/components/FeaturedToolSection";
import FeaturedResourcesSection from "@/components/FeaturedResourcesSection";
import WhyItMattersSection from "@/components/WhyItMattersSection";
import CTASection from "@/components/CTASection";


export default function Home() {
  return (
    <main>
      <WelcomeSection />
      <PillarsSection />
      <StatsSection />
      <FeaturedToolSection />
      <FeaturedResourcesSection />
      <WhyItMattersSection />
      <CTASection />
    </main>
  );
}