import { useState, useEffect } from "react";
import { Clock, Users, Calendar, AlertTriangle, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const CourseScarcitySection = () => {
  const [ref, isVisible] = useScrollAnimation();
  
  // Countdown timer to next batch (January 15, 2025)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Simulated live viewers
  const [viewers, setViewers] = useState(47);

  useEffect(() => {
    const targetDate = new Date("2025-01-15T10:00:00+05:30").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    // Simulate viewers fluctuation
    const viewerInterval = setInterval(() => {
      setViewers(prev => {
        const change = Math.floor(Math.random() * 5) - 2;
        return Math.max(35, Math.min(60, prev + change));
      });
    }, 5000);

    return () => {
      clearInterval(interval);
      clearInterval(viewerInterval);
    };
  }, []);

  const scrollToApplication = () => {
    const element = document.getElementById("course-application");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section ref={ref} className="py-12 md:py-16 bg-gradient-to-r from-[hsl(var(--brand-orange))]/10 via-background to-[hsl(var(--brand-orange))]/10">
      <div className="container mx-auto px-4">
        <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Urgency Banner */}
          <div className="bg-card rounded-2xl border border-[hsl(var(--brand-orange))]/30 p-6 md:p-8 shadow-lg">
            {/* Top Row: Scarcity Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-8">
              {/* Seats Remaining */}
              <div className="flex items-center gap-2 px-4 py-2 bg-red-500/10 rounded-full border border-red-500/30 animate-pulse">
                <AlertTriangle className="w-4 h-4 text-red-500" />
                <span className="text-red-500 font-semibold text-sm">
                  Only 2 seats remaining
                </span>
              </div>

              {/* Live Viewers */}
              <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 rounded-full border border-emerald-500/30">
                <Eye className="w-4 h-4 text-emerald-500" />
                <span className="text-emerald-500 font-semibold text-sm">
                  {viewers} people viewing now
                </span>
              </div>

              {/* Batch Size */}
              <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-full border border-border/50">
                <Users className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground font-medium text-sm">
                  15 seats per batch
                </span>
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="text-center mb-8">
              <p className="text-sm text-muted-foreground mb-2 flex items-center justify-center gap-2">
                <Calendar className="w-4 h-4" />
                Next batch starts January 15, 2025
              </p>
              <div className="flex items-center justify-center gap-3 md:gap-4">
                {[
                  { value: timeLeft.days, label: "Days" },
                  { value: timeLeft.hours, label: "Hours" },
                  { value: timeLeft.minutes, label: "Mins" },
                  { value: timeLeft.seconds, label: "Secs" },
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 md:w-20 h-16 md:h-20 bg-gradient-to-br from-[hsl(var(--brand-orange))] to-[hsl(var(--brand-orange))]/80 rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-2xl md:text-3xl font-bold text-white">
                        {item.value.toString().padStart(2, '0')}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2 font-medium">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Button 
                size="lg"
                onClick={scrollToApplication}
                className="bg-[hsl(var(--brand-orange))] hover:bg-[hsl(var(--brand-orange))]/90 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 px-8"
              >
                <Clock className="w-5 h-5 mr-2" />
                Secure Your Spot Before It's Gone
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Early bird pricing ends when seats fill up
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
