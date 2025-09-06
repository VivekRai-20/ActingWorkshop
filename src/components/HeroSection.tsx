import { Button } from "@/components/ui/button";
import { Play, Volume2, VolumeX, Clock, Users, Award } from "lucide-react";
import { useState, useRef } from "react";
import CustomerDetailsForm from './CustomerDetailsForm';
import praveenHingoniaVision from '@/assets/praveenHingoniaVision.png';
import productions from '@/assets/productions.png';

const HeroSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showDetailsForm, setShowDetailsForm] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoPlay = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleJoinWorkshop = () => {
    setShowDetailsForm(true);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          
          {/* Left Content */}
          <div className="order-1 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Decode Acting in <span className="text-blue-600">3 Days</span>
            </h1>
            <p className="text-base sm:text-lg md:text-2xl lg:text-3xl text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              An affordable workshop for kids who dream big but can’t afford expensive acting courses.
            </p>
            <p className="italic text-blue-700 font-medium mb-6 sm:mb-8 text-sm sm:text-base md:text-xl lg:text-2xl">
              "Acting for everyone — learn to decode characters in just 3 days."
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-start gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
              <div className="flex items-center text-gray-800 text-sm sm:text-base md:text-lg lg:text-xl">
                <Clock className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 mr-2 text-blue-600" />
                <span>3 Days</span>
              </div>
              <div className="flex items-center text-gray-800 text-sm sm:text-base md:text-lg lg:text-xl">
                <Users className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 mr-2 text-blue-600" />
                <span>Limited Seats</span>
              </div>
              <div className="flex items-center text-gray-800 text-sm sm:text-base md:text-lg lg:text-xl">
                <Award className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 mr-2 text-blue-600" />
                <span>Certificate</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
              <Button 
                onClick={handleJoinWorkshop}
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-xl shadow-md w-full sm:w-auto text-center leading-tight"
              >
                <span className="block leading-tight">Join Workshop Now</span>
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-xl w-full sm:w-auto text-center leading-tight"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="block leading-tight">Learn More</span>
              </Button>
            </div>

            {/* About Me */}
            <div className="mt-6 sm:mt-8 lg:mt-10 bg-gray-50 border-l-4 border-blue-600 p-4 sm:p-6 rounded-lg shadow-sm">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                About Me
              </h3>
              <p className="text-gray-700 text-xs sm:text-sm md:text-lg lg:text-xl mb-2">
                <span className="font-semibold">Praveen Hingonia</span> — Actor | Writer | Director | Producer
              </p>
              <p className="text-gray-600 text-xs sm:text-sm md:text-lg lg:text-xl leading-relaxed">
                With over 25 years of experience in the Indian film & television industry, I’ve acted, written, directed, 
                and produced acclaimed projects. My unique method <span className="font-semibold">Character Decoding</span> 
                helps aspiring actors break down and inhabit roles naturally.  
                <br className="hidden sm:block" />Now, I'm bringing this affordable 3-day workshop to kids who dream of acting but can't access expensive schools.  
                <strong className="text-blue-700"> Talent should never depend on money.</strong>
              </p>
            </div>
          </div>

          {/* Video Section */}
          <div className="relative animate-scale-in order-2 lg:order-2">
            {/* Logos Section - Above Video */}
            <div className="mb-8 flex justify-center items-center space-x-6 animate-fade-in">
              <div className="group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 rounded-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                <div className="relative flex items-center justify-center bg-black rounded-xl p-3 sm:p-4 shadow-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-blue-500/25">
                  <img 
                    src={praveenHingoniaVision} 
                    alt="Praveen Hingonia Vision" 
                    className="h-20 w-auto sm:h-12 md:h-14 lg:h-18 xl:h-40 xl:w-40 object-cover filter brightness-110 contrast-110"
                  />
                </div>
              </div>
              
              <div className="group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-800 rounded-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                <div className="relative flex items-center justify-center bg-black rounded-xl p-3 sm:p-4 shadow-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-purple-500/25">
                  <img 
                    src={productions} 
                    alt="Productions" 
                    className="h-20 sm:h-12 md:h-14 lg:h-18 xl:h-40 xl:w-60 object-contain filter brightness-110 contrast-110"
                  />
                </div>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-r from-[#0a1a2f] via-[#0b2d4d] to-[#001f3f] p-4 sm:p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
              <div className="relative aspect-video bg-black/30 rounded-xl overflow-hidden">
                <video
                  ref={videoRef}
                  src="https://res.cloudinary.com/dm5syomje/video/upload/v1757100071/Hero_1_afzqix.mp4"
                  className="w-full h-full object-cover"
                  muted={isMuted}
                  controls={false}
                  onClick={handleVideoPlay}
                  style={{ cursor: "pointer" }}
                />
                {/* Video Controls */}
                <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 flex space-x-1 sm:space-x-2">
                  <button
                    onClick={handleVideoPlay}
                    className="bg-black/50 hover:bg-black/70 p-1.5 sm:p-2 rounded-full transition-colors"
                  >
                    {isVideoPlaying ? (
                      <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-sm" />
                    ) : (
                      <Play className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                    )}
                  </button>
                  <button
                    onClick={handleMuteToggle}
                    className="bg-black/50 hover:bg-black/70 p-1.5 sm:p-2 rounded-full transition-colors"
                  >
                    {isMuted ? (
                      <VolumeX className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                    ) : (
                      <Volume2 className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                    )}
                  </button>
                </div>
              </div>

              {/* Video Caption */}
              <div className="mt-3 sm:mt-4 text-center">
                <p className="text-white/90 text-xs sm:text-sm md:text-lg lg:text-xl italic leading-relaxed">
                  "Many kids dream of learning acting but can't afford expensive courses. 
                  This workshop makes it possible."
                </p>
                <p className="text-blue-300 text-xs sm:text-xs md:text-sm lg:text-base mt-1">
                  - Praveen Hingonia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating CTA */}
      <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in px-4 w-full max-w-sm sm:max-w-none sm:w-auto">
        <Button 
          onClick={handleJoinWorkshop}
          className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-lg w-full sm:w-auto text-center leading-tight"
        >
          <span className="block sm:inline leading-tight">Enroll Today - Limited Seats!</span>
        </Button>
      </div>

      {/* Customer Details Form Modal */}
      <CustomerDetailsForm
        isOpen={showDetailsForm}
        onClose={() => setShowDetailsForm(false)}
        amount={29900}
      />
    </section>
  );
};

export default HeroSection;
