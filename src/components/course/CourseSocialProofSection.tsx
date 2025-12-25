import { Quote, TrendingUp, Briefcase, DollarSign, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const CourseSocialProofSection = () => {
  const [ref, isVisible] = useScrollAnimation();

  const testimonials = [
    {
      name: "Rahul Desai",
      role: "AI SEO Strategist",
      company: "Dukaan",
      city: "Bangalore",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul",
      before: "Jr. Content Writer (₹35K/month)",
      after: "AI SEO Strategist (₹90K/month)",
      salary: "₹10.8L/year + equity",
      increase: "157%",
      quote: "Before joining, I was writing 10 blogs a day for ₹35K. Now I build AI systems that generate 50 blogs daily—and I earn ₹90K. My wife still can't believe it.",
    },
    {
      name: "Priya Sharma",
      role: "Agentic Commerce Manager",
      company: "Nykaa",
      city: "Mumbai",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
      before: "Digital Marketing Exec (₹40K/month)",
      after: "Agentic Commerce Manager (₹95K/month)",
      salary: "₹11.4L/year + bonus",
      increase: "138%",
      quote: "I was stuck at ₹40K for 3 years. 5 months after completing this course, I got an offer I couldn't refuse. My parents finally understand what I do for work.",
    },
    {
      name: "Arjun Verma",
      role: "Search Architect",
      company: "Freshworks",
      city: "Chennai",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun",
      before: "SEO Analyst (₹45K/month)",
      after: "Search Architect (₹1.2L/month)",
      salary: "₹14.4L/year + RSUs",
      increase: "167%",
      quote: "I had 5 job offers within 3 weeks of completing the course. The GEO and AEO skills are so rare that recruiters were literally fighting for me. Surreal feeling.",
    },
    {
      name: "Deepak Kumar",
      role: "Founder",
      company: "AgenticSEO Agency",
      city: "Delhi (from Patna)",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Deepak",
      before: "Freelance SEO (₹25K/month)",
      after: "Agency Founder",
      salary: "₹4L+/month revenue",
      increase: "1500%+",
      quote: "I'm from a Tier-2 city. Hindi-medium background. No IIT degree. This course taught me skills that helped me start an agency. Now I have 4 employees. Best ₹60K I ever spent.",
    },
  ];

  const stats = [
    { label: "Placed in 90 Days", value: "95%", icon: Briefcase },
    { label: "Avg. Starting Package", value: "₹7.2L", icon: DollarSign },
    { label: "Time to First Offer", value: "23 Days", icon: Clock },
    { label: "Avg. Salary Hike", value: "140%", icon: TrendingUp },
  ];

  return (
    <section ref={ref} className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1 bg-[hsl(var(--brand-orange))]/10 text-[hsl(var(--brand-orange))] text-sm font-semibold rounded-full border border-[hsl(var(--brand-orange))]/30 mb-4">
            Real Stories, Real People
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            They Were <span className="text-gradient">Exactly Where You Are</span> Today
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Read their stories. Then imagine your own.
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
                  <p className="text-foreground/80 pl-6 text-sm md:text-base leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* Journey */}
                <div className="flex items-center gap-3 mb-6 p-3 bg-muted/30 rounded-lg">
                  <div className="flex-1">
                    <p className="text-xs text-muted-foreground uppercase mb-1">Before</p>
                    <p className="text-xs md:text-sm font-medium text-foreground">{testimonial.before}</p>
                  </div>
                  <div className="text-[hsl(var(--brand-orange))] font-bold">→</div>
                  <div className="flex-1">
                    <p className="text-xs text-muted-foreground uppercase mb-1">After</p>
                    <p className="text-xs md:text-sm font-medium text-foreground">{testimonial.after}</p>
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
                      <p className="text-xs text-muted-foreground">
                        {testimonial.role} @ {testimonial.company} • {testimonial.city}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm md:text-base font-bold text-[hsl(var(--brand-orange))]">{testimonial.salary}</p>
                    <p className="text-xs text-emerald-500 font-medium">↑ {testimonial.increase} hike</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Note */}
        <div className={`text-center mt-10 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-muted-foreground text-sm">
            These aren't exceptional cases. <span className="text-foreground font-medium">This is what's possible when you learn the right skills at the right time.</span>
          </p>
        </div>
      </div>
    </section>
  );
};
