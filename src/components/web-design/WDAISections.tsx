import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Bot, BrainCircuit, LineChart, Layout } from "lucide-react";

const techFeatures = [
  { icon: Layout, title: "Wireframe to Pixel-Perfect", description: "From sitemap and wireframes to high-fidelity Figma designs — nothing is left to chance" },
  { icon: Sparkles, title: "AI-Assisted Development", description: "AI tools accelerate development while maintaining hand-crafted quality and attention to detail" },
  { icon: BrainCircuit, title: "CRO Built-In", description: "Heatmap analysis, scroll-depth tracking, and conversion optimization from day one" },
  { icon: LineChart, title: "Analytics & Tracking", description: "Google Analytics 4, Tag Manager, and goal tracking configured — measure what matters" },
];

export const WDAISections = () => {
  const scrollToForm = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <section className="py-6 md:py-10 lg:py-16 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      
      <div className="container mx-auto px-3 md:px-4 relative">
        {/* Featured: Full-Stack Web Development */}
        <div className="bg-[#0a0a0a] rounded-2xl p-6 md:p-10 mb-6 md:mb-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          <div className="absolute top-10 left-10 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-brand/10 rounded-full blur-3xl" />
          
          <div className="grid lg:grid-cols-2 gap-4 md:gap-8 items-center relative">
            <div>
              <span className="inline-block px-4 py-1.5 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-medium mb-3 border border-emerald-500/30">Our Approach</span>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3">End-to-End Web Development — Strategy to Launch</h3>
              <p className="text-gray-300 mb-5 leading-relaxed text-sm md:text-base">
                We don't just build websites — we build digital sales machines. Every project starts with understanding your business goals, audience, and competitive landscape, then translating that into a website that works as hard as your best salesperson.
              </p>
              <ul className="space-y-2.5 mb-5">
                {["Discovery → UX research → Wireframes → Design → Development → QA → Launch", "Every page optimized for both humans and search engines", "Post-launch support, analytics setup, and conversion tracking"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300 text-sm md:text-base group">
                    <div className="w-2 h-2 bg-brand-gradient rounded-full group-hover:scale-150 transition-transform" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button onClick={scrollToForm} className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg hover:scale-105 transition-all duration-300">
                Start Your Web Project<ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 md:p-8 backdrop-blur-sm">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "200+", label: "Websites Built" },
                  { value: "90+", label: "PageSpeed Score" },
                  { value: "3-4wk", label: "Avg. Delivery" },
                  { value: "4.9/5", label: "Client Rating" },
                ].map((stat, i) => (
                  <div key={i} className="text-center p-4 bg-white/5 rounded-xl border border-white/10 hover:border-emerald-500/30 transition-colors">
                    <div className="text-2xl font-bold text-brand">{stat.value}</div>
                    <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tech Process Infographic */}
        <div className="bento-card p-4 md:p-8 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-10 left-10 w-32 h-32 bg-brand/5 rounded-full blur-2xl" />
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-primary/5 rounded-full blur-2xl" />
          </div>
          
          <div className="relative">
            <div className="text-center mb-8">
              <span className="badge-brand mb-3">Our Tech Edge</span>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-foreground mb-3">How We Build Websites That Perform</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
                A methodical, AI-assisted process that combines design thinking with engineering precision.
              </p>
            </div>
            
            <div className="relative max-w-4xl mx-auto">
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand/20 to-transparent" />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 relative z-10">
                {techFeatures.map((feature, index) => (
                  <div key={index} className="group relative">
                    <div className="absolute -top-2 -left-2 w-6 h-6 bg-brand-gradient rounded-full flex items-center justify-center text-white text-xs font-bold z-20 group-hover:scale-125 transition-transform duration-300">{index + 1}</div>
                    <Card className="bento-card transition-all duration-500 h-full overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-brand/0 via-brand/0 to-brand/0 group-hover:from-brand/5 group-hover:via-brand/10 group-hover:to-brand/5 transition-all duration-500" />
                      <CardContent className="p-5 text-center relative">
                        <div className="relative mx-auto mb-4 w-16 h-16">
                          <div className="relative w-16 h-16 bg-brand/10 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 shadow-lg">
                            <feature.icon className="w-7 h-7 text-brand group-hover:text-white transition-all duration-300" />
                          </div>
                        </div>
                        <h4 className="font-bold text-foreground mb-2 text-sm md:text-base group-hover:text-brand transition-colors duration-300">{feature.title}</h4>
                        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </CardContent>
                    </Card>
                    {index < 3 && (
                      <div className="hidden lg:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-20">
                        <ArrowRight className="w-4 h-4 text-brand/50 group-hover:text-brand group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
