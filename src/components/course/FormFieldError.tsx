import { AlertCircle } from "lucide-react";

interface FormFieldErrorProps {
  error?: string | null;
}

export const FormFieldError = ({ error }: FormFieldErrorProps) => {
  if (!error) return null;

  return (
    <div className="flex items-center gap-1.5 mt-1.5 text-destructive animate-fade-in">
      <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
      <span className="text-xs font-medium">{error}</span>
    </div>
  );
};
