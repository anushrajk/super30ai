import { LeadCaptureForm } from "@/components/landing/LeadCaptureForm";
import { Users, Globe, Bot, Handshake, Award, TrendingUp, Target } from "lucide-react";

interface PMHeroSectionProps {
  onSubmit: (data: { website_url: string; email: string; role?: string; monthly_revenue?: string }) => void;
  loading?: boolean;
}

const trustSignals = [
  { icon: Target, text: "ROI-Focused Campaigns" },
  { icon: Globe, text: "Multi-Platform Expertise" },
  { icon: Bot, text: "AI-Powered Optimization" },
  { icon: Handshake, text: "No long-term lock-ins" },
];

export const PMHeroSection = ({ onSubmit, loading }: PMHeroSectionProps) => {
  return (
    <section className="relative bg-background overflow-hidden min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-background to-background" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-400/30 to-blue-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-orange-300/20 to-orange-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container relative mx-auto px-4 py-12 lg:py-16">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-200 px-4 py-1.5 rounded-full">
              <TrendingUp className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 text-sm font-medium">Performance Marketing Agency</span>
            </div>

            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-5">
                When Every Rupee Counts,{" "}
                <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                  We Make It Multiply.
                </span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
                AI-powered performance marketing that turns ad spend into{" "}
                <span className="text-foreground font-semibold">predictable revenue</span>, not wasted budget.
              </p>
            </div>

            <div className="flex flex-col gap-3 py-2">
              {trustSignals.map((signal, index) => (
                <div key={index} className="flex items-center gap-3 group cursor-default">
                  <div className="w-7 h-7 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md shadow-orange-500/20">
                    <signal.icon className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="font-medium text-foreground text-sm md:text-base">{signal.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
              <LeadCaptureForm onSubmit={onSubmit} loading={loading} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
