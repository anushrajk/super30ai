import { Badge } from "@/components/ui/badge";
import { LeadCaptureForm } from "./LeadCaptureForm";

interface HeroSectionProps {
  onSubmit: (data: { website_url: string; email: string }) => void;
  loading?: boolean;
}

export const HeroSection = ({ onSubmit, loading }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <Badge className="mb-6 bg-orange-500/10 text-orange-400 border-orange-500/20 hover:bg-orange-500/20">
              🚀 AI-Powered SEO for 2025
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              When AI Decides Who Ranks,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                We Decide Who Wins.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-xl mx-auto lg:mx-0">
              Future-proof your digital presence with AI-first SEO strategies. Get found in ChatGPT, Google AI Overviews, and next-gen search engines.
            </p>

            {/* Trust Signals */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full" />
                Built for Founders
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full" />
                Bangalore-based
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full" />
                AI + Human Model
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full" />
                No Lock-ins
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-orange-500">300%+</div>
                <div className="text-sm text-slate-400">Avg. ROI</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-orange-500">50+</div>
                <div className="text-sm text-slate-400">AI Audits Done</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-orange-500">100%</div>
                <div className="text-sm text-slate-400">Enterprise Security</div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
            <LeadCaptureForm onSubmit={onSubmit} loading={loading} />
          </div>
        </div>
      </div>
    </section>
  );
};
