import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Target, Zap, Camera, Mic, Heart, Brain, Star } from "lucide-react";

const WorkshopContent = () => {
  const handleJoinWorkshop = () => {
    // This will later integrate with payment gateway
    console.log("Redirect to payment gateway");
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
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            What You'll Learn in This <span className="text-navy-light">3-Day Workshop</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Each skill targets the exact challenges aspiring actors face. No fluff, just results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {learningPoints.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <Card 
                key={index}
                className="glow-border bg-white/5 backdrop-blur-sm hover-lift animate-scale-in p-8"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-primary p-3 rounded-xl shadow-card-custom">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3">
                      {point.title}
                    </h3>
                    <p className="text-white/80 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="glow-border bg-gradient-neon-glow p-8 rounded-2xl text-white max-w-4xl mx-auto relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">
                Ready to Transform Your Acting Skills?
              </h3>
              <p className="text-xl text-white/90 mb-6">
                Join hundreds of aspiring actors who've discovered their potential through our proven method.
              </p>
              <Button 
                onClick={handleJoinWorkshop}
                className="btn-primary text-lg px-8 py-4 glow-border"
              >
                Secure Your Spot Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopContent;