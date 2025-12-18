import { LeadCaptureForm } from "./LeadCaptureForm";
import { Check, Users, Globe, Bot, Handshake } from "lucide-react";

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

const stats = [
  { value: "300%+", label: "ROI Avg." },
  { value: "50+", label: "AI SEO Audits" },
  { value: "Enterprise", label: "Security" },
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

            {/* Trust Signals */}
            <div className="flex flex-wrap gap-2">
              {trustSignals.map((signal, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 bg-background/60 backdrop-blur-md border border-orange-200/50 rounded-full px-3 py-1.5 text-sm text-foreground shadow-lg shadow-orange-500/5 hover:shadow-orange-500/20 hover:border-orange-400/70 hover:scale-105 transition-all duration-300 cursor-default"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-5 h-5 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                    <signal.icon className="w-3 h-3 text-white" />
                  </div>
                  <span className="font-medium text-xs md:text-sm">{signal.text}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-4">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 bg-background/60 backdrop-blur-sm border border-border/50 rounded-xl px-4 py-3 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-lg shadow-orange-500/30">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <span className="font-bold text-foreground text-lg">{stat.value}</span>
                    <span className="text-muted-foreground ml-1 text-sm">{stat.label}</span>
                  </div>
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
