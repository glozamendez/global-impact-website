
import { Button } from "@/components/ui/button";
import { GraduationCap, Users, Sparkles, Leaf } from "lucide-react";

export const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <div className="mb-8 relative">
            <div className="w-40 h-40 mx-auto mb-6 bg-gradient-to-br from-green-500 via-emerald-600 to-yellow-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-2xl relative overflow-hidden group hover:scale-105 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative z-10">GL</span>
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-yellow-600 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            </div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
              <Leaf className="w-6 h-6 text-yellow-500 animate-pulse" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-green-800 to-yellow-700 bg-clip-text text-transparent mb-6 animate-fade-in">
            Guadalupe Loza-Mendez
          </h1>
          
          <p className="text-xl md:text-3xl bg-gradient-to-r from-green-600 to-yellow-600 bg-clip-text text-transparent mb-4 max-w-4xl mx-auto font-semibold animate-fade-in delay-200">
            Economics & International Relations Professional
          </p>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-300">
            Incoming Utrecht University Student | Rotary Global Grant Scholar | Projects for Peace in Colombia
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-in delay-400">
            <div className="flex items-center gap-2 bg-white/70 backdrop-blur-lg rounded-full px-6 py-3 border border-white/50 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              <GraduationCap className="w-5 h-5 text-green-600" />
              <span className="text-sm font-semibold text-gray-800">CMC Class of 2025</span>
            </div>
            <div className="flex items-center gap-2 bg-white/70 backdrop-blur-lg rounded-full px-6 py-3 border border-white/50 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              <Users className="w-5 h-5 text-yellow-600" />
              <span className="text-sm font-semibold text-gray-800">DE&I Leadership</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in delay-500">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-gradient-to-r from-green-600 to-yellow-600 hover:from-green-700 hover:to-yellow-700 text-white px-10 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0"
            >
              Get In Touch
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-green-600 text-green-600 hover:bg-green-50 hover:border-green-700 px-10 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-white/70 backdrop-blur-sm"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
