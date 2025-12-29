import { forwardRef } from "react";

interface FormErrorProps {
  message?: string;
  show?: boolean;
}

export const FormError = forwardRef<HTMLParagraphElement, FormErrorProps>(
  ({ message, show = true }, ref) => {
    if (!message || !show) return null;
    
    return (
      <p 
        ref={ref}
        className="text-xs text-destructive mt-1 animate-in fade-in-50 slide-in-from-top-1 duration-200"
      >
        {message}
      </p>
    );
  }
);

FormError.displayName = "FormError";
