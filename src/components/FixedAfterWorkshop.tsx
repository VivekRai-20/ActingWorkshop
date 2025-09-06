import { XCircle, CheckCircle } from "lucide-react";

const FixedAfterWorkshop = () => {
  const issues = [
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
    <section className="py-20 bg-gradient-to-b from-gray-950 via-gray-900 to-black relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-7xl font-bold text-white mb-6">
            What Will Be <span className="text-blue-400">Fixed</span> After This Workshop
          </h2>
          <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Transform your weaknesses into strengths with our proven method.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Before Card */}
          <div className="relative group">
            <div className="absolute inset-0 rounded-2xl border-2 border-red-500/60 group-hover:border-red-400 shadow-[0_0_25px_rgba(239,68,68,0.6)] transition"></div>
            <div className="relative bg-gray-900/80 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl md:text-3xl font-bold text-red-400 mb-6">
                ❌ Before The Workshop
              </h3>
              <ul className="space-y-5">
                {issues.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <XCircle className="h-6 w-6 md:h-7 md:w-7 text-red-400 shrink-0 mt-0.5" />
                    <span className="text-gray-200 font-medium text-base md:text-xl">
                      {item.before}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* After Card */}
          <div className="relative group">
            <div className="absolute inset-0 rounded-2xl border-2 border-blue-500/60 group-hover:border-blue-400 shadow-[0_0_25px_rgba(59,130,246,0.6)] transition"></div>
            <div className="relative bg-gray-900/80 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl md:text-3xl font-bold text-blue-400 mb-6">
                ✅ After The Workshop
              </h3>
              <ul className="space-y-5">
                {issues.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 md:h-7 md:w-7 text-green-400 shrink-0 mt-0.5" />
                    <span className="text-gray-200 text-base md:text-xl">
                      {item.after}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FixedAfterWorkshop;
