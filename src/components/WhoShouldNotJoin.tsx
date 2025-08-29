import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, AlertTriangle } from "lucide-react";

const WhoShouldNotJoin = () => {
  const handleJoinWorkshop = () => {
    console.log("Redirect to payment gateway");
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
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <AlertTriangle className="h-12 w-12 text-red-400 mr-4" />
            <h2 className="text-4xl md:text-6xl font-bold text-white">
              Who Should <span className="text-red-400">NOT</span> Join
            </h2>
          </div>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            This workshop is designed for serious learners. Please don't join if you...
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 gap-6">
            {notSuitableFor.map((item, index) => (
              <Card 
                key={index}
                className="glow-border bg-red-900/10 backdrop-blur-sm border-red-500/30 p-6 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <X className="h-6 w-6 text-red-400 flex-shrink-0 mt-1" />
                  <p className="text-white/90 text-lg leading-relaxed">
                    {item}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Card className="glow-border bg-gradient-neon-glow p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Take Acting Seriously?
            </h3>
            <p className="text-xl text-white/90 mb-6">
              This workshop is for committed learners who want to master the craft of acting in just 3 days.
            </p>
            <Button 
              onClick={handleJoinWorkshop}
              className="btn-primary text-lg px-8 py-4 glow-border"
            >
              Yes, I'm Serious About Acting
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhoShouldNotJoin;