import { Button } from "@/components/ui/button";
import { Globe, Bot, Handshake, TrendingUp, Target, ArrowRight, Sparkles } from "lucide-react";

interface PMHeroSectionProps {
  onOpenSurvey: () => void;
}

const trustSignals = [
  { icon: Target, text: "ROI-Focused Campaigns" },
  { icon: Globe, text: "Multi-Platform Expertise" },
  { icon: Bot, text: "AI-Powered Optimization" },
  { icon: Handshake, text: "No long-term lock-ins" },
];

export const PMHeroSection = ({ onOpenSurvey }: PMHeroSectionProps) => {
  return (
    <section className="relative bg-background overflow-hidden min-h-[85vh] md:min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-background to-background" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-400/30 to-blue-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-orange-300/20 to-orange-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container relative mx-auto px-4 py-8 md:py-12 lg:py-16">
        <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
          <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-200 px-4 py-1.5 rounded-full">
            <TrendingUp className="w-4 h-4 text-blue-600" />
            <span className="text-blue-700 text-sm font-medium">Performance Marketing Agency</span>
          </div>

          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-4 md:mb-6">
              When Every Rupee Counts,{" "}
              <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                We Make It Multiply.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              AI-powered performance marketing that turns ad spend into{" "}
              <span className="text-blue-600 font-semibold">predictable revenue</span>, not wasted budget.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 py-4">
            {trustSignals.map((signal, index) => (
              <div key={index} className="flex items-center gap-2 group cursor-default bg-background/80 backdrop-blur-sm border border-border rounded-full px-4 py-2">
                <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md shadow-blue-500/20">
                  <signal.icon className="w-3 h-3 text-white" />
                </div>
                <span className="font-medium text-foreground text-sm">{signal.text}</span>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <Button 
              onClick={onOpenSurvey}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg px-8 py-6 h-auto rounded-xl shadow-lg shadow-blue-500/25 group"
            >
              <Sparkles className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Get Your Free Ads Audit
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-muted-foreground text-sm mt-3">Takes 2 minutes • No credit card required</p>
          </div>
        </div>
      </div>
    </section>
  );
};
