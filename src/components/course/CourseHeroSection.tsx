import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  Clock, 
  Monitor, 
  Briefcase, 
  Award, 
  Users, 
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Calendar
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const CourseHeroSection = () => {
  const [ref, isVisible] = useScrollAnimation();

  const scrollToApplication = () => {
    const element = document.getElementById("course-application");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const trustBadges = [
    { icon: Award, text: "Applied AI Institute Certified" },
    { icon: Clock, text: "100+ Hours Live Instruction" },
    { icon: Briefcase, text: "Job Placement Guarantee" },
    { icon: Users, text: "95% Graduate Employment" },
  ];

  const courseMeta = [
    { icon: Calendar, label: "Duration", value: "6 Months" },
    { icon: Monitor, label: "Delivery", value: "Live Online" },
    { icon: Briefcase, label: "Career Outcomes", value: "₹5-10L+ Starting" },
  ];

  return (
    <section 
      ref={ref}
      className="relative min-h-[90vh] flex items-center py-20 md:py-28 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--brand-orange)) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-[hsl(var(--brand-orange))]/20 to-transparent rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tr from-[hsl(var(--brand-orange))]/10 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-5xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Badge */}
          <Badge className="mb-6 bg-[hsl(var(--brand-orange))]/10 text-[hsl(var(--brand-orange))] border-[hsl(var(--brand-orange))]/30 px-4 py-2 text-sm font-medium">
            <GraduationCap className="w-4 h-4 mr-2" />
            India's First Applied AI SEO Course
          </Badge>

          {/* Headline */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-6">
            Master <span className="text-gradient">AI SEO, GEO, AEO</span> &{" "}
            <span className="text-gradient">Agentic Commerce</span>
            <br className="hidden md:block" />
            <span className="text-muted-foreground text-2xl md:text-3xl lg:text-4xl block mt-2">
              The 6-Month Course That Teaches AI-Powered Marketing's Future
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Learn traditional SEO foundations + AI-enhanced strategies + autonomous commerce systems. 
            Join the next generation of marketers with skills that are actually in demand.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8">
            {trustBadges.map((badge, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-full border border-border/50"
              >
                <badge.icon className="w-4 h-4 text-[hsl(var(--brand-orange))]" />
                <span className="text-sm text-foreground font-medium">{badge.text}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Button 
              size="lg"
              onClick={scrollToApplication}
              className="w-full sm:w-auto bg-[hsl(var(--brand-orange))] hover:bg-[hsl(var(--brand-orange))]/90 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 px-8 py-6 text-lg"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Secure Your Spot
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={scrollToApplication}
              className="w-full sm:w-auto border-border hover:bg-muted/50 px-8 py-6 text-lg"
            >
              Schedule Free Strategy Session
            </Button>
          </div>

          {/* Scarcity */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full animate-pulse">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-ping" />
            <span className="text-red-500 font-semibold text-sm">
              Only 15 seats per batch • 2 seats remaining for January 2025
            </span>
          </div>

          {/* Course Meta */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 mt-12 max-w-2xl mx-auto">
            {courseMeta.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-[hsl(var(--brand-orange))]/10 border border-[hsl(var(--brand-orange))]/30 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-[hsl(var(--brand-orange))]" />
                </div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{item.label}</p>
                <p className="text-lg font-bold text-foreground">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
