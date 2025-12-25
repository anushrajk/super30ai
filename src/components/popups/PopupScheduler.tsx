import { useState, useEffect, useCallback, useRef, lazy, Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import { useUrgencyValues } from '@/hooks/useUrgencyValues';
import { useNotificationQueue } from '@/hooks/useNotificationQueue';
import { isPopupExpired, markPopupShown } from './utils';
import { FIRST_POPUP_DELAY_MS, BETWEEN_POPUP_DELAY_MS, type PopupType } from './types';

// Lazy load popup components
const CallbackPopup = lazy(() => import('./CallbackPopup').then(m => ({ default: m.CallbackPopup })));
const QuotePopup = lazy(() => import('./QuotePopup').then(m => ({ default: m.QuotePopup })));
const ExitIntentPopup = lazy(() => import('./ExitIntentPopup').then(m => ({ default: m.ExitIntentPopup })));

// Pages where popups should be disabled
const POPUP_DISABLED_ROUTES = ['/seo-course'];

export const PopupScheduler = () => {
  const location = useLocation();
  const [activePopup, setActivePopup] = useState<PopupType | null>(null);
  const popupQueueRef = useRef<PopupType[]>(['callback', 'quote']);
  const nextPopupTimerRef = useRef<NodeJS.Timeout | null>(null);
  const firstPopupScheduledRef = useRef(false);

  // Check if popups are disabled on current route
  const isPopupDisabled = POPUP_DISABLED_ROUTES.includes(location.pathname);

  // If on a disabled route, don't render anything
  if (isPopupDisabled) {
    return null;
  }

  const { 
    callbackSlots, 
    weeklyRequests, 
    exitCountdown, 
    tickExitCountdown,
    decrementCallbackSlots,
    incrementWeeklyRequests,
    formatCountdown 
  } = useUrgencyValues();
  
  const { cookieDismissed, canShowNotification, setActiveNotification, activeNotification } = useNotificationQueue();

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  // Show next popup from queue
  const showNextPopup = useCallback(() => {
    // Filter queue to only show popups that haven't expired
    const validQueue = popupQueueRef.current.filter(type => 
      isPopupExpired(`popup_${type}_shown`)
    );
    popupQueueRef.current = validQueue;

    if (validQueue.length === 0) return;
    
    const nextPopup = validQueue[0];
    if (canShowNotification(nextPopup)) {
      popupQueueRef.current = validQueue.slice(1);
      setActivePopup(nextPopup);
      setActiveNotification(nextPopup);
    }
  }, [canShowNotification, setActiveNotification]);

  // Schedule first popup after cookie is dismissed
  useEffect(() => {
    if (!cookieDismissed || firstPopupScheduledRef.current) return;

    firstPopupScheduledRef.current = true;

    // Wait 15 seconds for first popup
    const timer = setTimeout(() => {
      showNextPopup();
    }, FIRST_POPUP_DELAY_MS);

    return () => clearTimeout(timer);
  }, [cookieDismissed, showNextPopup]);

  // Schedule next popup when current one closes
  const handleClose = useCallback((type: PopupType) => {
    markPopupShown(`popup_${type}_shown`);
    setActivePopup(null);
    setActiveNotification(null);

    // Clear any existing timer
    if (nextPopupTimerRef.current) {
      clearTimeout(nextPopupTimerRef.current);
    }

    // Schedule next popup after 45 seconds if there are more in queue
    if (popupQueueRef.current.length > 0) {
      nextPopupTimerRef.current = setTimeout(() => {
        showNextPopup();
      }, BETWEEN_POPUP_DELAY_MS);
    }
  }, [setActiveNotification, showNextPopup]);

  // Exit Intent Detection (Desktop only)
  useEffect(() => {
    if (isMobile || !cookieDismissed) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 10 && isPopupExpired('popup_exit_shown') && canShowNotification('exit')) {
        setActivePopup('exit');
        setActiveNotification('exit');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [isMobile, cookieDismissed, canShowNotification, setActiveNotification]);

  // Exit countdown timer
  useEffect(() => {
    if (activePopup === 'exit' && exitCountdown > 0) {
      const timer = setInterval(tickExitCountdown, 1000);
      return () => clearInterval(timer);
    }
  }, [activePopup, exitCountdown, tickExitCountdown]);

  // Cleanup timers on unmount
  useEffect(() => {
    return () => {
      if (nextPopupTimerRef.current) {
        clearTimeout(nextPopupTimerRef.current);
      }
    };
  }, []);

  const handleCallbackSuccess = useCallback(() => {
    decrementCallbackSlots();
  }, [decrementCallbackSlots]);

  const handleQuoteSuccess = useCallback(() => {
    incrementWeeklyRequests();
  }, [incrementWeeklyRequests]);

  const handleExitSuccess = useCallback(() => {
    // No specific urgency action for exit
  }, []);

  return (
    <Suspense fallback={null}>
      <CallbackPopup
        open={activePopup === 'callback'}
        onClose={() => handleClose('callback')}
        callbackSlots={callbackSlots}
        weeklyRequests={weeklyRequests}
        onSuccess={handleCallbackSuccess}
      />
      
      <QuotePopup
        open={activePopup === 'quote'}
        onClose={() => handleClose('quote')}
        onSuccess={handleQuoteSuccess}
      />
      
      <ExitIntentPopup
        open={activePopup === 'exit'}
        onClose={() => handleClose('exit')}
        exitCountdown={exitCountdown}
        formatCountdown={formatCountdown}
        onSuccess={handleExitSuccess}
      />
    </Suspense>
  );
};
