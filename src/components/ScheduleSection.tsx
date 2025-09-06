import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock, Coffee, Camera, Users, Award, BookOpen } from "lucide-react";
import { useState } from "react";
import CustomerDetailsForm from "./CustomerDetailsForm";

const ScheduleSection = () => {
  const [showDetailsForm, setShowDetailsForm] = useState(false);

  const handleJoinWorkshop = () => {
    setShowDetailsForm(true);
  };

  const scheduleData = [
    {
      day: "Day 1",
      title: "The Foundation",
      color: "bg-primary",
      sessions: [
        { time: "10:00 AM – 11:00 AM", title: "Introduction & Ice-Breaker Activities", icon: Users, description: "Meet your fellow actors and get comfortable" },
        { time: "11:00 AM – 12:30 PM", title: "Understanding Acting & Natural Performance", icon: BookOpen, description: "Learn the fundamentals of authentic acting" },
        { time: "12:30 PM – 1:30 PM", title: "Lunch Break", icon: Coffee, description: "Network with other participants" },
        { time: "1:30 PM – 3:00 PM", title: "Character Decoding Basics", icon: BookOpen, description: "How to break down any role effectively" },
        { time: "3:00 PM – 4:00 PM", title: "Body Language & Expressions Practice", icon: Users, description: "Master non-verbal communication" },
        { time: "4:00 PM – 4:30 PM", title: "Q&A + Personal Feedback", icon: Award, description: "Get individual guidance" },
      ],
    },
    {
      day: "Day 2",
      title: "Building the Actor's Toolkit",
      color: "bg-navy-secondary",
      sessions: [
        { time: "10:00 AM – 11:30 AM", title: "Voice Modulation & Dialogue Delivery", icon: BookOpen, description: "Make your voice expressive and impactful" },
        { time: "11:30 AM – 12:30 PM", title: "Script Reading & Understanding Subtext", icon: BookOpen, description: "Decode hidden meanings in dialogues" },
        { time: "12:30 PM – 1:30 PM", title: "Lunch Break", icon: Coffee, description: "Recharge and connect" },
        { time: "1:30 PM – 2:30 PM", title: "Improvisation Exercises", icon: Users, description: "Think on your feet naturally" },
        { time: "2:30 PM – 3:30 PM", title: "Overcoming Stage Fear & Camera Awareness", icon: Camera, description: "Build confidence for performance" },
        { time: "3:30 PM – 4:30 PM", title: "Group Scene Practice + Feedback", icon: Users, description: "Practice with peers and get feedback" },
      ],
    },
    {
      day: "Day 3",
      title: "Performance & Real-World Prep",
      color: "bg-navy-primary",
      sessions: [
        { time: "10:00 AM – 11:00 AM", title: "Quick Revision of Key Skills", icon: BookOpen, description: "Consolidate your learning" },
        { time: "11:00 AM – 12:30 PM", title: "Rehearsals for Final Scene", icon: Users, description: "Prepare your showcase performance" },
        { time: "12:30 PM – 1:30 PM", title: "Lunch Break", icon: Coffee, description: "Final preparation time" },
        { time: "1:30 PM – 3:00 PM", title: "Final Scene Performance (On Camera)", icon: Camera, description: "Showcase your new skills" },
        { time: "3:00 PM – 3:45 PM", title: "Audition Tips & Industry Insights", icon: Award, description: "Real-world guidance for your career" },
        { time: "3:45 PM – 4:30 PM", title: "Certification & Career Roadmap", icon: Award, description: "Get certified and plan your next steps" },
      ],
    },
  ];

  return (
    <section id="schedule" className="py-16 sm:py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-primary mb-4 sm:mb-6 leading-snug">
            Workshop <span className="text-navy-secondary">Schedule</span>
          </h2>
          <p className="text-base sm:text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            3 Days to Decode Acting — Every session builds on the previous one for maximum impact.
          </p>
        </div>

        {/* Day Cards */}
        <div className="space-y-10 sm:space-y-12">
          {scheduleData.map((day, dayIndex) => (
            <Card
              key={dayIndex}
              className="card-elegant animate-slide-up bg-neutral-100 border border-gray-300 rounded-2xl"
              style={{ animationDelay: `${dayIndex * 0.2}s` }}
            >
              <div className="p-5 sm:p-8">
                {/* Day Header */}
                <div className="flex items-center mb-6 sm:mb-8">
                  <div className={`${day.color} text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg sm:rounded-xl mr-4 sm:mr-6`}>
                    <span className="font-bold text-base sm:text-lg md:text-xl">{day.day}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-snug">{day.title}</h3>
                </div>

                {/* Sessions Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {day.sessions.map((session, sessionIndex) => {
                    const IconComponent = session.icon;
                    return (
                      <div
                        key={sessionIndex}
                        className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-5 rounded-xl bg-white text-gray-900 shadow-md transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] hover:scale-[1.02]"
                      >
                        <div className="bg-gradient-primary p-2 rounded-lg">
                          <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center text-xs sm:text-sm md:text-base text-gray-500 mb-1">
                            <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-1 text-blue-500" />
                            {session.time}
                          </div>
                          <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base md:text-lg leading-snug">
                            {session.title}
                          </h4>
                          <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">{session.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 sm:mt-16">
          <Card className="card-elegant p-6 sm:p-8 md:p-12 bg-gradient-primary text-white max-w-3xl mx-auto rounded-2xl">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 leading-snug">
              Transform Your Acting in Just 3 Days
            </h3>
            <p className="text-base sm:text-lg md:text-2xl text-navy-light mb-4 sm:mb-6 leading-relaxed">
              Each session is carefully designed to build your skills step by step.  
              Don't miss this intensive, hands-on learning experience.
            </p>
            <Button
              onClick={handleJoinWorkshop}
              className="bg-white text-primary hover:bg-navy-light hover:text-primary text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 md:py-5 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 hover:scale-105 w-full sm:w-auto text-center leading-tight"
            >
              <span className="block sm:inline leading-tight">Reserve Your Seat</span>
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

export default ScheduleSection;
