import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Award, Film, Users, BookOpen, Trophy, Calendar, Brain, Heart, Star } from "lucide-react";
import praveenImage from "@/assets/praveen-hingonia.jpg";

const AboutSection = () => {
  const handleJoinWorkshop = () => {
    // This will later integrate with payment gateway
    console.log("Redirect to payment gateway");
  };

  const achievements = [
    {
      icon: Film,
      number: "500+",
      label: "TV Serials",
      description: "Acted in popular shows across all major Indian channels"
    },
    {
      icon: Trophy,
      number: "50",
      label: "Awards Won",
      description: "Recognized for 9 challenging roles as an actor"
    },
    {
      icon: Award,
      number: "71",
      label: "Film Awards",
      description: "For producing Navras Katha Collage"
    },
    {
      icon: BookOpen,
      number: "40+",
      label: "Scripts Written",
      description: "Bound Hindi film scripts across genres"
    },
    {
      icon: Users,
      number: "10,000+",
      label: "Workshops Conducted",
      description: "Training thousands of aspiring actors across India"
    },
    {
      icon: Calendar,
      number: "25+",
      label: "Years Experience",
      description: "In the Indian film and television industry"
    }
  ];

  return (
    <section id="about" className="py-20 dark-section relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* About Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              Meet Your <span className="text-navy-secondary">Mentor</span>
            </h2>
            <h3 className="text-2xl font-semibold text-navy-secondary mb-4">
              Praveen Hingonia
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Actor | Writer | Director | Producer
            </p>
            
            <div className="prose prose-lg text-muted-foreground mb-8">
              <p>
                With over 25 years of experience in the Indian film and television industry, 
                I have dedicated my life to the art of storytelling and performance. My journey 
                began with a 2-year Acting Diploma from Shri Ram Centre for Performing Arts, 
                New Delhi — one of India's most respected acting institutions.
              </p>
              
              <p>
                I've developed a unique method — <strong>Character Decoding</strong> — which helps 
                actors quickly understand their roles, connect emotionally, and perform naturally 
                without years of expensive training.
              </p>
            </div>

            <blockquote className="text-xl italic text-primary border-l-4 border-primary pl-6 mb-8">
              "Talent should never depend on money."
            </blockquote>

            <Button 
              onClick={handleJoinWorkshop}
              className="btn-primary text-lg px-8 py-4"
            >
              Learn From Experience
            </Button>
          </div>

          {/* Photo and Stats */}
          <div className="animate-scale-in">
            <Card className="card-elegant p-8 text-center">
              <img 
                src={praveenImage} 
                alt="Praveen Hingonia - Acting Mentor" 
                className="w-48 h-48 rounded-full mx-auto mb-6 object-cover shadow-elegant"
              />
              <h4 className="text-2xl font-bold text-primary mb-2">Praveen Hingonia</h4>
              <p className="text-muted-foreground mb-6">25+ Years in Entertainment Industry</p>
              
              {/* Achievement Grid */}
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, index) => {
                  const IconComponent = achievement.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="bg-gradient-primary p-3 rounded-xl mx-auto w-fit mb-2">
                        <IconComponent className="h-5 w-5 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-primary">{achievement.number}</div>
                      <div className="text-sm font-semibold text-navy-secondary">{achievement.label}</div>
                      <div className="text-xs text-muted-foreground mt-1">{achievement.description}</div>
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>
        </div>

        {/* Unique Method Section */}
        <div className="mt-20 text-center">
          <Card className="card-elegant p-12 bg-gradient-primary text-white max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">My Unique Method — Character Decoding</h3>
            <p className="text-xl text-navy-light mb-8 leading-relaxed">
              I've developed a proven approach to help actors quickly understand their roles, 
              connect emotionally, and perform naturally — without years of expensive training.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <Brain className="h-12 w-12 mx-auto mb-4 text-navy-light" />
                <h4 className="text-lg font-semibold mb-2">Decode</h4>
                <p className="text-sm text-navy-light">Break down character psychology</p>
              </div>
              <div>
                <Heart className="h-12 w-12 mx-auto mb-4 text-navy-light" />
                <h4 className="text-lg font-semibold mb-2">Connect</h4>
                <p className="text-sm text-navy-light">Find emotional authenticity</p>
              </div>
              <div>
                <Star className="h-12 w-12 mx-auto mb-4 text-navy-light" />
                <h4 className="text-lg font-semibold mb-2">Perform</h4>
                <p className="text-sm text-navy-light">Deliver natural, compelling scenes</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;