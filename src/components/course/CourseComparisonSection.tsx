import { Check, X, HelpCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const CourseComparisonSection = () => {
  const [ref, isVisible] = useScrollAnimation();

  const features = [
    { 
      feature: "AI-Native Curriculum (GEO, AEO, Agents)", 
      super30: true, 
      traditional: false,
      whyItMatters: "This is where the industry is going. Traditional SEO is dying."
    },
    { 
      feature: "Live Classes with Real Q&A", 
      super30: true, 
      traditional: false,
      whyItMatters: "Recorded videos can't answer your questions at 2 AM."
    },
    { 
      feature: "Job Placement Guarantee", 
      super30: true, 
      traditional: false,
      whyItMatters: "We only win when you get a job. That's real skin in the game."
    },
    { 
      feature: "Real Client Projects (Not Dummy Sites)", 
      super30: true, 
      traditional: false,
      whyItMatters: "Employers hire experience, not theoretical knowledge."
    },
    { 
      feature: "30+ Premium Tool Access (Worth ₹50K)", 
      super30: true, 
      traditional: false,
      whyItMatters: "You practice on the same tools you'll use at work."
    },
    { 
      feature: "Small Batch (Max 15 Students)", 
      super30: true, 
      traditional: false,
      whyItMatters: "Personal attention. We know your name, not just your email."
    },
    { 
      feature: "1-Month Paid Internship", 
      super30: true, 
      traditional: false,
      whyItMatters: "Real work experience before you graduate."
    },
    { 
      feature: "Lifetime Alumni Network", 
      super30: true, 
      traditional: false,
      whyItMatters: "Jobs come through connections, not job portals."
    },
    { 
      feature: "Weekly Updated Content", 
      super30: true, 
      traditional: false,
      whyItMatters: "AI changes weekly. 2023 content is already outdated."
    },
    { 
      feature: "1:1 Mentorship & Career Coaching", 
      super30: true, 
      traditional: false,
      whyItMatters: "Resume reviews, mock interviews, salary negotiation help."
    },
  ];

  return (
    <section ref={ref} className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1 bg-[hsl(var(--brand-orange))]/10 text-[hsl(var(--brand-orange))] text-sm font-semibold rounded-full border border-[hsl(var(--brand-orange))]/30 mb-4">
            Honest Comparison
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What You're <span className="text-gradient">Really Paying For</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We've taken courses from Coursera, Udemy, and local institutes. Here's what they don't tell you.
          </p>
        </div>

        {/* Comparison Table */}
        <div className={`max-w-5xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-card rounded-2xl border border-border/50 overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-muted/50 p-4 md:p-6">
              <div className="font-semibold text-foreground">What You Get</div>
              <div className="text-center">
                <span className="inline-block px-3 py-1 bg-[hsl(var(--brand-orange))]/10 text-[hsl(var(--brand-orange))] text-sm font-semibold rounded-full">
                  The Super 30
                </span>
                <p className="text-xs text-muted-foreground mt-1">₹59,999</p>
              </div>
              <div className="text-center">
                <span className="inline-block px-3 py-1 bg-muted text-muted-foreground text-sm font-semibold rounded-full">
                  Most ₹10-20K Courses
                </span>
                <p className="text-xs text-muted-foreground mt-1">Recorded Videos</p>
              </div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-border/50">
              {features.map((item, index) => (
                <div 
                  key={index} 
                  className="grid grid-cols-3 p-4 md:p-5 hover:bg-muted/30 transition-colors group"
                >
                  <div className="text-foreground text-sm md:text-base">
                    <span>{item.feature}</span>
                    <p className="text-xs text-muted-foreground mt-1 hidden group-hover:block">
                      {item.whyItMatters}
                    </p>
                  </div>
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

          {/* Bottom Note */}
          <div className={`text-center mt-8 p-4 bg-muted/30 rounded-xl border border-border/50 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-sm text-muted-foreground">
              <span className="text-foreground font-medium">We're not the cheapest option.</span> But we're the only one who guarantees your job. 
              <span className="text-[hsl(var(--brand-orange))]"> That's the difference.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
