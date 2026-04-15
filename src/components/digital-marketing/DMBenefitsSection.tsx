import { ShieldCheck, Unlock, Users, UserCheck, Brain, TrendingUp } from "lucide-react";
import dmExpert from "@/assets/dm-expert-woman.png";

export const DMBenefitsSection = () => (
  <section className="py-24 md:py-32 bg-background relative overflow-hidden">
    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 md:mb-20">
          <span className="inline-block text-brand text-xs font-bold uppercase tracking-[0.25em] mb-5 px-4 py-1.5 rounded-full border border-brand/20 bg-brand/5">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.08] mb-5">
            Why 200+ brands choose
            <span className="text-brand"> us</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
            Every advantage we offer is built to make your marketing accountable, transparent, and profitable.
          </p>
        </div>

        {/* Bento Grid - matching reference layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[160px] md:auto-rows-[180px]">

          {/* Card 1: Transparent Dashboard - top-left tall */}
          <div className="row-span-2 rounded-3xl bg-brand/[0.07] border border-brand/15 p-6 flex flex-col justify-between">
            <div>
              <div className="w-16 h-16 mx-auto mb-3">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(var(--border))" strokeWidth="8" />
                  <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(var(--brand))" strokeWidth="8"
                    strokeDasharray="200" strokeDashoffset="50" strokeLinecap="round"
                    className="transition-all duration-1000" />
                  <text x="50" y="54" textAnchor="middle" className="text-lg font-bold fill-foreground" fontSize="18">100%</text>
                </svg>
              </div>
              <h3 className="text-base md:text-lg font-bold text-foreground text-center leading-tight">Real-time Dashboard</h3>
            </div>
            <div className="text-center mt-2">
              <span className="text-3xl md:text-4xl font-black text-foreground">24/7</span>
              <p className="text-xs text-muted-foreground mt-1">Live campaign access</p>
            </div>
          </div>

          {/* Card 2: Project Views style - top */}
          <div className="rounded-3xl bg-card border border-border/60 p-5 flex flex-col justify-center">
            <span className="text-3xl md:text-4xl font-black text-foreground">3.8x</span>
            <p className="text-xs text-muted-foreground mt-1">Average ROAS across all campaigns</p>
            <span className="text-brand text-xs font-semibold mt-2">↑ Proven results</span>
          </div>

          {/* Card 3: New Users style - top */}
          <div className="rounded-3xl bg-brand/[0.07] border border-brand/15 p-5 flex flex-col justify-center items-center text-center">
            <p className="text-xs text-muted-foreground mb-1">Brands Served</p>
            <span className="text-4xl md:text-5xl font-black text-foreground">200+</span>
            <span className="text-brand text-xs font-semibold mt-1">+40% YoY</span>
          </div>

          {/* Card 4: Team - top-right tall */}
          <div className="row-span-2 rounded-3xl bg-card border border-border/60 p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-base md:text-lg font-bold text-foreground leading-tight">Team of in-house experts & strategists</h3>
            </div>
            <div className="flex items-center gap-1 mt-3">
              {[Brain, UserCheck, Users, ShieldCheck].map((Icon, i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-muted/60 border border-border/40 flex items-center justify-center -ml-2 first:ml-0">
                  <Icon className="w-4 h-4 text-muted-foreground" />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full bg-brand/10 border border-brand/20 flex items-center justify-center -ml-2 text-xs font-bold text-brand">
                +30
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-muted-foreground">Daily New clients</p>
              <span className="text-3xl md:text-4xl font-black text-foreground">54</span>
              <span className="text-brand text-xs font-semibold ml-2">+40%</span>
            </div>
          </div>

          {/* Card 5: Smart Agency tagline - bottom-left */}
          <div className="rounded-3xl bg-foreground p-5 flex flex-col justify-end text-background col-span-1">
            <h3 className="text-lg md:text-xl font-bold leading-tight">
              Smart Digital Agency For Your Business
            </h3>
          </div>

          {/* Card 6: Center - Human image spanning 2 cols */}
          <div className="col-span-2 row-span-1 rounded-3xl bg-brand/[0.06] border border-brand/10 relative overflow-hidden flex items-end justify-center">
            <img
              src={dmExpert}
              alt="Digital marketing expert"
              loading="lazy"
              width={768}
              height={1024}
              className="h-full max-h-[250px] md:max-h-[280px] object-contain object-bottom relative z-10"
            />
            {/* Floating stat badges */}
            <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm rounded-xl px-3 py-2 border border-border/50 shadow-sm z-20">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-3.5 h-3.5 text-brand" />
                <div>
                  <p className="text-xs font-bold text-foreground">19.46%</p>
                  <p className="text-[10px] text-muted-foreground">Engagement Rate</p>
                </div>
              </div>
            </div>
            <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-xl px-3 py-2 border border-border/50 shadow-sm z-20">
              <p className="text-sm font-bold text-foreground">26,807</p>
              <p className="text-[10px] text-muted-foreground">Leads Generated</p>
            </div>
            <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm rounded-xl px-3 py-2 border border-border/50 shadow-sm z-20">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <p className="text-[10px] text-muted-foreground">Campaigns Live</p>
              </div>
            </div>
          </div>

          {/* Card 7: Bottom-right - No lock-in */}
          <div className="rounded-3xl bg-card border border-border/60 p-5 flex flex-col justify-between">
            <Unlock className="w-8 h-8 text-foreground mb-2" />
            <div>
              <h3 className="text-base font-bold text-foreground leading-tight">Zero Lock-in Contracts</h3>
              <p className="text-xs text-muted-foreground mt-1">Monthly retainers, cancel anytime</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
