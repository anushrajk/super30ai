import { LeadCaptureForm } from "./LeadCaptureForm";
import { Users, Globe, Bot, Handshake, Award, TrendingUp } from "lucide-react";

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

const expertCredentials = [
  "Ex-Google SEO Strategists",
  "10+ Years Experience",
  "300+ Successful Projects",
];

export const HeroSection = ({ onSubmit, loading }: HeroSectionProps) => {
  return (
    <section className="relative bg-background overflow-hidden min-h-[90vh] flex items-center">
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

      <div className="container relative mx-auto px-4 py-12 lg:py-16">
        {/* 2-Column Layout */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 px-4 py-1.5 rounded-full">
              <TrendingUp className="w-4 h-4 text-orange-600" />
              <span className="text-orange-700 text-sm font-medium">
                #1 AI SEO Agency in India
              </span>
            </div>

            {/* H1 and Description */}
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-5">
                When AI Decides Who Ranks,{" "}
                <span className="relative">
                  <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                    We Decide Who Wins.
                  </span>
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full opacity-50" />
                </span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
                We help founders dominate Google, AI Overviews, and LLM answers — with{" "}
                <span className="text-foreground font-semibold">predictable SEO performance</span>, not vanity rankings.
              </p>
            </div>

            {/* Trust Signals - Stacked Vertically */}
            <div className="flex flex-col gap-3 py-2">
              {trustSignals.map((signal, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 group cursor-default"
                >
                  <div className="w-7 h-7 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md shadow-orange-500/20">
                    <signal.icon className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="font-medium text-foreground text-sm md:text-base">{signal.text}</span>
                </div>
              ))}
            </div>

            {/* Expert credentials - Mobile only */}
            <div className="lg:hidden flex flex-wrap gap-2 pt-2">
              {expertCredentials.map((cred, i) => (
                <span 
                  key={i}
                  className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-700 px-3 py-1.5 rounded-full text-xs font-medium"
                >
                  <Award className="w-3 h-3 text-orange-500" />
                  {cred}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-5">
            <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
              <LeadCaptureForm onSubmit={onSubmit} loading={loading} />
            </div>
            
            {/* Expert credentials - Desktop only */}
            <div className="hidden lg:flex flex-wrap gap-2 mt-4 justify-center">
              {expertCredentials.map((cred, i) => (
                <span 
                  key={i}
                  className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-700 px-3 py-1.5 rounded-full text-xs font-medium"
                >
                  <Award className="w-3 h-3 text-orange-500" />
                  {cred}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
