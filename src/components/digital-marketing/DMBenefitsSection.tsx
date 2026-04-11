import { Eye, Unlock, UserCheck, Award, Headphones, Brain } from "lucide-react";

const trustSignals = [
  { icon: Eye, stat: "24/7", label: "live dashboard access", bg: "brand" },
  { icon: Unlock, stat: "0", label: "lock-in contracts", bg: "dark" },
  { icon: UserCheck, stat: "100%", label: "in-house execution", bg: "light" },
  { icon: Award, stat: "2x", label: "certified partner", bg: "light" },
  { icon: Headphones, stat: "1", label: "dedicated manager", bg: "dark" },
  { icon: Brain, stat: "AI+", label: "human strategy", bg: "brand" },
];

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

      {/* Bento grid matching reference layout: 3 cols, row 1 has a tall left + 2 stacked right, row 2 has 2 stacked left + tall right */}
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 auto-rows-[140px] sm:auto-rows-[160px] md:auto-rows-[140px] gap-3 sm:gap-4">

        {/* Card 1 — tall left (brand orange) */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-brand text-white p-5 sm:p-6 flex flex-col justify-between row-span-2">
          <div className="flex justify-between items-start">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/15 flex items-center justify-center">
              <Eye className="w-5 h-5" />
            </div>
            {/* Decorative blob */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/10 -mr-3 -mt-1" />
          </div>
          <div>
            <div className="text-4xl sm:text-5xl md:text-6xl font-black leading-none mb-1">24/7</div>
            <div className="text-sm sm:text-base font-medium text-white/80">live dashboard<br />access</div>
          </div>
        </div>

        {/* Card 2 — top-right small (light bg) */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-brand/10 text-foreground p-5 sm:p-6 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-brand/15 flex items-center justify-center">
              <Unlock className="w-4 h-4 sm:w-5 sm:h-5 text-brand" />
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black leading-none mb-0.5">0</div>
            <div className="text-xs sm:text-sm font-medium text-muted-foreground">lock-in contracts</div>
          </div>
        </div>

        {/* Card 3 — right of card 2 (dark) */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-foreground text-background p-5 sm:p-6 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-background/10 flex items-center justify-center">
              <UserCheck className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            {/* Decorative blob */}
            <div className="w-12 h-12 rounded-full bg-brand/20 -mr-2 -mt-1" />
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black leading-none mb-0.5">100%</div>
            <div className="text-xs sm:text-sm font-medium text-background/60">in-house execution</div>
          </div>
        </div>

        {/* Card 4 — middle row left (dark) */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-foreground text-background p-5 sm:p-6 flex flex-col justify-between">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-background/10 flex items-center justify-center">
            <Award className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black leading-none mb-0.5">2x</div>
            <div className="text-xs sm:text-sm font-medium text-background/60">certified partner</div>
          </div>
        </div>

        {/* Card 5 — middle (light bg) */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-brand/10 text-foreground p-5 sm:p-6 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-brand/15 flex items-center justify-center">
              <Headphones className="w-4 h-4 sm:w-5 sm:h-5 text-brand" />
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black leading-none mb-0.5 text-foreground">1</div>
            <div className="text-xs sm:text-sm font-medium text-muted-foreground">dedicated manager</div>
          </div>
        </div>

        {/* Card 6 — tall right (brand orange) */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-brand text-white p-5 sm:p-6 flex flex-col justify-between row-span-2 -mt-[calc(140px+1rem)] sm:-mt-[calc(160px+1rem)] md:-mt-[calc(140px+1rem)]">
          <div className="flex justify-between items-start">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/15 flex items-center justify-center">
              <Brain className="w-5 h-5" />
            </div>
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/10 -mr-2 -mt-1" />
          </div>
          <div>
            <div className="text-4xl sm:text-5xl md:text-6xl font-black leading-none mb-1">AI+</div>
            <div className="text-sm sm:text-base font-medium text-white/80">human strategy<br />combined</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
