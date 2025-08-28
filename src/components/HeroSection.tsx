import { Button } from "@/components/ui/button";
import { Play, Volume2, VolumeX, Clock, Users, Award } from "lucide-react";
import { useState, useRef } from "react";
import heroImage from "@/assets/hero-workshop.jpg";

const HeroSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
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
    // This will later integrate with payment gateway
    console.log("Redirect to payment gateway");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Decode Acting in <span className="text-navy-light">3 Days</span>
            </h1>
            <p className="text-xl md:text-2xl text-navy-light mb-8 leading-relaxed">
              An affordable workshop for kids who dream big but can't afford expensive acting courses.
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 mb-8">
              <div className="flex items-center text-white">
                <Clock className="h-6 w-6 mr-2 text-navy-light" />
                <span className="text-lg">3 Days</span>
              </div>
              <div className="flex items-center text-white">
                <Users className="h-6 w-6 mr-2 text-navy-light" />
                <span className="text-lg">Limited Seats</span>
              </div>
              <div className="flex items-center text-white">
                <Award className="h-6 w-6 mr-2 text-navy-light" />
                <span className="text-lg">Certificate</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={handleJoinWorkshop}
                className="btn-primary text-lg px-8 py-4"
              >
                Join Workshop Now
              </Button>
              <Button 
                variant="outline" 
                className="btn-secondary text-lg px-8 py-4"
                onClick={() => document.getElementById('workshop')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Video Section */}
          <div className="relative animate-scale-in">
            <div className="relative rounded-2xl overflow-hidden shadow-glow bg-white/10 backdrop-blur-sm p-4">
              {/* Video Placeholder - Replace with actual video */}
              <div className="relative aspect-video bg-navy-primary/30 rounded-xl overflow-hidden">
                {/* Placeholder for video - will be replaced with actual video element */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Play className="h-16 w-16 mx-auto mb-4 text-navy-light" />
                    <p className="text-lg">Workshop Preview Video</p>
                    <p className="text-sm text-navy-light mt-2">Click to play</p>
                  </div>
                </div>

                {/* Video Controls */}
                <div className="absolute bottom-4 right-4 flex space-x-2">
                  <button
                    onClick={handleVideoPlay}
                    className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
                  >
                    {isVideoPlaying ? (
                      <div className="w-4 h-4 bg-white rounded-sm" />
                    ) : (
                      <Play className="h-4 w-4 text-white" />
                    )}
                  </button>
                  <button
                    onClick={handleMuteToggle}
                    className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
                  >
                    {isMuted ? (
                      <VolumeX className="h-4 w-4 text-white" />
                    ) : (
                      <Volume2 className="h-4 w-4 text-white" />
                    )}
                  </button>
                </div>
              </div>
              
              {/* Video Caption */}
              <div className="mt-4 text-center">
                <p className="text-white/90 text-sm">
                  "Many kids dream of learning acting but can't afford expensive courses"
                </p>
                <p className="text-navy-light text-xs mt-1">- Praveen Hingonia</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in">
        <Button 
          onClick={handleJoinWorkshop}
          className="btn-primary shadow-glow"
        >
          Enroll Today - Limited Seats!
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;