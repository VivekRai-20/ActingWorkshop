'use client';

import { Button } from "@/components/ui/button";
import { Play, Mail, Phone, MapPin, Instagram, Youtube, Facebook } from "lucide-react";
import { useState } from "react";
import CustomerDetailsForm from "./CustomerDetailsForm";

const Footer = () => {
  const [showDetailsForm, setShowDetailsForm] = useState(false);

  const handleJoinWorkshop = () => {
    setShowDetailsForm(true);
  };

  return (
    <footer className="bg-gradient-dark relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-radial-glow opacity-40"></div>
      <div className="py-16 text-white relative z-10">
        <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Play className="h-8 w-8 text-navy-light" />
              <span className="text-2xl font-bold">ActingMaster</span>
            </div>
            <p className="text-navy-light mb-6 leading-relaxed">
              Transform your acting skills in just 3 days with Praveen Hingonia's proven Character Decoding method. 
              Affordable, effective, and designed for aspiring actors who dream big.
            </p>
            <blockquote className="text-xl italic text-navy-light border-l-4 border-navy-light pl-6">
              "Talent should never depend on money."
            </blockquote>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <div className="space-y-4">
              <button 
                onClick={() => document.getElementById('workshop')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-navy-light hover:text-white transition-colors"
              >
                Workshop Details
              </button>
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-navy-light hover:text-white transition-colors"
              >
                About Praveen
              </button>
              <button 
                onClick={() => document.getElementById('schedule')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-navy-light hover:text-white transition-colors"
              >
                Schedule
              </button>
              <button 
                onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-navy-light hover:text-white transition-colors"
              >
                Testimonials
              </button>
              <button 
                onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-navy-light hover:text-white transition-colors"
              >
                FAQ
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-navy-light mr-3 mt-1 flex-shrink-0" />
                <span className="text-navy-light text-sm break-all">praveenhingoniavision@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-navy-light mr-3" />
                <span className="text-navy-light">+91 98765 43210</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-navy-light mr-3" />
                <span className="text-navy-light">Mumbai, India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/praveenhingoniavision?igsh=MXVpZDIzdTlqZXUzbg%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                >
                  <Instagram className="h-5 w-5 text-navy-light" />
                </a>
                <a 
                  href="https://youtube.com/@praveenhingoniavision?si=46FPTviYlD-ODOLD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                >
                  <Youtube className="h-5 w-5 text-navy-light" />
                </a>
                <a 
                  href="https://www.facebook.com/share/19PhMayWP4/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                >
                  <Facebook className="h-5 w-5 text-navy-light" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="border-t border-navy-light/20 mt-12 pt-12 text-center">
          <h3 className="text-3xl font-bold mb-4">Don't Wait — Your Acting Journey Starts Now!</h3>
          <p className="text-xl text-navy-light mb-8 max-w-3xl mx-auto">
            Limited seats available. Join the workshop that has transformed hundreds of aspiring actors 
            into confident performers.
          </p>
          <Button 
            onClick={handleJoinWorkshop}
            className="bg-white text-primary hover:bg-navy-light hover:text-white text-base sm:text-lg px-6 sm:px-8 lg:px-12 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-glow w-full sm:w-auto text-center"
          >
            <span className="block sm:inline leading-tight">Enroll in Workshop</span>
          </Button>
        </div>

        {/* Copyright */}
        <div className="border-t border-navy-light/20 mt-12 pt-8 text-center">
          <p className="text-navy-light">
            © 2024 ActingMaster by Praveen Hingonia. All rights reserved. | 
            <span className="mx-2">Privacy Policy</span> | 
            <span className="mx-2">Terms of Service</span>
          </p>
         </div>
        </div>
      </div>
      
      <CustomerDetailsForm
        isOpen={showDetailsForm}
        onClose={() => setShowDetailsForm(false)}
        amount={29900}
      />
    </footer>
  );
};

export default Footer;