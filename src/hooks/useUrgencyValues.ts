import { useState, useEffect } from 'react';
import { getStartOfTodayIST, getStartOfWeekIST } from '@/lib/timeUtils';

interface UrgencyValues {
  slotsRemaining: number;
  weeklyRequests: number;
  callbackSlots: number;
  exitCountdown: number;
}

interface StoredUrgencyData {
  value: number;
  resetTimestamp: number;
}

const STORAGE_KEYS = {
  SLOTS_REMAINING: 'urgency_slots_remaining',
  WEEKLY_REQUESTS: 'urgency_weekly_requests',
  CALLBACK_SLOTS: 'urgency_callback_slots',
  EXIT_COUNTDOWN_END: 'urgency_exit_countdown_end',
};

const DEFAULT_VALUES = {
  SLOTS_REMAINING: 4,
  WEEKLY_REQUESTS: 47,
  CALLBACK_SLOTS: 3,
  EXIT_COUNTDOWN_DURATION: 299, // 4:59 in seconds
};

/**
 * Get persisted value or reset if expired
 */
const getPersistedValue = (
  key: string, 
  defaultValue: number, 
  resetCheck: () => number
): number => {
  try {
    const stored = localStorage.getItem(key);
    if (!stored) return defaultValue;
    
    const data: StoredUrgencyData = JSON.parse(stored);
    const currentReset = resetCheck();
    
    // If the stored reset timestamp is before the current reset period, reset the value
    if (data.resetTimestamp < currentReset) {
      return defaultValue;
    }
    
    return data.value;
  } catch {
    return defaultValue;
  }
};

/**
 * Persist value with reset timestamp
 */
const persistValue = (key: string, value: number, resetTimestamp: number): void => {
  try {
    const data: StoredUrgencyData = { value, resetTimestamp };
    localStorage.setItem(key, JSON.stringify(data));
  } catch {
    // Ignore storage errors
  }
};

/**
 * Hook for managing persisted urgency values
 * - slotsRemaining: Resets daily
 * - weeklyRequests: Resets weekly
 * - callbackSlots: Resets daily
 * - exitCountdown: Session-based countdown
 */
export const useUrgencyValues = () => {
  const [values, setValues] = useState<UrgencyValues>(() => ({
    slotsRemaining: getPersistedValue(
      STORAGE_KEYS.SLOTS_REMAINING, 
      DEFAULT_VALUES.SLOTS_REMAINING, 
      getStartOfTodayIST
    ),
    weeklyRequests: getPersistedValue(
      STORAGE_KEYS.WEEKLY_REQUESTS, 
      DEFAULT_VALUES.WEEKLY_REQUESTS, 
      getStartOfWeekIST
    ),
    callbackSlots: getPersistedValue(
      STORAGE_KEYS.CALLBACK_SLOTS, 
      DEFAULT_VALUES.CALLBACK_SLOTS, 
      getStartOfTodayIST
    ),
    exitCountdown: DEFAULT_VALUES.EXIT_COUNTDOWN_DURATION,
  }));

  // Initialize exit countdown from localStorage
  useEffect(() => {
    const storedEnd = localStorage.getItem(STORAGE_KEYS.EXIT_COUNTDOWN_END);
    
    if (storedEnd) {
      const endTime = parseInt(storedEnd, 10);
      const remaining = Math.max(0, Math.floor((endTime - Date.now()) / 1000));
      
      if (remaining > 0) {
        setValues(prev => ({ ...prev, exitCountdown: remaining }));
      } else {
        // Reset countdown
        const newEndTime = Date.now() + (DEFAULT_VALUES.EXIT_COUNTDOWN_DURATION * 1000);
        localStorage.setItem(STORAGE_KEYS.EXIT_COUNTDOWN_END, String(newEndTime));
        setValues(prev => ({ ...prev, exitCountdown: DEFAULT_VALUES.EXIT_COUNTDOWN_DURATION }));
      }
    } else {
      // First time - set end time
      const endTime = Date.now() + (DEFAULT_VALUES.EXIT_COUNTDOWN_DURATION * 1000);
      localStorage.setItem(STORAGE_KEYS.EXIT_COUNTDOWN_END, String(endTime));
    }
  }, []);

  // Persist values when they change
  useEffect(() => {
    persistValue(STORAGE_KEYS.SLOTS_REMAINING, values.slotsRemaining, getStartOfTodayIST());
    persistValue(STORAGE_KEYS.WEEKLY_REQUESTS, values.weeklyRequests, getStartOfWeekIST());
    persistValue(STORAGE_KEYS.CALLBACK_SLOTS, values.callbackSlots, getStartOfTodayIST());
  }, [values.slotsRemaining, values.weeklyRequests, values.callbackSlots]);

  /**
   * Decrement slots remaining (e.g., after a booking)
   */
  const decrementSlots = () => {
    setValues(prev => ({
      ...prev,
      slotsRemaining: Math.max(1, prev.slotsRemaining - 1),
    }));
  };

  /**
   * Increment weekly requests
   */
  const incrementWeeklyRequests = () => {
    setValues(prev => ({
      ...prev,
      weeklyRequests: prev.weeklyRequests + 1,
    }));
  };

  /**
   * Decrement callback slots
   */
  const decrementCallbackSlots = () => {
    setValues(prev => ({
      ...prev,
      callbackSlots: Math.max(1, prev.callbackSlots - 1),
    }));
  };

  /**
   * Start/tick the exit countdown
   */
  const tickExitCountdown = () => {
    setValues(prev => ({
      ...prev,
      exitCountdown: Math.max(0, prev.exitCountdown - 1),
    }));
  };

  /**
   * Reset exit countdown
   */
  const resetExitCountdown = () => {
    const newEndTime = Date.now() + (DEFAULT_VALUES.EXIT_COUNTDOWN_DURATION * 1000);
    localStorage.setItem(STORAGE_KEYS.EXIT_COUNTDOWN_END, String(newEndTime));
    setValues(prev => ({
      ...prev,
      exitCountdown: DEFAULT_VALUES.EXIT_COUNTDOWN_DURATION,
    }));
  };

  /**
   * Format countdown as MM:SS
   */
  const formatCountdown = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return {
    ...values,
    decrementSlots,
    incrementWeeklyRequests,
    decrementCallbackSlots,
    tickExitCountdown,
    resetExitCountdown,
    formatCountdown,
  };
};