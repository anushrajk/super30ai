interface FormErrorProps {
  message?: string;
  show?: boolean;
}

export const FormError = ({ message, show = true }: FormErrorProps) => {
  if (!message || !show) return null;
  
  return (
    <p className="text-xs text-destructive mt-1 animate-in fade-in-50 slide-in-from-top-1 duration-200">
      {message}
    </p>
  );
};
