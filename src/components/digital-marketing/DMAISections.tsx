import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, BarChart3, ArrowRight, Layers, LineChart } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  { icon: Layers, title: "Cross-Channel Strategy", description: "SEO insights feed ad targeting, social engagement drives email nurture — all channels work as one engine." },
  { icon: Target, title: "Smart Automation", description: "Automated email sequences, social scheduling, and lead nurturing that runs without manual intervention." },
  { icon: BarChart3, title: "Revenue Attribution", description: "Track every lead from first click to closed deal. Know exactly which channel drives your revenue." },
  { icon: LineChart, title: "Real-Time Dashboards", description: "See all channels — SEO, ads, social, email — in one live view. No more waiting for monthly PDFs." },
];

export const DMAISections = () => {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

  return (
    <section ref={sectionRef} className="py-10 md:py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Cross-Channel Integration */}
        <div className={`bg-foreground rounded-2xl p-6 md:p-10 mb-8 md:mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-brand/20 text-brand rounded-full text-sm font-medium mb-4 border border-brand/30">
              What Makes Us Different
            </span>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4">
              Cross-Channel Integration That Actually Works
            </h3>
            <p className="text-gray-300 mb-5 leading-relaxed text-sm md:text-base">
              Most digital marketing agencies in Bangalore run each channel independently. We connect everything — SEO keyword data feeds into Google Ads targeting, social engagement informs content strategy, and website behaviour triggers email automation. One unified growth loop.
            </p>
            <ul className="space-y-3 mb-6">
              {["SEO keyword data feeds into Google Ads targeting automatically", "Social engagement signals inform content strategy in real-time", "Website behaviour patterns trigger personalized email sequences"].map((item, i) => (
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
        </div>

        {/* Features Grid */}
        <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-8">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-3">
              How We Drive Results for Bangalore Businesses
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Data-driven execution across every channel, managed by our 30+ in-house digital marketing experts.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
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
        </div>
      </div>
    </section>
  );
};
