
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const ExperienceSection = () => {
  const experiences = [
    {
      title: "Business Development Intern",
      organization: "Freedom House",
      location: "Washington D.C.",
      period: "Jun 2024 – Aug 2024",
      description: "Served as proposal coordinator for high-value projects ($500K-$1.5M+). Conducted market research and supported Latin American & Caribbean teams.",
      tags: ["Proposal Writing", "Market Research", "Data Analysis", "Government Relations"],
      color: "bg-blue-50 border-blue-200"
    },
    {
      title: "Alumni Engagement Lead",
      organization: "CARE Center",
      location: "Claremont, CA",
      period: "Aug 2022 – Present",
      description: "Led team of 5 fellows to launch first-ever alumni engagement initiative, establishing new alumni committee and engaging 20+ alumni.",
      tags: ["Leadership", "Community Building", "Alumni Relations", "Team Management"],
      color: "bg-green-50 border-green-200"
    },
    {
      title: "Gender and Diversity Analyst Intern",
      organization: "XUMEK- Derechos Humanos",
      location: "Mendoza, Argentina",
      period: "May 2023 – Aug 2023",
      description: "Developed inclusive self-care workshops for 35 incarcerated women and led research on 150+ femicide cases for the Femicide Observatory project.",
      tags: ["Human Rights", "Gender Studies", "Research", "Workshop Facilitation"],
      color: "bg-purple-50 border-purple-200"
    },
    {
      title: "Director of Community Engagement",
      organization: "SOURCE Non-Profit Consulting",
      location: "Claremont, CA",
      period: "Sep 2022 – Present",
      description: "Created comprehensive impact reports and designed DE&I workshops for recruitment teams, implementing inclusive hiring practices.",
      tags: ["DE&I", "Community Engagement", "Impact Assessment", "Consulting"],
      color: "bg-indigo-50 border-indigo-200"
    },
    {
      title: "Strategic Development Intern",
      organization: "Asociación CREAR",
      location: "Sámara, Costa Rica",
      period: "Jun 2022 – Aug 2022",
      description: "Designed art and English lessons for underserved students. Secured over $14,000 in federal Puntos de Cultura arts funding.",
      tags: ["Grant Writing", "Education", "Arts Programming", "Community Development"],
      color: "bg-orange-50 border-orange-200"
    }
  ];

  return (
    <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A diverse portfolio of international experience in social impact, policy, and community development.
          </p>
        </div>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className={`${exp.color} hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <CardTitle className="text-lg font-semibold text-gray-900">
                      {exp.title}
                    </CardTitle>
                    <CardDescription className="text-gray-700 font-medium">
                      {exp.organization} • {exp.location}
                    </CardDescription>
                  </div>
                  <Badge variant="secondary" className="self-start md:self-center">
                    {exp.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
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
