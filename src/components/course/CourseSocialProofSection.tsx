import { Quote, TrendingUp, Briefcase, DollarSign, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const CourseSocialProofSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const testimonials = [
    {
      name: "Rahul Desai",
      role: "AI SEO Strategist",
      company: "Dukaan",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul",
      before: "Jr. Content Writer",
      after: "AI SEO Strategist",
      salary: "₹6.5L + equity",
      increase: "150%",
      quote: "The course completely transformed my career. In 4 months, I went from writing blog posts to leading AI-driven SEO strategy for a funded startup.",
    },
    {
      name: "Priya Sharma",
      role: "Agentic Commerce Manager",
      company: "Nykaa",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
      before: "Digital Marketing Executive",
      after: "Agentic Commerce Manager",
      salary: "₹7L + bonus",
      increase: "120%",
      quote: "Understanding AI agents and commerce automation opened doors I never knew existed. Now I'm managing autonomous selling systems for India's top beauty brand.",
    },
    {
      name: "Arjun Verma",
      role: "Search Architect",
      company: "Freshworks",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun",
      before: "SEO Analyst",
      after: "Search Architect",
      salary: "₹8.5L + RSUs",
      increase: "180%",
      quote: "The deep dive into GEO and AEO strategies gave me skills that are incredibly rare in the market. I had 5 job offers within 3 weeks of completing the course.",
    },
    {
      name: "Deepak Kumar",
      role: "Founder",
      company: "AgenticSEO",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Deepak",
      before: "Freelance SEO",
      after: "Agency Founder",
      salary: "₹50L+ annual revenue",
      increase: "500%+",
      quote: "I started my own AI SEO agency after completing the course. Within 8 months, I'm serving 12 clients and have a team of 4. Best investment I've ever made.",
    },
  ];

  const stats = [
    { label: "Placement Rate", value: "95%", icon: Briefcase },
    { label: "Starting Salary", value: "₹5-10L", icon: DollarSign },
    { label: "Average Time to Offer", value: "30 days", icon: Clock },
    { label: "Avg. Salary Increase", value: "140%", icon: TrendingUp },
  ];

  return (
    <section ref={ref} className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1 bg-[hsl(var(--brand-orange))]/10 text-[hsl(var(--brand-orange))] text-sm font-semibold rounded-full border border-[hsl(var(--brand-orange))]/30 mb-4">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            <span className="text-gradient">95% Placement</span> in AI-Native Roles
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real graduates. Real transformations. Real careers in AI marketing.
          </p>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-4 md:p-6 rounded-xl bg-muted/30 border border-border/50"
            >
              <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-[hsl(var(--brand-orange))]/10 flex items-center justify-center">
                <stat.icon className="w-5 h-5 text-[hsl(var(--brand-orange))]" />
              </div>
              <p className="text-2xl md:text-3xl font-bold text-foreground mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonial Cards */}
        <div className={`grid md:grid-cols-2 gap-6 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-card border-border/50 hover:border-[hsl(var(--brand-orange))]/30 transition-all duration-300 group"
            >
              <CardContent className="p-6">
                {/* Quote */}
                <div className="relative mb-6">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-[hsl(var(--brand-orange))]/20" />
                  <p className="text-foreground/80 italic pl-6">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* Journey */}
                <div className="flex items-center gap-4 mb-6 p-3 bg-muted/30 rounded-lg">
                  <div className="flex-1 text-center">
                    <p className="text-xs text-muted-foreground uppercase mb-1">Before</p>
                    <p className="text-sm font-medium text-foreground">{testimonial.before}</p>
                  </div>
                  <div className="text-[hsl(var(--brand-orange))]">→</div>
                  <div className="flex-1 text-center">
                    <p className="text-xs text-muted-foreground uppercase mb-1">After</p>
                    <p className="text-sm font-medium text-foreground">{testimonial.after}</p>
                  </div>
                </div>

                {/* Profile & Stats */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full border-2 border-[hsl(var(--brand-orange))]/30"
                    />
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role} @ {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-[hsl(var(--brand-orange))]">{testimonial.salary}</p>
                    <p className="text-xs text-emerald-500 font-medium">↑ {testimonial.increase} increase</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
