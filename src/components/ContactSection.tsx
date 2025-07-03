
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Send, MessageSquare } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-100/80 to-purple-100/80 backdrop-blur-sm relative">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-indigo-900 bg-clip-text text-transparent mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm always interested in discussing opportunities in international development, social impact, and diversity & inclusion initiatives.
          </p>
        </div>
        
        <Card className="border-0 bg-white/70 backdrop-blur-lg shadow-2xl overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500"></div>
          <CardHeader className="text-center pb-8">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-2xl shadow-lg">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
            </div>
            <CardTitle className="text-3xl text-gray-900">Get In Touch</CardTitle>
          </CardHeader>
          <CardContent className="pb-8">
            <div className="grid md:grid-cols-3 gap-8 mb-10">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-3 text-lg">Email</h3>
                <a 
                  href="mailto:glozamendez25@cmc.edu" 
                  className="text-blue-600 hover:text-blue-800 transition-colors break-all font-semibold text-base"
                >
                  glozamendez25@cmc.edu
                </a>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-3 text-lg">Phone</h3>
                <a 
                  href="tel:+19096879501" 
                  className="text-green-600 hover:text-green-800 transition-colors font-semibold text-base"
                >
                  (909) 687-9501
                </a>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-indigo-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  <Linkedin className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-3 text-lg">LinkedIn</h3>
                <a 
                  href="https://linkedin.com/in/guadalupe-loza-mendez" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 transition-colors font-semibold text-base"
                >
                  Connect with me
                </a>
              </div>
            </div>
            
            <div className="text-center bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-8">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Open to opportunities in international development, policy research, and social impact initiatives.
              </p>
              <Button 
                size="lg"
                onClick={() => window.open('mailto:glozamendez25@cmc.edu')}
                className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white px-10 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0"
              >
                <Send className="w-5 h-5 mr-2" />
                Send me an email
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
