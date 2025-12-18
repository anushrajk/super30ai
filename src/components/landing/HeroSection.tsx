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
    <section className="relative min-h-screen bg-background overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 via-background to-background" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-400 rounded-full blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Trust Signals */}
            <div className="flex flex-wrap gap-3">
              {trustSignals.map((signal, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 bg-orange-50 border border-orange-100 rounded-full px-3 py-1.5 text-sm text-foreground"
                >
                  <signal.icon className="w-4 h-4 text-orange-500" />
                  <span>{signal.text}</span>
                </div>
              ))}
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                When AI Decides Who Ranks,{" "}
                <span className="text-orange-500">We Decide Who Wins.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                We help founders dominate Google, AI Overviews, and LLM answers — with predictable SEO performance, not vanity rankings.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 pt-4">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="font-semibold text-foreground">{stat.value}</span>
                  <span className="text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <div className="lg:pl-8">
            <LeadCaptureForm onSubmit={onSubmit} loading={loading} />
          </div>
        </div>
      </div>
    </section>
  );
};
