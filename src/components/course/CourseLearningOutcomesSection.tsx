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
  TrendingUp,
  MessageCircle,
  Rocket
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const CourseLearningOutcomesSection = () => {
  const [ref, isVisible] = useScrollAnimation();

  const skillCategories = [
    {
      title: "Your New Superpowers",
      icon: Zap,
      skills: [
        "Make ChatGPT recommend your client's brand",
        "Get featured in AI search results (GEO)",
        "Dominate voice search & smart assistants",
        "Build AI agents that do SEO 24/7",
        "Create content 10x faster with AI",
        "Predict Google updates before they hit",
      ],
      color: "text-[hsl(var(--brand-orange))]",
      bgColor: "bg-[hsl(var(--brand-orange))]/10",
    },
    {
      title: "Tools in Your Arsenal",
      icon: Wrench,
      skills: [
        "ChatGPT, Claude, Gemini—like a pro",
        "Ahrefs, SEMrush (₹50K worth free access)",
        "n8n, Zapier for automation",
        "Custom GPT development",
        "GA4, BigQuery for analytics",
        "30+ industry tools included",
      ],
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10",
    },
    {
      title: "Roles You'll Qualify For",
      icon: Briefcase,
      skills: [
        "AI SEO Specialist (₹6-10L)",
        "GEO/AEO Strategist (₹8-12L)",
        "Head of Organic Growth (₹12-18L)",
        "AI Marketing Manager (₹10-15L)",
        "Freelance Consultant (₹1L+/month)",
        "Start your own AI SEO agency",
      ],
      color: "text-violet-500",
      bgColor: "bg-violet-500/10",
    },
  ];

  const outcomes = [
    { icon: MessageCircle, text: "Get brands cited by ChatGPT", value: "GEO" },
    { icon: Bot, text: "Build autonomous SEO agents", value: "20+" },
    { icon: BarChart3, text: "Average traffic increase", value: "3x" },
    { icon: Rocket, text: "Time to first job offer", value: "23 days" },
  ];

  return (
    <section ref={ref} className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1 bg-[hsl(var(--brand-orange))]/10 text-[hsl(var(--brand-orange))] text-sm font-semibold rounded-full border border-[hsl(var(--brand-orange))]/30 mb-4">
            Your Transformation
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            6 Months From Now, <span className="text-gradient">You'll Be Able To...</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            These aren't just skills. They're your new superpowers. <span className="text-foreground">Imagine telling your parents "I work in AI" 😊</span>
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
            <span className="text-foreground font-semibold">₹50,000+ worth of premium tool access</span> included free with your enrollment
          </p>
        </div>
      </div>
    </section>
  );
};
