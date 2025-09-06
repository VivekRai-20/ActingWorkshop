'use client';

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, AlertTriangle } from "lucide-react";
import { useState } from "react";
import CustomerDetailsForm from "./CustomerDetailsForm";

const WhoShouldNotJoin = () => {
  const [showDetailsForm, setShowDetailsForm] = useState(false);

  const handleJoinWorkshop = () => {
    setShowDetailsForm(true);
  };

  const notSuitableFor = [
    "You think acting can be mastered in a few minutes without practice",
    "You are not willing to participate in live exercises and activities", 
    "You expect to become a celebrity overnight without hard work",
    "You have no interest in learning the basics of performance and discipline",
    "You are joining just to 'pass time' without genuine passion for acting",
    "You're looking for shortcuts instead of proper foundation building",
    "You don't want to practice or receive constructive feedback",
    "You think you already know everything about acting"
  ];

  return (
    <section className="py-20 dark-section relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <AlertTriangle className="h-12 md:h-16 w-12 md:w-16 text-red-400 mr-4" />
            <h2 className="text-4xl md:text-7xl font-bold text-white">
              Who Should <span className="text-red-400">NOT</span> Join
            </h2>
          </div>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
            This workshop is designed for serious learners. Please don't join if you...
          </p>
        </div>

        {/* Cards */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 gap-6">
            {notSuitableFor.map((item, index) => (
              <Card 
                key={index}
                className="glow-border bg-red-900/10 backdrop-blur-sm border-red-500/30 p-6 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <X className="h-6 md:h-7 w-6 md:w-7 text-red-400 flex-shrink-0 mt-1" />
                  <p className="text-white/90 text-lg md:text-xl leading-relaxed">
                    {item}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section (Light Theme) */}
        <div className="text-center px-4 sm:px-6">
  <Card className="p-6 sm:p-10 max-w-4xl mx-auto bg-white shadow-2xl border border-gray-200 rounded-2xl">
    <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-snug">
      Ready to Take Acting Seriously?
    </h3>
    <p className="text-base sm:text-lg md:text-2xl text-gray-700 mb-6 sm:mb-8 leading-relaxed">
      This workshop is for committed learners who want to master the craft of acting in just 3 days.
    </p>
    <Button 
      onClick={handleJoinWorkshop}
      className="btn-primary text-sm sm:text-base md:text-lg lg:text-xl px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-lg sm:rounded-xl w-full sm:w-auto text-center leading-tight"
    >
      <span className="block sm:inline leading-tight">Yes, I'm Serious</span>
    </Button>
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

export default WhoShouldNotJoin;
