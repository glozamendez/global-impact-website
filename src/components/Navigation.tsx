
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg z-50 border-b border-white/20 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="font-bold text-xl bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
            Guadalupe Loza-Mendez
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-violet-600 transition-all duration-300 font-medium relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-600 to-indigo-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-gray-700 hover:text-violet-600 transition-all duration-300 font-medium relative group"
            >
              Experience
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-600 to-indigo-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-gray-700 hover:text-violet-600 transition-all duration-300 font-medium relative group"
            >
              Skills
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-600 to-indigo-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-violet-600 transition-all duration-300 font-medium relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-600 to-indigo-600 group-hover:w-full transition-all duration-300"></span>
            </button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:bg-violet-50"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 bg-white/90 backdrop-blur-lg rounded-b-lg border-t border-white/20">
            <div className="flex flex-col space-y-3 pt-4">
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-gray-700 hover:text-violet-600 transition-colors px-4 py-2 rounded-lg hover:bg-violet-50 font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="text-left text-gray-700 hover:text-violet-600 transition-colors px-4 py-2 rounded-lg hover:bg-violet-50 font-medium"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-left text-gray-700 hover:text-violet-600 transition-colors px-4 py-2 rounded-lg hover:bg-violet-50 font-medium"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-gray-700 hover:text-violet-600 transition-colors px-4 py-2 rounded-lg hover:bg-violet-50 font-medium"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
