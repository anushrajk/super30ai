import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const features = [
  { title: "Cross-Channel Strategy", description: "SEO insights feed ad targeting, social engagement drives email nurture — all channels work as one engine." },
  { title: "Smart Automation", description: "Automated email sequences, social scheduling, and lead nurturing that runs without manual intervention." },
  { title: "Revenue Attribution", description: "Track every lead from first click to closed deal. Know exactly which channel drives your revenue." },
  { title: "Real-Time Dashboards", description: "See all channels — SEO, ads, social, email — in one live view. No more waiting for monthly PDFs." },
];

export const DMAISections = () => (
  <section className="py-8 md:py-16 lg:py-24 bg-white">
    <div className="container mx-auto px-4">
      <div className="bg-foreground rounded-xl p-4 sm:p-6 md:p-10 mb-6 md:mb-14">
        <div className="max-w-3xl">
          <span className="inline-block px-3 py-1 bg-brand/20 text-brand rounded-full text-xs sm:text-sm font-medium mb-3 border border-brand/30">What Makes Us Different</span>
          <h3 className="text-lg sm:text-xl md:text-3xl font-bold text-white mb-3">Cross-Channel Integration That Actually Works</h3>
          <p className="text-gray-300 mb-4 leading-relaxed text-xs sm:text-sm md:text-base">
            Most digital marketing agencies in Bangalore run each channel independently. We connect everything — SEO keyword data feeds into Google Ads targeting, social engagement informs content strategy, and website behaviour triggers email automation.
          </p>
          <ul className="space-y-2 mb-5">
            {["SEO keyword data feeds into Google Ads targeting automatically", "Social engagement signals inform content strategy in real-time", "Website behaviour patterns trigger personalized email sequences"].map((item, i) => (
              <li key={i} className="flex items-center gap-2.5 text-gray-300 text-xs sm:text-sm">
                <div className="w-1.5 h-1.5 bg-brand rounded-full flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <Button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-brand hover:bg-brand/90 text-white rounded-full px-5 text-sm">
            See Our Strategy in Action <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>

      <div className="text-center mb-6">
        <h3 className="text-lg sm:text-xl md:text-3xl font-bold text-foreground mb-2">How We Drive Results for Bangalore Businesses</h3>
        <p className="text-muted-foreground text-xs sm:text-sm max-w-2xl mx-auto">Data-driven execution across every channel, managed by our 30+ in-house digital marketing experts.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 max-w-5xl mx-auto">
        {features.map((feature, i) => (
          <div key={i} className="bg-white border border-border/50 rounded-xl p-4 md:p-5 text-center">
            <h4 className="font-bold text-foreground mb-2 text-sm sm:text-base">{feature.title}</h4>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
