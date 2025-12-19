import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { AlertTriangle, TrendingDown, Users, DollarSign } from "lucide-react";

const problems = [
  { icon: DollarSign, title: "High CPC, Low Returns", description: "Your cost-per-click keeps rising but conversions stay flat" },
  { icon: Users, title: "Wrong Audiences", description: "Ads reaching people who will never convert" },
  { icon: TrendingDown, title: "No Attribution", description: "Can't track which channels actually drive revenue" },
  { icon: AlertTriangle, title: "Wasted Budget", description: "50%+ of ad spend goes to non-converting clicks" },
];

export const PMProblemSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section ref={ref} className={`py-24 bg-slate-900 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-red-500/20 text-red-400 rounded-full text-sm font-medium mb-4">The Problem</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Your Ads Burn Money Without Results</h2>
          <p className="text-lg text-slate-400">Most businesses waste 40-60% of their ad budget on ineffective campaigns</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 hover:border-red-500/50 transition-all duration-300 group">
              <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-500/30 transition-colors">
                <problem.icon className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{problem.title}</h3>
              <p className="text-slate-400 text-sm">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
