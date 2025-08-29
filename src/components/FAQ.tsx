import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, CheckCircle } from "lucide-react";

const FAQ = () => {
  const handleJoinWorkshop = () => {
    // This will later integrate with payment gateway
    console.log("Redirect to payment gateway");
  };

  const faqs = [
    {
      question: "Do I need prior acting experience to join this workshop?",
      answer: "No. This workshop is designed for complete beginners as well as those with some acting experience. All you need is passion and willingness to learn. Our Character Decoding method starts from the basics and builds up systematically."
    },
    {
      question: "Will this workshop help me get roles in TV or films?",
      answer: "This workshop will give you the skills, confidence, and audition techniques to perform well and stand out. Acting is a journey — this is your foundation step. Many of our students have gotten callbacks and roles after applying our techniques."
    },
    {
      question: "What is 'Character Decoding'?",
      answer: "It's my unique method to break down and understand any role — from emotions to body language — so you can perform naturally, without memorizing mechanically. You'll learn to connect with characters on a deeper level and bring authenticity to your performances."
    },
    {
      question: "How will the online workshop work?",
      answer: "We will conduct live interactive sessions via Zoom/Google Meet. You'll participate in activities, perform on camera, and get direct feedback from me. It's fully interactive, not just watching videos — you'll be actively practicing throughout."
    },
    {
      question: "Will I get a certificate?",
      answer: "Yes. All participants who complete the 3-day workshop will receive an Official Certificate of Participation signed by me. This certificate validates your training in the Character Decoding method."
    },
    {
      question: "What if I'm shy or have stage fear?",
      answer: "That's exactly why you should join! You'll learn specific techniques to overcome fear and perform with confidence in a supportive environment. Many of our most successful students started with severe stage fear."
    },
    {
      question: "Will recordings be available if I miss a session?",
      answer: "No. This is a fully interactive workshop where you practice live and get real-time feedback. To get the full benefit, you must attend live. The magic happens in the interaction, not in passive watching."
    },
    {
      question: "Is there an age limit?",
      answer: "No. Anyone from school students to working professionals can join — the only requirement is passion for acting. We've successfully trained students from 12 to 45 years old."
    },
    {
      question: "How many seats are available?",
      answer: "Seats are limited to ensure personal attention and quality interaction. Each batch has a maximum of 25 participants. Early booking is advised as our workshops typically fill up quickly."
    },
    {
      question: "What should I prepare before joining?",
      answer: "Just have a notebook, pen, a quiet space, and good internet connection. Scripts and exercises will be provided during the workshop. Come with an open mind and readiness to participate actively."
    }
  ];

  const notForYou = [
    "You think acting can be mastered in a few minutes without practice",
    "You are not willing to participate in live exercises and activities", 
    "You expect to become a celebrity overnight without hard work",
    "You have no interest in learning the basics of performance and discipline",
    "You are joining just to 'pass time' without genuine passion for acting"
  ];

  return (
    <section id="faq" className="py-20 dark-section relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Frequently Asked <span className="text-navy-light">Questions</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Get clarity on everything you need to know about the workshop.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* FAQ Accordion */}
          <Card className="glow-border bg-white/5 backdrop-blur-sm p-8 animate-fade-in">
            <div className="flex items-center mb-6">
              <HelpCircle className="h-8 w-8 text-navy-light mr-3" />
              <h3 className="text-2xl font-bold text-white">Common Questions</h3>
            </div>
            
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-white/10">
                  <AccordionTrigger className="text-left font-semibold text-white hover:text-navy-light">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <Card className="glow-border bg-gradient-neon-glow p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Begin?</h3>
              <p className="text-white/90 mb-6">
                If you're passionate about acting and ready to learn, join hundreds of students 
                who've transformed their skills with our proven method.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8">
                <div className="flex items-center text-white">
                  <CheckCircle className="h-5 w-5 text-navy-light mr-2" />
                  <span>3-Day Intensive Training</span>
                </div>
                <div className="flex items-center text-white">
                  <CheckCircle className="h-5 w-5 text-navy-light mr-2" />
                  <span>Personal Feedback from Expert</span>
                </div>
                <div className="flex items-center text-white">
                  <CheckCircle className="h-5 w-5 text-navy-light mr-2" />
                  <span>Official Certification</span>
                </div>
              </div>
              <Button 
                onClick={handleJoinWorkshop}
                className="btn-primary text-lg py-3 px-8 glow-border"
              >
                Enroll in Workshop Now
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;