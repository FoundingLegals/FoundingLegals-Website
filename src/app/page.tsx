import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Possibilities from "@/components/Possibilities";
import { StartSection, ComplianceSection, RaiseSection } from "@/components/FeatureSections";
import VideoSection from "@/components/VideoSection";
import Trust from "@/components/Trust";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Possibilities />
        <StartSection />
        <ComplianceSection />
        <RaiseSection />
        <VideoSection />
        <Trust />
      </main>
      <Footer />
    </>
  );
}
