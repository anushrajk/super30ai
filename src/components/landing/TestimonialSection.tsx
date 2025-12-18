import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, TrendingUp } from "lucide-react";

export const TestimonialSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 via-transparent to-orange-50/30" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Real results from real businesses
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-orange-50 via-orange-100/50 to-orange-50 border-orange-200/50 shadow-2xl shadow-orange-500/10 hover:shadow-orange-500/20 transition-all duration-500 overflow-hidden relative group">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-400/10 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-orange-400/10 to-transparent rounded-full blur-3xl" />
            
            <CardContent className="p-8 md:p-12 relative">
              <Quote className="w-14 h-14 text-orange-500 mb-6 opacity-50" />
              
              <blockquote className="text-xl md:text-2xl text-foreground mb-8 leading-relaxed font-medium">
                "DA360 helped us go from invisible in AI search to being recommended by ChatGPT for our core services. Our qualified leads increased by 340%."
              </blockquote>

              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-orange-500/30 group-hover:scale-110 transition-transform duration-300">
                    SC
                  </div>
                  <div>
                    <div className="font-bold text-foreground text-lg">Sarah Chen</div>
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
              <div className="mt-8 pt-8 border-t border-orange-200/50 flex justify-center">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-2xl shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 transition-all duration-300">
                  <TrendingUp className="w-6 h-6" />
                  <span className="font-bold text-lg">340% more leads</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
