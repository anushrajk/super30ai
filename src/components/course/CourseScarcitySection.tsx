import { useState, useEffect } from "react";
import { Clock, Users, Calendar, AlertTriangle, Eye, MessageCircle, HelpCircle } from "lucide-react";
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
    <section ref={ref} className="py-12 md:py-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-[hsl(var(--brand-orange))]/15 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Urgency Banner */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 md:p-8 shadow-lg">
            {/* Why Limited Seats - Explanation */}
            <div className="text-center mb-6">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                Why We Only Take <span className="text-[hsl(var(--brand-orange))]">15 Students</span> Per Batch
              </h3>
              <p className="text-sm text-slate-400 max-w-xl mx-auto">
                It's not a marketing gimmick. It's because we personally mentor each student, review every assignment, and track every job application. Can't do that with 100 students.
              </p>
            </div>

            {/* Top Row: Scarcity Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-8">
              {/* Seats Remaining */}
              <div className="flex items-center gap-2 px-4 py-2 bg-red-500/20 rounded-full border border-red-500/30 animate-pulse">
                <AlertTriangle className="w-4 h-4 text-red-400" />
                <span className="text-red-400 font-semibold text-sm">
                  Only 2 seats left (13 filled)
                </span>
              </div>

              {/* Live Viewers */}
              <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500/20 rounded-full border border-emerald-500/30">
                <Eye className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400 font-semibold text-sm">
                  {viewers} people viewing right now
                </span>
              </div>

              {/* Batch Size */}
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20">
                <Users className="w-4 h-4 text-slate-300" />
                <span className="text-slate-300 font-medium text-sm">
                  Max 15 per batch
                </span>
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="text-center mb-8">
              <p className="text-sm text-slate-400 mb-2 flex items-center justify-center gap-2">
                <Calendar className="w-4 h-4" />
                January 2025 batch starts in:
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
                    <p className="text-xs text-slate-400 mt-2 font-medium">{item.label}</p>
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
                Join the January 2025 Batch
              </Button>
              <p className="text-sm text-slate-400 mt-4">
                Early bird price: <span className="line-through">₹1,29,999</span> → <span className="text-[hsl(var(--brand-orange))] font-bold">₹59,999</span> (Save ₹70,000)
              </p>
            </div>

            {/* What if I miss this batch */}
            <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
              <div className="flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-[hsl(var(--brand-orange))] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-white">What if I miss this batch?</p>
                  <p className="text-xs text-slate-400 mt-1">
                    Next batch starts in March 2025. But early bird pricing ends when January batch fills up. 
                    You'll pay ₹30,000 more for the same course.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
