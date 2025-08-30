import { useState, useEffect } from "react";

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set workshop start date - 7 days from now for demo
    const workshopDate = new Date();
    workshopDate.setDate(workshopDate.getDate() + 7);
    workshopDate.setHours(10, 0, 0, 0); // 10 AM start time

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = workshopDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 dark-section relative overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Workshop Starts In:
        </h2>
        <p className="text-xl text-white/80 mb-12">
          Don't miss your chance to decode acting in just 3 days!
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Minutes", value: timeLeft.minutes },
            { label: "Seconds", value: timeLeft.seconds }
          ].map((item, index) => (
            <div 
              key={item.label}
              className="glow-border bg-white/10 backdrop-blur-sm p-6 rounded-xl animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {item.value.toString().padStart(2, '0')}
              </div>
              <div className="text-navy-light text-sm uppercase tracking-wider">
                {item.label}
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-white/60 text-sm mt-8">
          Limited seats available - Reserve your spot now!
        </p>
      </div>
    </section>
  );
};

export default CountdownSection;