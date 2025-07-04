
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, Camera, Leaf } from "lucide-react";
import { useState } from "react";

export const PhotoSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 via-green-50 to-yellow-50 relative overflow-hidden">
      {/* Nature-themed background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-green-400/10 to-yellow-400/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-tl from-yellow-500/10 to-green-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <Leaf className="absolute top-20 right-32 w-6 h-6 text-green-400/30 animate-pulse" />
        <Leaf className="absolute bottom-32 left-24 w-8 h-8 text-yellow-500/30 animate-pulse delay-500" />
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-800 via-emerald-600 to-yellow-600 bg-clip-text text-transparent mb-6">
            Personal Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Share a glimpse into your world and experiences
          </p>
        </div>

        <Card className="border-0 bg-white/70 backdrop-blur-lg shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500">
          <div className="h-2 bg-gradient-to-r from-green-500 via-emerald-500 to-yellow-500"></div>
          <CardContent className="p-8">
            {!selectedImage ? (
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-green-400 to-yellow-500 rounded-full flex items-center justify-center shadow-xl group hover:scale-110 transition-all duration-300">
                  <Camera className="w-12 h-12 text-white group-hover:rotate-12 transition-transform duration-300" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Add Your Photo</h3>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                  Upload a personal photo to make your portfolio more engaging and personalized
                </p>
                
                <label htmlFor="photo-upload">
                  <Button 
                    className="bg-gradient-to-r from-green-600 to-yellow-600 hover:from-green-700 hover:to-yellow-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0 cursor-pointer"
                    asChild
                  >
                    <span>
                      <Upload className="w-5 h-5 mr-2" />
                      Choose Photo
                    </span>
                  </Button>
                </label>
                <input
                  id="photo-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </div>
            ) : (
              <div className="text-center">
                <div className="relative inline-block mb-6 group">
                  <img
                    src={selectedImage}
                    alt="Your uploaded photo"
                    className="w-64 h-64 object-cover rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Beautiful!</h3>
                <p className="text-gray-600 mb-6">Your photo adds a personal touch to your portfolio</p>
                
                <label htmlFor="photo-upload-new">
                  <Button 
                    variant="outline"
                    className="border-2 border-green-600 text-green-600 hover:bg-green-50 hover:border-green-700 px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-white/70 backdrop-blur-sm cursor-pointer"
                    asChild
                  >
                    <span>
                      <Upload className="w-4 h-4 mr-2" />
                      Change Photo
                    </span>
                  </Button>
                </label>
                <input
                  id="photo-upload-new"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
