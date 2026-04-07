import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Users, BarChart3, ArrowRight, Sparkles, Bot, BrainCircuit, LineChart } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const integrationIcons = [
  { Icon: Target, label: "Strategy" },
  { Icon: BarChart3, label: "AI Analysis" },
  { Icon: Users, label: "Growth" }
];

const aiFeatures = [
  { icon: Sparkles, title: "AI Content Engine", description: "Generate SEO-optimized content, ad copy, and social posts at scale for your Bangalore brand" },
  { icon: Bot, title: "Smart Automation", description: "Automated email sequences, social scheduling, and lead nurturing powered by AI" },
  { icon: BrainCircuit, title: "Predictive Analytics", description: "Forecast campaign outcomes before spending — a unique advantage of our digital marketing agency" },
  { icon: LineChart, title: "Unified Dashboard", description: "See all channels — SEO, ads, social, email — in one real-time view with revenue attribution" },
];

export const DMAISections = () => {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

  return (
    <section ref={sectionRef} className="py-10 md:py-16 lg:py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:6rem_6rem] opacity-10" />

      <div className="container mx-auto px-4 relative">
        {/* Cross-Channel Integration */}
        <div className={`bg-foreground rounded-2xl p-6 md:p-10 mb-8 md:mb-14 relative overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-center relative">
            <div>
              <span className="inline-block px-4 py-1.5 bg-brand/20 text-brand rounded-full text-sm font-medium mb-4 border border-brand/30">
                What Makes Our Digital Marketing Agency in Bangalore Unique
              </span>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4">
                Cross-Channel Integration Engine
              </h3>
              <p className="text-gray-300 mb-5 leading-relaxed text-sm md:text-base">
                Most digital marketing agencies in Bangalore run each channel independently. We connect SEO insights to ad targeting, social engagement to email nurture, and website data to campaign optimization — creating a unified growth loop that multiplies results.
              </p>
              <ul className="space-y-3 mb-6">
                {["SEO keyword data feeds into Google Ads targeting automatically", "Social engagement signals inform content strategy in real-time", "Email automation triggered by website behaviour patterns"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                    <div className="w-2 h-2 bg-brand rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-brand hover:bg-brand/90 text-white rounded-full px-6">
                See Our Strategy in Action
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                {integrationIcons.map((item, i) => (
                  <div key={i} className="flex flex-col sm:flex-row items-center gap-4">
                    <div className="flex flex-col items-center gap-2">
                      <div className={`w-16 h-16 ${i === 2 ? 'bg-brand' : 'bg-brand/20'} rounded-2xl flex items-center justify-center`}>
                        <item.Icon className={`w-8 h-8 ${i === 2 ? 'text-white' : 'text-brand'}`} />
                      </div>
                      <span className="text-xs text-gray-400 font-medium">{item.label}</span>
                    </div>
                    {i < 2 && (
                      <div className="hidden sm:flex items-center mb-6">
                        <div className="w-6 h-1 bg-brand/30 rounded-full" />
                        <div className="w-0 h-0 border-t-4 border-b-4 border-l-6 border-transparent border-l-brand" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* AI Marketing Automation */}
        <div className={`bg-white border border-border/50 rounded-2xl p-6 md:p-10 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-1.5 bg-brand/10 text-brand rounded-full text-sm font-medium mb-4 border border-brand/20">
              AI-Powered Digital Marketing
            </span>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-3">
              AI-Powered Marketing Automation
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our digital marketing agency in Bangalore lets AI handle content creation, campaign optimization, and performance reporting while your team focuses on strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
            {aiFeatures.map((feature, index) => (
              <Card key={index} className="bg-white border border-border/50 rounded-2xl">
                <CardContent className="p-5 text-center">
                  <div className="w-14 h-14 bg-brand/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-7 h-7 text-brand" />
                  </div>
                  <h4 className="font-bold text-foreground mb-2 text-sm md:text-base">{feature.title}</h4>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-border/50">
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              {[
                { value: "300%", label: "Avg. Traffic Growth" },
                { value: "5x", label: "Marketing ROI" },
                { value: "30+", label: "Digital Marketing Experts" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-brand">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
