import { Phone, MessageCircle } from "lucide-react";

const PHONE_NUMBER = "+917353252526";
const WHATSAPP_MESSAGE = "Hi! I'm interested in your marketing services.";

export const FloatingContactButtons = () => {
  const handlePhoneClick = () => {
    window.open(`tel:${PHONE_NUMBER}`, '_self');
  };

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGE);
    window.open(`https://wa.me/${PHONE_NUMBER.replace('+', '')}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="group relative w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 animate-bounce"
        style={{ animationDuration: '2s', animationIterationCount: 'infinite' }}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-white animate-pulse" />
        
        {/* Tooltip */}
        <span className="absolute left-full ml-3 px-3 py-1.5 bg-foreground text-background text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Chat on WhatsApp
        </span>
        
        {/* Ripple effect */}
        <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30" />
      </button>

      {/* Phone Button */}
      <button
        onClick={handlePhoneClick}
        className="group relative w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-full flex items-center justify-center shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 hover:scale-110"
        style={{ animation: 'wobble 2s ease-in-out infinite' }}
        aria-label="Call us"
      >
        <Phone className="w-6 h-6 text-white" />
        
        {/* Tooltip */}
        <span className="absolute left-full ml-3 px-3 py-1.5 bg-foreground text-background text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Call Now
        </span>
        
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full border-2 border-orange-400 animate-pulse opacity-50" />
      </button>

      {/* CSS for wobble animation */}
      <style>{`
        @keyframes wobble {
          0%, 100% { transform: rotate(0deg); }
          15% { transform: rotate(-12deg); }
          30% { transform: rotate(10deg); }
          45% { transform: rotate(-8deg); }
          60% { transform: rotate(6deg); }
          75% { transform: rotate(-4deg); }
          90% { transform: rotate(2deg); }
        }
      `}</style>
    </div>
  );
};
