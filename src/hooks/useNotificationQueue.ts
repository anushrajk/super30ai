import { useState, useCallback, useEffect, useRef } from 'react';

type NotificationType = 'cookie' | 'callback' | 'quote' | 'exit' | null;

interface NotificationQueueState {
  activeNotification: NotificationType;
  cookieDismissed: boolean;
}

// Singleton to share state across components
let globalState: NotificationQueueState = {
  activeNotification: null,
  cookieDismissed: false,
};

const listeners = new Set<() => void>();

const notifyListeners = () => {
  listeners.forEach(listener => listener());
};

export const useNotificationQueue = () => {
  const [, forceUpdate] = useState({});
  const listenerRef = useRef<(() => void) | null>(null);

  // Subscribe to global state changes - must be in useEffect, not during render
  useEffect(() => {
    const listener = () => forceUpdate({});
    listenerRef.current = listener;
    listeners.add(listener);

    return () => {
      if (listenerRef.current) {
        listeners.delete(listenerRef.current);
        listenerRef.current = null;
      }
    };
  }, []);

  const setActiveNotification = useCallback((type: NotificationType) => {
    globalState = { ...globalState, activeNotification: type };
    notifyListeners();
  }, []);

  const setCookieDismissed = useCallback((dismissed: boolean) => {
    globalState = { ...globalState, cookieDismissed: dismissed };
    notifyListeners();
  }, []);

  const canShowNotification = useCallback((type: NotificationType): boolean => {
    // If something is active, don't show another
    if (globalState.activeNotification !== null) return false;
    
    // Cookie takes priority - if not dismissed, popups should wait
    if (type !== 'cookie' && !globalState.cookieDismissed) return false;
    
    return true;
  }, []);

  return {
    activeNotification: globalState.activeNotification,
    cookieDismissed: globalState.cookieDismissed,
    setActiveNotification,
    setCookieDismissed,
    canShowNotification,
  };
};
