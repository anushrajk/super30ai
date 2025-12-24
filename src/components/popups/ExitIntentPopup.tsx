import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Sparkles, Loader2, ArrowRight } from 'lucide-react';
import { useLead } from '@/hooks/useLead';
import { useSession } from '@/hooks/useSession';
import { toast } from 'sonner';
import type { ExitIntentPopupProps } from './types';

export const ExitIntentPopup = ({ 
  open, 
  onClose, 
  exitCountdown, 
  formatCountdown, 
  onSuccess 
}: ExitIntentPopupProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ 
    name: '', 
    email: '', 
    phone: '', 
    businessType: '' 
  });
  
  const { createLead, sendLeadEmail } = useLead();
  const { session } = useSession();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.businessType) {
      toast.error('Please fill all fields');
      return;
    }

    setIsSubmitting(true);
    try {
      const leadData = {
        email: form.email,
        website_url: window.location.href,
        phone: form.phone,
        company_name: form.name,
        role: `Free Marketing Plan - ${form.businessType}`,
        step: 1,
      };

      await createLead(leadData, session?.id || undefined);
      await sendLeadEmail(leadData as any, session, 'popup_exit_marketing_plan');
      
      onSuccess();
      toast.success('Your FREE Marketing Plan is on its way!');
      onClose();
      setForm({ name: '', email: '', phone: '', businessType: '' });
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="w-[95vw] max-w-lg mx-auto bg-background/95 backdrop-blur-xl border border-border/40 shadow-2xl rounded-2xl p-6 sm:p-8">
        {/* Modern icon treatment */}
        <div className="flex items-center justify-center w-12 h-12 mx-auto rounded-xl bg-primary/10">
          <Sparkles className="w-6 h-6 text-primary" />
        </div>

        <DialogHeader className="text-center space-y-2">
          <DialogTitle className="text-xl font-semibold tracking-tight">
            Before you go...
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            Get your personalized 30-day marketing roadmap
          </DialogDescription>
        </DialogHeader>

        {/* Value card */}
        <div className="bg-muted/30 rounded-xl p-4 text-center">
          <p className="text-sm text-muted-foreground">
            A personalized action plan to <span className="text-foreground font-medium">3X your online visibility</span>
          </p>
          {exitCountdown > 0 && (
            <p className="text-xs text-primary mt-2 font-medium">
              Offer expires in {formatCountdown(exitCountdown)}
            </p>
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-3 mt-2">
          <Input
            placeholder="Your name"
            value={form.name}
            onChange={(e) => setForm(prev => ({ ...prev, name: e.target.value }))}
            className="h-11 bg-muted/40 border-0 rounded-xl focus:ring-2 focus:ring-primary/20 placeholder:text-muted-foreground/60"
          />
          
          <Input
            type="email"
            placeholder="Email address"
            value={form.email}
            onChange={(e) => setForm(prev => ({ ...prev, email: e.target.value }))}
            className="h-11 bg-muted/40 border-0 rounded-xl focus:ring-2 focus:ring-primary/20 placeholder:text-muted-foreground/60"
          />
          
          <div className="flex">
            <span className="inline-flex items-center px-3 rounded-l-xl bg-muted/60 text-muted-foreground text-sm font-medium">
              +91
            </span>
            <Input
              placeholder="Phone number"
              value={form.phone}
              onChange={(e) => setForm(prev => ({ ...prev, phone: e.target.value.replace(/\D/g, '').slice(0, 10) }))}
              className="h-11 bg-muted/40 border-0 rounded-l-none rounded-r-xl focus:ring-2 focus:ring-primary/20 placeholder:text-muted-foreground/60"
            />
          </div>
          
          <Select value={form.businessType} onValueChange={(value) => setForm(prev => ({ ...prev, businessType: value }))}>
            <SelectTrigger className="h-11 bg-muted/40 border-0 rounded-xl focus:ring-2 focus:ring-primary/20">
              <SelectValue placeholder="Business type" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="ecommerce">E-commerce</SelectItem>
              <SelectItem value="saas">SaaS</SelectItem>
              <SelectItem value="service">Service Business</SelectItem>
              <SelectItem value="local">Local Business</SelectItem>
              <SelectItem value="other">Other</SelectItem>
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
                Claim Free Plan
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
              </>
            )}
          </Button>
        </form>

        <div className="flex items-center justify-center gap-6 pt-2 text-xs text-muted-foreground/80">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
            Instant download
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40" />
            No spam, ever
          </span>
        </div>
      </DialogContent>
    </Dialog>
  );
};
