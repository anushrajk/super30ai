import { Bot, FileText, ShoppingCart, Mic, Building2, Rocket, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const CourseProjectsSection = () => {
  const [ref, isVisible] = useScrollAnimation();

  const projects = [
    {
      icon: Bot,
      title: "AI SEO Agent Development",
      description: "Build your own autonomous SEO agent that performs keyword research, content optimization, and ranking analysis.",
      outcome: "Functional AI agent + Documentation",
      difficulty: "Advanced",
    },
    {
      icon: FileText,
      title: "Content Cluster Strategy",
      description: "Create a complete content cluster with pillar pages, supporting content, and internal linking architecture.",
      outcome: "20+ page content strategy",
      difficulty: "Intermediate",
    },
    {
      icon: ShoppingCart,
      title: "Agentic Commerce Implementation",
      description: "Design and deploy an autonomous product recommendation system that personalizes shopping experiences.",
      outcome: "Live e-commerce integration",
      difficulty: "Advanced",
    },
    {
      icon: Mic,
      title: "Voice & Visual Search Optimization",
      description: "Optimize a business for voice assistants and visual search platforms like Google Lens.",
      outcome: "Multi-modal search strategy",
      difficulty: "Intermediate",
    },
  ];

  const caseStudies = [
    {
      icon: Building2,
      industry: "E-commerce",
      title: "D2C Brand: 300% Organic Growth",
      description: "How we helped a fashion brand triple organic traffic in 6 months using AI-powered content strategy.",
      metrics: ["300% traffic increase", "150% revenue growth", "Top 3 rankings"],
    },
    {
      icon: Rocket,
      industry: "SaaS",
      title: "B2B SaaS: Featured Snippet Domination",
      description: "Achieving 40+ featured snippets for a CRM platform through systematic AEO optimization.",
      metrics: ["40+ snippets won", "65% CTR increase", "2x demo bookings"],
    },
    {
      icon: Globe,
      industry: "Local Business",
      title: "Multi-Location GEO Strategy",
      description: "Implementing scalable local SEO for a restaurant chain across 25 locations.",
      metrics: ["25 locations optimized", "200% map pack visibility", "35% footfall increase"],
    },
  ];

  return (
    <section ref={ref} className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1 bg-[hsl(var(--brand-orange))]/10 text-[hsl(var(--brand-orange))] text-sm font-semibold rounded-full border border-[hsl(var(--brand-orange))]/30 mb-4">
            Hands-On Learning
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Real Projects & <span className="text-gradient">Industry Case Studies</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn by doing. Work on real projects and study actual client transformations.
          </p>
        </div>

        {/* Projects Grid */}
        <div className={`mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Bot className="w-5 h-5 text-[hsl(var(--brand-orange))]" />
            Capstone Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="bg-card border-border/50 hover:border-[hsl(var(--brand-orange))]/30 transition-all duration-300 group"
              >
                <CardContent className="p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[hsl(var(--brand-orange))]/10 border border-[hsl(var(--brand-orange))]/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <project.icon className="w-5 h-5 text-[hsl(var(--brand-orange))]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-foreground">{project.title}</h4>
                        <span className={`text-xs px-2 py-0.5 rounded ${
                          project.difficulty === 'Advanced' 
                            ? 'bg-red-500/10 text-red-500' 
                            : 'bg-amber-500/10 text-amber-500'
                        }`}>
                          {project.difficulty}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{project.description}</p>
                      <p className="text-xs text-[hsl(var(--brand-orange))] font-medium">
                        Deliverable: {project.outcome}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Case Studies */}
        <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
            <FileText className="w-5 h-5 text-[hsl(var(--brand-orange))]" />
            Industry Case Studies
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {caseStudies.map((study, index) => (
              <Card 
                key={index}
                className="bg-muted/30 border-border/50 hover:border-[hsl(var(--brand-orange))]/30 transition-all duration-300 group"
              >
                <CardContent className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <study.icon className="w-4 h-4 text-[hsl(var(--brand-orange))]" />
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      {study.industry}
                    </span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{study.title}</h4>
                  <p className="text-sm text-muted-foreground mb-4">{study.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {study.metrics.map((metric, i) => (
                      <span 
                        key={i}
                        className="px-2 py-1 bg-emerald-500/10 text-emerald-500 rounded text-xs font-medium border border-emerald-500/30"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
