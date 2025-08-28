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
    <section id="faq" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Frequently Asked <span className="text-navy-secondary">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get clarity on everything you need to know about the workshop.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* FAQ Accordion */}
          <div className="animate-fade-in">
            <Card className="card-elegant p-8">
              <div className="flex items-center mb-6">
                <HelpCircle className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold text-primary">Common Questions</h3>
              </div>
              
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-semibold text-primary hover:text-navy-secondary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Card>
          </div>

          {/* Who Should NOT Join */}
          <div className="space-y-8">
            <Card className="card-elegant p-8 animate-scale-in">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Who Should <span className="text-red-500">NOT</span> Join This Workshop
              </h3>
              <p className="text-muted-foreground mb-6">
                This workshop is NOT for you if:
              </p>
              <div className="space-y-4">
                {notForYou.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-red-100 p-1 rounded-full mt-1">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    </div>
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                <p className="text-primary font-semibold">
                  This workshop is designed for serious learners who truly want to grow their acting skills 
                  and are ready to invest their focus and energy for 3 days.
                </p>
              </div>
            </Card>

            <Card className="card-elegant p-8 bg-gradient-primary text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Begin?</h3>
              <p className="text-navy-light mb-6">
                If you're passionate about acting and ready to learn, join hundreds of students 
                who've transformed their skills with our proven method.
              </p>
              <div className="flex items-center mb-6">
                <CheckCircle className="h-5 w-5 text-navy-light mr-2" />
                <span className="text-navy-light">3-Day Intensive Training</span>
              </div>
              <div className="flex items-center mb-6">
                <CheckCircle className="h-5 w-5 text-navy-light mr-2" />
                <span className="text-navy-light">Personal Feedback from Expert</span>
              </div>
              <div className="flex items-center mb-6">
                <CheckCircle className="h-5 w-5 text-navy-light mr-2" />
                <span className="text-navy-light">Official Certification</span>
              </div>
              <Button 
                onClick={handleJoinWorkshop}
                className="bg-white text-primary hover:bg-navy-light hover:text-primary w-full text-lg py-3 font-semibold rounded-xl transition-all duration-300 hover:scale-105"
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