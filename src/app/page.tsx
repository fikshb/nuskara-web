import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import AddedValueSection from "@/components/AddedValueSection";
import BODSection from "@/components/BODSection";
import TimelineSection from "@/components/TimelineSection";
import PortfolioSection from "@/components/PortfolioSection";
import LocationsSection from "@/components/LocationsSection";
import NewsSection from "@/components/NewsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StatsBar />
        <AddedValueSection />
        <BODSection />
        <TimelineSection />
        <PortfolioSection />
        <LocationsSection />
        <NewsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
