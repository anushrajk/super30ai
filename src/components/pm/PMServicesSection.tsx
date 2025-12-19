import { Card, CardContent } from "@/components/ui/card";
import { Search, Facebook, Linkedin, Youtube, RefreshCw, BarChart3, Palette, Target } from "lucide-react";

const services = [
  { icon: Search, title: "Google Ads", description: "Search, Display, Shopping & YouTube campaigns" },
  { icon: Facebook, title: "Meta Ads", description: "Facebook & Instagram advertising" },
  { icon: Linkedin, title: "LinkedIn Ads", description: "B2B lead generation campaigns" },
  { icon: Youtube, title: "YouTube Ads", description: "Video advertising for brand awareness" },
  { icon: RefreshCw, title: "Remarketing", description: "Re-engage visitors who didn't convert" },
  { icon: BarChart3, title: "Analytics & Attribution", description: "Full-funnel tracking & reporting" },
  { icon: Palette, title: "Creative Optimization", description: "A/B testing ads for max performance" },
  { icon: Target, title: "Landing Page CRO", description: "Optimize pages for conversions" },
];

export const PMServicesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Performance Marketing Services</h2>
          <p className="text-lg text-muted-foreground">Full-funnel paid advertising across all major platforms</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="bg-background border-border/50 hover:border-orange-500/50 hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center mb-4 group-hover:from-orange-500 group-hover:to-orange-600 transition-all">
                  <service.icon className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
