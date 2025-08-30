import { CheckCircle, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhyJoinSection = () => {
  const handleJoinWorkshop = () => {
    console.log("Redirect to payment gateway");
  };

  const reasons = [
    "You dream of acting but can't afford expensive courses",
    "You feel nervous or freeze when performing in front of others",
    "Your acting feels \"fake\" instead of natural",
    "You struggle to understand your character's emotions and motives",
    "You speak dialogues without the right tone, pace, or emotion",
    "You don't know how to stand out in auditions",
    "You feel your body language is stiff or awkward",
    "You want personal feedback from an experienced actor & director"
  ];

  const skills = [
    "Character Decoding",
    "Natural Acting",
    "Body Language",
    "Voice Modulation",
    "Dialogue Delivery",
    "Script Reading",
    "Improvisation Skills",
    "Camera Confidence",
    "Audition Prep"
  ];

  return (
    <section className="py-20 dark-section relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Why You Should <span className="text-navy-light">Join This Workshop</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Transform your weaknesses into strengths and master the art of natural acting
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Why Join */}
          <div className="glow-border bg-white/5 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
              <Target className="h-8 w-8 mr-3 text-navy-light" />
              You Should Join If...
            </h3>
            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <div 
                  key={index}
                  className="flex items-start animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle className="h-5 w-5 text-navy-light mr-3 mt-1 flex-shrink-0" />
                  <p className="text-white/90">{reason}</p>
                </div>
              ))}
            </div>
          </div>

          {/* What You'll Master */}
          <div className="glow-border bg-white/5 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
              <CheckCircle className="h-8 w-8 mr-3 text-navy-light" />
              What You Will Master
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className="bg-gradient-primary p-4 rounded-xl text-center animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <p className="text-white font-semibold text-sm">{skill}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <Button 
                onClick={handleJoinWorkshop}
                className="btn-primary text-lg px-8 py-4 glow-border"
              >
                Master These Skills Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoinSection;