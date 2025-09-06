'use client';

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Award,
  Film,
  Users,
  BookOpen,
  Trophy,
  Calendar,
  Brain,
  Heart,
  Star,
} from "lucide-react";
// Note: Using public asset path for Next.js
import { useState } from "react";
import CustomerDetailsForm from "./CustomerDetailsForm";

const AboutSection = () => {
  const [showDetailsForm, setShowDetailsForm] = useState(false);

  const handleJoinWorkshop = () => {
    setShowDetailsForm(true);
  };

  const achievements = [
    {
      icon: Film,
      number: "500+",
      label: "TV Serials",
      description: "Acted in popular shows across all major Indian channels",
    },
    {
      icon: Trophy,
      number: "50",
      label: "Awards Won",
      description: "Recognized for 9 challenging roles as an actor",
    },
    {
      icon: Award,
      number: "71",
      label: "Film Awards",
      description: "For producing Navras Katha Collage",
    },
    {
      icon: BookOpen,
      number: "40+",
      label: "Scripts Written",
      description: "Bound Hindi film scripts across genres",
    },
    {
      icon: Users,
      number: "10,000+",
      label: "Workshops Conducted",
      description: "Training thousands of aspiring actors across India",
    },
    {
      icon: Calendar,
      number: "25+",
      label: "Years Experience",
      description: "In the Indian film and television industry",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* About Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
              Meet Your <span className="text-blue-600">Mentor</span>
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-4">
              Praveen Hingonia
            </h3>
            <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
              Actor | Writer | Director | Producer
            </p>

            <div className="prose prose-lg md:prose-xl text-gray-700 mb-8">
              <p>
                With over 25 years of experience in the Indian film and television
                industry, I have dedicated my life to the art of storytelling and
                performance. My journey began with a 2-year Acting Diploma from Shri
                Ram Centre for Performing Arts, New Delhi — one of India's most
                respected acting institutions.
              </p>
              <p>
                I've developed a unique method —{" "}
                <strong>Character Decoding</strong> — which helps actors quickly
                understand their roles, connect emotionally, and perform naturally
                without years of expensive training.
              </p>
            </div>

            <blockquote className="text-xl md:text-2xl italic text-blue-600 border-l-4 border-blue-600 pl-6 mb-8">
              "Talent should never depend on money."
            </blockquote>

            <Button
              onClick={handleJoinWorkshop}
              className="bg-blue-600 hover:bg-blue-700 text-white text-base sm:text-lg md:text-xl px-6 sm:px-8 py-4 md:px-10 md:py-5 rounded-xl shadow-md w-full sm:w-auto text-center leading-tight"
            >
              <span className="block sm:inline leading-tight">Learn From Experience</span>
            </Button>
          </div>

          {/* Photo and Stats - Dark Theme */}
          <div className="animate-scale-in">
            <Card className="bg-neutral-900 shadow-lg rounded-2xl p-8 text-center border border-gray-700">
              <img
                src="/assets/praveen-hingonia.jpg"
                alt="Praveen Hingonia - Acting Mentor"
                className="w-48 h-48 md:w-56 md:h-56 rounded-full mx-auto mb-6 object-cover shadow-md border-4 border-blue-600"
              />
              <h4 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Praveen Hingonia
              </h4>
              <p className="text-gray-400 mb-6">
                25+ Years in Entertainment Industry
              </p>

              {/* Achievement Grid */}
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => {
                  const IconComponent = achievement.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="bg-blue-600/20 p-3 rounded-xl mx-auto w-fit mb-2">
                        <IconComponent className="h-5 w-5 md:h-6 md:w-6 text-blue-400" />
                      </div>
                      <div className="text-2xl md:text-3xl font-bold text-white">
                        {achievement.number}
                      </div>
                      <div className="text-sm md:text-base font-semibold text-blue-400">
                        {achievement.label}
                      </div>
                      <div className="text-xs md:text-sm text-gray-400 mt-1">
                        {achievement.description}
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>
        </div>

        {/* Unique Method Section */}
        <div className="mt-20 text-center">
          <Card className="bg-blue-50 shadow-md rounded-2xl p-12 md:p-16 max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              My Unique Method — Character Decoding
            </h3>
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              I've developed a proven approach to help actors quickly understand
              their roles, connect emotionally, and perform naturally — without
              years of expensive training.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <Brain className="h-12 w-12 md:h-14 md:w-14 mx-auto mb-4 text-blue-600" />
                <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                  Decode
                </h4>
                <p className="text-sm md:text-base text-gray-600">
                  Break down character psychology
                </p>
              </div>
              <div>
                <Heart className="h-12 w-12 md:h-14 md:w-14 mx-auto mb-4 text-blue-600" />
                <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                  Connect
                </h4>
                <p className="text-sm md:text-base text-gray-600">
                  Find emotional authenticity
                </p>
              </div>
              <div>
                <Star className="h-12 w-12 md:h-14 md:w-14 mx-auto mb-4 text-blue-600" />
                <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                  Perform
                </h4>
                <p className="text-sm md:text-base text-gray-600">
                  Deliver natural, compelling scenes
                </p>
              </div>
            </div>
          </Card>
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

export default AboutSection;
