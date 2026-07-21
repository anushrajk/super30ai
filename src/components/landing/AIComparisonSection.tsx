import { Card, CardContent } from "@/components/ui/card";
import { X, Check, Search, Bot, Building2, Users } from "lucide-react";

const comparisons = [
  { traditional: "Only keyword focused targeting", ai: "AI and intent driven SEO" },
  { traditional: "Static performance reporting", ai: "Predictive AI search reporting" },
  { traditional: "Traffic driven strategy", ai: "Revenue & lead focused optimization" },
  { traditional: "Google focused optimization", ai: "Google AI and LLMs visibility" },
];

const journeySteps = [
  { icon: Search, label: "User Search", color: "bg-muted" },
  { icon: Bot, label: "AI Analysis", color: "bg-orange-100" },
  { icon: Building2, label: "Your Brand", color: "bg-gradient-to-br from-orange-500 to-orange-600", textColor: "text-white" },
  { icon: Users, label: "Qualified Leads", color: "bg-green-100" },
];

export const AIComparisonSection = () => {
  return (
    <section className="py-8 md:py-14 lg:py-20 bg-background relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-50/30 to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-5 md:mb-10">
          <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
            The Difference
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Make Your Site AI Ready With Our <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">AI SEO Agency In Bangalore</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Technical errors on your website limit visibility before it even starts ranking. As a leading <span className="text-foreground font-semibold">AI SEO company in Bangalore</span>, we fix your website structure, optimize search performance, and improve entity signals so Google and AI search platforms can better understand, trust, and rank your business.
          </p>
        </div>

        {/* 50/50 Layout: Comparison Table + AI Search Journey */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto items-stretch">
          {/* Left: Comparison Table */}
          <Card className="border-border/50 overflow-hidden shadow-2xl hover:shadow-xl transition-all duration-500 h-full">
            <CardContent className="p-0 h-full flex flex-col">
              <div className="grid md:grid-cols-2 flex-1">
                {/* Traditional SEO Column */}
                <div className="p-4 md:p-6 bg-muted/50 backdrop-blur-sm border-b md:border-b-0 md:border-r border-border/50 flex flex-col">
                  <h3 className="text-lg font-bold text-muted-foreground mb-4 text-center">
                    Traditional SEO
                  </h3>
                  <div className="space-y-3 flex-1">
                    {comparisons.map((item, index) => (
                      <div 
                        key={index} 
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-red-50/50 transition-colors duration-300"
                      >
                        <div className="w-7 h-7 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <X className="w-3.5 h-3.5 text-red-500" />
                        </div>
                        <span className="text-muted-foreground line-through text-sm">{item.traditional}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* AI SEO Column */}
                <div className="p-4 md:p-6 bg-gradient-to-br from-orange-50 to-orange-100/50 flex flex-col">
                  <h3 className="text-lg font-bold text-orange-600 mb-4 text-center">
                    Modern AI SEO Strategy
                  </h3>
                  <div className="space-y-3 flex-1">
                    {comparisons.map((item, index) => (
                      <div 
                        key={index} 
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-orange-200/50 transition-colors duration-300 group"
                      >
                        <div className="w-7 h-7 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <Check className="w-3.5 h-3.5 text-white" />
                        </div>
                        <span className="text-foreground font-medium text-sm">{item.ai}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Right: AI Search Journey */}
          <Card className="border-border/50 shadow-2xl hover:shadow-xl transition-all duration-500 h-full">
            <CardContent className="p-4 md:p-6 h-full flex flex-col justify-center">
              <h3 className="text-lg font-bold text-foreground mb-6 text-center">
                The AI SEO Search Journey
              </h3>
              <div className="flex flex-wrap items-center justify-center gap-3 flex-1">
                {journeySteps.map((step, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex flex-col items-center gap-2 group">
                      <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300`}>
                        <step.icon className={`w-7 h-7 ${step.textColor || 'text-foreground'}`} />
                      </div>
                      <span className="text-xs text-muted-foreground font-medium">{step.label}</span>
                    </div>
                    {index < journeySteps.length - 1 && (
                      <div className="hidden sm:flex items-center mb-6">
                        <div className="w-8 h-1 bg-gradient-to-r from-orange-300 to-orange-500 rounded-full" />
                        <div className="w-0 h-0 border-t-[3px] border-b-[3px] border-l-[6px] border-transparent border-l-orange-500" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <p className="text-center text-muted-foreground mt-6 text-sm bg-gradient-to-r from-orange-50 to-orange-100/50 p-4 rounded-xl border border-orange-200/50">
                AI SEO can make your business <span className="font-semibold text-orange-600">recognizable</span>, <span className="font-semibold text-orange-600">trusted</span>, <span className="font-semibold text-orange-600">recommended</span>, and <span className="font-semibold text-orange-600">referenced</span> across the complete search journey.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
