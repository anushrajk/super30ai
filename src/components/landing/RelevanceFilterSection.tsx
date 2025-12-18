import { Card, CardContent } from "@/components/ui/card";
import { Check, X } from "lucide-react";

const forYou = [
  "Spending ₹1L+/mo but can't predict ROI",
  "Revenue from organic is important",
  "You want visibility inside ChatGPT & Google AI",
  "You want one agency accountable for outcomes",
  "You're ready to invest in long-term growth",
  "You value data-driven decision making",
];

const notForYou = [
  "Bloggers looking for quick traffic",
  "₹10k/month SEO budget expectations",
  "Link sellers and black-hat practitioners",
  "Looking for overnight results",
  "Not ready to commit to a strategy",
];

export const RelevanceFilterSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-green-500/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-red-500/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
            Instant Relevance Filter
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Is This Right For You?
          </h2>
          <p className="text-lg text-muted-foreground">
            We're selective about who we work with — and honest about who we can help
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* This is for you */}
          <Card className="bg-background/80 backdrop-blur-sm border-green-500/30 shadow-xl shadow-green-500/5 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500 group">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-green-600">This is for you if...</h3>
              </div>
              <ul className="space-y-4">
                {forYou.map((item, index) => (
                  <li 
                    key={index} 
                    className="flex items-start gap-3 opacity-0 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                  >
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Not for you */}
          <Card className="bg-background/80 backdrop-blur-sm border-red-500/30 shadow-xl shadow-red-500/5 hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-500 group">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                  <X className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-red-600">Not for you if...</h3>
              </div>
              <ul className="space-y-4">
                {notForYou.map((item, index) => (
                  <li 
                    key={index} 
                    className="flex items-start gap-3 opacity-0 animate-fade-in"
                    style={{ animationDelay: `${index * 100 + 200}ms`, animationFillMode: 'forwards' }}
                  >
                    <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
