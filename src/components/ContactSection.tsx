
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm always interested in discussing opportunities in international development, social impact, and diversity & inclusion initiatives.
          </p>
        </div>
        
        <Card className="border-blue-200 bg-white shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-gray-900">Get In Touch</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center group">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <Mail className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <a 
                  href="mailto:glozamendez25@cmc.edu" 
                  className="text-blue-600 hover:text-blue-800 transition-colors break-all"
                >
                  glozamendez25@cmc.edu
                </a>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <Phone className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                <a 
                  href="tel:+19096879501" 
                  className="text-green-600 hover:text-green-800 transition-colors"
                >
                  (909) 687-9501
                </a>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-200 transition-colors">
                  <Linkedin className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">LinkedIn</h3>
                <a 
                  href="https://linkedin.com/in/guadalupe-loza-mendez" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 transition-colors"
                >
                  Connect with me
                </a>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                Open to opportunities in international development, policy research, and social impact initiatives.
              </p>
              <Button 
                size="lg"
                onClick={() => window.open('mailto:glozamendez25@cmc.edu')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
              >
                Send me an email
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
