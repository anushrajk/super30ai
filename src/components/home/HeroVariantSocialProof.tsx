import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, TrendingUp, Quote, Play } from "lucide-react";

/**
 * Hero Variant: Social Proof First
 * 
 * Research basis (Prismic 2025 & Omniconvert 2025):
 * - Trust badges and testimonials near CTA provide reassurance
 * - "Users form opinions in less than 50 milliseconds" (Google study)
 * - Leading with proof reduces skepticism and builds credibility immediately
 * - Video testimonials increase engagement significantly
 */

const clientResults = [
  { company: "TechFlow SaaS", result: "+340%", metric: "Organic Leads" },
  { company: "DataSync", result: "5.2x", metric: "ROAS" },
  { company: "CloudNine", result: "+₹2.1Cr", metric: "Revenue" },
];

const featuredTestimonial = {
  quote: "The Super 30 took us from invisible in AI search to being recommended by ChatGPT. Our qualified leads increased by 340%.",
  author: "Sarah Chen",
  role: "CEO, TechFlow SaaS",
  rating: 5,
};

export const HeroVariantSocialProof = () => {
  return (
    <section className="relative py-20 lg:py-28 bg-background overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 via-background to-emerald-50/30" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
      
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-green-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        {/* Badge */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-green-100 border border-green-200 px-4 py-2 rounded-full">
            <TrendingUp className="w-4 h-4 text-green-600" />
            <span className="text-green-700 text-sm font-medium">Hero Variant: Social Proof First</span>
          </div>
        </div>

        {/* Client Results Banner - FIRST (Social Proof Leading) */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10">
          {clientResults.map((client, index) => (
            <div 
              key={index}
              className="bg-background border border-border/50 shadow-lg rounded-xl px-6 py-4 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
                {client.result}
              </div>
              <div className="text-sm text-muted-foreground">{client.metric}</div>
              <div className="text-xs text-muted-foreground/70 mt-1">{client.company}</div>
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Featured Testimonial - Above Headline */}
          <div className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-8 mb-10 shadow-xl max-w-3xl mx-auto">
            <div className="flex items-start gap-4">
              <Quote className="w-10 h-10 text-green-500 flex-shrink-0 opacity-50" />
              <div>
                <p className="text-lg md:text-xl text-foreground italic mb-4">
                  "{featuredTestimonial.quote}"
                </p>
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
                      SC
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{featuredTestimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{featuredTestimonial.role}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(featuredTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Simple Value Proposition */}
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Join{" "}
              <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
                300+ Businesses
              </span>
              {" "}Growing with AI Marketing
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We've generated ₹50Cr+ in revenue for our clients through AI SEO and Performance Marketing. You could be next.
            </p>
          </div>

          {/* CTA with Video Option */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Link to="/ai-seo">
              <Button size="lg" className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-xl shadow-green-500/30 hover:shadow-green-500/50 text-lg px-10 py-6 h-auto">
                Start Your Growth Story
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-2 text-lg px-8 py-6 h-auto group">
              <Play className="w-5 h-5 mr-2 group-hover:text-green-500 transition-colors" />
              Watch Success Stories
            </Button>
          </div>

          {/* Rating & Trust */}
          <div className="text-center">
            <div className="inline-flex flex-col items-center gap-2 bg-muted/50 rounded-xl px-8 py-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-2 font-bold text-foreground">4.9/5</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Based on 150+ client reviews • 95% client retention rate
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
