import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Check, X } from "lucide-react";

const forYou = [
  "You spend ₹1L+/month on ads",
  "You want measurable ROI",
  "You need multi-platform expertise",
  "You value data-driven decisions",
];

const notForYou = [
  "You're not ready to invest in ads",
  "You expect overnight results",
  "You want to micromanage campaigns",
  "You're not tracking conversions",
];

export const PMRelevanceSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section ref={ref} className={`py-24 bg-muted/30 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Is This Right For You?</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-green-700 dark:text-green-400 mb-6">This is for you if:</h3>
            <ul className="space-y-4">
              {forYou.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                  <Check className="w-5 h-5 text-green-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-red-700 dark:text-red-400 mb-6">This is NOT for you if:</h3>
            <ul className="space-y-4">
              {notForYou.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                  <X className="w-5 h-5 text-red-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
