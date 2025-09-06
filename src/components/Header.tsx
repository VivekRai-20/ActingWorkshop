import { Button } from "@/components/ui/button";
import { Menu, X, Play, User, LogIn } from "lucide-react";
import { useState } from "react";
import CustomerDetailsForm from "./CustomerDetailsForm";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDetailsForm, setShowDetailsForm] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleJoinWorkshop = () => {
    setShowDetailsForm(true);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-card-custom">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Play className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-primary">ActingMaster</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('workshop')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Workshop
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('schedule')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Schedule
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-foreground hover:text-primary transition-colors"
            >
              FAQ
            </button>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <User className="h-4 w-4 mr-2" />
              Login
            </Button>
            <Button onClick={handleJoinWorkshop} className="btn-primary">
              Join Workshop
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border animate-slide-up">
            <nav className="flex flex-col space-y-4 mt-4">
              <button 
                onClick={() => scrollToSection('workshop')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Workshop
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('schedule')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Schedule
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Testimonials
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                FAQ
              </button>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" size="sm" className="justify-start">
                  <LogIn className="h-4 w-4 mr-2" />
                  Login
                </Button>
                <Button onClick={handleJoinWorkshop} className="btn-primary">
                  Join Workshop
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
      
      <CustomerDetailsForm
        isOpen={showDetailsForm}
        onClose={() => setShowDetailsForm(false)}
        amount={29900}
      />
    </header>
  );
};

export default Header;