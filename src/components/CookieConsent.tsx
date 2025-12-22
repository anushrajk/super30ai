import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Cookie, Shield, BarChart3, Megaphone, Settings2, ChevronDown, ChevronUp } from "lucide-react";
import { useCookieConsent, CookiePreferences } from "@/hooks/useCookieConsent";
import { useNotificationQueue } from "@/hooks/useNotificationQueue";
import { Link } from "react-router-dom";

const COOKIE_DELAY_MS = 3000; // Show after 3 seconds

export const CookieConsent = () => {
  const { showBanner, preferences, acceptAll, rejectAll, saveCustomPreferences } = useCookieConsent();
  const { setActiveNotification, setCookieDismissed, activeNotification } = useNotificationQueue();
  const [showPreferences, setShowPreferences] = useState(false);
  const [customPreferences, setCustomPreferences] = useState<CookiePreferences>(preferences);
  const [isClosing, setIsClosing] = useState(false);
  const [isReady, setIsReady] = useState(false);

  // Delay showing cookie banner
  useEffect(() => {
    if (!showBanner) {
      setCookieDismissed(true);
      return;
    }

    const timer = setTimeout(() => {
      setIsReady(true);
      setActiveNotification('cookie');
    }, COOKIE_DELAY_MS);

    return () => clearTimeout(timer);
  }, [showBanner, setActiveNotification, setCookieDismissed]);

  const handleClose = (action: () => void) => {
    setIsClosing(true);
    setTimeout(() => {
      action();
      setActiveNotification(null);
      setCookieDismissed(true);
    }, 300);
  };

  // Don't render if banner shouldn't show or not ready yet
  if (!showBanner || !isReady || activeNotification !== 'cookie') return null;

  const cookieCategories = [
    {
      id: 'necessary',
      name: 'Necessary',
      description: 'Essential for the website to function. Cannot be disabled.',
      icon: Shield,
      disabled: true,
    },
    {
      id: 'analytics',
      name: 'Analytics',
      description: 'Help us understand how visitors interact with our website.',
      icon: BarChart3,
      disabled: false,
    },
    {
      id: 'marketing',
      name: 'Marketing',
      description: 'Used to deliver personalized advertisements.',
      icon: Megaphone,
      disabled: false,
    },
    {
      id: 'functional',
      name: 'Functional',
      description: 'Enable enhanced functionality and personalization.',
      icon: Settings2,
      disabled: false,
    },
  ];

  return (
    <div 
      className={`fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-md z-[100] transition-all duration-300 ${
        isClosing ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
      }`}
    >
      <div className="bg-background/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-border/50 overflow-hidden">
        {/* Header */}
        <div className="p-4 sm:p-5">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-[hsl(var(--brand-orange))]/10 border border-[hsl(var(--brand-orange))]/30 flex items-center justify-center flex-shrink-0">
              <Cookie className="w-5 h-5 text-[hsl(var(--brand-orange))]" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-foreground text-sm sm:text-base">
                We value your privacy
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed">
                We use cookies to enhance your browsing experience.{" "}
                <Link to="/cookie-policy" className="text-[hsl(var(--brand-orange))] hover:underline">
                  Learn more
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Preferences Panel */}
        {showPreferences && (
          <div className="border-t border-border/50 p-4 sm:p-5 space-y-3 animate-in slide-in-from-top-2 duration-300">
            <h4 className="font-semibold text-foreground text-sm">Cookie Preferences</h4>
            {cookieCategories.map((category) => (
              <div 
                key={category.id}
                className="flex items-center justify-between gap-3 p-3 rounded-xl bg-muted/30 border border-border/50 hover:border-border transition-colors duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-background border border-border/50 flex items-center justify-center">
                    <category.icon className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div>
                    <span className="font-medium text-foreground text-sm">{category.name}</span>
                    <p className="text-xs text-muted-foreground">{category.description}</p>
                  </div>
                </div>
                <Switch
                  checked={customPreferences[category.id as keyof CookiePreferences]}
                  disabled={category.disabled}
                  onCheckedChange={(checked) => {
                    setCustomPreferences(prev => ({
                      ...prev,
                      [category.id]: checked,
                    }));
                  }}
                  className="data-[state=checked]:bg-[hsl(var(--brand-orange))]"
                />
              </div>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="p-4 sm:p-5 border-t border-border/50">
          {!showPreferences ? (
            <div className="flex flex-col sm:flex-row gap-2">
              <Button
                onClick={() => handleClose(acceptAll)}
                className="flex-1 bg-[hsl(var(--brand-orange))] hover:bg-[hsl(var(--brand-orange))]/90 text-white font-semibold shadow-lg shadow-[hsl(var(--brand-orange))]/25"
              >
                Accept All
              </Button>
              <Button
                onClick={() => handleClose(rejectAll)}
                variant="outline"
                className="flex-1 border-border/50 hover:bg-muted/50"
              >
                Reject All
              </Button>
              <Button
                onClick={() => setShowPreferences(true)}
                variant="ghost"
                className="flex-1 hover:bg-muted/50"
              >
                Customize
                <ChevronDown className="w-4 h-4 ml-1" />
              </Button>
            </div>
          ) : (
            <div className="flex gap-2">
              <Button
                onClick={() => handleClose(() => saveCustomPreferences(customPreferences))}
                className="flex-1 bg-[hsl(var(--brand-orange))] hover:bg-[hsl(var(--brand-orange))]/90 text-white font-semibold shadow-lg shadow-[hsl(var(--brand-orange))]/25"
              >
                Save Preferences
              </Button>
              <Button
                onClick={() => setShowPreferences(false)}
                variant="outline"
                className="border-border/50 hover:bg-muted/50"
              >
                <ChevronUp className="w-4 h-4 mr-1" />
                Back
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
