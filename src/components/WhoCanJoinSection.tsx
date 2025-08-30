import { Users, Star, Heart } from "lucide-react";

const WhoCanJoinSection = () => {
  const eligibleParticipants = [
    {
      icon: Star,
      title: "Beginners",
      description: "Want to start your acting journey from scratch"
    },
    {
      icon: Users,
      title: "School & College Students", 
      description: "Passionate about theatre, drama, or film"
    },
    {
      icon: Heart,
      title: "Aspiring TV/Film Actors",
      description: "Looking to build strong acting skills before entering auditions"
    },
    {
      icon: Star,
      title: "Theatre Artists",
      description: "Want to explore camera acting and natural performance"
    },
    {
      icon: Users,
      title: "Public Speakers/Influencers",
      description: "Want to improve expression, body language, and voice control"
    },
    {
      icon: Heart,
      title: "Working Professionals",
      description: "Interested in acting as a creative hobby or second career"
    }
  ];

  return (
    <section className="py-20 dark-section relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Who Can <span className="text-navy-light">Join This Workshop</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            This workshop is open to anyone who dreams of acting — no matter your age, background, or experience.
          </p>
          <div className="glow-border bg-white/10 backdrop-blur-sm p-6 rounded-xl inline-block">
            <p className="text-2xl font-bold text-navy-light">
              No prior acting experience required!
            </p>
            <p className="text-white/90 text-lg mt-2">
              All you need is passion and commitment for 3 days.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {eligibleParticipants.map((participant, index) => {
            const IconComponent = participant.icon;
            return (
              <div 
                key={index}
                className="glow-border bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-primary p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {participant.title}
                </h3>
                <p className="text-white/80 leading-relaxed">
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