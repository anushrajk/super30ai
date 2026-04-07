import { useState } from "react";
import {
  Search, TrendingUp, Target, Users, BarChart3, Shield, Globe, Zap, Clock,
  CheckCircle2, ChevronLeft, ChevronRight, ArrowRight, MessageCircle
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { EnquiryPopup } from "@/components/EnquiryPopup";

const benefits = [
  {
    icon: Search, title: "Organic Visibility",
    description: "Dominate Google rankings with proven SEO — a core strength of our digital marketing agency in Bangalore.",
    features: ["Technical SEO", "Content strategy", "Link building"],
  },
  {
    icon: Target, title: "Paid Acquisition",
    description: "Google, Meta, and LinkedIn ads optimized for maximum ROAS. Our Bangalore experts manage every rupee.",
    features: ["Smart bidding", "Audience targeting", "Cross-platform"],
  },
  {
    icon: TrendingUp, title: "Revenue Growth",
    description: "Every marketing rupee tracked from click to close. We focus on pipeline, not vanity metrics.",
    features: ["Full-funnel attribution", "Pipeline tracking", "Revenue dashboards"],
  },
  {
    icon: Users, title: "Brand Building",
    description: "Build a brand that's recognized and trusted — through strategic social media, content, and community.",
    features: ["Social media strategy", "Content creation", "Community building"],
  },
  {
    icon: BarChart3, title: "Data-Driven Decisions",
    description: "Analytics that tell you what's working, what's not, and what to do next. No guesswork.",
    features: ["Performance analytics", "A/B testing", "Campaign forecasting"],
  },
  {
    icon: Shield, title: "Competitive Intelligence",
    description: "Know what your Bangalore competitors are doing online — and stay three steps ahead.",
    features: ["Competitor monitoring", "Gap analysis", "Market positioning"],
  },
  {
    icon: Globe, title: "Multi-Channel Presence",
    description: "Unified brand voice across SEO, ads, social, email, and web — orchestrated as one growth engine.",
    features: ["Channel integration", "Consistent messaging", "Cross-platform synergy"],
  },
  {
    icon: Zap, title: "Speed to Market",
    description: "Launch campaigns in days, not weeks. Our 30+ team handles everything so your brand moves fast.",
    features: ["Rapid deployment", "Content at scale", "Automated workflows"],
  },
  {
    icon: Clock, title: "Always-On Marketing",
    description: "Your marketing machine works 24/7 — SEO, retargeting, and email automation never sleep.",
    features: ["Marketing automation", "Nurture sequences", "Retargeting funnels"],
  },
];

export const DMBenefitsSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  const [showEnquiryPopup, setShowEnquiryPopup] = useState(false);

  return (
    <section ref={sectionRef} className="py-8 md:py-14 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className={`text-center max-w-3xl mx-auto mb-8 md:mb-12 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-1.5 bg-brand/10 text-brand rounded-full text-sm font-medium mb-4 border border-brand/20">
            Why Choose Our Digital Marketing Agency in Bangalore
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
            Everything Your Business Needs to <span className="text-brand">Grow Online</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            A complete digital marketing engine — from traffic to revenue — built by Bangalore's top marketing experts
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className={`bg-white border border-border/50 shadow-none rounded-2xl ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            >
              <CardContent className="p-5 md:p-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-brand/10 mb-4">
                  <benefit.icon className="w-6 h-6 text-brand" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{benefit.description}</p>
                <ul className="space-y-2">
                  {benefit.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-sm text-foreground font-medium">
                      <CheckCircle2 className="w-4 h-4 text-brand flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={`flex flex-col sm:flex-row gap-3 justify-center mt-8 md:mt-12 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <Button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            size="lg"
            className="bg-brand hover:bg-brand/90 text-white rounded-full px-8"
          >
            Get Your Free Digital Marketing Strategy
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => setShowEnquiryPopup(true)}
            className="rounded-full px-8 border-brand/30 text-brand hover:bg-brand/5"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Enquire Now
          </Button>
        </div>
      </div>

      <EnquiryPopup open={showEnquiryPopup} onOpenChange={setShowEnquiryPopup} />
    </section>
  );
};
