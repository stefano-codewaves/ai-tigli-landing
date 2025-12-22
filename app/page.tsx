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
import { tigliData } from "@/data/properties/tigli";

export default function HomePage() {
  // Load property data
  const data = tigliData;

  return (
    <main className="w-full h-full xl:overflow-hidden flex flex-col space-y-30 xl:space-y-50">
      <div className="my-0">
        <HeroSection data={data.hero} />
        <TimelineSection data={data.timeline} />
      </div>
      <GallerySection data={data.gallery} />
      <MapSection data={data.map} />
      <FloorPlansSection data={data.floorPlans} />
      <BenefitsSection data={data.benefits} />
      <StatisticsSection data={data.statistics} />
      <SwiperGallery data={data.swiperGallery} />
      <ContactForm />
      <Footer data={data.footer} />
    </main>
  );
}
