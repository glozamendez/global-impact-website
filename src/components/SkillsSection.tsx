import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Languages, Users, FileText, Star, Globe, Zap } from "lucide-react";
export const SkillsSection = () => {
  return <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/40 backdrop-blur-sm relative">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50/50 to-indigo-50/50"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-violet-900 bg-clip-text text-transparent mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            A comprehensive skill set spanning languages, technical tools, and leadership capabilities.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="border-0 bg-gradient-to-br from-blue-50 to-indigo-100 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group overflow-hidden">
            <div className="h-1 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
            <CardHeader className="text-center pb-4">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Languages className="w-8 h-8 text-white" />
                </div>
              </div>
              <CardTitle className="text-2xl text-blue-800">Languages</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="space-y-4">
                <div className="bg-white/70 rounded-lg p-4">
                  <Badge className="mb-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2">Native</Badge>
                  <p className="text-blue-700 font-semibold">English • Spanish</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-0 bg-gradient-to-br from-emerald-50 to-green-100 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group overflow-hidden">
            <div className="h-1 bg-gradient-to-r from-emerald-500 to-green-500"></div>
            <CardHeader className="text-center pb-4">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-8 h-8 text-white" />
                </div>
              </div>
              <CardTitle className="text-2xl text-green-800">Technical Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-white/70 rounded-lg p-4">
                  <p className="font-bold text-green-700 mb-3 flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    Data Analysis
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-green-300">STATA (Intermediate)</Badge>
                    <Badge variant="outline" className="border-green-300">R (Beginner)</Badge>
                  </div>
                </div>
                <div className="bg-white/70 rounded-lg p-4">
                  <p className="font-bold text-green-700 mb-3 flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    Software
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-green-300">Microsoft Office (Advanced)</Badge>
                    <Badge variant="outline" className="border-green-300">Airtable (Advanced)</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-0 bg-gradient-to-br from-purple-50 to-pink-100 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group overflow-hidden">
            <div className="h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
            <CardHeader className="text-center pb-4">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
              </div>
              <CardTitle className="text-2xl text-purple-800">Leadership</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Badge variant="outline" className="block text-center py-2 border-purple-300 hover:bg-purple-50 transition-colors">1Gen Mentor</Badge>
                <Badge variant="outline" className="block text-center py-2 border-purple-300 hover:bg-purple-50 transition-colors">Cybersecurity Club VP</Badge>
                <Badge variant="outline" className="block text-center py-2 border-purple-300 hover:bg-purple-50 transition-colors">Women in Leadership Fellow</Badge>
                <Badge variant="outline" className="block text-center py-2 border-purple-300 hover:bg-purple-50 transition-colors">Finance Chair</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center">
          <Card className="max-w-4xl mx-auto border-0 bg-gradient-to-br from-indigo-50 to-purple-100 shadow-2xl overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl shadow-lg">
                  <Globe className="w-8 h-8 text-white" />
                </div>
              </div>
              <CardTitle className="text-3xl text-indigo-800">Current Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <h4 className="font-bold text-indigo-900 mb-3 text-lg">Utrecht University</h4>
                  <p className="text-indigo-700 leading-relaxed">Rotary Global Grant Scholar preparing for a M.A. in Conflict Studies and Human Rights</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <h4 className="font-bold text-indigo-900 mb-3 text-lg">Projects for Peace - Colombia</h4>
                  <p className="text-indigo-700 leading-relaxed">Creating an interactive map highlighting local artists from Comuna 13 in Medellin, Colombia</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};