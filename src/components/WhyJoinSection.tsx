import { CheckCircle, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import CustomerDetailsForm from "./CustomerDetailsForm";

const WhyJoinSection = () => {
  const [showDetailsForm, setShowDetailsForm] = useState(false);

  const handleJoinWorkshop = () => {
    setShowDetailsForm(true);
  };

  const reasons = [
    "You dream of acting but can't afford expensive courses",
    "You feel nervous or freeze when performing in front of others",
    "Your acting feels \"fake\" instead of natural",
    "You struggle to understand your character's emotions and motives",
    "You speak dialogues without the right tone, pace, or emotion",
    "You don't know how to stand out in auditions",
    "You feel your body language is stiff or awkward",
    "You want personal feedback from an experienced actor & director",
  ];

  const skills = [
    "Audition Prep",
    "Natural Acting",
    "Body Language",
    "Voice Modulation",
    "Dialogue Delivery",
    "Script Reading",
    "Improvisation Skills",
    "Camera Confidence",
    "Character Decoding",
  ];

  return (
    <section className="py-16 md:py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-20 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            WHY YOU SHOULD{" "}
            <span className="text-blue-600">JOIN THIS WORKSHOP</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto px-2">
            Transform your weaknesses into strengths and master the art of natural acting
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 max-w-7xl mx-auto">
          {/* Why Join */}
          <div className="bg-neutral-900 border border-gray-800 rounded-2xl p-8 sm:p-10 text-white hover:border-blue-500 transition-all">
            <h3 className="text-2xl sm:text-3xl font-bold text-blue-500 mb-8 flex items-center">
              <Target className="h-7 w-7 sm:h-8 sm:w-8 mr-3 text-blue-400" />
              You Should Join If...
            </h3>
            <div className="space-y-4 sm:space-y-5">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="flex items-start animate-fade-in"
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  <CheckCircle className="h-6 w-6 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
                    {reason}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* What You'll Master */}
          <div className="bg-neutral-900 border border-gray-800 rounded-2xl p-8 sm:p-10 text-white hover:border-blue-500 transition-all">
            <h3 className="text-2xl sm:text-3xl font-bold text-blue-500 mb-8 flex items-center">
              <CheckCircle className="h-7 w-7 sm:h-8 sm:w-8 mr-3 text-blue-400" />
              What You Will Master
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5 mb-10">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-black border border-blue-500/40 hover:border-blue-500 text-white text-sm sm:text-lg md:text-xl font-semibold p-4 sm:p-5 rounded-xl text-center shadow-md hover:shadow-blue-500/30 animate-scale-in"
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  {skill}
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button
                onClick={handleJoinWorkshop}
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-3 sm:py-4 md:py-5 lg:py-6 rounded-xl uppercase tracking-wide shadow-lg hover:shadow-blue-500/40 transition-transform transform hover:scale-105 w-full text-center leading-tight"
              >
                <span className="block leading-tight">Master These Skills</span>
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

export default WhyJoinSection;
