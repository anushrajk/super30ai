/**
 * Time utilities for IST (Indian Standard Time) formatting
 * IST is UTC+5:30
 * All dates formatted as DD MM YYYY with 12-hour clock
 */

const IST_OFFSET_MS = 5.5 * 60 * 60 * 1000;

/**
 * Get current time in IST as a Date object
 */
const getISTDate = (date: Date = new Date()): Date => {
  // Get UTC time
  const utcTime = date.getTime() + (date.getTimezoneOffset() * 60000);
  // Add IST offset
  return new Date(utcTime + IST_OFFSET_MS);
};

/**
 * Format a date to IST display string
 * Format: DD MM YYYY HH:MM AM/PM IST
 */
export const formatToIST = (date: Date | string | undefined): string => {
  if (!date) return 'N/A';
  
  try {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    
    // Format using Intl for reliable IST conversion
    const formatter = new Intl.DateTimeFormat('en-IN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
      timeZone: 'Asia/Kolkata'
    });
    
    return formatter.format(dateObj) + ' IST';
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
 * Format: HH:MM AM/PM
 */
export const formatTimeShort = (date: Date | string): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  return new Intl.DateTimeFormat('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
    timeZone: 'Asia/Kolkata'
  }).format(dateObj);
};

/**
 * Format date only (no time)
 * Format: DD MM YYYY
 */
export const formatDateOnly = (date: Date | string): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  return new Intl.DateTimeFormat('en-IN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    timeZone: 'Asia/Kolkata'
  }).format(dateObj);
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
 * Returns UTC timestamp for storage/comparison
 */
export const getStartOfTodayIST = (): number => {
  // Get current IST date components
  const now = new Date();
  const istFormatter = new Intl.DateTimeFormat('en-CA', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    timeZone: 'Asia/Kolkata'
  });
  
  // Parse the formatted IST date
  const [year, month, day] = istFormatter.format(now).split('-').map(Number);
  
  // Create a date at midnight IST (in IST time)
  // Then convert back to UTC timestamp
  const midnightIST = new Date(Date.UTC(year, month - 1, day, 0, 0, 0, 0));
  
  // Subtract IST offset to get the actual UTC time when it's midnight in IST
  return midnightIST.getTime() - IST_OFFSET_MS;
};

/**
 * Get start of current week in IST (for weekly resets)
 * Week starts on Sunday
 * Returns UTC timestamp for storage/comparison
 */
export const getStartOfWeekIST = (): number => {
  // Get current IST date
  const now = new Date();
  
  // Get IST date parts
  const istFormatter = new Intl.DateTimeFormat('en-CA', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    timeZone: 'Asia/Kolkata'
  });
  
  const istWeekdayFormatter = new Intl.DateTimeFormat('en-US', {
    weekday: 'short',
    timeZone: 'Asia/Kolkata'
  });
  
  const [year, month, day] = istFormatter.format(now).split('-').map(Number);
  const weekday = istWeekdayFormatter.format(now);
  
  // Calculate day of week (0 = Sunday)
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dayOfWeek = weekdays.indexOf(weekday);
  
  // Calculate start of week
  const startOfWeekDate = new Date(Date.UTC(year, month - 1, day - dayOfWeek, 0, 0, 0, 0));
  
  // Subtract IST offset to get actual UTC time
  return startOfWeekDate.getTime() - IST_OFFSET_MS;
};

/**
 * Get the next Monday on or after a given date
 */
export const getNextMonday = (date: Date): Date => {
  const result = new Date(date);
  const dayOfWeek = result.getDay(); // 0 = Sunday, 1 = Monday, etc.
  
  if (dayOfWeek === 1) {
    // Already Monday, return as is
    return result;
  }
  
  // Calculate days until next Monday
  const daysUntilMonday = dayOfWeek === 0 ? 1 : (8 - dayOfWeek);
  result.setDate(result.getDate() + daysUntilMonday);
  return result;
};

/**
 * Get the next batch start date
 * Logic: If today >= batchDate, calculate new date = today + 14 days, 
 * then find the next Monday
 */
export const getNextBatchStartDate = (batchDate: Date = new Date("2025-01-15T10:00:00+05:30")): Date => {
  const today = new Date();
  
  // Set both to start of day for accurate comparison
  const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const batchStart = new Date(batchDate.getFullYear(), batchDate.getMonth(), batchDate.getDate());
  
  // If batch date is still in the future, use it
  if (batchStart > todayStart) {
    return batchDate;
  }
  
  // Otherwise, calculate new date: today + 14 days, then find next Monday
  const futureDate = new Date(todayStart);
  futureDate.setDate(futureDate.getDate() + 14);
  
  return getNextMonday(futureDate);
};

/**
 * Format batch date for display (e.g., "January 2025")
 */
export const formatBatchMonth = (date: Date): string => {
  return new Intl.DateTimeFormat('en-IN', {
    month: 'long',
    year: 'numeric',
    timeZone: 'Asia/Kolkata'
  }).format(date);
};

/**
 * Format batch date for display (e.g., "13 January 2025")
 */
export const formatBatchFullDate = (date: Date): string => {
  return new Intl.DateTimeFormat('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'Asia/Kolkata'
  }).format(date);
};

/**
 * Get the batch after the next one (for "What if I miss this batch?" messaging)
 * Returns a date ~8 weeks after the current batch date
 */
export const getFollowingBatchDate = (currentBatchDate: Date): Date => {
  const followingDate = new Date(currentBatchDate);
  followingDate.setDate(followingDate.getDate() + 56); // ~8 weeks later
  return getNextMonday(followingDate);
};

/**
 * Format batch date for day of week (e.g., "Monday")
 */
export const formatBatchDayName = (date: Date): string => {
  return new Intl.DateTimeFormat('en-IN', {
    weekday: 'long',
    timeZone: 'Asia/Kolkata'
  }).format(date);
};

/**
 * Format batch date for short month (e.g., "JAN")
 */
export const formatBatchMonthShort = (date: Date): string => {
  return new Intl.DateTimeFormat('en-IN', {
    month: 'short',
    timeZone: 'Asia/Kolkata'
  }).format(date).toUpperCase();
};

/**
 * Get day number from batch date (e.g., 13)
 */
export const getBatchDay = (date: Date): number => {
  return parseInt(new Intl.DateTimeFormat('en-IN', {
    day: 'numeric',
    timeZone: 'Asia/Kolkata'
  }).format(date));
};
