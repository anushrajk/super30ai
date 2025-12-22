import { Card, CardContent } from "@/components/ui/card";
import { Check, X } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

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
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  const [leftCardRef, leftCardVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const [rightCardRef, rightCardVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section 
      ref={sectionRef}
      className="py-8 md:py-14 lg:py-20 bg-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-green-500/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-red-500/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className={`text-center max-w-3xl mx-auto mb-6 md:mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
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

        <div className="grid md:grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto">
          {/* This is for you */}
          <div
            ref={leftCardRef}
            className={`transition-all duration-700 delay-100 ${leftCardVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
          >
            <Card className="bg-background/80 backdrop-blur-sm border-green-500/30 shadow-xl shadow-green-500/5 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500 group h-full">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-green-600">This is for you if...</h3>
                </div>
                <ul className="space-y-4">
                  {forYou.map((item, index) => (
                    <li 
                      key={index} 
                      className={`flex items-start gap-3 transition-all duration-500 ${leftCardVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                      style={{ transitionDelay: `${(index + 2) * 100}ms` }}
                    >
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md shadow-green-500/20">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-slate-700 dark:text-slate-300 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Not for you */}
          <div
            ref={rightCardRef}
            className={`transition-all duration-700 delay-200 ${rightCardVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
          >
            <Card className="bg-background/80 backdrop-blur-sm border-red-500/30 shadow-xl shadow-red-500/5 hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-500 group h-full">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center shadow-lg shadow-red-500/30">
                    <X className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-red-600">Not for you if...</h3>
                </div>
                <ul className="space-y-4">
                  {notForYou.map((item, index) => (
                    <li 
                      key={index} 
                      className={`flex items-start gap-3 transition-all duration-500 ${rightCardVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
                      style={{ transitionDelay: `${(index + 3) * 100}ms` }}
                    >
                      <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md shadow-red-500/20">
                        <X className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-slate-700 dark:text-slate-300 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
