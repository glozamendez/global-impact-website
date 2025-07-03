
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

export const ExperienceSection = () => {
  const experiences = [
    {
      title: "Business Development Intern",
      organization: "Freedom House",
      location: "Washington D.C.",
      period: "Jun 2024 – Aug 2024",
      description: "Served as proposal coordinator for high-value projects ($500K-$1.5M+). Conducted market research and supported Latin American & Caribbean teams.",
      tags: ["Proposal Writing", "Market Research", "Data Analysis", "Government Relations"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Alumni Engagement Lead",
      organization: "CARE Center",
      location: "Claremont, CA",
      period: "Aug 2022 – Present",
      description: "Led team of 5 fellows to launch first-ever alumni engagement initiative, establishing new alumni committee and engaging 20+ alumni.",
      tags: ["Leadership", "Community Building", "Alumni Relations", "Team Management"],
      gradient: "from-emerald-500 to-green-500"
    },
    {
      title: "Gender and Diversity Analyst Intern",
      organization: "XUMEK- Derechos Humanos",
      location: "Mendoza, Argentina",
      period: "May 2023 – Aug 2023",
      description: "Developed inclusive self-care workshops for 35 incarcerated women and led research on 150+ femicide cases for the Femicide Observatory project.",
      tags: ["Human Rights", "Gender Studies", "Research", "Workshop Facilitation"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Director of Community Engagement",
      organization: "SOURCE Non-Profit Consulting",
      location: "Claremont, CA",
      period: "Sep 2022 – Present",
      description: "Created comprehensive impact reports and designed DE&I workshops for recruitment teams, implementing inclusive hiring practices.",
      tags: ["DE&I", "Community Engagement", "Impact Assessment", "Consulting"],
      gradient: "from-indigo-500 to-violet-500"
    },
    {
      title: "Strategic Development Intern",
      organization: "Asociación CREAR",
      location: "Sámara, Costa Rica",
      period: "Jun 2022 – Aug 2022",
      description: "Designed art and English lessons for underserved students. Secured over $14,000 in federal Puntos de Cultura arts funding.",
      tags: ["Grant Writing", "Education", "Arts Programming", "Community Development"],
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50/80 to-blue-50/80 backdrop-blur-sm relative">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-indigo-900 bg-clip-text text-transparent mb-6">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            A diverse portfolio of international experience in social impact, policy, and community development.
          </p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-0 bg-white/70 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group overflow-hidden">
              <div className={`h-1 bg-gradient-to-r ${exp.gradient}`}></div>
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className={`p-3 bg-gradient-to-r ${exp.gradient} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Briefcase className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-900 mb-1">
                        {exp.title}
                      </CardTitle>
                      <CardDescription className="text-gray-700 font-semibold text-base">
                        {exp.organization} • {exp.location}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <Badge variant="secondary" className="bg-gray-100 text-gray-700 font-medium px-3 py-1">
                      {exp.period}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-6 leading-relaxed text-base">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-sm px-3 py-1 border-gray-300 hover:bg-gray-50 transition-colors">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
