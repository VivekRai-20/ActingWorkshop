import { CheckCircle, X } from "lucide-react";

const BeforeAfterSection = () => {
  const transformations = [
    {
      before: "Stage Fear",
      after: "Perform confidently in front of camera & audience.",
    },
    {
      before: "Overacting or Underacting",
      after: "Deliver natural, believable performances.",
    },
    {
      before: "Flat Dialogue Delivery",
      after: "Speak with emotion, tone, and rhythm.",
    },
    {
      before: "Weak Character Understanding",
      after: "Decode any role with depth & clarity.",
    },
    {
      before: "Stiff Body Language",
      after: "Use expressive movements naturally.",
    },
    {
      before: "Lack of Voice Control",
      after: "Master voice modulation for impact.",
    },
    {
      before: "Audition Nervousness",
      after: "Approach auditions with confidence and strategy.",
    },
    {
      before: "Confusion About Acting Career Path",
      after: "Get a clear roadmap to grow in the industry.",
    },
  ];

  return (
    <section className="py-20 dark-section relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            What Will Be Fixed <span className="text-blue-600">After Workshop</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
            See how this workshop will transform your acting journey in just 3 days
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Before Column */}
            <div className="glow-border bg-red-900/20 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-3xl md:text-4xl font-bold text-red-300 mb-8 text-center flex items-center justify-center">
                <X className="h-8 w-8 md:h-10 md:w-10 mr-3" />
                Before The Workshop
              </h3>
              <div className="space-y-6">
                {transformations.map((item, index) => (
                  <div
                    key={`before-${index}`}
                    className="flex items-start animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <X className="h-5 w-5 md:h-6 md:w-6 text-red-400 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-white/90 text-base md:text-lg leading-relaxed">
                      {item.before}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* After Column */}
            <div className="glow-border bg-green-900/20 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-3xl md:text-4xl font-bold text-green-300 mb-8 text-center flex items-center justify-center">
                <CheckCircle className="h-8 w-8 md:h-10 md:w-10 mr-3" />
                After The Workshop
              </h3>
              <div className="space-y-6">
                {transformations.map((item, index) => (
                  <div
                    key={`after-${index}`}
                    className="flex items-start animate-fade-in"
                    style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
                  >
                    <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-white/90 text-base md:text-lg leading-relaxed">
                      {item.after}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
