import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, TrendingUp } from "lucide-react";

export const TestimonialSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Real results from real businesses
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-orange-50 to-orange-100/50 border-orange-200">
            <CardContent className="p-8 md:p-12">
              <Quote className="w-12 h-12 text-orange-500 mb-6" />
              
              <blockquote className="text-xl md:text-2xl text-foreground mb-8 leading-relaxed">
                "DA360 helped us go from invisible in AI search to being recommended by ChatGPT for our core services. Our qualified leads increased by 340%."
              </blockquote>

              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                    SC
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Sarah Chen</div>
                    <div className="text-muted-foreground">CEO, TechFlow SaaS</div>
                  </div>
                </div>

                <div className="md:ml-auto flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-orange-500 text-orange-500" />
                  ))}
                </div>
              </div>

              {/* Results Badge */}
              <div className="mt-8 pt-8 border-t border-orange-200 flex justify-center">
                <div className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-full">
                  <TrendingUp className="w-5 h-5" />
                  <span className="font-semibold">340% more leads</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
