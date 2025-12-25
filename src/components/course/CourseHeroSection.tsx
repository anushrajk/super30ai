import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  Clock, 
  Award, 
  Users, 
  Briefcase,
  Calendar,
  Monitor,
  TrendingUp
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { CourseEnquiryForm } from "./CourseEnquiryForm";

export const CourseHeroSection = () => {
  const [ref, isVisible] = useScrollAnimation();

  const trustBadges = [
    { icon: Award, text: "Get Placed in 90 Days or 50% Refund" },
    { icon: Clock, text: "380+ Hours of Live Training" },
    { icon: Briefcase, text: "Earn ₹5-10L+ After 6 Months" },
    { icon: Users, text: "Join 500+ Successful Alumni" },
  ];

  const expertCredentials = [
    "Ex-Google SEO Leads",
    "10+ Years Experience",
    "500+ Students Placed",
  ];

  const courseMeta = [
    { icon: Calendar, label: "Duration", value: "6 Months" },
    { icon: Monitor, label: "Format", value: "Live Online" },
    { icon: TrendingUp, label: "Avg. Hike", value: "140%" },
  ];

  return (
    <section 
      ref={ref}
      className="relative bg-background overflow-hidden min-h-[85vh] md:min-h-[90vh] flex items-center"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-[hsl(var(--brand-orange))]/20 to-transparent rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tr from-[hsl(var(--brand-orange))]/10 to-transparent rounded-full blur-3xl" />

      <div className="container relative mx-auto px-4 py-8 md:py-12 lg:py-16">
        {/* 2-Column Layout */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-16 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Left Column - Content */}
          <div className="md:col-span-1 lg:col-span-7 space-y-4 md:space-y-5">
            {/* Pre-headline */}
            <p className="text-muted-foreground text-sm md:text-base">
              Tired of learning SEO skills that become outdated in 6 months?
            </p>

            {/* Badge */}
            <Badge className="bg-[hsl(var(--brand-orange))]/10 text-[hsl(var(--brand-orange))] border-[hsl(var(--brand-orange))]/30 px-4 py-2 text-sm font-medium">
              <GraduationCap className="w-4 h-4 mr-2" />
              India's First Applied AI SEO Course
            </Badge>

            {/* H1 and Description */}
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-3 md:mb-4">
                Become{" "}
                <span className="text-gradient">India's Most In-Demand</span>
                {" "}Marketing Professional
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
                The only course that teaches you to build{" "}
                <span className="text-foreground font-semibold">AI systems that do SEO for you</span>—while you sleep.
              </p>
            </div>

            {/* Trust Badges - Stacked Vertically */}
            <div className="flex flex-col gap-3 py-2">
              {trustBadges.map((badge, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 group cursor-default"
                >
                  <div className="w-7 h-7 bg-[hsl(var(--brand-orange))]/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[hsl(var(--brand-orange))] group-hover:scale-110 transition-all duration-300 shadow-md">
                    <badge.icon className="w-3.5 h-3.5 text-[hsl(var(--brand-orange))] group-hover:text-white transition-colors" />
                  </div>
                  <span className="font-medium text-foreground text-sm md:text-base">{badge.text}</span>
                </div>
              ))}
            </div>

            {/* Scarcity */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full animate-pulse">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-ping" />
              <span className="text-red-500 font-semibold text-sm">
                Only 2 seats left • 847 applied this month
              </span>
            </div>

            {/* Course Meta - Mobile only */}
            <div className="lg:hidden grid grid-cols-3 gap-3 pt-2">
              {courseMeta.map((item, index) => (
                <div key={index} className="text-center p-3 bg-muted/50 rounded-lg border border-border/50">
                  <item.icon className="w-5 h-5 mx-auto mb-1 text-[hsl(var(--brand-orange))]" />
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                  <p className="text-sm font-bold text-foreground">{item.value}</p>
                </div>
              ))}
            </div>

            {/* Expert credentials - Mobile only */}
            <div className="lg:hidden flex flex-wrap gap-2 pt-2">
              {expertCredentials.map((cred, i) => (
                <span 
                  key={i}
                  className="inline-flex items-center gap-1.5 bg-muted text-muted-foreground px-3 py-1.5 rounded-full text-xs font-medium"
                >
                  <Award className="w-3 h-3 text-[hsl(var(--brand-orange))]" />
                  {cred}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="md:col-span-1 lg:col-span-5">
            <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
              <CourseEnquiryForm />
            </div>
            
            {/* Expert credentials - Desktop only */}
            <div className="hidden lg:flex flex-wrap gap-2 mt-4 justify-center">
              {expertCredentials.map((cred, i) => (
                <span 
                  key={i}
                  className="inline-flex items-center gap-1.5 bg-muted text-muted-foreground px-3 py-1.5 rounded-full text-xs font-medium"
                >
                  <Award className="w-3 h-3 text-[hsl(var(--brand-orange))]" />
                  {cred}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
