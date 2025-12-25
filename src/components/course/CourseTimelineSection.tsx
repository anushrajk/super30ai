import { BookOpen, Brain, Rocket, Trophy, Briefcase, CheckCircle2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const CourseTimelineSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const milestones = [
    {
      week: "Weeks 1-4",
      title: "Foundation Complete",
      description: "Master SEO fundamentals + AI basics",
      icon: BookOpen,
      color: "bg-blue-500",
      achievements: ["Technical SEO certified", "AI tool proficiency", "Analytics mastery"],
    },
    {
      week: "Weeks 5-16",
      title: "Specialization Complete",
      description: "GEO, AEO & advanced AI strategies",
      icon: Brain,
      color: "bg-purple-500",
      achievements: ["GEO specialist", "AEO expert", "AI content strategist"],
    },
    {
      week: "Weeks 17-24",
      title: "AI Implementation",
      description: "Build autonomous systems",
      icon: Rocket,
      color: "bg-[hsl(var(--brand-orange))]",
      achievements: ["Agent builder", "Commerce automation", "Predictive analytics"],
    },
    {
      week: "Weeks 25-26",
      title: "Capstone Project",
      description: "Deliver real client results",
      icon: Trophy,
      color: "bg-emerald-500",
      achievements: ["Portfolio project", "Live results", "Industry presentation"],
    },
    {
      week: "Week 27+",
      title: "Industry Internship",
      description: "Real-world experience",
      icon: Briefcase,
      color: "bg-amber-500",
      achievements: ["Client work", "Team experience", "Job-ready"],
    },
  ];

  return (
    <section ref={ref} className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1 bg-[hsl(var(--brand-orange))]/10 text-[hsl(var(--brand-orange))] text-sm font-semibold rounded-full border border-[hsl(var(--brand-orange))]/30 mb-4">
            Your Journey
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            26-Week <span className="text-gradient">Transformation Roadmap</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From complete beginner to AI SEO expert. Every week brings you closer to your new career.
          </p>
        </div>

        {/* Timeline */}
        <div className={`relative transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 via-[hsl(var(--brand-orange))] to-emerald-500 transform md:-translate-x-1/2" />

          {/* Milestones */}
          <div className="space-y-8 md:space-y-12">
            {milestones.map((milestone, index) => (
              <div 
                key={index}
                className={`relative flex items-start gap-6 md:gap-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className={`bg-card p-6 rounded-2xl border border-border/50 hover:border-[hsl(var(--brand-orange))]/30 transition-all duration-300 ${
                    index % 2 === 0 ? 'md:ml-auto md:mr-0' : 'md:mr-auto md:ml-0'
                  } max-w-md`}>
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      {milestone.week}
                    </span>
                    <h3 className="text-xl font-bold text-foreground mt-1 mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{milestone.description}</p>
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                      {milestone.achievements.map((achievement, i) => (
                        <span 
                          key={i}
                          className="flex items-center gap-1 px-2 py-1 bg-muted/50 rounded text-xs font-medium text-foreground/80"
                        >
                          <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center">
                  <div className={`w-8 h-8 rounded-full ${milestone.color} flex items-center justify-center shadow-lg`}>
                    <milestone.icon className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Spacer for alternate layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>

          {/* Final CTA */}
          <div className="text-center mt-12 pt-8">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              <span className="text-emerald-500 font-semibold">
                Job-ready in 6 months with guaranteed placement support
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
