import { useState } from 'react';
import { openThankYouPage } from '@/lib/thankYouRedirect';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FileText, Loader2, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';
import { usePopupValidation, type ValidationRule } from './usePopupValidation';
import { FormError } from './FormError';
import type { QuotePopupProps } from './types';
import { submitFormToGoogleSheets } from '@/hooks/useFormSubmit';

const validationRules: Record<string, ValidationRule> = {
  companyName: { required: true, type: 'name' },
  website: { required: true, type: 'url' },
  email: { required: true, type: 'email' },
  budget: { required: true, type: 'select' },
  services: { required: true, type: 'select' },
};

const baseInputClass = "h-11 bg-muted/40 border-0 rounded-xl focus:ring-2 focus:ring-primary/20 placeholder:text-muted-foreground/60";

export const QuotePopup = ({ open, onClose, onSuccess }: QuotePopupProps) => {
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ 
    companyName: '', 
    website: '', 
    email: '', 
    budget: '', 
    services: '' 
  });
  
  const { errors, touched, setFieldTouched, validateField, validateAllFields, clearErrors, getInputClassName } = usePopupValidation();

  const handleBlur = (field: string) => {
    setFieldTouched(field);
    validateField(field, form[field as keyof typeof form], validationRules[field]);
  };

  const handleChange = (field: string, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (touched[field]) {
      validateField(field, value, validationRules[field]);
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
        form_id: "quote_popup_form",
        form_name: "Get Custom Quote Popup",
        page_url: window.location.href,
        trigger_type: "popup",
        data: {
          company_name: form.companyName,
          website: form.website,
          email: form.email,
          budget: form.budget,
          services: form.services,
        },
      });
      
      onSuccess();
      toast.success('Quote request received! Check your email within 24 hours.');
      onClose();
      setForm({ companyName: '', website: '', email: '', budget: '', services: '' });
      clearErrors();
      openThankYouPage({ email: form.email, source: 'quote' });
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
          <FileText className="w-6 h-6 text-primary" />
        </div>

        <DialogHeader className="text-center space-y-2">
          <DialogTitle className="text-xl font-semibold tracking-tight">
            Get a Custom Quote
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            Tailored pricing within 24 hours
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-3 mt-4">
          <div>
            <Input
              placeholder="Company name"
              value={form.companyName}
              onChange={(e) => handleChange('companyName', e.target.value)}
              onBlur={() => handleBlur('companyName')}
              className={getInputClassName('companyName', baseInputClass)}
            />
            <FormError message={errors.companyName} show={touched.companyName} />
          </div>
          
          <div>
            <Input
              placeholder="Website URL"
              value={form.website}
              onChange={(e) => handleChange('website', e.target.value)}
              onBlur={() => handleBlur('website')}
              className={getInputClassName('website', baseInputClass)}
            />
            <FormError message={errors.website} show={touched.website} />
          </div>
          
          <div>
            <Input
              type="email"
              placeholder="Work email"
              value={form.email}
              onChange={(e) => handleChange('email', e.target.value)}
              onBlur={() => handleBlur('email')}
              className={getInputClassName('email', baseInputClass)}
            />
            <FormError message={errors.email} show={touched.email} />
          </div>
          
          <div>
            <Select 
              value={form.budget} 
              onValueChange={(value) => {
                handleChange('budget', value);
                setFieldTouched('budget');
              }}
            >
              <SelectTrigger 
                className={getInputClassName('budget', "h-11 bg-muted/40 border-0 rounded-xl focus:ring-2 focus:ring-primary/20")}
                onBlur={() => handleBlur('budget')}
              >
                <SelectValue placeholder="Monthly budget" />
              </SelectTrigger>
              <SelectContent className="rounded-xl">
                <SelectItem value="25k-50k">₹25,000 - ₹50,000</SelectItem>
                <SelectItem value="50k-1l">₹50,000 - ₹1,00,000</SelectItem>
                <SelectItem value="1l-2l">₹1,00,000 - ₹2,00,000</SelectItem>
                <SelectItem value="2l+">₹2,00,000+</SelectItem>
              </SelectContent>
            </Select>
            <FormError message={errors.budget} show={touched.budget} />
          </div>
          
          <div>
            <Select 
              value={form.services} 
              onValueChange={(value) => {
                handleChange('services', value);
                setFieldTouched('services');
              }}
            >
              <SelectTrigger 
                className={getInputClassName('services', "h-11 bg-muted/40 border-0 rounded-xl focus:ring-2 focus:ring-primary/20")}
                onBlur={() => handleBlur('services')}
              >
                <SelectValue placeholder="Services needed" />
              </SelectTrigger>
              <SelectContent className="rounded-xl">
                <SelectItem value="ai-seo">AI SEO</SelectItem>
                <SelectItem value="performance-ads">Performance Ads</SelectItem>
                <SelectItem value="both">Both</SelectItem>
              </SelectContent>
            </Select>
            <FormError message={errors.services} show={touched.services} />
          </div>

          <Button 
            type="submit" 
            className="w-full h-11 bg-foreground text-background rounded-xl font-medium hover:bg-foreground/90 transition-all duration-200 group mt-2" 
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <>
                Get Quote
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
              </>
            )}
          </Button>
        </form>

        <div className="flex items-center justify-center gap-6 pt-2 text-xs text-muted-foreground/80">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
            No obligation
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40" />
            100% confidential
          </span>
        </div>
      </DialogContent>
    </Dialog>
  );
};
