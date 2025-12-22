import { useState } from "react";
import { Globe, Bot, Handshake, TrendingUp, Target, Award, MessageCircle, ArrowRight } from "lucide-react";
import { PMLeadCaptureForm } from "./PMLeadCaptureForm";
import { Button } from "@/components/ui/button";
import { EnquiryPopup } from "@/components/EnquiryPopup";

interface PMHeroSectionProps {
  onSubmit: (data: { 
    website_url: string; 
    email: string; 
    phone?: string; 
    role?: string; 
    monthly_revenue?: string;
  }) => void;
  loading?: boolean;
}

const trustSignals = [
  { icon: Target, text: "ROI-Focused Campaigns" },
  { icon: Globe, text: "Multi-Platform Expertise" },
  { icon: Bot, text: "AI-Powered Optimization" },
  { icon: Handshake, text: "No long-term lock-ins" },
];

const expertCredentials = [
  "Ex-Meta Ads Specialists",
  "10+ Years Experience",
  "₹50Cr+ Ad Spend Managed",
];

export const PMHeroSection = ({ onSubmit, loading }: PMHeroSectionProps) => {
  const [showEnquiryPopup, setShowEnquiryPopup] = useState(false);

  return (
    <section className="relative bg-background overflow-hidden min-h-[85vh] md:min-h-[90vh] flex items-center">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-background to-background dark:from-blue-950/30 dark:via-background dark:to-background" />
        
        {/* Animated orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-400/30 to-blue-600/10 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-orange-300/20 to-orange-500/10 rounded-full blur-2xl" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-transparent rounded-full blur-2xl" />
      </div>

      <div className="container relative mx-auto px-4 py-8 md:py-12 lg:py-16">
        {/* 2-Column Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="md:col-span-1 lg:col-span-7 space-y-4 md:space-y-6">
            {/* Badge */}
            <div className="badge-brand">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-medium">
                Performance Marketing Agency
              </span>
            </div>

            {/* H1 and Description */}
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-4 md:mb-5">
                When Every Rupee Counts,{" "}
                <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                  We Make It Multiply.
                </span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
                AI-powered performance marketing that turns ad spend into{" "}
                <span className="text-foreground font-semibold">predictable revenue</span>, not wasted budget.
              </p>
            </div>

            {/* Trust Signals - Stacked Vertically */}
            <div className="flex flex-col gap-3 py-2">
              {trustSignals.map((signal, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 group cursor-default"
                >
                  <div className="w-7 h-7 icon-bg-glow rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-brand-gradient group-hover:scale-110 transition-all duration-300 shadow-md shadow-brand/20">
                    <signal.icon className="w-3.5 h-3.5 text-brand group-hover:text-white transition-colors" />
                  </div>
                  <span className="font-medium text-foreground text-sm md:text-base">{signal.text}</span>
                </div>
              ))}
            </div>

            {/* Enquire Now CTA */}
            <div className="pt-2">
              <Button 
                variant="outline-brand"
                size="lg"
                onClick={() => setShowEnquiryPopup(true)}
                className="px-6 py-3 h-auto rounded-xl group"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Enquire Now
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Expert credentials - Mobile only */}
            <div className="lg:hidden flex flex-wrap gap-2 pt-2">
              {expertCredentials.map((cred, i) => (
                <span 
                  key={i}
                  className="inline-flex items-center gap-1.5 bg-muted text-muted-foreground px-3 py-1.5 rounded-full text-xs font-medium"
                >
                  <Award className="w-3 h-3 text-brand" />
                  {cred}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="md:col-span-1 lg:col-span-5">
            <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
              <PMLeadCaptureForm onSubmit={onSubmit} loading={loading} />
            </div>
            
            {/* Expert credentials - Desktop only */}
            <div className="hidden lg:flex flex-wrap gap-2 mt-4 justify-center">
              {expertCredentials.map((cred, i) => (
                <span 
                  key={i}
                  className="inline-flex items-center gap-1.5 bg-muted text-muted-foreground px-3 py-1.5 rounded-full text-xs font-medium"
                >
                  <Award className="w-3 h-3 text-brand" />
                  {cred}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enquiry Popup */}
      <EnquiryPopup open={showEnquiryPopup} onOpenChange={setShowEnquiryPopup} />
    </section>
  );
};
