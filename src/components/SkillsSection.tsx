
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Languages, Users, FileText } from "lucide-react";

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A comprehensive skill set spanning languages, technical tools, and leadership capabilities.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-blue-200 bg-blue-50/50 hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <Languages className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <CardTitle className="text-blue-800">Languages</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="space-y-3">
                <div>
                  <Badge className="mb-2 bg-blue-600">Native</Badge>
                  <p className="text-sm text-blue-700">English • Spanish</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-green-200 bg-green-50/50 hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <FileText className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <CardTitle className="text-green-800">Technical Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-green-700 mb-2">Data Analysis</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">STATA (Intermediate)</Badge>
                    <Badge variant="outline">R (Beginner)</Badge>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-green-700 mb-2">Software</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Microsoft Office (Advanced)</Badge>
                    <Badge variant="outline">Airtable</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-purple-200 bg-purple-50/50 hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <CardTitle className="text-purple-800">Leadership</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Badge variant="outline" className="block text-center">1Gen Mentor</Badge>
                <Badge variant="outline" className="block text-center">Cybersecurity Club VP</Badge>
                <Badge variant="outline" className="block text-center">Women in Leadership Fellow</Badge>
                <Badge variant="outline" className="block text-center">Finance Chair</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto border-indigo-200 bg-indigo-50/50">
            <CardHeader>
              <CardTitle className="text-indigo-800">Current Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-white/80 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-900 mb-2">Utrecht University</h4>
                  <p className="text-indigo-700 text-sm">Rotary Global Grant Scholar preparing for graduate studies in international development.</p>
                </div>
                <div className="bg-white/80 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-900 mb-2">Projects for Peace - Colombia</h4>
                  <p className="text-indigo-700 text-sm">Leading community development initiatives focused on social cohesion and peacebuilding.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
