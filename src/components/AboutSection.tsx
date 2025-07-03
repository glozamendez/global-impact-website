
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Heart } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/40 backdrop-blur-sm relative">
      <div className="absolute inset-0 bg-gradient-to-r from-white/50 to-purple-50/50"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-purple-900 bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            A passionate advocate for social impact with extensive international experience in diversity, equity, and inclusion initiatives.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed text-lg">
              As a senior at Claremont McKenna College studying Economics and International Relations, I've dedicated my career to advancing diversity, equity, and inclusion across multiple sectors and continents.
            </p>
            
            <p className="text-gray-700 leading-relaxed text-lg">
              My journey has taken me from conducting femicide research in Argentina to coordinating high-value proposals at Freedom House in Washington D.C., always with a focus on creating meaningful social impact.
            </p>
            
            <p className="text-gray-700 leading-relaxed text-lg">
              Currently, I'm excited to be heading to Utrecht University as a Rotary Global Grant Scholar, while simultaneously working on Projects for Peace in Colombia - continuing my commitment to international development and social justice.
            </p>
          </div>
          
          <div className="space-y-8">
            <Card className="border-0 bg-gradient-to-br from-blue-50 to-indigo-100 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-blue-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <CardTitle className="text-xl text-blue-800">Current Focus</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700 leading-relaxed">
                  Preparing for graduate studies at Utrecht University while leading a Projects for Peace initiative in Colombia focused on community development and social cohesion.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 bg-gradient-to-br from-emerald-50 to-green-100 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-green-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <CardTitle className="text-xl text-green-800">Global Experience</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-green-700 leading-relaxed">
                  Bilingual professional with hands-on experience across the Americas - from Costa Rica and Argentina to Mexico and the United States.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
