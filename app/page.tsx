import AppDownloadSection from "@/components/cta/appDownload";
import StatsSection from "@/components/cta/stats";
import InternationalTransfers from "@/components/main/transfers";

export default function Home() {
  return (
    <div>
      <InternationalTransfers/>
      <StatsSection />
      <AppDownloadSection />
    </div>
  );
}
