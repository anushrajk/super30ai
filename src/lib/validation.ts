/**
 * Shared validation utilities
 */

/**
 * Validate URL format
 */
export const validateUrl = (url: string): boolean => {
  if (!url) return false;
  
  // Add protocol if missing for validation
  let testUrl = url;
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    testUrl = `https://${url}`;
  }
  
  try {
    const urlObj = new URL(testUrl);
    return urlObj.hostname.includes('.');
  } catch {
    return false;
  }
};

/**
 * Validate email format
 */
export const validateEmail = (email: string): boolean => {
  if (!email) return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
};

/**
 * Validate phone number (10 digits for Indian format, starting with 6/7/8/9)
 */
export const validatePhone = (phone: string): boolean => {
  if (!phone) return false;
  const digitsOnly = phone.replace(/\D/g, '');
  const phoneRegex = /^[6-9]\d{9}$/;
  return phoneRegex.test(digitsOnly);
};

/**
 * Format phone number for display
 */
export const formatPhone = (phone: string): string => {
  const digitsOnly = phone.replace(/\D/g, '').slice(0, 10);
  
  if (digitsOnly.length <= 5) {
    return digitsOnly;
  }
  
  return `${digitsOnly.slice(0, 5)} ${digitsOnly.slice(5)}`;
};

/**
 * Sanitize text input (remove dangerous characters)
 */
export const sanitizeInput = (input: string): string => {
  if (!input) return '';
  
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .slice(0, 1000); // Limit length
};

/**
 * Validate message length
 */
export const validateMessage = (message: string, minLength = 10, maxLength = 1000): boolean => {
  if (!message) return false;
  const trimmed = message.trim();
  return trimmed.length >= minLength && trimmed.length <= maxLength;
};

/**
 * Validate name (non-empty, reasonable length)
 */
export const validateName = (name: string): boolean => {
  if (!name) return false;
  const trimmed = name.trim();
  return trimmed.length >= 2 && trimmed.length <= 100;
};

/**
 * Normalize URL (add https if missing)
 */
export const normalizeUrl = (url: string): string => {
  if (!url) return '';
  
  const trimmed = url.trim().toLowerCase();
  
  if (!trimmed.startsWith('http://') && !trimmed.startsWith('https://')) {
    return `https://${trimmed}`;
  }
  
  return trimmed;
};

/**
 * Extract domain from URL
 */
export const extractDomain = (url: string): string => {
  try {
    const normalized = normalizeUrl(url);
    const urlObj = new URL(normalized);
    return urlObj.hostname.replace(/^www\./, '');
  } catch {
    return url;
  }
};