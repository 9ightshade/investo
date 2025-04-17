import AppDownloadSection from "@/components/cta/appDownload";
import StatsSection from "@/components/cta/stats";
import FAQSection from "@/components/main/faq";
import Features from "@/components/main/features";
import InternationalTransfers from "@/components/main/transfers";

export default function Home() {
  return (
    <div>
      <Features />
      <FAQSection />
      <InternationalTransfers />
      <StatsSection />
      <AppDownloadSection />
    </div>
  );
}
