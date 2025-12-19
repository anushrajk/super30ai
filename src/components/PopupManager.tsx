import { useState, useEffect, useCallback, useRef } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, FileText, Gift, Clock, Users, Shield, CheckCircle2, Loader2 } from 'lucide-react';
import { useLead } from '@/hooks/useLead';
import { useSession } from '@/hooks/useSession';
import { useUrgencyValues } from '@/hooks/useUrgencyValues';
import { useNotificationQueue } from '@/hooks/useNotificationQueue';
import { toast } from 'sonner';

type PopupType = 'callback' | 'quote' | 'exit';

const POPUP_EXPIRY_HOURS = 24;
const CALLBACK_DELAY_MS = 45000; // 45 seconds after cookie dismissed
const QUOTE_DELAY_MS = 90000;    // 90 seconds after cookie dismissed

const isPopupExpired = (key: string): boolean => {
  const stored = localStorage.getItem(key);
  if (!stored) return true;
  const timestamp = parseInt(stored, 10);
  const expiryTime = timestamp + (POPUP_EXPIRY_HOURS * 60 * 60 * 1000);
  return Date.now() > expiryTime;
};

const markPopupShown = (key: string) => {
  localStorage.setItem(key, Date.now().toString());
};

export const PopupManager = () => {
  const [activePopup, setActivePopup] = useState<PopupType | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const popupQueueRef = useRef<PopupType[]>([]);
  const timersRef = useRef<{ callback?: NodeJS.Timeout; quote?: NodeJS.Timeout }>({});

  const { createLead, sendLeadEmail } = useLead();
  const { session } = useSession();
  const { 
    callbackSlots, 
    weeklyRequests, 
    exitCountdown, 
    tickExitCountdown,
    decrementCallbackSlots,
    incrementWeeklyRequests,
    formatCountdown 
  } = useUrgencyValues();
  const { cookieDismissed, canShowNotification, setActiveNotification, activeNotification } = useNotificationQueue();

  // Form States
  const [callbackForm, setCallbackForm] = useState({ name: '', phone: '', timeSlot: '' });
  const [quoteForm, setQuoteForm] = useState({ companyName: '', website: '', email: '', budget: '', services: '' });
  const [exitForm, setExitForm] = useState({ name: '', email: '', phone: '', businessType: '' });

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  // Show next popup from queue
  const showNextPopup = useCallback(() => {
    if (popupQueueRef.current.length === 0) return;
    
    const nextPopup = popupQueueRef.current[0];
    if (canShowNotification(nextPopup)) {
      popupQueueRef.current.shift();
      setActivePopup(nextPopup);
      setActiveNotification(nextPopup);
    }
  }, [canShowNotification, setActiveNotification]);

  // Queue a popup to show
  const queuePopup = useCallback((type: PopupType) => {
    const storageKey = `popup_${type}_shown`;
    if (!isPopupExpired(storageKey) || popupQueueRef.current.includes(type)) return;
    
    if (canShowNotification(type)) {
      setActivePopup(type);
      setActiveNotification(type);
    } else {
      popupQueueRef.current.push(type);
    }
  }, [canShowNotification, setActiveNotification]);

  // Schedule popups after cookie is dismissed
  useEffect(() => {
    if (!cookieDismissed) return;

    // Clear existing timers
    if (timersRef.current.callback) clearTimeout(timersRef.current.callback);
    if (timersRef.current.quote) clearTimeout(timersRef.current.quote);

    // Schedule callback popup
    if (isPopupExpired('popup_callback_shown')) {
      timersRef.current.callback = setTimeout(() => {
        queuePopup('callback');
      }, CALLBACK_DELAY_MS);
    }

    // Schedule quote popup
    if (isPopupExpired('popup_quote_shown')) {
      timersRef.current.quote = setTimeout(() => {
        queuePopup('quote');
      }, QUOTE_DELAY_MS);
    }

    return () => {
      if (timersRef.current.callback) clearTimeout(timersRef.current.callback);
      if (timersRef.current.quote) clearTimeout(timersRef.current.quote);
    };
  }, [cookieDismissed, queuePopup]);

  // Try to show queued popups when notification clears
  useEffect(() => {
    if (activeNotification === null && popupQueueRef.current.length > 0) {
      const timer = setTimeout(showNextPopup, 2000); // Small delay between popups
      return () => clearTimeout(timer);
    }
  }, [activeNotification, showNextPopup]);

  // Exit Intent Detection (Desktop only)
  useEffect(() => {
    if (isMobile || !cookieDismissed) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 10 && isPopupExpired('popup_exit_shown') && canShowNotification('exit')) {
        setActivePopup('exit');
        setActiveNotification('exit');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [isMobile, cookieDismissed, canShowNotification, setActiveNotification]);

  // Exit countdown timer
  useEffect(() => {
    if (activePopup === 'exit' && exitCountdown > 0) {
      const timer = setInterval(tickExitCountdown, 1000);
      return () => clearInterval(timer);
    }
  }, [activePopup, exitCountdown, tickExitCountdown]);

  const handleClose = useCallback((type: PopupType) => {
    markPopupShown(`popup_${type}_shown`);
    setActivePopup(null);
    setActiveNotification(null);
  }, [setActiveNotification]);

  // Submit Handlers
  const handleCallbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!callbackForm.name || !callbackForm.phone || !callbackForm.timeSlot) {
      toast.error('Please fill all fields');
      return;
    }

    setIsSubmitting(true);
    try {
      const leadData = {
        email: `callback_${Date.now()}@popup.temp`,
        website_url: window.location.href,
        phone: callbackForm.phone,
        company_name: callbackForm.name,
        role: `Callback Request - ${callbackForm.timeSlot}`,
        step: 1,
      };

      await createLead(leadData, session?.id || undefined);
      await sendLeadEmail(leadData as any, session, 'popup_callback');
      
      decrementCallbackSlots();
      toast.success('Callback requested! We\'ll call you soon.');
      handleClose('callback');
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleQuoteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!quoteForm.companyName || !quoteForm.website || !quoteForm.email || !quoteForm.budget || !quoteForm.services) {
      toast.error('Please fill all fields');
      return;
    }

    setIsSubmitting(true);
    try {
      const leadData = {
        email: quoteForm.email,
        website_url: quoteForm.website,
        company_name: quoteForm.companyName,
        monthly_revenue: quoteForm.budget,
        role: `Quote Request - ${quoteForm.services}`,
        step: 1,
      };

      await createLead(leadData, session?.id || undefined);
      await sendLeadEmail(leadData as any, session, 'popup_quote');
      
      incrementWeeklyRequests();
      toast.success('Quote request received! Check your email within 24 hours.');
      handleClose('quote');
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleExitSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!exitForm.name || !exitForm.email || !exitForm.phone || !exitForm.businessType) {
      toast.error('Please fill all fields');
      return;
    }

    setIsSubmitting(true);
    try {
      const leadData = {
        email: exitForm.email,
        website_url: window.location.href,
        phone: exitForm.phone,
        company_name: exitForm.name,
        role: `Free Marketing Plan - ${exitForm.businessType}`,
        step: 1,
      };

      await createLead(leadData, session?.id || undefined);
      await sendLeadEmail(leadData as any, session, 'popup_exit_marketing_plan');
      
      toast.success('Your FREE Marketing Plan is on its way!');
      handleClose('exit');
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Popup 1: Schedule a Callback */}
      <Dialog open={activePopup === 'callback'} onOpenChange={() => handleClose('callback')}>
        <DialogContent className="w-[95vw] max-w-md mx-auto border-2 border-primary/20 bg-gradient-to-br from-background via-background to-primary/5">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <span className="bg-destructive text-destructive-foreground text-xs font-bold px-4 py-1.5 rounded-full animate-pulse">
              🔥 LIMITED SLOTS TODAY
            </span>
          </div>

          <div className="flex items-center justify-center w-16 h-16 mx-auto mt-4 rounded-full bg-primary/10">
            <Phone className="w-8 h-8 text-primary animate-pulse" />
          </div>

          <DialogHeader className="text-center">
            <DialogTitle className="text-2xl font-bold">Still Thinking? Let's Talk!</DialogTitle>
            <DialogDescription className="text-base">
              Get a FREE 15-min strategy call with our growth expert
            </DialogDescription>
          </DialogHeader>

          <div className="text-center py-2">
            <p className="text-sm font-medium text-primary">
              Worth ₹25,000 • Absolutely FREE • No Strings Attached
            </p>
          </div>

          <form onSubmit={handleCallbackSubmit} className="space-y-4">
            <Input
              placeholder="Your Name"
              value={callbackForm.name}
              onChange={(e) => setCallbackForm(prev => ({ ...prev, name: e.target.value }))}
              className="h-12"
            />
            <div className="flex">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted text-muted-foreground text-sm">
                +91
              </span>
              <Input
                placeholder="Phone Number"
                value={callbackForm.phone}
                onChange={(e) => setCallbackForm(prev => ({ ...prev, phone: e.target.value.replace(/\D/g, '').slice(0, 10) }))}
                className="rounded-l-none h-12"
              />
            </div>
            <Select value={callbackForm.timeSlot} onValueChange={(value) => setCallbackForm(prev => ({ ...prev, timeSlot: value }))}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Preferred Time Slot" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                <SelectItem value="afternoon">Afternoon (12 PM - 5 PM)</SelectItem>
                <SelectItem value="evening">Evening (5 PM - 8 PM)</SelectItem>
              </SelectContent>
            </Select>

            <Button type="submit" className="w-full h-12 text-base font-semibold" disabled={isSubmitting}>
              {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : <Phone className="w-5 h-5 mr-2" />}
              Request My Free Callback
            </Button>
          </form>

          <div className="flex items-center justify-center gap-4 pt-2 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> Only {callbackSlots} slots left!</span>
            <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {weeklyRequests} requests this week</span>
          </div>
        </DialogContent>
      </Dialog>

      {/* Popup 2: Request a Quote */}
      <Dialog open={activePopup === 'quote'} onOpenChange={() => handleClose('quote')}>
        <DialogContent className="w-[95vw] max-w-md mx-auto border-2 border-primary/20 bg-gradient-to-br from-background via-background to-accent/5">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <span className="bg-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full">
              💰 CUSTOM PRICING INSIDE
            </span>
          </div>

          <div className="flex items-center justify-center w-16 h-16 mx-auto mt-4 rounded-full bg-accent/10">
            <FileText className="w-8 h-8 text-primary" />
          </div>

          <DialogHeader className="text-center">
            <DialogTitle className="text-2xl font-bold">Curious About Pricing?</DialogTitle>
            <DialogDescription className="text-base">
              Get a tailored proposal within 24 hours – no hidden costs
            </DialogDescription>
          </DialogHeader>

          <div className="text-center py-2">
            <p className="text-sm font-medium text-muted-foreground">
              Trusted by 300+ brands • Transparent pricing • Flexible plans
            </p>
          </div>

          <form onSubmit={handleQuoteSubmit} className="space-y-3">
            <Input
              placeholder="Company Name"
              value={quoteForm.companyName}
              onChange={(e) => setQuoteForm(prev => ({ ...prev, companyName: e.target.value }))}
              className="h-11"
            />
            <Input
              placeholder="Website URL"
              value={quoteForm.website}
              onChange={(e) => setQuoteForm(prev => ({ ...prev, website: e.target.value }))}
              className="h-11"
            />
            <Input
              type="email"
              placeholder="Work Email"
              value={quoteForm.email}
              onChange={(e) => setQuoteForm(prev => ({ ...prev, email: e.target.value }))}
              className="h-11"
            />
            <Select value={quoteForm.budget} onValueChange={(value) => setQuoteForm(prev => ({ ...prev, budget: value }))}>
              <SelectTrigger className="h-11">
                <SelectValue placeholder="Monthly Budget" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="25k-50k">₹25,000 - ₹50,000</SelectItem>
                <SelectItem value="50k-1l">₹50,000 - ₹1,00,000</SelectItem>
                <SelectItem value="1l-2l">₹1,00,000 - ₹2,00,000</SelectItem>
                <SelectItem value="2l+">₹2,00,000+</SelectItem>
              </SelectContent>
            </Select>
            <Select value={quoteForm.services} onValueChange={(value) => setQuoteForm(prev => ({ ...prev, services: value }))}>
              <SelectTrigger className="h-11">
                <SelectValue placeholder="Services Interested In" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ai-seo">AI SEO</SelectItem>
                <SelectItem value="performance-ads">Performance Ads</SelectItem>
                <SelectItem value="both">Both</SelectItem>
              </SelectContent>
            </Select>

            <Button type="submit" className="w-full h-12 text-base font-semibold" disabled={isSubmitting}>
              {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : <FileText className="w-5 h-5 mr-2" />}
              Get My Custom Quote
            </Button>
          </form>

          <div className="flex items-center justify-center gap-4 pt-2 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> No obligation</span>
            <span className="flex items-center gap-1"><Shield className="w-3 h-3" /> 100% confidential</span>
          </div>
        </DialogContent>
      </Dialog>

      {/* Popup 3: Exit Intent - Free Marketing Plan */}
      <Dialog open={activePopup === 'exit'} onOpenChange={() => handleClose('exit')}>
        <DialogContent className="w-[95vw] max-w-lg mx-auto border-2 border-destructive/30 bg-gradient-to-br from-background via-background to-destructive/5">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <span className="bg-destructive text-destructive-foreground text-xs font-bold px-4 py-1.5 rounded-full animate-pulse">
              🎁 WAIT! DON'T LEAVE YET
            </span>
          </div>

          <div className="flex items-center justify-center w-20 h-20 mx-auto mt-4 rounded-full bg-primary/10">
            <Gift className="w-10 h-10 text-primary" />
          </div>

          <DialogHeader className="text-center">
            <DialogTitle className="text-2xl font-bold">Before You Go...</DialogTitle>
            <p className="text-xl font-bold text-primary mt-2">Grab Your FREE Marketing Roadmap</p>
            <DialogDescription className="text-base">
              A personalized 30-day action plan to 3X your online visibility
            </DialogDescription>
          </DialogHeader>

          <div className="flex items-center justify-center gap-4 py-2">
            <span className="text-sm font-semibold text-destructive">Worth ₹50,000</span>
            <span className="text-sm font-medium">•</span>
            <span className="text-sm font-semibold text-primary">
              Offer expires in {formatCountdown(exitCountdown)}
            </span>
          </div>

          <form onSubmit={handleExitSubmit} className="space-y-3">
            <Input
              placeholder="Your Name"
              value={exitForm.name}
              onChange={(e) => setExitForm(prev => ({ ...prev, name: e.target.value }))}
              className="h-12"
            />
            <Input
              type="email"
              placeholder="Email Address"
              value={exitForm.email}
              onChange={(e) => setExitForm(prev => ({ ...prev, email: e.target.value }))}
              className="h-12"
            />
            <div className="flex">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted text-muted-foreground text-sm">
                +91
              </span>
              <Input
                placeholder="Phone Number"
                value={exitForm.phone}
                onChange={(e) => setExitForm(prev => ({ ...prev, phone: e.target.value.replace(/\D/g, '').slice(0, 10) }))}
                className="rounded-l-none h-12"
              />
            </div>
            <Select value={exitForm.businessType} onValueChange={(value) => setExitForm(prev => ({ ...prev, businessType: value }))}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Business Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ecommerce">E-commerce</SelectItem>
                <SelectItem value="saas">SaaS</SelectItem>
                <SelectItem value="service">Service Business</SelectItem>
                <SelectItem value="local">Local Business</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>

            <Button type="submit" className="w-full h-12 text-base font-semibold bg-gradient-to-r from-destructive to-primary hover:opacity-90" disabled={isSubmitting}>
              {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : <Gift className="w-5 h-5 mr-2" />}
              Get My FREE Marketing Plan
            </Button>
          </form>

          <div className="flex items-center justify-center gap-4 pt-2 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> Instant download</span>
            <span className="flex items-center gap-1"><Shield className="w-3 h-3" /> No spam, ever</span>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
