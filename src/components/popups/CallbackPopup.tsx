import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, Loader2, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';
import { usePopupValidation, type ValidationRule } from './usePopupValidation';
import { FormError } from './FormError';
import type { CallbackPopupProps } from './types';
import { submitFormToGoogleSheets } from '@/hooks/useFormSubmit';

const validationRules: Record<string, ValidationRule> = {
  name: { required: true, type: 'name' },
  phone: { required: true, type: 'phone' },
  timeSlot: { required: true, type: 'select' },
};

const baseInputClass = "h-11 bg-muted/40 border-0 rounded-xl focus:ring-2 focus:ring-primary/20 placeholder:text-muted-foreground/60";

export const CallbackPopup = ({ 
  open, 
  onClose, 
  callbackSlots, 
  weeklyRequests, 
  onSuccess 
}: CallbackPopupProps) => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', timeSlot: '' });
  
  const { errors, touched, setFieldTouched, validateField, validateAllFields, clearErrors, getInputClassName } = usePopupValidation();

  const handleBlur = (field: string) => {
    setFieldTouched(field);
    validateField(field, form[field as keyof typeof form], validationRules[field]);
  };

  const handleChange = (field: string, value: string) => {
    let processedValue = value;
    if (field === 'phone') {
      // Only allow digits, max 10, must start with 6-9
      processedValue = value.replace(/\D/g, '').slice(0, 10);
      if (processedValue.length > 0 && !/^[6-9]/.test(processedValue)) {
        processedValue = '';
      }
    }
    setForm(prev => ({ ...prev, [field]: processedValue }));
    if (touched[field]) {
      validateField(field, processedValue, validationRules[field]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateAllFields(form, validationRules)) {
      return;
    }

    setIsSubmitting(true);
    try {
      // Submit to Google Sheets
      await submitFormToGoogleSheets({
        form_id: "callback_popup_form",
        form_name: "Schedule a Call Popup",
        page_url: window.location.href,
        trigger_type: "popup",
        data: {
          name: form.name,
          phone: `+91${form.phone}`,
          time_slot: form.timeSlot,
        },
      });
      
      onSuccess();
      toast.success('Callback requested! We\'ll call you soon.');
      onClose();
      setForm({ name: '', phone: '', timeSlot: '' });
      clearErrors();
      navigate('/thank-you', { state: { name: form.name, source: 'callback' } });
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="w-[95vw] max-w-md mx-auto bg-background/95 backdrop-blur-xl border border-border/40 shadow-2xl rounded-2xl p-6 sm:p-8">
        <div className="flex items-center justify-center w-12 h-12 mx-auto rounded-xl bg-primary/10">
          <Phone className="w-6 h-6 text-primary" />
        </div>

        <DialogHeader className="text-center space-y-2">
          <DialogTitle className="text-xl font-semibold tracking-tight">
            Schedule a Call
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            Book a free 15-minute strategy session
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <Input
              placeholder="Your name"
              value={form.name}
              onChange={(e) => handleChange('name', e.target.value)}
              onBlur={() => handleBlur('name')}
              className={getInputClassName('name', baseInputClass)}
            />
            <FormError message={errors.name} show={touched.name} />
          </div>
          
          <div>
            <div className="flex">
              <span className="inline-flex items-center px-3 rounded-l-xl bg-muted/60 text-muted-foreground text-sm font-medium">
                +91
              </span>
              <Input
                placeholder="9876543210"
                value={form.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                onBlur={() => handleBlur('phone')}
                className={getInputClassName('phone', `${baseInputClass} rounded-l-none`)}
              />
            </div>
            <FormError message={errors.phone} show={touched.phone} />
          </div>
          
          <div>
            <Select 
              value={form.timeSlot} 
              onValueChange={(value) => {
                handleChange('timeSlot', value);
                setFieldTouched('timeSlot');
              }}
            >
              <SelectTrigger 
                className={getInputClassName('timeSlot', "h-11 bg-muted/40 border-0 rounded-xl focus:ring-2 focus:ring-primary/20")}
                onBlur={() => handleBlur('timeSlot')}
              >
                <SelectValue placeholder="Preferred time" />
              </SelectTrigger>
              <SelectContent className="rounded-xl">
                <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                <SelectItem value="afternoon">Afternoon (12 PM - 5 PM)</SelectItem>
                <SelectItem value="evening">Evening (5 PM - 8 PM)</SelectItem>
              </SelectContent>
            </Select>
            <FormError message={errors.timeSlot} show={touched.timeSlot} />
          </div>

          <Button 
            type="submit" 
            className="w-full h-11 bg-foreground text-background rounded-xl font-medium hover:bg-foreground/90 transition-all duration-200 group" 
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <>
                Book My Call
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
              </>
            )}
          </Button>
        </form>

        <div className="flex items-center justify-center gap-6 pt-2 text-xs text-muted-foreground/80">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
            {callbackSlots} slots left today
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40" />
            Free • No obligation
          </span>
        </div>
      </DialogContent>
    </Dialog>
  );
};
