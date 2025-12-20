import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, X, Check, TrendingUp, AlertTriangle, Zap } from "lucide-react";

/**
 * Hero Variant: Problem-Agitation-Solution (PAS)
 * 
 * Research basis (Omniconvert 2025):
 * - "Address users' pain points" - acknowledging pain points builds immediate empathy
 * - "Connect with users' desirable outcomes" - people buy outcomes, not tools
 * - Studies show that 80% of time is spent above the fold (Nielsen Norman Group)
 * - Pain-point messaging + solution creates emotional momentum
 */

const painPoints = [
  "Spending on ads with no clear ROI",
  "Invisible in AI search results like ChatGPT",
  "Competitors ranking above you on Google",
];

const solutions = [
  "Predictable revenue from paid campaigns",
  "Getting recommended by AI assistants",
  "Dominating search for your key terms",
];

export const HeroVariantPAS = () => {
  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Grid pattern background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Gradient orbs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        {/* Badge */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 px-4 py-2 rounded-full">
            <AlertTriangle className="w-4 h-4 text-red-400" />
            <span className="text-red-300 text-sm font-medium">Hero Variant: Problem-Agitation-Solution (PAS)</span>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Main Headline - Problem First */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white leading-tight mb-6">
            Tired of{" "}
            <span className="text-red-400 line-through decoration-red-400/50">Wasting Money</span>
            {" "}on Marketing That Doesn't Work?
          </h1>

          <p className="text-xl text-slate-300 text-center max-w-3xl mx-auto mb-12">
            Most businesses struggle with the same problems. Here's what we fix:
          </p>

          {/* Problem → Solution Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Problems Column */}
            <div className="bg-red-950/20 border border-red-500/20 rounded-2xl p-8">
              <h3 className="text-lg font-semibold text-red-400 mb-6 flex items-center gap-2">
                <X className="w-5 h-5" />
                Your Current Reality
              </h3>
              <ul className="space-y-4">
                {painPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="w-3.5 h-3.5 text-red-400" />
                    </div>
                    <span className="text-slate-300">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions Column */}
            <div className="bg-green-950/20 border border-green-500/20 rounded-2xl p-8">
              <h3 className="text-lg font-semibold text-green-400 mb-6 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                With The Super 30
              </h3>
              <ul className="space-y-4">
                {solutions.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-green-400" />
                    </div>
                    <span className="text-slate-200">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Solution Statement */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/30 rounded-full px-6 py-3 mb-6">
              <Zap className="w-5 h-5 text-orange-400" />
              <span className="text-orange-200 font-medium">We combine AI SEO + Performance Marketing for predictable growth</span>
            </div>
          </div>

          {/* Single Focused CTA */}
          <div className="flex flex-col items-center gap-4">
            <Link to="/ai-seo">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 text-lg px-10 py-6 h-auto">
                Get Your Free AI SEO Audit
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <p className="text-slate-400 text-sm">No credit card required • Results in 60 seconds</p>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-slate-700/50">
            <div className="flex flex-wrap justify-center items-center gap-8 text-slate-400">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">300+</div>
                <div className="text-sm">Projects Delivered</div>
              </div>
              <div className="w-px h-10 bg-slate-700" />
              <div className="text-center">
                <div className="text-2xl font-bold text-white">₹50Cr+</div>
                <div className="text-sm">Revenue Generated</div>
              </div>
              <div className="w-px h-10 bg-slate-700 hidden sm:block" />
              <div className="text-center hidden sm:block">
                <div className="text-2xl font-bold text-white">4.2x</div>
                <div className="text-sm">Average ROAS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
