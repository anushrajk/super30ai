import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Users, TrendingUp, ArrowRight, Sparkles, Bot, BrainCircuit, LineChart, BarChart3, Zap } from "lucide-react";

const intentMappingIcons = [
  { Icon: Target, label: "Audience Targeting" },
  { Icon: BarChart3, label: "AI Analysis" },
  { Icon: Users, label: "Lead Conversion" }
];

const aiOptimizationFeatures = [
  {
    icon: Sparkles,
    title: "AI Bid Optimization",
    description: "Smart bidding strategies powered by machine learning"
  },
  {
    icon: Bot,
    title: "Automated Audiences",
    description: "AI-built lookalike and intent audiences"
  },
  {
    icon: BrainCircuit,
    title: "Predictive Targeting",
    description: "Reach high-intent buyers before competitors"
  },
  {
    icon: LineChart,
    title: "Real-Time Attribution",
    description: "Track every touchpoint to revenue"
  }
];

export const PMAISections = () => {
  const scrollToForm = () => {
    const heroSection = document.getElementById("pm-hero");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-6 md:py-10 lg:py-16 bg-muted/30 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      
      <div className="container mx-auto px-3 md:px-4 relative">
        {/* AI Audience & Intent Mapping - Dark Section */}
        <div className="bg-[#0a0a0a] rounded-2xl p-6 md:p-10 mb-6 md:mb-12 relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          <div className="absolute top-10 left-10 w-48 h-48 bg-brand/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          
          <div className="grid lg:grid-cols-2 gap-4 md:gap-8 items-center relative">
            <div>
              <span className="inline-block px-4 py-1.5 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium mb-3 border border-orange-500/30">
                AI-Powered Targeting
              </span>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3">
                AI Audience & Intent Mapping
              </h3>
              <p className="text-gray-300 mb-5 leading-relaxed text-sm md:text-base">
                Leverage AI to identify and target high-intent audiences across platforms before your competitors reach them.
              </p>
              <ul className="space-y-2.5 mb-5">
                {[
                  "AI-powered audience segmentation & lookalikes",
                  "Cross-platform intent signal mapping",
                  "Predictive lead scoring for ad targeting"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300 text-sm md:text-base group">
                    <div className="w-2 h-2 bg-brand-gradient rounded-full group-hover:scale-150 transition-transform" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button 
                onClick={scrollToForm} 
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg shadow-orange-500/25 hover:scale-105 transition-all duration-300"
              >
                Unlock AI Targeting
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 md:p-8 backdrop-blur-sm">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                {intentMappingIcons.map((item, i) => (
                  <div key={i} className="flex flex-col sm:flex-row items-center gap-4">
                    <div className="flex flex-col items-center gap-2">
                      <div className={`w-14 h-14 sm:w-18 sm:h-18 ${i === 2 ? 'bg-brand-gradient shadow-brand' : 'bg-brand/20'} rounded-2xl flex items-center justify-center hover:scale-110 hover:rotate-3 transition-all duration-300`}>
                        <item.Icon className={`w-7 h-7 sm:w-9 sm:h-9 ${i === 2 ? 'text-white' : 'text-brand'}`} />
                      </div>
                      <span className="text-xs text-gray-400 font-medium">{item.label}</span>
                    </div>
                    {i < 2 && (
                      <div className="hidden sm:flex items-center mb-6">
                        <div className="w-6 h-1 bg-gradient-to-r from-brand/30 to-brand rounded-full" />
                        <div className="w-0 h-0 border-t-4 border-b-4 border-l-6 border-transparent border-l-brand" />
                      </div>
                    )}
                    {i < 2 && (
                      <div className="flex sm:hidden items-center my-2">
                        <div className="w-1 h-5 bg-gradient-to-b from-brand/30 to-brand rounded-full" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* AI Optimization & Automation - Infographic Style */}
        <div className="bento-card p-4 md:p-8 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-10 left-10 w-32 h-32 bg-brand/5 rounded-full blur-2xl animate-pulse" />
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-primary/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand/3 rounded-full blur-3xl" />
          </div>
          
          <div className="relative">
            <div className="text-center mb-8">
              <span className="badge-brand mb-3">
                AI Automation
              </span>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-foreground mb-3">
                AI-Powered Campaign Optimization
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
                Let AI handle bidding, audience building, and budget allocation while you focus on strategy and growth.
              </p>
            </div>
            
            {/* Infographic Flow Design */}
            <div className="relative max-w-4xl mx-auto">
              {/* Connection lines - Desktop */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand/40 to-transparent animate-pulse" style={{ animationDuration: '2s' }} />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 relative z-10">
                {aiOptimizationFeatures.map((feature, index) => (
                  <div key={index} className="group relative" style={{ animationDelay: `${index * 100}ms` }}>
                    {/* Step number badge */}
                    <div className="absolute -top-2 -left-2 w-6 h-6 bg-brand-gradient rounded-full flex items-center justify-center text-white text-xs font-bold shadow-brand z-20 group-hover:scale-125 transition-transform duration-300">
                      {index + 1}
                    </div>
                    
                    {/* Card with enhanced interactions */}
                    <Card className="bento-card group-hover:border-brand/50 group-hover:shadow-brand transition-all duration-500 h-full overflow-hidden">
                      {/* Hover gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-brand/0 via-brand/0 to-brand/0 group-hover:from-brand/5 group-hover:via-brand/10 group-hover:to-brand/5 transition-all duration-500" />
                      
                      <CardContent className="p-5 text-center relative">
                        {/* Animated icon container */}
                        <div className="relative mx-auto mb-4 w-16 h-16">
                          {/* Pulse ring animation */}
                          <div className="absolute inset-0 rounded-2xl bg-brand/10 group-hover:animate-ping opacity-0 group-hover:opacity-100" style={{ animationDuration: '1.5s' }} />
                          
                          {/* Icon background with hover effects */}
                          <div className="relative w-16 h-16 bg-brand/10 group-hover:bg-brand-gradient rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 shadow-lg group-hover:shadow-brand">
                            <feature.icon className="w-7 h-7 text-brand group-hover:text-white transition-all duration-300" />
                          </div>
                        </div>
                        
                        <h4 className="font-bold text-foreground mb-2 text-sm md:text-base group-hover:text-brand transition-colors duration-300">
                          {feature.title}
                        </h4>
                        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                        
                        {/* Bottom accent line */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </CardContent>
                    </Card>
                    
                    {/* Arrow connector - Desktop only */}
                    {index < 3 && (
                      <div className="hidden lg:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-20">
                        <div className="w-6 h-6 flex items-center justify-center">
                          <ArrowRight className="w-4 h-4 text-brand/50 group-hover:text-brand group-hover:translate-x-1 transition-all duration-300" />
                        </div>
                      </div>
                    )}
                    
                    {/* Arrow connector - Mobile/Tablet */}
                    {index < 3 && (
                      <div className="flex lg:hidden justify-center py-2 sm:hidden">
                        <div className="w-1 h-6 bg-gradient-to-b from-brand/30 to-brand rounded-full" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Bottom CTA area with stats */}
            <div className="mt-8 pt-6 border-t border-border/50">
              <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
                <div className="text-center group cursor-default">
                  <div className="text-2xl md:text-3xl font-bold text-brand group-hover:scale-110 transition-transform duration-300">40%</div>
                  <div className="text-xs text-muted-foreground">Lower CPA</div>
                </div>
                <div className="w-px h-8 bg-border/50 hidden sm:block" />
                <div className="text-center group cursor-default">
                  <div className="text-2xl md:text-3xl font-bold text-brand group-hover:scale-110 transition-transform duration-300">3x</div>
                  <div className="text-xs text-muted-foreground">ROAS Improvement</div>
                </div>
                <div className="w-px h-8 bg-border/50 hidden sm:block" />
                <div className="text-center group cursor-default">
                  <div className="text-2xl md:text-3xl font-bold text-brand group-hover:scale-110 transition-transform duration-300">24/7</div>
                  <div className="text-xs text-muted-foreground">AI Optimization</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
