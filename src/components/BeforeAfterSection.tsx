import { CheckCircle, X } from "lucide-react";

const BeforeAfterSection = () => {
  const transformations = [
    {
      before: "Nervous and unsure in front of the camera",
      after: "Confident and camera-ready"
    },
    {
      before: "Struggling to understand characters",
      after: "Able to decode any character quickly"
    },
    {
      before: "Dialogues sound flat or memorized",
      after: "Dialogues delivered with emotion and impact"
    },
    {
      before: "Stiff body language",
      after: "Natural, expressive movements"
    },
    {
      before: "Stage fear holding you back",
      after: "Comfortable performing for audience or camera"
    },
    {
      before: "No clear audition strategy",
      after: "Equipped with tips to stand out in auditions"
    },
    {
      before: "Unsure how to start acting journey",
      after: "Clear roadmap to improve and grow as an actor"
    }
  ];

  return (
    <section className="py-20 dark-section relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Your <span className="text-navy-light">Transformation</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            See how this workshop will transform your acting journey in just 3 days
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Before Column */}
            <div className="glow-border bg-red-900/20 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-red-300 mb-8 text-center flex items-center justify-center">
                <X className="h-8 w-8 mr-3" />
                BEFORE
              </h3>
              <div className="space-y-6">
                {transformations.map((item, index) => (
                  <div 
                    key={`before-${index}`}
                    className="flex items-start animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <X className="h-5 w-5 text-red-400 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-white/90">{item.before}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* After Column */}
            <div className="glow-border bg-green-900/20 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-green-300 mb-8 text-center flex items-center justify-center">
                <CheckCircle className="h-8 w-8 mr-3" />
                AFTER
              </h3>
              <div className="space-y-6">
                {transformations.map((item, index) => (
                  <div 
                    key={`after-${index}`}
                    className="flex items-start animate-fade-in"
                    style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
                  >
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-white/90">{item.after}</p>
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