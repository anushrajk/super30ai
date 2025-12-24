export type PopupType = 'callback' | 'quote' | 'exit';

export const POPUP_EXPIRY_HOURS = 24;
export const FIRST_POPUP_DELAY_MS = 15000; // 15 seconds after cookie dismissed
export const BETWEEN_POPUP_DELAY_MS = 45000; // 45 seconds between popups

export interface BasePopupProps {
  open: boolean;
  onClose: () => void;
}

export interface CallbackPopupProps extends BasePopupProps {
  callbackSlots: number;
  weeklyRequests: number;
  onSuccess: () => void;
}

export interface QuotePopupProps extends BasePopupProps {
  onSuccess: () => void;
}

export interface ExitIntentPopupProps extends BasePopupProps {
  exitCountdown: number;
  formatCountdown: (seconds: number) => string;
  onSuccess: () => void;
}
