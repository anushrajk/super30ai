import { 
  Brain, 
  Wrench, 
  Briefcase, 
  Search, 
  Bot, 
  BarChart3,
  Globe,
  FileText,
  Zap,
  Target,
  Users,
  TrendingUp
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const CourseLearningOutcomesSection = () => {
  const [ref, isVisible] = useScrollAnimation();

  const skillCategories = [
    {
      title: "Technical Skills",
      icon: Brain,
      skills: [
        "Generative Engine Optimization (GEO)",
        "Answer Engine Optimization (AEO)",
        "AI-powered content strategy",
        "Technical SEO & Core Web Vitals",
        "Schema markup & structured data",
        "Entity SEO & knowledge graphs",
      ],
      color: "text-[hsl(var(--brand-orange))]",
      bgColor: "bg-[hsl(var(--brand-orange))]/10",
    },
    {
      title: "Tools Mastery",
      icon: Wrench,
      skills: [
        "ChatGPT, Claude, Gemini for SEO",
        "Ahrefs, SEMrush, Moz",
        "Screaming Frog, Sitebulb",
        "Google Search Console & Analytics",
        "Surfer SEO, Clearscope",
        "Custom AI automation workflows",
      ],
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10",
    },
    {
      title: "Career Paths",
      icon: Briefcase,
      skills: [
        "AI SEO Specialist",
        "GEO/AEO Strategist",
        "Head of Organic Growth",
        "SEO Consultant (Freelance)",
        "AI Marketing Manager",
        "Agentic Commerce Expert",
      ],
      color: "text-violet-500",
      bgColor: "bg-violet-500/10",
    },
  ];

  const outcomes = [
    { icon: Search, text: "Rank websites on AI search engines", value: "100+" },
    { icon: Bot, text: "Build AI-powered SEO workflows", value: "20+" },
    { icon: BarChart3, text: "Drive measurable organic growth", value: "3x" },
    { icon: Globe, text: "Optimize for voice & conversational search", value: "New" },
  ];

  return (
    <section ref={ref} className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1 bg-[hsl(var(--brand-orange))]/10 text-[hsl(var(--brand-orange))] text-sm font-semibold rounded-full border border-[hsl(var(--brand-orange))]/30 mb-4">
            Learning Outcomes
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What You'll <span className="text-gradient">Master</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Graduate with in-demand skills that top companies are actively hiring for
          </p>
        </div>

        {/* Quick Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {outcomes.map((outcome, index) => (
            <div key={index} className="text-center p-4 bg-card rounded-xl border border-border/50">
              <outcome.icon className="w-6 h-6 mx-auto mb-2 text-[hsl(var(--brand-orange))]" />
              <p className="text-2xl font-bold text-foreground">{outcome.value}</p>
              <p className="text-xs text-muted-foreground">{outcome.text}</p>
            </div>
          ))}
        </div>

        {/* Skills Categories Grid */}
        <div className={`grid md:grid-cols-3 gap-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-card border-border/50 hover:border-[hsl(var(--brand-orange))]/30 transition-all">
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-xl ${category.bgColor} flex items-center justify-center mb-4`}>
                  <category.icon className={`w-6 h-6 ${category.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{category.title}</h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--brand-orange))]" />
                      <span className="text-sm text-muted-foreground">{skill}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-muted-foreground">
            <span className="text-foreground font-semibold">30+ industry-grade tools</span> included in your course fee worth ₹50,000+
          </p>
        </div>
      </div>
    </section>
  );
};
