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
  subtext = "Let's build a digital marketing strategy that drives real results. Book a free consultation with our experts.",
  primaryCTA = { label: "Get Free Strategy Consultation", href: "/seo-company-bangalore" },
  secondaryCTA = { label: "Explore Our Services", href: "/lead-generation-agency-bangalore" },
  variant = "dark",
}, ref) => {
  const isDark = variant === "dark";
  
  return (
    <section ref={ref} className="py-8 md:py-12 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 relative">
        <div className={`relative overflow-hidden rounded-3xl p-8 md:p-12 lg:p-16 ${isDark ? "bg-[#0a0a0a]" : "bg-white border border-border shadow-sm"}`}>
          {/* Subtle glow accents */}
          <div className={`absolute -right-20 -top-20 h-64 w-64 rounded-full blur-3xl ${isDark ? "bg-brand/10" : "bg-brand/5"}`} aria-hidden="true" />
          <div className={`absolute -bottom-20 -left-20 h-48 w-48 rounded-full blur-3xl ${isDark ? "bg-brand/5" : "bg-brand/5"}`} aria-hidden="true" />
          
          {/* Grid pattern overlay */}
          <div className={`absolute inset-0 bg-[linear-gradient(to_right,${isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)"}_1px,transparent_1px),linear-gradient(to_bottom,${isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)"}_1px,transparent_1px)] bg-[size:4rem_4rem]`} />
          
          <div className="relative text-center">
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
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg transition-all duration-300 w-full sm:w-auto rounded-full"
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
                    className={`w-full sm:w-auto rounded-full ${!isDark && "border-2 border-slate-300 text-slate-700 hover:bg-slate-100 hover:border-slate-400"}`}
                  >
                    {secondaryCTA.label}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

UnifiedCTASection.displayName = "UnifiedCTASection";
