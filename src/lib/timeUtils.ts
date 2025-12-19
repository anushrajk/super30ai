/**
 * Time utilities for IST (Indian Standard Time) formatting
 * IST is UTC+5:30
 */

const IST_OFFSET_MS = 5.5 * 60 * 60 * 1000;

/**
 * Format a date to IST display string
 */
export const formatToIST = (date: Date | string | undefined): string => {
  if (!date) return 'N/A';
  
  try {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    
    return dateObj.toLocaleString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
      timeZone: 'Asia/Kolkata'
    }) + ' IST';
  } catch {
    return String(date);
  }
};

/**
 * Get current time formatted in IST
 */
export const getCurrentIST = (): string => {
  return formatToIST(new Date());
};

/**
 * Get current timestamp in ISO format (for database storage)
 */
export const getISOTimestamp = (): string => {
  return new Date().toISOString();
};

/**
 * Format time for display (short format)
 */
export const formatTimeShort = (date: Date | string): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  return dateObj.toLocaleString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
    timeZone: 'Asia/Kolkata'
  });
};

/**
 * Format date only (no time)
 */
export const formatDateOnly = (date: Date | string): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  return dateObj.toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    timeZone: 'Asia/Kolkata'
  });
};

/**
 * Check if a stored timestamp has expired (for localStorage persistence)
 */
export const isTimestampExpired = (timestamp: number, hoursToExpire: number): boolean => {
  const expiryTime = timestamp + (hoursToExpire * 60 * 60 * 1000);
  return Date.now() > expiryTime;
};

/**
 * Get start of today in IST (for daily resets)
 */
export const getStartOfTodayIST = (): number => {
  const now = new Date();
  const istDate = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
  istDate.setHours(0, 0, 0, 0);
  return istDate.getTime();
};

/**
 * Get start of current week in IST (for weekly resets)
 */
export const getStartOfWeekIST = (): number => {
  const now = new Date();
  const istDate = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
  const dayOfWeek = istDate.getDay();
  istDate.setDate(istDate.getDate() - dayOfWeek);
  istDate.setHours(0, 0, 0, 0);
  return istDate.getTime();
};