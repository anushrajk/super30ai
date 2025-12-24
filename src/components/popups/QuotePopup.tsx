import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FileText, Loader2, ArrowRight } from 'lucide-react';
import { useLead } from '@/hooks/useLead';
import { useSession } from '@/hooks/useSession';
import { toast } from 'sonner';
import type { QuotePopupProps } from './types';

export const QuotePopup = ({ open, onClose, onSuccess }: QuotePopupProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ 
    companyName: '', 
    website: '', 
    email: '', 
    budget: '', 
    services: '' 
  });
  
  const { createLead, sendLeadEmail } = useLead();
  const { session } = useSession();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.companyName || !form.website || !form.email || !form.budget || !form.services) {
      toast.error('Please fill all fields');
      return;
    }

    setIsSubmitting(true);
    try {
      const leadData = {
        email: form.email,
        website_url: form.website,
        company_name: form.companyName,
        monthly_revenue: form.budget,
        role: `Quote Request - ${form.services}`,
        step: 1,
      };

      await createLead(leadData, session?.id || undefined);
      await sendLeadEmail(leadData as any, session, 'popup_quote');
      
      onSuccess();
      toast.success('Quote request received! Check your email within 24 hours.');
      onClose();
      setForm({ companyName: '', website: '', email: '', budget: '', services: '' });
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="w-[95vw] max-w-md mx-auto bg-background/95 backdrop-blur-xl border border-border/40 shadow-2xl rounded-2xl p-6 sm:p-8">
        {/* Modern icon treatment */}
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
          <Input
            placeholder="Company name"
            value={form.companyName}
            onChange={(e) => setForm(prev => ({ ...prev, companyName: e.target.value }))}
            className="h-11 bg-muted/40 border-0 rounded-xl focus:ring-2 focus:ring-primary/20 placeholder:text-muted-foreground/60"
          />
          
          <Input
            placeholder="Website URL"
            value={form.website}
            onChange={(e) => setForm(prev => ({ ...prev, website: e.target.value }))}
            className="h-11 bg-muted/40 border-0 rounded-xl focus:ring-2 focus:ring-primary/20 placeholder:text-muted-foreground/60"
          />
          
          <Input
            type="email"
            placeholder="Work email"
            value={form.email}
            onChange={(e) => setForm(prev => ({ ...prev, email: e.target.value }))}
            className="h-11 bg-muted/40 border-0 rounded-xl focus:ring-2 focus:ring-primary/20 placeholder:text-muted-foreground/60"
          />
          
          <Select value={form.budget} onValueChange={(value) => setForm(prev => ({ ...prev, budget: value }))}>
            <SelectTrigger className="h-11 bg-muted/40 border-0 rounded-xl focus:ring-2 focus:ring-primary/20">
              <SelectValue placeholder="Monthly budget" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="25k-50k">₹25,000 - ₹50,000</SelectItem>
              <SelectItem value="50k-1l">₹50,000 - ₹1,00,000</SelectItem>
              <SelectItem value="1l-2l">₹1,00,000 - ₹2,00,000</SelectItem>
              <SelectItem value="2l+">₹2,00,000+</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={form.services} onValueChange={(value) => setForm(prev => ({ ...prev, services: value }))}>
            <SelectTrigger className="h-11 bg-muted/40 border-0 rounded-xl focus:ring-2 focus:ring-primary/20">
              <SelectValue placeholder="Services needed" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="ai-seo">AI SEO</SelectItem>
              <SelectItem value="performance-ads">Performance Ads</SelectItem>
              <SelectItem value="both">Both</SelectItem>
            </SelectContent>
          </Select>

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
