import { Phone, MessageCircle } from "lucide-react";

const PHONE_NUMBER = "+917353252526";
const WHATSAPP_MESSAGE = "Hi! I'm interested in your marketing services.";

export const FloatingContactButtons = () => {
  const whatsappUrl = `https://wa.me/917353252526?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-12 h-12 sm:w-14 sm:h-14 bg-green-500 hover:bg-green-600 rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/30 hover:shadow-[0_0_25px_rgba(34,197,94,0.6)] transition-all duration-300 hover:scale-110 border border-green-400/30"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        
        {/* Tooltip with glass effect */}
        <span className="absolute left-full ml-3 px-3 py-2 bg-background/90 backdrop-blur-sm text-foreground text-sm font-medium rounded-xl border border-border/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none shadow-lg">
          Chat on WhatsApp
        </span>
        
        {/* Subtle pulse ring */}
        <span className="absolute inset-0 rounded-2xl border-2 border-green-400/50 animate-ping opacity-20" style={{ animationDuration: '2s' }} />
      </a>

      {/* Phone Button */}
      <a
        href={`tel:${PHONE_NUMBER}`}
        className="group relative w-12 h-12 sm:w-14 sm:h-14 bg-[hsl(var(--brand-orange))] hover:bg-[hsl(var(--brand-orange))]/90 rounded-2xl flex items-center justify-center shadow-lg shadow-[hsl(var(--brand-orange))]/30 hover:shadow-[0_0_25px_hsl(var(--brand-orange)/0.6)] transition-all duration-300 hover:scale-110 border border-[hsl(var(--brand-orange))]/30"
        aria-label="Call us"
      >
        <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        
        {/* Tooltip with glass effect */}
        <span className="absolute left-full ml-3 px-3 py-2 bg-background/90 backdrop-blur-sm text-foreground text-sm font-medium rounded-xl border border-border/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none shadow-lg">
          Call Now
        </span>
        
        {/* Subtle glow ring */}
        <span className="absolute inset-0 rounded-2xl border border-[hsl(var(--brand-orange))]/50 animate-pulse opacity-50" />
      </a>
    </div>
  );
};
