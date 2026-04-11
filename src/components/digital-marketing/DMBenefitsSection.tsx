import { Eye, Unlock, UserCheck, Award, Headphones, Brain, TrendingUp } from "lucide-react";

export const DMBenefitsSection = () => (
  <section className="py-12 md:py-20 lg:py-28 bg-card">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
        <span className="inline-block px-3 py-1 bg-brand/10 text-brand rounded-full text-xs sm:text-sm font-medium mb-3 border border-brand/20">
          Why Choose Us
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 leading-tight">
          Why 200+ Brands Choose Our <span className="text-brand">Digital Marketing Company in Bangalore</span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
          In a city with hundreds of agencies, here is what separates a good agency from the right agency for your business.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] sm:auto-rows-[180px] gap-3 sm:gap-4">

        {/* Card 1 — brand, 2 cols */}
        <div className="col-span-2 relative rounded-2xl sm:rounded-3xl overflow-hidden bg-brand text-white p-5 sm:p-7 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center">
              <Eye className="w-5 h-5" />
            </div>
            <div className="w-16 h-16 rounded-full bg-white/10 -mr-2 -mt-2" />
          </div>
          <div>
            <div className="text-4xl sm:text-5xl font-black leading-none mb-1">24/7</div>
            <div className="text-sm font-medium text-white/80">live dashboard access</div>
          </div>
        </div>

        {/* Card 2 — dark */}
        <div className="col-span-1 rounded-2xl sm:rounded-3xl overflow-hidden bg-foreground text-background p-5 sm:p-6 flex flex-col justify-between">
          <div className="w-9 h-9 rounded-xl bg-background/10 flex items-center justify-center">
            <Unlock className="w-4 h-4" />
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black leading-none mb-0.5">0</div>
            <div className="text-xs sm:text-sm font-medium text-background/60">lock-in contracts</div>
          </div>
        </div>

        {/* Card 3 — light */}
        <div className="col-span-1 rounded-2xl sm:rounded-3xl overflow-hidden bg-brand/10 text-foreground p-5 sm:p-6 flex flex-col justify-between">
          <div className="w-9 h-9 rounded-xl bg-brand/15 flex items-center justify-center">
            <UserCheck className="w-4 h-4 text-brand" />
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black leading-none mb-0.5">100%</div>
            <div className="text-xs sm:text-sm font-medium text-muted-foreground">in-house execution</div>
          </div>
        </div>

        {/* Card 4 — light */}
        <div className="col-span-1 rounded-2xl sm:rounded-3xl overflow-hidden bg-brand/10 text-foreground p-5 sm:p-6 flex flex-col justify-between">
          <div className="w-9 h-9 rounded-xl bg-brand/15 flex items-center justify-center">
            <Award className="w-4 h-4 text-brand" />
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black leading-none mb-0.5">2x</div>
            <div className="text-xs sm:text-sm font-medium text-muted-foreground">certified partner</div>
          </div>
        </div>

        {/* Card 5 — dark */}
        <div className="col-span-1 rounded-2xl sm:rounded-3xl overflow-hidden bg-foreground text-background p-5 sm:p-6 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div className="w-9 h-9 rounded-xl bg-background/10 flex items-center justify-center">
              <Headphones className="w-4 h-4" />
            </div>
            <div className="w-10 h-10 rounded-full bg-brand/20 -mr-1 -mt-1" />
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black leading-none mb-0.5">1</div>
            <div className="text-xs sm:text-sm font-medium text-background/60">dedicated manager</div>
          </div>
        </div>

        {/* Card 6 — brand, 2 cols */}
        <div className="col-span-2 relative rounded-2xl sm:rounded-3xl overflow-hidden bg-brand text-white p-5 sm:p-7 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center">
              <Brain className="w-5 h-5" />
            </div>
            <div className="w-14 h-14 rounded-full bg-white/10 -mr-2 -mt-1" />
          </div>
          <div>
            <div className="text-4xl sm:text-5xl font-black leading-none mb-1">AI+</div>
            <div className="text-sm font-medium text-white/80">human strategy combined</div>
          </div>
        </div>

        {/* Card 7 — NEW dark accent */}
        <div className="col-span-2 md:col-span-4 rounded-2xl sm:rounded-3xl overflow-hidden bg-foreground text-background p-5 sm:p-7 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-brand/20 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-brand" />
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black leading-none mb-0.5">3.8x</div>
              <div className="text-xs sm:text-sm font-medium text-background/60">avg. ROAS across campaigns</div>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-brand/30" />
            <div className="w-12 h-12 rounded-full bg-brand/15" />
            <div className="w-6 h-6 rounded-full bg-brand/40" />
          </div>
        </div>
      </div>
    </div>
  </section>
);
