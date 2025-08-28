import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WorkshopContent from "@/components/WorkshopContent";
import AboutSection from "@/components/AboutSection";
import ScheduleSection from "@/components/ScheduleSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <WorkshopContent />
        <AboutSection />
        <ScheduleSection />
        <TestimonialsSection />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;