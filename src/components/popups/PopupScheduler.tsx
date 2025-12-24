import { useState, useEffect, useCallback, useRef } from 'react';
import { useUrgencyValues } from '@/hooks/useUrgencyValues';
import { useNotificationQueue } from '@/hooks/useNotificationQueue';
import { CallbackPopup } from './CallbackPopup';
import { QuotePopup } from './QuotePopup';
import { ExitIntentPopup } from './ExitIntentPopup';
import { isPopupExpired, markPopupShown } from './utils';
import { CALLBACK_DELAY_MS, QUOTE_DELAY_MS, type PopupType } from './types';

export const PopupScheduler = () => {
  const [activePopup, setActivePopup] = useState<PopupType | null>(null);
  const popupQueueRef = useRef<PopupType[]>([]);
  const timersRef = useRef<{ callback?: NodeJS.Timeout; quote?: NodeJS.Timeout }>({});

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
    if (popupQueueRef.current.length === 0) return;
    
    const nextPopup = popupQueueRef.current[0];
    if (canShowNotification(nextPopup)) {
      popupQueueRef.current.shift();
      setActivePopup(nextPopup);
      setActiveNotification(nextPopup);
    }
  }, [canShowNotification, setActiveNotification]);

  // Queue a popup to show
  const queuePopup = useCallback((type: PopupType) => {
    const storageKey = `popup_${type}_shown`;
    if (!isPopupExpired(storageKey) || popupQueueRef.current.includes(type)) return;
    
    if (canShowNotification(type)) {
      setActivePopup(type);
      setActiveNotification(type);
    } else {
      popupQueueRef.current.push(type);
    }
  }, [canShowNotification, setActiveNotification]);

  // Schedule popups after cookie is dismissed
  useEffect(() => {
    if (!cookieDismissed) return;

    // Clear existing timers
    if (timersRef.current.callback) clearTimeout(timersRef.current.callback);
    if (timersRef.current.quote) clearTimeout(timersRef.current.quote);

    // Schedule callback popup
    if (isPopupExpired('popup_callback_shown')) {
      timersRef.current.callback = setTimeout(() => {
        queuePopup('callback');
      }, CALLBACK_DELAY_MS);
    }

    // Schedule quote popup
    if (isPopupExpired('popup_quote_shown')) {
      timersRef.current.quote = setTimeout(() => {
        queuePopup('quote');
      }, QUOTE_DELAY_MS);
    }

    return () => {
      if (timersRef.current.callback) clearTimeout(timersRef.current.callback);
      if (timersRef.current.quote) clearTimeout(timersRef.current.quote);
    };
  }, [cookieDismissed, queuePopup]);

  // Try to show queued popups when notification clears
  useEffect(() => {
    if (activeNotification === null && popupQueueRef.current.length > 0) {
      const timer = setTimeout(showNextPopup, 2000);
      return () => clearTimeout(timer);
    }
  }, [activeNotification, showNextPopup]);

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

  const handleClose = useCallback((type: PopupType) => {
    markPopupShown(`popup_${type}_shown`);
    setActivePopup(null);
    setActiveNotification(null);
  }, [setActiveNotification]);

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
    <>
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
    </>
  );
};
