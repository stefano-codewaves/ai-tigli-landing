import HeroSection from "@/components/HeroSection";
import TimelineSection from "@/components/TimelineSection";
import GallerySection from "@/components/GallerySection";
import MapSection from "@/components/MapSection";
import FloorPlansSection from "@/components/FloorPlansSection";
import StatisticsSection from "@/components/StatisticsSection";
import BenefitsSection from "@/components/BenefitsSection";
import SwiperGallery from "@/components/SwiperGallery";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function HomePage() {
  const availableUnits = 12; // From GraphQL stub

  return (
    <main className="w-full h-full xl:overflow-hidden flex flex-col space-y-30 xl:space-y-50">
      <div className="my-0">
        <HeroSection availableUnits={availableUnits} />
        <TimelineSection />
      </div>
      <GallerySection />
      <MapSection />
      <FloorPlansSection />
      <BenefitsSection />
      <StatisticsSection />
      <SwiperGallery />
      <ContactForm />
      <Footer />
    </main>
  );
}
