import { useRef } from "react";
import { Quote, Briefcase, Clock, ChevronLeft, ChevronRight, Users, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// Import alumni images
import rahulDesaiImg from "@/assets/alumni/rahul-desai.jpg";
import priyaSharmaImg from "@/assets/alumni/priya-sharma.jpg";
import arjunVermaImg from "@/assets/alumni/arjun-verma.jpg";
import deepakKumarImg from "@/assets/alumni/deepak-kumar.jpg";
import kavitaReddyImg from "@/assets/alumni/kavita-reddy.jpg";
import amitSaxenaImg from "@/assets/alumni/amit-saxena.jpg";
import meeraJoshiImg from "@/assets/alumni/meera-joshi.jpg";

export const CourseSocialProofSection = () => {
  const [ref, isVisible] = useScrollAnimation();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.offsetWidth * 0.8;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const testimonials = [
    {
      name: "Rahul Desai",
      role: "AI SEO Strategist",
      company: "Dukaan",
      city: "Bangalore",
      image: rahulDesaiImg,
      before: "Jr. Content Writer",
      after: "AI SEO Strategist",
      quote: "Before joining, I was writing 10 blogs a day. Now I build AI systems that generate 50 blogs daily. My wife still can't believe the transformation.",
    },
    {
      name: "Priya Sharma",
      role: "Agentic Commerce Manager",
      company: "Nykaa",
      city: "Mumbai",
      image: priyaSharmaImg,
      before: "Digital Marketing Exec",
      after: "Agentic Commerce Manager",
      quote: "I was stuck in the same role for 3 years. 5 months after completing this course, I got an offer I couldn't refuse. My parents finally understand what I do for work.",
    },
    {
      name: "Arjun Verma",
      role: "Search Architect",
      company: "Freshworks",
      city: "Chennai",
      image: arjunVermaImg,
      before: "SEO Analyst",
      after: "Search Architect",
      quote: "I had 5 job offers within 3 weeks of completing the course. The GEO and AEO skills are so rare that recruiters were literally fighting for me. Surreal feeling.",
    },
    {
      name: "Deepak Kumar",
      role: "Founder",
      company: "AgenticSEO Agency",
      city: "Delhi (from Patna)",
      image: deepakKumarImg,
      before: "Freelance SEO",
      after: "Agency Founder",
      quote: "I'm from a Tier-2 city. Hindi-medium background. No IIT degree. This course taught me skills that helped me start an agency. Now I have 4 employees.",
    },
    {
      name: "Kavita Reddy",
      role: "Head of Growth",
      company: "Razorpay",
      city: "Hyderabad",
      image: kavitaReddyImg,
      before: "Marketing Manager",
      after: "Head of Growth",
      quote: "Coming from a traditional marketing role, I was skeptical about AI. This course didn't just teach me tools—it transformed how I think about growth. Now I lead a team of 8.",
    },
    {
      name: "Amit Saxena",
      role: "AI Content Director",
      company: "Swiggy",
      city: "Pune",
      image: amitSaxenaImg,
      before: "Content Lead",
      after: "AI Content Director",
      quote: "I was a journalism grad with zero tech background. The course broke down complex AI concepts so simply. Within 4 months, I was managing AI-driven content for 15 cities.",
    },
    {
      name: "Meera Joshi",
      role: "GEO Specialist",
      company: "Zepto",
      city: "Mumbai",
      image: meeraJoshiImg,
      before: "SEO Executive",
      after: "GEO Specialist",
      quote: "Fresh out of college with no connections. This course gave me skills that 10-year veterans don't have. Got placed in Zepto within 30 days of completing the program.",
    },
  ];

  const stats = [
    { label: "Placed in 90 Days", value: "95%", icon: Briefcase },
    { label: "Career Transitions", value: "500+", icon: Users },
    { label: "Time to First Offer", value: "23 Days", icon: Clock },
    { label: "Skills Mastered", value: "30+", icon: Award },
  ];

  return (
    <section ref={ref} className="py-16 md:py-24 bg-background overflow-hidden">
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

        {/* Carousel Container */}
        <div className={`relative transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Left Gradient Fade */}
          <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          
          {/* Right Gradient Fade */}
          <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll("left")}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/80 backdrop-blur-sm border-border/50 shadow-lg hover:scale-110 hover:bg-background hover:shadow-xl hover:border-[hsl(var(--brand-orange))]/30 active:scale-95 transition-all duration-200"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll("right")}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/80 backdrop-blur-sm border-border/50 shadow-lg hover:scale-110 hover:bg-background hover:shadow-xl hover:border-[hsl(var(--brand-orange))]/30 active:scale-95 transition-all duration-200"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </Button>

          {/* Scrollable Carousel */}
          <div
            ref={scrollContainerRef}
            className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory pb-4 px-4 md:px-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="flex-shrink-0 w-[85%] md:w-[calc((100%-1.5rem)/2.15)] lg:w-[calc((100%-3rem)/3.1)] snap-start bg-card border-border/50 hover:border-[hsl(var(--brand-orange))]/50 hover:scale-[1.02] hover:shadow-xl transition-all duration-300 ease-out group cursor-pointer"
              >
                <CardContent className="p-5 md:p-6">
                  {/* Quote */}
                  <div className="relative mb-5">
                    <Quote className="absolute -top-2 -left-2 w-7 h-7 text-[hsl(var(--brand-orange))]/20 group-hover:text-[hsl(var(--brand-orange))]/40 transition-colors duration-300" />
                    <p className="text-foreground/80 pl-5 text-sm leading-relaxed line-clamp-4">
                      "{testimonial.quote}"
                    </p>
                  </div>

                  {/* Journey */}
                  <div className="flex items-center gap-2 mb-5 p-3 bg-muted/30 rounded-lg group-hover:bg-muted/50 transition-colors duration-300">
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-muted-foreground uppercase mb-1">Before</p>
                      <p className="text-xs font-medium text-foreground truncate">{testimonial.before}</p>
                    </div>
                    <div className="text-[hsl(var(--brand-orange))] font-bold shrink-0 group-hover:scale-125 transition-transform duration-300">→</div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-muted-foreground uppercase mb-1">After</p>
                      <p className="text-xs font-medium text-foreground truncate">{testimonial.after}</p>
                    </div>
                  </div>

                  {/* Profile */}
                  <div className="flex items-center gap-3">
                    <div className="relative shrink-0">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-11 h-11 rounded-full border-2 border-[hsl(var(--brand-orange))]/30 object-cover group-hover:scale-110 group-hover:border-[hsl(var(--brand-orange))]/60 transition-all duration-300"
                      />
                      <div className="absolute inset-0 rounded-full bg-[hsl(var(--brand-orange))]/0 group-hover:bg-[hsl(var(--brand-orange))]/10 transition-colors duration-300" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-foreground text-sm truncate">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground truncate">
                        {testimonial.role} @ {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Scroll Hint */}
        <div className={`flex justify-center mt-6 gap-2 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <span className="text-xs text-muted-foreground">Swipe to see more success stories</span>
          <ChevronRight className="w-4 h-4 text-muted-foreground animate-pulse" />
        </div>

        {/* Bottom Note */}
        <div className={`text-center mt-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-muted-foreground text-sm">
            These aren't exceptional cases. <span className="text-foreground font-medium">This is what's possible when you learn the right skills at the right time.</span>
          </p>
        </div>
      </div>
    </section>
  );
};
