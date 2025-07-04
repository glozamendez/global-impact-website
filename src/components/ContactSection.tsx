
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Send, MessageSquare, Leaf } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-100/80 to-yellow-100/80 backdrop-blur-sm relative">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      {/* Nature accents */}
      <div className="absolute top-20 left-20 w-8 h-8 text-green-400/20">
        <Leaf className="w-full h-full animate-pulse" />
      </div>
      <div className="absolute bottom-20 right-20 w-6 h-6 text-yellow-500/20">
        <Leaf className="w-full h-full animate-pulse delay-500" />
      </div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-green-800 bg-clip-text text-transparent mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm always interested in discussing opportunities in international development, social impact, and diversity & inclusion initiatives.
          </p>
        </div>
        
        <Card className="border-0 bg-white/70 backdrop-blur-lg shadow-2xl overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-green-500 via-emerald-500 to-yellow-500"></div>
          <CardHeader className="text-center pb-8">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-gradient-to-r from-green-500 to-yellow-500 rounded-2xl shadow-lg">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
            </div>
            <CardTitle className="text-3xl text-gray-900">Get In Touch</CardTitle>
          </CardHeader>
          <CardContent className="pb-8">
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-3 text-lg">Email</h3>
                <a 
                  href="mailto:glozamendez25@cmc.edu" 
                  className="text-green-600 hover:text-green-800 transition-colors break-all font-semibold text-base"
                >
                  glozamendez25@cmc.edu
                </a>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  <Linkedin className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-3 text-lg">LinkedIn</h3>
                <a 
                  href="https://linkedin.com/in/guadalupe-loza-mendez" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-yellow-600 hover:text-yellow-800 transition-colors font-semibold text-base"
                >
                  Connect with me
                </a>
              </div>
            </div>
            
            <div className="text-center bg-gradient-to-r from-green-50 to-yellow-50 rounded-2xl p-8">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Open to opportunities in international development, policy research, and social impact initiatives.
              </p>
              <Button 
                size="lg"
                onClick={() => window.open('mailto:glozamendez25@cmc.edu')}
                className="bg-gradient-to-r from-green-600 to-yellow-600 hover:from-green-700 hover:to-yellow-700 text-white px-10 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0"
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
