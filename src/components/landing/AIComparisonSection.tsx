import { Card, CardContent } from "@/components/ui/card";
import { Check, X, ArrowRight } from "lucide-react";

const comparisons = [
  { traditional: "Keyword stuffing", ai: "Semantic understanding" },
  { traditional: "Link building spam", ai: "Authority signals & entities" },
  { traditional: "Thin content pages", ai: "Comprehensive topic clusters" },
  { traditional: "Slow ranking improvements", ai: "Predictive optimization" },
  { traditional: "Reactive to algorithm updates", ai: "Proactive AI adaptation" },
  { traditional: "Generic strategies", ai: "Personalized AI recommendations" }
];

export const AIComparisonSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            What is AI SEO?
          </h2>
          <p className="text-lg text-slate-600">
            The evolution from traditional SEO to AI-first optimization
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden border-0 shadow-xl">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2">
                {/* Traditional SEO */}
                <div className="bg-slate-100 p-8">
                  <h3 className="text-xl font-bold text-slate-500 mb-6 flex items-center gap-2">
                    <X className="w-6 h-6 text-red-500" />
                    Traditional SEO
                  </h3>
                  <ul className="space-y-4">
                    {comparisons.map((item, index) => (
                      <li key={index} className="flex items-center gap-3 text-slate-600">
                        <X className="w-4 h-4 text-red-400 flex-shrink-0" />
                        <span className="line-through">{item.traditional}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* AI SEO */}
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-8">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <Check className="w-6 h-6 text-white" />
                    DA360 AI SEO
                  </h3>
                  <ul className="space-y-4">
                    {comparisons.map((item, index) => (
                      <li key={index} className="flex items-center gap-3 text-white">
                        <Check className="w-4 h-4 text-white flex-shrink-0" />
                        <span>{item.ai}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Journey Diagram */}
          <div className="mt-16">
            <div className="flex flex-wrap justify-center items-center gap-4 text-sm">
              <div className="bg-slate-100 px-6 py-3 rounded-full font-medium text-slate-700">
                User Search
              </div>
              <ArrowRight className="w-5 h-5 text-orange-500" />
              <div className="bg-slate-100 px-6 py-3 rounded-full font-medium text-slate-700">
                AI Processing
              </div>
              <ArrowRight className="w-5 h-5 text-orange-500" />
              <div className="bg-orange-500 px-6 py-3 rounded-full font-medium text-white">
                Your Brand
              </div>
              <ArrowRight className="w-5 h-5 text-orange-500" />
              <div className="bg-green-500 px-6 py-3 rounded-full font-medium text-white">
                Qualified Leads
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
