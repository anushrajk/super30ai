import { MapPin, MessageSquare, ShoppingCart, Wrench, Briefcase, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const CourseSpecializationSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const specializations = [
    {
      icon: MapPin,
      title: "GEO (Generative Engine Optimization)",
      description: "Master local, visual, and voice search optimization for the AI era. Learn to dominate Google's AI Overviews and local pack.",
      topics: [
        "Local SEO + AI integration",
        "Visual search optimization",
        "Voice search strategy",
        "Multi-modal search targeting",
      ],
      careers: ["Local SEO Specialist", "Voice Search Consultant", "Visual Search Expert"],
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
    },
    {
      icon: MessageSquare,
      title: "AEO (Answer Engine Optimization)",
      description: "Optimize for AI-powered answer engines like ChatGPT, Perplexity, and Google AI Overviews. Get cited as the authoritative source.",
      topics: [
        "Featured snippets mastery",
        "People Also Ask optimization",
        "Knowledge graph optimization",
        "AI citation strategies",
      ],
      careers: ["AEO Strategist", "AI Content Specialist", "Search Experience Designer"],
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
    },
    {
      icon: ShoppingCart,
      title: "Agentic Commerce",
      description: "Build autonomous selling systems that work 24/7. Learn to create AI agents that discover, recommend, and convert customers automatically.",
      topics: [
        "AI-powered product discovery",
        "Autonomous selling strategies",
        "Personalization at scale",
        "Conversion optimization",
      ],
      careers: ["Commerce Automation Lead", "AI Shopping Strategist", "Conversion Architect"],
      color: "text-[hsl(var(--brand-orange))]",
      bgColor: "bg-[hsl(var(--brand-orange))]/10",
      borderColor: "border-[hsl(var(--brand-orange))]/30",
    },
    {
      icon: Wrench,
      title: "AI Tools & Automation",
      description: "Master the complete AI marketing stack. Build custom agents, automate workflows, and create scalable systems that multiply your impact.",
      topics: [
        "Custom GPT development",
        "Workflow automation",
        "API integrations",
        "Agent architecture design",
      ],
      careers: ["Marketing Automation Expert", "AI Agent Builder", "MarTech Architect"],
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/30",
    },
  ];

  return (
    <section ref={ref} className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1 bg-[hsl(var(--brand-orange))]/10 text-[hsl(var(--brand-orange))] text-sm font-semibold rounded-full border border-[hsl(var(--brand-orange))]/30 mb-4">
            Choose Your Path
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            4 <span className="text-gradient">Specialization Tracks</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Deep-dive into the areas that align with your career goals. Each track offers unique skills and career paths.
          </p>
        </div>

        {/* Specialization Cards */}
        <div className={`grid md:grid-cols-2 gap-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {specializations.map((spec, index) => (
            <Card 
              key={index}
              className={`bg-card border-border/50 hover:${spec.borderColor} transition-all duration-300 group overflow-hidden`}
            >
              <CardContent className="p-6">
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl ${spec.bgColor} border ${spec.borderColor} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <spec.icon className={`w-6 h-6 ${spec.color}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-[hsl(var(--brand-orange))] transition-colors duration-300">
                      {spec.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4">
                  {spec.description}
                </p>

                {/* Topics */}
                <div className="mb-4">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Key Topics</p>
                  <div className="flex flex-wrap gap-2">
                    {spec.topics.map((topic, i) => (
                      <span 
                        key={i}
                        className={`px-2 py-1 ${spec.bgColor} ${spec.color} rounded text-xs font-medium border ${spec.borderColor}`}
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Career Outcomes */}
                <div className="pt-4 border-t border-border/50">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2 flex items-center gap-1">
                    <Briefcase className="w-3 h-3" /> Career Outcomes
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {spec.careers.map((career, i) => (
                      <span 
                        key={i}
                        className="flex items-center gap-1 px-2 py-1 bg-muted/50 rounded text-xs font-medium text-foreground"
                      >
                        <TrendingUp className="w-3 h-3 text-emerald-500" />
                        {career}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Note */}
        <div className={`text-center mt-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-muted-foreground text-sm">
            All students learn foundations across all tracks. Choose 1-2 specializations for deep expertise.
          </p>
        </div>
      </div>
    </section>
  );
};
