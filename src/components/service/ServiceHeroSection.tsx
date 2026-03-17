import { useState } from "react";
import { LeadCaptureForm } from "@/components/landing/LeadCaptureForm";
import { Award, ArrowRight, MessageCircle, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EnquiryPopup } from "@/components/EnquiryPopup";

interface TrustSignal {
  icon: LucideIcon;
  text: string;
}

interface ServiceHeroSectionProps {
  badgeIcon: LucideIcon;
  badgeText: string;
  headline: React.ReactNode;
  description: React.ReactNode;
  trustSignals: TrustSignal[];
  credentials: string[];
  onSubmit: (data: { website_url: string; email: string; phone?: string; role?: string; monthly_revenue?: string; full_name?: string; company_name?: string }) => void;
  loading?: boolean;
  formTitle?: string;
  formDescription?: string;
  formBadgeText?: string;
  formButtonText?: string;
  formId?: string;
  formName?: string;
}

export const ServiceHeroSection = ({
  badgeIcon: BadgeIcon,
  badgeText,
  headline,
  description,
  trustSignals,
  credentials,
  onSubmit,
  loading,
}: ServiceHeroSectionProps) => {
  const [showEnquiryPopup, setShowEnquiryPopup] = useState(false);

  return (
    <section className="relative bg-background overflow-hidden min-h-[85vh] md:min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
      </div>

      <div className="container relative mx-auto px-4 py-8 md:py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="md:col-span-1 lg:col-span-7 space-y-4 md:space-y-6">
            <div className="inline-flex items-center gap-2 bg-accent border border-border px-4 py-1.5 rounded-full">
              <BadgeIcon className="w-4 h-4 text-brand" />
              <span className="text-foreground text-sm font-medium">{badgeText}</span>
            </div>

            <div>
              <h1 className="font-bold text-foreground mb-4 md:mb-5">
                {headline}
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
                {description}
              </p>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-col gap-3 py-2">
              {trustSignals.map((signal, index) => (
                <div key={index} className="flex items-center gap-3 group cursor-default">
                  <div className="w-8 h-8 bg-brand-gradient rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <signal.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-medium text-foreground text-sm md:text-base">{signal.text}</span>
                </div>
              ))}
            </div>

            {/* Enquire Now CTA */}
            <div className="pt-2">
              <Button
                variant="outline-brand"
                size="lg"
                onClick={() => setShowEnquiryPopup(true)}
                className="px-6 py-3 h-auto rounded-xl group"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Enquire Now
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Expert credentials - Mobile only */}
            <div className="lg:hidden flex flex-wrap gap-2 pt-2">
              {credentials.map((cred, i) => (
                <span key={i} className="inline-flex items-center gap-1.5 bg-muted text-muted-foreground px-3 py-1.5 rounded-full text-xs font-medium">
                  <Award className="w-3 h-3 text-brand" />
                  {cred}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="md:col-span-1 lg:col-span-5">
            <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
              <LeadCaptureForm onSubmit={onSubmit} loading={loading} />
            </div>

            {/* Expert credentials - Desktop only */}
            <div className="hidden lg:flex flex-wrap gap-2 mt-4 justify-center">
              {credentials.map((cred, i) => (
                <span key={i} className="inline-flex items-center gap-1.5 bg-muted text-muted-foreground px-3 py-1.5 rounded-full text-xs font-medium">
                  <Award className="w-3 h-3 text-brand" />
                  {cred}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <EnquiryPopup open={showEnquiryPopup} onOpenChange={setShowEnquiryPopup} />
    </section>
  );
};
