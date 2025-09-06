import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Target, Zap, Camera, Mic, Heart, Brain, Star } from "lucide-react";
import { useState } from "react";
import CustomerDetailsForm from "./CustomerDetailsForm";

const WorkshopContent = () => {
  const [showDetailsForm, setShowDetailsForm] = useState(false);

  const handleJoinWorkshop = () => {
    setShowDetailsForm(true);
  };

  const learningPoints = [
    {
      icon: Brain,
      title: "Character Decoding Secrets",
      description: "Learn how to break down any role so you can perform with depth and confidence."
    },
    {
      icon: Heart,
      title: "Natural Acting Techniques",
      description: "Say goodbye to overacting and learn to be real in front of the camera."
    },
    {
      icon: Target,
      title: "Body Language & Expressions",
      description: "Use your posture, gestures, and facial expressions to speak louder than words."
    },
    {
      icon: Mic,
      title: "Voice Modulation & Dialogue Delivery",
      description: "Make your voice expressive and impactful for any scene."
    },
    {
      icon: Zap,
      title: "Overcoming Stage Fear",
      description: "Build the confidence to perform in front of cameras or live audiences without freezing."
    },
    {
      icon: Star,
      title: "Script Reading Like a Pro",
      description: "Understand emotions, subtext, and the 'hidden meaning' behind every line."
    },
    {
      icon: Camera,
      title: "Instant Improv Skills",
      description: "Think on your feet and respond naturally in any situation."
    },
    {
      icon: CheckCircle,
      title: "Audition & Camera Tips",
      description: "Practical guidance to stand out in auditions without costly courses."
    }
  ];

  return (
    <section id="workshop" className="py-20 dark-section relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 leading-tight">
            What You'll Learn in This <span className="text-blue-600">3-Day Workshop</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
            Each skill targets the exact challenges aspiring actors face. No fluff, just results.
          </p>
        </div>

        {/* Learning Points */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {learningPoints.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <Card
                key={index}
                className="glow-border bg-white/5 backdrop-blur-sm hover-lift animate-scale-in p-8 sm:p-10"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-5">
                  <div className="bg-gradient-primary p-4 rounded-xl shadow-card-custom">
                    <IconComponent className="h-7 w-7 text-white sm:h-8 sm:w-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3">
                      {point.title}
                    </h3>
                    <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
<div className="text-center px-4 sm:px-6">
  <div className="glow-border bg-gradient-to-r from-orange-100 via-yellow-50 to-white 
                  p-6 sm:p-10 rounded-2xl text-gray-900 max-w-4xl mx-auto 
                  relative overflow-hidden shadow-lg">
    <div className="relative z-10">
      <h3 className="text-xl sm:text-2xl md:text-4xl font-extrabold mb-4 sm:mb-6 leading-snug">
        Ready to Transform Your Acting Skills?
      </h3>
      <p className="text-base sm:text-lg md:text-2xl text-gray-700 mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
        Join hundreds of aspiring actors who've discovered their potential through our proven method.
      </p>
      <Button
        onClick={handleJoinWorkshop}
        className="btn-primary text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 
                   px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 glow-border 
                   rounded-xl sm:rounded-2xl font-bold shadow-md w-full sm:w-auto text-center leading-tight"
      >
        <span className="block sm:inline">🎭 Secure Your Spot</span>
      </Button>
    </div>
  </div>
</div>


      </div>
      <CustomerDetailsForm
        isOpen={showDetailsForm}
        onClose={() => setShowDetailsForm(false)}
        amount={29900}
      />
    </section>
  );
};

export default WorkshopContent;
