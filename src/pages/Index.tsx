import HeroSection from "@/components/HeroSection";
import WorkshopContent from "@/components/WorkshopContent";
import AboutSection from "@/components/AboutSection";
import ScheduleSection from "@/components/ScheduleSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQ from "@/components/FAQ";
import WhoShouldNotJoin from "@/components/WhoShouldNotJoin";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        <WorkshopContent />
        <AboutSection />
        <ScheduleSection />
        <TestimonialsSection />
        <FAQ />
        <WhoShouldNotJoin />
      </main>
      <Footer />
    </div>
  );
};

export default Index;