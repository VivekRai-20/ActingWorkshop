'use client';

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, CheckCircle } from "lucide-react";
import { useState } from "react";
import CustomerDetailsForm from "./CustomerDetailsForm";

const FAQ = () => {
  const [showDetailsForm, setShowDetailsForm] = useState(false);

  const handleJoinWorkshop = () => {
    setShowDetailsForm(true);
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

  return (
    <section id="faq" className="py-20 dark-section relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Frequently Asked <span className="text-navy-light">Questions</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
            Get clarity on everything you need to know about the workshop.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* FAQ Accordion */}
          <Card className="glow-border bg-white/5 backdrop-blur-sm p-8 animate-fade-in">
            <div className="flex items-center mb-6">
              <HelpCircle className="h-8 md:h-10 w-8 md:w-10 text-navy-light mr-3" />
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Common Questions
              </h3>
            </div>
            
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-white/10">
                  <AccordionTrigger className="text-left font-semibold text-white hover:text-navy-light text-lg md:text-xl">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80 leading-relaxed text-base md:text-lg">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <Card className="bg-white shadow-xl rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
                Ready to Begin?
              </h3>
              <p className="text-lg md:text-xl text-gray-600 mb-6">
                If you're passionate about acting and ready to learn, join hundreds of students 
                who've transformed their skills with our proven method.
              </p>

              <div className="flex flex-wrap justify-center gap-6 mb-8 text-base md:text-lg">
                <div className="flex items-center text-gray-800">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-2" />
                  <span>3-Day Intensive Training</span>
                </div>
                <div className="flex items-center text-gray-800">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-2" />
                  <span>Personal Feedback from Expert</span>
                </div>
                <div className="flex items-center text-gray-800">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-2" />
                  <span>Official Certification</span>
                </div>
              </div>

              <Button 
                onClick={handleJoinWorkshop}
                className="bg-blue-600 hover:bg-blue-700 text-white text-base sm:text-lg md:text-xl py-3 px-6 sm:px-8 rounded-xl shadow-md transition w-full sm:w-auto text-center leading-tight"
              >
                <span className="block sm:inline leading-tight">Enroll Now</span>
              </Button>
            </Card>
          </div>
        </div>
      </div>
      
      <CustomerDetailsForm
        isOpen={showDetailsForm}
        onClose={() => setShowDetailsForm(false)}
        amount={19900}
      />
    </section>
  );
};

export default FAQ;
