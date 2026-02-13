import React, { forwardRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTAButton {
  label: string;
  href: string;
}

interface UnifiedCTASectionProps {
  headline?: string;
  subtext?: string;
  primaryCTA?: CTAButton;
  secondaryCTA?: CTAButton;
  variant?: "light" | "dark";
}

export const UnifiedCTASection = forwardRef<HTMLElement, UnifiedCTASectionProps>(({
  headline = "Ready to Grow Your Business?",
  subtext = "Choose your path to growth. Get a free audit and discover your untapped potential.",
  primaryCTA = { label: "Get Free Audit & Strategy", href: "/ai-seo-agency-bangalore" },
  secondaryCTA = { label: "Free Ads Audit", href: "/performance-marketing" },
  variant = "light",
}, ref) => {
  const isDark = variant === "dark";
  
  return (
    <section ref={ref} className={`py-10 md:py-16 relative overflow-hidden ${isDark ? "bg-[#0a0a0a]" : "bg-white"}`}>
      {/* Subtle grid pattern overlay */}
      <div className={`absolute inset-0 bg-[linear-gradient(to_right,${isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)"}_1px,transparent_1px),linear-gradient(to_bottom,${isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)"}_1px,transparent_1px)] bg-[size:4rem_4rem]`} />
      
      <div className="container relative mx-auto px-4 text-center">
        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${isDark ? "text-white" : "text-slate-900"}`}>
          {headline}
        </h2>
        <p className={`text-lg max-w-2xl mx-auto mb-8 ${isDark ? "text-white/70" : "text-slate-600"}`}>
          {subtext}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to={primaryCTA.href}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg transition-all duration-300 w-full sm:w-auto"
            >
              {primaryCTA.label}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
          {secondaryCTA && (
            <Link to={secondaryCTA.href}>
              <Button
                size="lg"
                variant={isDark ? "outline-white" : "outline"}
                className={`w-full sm:w-auto ${!isDark && "border-2 border-slate-300 text-slate-700 hover:bg-slate-100 hover:border-slate-400"}`}
              >
                {secondaryCTA.label}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
});

UnifiedCTASection.displayName = "UnifiedCTASection";
