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
    <div ref={ref} className="fixed bottom-0 left-0 right-0 z-50 lg:hidden animate-fade-in">
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-3 shadow-2xl shadow-orange-500/30 border-t border-orange-400/30">
        <div className="container mx-auto flex items-center justify-between gap-3">
          <div className="flex-1 min-w-0">
            <p className="text-white font-semibold text-sm truncate">
              Get Your Free AI SEO Audit
            </p>
            <p className="text-orange-100 text-xs truncate">
              Worth $500 • Takes 60 seconds
            </p>
          </div>
          <Button 
            onClick={onClick}
            className="bg-white text-orange-600 hover:bg-orange-50 font-semibold px-4 py-2 h-auto shadow-lg flex-shrink-0"
          >
            Start Free
            <Sparkles className="w-4 h-4 ml-1.5" />
          </Button>
          <button 
            onClick={() => setIsDismissed(true)}
            className="text-white/70 hover:text-white p-1 flex-shrink-0"
            aria-label="Dismiss"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
});

StickyCTA.displayName = "StickyCTA";
