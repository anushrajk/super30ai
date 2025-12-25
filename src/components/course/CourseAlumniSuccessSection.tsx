import { TrendingUp, Building2, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const CourseAlumniSuccessSection = () => {
  const [ref, isVisible] = useScrollAnimation();

  const alumni = [
    {
      name: "Priya Sharma",
      previousRole: "Content Writer",
      currentRole: "AI SEO Specialist",
      company: "Razorpay",
      salaryGrowth: "180%",
      avatar: "PS",
    },
    {
      name: "Rahul Verma",
      previousRole: "Marketing Executive",
      currentRole: "GEO Strategist",
      company: "Freshworks",
      salaryGrowth: "150%",
      avatar: "RV",
    },
    {
      name: "Ananya Iyer",
      previousRole: "Fresher (BBA)",
      currentRole: "SEO Analyst",
      company: "Swiggy",
      salaryGrowth: "First Job ₹6.5L",
      avatar: "AI",
    },
    {
      name: "Vikash Kumar",
      previousRole: "Social Media Manager",
      currentRole: "AEO Consultant",
      company: "Zoho",
      salaryGrowth: "200%",
      avatar: "VK",
    },
    {
      name: "Sneha Patel",
      previousRole: "Digital Marketing Intern",
      currentRole: "AI SEO Lead",
      company: "Meesho",
      salaryGrowth: "220%",
      avatar: "SP",
    },
    {
      name: "Arjun Nair",
      previousRole: "Traditional SEO",
      currentRole: "Head of SEO",
      company: "Startup (Series A)",
      salaryGrowth: "170%",
      avatar: "AN",
    },
  ];

  const companies = [
    "Razorpay", "Freshworks", "Swiggy", "Zoho", "Meesho", "Flipkart", 
    "PhonePe", "CRED", "Groww", "upGrad", "Byju's", "Ola"
  ];

  return (
    <section ref={ref} className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1 bg-[hsl(var(--brand-orange))]/10 text-[hsl(var(--brand-orange))] text-sm font-semibold rounded-full border border-[hsl(var(--brand-orange))]/30 mb-4">
            Alumni Success
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Alumni Are <span className="text-gradient">Thriving</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real transformations from our graduates who are now leading AI SEO at top companies
          </p>
        </div>

        {/* Alumni Cards Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {alumni.map((person, index) => (
            <Card key={index} className="bg-card border-border/50 hover:border-[hsl(var(--brand-orange))]/30 transition-all hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  {/* Avatar */}
                  <div className="w-12 h-12 rounded-full bg-[hsl(var(--brand-orange))]/10 flex items-center justify-center text-[hsl(var(--brand-orange))] font-semibold flex-shrink-0">
                    {person.avatar}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">{person.name}</h4>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                      <span>{person.previousRole}</span>
                      <span>→</span>
                      <span className="text-[hsl(var(--brand-orange))]">{person.currentRole}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-border/50 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm">
                    <Building2 className="w-4 h-4 text-muted-foreground" />
                    <span className="text-foreground">{person.company}</span>
                  </div>
                  <div className="flex items-center gap-1 text-emerald-500 font-semibold text-sm">
                    <TrendingUp className="w-4 h-4" />
                    {person.salaryGrowth}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Where Alumni Work */}
        <div className={`text-center transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-xl font-semibold text-foreground mb-6">Where Our Alumni Work</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {companies.map((company, index) => (
              <div 
                key={index}
                className="px-4 py-2 bg-card rounded-full border border-border/50 text-sm text-muted-foreground hover:border-[hsl(var(--brand-orange))]/30 hover:text-foreground transition-colors"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
