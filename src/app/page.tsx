import type { Metadata } from "next";
import WelcomeSection from "@/components/WelcomeSection";
import PillarsSection from "@/components/PillarsSection";
import StatsSection from "@/components/StatsSection";
import FeaturedToolSection from "@/components/FeaturedToolSection";
import FeaturedResourcesSection from "@/components/FeaturedResourcesSection";
import WhyItMattersSection from "@/components/WhyItMattersSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: {
    absolute: "Cybersecurity Planet | Digital Safety & Literacy Education",
  },
  description:
    "Learn practical digital safety, cybersecurity, privacy, AI literacy, media literacy, digital citizenship, and digital health skills for everyday life.",
};

export default function Home() {
  return (
    <>
      <WelcomeSection />
      <PillarsSection />
      <StatsSection />
      <FeaturedToolSection />
      <FeaturedResourcesSection />
      <WhyItMattersSection />
      <CTASection />
    </>
  );
}