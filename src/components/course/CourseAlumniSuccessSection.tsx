import { useState } from "react";
import { Building2, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { EnquiryPopup } from "@/components/EnquiryPopup";
import { OptimizedImage } from "@/components/common/OptimizedImage";

// Import alumni images
import priyaSharmaImg from "@/assets/alumni/priya-sharma.jpg";
import rahulVermaImg from "@/assets/alumni/rahul-verma.jpg";
import ananyaIyerImg from "@/assets/alumni/ananya-iyer.jpg";
import vikashKumarImg from "@/assets/alumni/vikash-kumar.jpg";
import snehaPatelImg from "@/assets/alumni/sneha-patel.jpg";
import arjunNairImg from "@/assets/alumni/arjun-nair.jpg";

export const CourseAlumniSuccessSection = () => {
  const [ref, isVisible] = useScrollAnimation();
  const [showEnquiryPopup, setShowEnquiryPopup] = useState(false);

  const alumni = [
    {
      name: "Priya Sharma",
      previousRole: "Content Writer",
      currentRole: "AI SEO Specialist",
      company: "Razorpay",
      city: "Mumbai",
      salaryBefore: "₹35K/month",
      salaryAfter: "₹95K/month",
      salaryGrowth: "171%",
      background: "Hindi-medium school, Tier-2 city",
      quote: "I didn't even know what GEO meant 8 months ago. Now I lead a team of 3 at Razorpay.",
      image: priyaSharmaImg,
    },
    {
      name: "Rahul Verma",
      previousRole: "Marketing Executive",
      currentRole: "GEO Strategist",
      company: "Freshworks",
      city: "Chennai",
      salaryBefore: "₹40K/month",
      salaryAfter: "₹1.1L/month",
      salaryGrowth: "175%",
      background: "B.Com graduate, no coding background",
      quote: "My dad told me to do CA. I chose this instead. Now I earn more than most CAs my age.",
      image: rahulVermaImg,
    },
    {
      name: "Ananya Iyer",
      previousRole: "Fresh BBA Graduate",
      currentRole: "SEO Analyst",
      company: "Swiggy",
      city: "Bangalore",
      salaryBefore: "₹0 (fresher)",
      salaryAfter: "₹55K/month",
      salaryGrowth: "First Job ₹6.6L",
      background: "Fresh graduate, no work experience",
      quote: "All my batchmates are struggling to get ₹25K jobs. I got ₹55K as a fresher. Still can't believe it.",
      image: ananyaIyerImg,
    },
    {
      name: "Vikash Kumar",
      previousRole: "Social Media Manager",
      currentRole: "AEO Consultant",
      company: "Zoho",
      city: "Chennai (from Patna)",
      salaryBefore: "₹30K/month",
      salaryAfter: "₹85K/month",
      salaryGrowth: "183%",
      background: "From Tier-3 city, self-taught",
      quote: "I moved from Patna to Chennai for this role. My family thought I was crazy. Now they show off my salary to relatives.",
      image: vikashKumarImg,
    },
    {
      name: "Sneha Patel",
      previousRole: "Internship Hopper",
      currentRole: "AI SEO Lead",
      company: "Meesho",
      city: "Bangalore",
      salaryBefore: "₹15K/month (intern)",
      salaryAfter: "₹90K/month",
      salaryGrowth: "500%",
      background: "2 years of failed interviews",
      quote: "I failed 23 interviews before this course. After completing it, I cleared 4 out of 5. The difference is the skills, not luck.",
      image: snehaPatelImg,
    },
    {
      name: "Arjun Nair",
      previousRole: "Traditional SEO (3 yrs)",
      currentRole: "Head of SEO",
      company: "Series A Startup",
      city: "Delhi",
      salaryBefore: "₹50K/month",
      salaryAfter: "₹1.4L/month + ESOPs",
      salaryGrowth: "180%",
      background: "Was stuck at same salary for 2 years",
      quote: "I was doing the same SEO for 3 years. This course made me realize I was 5 years behind. Now I lead a team.",
      image: arjunNairImg,
    },
  ];

  const companies = [
    "Razorpay", "Freshworks", "Swiggy", "Zoho", "Meesho", "Flipkart", 
    "PhonePe", "CRED", "Groww", "upGrad", "Nykaa", "Lenskart"
  ];

  return (
    <section ref={ref} className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1 bg-[hsl(var(--brand-orange))]/10 text-[hsl(var(--brand-orange))] text-sm font-semibold rounded-full border border-[hsl(var(--brand-orange))]/30 mb-4">
            They Did It. So Can You.
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            From <span className="text-gradient">"Just Another Marketer"</span> to 
            <br className="hidden md:block" /> "The AI Expert Everyone Wants"
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Not IIT graduates. Not coding wizards. Just regular people who decided to learn something new.
          </p>
        </div>

        {/* Alumni Cards Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {alumni.map((person, index) => (
            <Card key={index} className="bg-card border-border/50 hover:border-[hsl(var(--brand-orange))]/30 transition-all hover:-translate-y-1">
              <CardContent className="p-5">
                {/* Quote */}
                <div className="relative mb-4">
                  <Quote className="absolute -top-1 -left-1 w-5 h-5 text-[hsl(var(--brand-orange))]/30" />
                  <p className="text-foreground/80 text-sm pl-4 italic leading-relaxed">
                    "{person.quote}"
                  </p>
                </div>

                {/* Background Context */}
                <p className="text-xs text-muted-foreground mb-4 px-2 py-1 bg-muted/50 rounded-md inline-block">
                  📍 {person.background}
                </p>

                {/* Profile Header */}
                <div className="flex items-start gap-3 mb-4">
                  {/* Avatar */}
                  <div className="w-10 h-10 flex-shrink-0">
                    <OptimizedImage
                      src={person.image}
                      alt={person.name}
                      containerClassName="w-10 h-10 rounded-full border-2 border-[hsl(var(--brand-orange))]/30"
                      aspectRatio="1/1"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-foreground text-sm">{person.name}</h4>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Building2 className="w-3 h-3" />
                      <span>{person.currentRole} @ {person.company}</span>
                    </div>
                  </div>
                </div>

                {/* Role Transition */}
                <div className="flex items-center gap-2 p-3 bg-muted/30 rounded-lg">
                  <div className="flex-1 text-center">
                    <p className="text-xs text-muted-foreground">Before</p>
                    <p className="text-sm font-medium text-foreground">{person.previousRole}</p>
                  </div>
                  <div className="text-[hsl(var(--brand-orange))] font-bold">→</div>
                  <div className="flex-1 text-center">
                    <p className="text-xs text-muted-foreground">After</p>
                    <p className="text-sm font-medium text-foreground">{person.currentRole}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Where Alumni Work */}
        <div className={`text-center transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-xl font-semibold text-foreground mb-2">Where Our Alumni Get DMs From</h3>
          <p className="text-sm text-muted-foreground mb-6">These companies actively recruit from our network</p>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
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

        {/* Enquire Now CTA */}
        <div className={`flex justify-center mt-10 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-[hsl(var(--brand-orange))] to-[hsl(var(--brand-orange))]/80 hover:from-[hsl(var(--brand-orange))]/90 hover:to-[hsl(var(--brand-orange))]/70 text-white font-semibold px-8 py-6 text-base rounded-xl shadow-lg hover:shadow-xl transition-all"
            onClick={() => setShowEnquiryPopup(true)}
          >
            Enquire Now
          </Button>
        </div>

        {/* Enquiry Popup */}
        <EnquiryPopup 
          open={showEnquiryPopup} 
          onOpenChange={setShowEnquiryPopup} 
        />
      </div>
    </section>
  );
};
