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

const Index = () => {
  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        <CountdownSection />
        <WorkshopContent />
        <WhyJoinSection />
        <BeforeAfterSection />
        <AboutSection />
        <ScheduleSection />
        <TestimonialsSection />
        <VideoSection />
        <GallerySection />
        <WhoCanJoinSection />
        <FAQ />
        <WhoShouldNotJoin />
      </main>
      <Footer />
    </div>
  );
};

export default Index;