import React, { useState, useEffect, forwardRef } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, X } from "lucide-react";

interface StickyCTAProps {
  onClick: () => void;
}

export const StickyCTA = forwardRef<HTMLDivElement, StickyCTAProps>(({ onClick }, ref) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 500px
      const shouldShow = window.scrollY > 500;
      setIsVisible(shouldShow && !isDismissed);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  if (!isVisible) return null;

  return (
    <div
      ref={ref}
      className="fixed bottom-0 left-0 right-0 z-40 p-3 sm:p-4 lg:hidden animate-in slide-in-from-bottom-4 duration-300"
    >
      <div className="bg-background/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-border/50 p-3 sm:p-4">
        <div className="flex items-center justify-between gap-3">
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-foreground text-sm sm:text-base truncate">
              Get Your Free AI SEO Audit
            </h4>
            <p className="text-xs sm:text-sm text-muted-foreground truncate">
              Worth $500 • Takes 60 seconds
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button
              onClick={onClick}
              className="bg-[hsl(var(--brand-orange))] hover:bg-[hsl(var(--brand-orange))]/90 text-white font-semibold shadow-lg shadow-[hsl(var(--brand-orange))]/25 hover:shadow-[hsl(var(--brand-orange))]/40 text-sm px-4"
            >
              <Sparkles className="w-4 h-4 mr-1.5" />
              Start Free
            </Button>
            <button
              onClick={() => setIsDismissed(true)}
              className="p-2 rounded-xl hover:bg-muted/50 border border-transparent hover:border-border/50 transition-all duration-300"
              aria-label="Dismiss"
            >
              <X className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

StickyCTA.displayName = "StickyCTA";
