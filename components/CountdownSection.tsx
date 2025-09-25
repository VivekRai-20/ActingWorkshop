'use client';

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import CustomerDetailsForm from "./CustomerDetailsForm";

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [showDetailsForm, setShowDetailsForm] = useState(false);

  const handleJoinWorkshop = () => {
    setShowDetailsForm(true);
  };

  useEffect(() => {
    // Workshop starts on October 3rd at 10 AM
    const workshopDate = new Date(2025, 9, 3, 10, 0, 0, 0); // Month is 0-indexed, so 9 = October

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = workshopDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-gradient-to-r from-[#001a3f] via-[#002b66] to-[#001a3f] py-10 sm:py-14 md:py-16 flex items-center justify-center px-4">
      <div className="bg-white rounded-xl shadow-2xl p-6 sm:p-8 md:p-10 text-center max-w-lg sm:max-w-xl md:max-w-2xl w-full border border-blue-200">
        
        {/* Top Heading */}
        <h3 className="text-gray-800 text-base sm:text-lg md:text-xl font-semibold mb-3">
          Secure Your Spot in the Online 3-Day Acting Workshop
        </h3>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 uppercase leading-snug">
          FOR A SPECIAL <span className="text-blue-600">ONE-TIME PAYMENT</span>{" "}
          OF JUST RS 299!
        </h2>
        
        {/* Workshop Dates */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <p className="text-blue-800 font-bold text-lg sm:text-xl">
            Workshop Dates: October 3rd, 4th & 5th, 2025
          </p>
          <p className="text-blue-700 text-sm sm:text-base mt-1">
            Online Workshop - 10:00 AM IST Each Day
          </p>
        </div>

        {/* Countdown */}
        <p className="text-gray-700 font-medium mb-4 text-base sm:text-lg">
          Workshop Starts In:
        </p>
        <div className="flex justify-center space-x-4 sm:space-x-6 mb-6">
          {[
            { label: "days", value: timeLeft.days },
            { label: "hours", value: timeLeft.hours },
            { label: "minutes", value: timeLeft.minutes },
            { label: "seconds", value: timeLeft.seconds },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-gray-50 border border-blue-300 rounded-lg shadow-md px-4 sm:px-6 py-3 sm:py-4 min-w-[70px] sm:min-w-[90px] flex flex-col items-center"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
                {item.value.toString().padStart(2, "0")}
              </div>
              <div className="text-blue-600 uppercase text-xs sm:text-sm md:text-base font-semibold tracking-wide mt-1">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <Button 
          onClick={handleJoinWorkshop}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 md:py-5 rounded-lg uppercase tracking-wide w-full sm:w-auto shadow-md text-center leading-tight"
        >
          <span className="block sm:inline">Reserve Your Spot</span>
        </Button>
      </div>
      
      <CustomerDetailsForm
        isOpen={showDetailsForm}
        onClose={() => setShowDetailsForm(false)}
        amount={29900}
      />
    </section>
  );
};

export default CountdownSection;