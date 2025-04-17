import AppDownloadSection from "@/components/cta/appDownload";
import StatsSection from "@/components/cta/stats";
import HeroSection from "@/components/hero/hero";
import FAQSection from "@/components/main/faq";
import Features from "@/components/main/features";
import GetStarted from "@/components/main/getStarted";
import InternationalTransfers from "@/components/main/transfers";
import TrustedBySection from "@/components/main/trustedBy";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <TrustedBySection />
      <GetStarted />
      <Features />
      <FAQSection />
      <InternationalTransfers />
      <StatsSection />
      <AppDownloadSection />
    </div>
  );
}
