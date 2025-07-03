
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const AboutSection = () => {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A passionate advocate for social impact with extensive international experience in diversity, equity, and inclusion initiatives.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-gray-700 leading-relaxed mb-6">
              As a senior at Claremont McKenna College studying Economics and International Relations, I've dedicated my career to advancing diversity, equity, and inclusion across multiple sectors and continents.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              My journey has taken me from conducting femicide research in Argentina to coordinating high-value proposals at Freedom House in Washington D.C., always with a focus on creating meaningful social impact.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              Currently, I'm excited to be heading to Utrecht University as a Rotary Global Grant Scholar, while simultaneously working on Projects for Peace in Colombia - continuing my commitment to international development and social justice.
            </p>
          </div>
          
          <div className="space-y-6">
            <Card className="border-blue-200 bg-blue-50/50">
              <CardHeader>
                <CardTitle className="text-lg text-blue-800">Current Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700">
                  Preparing for graduate studies at Utrecht University while leading a Projects for Peace initiative in Colombia focused on community development and social cohesion.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-green-200 bg-green-50/50">
              <CardHeader>
                <CardTitle className="text-lg text-green-800">Global Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-700">
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
