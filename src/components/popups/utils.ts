import { POPUP_EXPIRY_HOURS } from './types';

export const isPopupExpired = (key: string): boolean => {
  const stored = localStorage.getItem(key);
  if (!stored) return true;
  const timestamp = parseInt(stored, 10);
  const expiryTime = timestamp + (POPUP_EXPIRY_HOURS * 60 * 60 * 1000);
  return Date.now() > expiryTime;
};

export const markPopupShown = (key: string) => {
  localStorage.setItem(key, Date.now().toString());
};
