import { useState, useEffect, useCallback } from 'react';
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

const BROADCAST_CHANNEL_NAME = 'urgency_sync';

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
 * Read all urgency values from localStorage
 */
const readAllValuesFromStorage = (): Omit<UrgencyValues, 'exitCountdown'> => {
  return {
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
  };
};

/**
 * Hook for managing persisted urgency values with cross-tab synchronization
 * - slotsRemaining: Resets daily
 * - weeklyRequests: Resets weekly
 * - callbackSlots: Resets daily
 * - exitCountdown: Session-based countdown
 */
export const useUrgencyValues = () => {
  const [values, setValues] = useState<UrgencyValues>(() => ({
    ...readAllValuesFromStorage(),
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

  // Cross-tab synchronization via storage event
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      // Only react to urgency-related keys
      if (e.key && e.key.startsWith('urgency_')) {
        // Re-read all values from storage
        const updatedValues = readAllValuesFromStorage();
        setValues(prev => ({ ...prev, ...updatedValues }));
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // Cross-tab synchronization via BroadcastChannel (more real-time)
  useEffect(() => {
    let channel: BroadcastChannel | null = null;
    
    try {
      channel = new BroadcastChannel(BROADCAST_CHANNEL_NAME);
      
      channel.onmessage = (event) => {
        if (event.data?.type === 'URGENCY_UPDATE') {
          setValues(prev => ({ ...prev, ...event.data.values }));
        }
      };
    } catch {
      // BroadcastChannel not supported in this browser
    }

    return () => {
      if (channel) {
        channel.close();
      }
    };
  }, []);

  // Broadcast updates to other tabs
  const broadcastUpdate = useCallback((updates: Partial<UrgencyValues>) => {
    try {
      const channel = new BroadcastChannel(BROADCAST_CHANNEL_NAME);
      channel.postMessage({ type: 'URGENCY_UPDATE', values: updates });
      channel.close();
    } catch {
      // BroadcastChannel not supported, fallback to storage events only
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
  const decrementSlots = useCallback(() => {
    setValues(prev => {
      const newValue = Math.max(1, prev.slotsRemaining - 1);
      const updates = { slotsRemaining: newValue };
      broadcastUpdate(updates);
      return { ...prev, ...updates };
    });
  }, [broadcastUpdate]);

  /**
   * Increment weekly requests
   */
  const incrementWeeklyRequests = useCallback(() => {
    setValues(prev => {
      const newValue = prev.weeklyRequests + 1;
      const updates = { weeklyRequests: newValue };
      broadcastUpdate(updates);
      return { ...prev, ...updates };
    });
  }, [broadcastUpdate]);

  /**
   * Decrement callback slots
   */
  const decrementCallbackSlots = useCallback(() => {
    setValues(prev => {
      const newValue = Math.max(1, prev.callbackSlots - 1);
      const updates = { callbackSlots: newValue };
      broadcastUpdate(updates);
      return { ...prev, ...updates };
    });
  }, [broadcastUpdate]);

  /**
   * Start/tick the exit countdown
   */
  const tickExitCountdown = useCallback(() => {
    setValues(prev => ({
      ...prev,
      exitCountdown: Math.max(0, prev.exitCountdown - 1),
    }));
  }, []);

  /**
   * Reset exit countdown
   */
  const resetExitCountdown = useCallback(() => {
    const newEndTime = Date.now() + (DEFAULT_VALUES.EXIT_COUNTDOWN_DURATION * 1000);
    localStorage.setItem(STORAGE_KEYS.EXIT_COUNTDOWN_END, String(newEndTime));
    setValues(prev => ({
      ...prev,
      exitCountdown: DEFAULT_VALUES.EXIT_COUNTDOWN_DURATION,
    }));
  }, []);

  /**
   * Format countdown as MM:SS
   */
  const formatCountdown = useCallback((seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }, []);

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
