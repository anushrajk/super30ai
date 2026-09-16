import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Sparkles,
  ArrowRight, 
  Building2, 
  ShoppingCart, 
  Briefcase, 
  GraduationCap, 
  Stethoscope, 
  Rocket, 
  Home as HomeIcon, 
  Scale, 
  Utensils,
  MessageCircle,
  type LucideIcon
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BentoGrid, BentoCard, BentoIcon } from "@/components/ui/bento-grid";
import { EnquiryPopup } from "@/components/EnquiryPopup";
import { AuditChoicePopup } from "@/components/popups/AuditChoicePopup";

interface Audience {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface WhoIsThisForSectionProps {
  label?: string;
  heading?: React.ReactNode;
  description?: string;
  audiences?: Audience[];
  bottomText?: string;
  primaryCtaLabel?: string;
  secondaryCtaLabel?: string;
}

const defaultAudiences: Audience[] = [
  { icon: Building2, title: "B2B SaaS", description: "Full funnel digital marketing for SaaS from SEO and content to paid campaigns that generate a qualified pipeline." },
  { icon: ShoppingCart, title: "E-commerce", description: "AI driven e-commerce marketing combining SEO, paid ads, and social media to increase conversions and ROAS." },
  { icon: Briefcase, title: "Professional Services", description: "Integrated digital marketing strategies to establish authority, attract inbound leads, and grow your practice." },
  { icon: GraduationCap, title: "EdTech", description: "Multi channel digital marketing for EdTech using SEO, paid campaigns, and social media to scale learner acquisition." },
  { icon: Stethoscope, title: "Healthcare", description: "Compliance ready digital marketing for healthcare, from patient acquisition ads to trust building content that converts." },
  { icon: Rocket, title: "Tech Startups", description: "Growth marketing for startups using rapid experimentation across SEO, ads, social, and content to achieve the best product market fit." },
  { icon: HomeIcon, title: "Real Estate", description: "Digital marketing strategies for real estate using SEO, Google Ads, social media, and landing pages that generate quality leads." },
  { icon: Scale, title: "Legal Services", description: "Targeted digital marketing for law firms, from local SEO to paid ads that attract high intent clients." },
  { icon: Utensils, title: "Hospitality & Travel", description: "Comprehensive digital marketing for hospitality using social media, SEO, and paid campaigns that drive bookings." },
];

export const WhoIsThisForSection = ({
  label = "Perfect Fit",
  heading = "Industry-Leading AI Digital Marketing Company for Every Sector",
  description = "Our digital marketing company is custom built for dynamic business models that are prepared to grow across every channel.",
  audiences = defaultAudiences,
  bottomText = "Is Your Industry Not Listed? We help businesses across every sector grow with confidence.",
  primaryCtaLabel = "Get a Free Strategy Call",
  secondaryCtaLabel = "Enquire Now",
}: WhoIsThisForSectionProps) => {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  const [showEnquiryPopup, setShowEnquiryPopup] = useState(false);
  const [showAuditPopup, setShowAuditPopup] = useState(false);

  return (
    <section 
      ref={sectionRef}
      className="py-12 md:py-20 lg:py-24 bg-background"
    >
      <div className="container mx-auto px-4">
        <div className={`text-center max-w-3xl mx-auto mb-5 md:mb-10 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-1.5 bg-brand/5 text-brand rounded-full text-xs font-semibold uppercase mb-4 border border-brand/20">
            {label}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            {heading}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <BentoGrid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto mb-5 md:mb-8">
          {audiences.map((audience, index) => (
            <BentoCard 
              key={index} 
              className={`group bg-card border-border hover:border-brand/30 rounded-xl ${isVisible ? 'opacity-100' : 'opacity-0'} transition-all duration-300`}
            >
              <div className="flex items-start gap-3 md:gap-4">
                <BentoIcon size="md" className="bg-brand/20">
                  <audience.icon className="w-6 h-6 md:w-7 md:h-7 text-brand transition-colors duration-300" />
                </BentoIcon>
                <div className="flex-1">
                   <h3 className="text-base md:text-lg font-bold text-foreground mb-1 group-hover:text-brand transition-colors duration-300">
                    {audience.title}
                  </h3>
                   <p className="text-muted-foreground text-sm leading-relaxed">
                    {audience.description}
                  </p>
                </div>
              </div>
            </BentoCard>
          ))}
        </BentoGrid>

        <div className={`text-center transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '400ms' }}>
          <p className="text-muted-foreground mb-5 text-sm md:text-base">{bottomText}</p>
          
          {/* Dual CTA */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button 
              onClick={() => setShowAuditPopup(true)}
              size="lg"
              className="bg-brand hover:bg-brand/90 text-primary-foreground rounded-full transition-all duration-300 group"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              {primaryCtaLabel}
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline-brand"
              size="lg"
              onClick={() => setShowEnquiryPopup(true)}
              className="rounded-full transition-all duration-300 group"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              {secondaryCtaLabel}
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>

      <EnquiryPopup 
        open={showEnquiryPopup} 
        onOpenChange={setShowEnquiryPopup} 
      />
      <AuditChoicePopup 
        open={showAuditPopup} 
        onOpenChange={setShowAuditPopup} 
      />
    </section>
  );
};
