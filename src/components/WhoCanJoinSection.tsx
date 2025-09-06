import { Users, Star, Heart } from "lucide-react";

const WhoCanJoinSection = () => {
  const eligibleParticipants = [
    {
      icon: Star,
      title: "Beginners",
      description: "Want to start your acting journey from scratch",
    },
    {
      icon: Users,
      title: "School & College Students",
      description: "Passionate about theatre, drama, or film",
    },
    {
      icon: Heart,
      title: "Aspiring TV/Film Actors",
      description: "Looking to build strong acting skills before entering auditions",
    },
    {
      icon: Star,
      title: "Theatre Artists",
      description: "Want to explore camera acting and natural performance",
    },
    {
      icon: Users,
      title: "Public Speakers/Influencers",
      description: "Want to improve expression, body language, and voice control",
    },
    {
      icon: Heart,
      title: "Working Professionals",
      description: "Interested in acting as a creative hobby or second career",
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Who Can <span className="text-blue-600">Join This Workshop</span>
          </h2>
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto mb-8">
            This workshop is open to anyone who dreams of acting — no matter your age, background, or experience.
          </p>
          <div className="bg-blue-50 border border-blue-100 shadow-md p-6 rounded-xl inline-block">
            <p className="text-3xl font-bold text-blue-600">
              No prior acting experience required!
            </p>
            <p className="text-gray-700 text-lg mt-2">
              All you need is passion and commitment for 3 days.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {eligibleParticipants.map((participant, index) => {
            const IconComponent = participant.icon;
            return (
              <div
                key={index}
                className="bg-gray-900 shadow-lg rounded-2xl p-10 text-center border border-gray-800 hover:shadow-2xl transition-transform transform hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-blue-500/20 p-5 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <IconComponent className="h-10 w-10 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {participant.title}
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {participant.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhoCanJoinSection;
