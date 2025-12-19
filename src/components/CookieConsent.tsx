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
      className={`fixed bottom-0 left-0 right-0 z-50 p-4 transition-all duration-300 ${
        isClosing ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <div className="bg-background border border-border rounded-2xl shadow-2xl overflow-hidden">
          {/* Main Banner */}
          <div className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center flex-shrink-0">
                <Cookie className="w-6 h-6 text-orange-500" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-lg font-bold text-foreground mb-2">
                  We value your privacy
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
                  By clicking "Accept All", you consent to our use of cookies.{" "}
                  <Link to="/cookie-policy" className="text-orange-500 hover:underline">
                    Learn more
                  </Link>
                </p>

                {/* Quick Actions */}
                <div className="flex flex-wrap items-center gap-3">
                  <Button 
                    onClick={() => handleClose(acceptAll)}
                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg shadow-orange-500/30"
                  >
                    Accept All
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => handleClose(rejectAll)}
                    className="border-border hover:bg-muted"
                  >
                    Reject All
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={() => setShowPreferences(!showPreferences)}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Customize
                    {showPreferences ? (
                      <ChevronUp className="w-4 h-4 ml-1" />
                    ) : (
                      <ChevronDown className="w-4 h-4 ml-1" />
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Preferences Panel */}
          {showPreferences && (
            <div className="border-t border-border bg-muted/30 p-6 animate-fade-in">
              <h4 className="font-semibold text-foreground mb-4">Cookie Preferences</h4>
              <div className="space-y-4">
                {cookieCategories.map((category) => (
                  <div 
                    key={category.id}
                    className="flex items-center justify-between p-4 bg-background rounded-xl border border-border/50"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                        <category.icon className="w-5 h-5 text-muted-foreground" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">{category.name}</div>
                        <div className="text-xs text-muted-foreground">{category.description}</div>
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
                    />
                  </div>
                ))}
              </div>

              <div className="flex justify-end gap-3 mt-6">
                <Button 
                  variant="outline"
                  onClick={() => setShowPreferences(false)}
                >
                  Cancel
                </Button>
                <Button 
                  onClick={() => handleClose(() => saveCustomPreferences(customPreferences))}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
                >
                  Save Preferences
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
