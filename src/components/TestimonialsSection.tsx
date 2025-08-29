import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, Quote, Play, Volume2 } from "lucide-react";
import { useState } from "react";

const TestimonialsSection = () => {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  const handleJoinWorkshop = () => {
    // This will later integrate with payment gateway
    console.log("Redirect to payment gateway");
  };

  const testimonials = [
    {
      name: "Anisha Patel",
      age: "16 years",
      location: "Mumbai",
      message: "I was so nervous about acting, but Praveen sir's Character Decoding method changed everything! Now I can understand any role and perform naturally. Got my first audition callback after the workshop! 🎭",
      rating: 5,
      isVideo: true
    },
    {
      name: "Rohit Kumar", 
      age: "14 years",
      location: "Delhi",
      message: "My parents couldn't afford expensive acting classes. This workshop taught me more in 3 days than I learned from YouTube in months. The body language techniques are amazing! Already performed in my school drama and everyone was impressed. Thank you sir! 🙏",
      rating: 5,
      isVideo: false
    },
    {
      name: "Priya Singh",
      age: "17 years", 
      location: "Bangalore",
      message: "I used to freeze in front of the camera. Praveen sir's stage fear techniques worked like magic! Now I'm confident in auditions and even started my own Instagram acting page. The voice modulation classes were incredible! 🎤",
      rating: 5,
      isVideo: true
    },
    {
      name: "Arjun Mehta",
      age: "15 years",
      location: "Pune",
      message: "The script reading and dialogue delivery session was life-changing. I can now understand the hidden emotions in every line. Got selected for a local theater group! Sir's improvisations techniques helped me think faster. Worth every penny! ⭐",
      rating: 5,
      isVideo: false
    },
    {
      name: "Kavya Reddy",
      age: "16 years",
      location: "Chennai", 
      message: "From being shy to performing confidently on camera in just 3 days! The character decoding method is pure gold. I can now connect with any character emotionally. Planning to audition for TV shows soon. Thank you for believing in us! 💫",
      rating: 5,
      isVideo: true
    },
    {
      name: "Siddharth Jain",
      age: "13 years",
      location: "Ahmedabad",
      message: "My acting felt fake before this workshop. Now everyone says I look natural on screen! The body language and expressions training was amazing. Even my friends noticed the change. Sir made acting so simple to understand! 🎬",
      rating: 5,
      isVideo: false
    }
  ];

  const professionalTestimonials = [
    {
      name: "Rajesh Sharma",
      designation: "Casting Director, Zee TV",
      message: "Praveen's students always stand out in auditions. His character decoding method produces naturally confident actors. I've cast several of his workshop graduates.",
      rating: 5
    },
    {
      name: "Meera Kapoor", 
      designation: "Director, Colors TV",
      message: "The transformation I see in actors after Praveen's workshop is remarkable. They understand character depth better than many experienced actors.",
      rating: 5
    },
    {
      name: "Amit Verma",
      designation: "Producer, Sony Entertainment",
      message: "Praveen's approach to acting education is revolutionary. His students come prepared, confident, and with a deep understanding of their craft.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-dark relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-radial-glow opacity-60"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            What Our <span className="text-navy-light">Students Say</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Real stories from aspiring actors whose dreams became reality after just 3 days.
          </p>
        </div>

        {/* Student Problem Screenshots */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            <span className="text-red-400">Before:</span> Common Acting Problems Our Students Faced
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="glow-border bg-red-900/10 backdrop-blur-sm border-red-500/30 p-6 animate-scale-in">
              <div className="text-center">
                <div className="bg-red-500/20 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">😰</span>
                </div>
                <h4 className="text-white font-semibold mb-2">Stage Fear Problem</h4>
                <p className="text-white/70 text-sm">Screenshot: Student freezing during audition</p>
              </div>
            </Card>
            
            <Card className="glow-border bg-red-900/10 backdrop-blur-sm border-red-500/30 p-6 animate-scale-in">
              <div className="text-center">
                <div className="bg-red-500/20 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎭</span>
                </div>
                <h4 className="text-white font-semibold mb-2">Overacting Issues</h4>
                <p className="text-white/70 text-sm">Screenshot: Unnatural expressions</p>
              </div>
            </Card>
            
            <Card className="glow-border bg-red-900/10 backdrop-blur-sm border-red-500/30 p-6 animate-scale-in">
              <div className="text-center">
                <div className="bg-red-500/20 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">😑</span>
                </div>
                <h4 className="text-white font-semibold mb-2">Flat Dialogue Delivery</h4>
                <p className="text-white/70 text-sm">Screenshot: Monotone speech patterns</p>
              </div>
            </Card>
          </div>
        </div>

        {/* Student Success Stories */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            <span className="text-green-400">After:</span> Student Success Stories
          </h3>
          
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="glow-border bg-green-900/10 backdrop-blur-sm border-green-500/30 hover-lift shadow-dark-glow animate-scale-in p-6"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <Quote className="h-8 w-8 text-navy-light mb-4" />
              
              <p className="text-white/90 mb-6 leading-relaxed">
                {testimonial.message}
              </p>
              
              {testimonial.isVideo && (
                <div className="mb-4">
                  <div 
                    className="relative bg-navy-primary/10 rounded-lg p-4 cursor-pointer hover:bg-navy-primary/20 transition-colors"
                    onClick={() => setActiveVideo(activeVideo === index ? null : index)}
                  >
                    <div className="flex items-center justify-center">
                      <Play className="h-8 w-8 text-primary mr-2" />
                      <span className="text-primary font-semibold">
                        {activeVideo === index ? "Playing..." : "Watch Video Testimonial"}
                      </span>
                    </div>
                    {activeVideo === index && (
                      <div className="mt-2 text-center">
                        <Volume2 className="h-4 w-4 text-navy-secondary inline mr-1" />
                        <span className="text-sm text-navy-secondary">Video testimonial playing</span>
                      </div>
                    )}
                  </div>
                </div>
              )}
              
              <div className="border-t border-border pt-4">
                <h4 className="font-semibold text-navy-light">{testimonial.name}</h4>
                <p className="text-sm text-white/70">{testimonial.age} • {testimonial.location}</p>
              </div>
            </Card>
            ))}
          </div>
        </div>

        {/* Professional Video Testimonials */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Industry <span className="text-navy-light">Professionals</span> Video Testimonials
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {professionalTestimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="glow-border bg-gradient-neon-glow p-6 text-white animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-300 fill-current" />
                  ))}
                </div>
                
                {/* Video Placeholder */}
                <div className="mb-4">
                  <div 
                    className="relative bg-navy-primary/20 rounded-lg p-8 cursor-pointer hover:bg-navy-primary/30 transition-colors glow-border"
                    onClick={() => setActiveVideo(activeVideo === (index + 100) ? null : (index + 100))}
                  >
                    <div className="flex items-center justify-center">
                      <Play className="h-12 w-12 text-white mr-2" />
                      <span className="text-white font-semibold text-lg">
                        {activeVideo === (index + 100) ? "Playing..." : "Watch Professional Testimonial"}
                      </span>
                    </div>
                    {activeVideo === (index + 100) && (
                      <div className="mt-4 text-center">
                        <Volume2 className="h-6 w-6 text-navy-light inline mr-2" />
                        <span className="text-navy-light">Professional testimonial playing</span>
                      </div>
                    )}
                  </div>
                </div>
                
                <Quote className="h-6 w-6 text-navy-light mb-4" />
                
                <p className="text-white/90 mb-6 leading-relaxed">
                  "{testimonial.message}"
                </p>
                
                <div className="border-t border-white/20 pt-4">
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-navy-light">{testimonial.designation}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="glow-border bg-gradient-neon-glow p-8 shadow-intense-glow max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Join Our Success Stories
            </h3>
            <p className="text-xl text-white/90 mb-6">
              Don't just dream about acting — start your journey with proven methods and expert guidance.
            </p>
            <Button 
              onClick={handleJoinWorkshop}
              className="btn-primary text-lg px-8 py-4 glow-border"
            >
              Start Your Acting Journey
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;