import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export const TestimonialSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-slate-600">
            Real results from businesses that embraced AI SEO early
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
            <CardContent className="p-8 md:p-12">
              <Quote className="w-12 h-12 text-orange-500 mb-6" />
              
              <blockquote className="text-xl md:text-2xl text-slate-800 mb-8 leading-relaxed">
                "Within 3 months of implementing DA360's AI SEO strategy, our organic traffic increased by 280% and we started appearing in ChatGPT recommendations for our target keywords. The ROI has been incredible."
              </blockquote>

              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                    RK
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Rahul Kumar</div>
                    <div className="text-slate-600">CEO, TechStart India</div>
                  </div>
                </div>

                <div className="md:ml-auto flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-orange-500 text-orange-500" />
                  ))}
                </div>
              </div>

              {/* Results */}
              <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-orange-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500">280%</div>
                  <div className="text-sm text-slate-600">Traffic Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500">45+</div>
                  <div className="text-sm text-slate-600">AI Mentions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500">320%</div>
                  <div className="text-sm text-slate-600">Lead Growth</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
