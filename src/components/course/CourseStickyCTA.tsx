import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, ArrowRight } from "lucide-react";

export const CourseStickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero section (approximately 600px)
      const scrollThreshold = 600;
      setIsVisible(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToApplication = () => {
    const applicationSection = document.getElementById("course-application");
    if (applicationSection) {
      applicationSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (isDismissed || !isVisible) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transform transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-primary/95 backdrop-blur-md border-t border-primary-foreground/10 shadow-lg">
        <div className="container mx-auto px-4 py-3 md:py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Left - Message */}
            <div className="flex-1 min-w-0">
              <p className="text-primary-foreground font-semibold text-sm md:text-base truncate">
                <span className="hidden sm:inline">🔥 </span>
                Only 2 Seats Left for January Batch
              </p>
              <p className="text-primary-foreground/80 text-xs md:text-sm hidden sm:block">
                Early bird pricing ends soon
              </p>
            </div>

            {/* Right - CTA and Close */}
            <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
              <Button
                onClick={scrollToApplication}
                variant="secondary"
                size="sm"
                className="font-semibold whitespace-nowrap"
              >
                Apply Now
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
              
              <button
                onClick={() => setIsDismissed(true)}
                className="p-1.5 rounded-full hover:bg-primary-foreground/10 transition-colors"
                aria-label="Dismiss"
              >
                <X className="w-4 h-4 text-primary-foreground" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
