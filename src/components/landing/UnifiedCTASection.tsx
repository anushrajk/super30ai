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
}

export const UnifiedCTASection = ({
  headline = "Ready to Grow Your Business?",
  subtext = "Choose your path to growth. Get a free audit and discover your untapped potential.",
  primaryCTA = { label: "Get Free AI SEO Audit", href: "/ai-seo" },
  secondaryCTA = { label: "Free Ads Audit", href: "/performance-marketing" },
}: UnifiedCTASectionProps) => {
  return (
    <section className="py-10 md:py-16 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="container relative mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
          {headline}
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
          {subtext}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to={primaryCTA.href}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 w-full sm:w-auto"
            >
              {primaryCTA.label}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
          {secondaryCTA && (
            <Link to={secondaryCTA.href}>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-slate-300 text-slate-700 hover:bg-slate-100 hover:border-slate-400 w-full sm:w-auto"
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
};
