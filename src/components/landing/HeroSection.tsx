import { LeadCaptureForm } from "./LeadCaptureForm";
import { Users, Globe, Bot, Handshake } from "lucide-react";

interface HeroSectionProps {
  onSubmit: (data: { website_url: string; email: string; role?: string; monthly_revenue?: string }) => void;
  loading?: boolean;
}

const trustSignals = [
  { icon: Users, text: "Built for Founders & CXOs" },
  { icon: Globe, text: "Bangalore-based & Global Playbooks" },
  { icon: Bot, text: "AI + Human Expert Model" },
  { icon: Handshake, text: "No long-term lock-ins" },
];

export const HeroSection = ({ onSubmit, loading }: HeroSectionProps) => {
  return (
    <section className="relative bg-background overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/80 via-background to-background" />
        
        {/* Animated orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-orange-400/30 to-orange-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-orange-300/20 to-orange-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-orange-200/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container relative mx-auto px-4 py-16 lg:py-20">
        {/* 2-Column Layout */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* H1 and Description */}
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-4">
                When AI Decides Who Ranks,{" "}
                <span className="relative">
                  <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                    We Decide Who Wins.
                  </span>
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full opacity-50" />
                </span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
                We help founders dominate Google, AI Overviews, and LLM answers — with predictable SEO performance, not vanity rankings.
              </p>
            </div>

            {/* Trust Signals - Stacked Vertically */}
            <div className="flex flex-col gap-3">
              {trustSignals.map((signal, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <signal.icon className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="font-medium text-foreground text-sm md:text-base">{signal.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-5 animate-fade-in" style={{ animationDelay: '300ms' }}>
            <LeadCaptureForm onSubmit={onSubmit} loading={loading} />
          </div>
        </div>
      </div>
    </section>
  );
};
