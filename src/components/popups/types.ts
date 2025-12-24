export type PopupType = 'callback' | 'quote' | 'exit';

export const POPUP_EXPIRY_HOURS = 24;
export const CALLBACK_DELAY_MS = 15000; // 15 seconds after cookie dismissed
export const QUOTE_DELAY_MS = 60000; // 60 seconds after cookie dismissed

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
