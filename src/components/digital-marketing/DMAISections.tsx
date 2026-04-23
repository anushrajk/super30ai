import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Check, X } from "lucide-react";

const features = [
  { title: "Cross-Channel Strategy", description: "SEO insights feed ad targeting, social engagement drives email nurture — all channels work as one engine." },
  { title: "Smart Automation", description: "Automated email sequences, social scheduling, and lead nurturing that runs without manual intervention." },
  { title: "Revenue Attribution", description: "Track every lead from first click to closed deal. Know exactly which channel drives your revenue." },
  { title: "Real-Time Dashboards", description: "See all channels — SEO, ads, social, email — in one live view. No more waiting for monthly PDFs." },
];

const comparisons = [
  { traditional: "Channel-by-channel execution", modern: "One connected growth system" },
  { traditional: "Vanity metrics only", modern: "Revenue and lead attribution" },
  { traditional: "Manual follow-ups", modern: "Automation across the funnel" },
  { traditional: "Monthly static PDFs", modern: "Real-time performance visibility" },
];

export const DMAISections = () => (
  <section className="py-8 md:py-14 lg:py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-6 md:mb-10">
        <span className="inline-block px-4 py-1.5 bg-brand/10 text-brand rounded-full text-xs sm:text-sm font-medium mb-4 border border-brand/20">What Makes Us Different</span>
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">Cross-Channel Integration That Actually Works</h3>
        <p className="text-base md:text-lg text-muted-foreground">
          Most digital marketing agencies in Bangalore run disconnected campaigns. We connect SEO, paid media, social, and automation into one system that compounds growth.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto items-stretch mb-8 md:mb-12">
        <Card className="border-border/50 overflow-hidden shadow-none h-full">
          <CardContent className="p-0 h-full flex flex-col">
            <div className="grid md:grid-cols-2 flex-1">
              <div className="p-4 md:p-6 bg-muted/50 border-b md:border-b-0 md:border-r border-border/50">
                <h4 className="text-base md:text-lg font-bold text-muted-foreground mb-4 text-center">Typical Agency Model</h4>
                <div className="space-y-3">
                  {comparisons.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-2 rounded-lg">
                      <div className="w-7 h-7 bg-destructive/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <X className="w-3.5 h-3.5 text-destructive" />
                      </div>
                      <span className="text-sm text-muted-foreground">{item.traditional}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 md:p-6 bg-brand/5">
                <h4 className="text-base md:text-lg font-bold text-brand mb-4 text-center">The Super 30 System</h4>
                <div className="space-y-3">
                  {comparisons.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-2 rounded-lg">
                      <div className="w-7 h-7 bg-brand rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5 text-primary-foreground" />
                      </div>
                      <span className="text-sm font-medium text-foreground">{item.modern}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50 shadow-none h-full bg-foreground text-primary-foreground">
          <CardContent className="p-5 md:p-8 h-full flex flex-col justify-center">
            <h4 className="text-lg md:text-2xl font-bold mb-3">Built Around How Buyers Actually Move</h4>
            <p className="text-primary-foreground/80 mb-5 text-sm md:text-base leading-relaxed">
              SEO keyword data feeds paid media. Social engagement shapes content angles. Website behaviour triggers nurture flows. Every channel informs the next move instead of operating in isolation.
            </p>
            <ul className="space-y-3 mb-6 text-sm md:text-base">
              {["SEO insights sharpen Google Ads targeting", "Social trends influence content and campaign creatives", "Behavioural signals trigger personalized email journeys"].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand mt-2 flex-shrink-0" />
                  <span className="text-primary-foreground/85">{item}</span>
                </li>
              ))}
            </ul>
            <Button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="rounded-full w-fit bg-background text-foreground hover:bg-background/90">
              See Our Strategy in Action <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="text-center mb-6">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-2">How We Drive Results for Bangalore Businesses</h3>
        <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">Data-led execution across every channel, presented in the same premium visual language as our AI SEO experience.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
        {features.map((feature, i) => (
          <Card key={i} className="border-border/50 bg-background shadow-none">
            <CardContent className="p-4 md:p-5 text-center">
              <div className="w-12 h-12 mx-auto rounded-2xl bg-brand/10 text-brand flex items-center justify-center mb-4">
                <span className="text-sm font-semibold">0{i + 1}</span>
              </div>
              <h4 className="font-bold text-foreground mb-2 text-sm sm:text-base">{feature.title}</h4>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);
