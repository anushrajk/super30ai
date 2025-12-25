import { Check, X } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const CourseComparisonSection = () => {
  const [ref, isVisible] = useScrollAnimation();

  const features = [
    { feature: "AI-Native Curriculum", super30: true, traditional: false },
    { feature: "GEO & AEO Training", super30: true, traditional: false },
    { feature: "Live Interactive Classes", super30: true, traditional: false },
    { feature: "Industry Mentorship", super30: true, traditional: false },
    { feature: "Real Client Projects", super30: true, traditional: false },
    { feature: "30+ Premium Tool Access", super30: true, traditional: false },
    { feature: "Job Placement Guarantee", super30: true, traditional: false },
    { feature: "Small Batch (Max 15)", super30: true, traditional: false },
    { feature: "1-Month Internship", super30: true, traditional: false },
    { feature: "Lifetime Alumni Network", super30: true, traditional: false },
    { feature: "Post-Course Support", super30: true, traditional: false },
    { feature: "Updated for AI Era", super30: true, traditional: false },
  ];

  return (
    <section ref={ref} className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1 bg-[hsl(var(--brand-orange))]/10 text-[hsl(var(--brand-orange))] text-sm font-semibold rounded-full border border-[hsl(var(--brand-orange))]/30 mb-4">
            Comparison
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Choose <span className="text-gradient">The Super 30?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how our AI-native curriculum compares to traditional SEO courses
          </p>
        </div>

        {/* Comparison Table */}
        <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-card rounded-2xl border border-border/50 overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-muted/50 p-4 md:p-6">
              <div className="font-semibold text-foreground">Feature</div>
              <div className="text-center">
                <span className="inline-block px-3 py-1 bg-[hsl(var(--brand-orange))]/10 text-[hsl(var(--brand-orange))] text-sm font-semibold rounded-full">
                  The Super 30
                </span>
              </div>
              <div className="text-center">
                <span className="inline-block px-3 py-1 bg-muted text-muted-foreground text-sm font-semibold rounded-full">
                  Traditional Courses
                </span>
              </div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-border/50">
              {features.map((item, index) => (
                <div 
                  key={index} 
                  className="grid grid-cols-3 p-4 md:p-5 hover:bg-muted/30 transition-colors"
                >
                  <div className="text-foreground text-sm md:text-base">{item.feature}</div>
                  <div className="flex justify-center">
                    {item.super30 ? (
                      <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center">
                        <Check className="w-4 h-4 text-emerald-500" />
                      </div>
                    ) : (
                      <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center">
                        <X className="w-4 h-4 text-destructive" />
                      </div>
                    )}
                  </div>
                  <div className="flex justify-center">
                    {item.traditional ? (
                      <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center">
                        <Check className="w-4 h-4 text-emerald-500" />
                      </div>
                    ) : (
                      <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center">
                        <X className="w-4 h-4 text-destructive" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
