import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Bot, BrainCircuit, LineChart, Layout } from "lucide-react";


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
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3">Complete Website Development From Strategy to Launch</h3>
              <p className="text-gray-300 mb-5 leading-relaxed text-sm md:text-base">
                We develop websites with a clear focus on business objectives, audience needs, and market positioning. Every project is strategically designed to provide performance, engagement, and measurable growth.
              </p>
              <ul className="space-y-2.5 mb-5">
                {["Discovery → UI/UX Research → Wireframes → Design → Development → Testing → Launch", "Every page is optimized for user experience and search visibility", "Ongoing support, analytics configuration, and conversion tracking"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300 text-sm md:text-base group">
                    <div className="w-2 h-2 bg-brand-gradient rounded-full group-hover:scale-150 transition-transform" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button onClick={scrollToForm} className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg hover:scale-105 transition-all duration-300">
                Start Your Website Project<ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 md:p-8 backdrop-blur-sm">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "200+", label: "Websites Created" },
                  { value: "90+", label: "PageSpeed Score" },
                  { value: "3 to 4 Weeks", label: "Average Delivery" },
                  { value: "4.9/5", label: "Client Satisfaction Rating" },
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

      </div>
    </section>
  );
};
