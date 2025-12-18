import { Card, CardContent } from "@/components/ui/card";
import { X, Check, Search, Bot, Building2, Users } from "lucide-react";

const comparisons = [
  { traditional: "Keyword chasing", ai: "Entity & intent ownership" },
  { traditional: "Monthly reports", ai: "Predictive dashboards" },
  { traditional: "Traffic focus", ai: "Revenue & lead focus" },
  { traditional: "Google only", ai: "Google + AI + LLMs" },
];

const journeySteps = [
  { icon: Search, label: "User Search", color: "bg-muted" },
  { icon: Bot, label: "AI Processing", color: "bg-orange-100" },
  { icon: Building2, label: "Your Brand", color: "bg-orange-500", textColor: "text-white" },
  { icon: Users, label: "Qualified Leads", color: "bg-green-100" },
];

export const AIComparisonSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What is AI SEO?
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            Traditional SEO optimizes for search engines. AI SEO optimizes for how AI systems understand, recommend, and cite your brand.
          </p>
          <p className="text-muted-foreground">
            AI-powered search is fundamentally different. Instead of matching keywords, AI systems understand context, entities, and authority signals to recommend solutions.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto mb-12 border-border overflow-hidden">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2">
              {/* Traditional SEO Column */}
              <div className="p-8 bg-muted/30 border-b md:border-b-0 md:border-r border-border">
                <h3 className="text-lg font-semibold text-muted-foreground mb-6 text-center">
                  Traditional SEO
                </h3>
                <div className="space-y-4">
                  {comparisons.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <X className="w-4 h-4 text-red-500" />
                      </div>
                      <span className="text-muted-foreground line-through">{item.traditional}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI SEO Column */}
              <div className="p-8 bg-orange-50">
                <h3 className="text-lg font-semibold text-orange-500 mb-6 text-center">
                  DA360 AI SEO
                </h3>
                <div className="space-y-4">
                  {comparisons.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-foreground font-medium">{item.ai}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Journey Flow */}
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-muted-foreground mb-8">
            The AI Search Journey
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {journeySteps.map((step, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="flex flex-col items-center gap-2">
                  <div className={`w-16 h-16 ${step.color} rounded-xl flex items-center justify-center`}>
                    <step.icon className={`w-6 h-6 ${step.textColor || 'text-foreground'}`} />
                  </div>
                  <span className="text-sm text-muted-foreground">{step.label}</span>
                </div>
                {index < journeySteps.length - 1 && (
                  <div className="hidden sm:block w-8 h-0.5 bg-orange-300 mb-6" />
                )}
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-8 max-w-2xl mx-auto">
            AI SEO ensures your brand is recognized, recommended, and cited throughout this journey.
          </p>
        </div>
      </div>
    </section>
  );
};
