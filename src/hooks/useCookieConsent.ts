import { useState, useEffect, useCallback } from 'react';

export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

interface CookieConsentState {
  hasConsented: boolean;
  preferences: CookiePreferences;
}

const DEFAULT_PREFERENCES: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
  functional: false,
};

const STORAGE_KEY = 'cookie-consent';

export const useCookieConsent = () => {
  const [state, setState] = useState<CookieConsentState>({
    hasConsented: false,
    preferences: DEFAULT_PREFERENCES,
  });
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setState({
          hasConsented: true,
          preferences: { ...DEFAULT_PREFERENCES, ...parsed.preferences },
        });
      } catch {
        // Invalid stored data, use defaults
      }
    }
    setIsLoaded(true);
  }, []);

  const savePreferences = useCallback((preferences: CookiePreferences) => {
    const data = {
      preferences,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    setState({ hasConsented: true, preferences });
  }, []);

  const acceptAll = useCallback(() => {
    savePreferences({
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    });
  }, [savePreferences]);

  const rejectAll = useCallback(() => {
    savePreferences({
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
    });
  }, [savePreferences]);

  const saveCustomPreferences = useCallback((preferences: CookiePreferences) => {
    savePreferences({
      ...preferences,
      necessary: true, // Always required
    });
  }, [savePreferences]);

  const resetConsent = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setState({
      hasConsented: false,
      preferences: DEFAULT_PREFERENCES,
    });
  }, []);

  const showBanner = isLoaded && !state.hasConsented;

  return {
    ...state,
    showBanner,
    isLoaded,
    acceptAll,
    rejectAll,
    saveCustomPreferences,
    resetConsent,
  };
};
