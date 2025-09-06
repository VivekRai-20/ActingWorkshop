import HeroSection from "@/components/HeroSection";
import CountdownSection from "@/components/CountdownSection";
import WorkshopContent from "@/components/WorkshopContent";
import AboutSection from "@/components/AboutSection";
import ScheduleSection from "@/components/ScheduleSection";
import WhyJoinSection from "@/components/WhyJoinSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import VideoSection from "@/components/VideoSection";
import GallerySection from "@/components/GallerySection";
import WhoCanJoinSection from "@/components/WhoCanJoinSection";
import FAQ from "@/components/FAQ";
import WhoShouldNotJoin from "@/components/WhoShouldNotJoin";
import Footer from "@/components/Footer";
import FixedAfterWorkshop from "@/components/FixedAfterWorkshop";
import Navras from "@/components/Navras";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        <CountdownSection />
        <WorkshopContent />
        <WhyJoinSection />
        <BeforeAfterSection />
        <AboutSection />
        <Navras />
        <ScheduleSection />
        <TestimonialsSection />
        <VideoSection />
        <GallerySection />
        <WhoCanJoinSection />
        <FixedAfterWorkshop />
        <WhoShouldNotJoin />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}