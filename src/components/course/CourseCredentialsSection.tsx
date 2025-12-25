import { Award, Building2, Users, Wrench, GraduationCap, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const CourseCredentialsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const certifications = [
    {
      icon: Award,
      title: "Applied AI Institute Certified",
      description: "Globally recognized certification in Applied AI for Marketing",
    },
    {
      icon: GraduationCap,
      title: "Specialization Certificates",
      description: "GEO, AEO, Agentic Commerce track certifications",
    },
  ];

  const partnerships = [
    { name: "OpenAI", logo: "🤖" },
    { name: "Google", logo: "🔍" },
    { name: "Perplexity", logo: "💡" },
    { name: "Anthropic", logo: "🧠" },
    { name: "SEMrush", logo: "📊" },
    { name: "Ahrefs", logo: "🔗" },
  ];

  const instructors = [
    {
      name: "Dr. Aisha Patel",
      role: "Course Director",
      credentials: "Ex-Google Search Quality, Stanford AI Lab",
      expertise: "AI Search Algorithms, GEO Strategy",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aisha",
    },
    {
      name: "Vikram Mehta",
      role: "Lead Instructor",
      credentials: "Ex-Amazon SEO Lead, IIT Delhi",
      expertise: "E-commerce SEO, Agentic Commerce",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram",
    },
    {
      name: "Sarah Chen",
      role: "AI Specialist",
      credentials: "Ex-OpenAI, MIT AI Research",
      expertise: "LLM Applications, Agent Development",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    },
  ];

  const toolPartners = [
    "SEMrush", "Ahrefs", "Screaming Frog", "Surfer SEO", 
    "Clearscope", "Frase", "Jasper", "n8n"
  ];

  return (
    <section ref={ref} className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1 bg-[hsl(var(--brand-orange))]/10 text-[hsl(var(--brand-orange))] text-sm font-semibold rounded-full border border-[hsl(var(--brand-orange))]/30 mb-4">
            Trust & Credibility
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Learn From <span className="text-gradient">Industry Leaders</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Backed by top AI companies, taught by ex-Google & ex-Amazon experts.
          </p>
        </div>

        {/* Certifications */}
        <div className={`grid md:grid-cols-2 gap-4 mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {certifications.map((cert, index) => (
            <Card key={index} className="bg-card border-border/50">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-[hsl(var(--brand-orange))]/10 border border-[hsl(var(--brand-orange))]/30 flex items-center justify-center flex-shrink-0">
                  <cert.icon className="w-7 h-7 text-[hsl(var(--brand-orange))]" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* AI Partnerships */}
        <div className={`mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-lg font-semibold text-center text-foreground mb-6 flex items-center justify-center gap-2">
            <Building2 className="w-5 h-5 text-[hsl(var(--brand-orange))]" />
            Curriculum Designed with Input From
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {partnerships.map((partner, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border/50"
              >
                <span className="text-xl">{partner.logo}</span>
                <span className="font-medium text-foreground">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Instructors */}
        <div className={`mb-12 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-lg font-semibold text-center text-foreground mb-6 flex items-center justify-center gap-2">
            <Users className="w-5 h-5 text-[hsl(var(--brand-orange))]" />
            Your Instructors
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {instructors.map((instructor, index) => (
              <Card key={index} className="bg-card border-border/50 hover:border-[hsl(var(--brand-orange))]/30 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <img 
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-20 h-20 mx-auto rounded-full border-2 border-[hsl(var(--brand-orange))]/30 mb-4"
                  />
                  <h4 className="font-semibold text-foreground">{instructor.name}</h4>
                  <p className="text-sm text-[hsl(var(--brand-orange))] font-medium mb-2">{instructor.role}</p>
                  <p className="text-xs text-muted-foreground mb-2">{instructor.credentials}</p>
                  <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
                    <Star className="w-3 h-3 text-amber-500" />
                    {instructor.expertise}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Tool Partners */}
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-lg font-semibold text-center text-foreground mb-6 flex items-center justify-center gap-2">
            <Wrench className="w-5 h-5 text-[hsl(var(--brand-orange))]" />
            Premium Tool Access Included
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {toolPartners.map((tool, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-card rounded-lg border border-border/50 text-sm font-medium text-foreground"
              >
                {tool}
              </span>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">
            ₹50,000+ worth of tool subscriptions included free during the course
          </p>
        </div>
      </div>
    </section>
  );
};
