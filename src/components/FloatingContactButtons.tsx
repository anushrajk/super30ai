import { Phone } from "lucide-react";

const PHONE_NUMBER = "+918904150555";
const PHONE_DISPLAY = "89041 50555";

export const FloatingContactButtons = () => {
  return (
    <div className="fixed bottom-24 left-6 z-50 flex flex-col gap-3">
      {/* Phone Button */}
      <a
        href={`tel:${PHONE_NUMBER}`}
        className="group relative w-12 h-12 sm:w-14 sm:h-14 bg-[hsl(var(--brand-orange))] hover:bg-[hsl(var(--brand-orange))]/90 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 border border-[hsl(var(--brand-orange))]/30"
        aria-label="Call us"
      >
        <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />

        {/* Tooltip with glass effect */}
        <span className="absolute left-full ml-3 px-3 py-2 bg-background/90 backdrop-blur-sm text-foreground text-sm font-medium rounded-xl border border-border/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none shadow-lg">
          Call: {PHONE_DISPLAY}
        </span>
      </a>
    </div>
  );
};
