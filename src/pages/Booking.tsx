import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { useSession } from "@/hooks/useSession";
import { useLead } from "@/hooks/useLead";
import { useFunnelData } from "@/hooks/useFunnelData";
import { useUrgencyValues } from "@/hooks/useUrgencyValues";
import { Card, CardContent } from "@/components/ui/card";
import { BentoCard, BentoIcon, BentoBadge } from "@/components/ui/bento-grid";
import { CheckCircle, Calendar, FileText, Lightbulb, Target, Clock, TrendingDown, IndianRupee, BarChart3, TrendingUp, Sparkles } from "lucide-react";
import { Footer } from "@/components/landing/Footer";
import { PlatformLogo } from "@/components/performance/PlatformLogos";
import { toast } from "sonner";
import Cal, { getCalApi } from "@calcom/embed-react";

const seoBenefits = [
  { icon: FileText, title: "Complete Audit Walkthrough", description: "We'll review every issue found and explain exactly how to fix them." },
  { icon: Lightbulb, title: "AI Search Visibility Strategy", description: "Learn how to get your brand recommended by AI assistants." },
  { icon: Target, title: "90-Day Growth Roadmap", description: "Get a personalized action plan with priorities and timelines." },
  { icon: CheckCircle, title: "Go / No-Go Recommendation", description: "Honest assessment of whether AI SEO is right for your business." }
];

const pmBenefits = [
  { icon: BarChart3, title: "Complete Ads Account Audit", description: "Full analysis of your current campaigns and ad performance." },
  { icon: Target, title: "Platform Strategy Review", description: "Recommendations for Google, Meta, LinkedIn & more." },
  { icon: TrendingUp, title: "ROI Projections & Forecasts", description: "See potential revenue impact and growth opportunities." },
  { icon: CheckCircle, title: "Quick Wins Identification", description: "Immediate optimizations for better performance." }
];

const Booking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { session, updateCurrentPage } = useSession();
  const { lead, getLead, updateLead, sendLeadEmail } = useLead();
  const { slotsRemaining, decrementSlots } = useUrgencyValues();
  const { leadData: funnelLeadData, auditData: funnelAuditData, competitorData: funnelCompetitorData, setBookingData } = useFunnelData();
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  // Get service type and data from navigation state or funnel storage
  const service = location.state?.service || "seo";
  const isPM = service === "pm";
  const performanceAuditData = location.state?.performanceAuditData;
  const formData = location.state?.formData;
  
  const leadData = location.state?.leadData || funnelLeadData;
  const auditData = location.state?.auditData || funnelAuditData;
  const competitorData = location.state?.competitorData || funnelCompetitorData;
  
  const benefits = isPM ? pmBenefits : seoBenefits;

  useEffect(() => {
    const TIMER_KEY = 'booking_countdown_end';
    const TIMER_DURATION = 2.5 * 60 * 60 * 1000;
    let endTime = localStorage.getItem(TIMER_KEY);
    if (!endTime || parseInt(endTime) < Date.now()) {
      endTime = String(Date.now() + TIMER_DURATION);
      localStorage.setItem(TIMER_KEY, endTime);
    }
    const updateTimer = () => {
      const remaining = parseInt(endTime!) - Date.now();
      if (remaining <= 0) {
        localStorage.setItem(TIMER_KEY, String(Date.now() + TIMER_DURATION));
        setTimeLeft({ hours: 2, minutes: 30, seconds: 0 });
        return;
      }
      setTimeLeft({
        hours: Math.floor(remaining / (1000 * 60 * 60)),
        minutes: Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((remaining % (1000 * 60)) / 1000)
      });
    };
    updateTimer();
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    updateCurrentPage();
    const leadId = location.state?.leadId || localStorage.getItem('seo_lead_id');
    if (leadId) getLead(leadId);
  }, []);

  const formatTime = (isoString: string | undefined) => {
    if (!isoString) return null;
    try {
      return new Date(isoString).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true });
    } catch { return null; }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount);
  };

  useEffect(() => {
    (async () => {
      const cal = await getCalApi();
      cal("on", {
        action: "bookingSuccessful",
        callback: async (e: { detail: { data: any } }) => {
          const bookingData = e.detail.data;
          setBookingConfirmed(true);
          decrementSlots();
          
          const leadId = location.state?.leadId || localStorage.getItem('seo_lead_id');
          if (leadId && session && lead) {
            updateLead(leadId, { step: 3 }, session?.id).catch(console.error);
            sendLeadEmail({ ...lead, step: 3 }, session, "Step 3 - Consultation Booked").catch(console.error);
          }
          
          const bookingInfo = {
            date: bookingData?.startTime,
            startTime: formatTime(bookingData?.startTime) || '',
            endTime: formatTime(bookingData?.endTime),
            meetingLink: bookingData?.metadata?.videoCallUrl || bookingData?.meetingUrl || bookingData?.location,
            attendeeName: bookingData?.attendees?.[0]?.name,
            attendeeEmail: bookingData?.attendees?.[0]?.email
          };
          setBookingData(bookingInfo);
          
          toast.success("Consultation booked successfully!");
          navigate("/thank-you", {
            state: {
              name: bookingData?.attendees?.[0]?.name || leadData?.email?.split('@')[0],
              email: bookingData?.attendees?.[0]?.email || leadData?.email,
              phone: leadData?.phone,
              bookingDate: bookingData?.startTime,
              startTime: formatTime(bookingData?.startTime),
              endTime: formatTime(bookingData?.endTime),
              meetingLink: bookingData?.metadata?.videoCallUrl || bookingData?.meetingUrl,
              source: "booking_calendar",
              leadData,
              auditData,
              competitorData
            }
          });
        },
      });
    })();
  }, [navigate, session, lead, decrementSlots, leadData, auditData, competitorData]);

  return (
    <>
      <Helmet>
        <title>{isPM ? "Book Your Ads Strategy Call" : "Book Your AI SEO Strategy Call"} | The Super 30</title>
        <meta name="description" content={isPM ? "Schedule your free 30-minute ads strategy session. Get personalized ROI projections and quick wins." : "Schedule your free 30-minute AI SEO strategy session. Get your audit walkthrough and 90-day growth roadmap."} />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://thesuper30.ai/booking" />
      </Helmet>
      <Navbar />
      <main className="min-h-screen bg-background pt-16 md:pt-20">
        {/* Hero Header */}
        <header className="relative bg-[#0a0a0a] py-8 md:py-12 overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-br from-brand/10 via-transparent to-transparent" />
          </div>
          
          {/* Floating elements */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-brand/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-brand/10 rounded-full blur-3xl" />
          
          <div className="container relative mx-auto px-3 md:px-4 text-center">
            <BentoBadge className="mb-3 md:mb-4 text-xs sm:text-sm">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              Final Step
            </BentoBadge>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">
              {isPM ? "Your Ad Strategy Session Awaits." : "Not a Sales Call. A Business Visibility Review."}
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-slate-400 max-w-2xl mx-auto mb-4 md:mb-6 px-2">
              {isPM 
                ? "Book a 30-minute call to discuss your custom ad strategy and ROI projections."
                : "Book a 30-minute call. Get your audit insights, clear recommendations, and a straight answer."
              }
            </p>
            {formData?.preferred_platforms && (
              <div className="flex justify-center gap-2 mb-3 md:mb-4 flex-wrap">
                {formData.preferred_platforms.map((platform: string) => (
                  <PlatformLogo key={platform} platform={platform} size="sm" />
                ))}
              </div>
            )}
            <div className="inline-flex items-center gap-2 sm:gap-3 bg-destructive/10 border border-destructive/20 rounded-full px-3 sm:px-5 py-2">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-destructive animate-pulse" />
              <span className="text-destructive font-medium text-xs sm:text-sm">Only <span className="font-bold">{slotsRemaining} slots</span> left today</span>
              <span className="text-slate-500 hidden sm:inline">|</span>
              <span className="font-mono text-destructive font-bold text-xs sm:text-sm">{String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}</span>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-3 md:px-4 py-6 md:py-12">
          <div className="grid lg:grid-cols-5 gap-4 md:gap-8 items-start">
            <div className="lg:col-span-2 lg:sticky lg:top-24 space-y-4 md:space-y-6">
              {/* SEO Audit Summary Card */}
              {!isPM && auditData && (
                <BentoCard className="border-brand/30 bg-brand/5">
                  <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2 text-sm sm:text-base">
                    <BentoIcon size="sm">
                      <TrendingDown className="w-4 h-4 text-brand" />
                    </BentoIcon>
                    Your Audit Summary
                  </h3>
                  <div className="grid grid-cols-2 gap-2 sm:gap-3 text-sm">
                    <div className="bento-card p-2 sm:p-3 text-center">
                      <p className="text-muted-foreground text-xs">AI Visibility</p>
                      <p className="font-bold text-brand text-lg sm:text-xl">{auditData.ai_visibility_score}%</p>
                    </div>
                    <div className="bento-card p-2 sm:p-3 text-center">
                      <p className="text-muted-foreground text-xs">Issues Found</p>
                      <p className="font-bold text-destructive text-lg sm:text-xl">{auditData.technical_issues}</p>
                    </div>
                  </div>
                  {competitorData && (
                    <div className="mt-3 p-2 sm:p-3 bg-destructive/10 rounded-lg text-center">
                      <p className="text-xs text-destructive">Estimated Monthly Loss</p>
                      <p className="font-bold text-destructive flex items-center justify-center gap-1 text-base sm:text-lg">
                        <IndianRupee className="w-4 h-4" />
                        {formatCurrency(competitorData.estimated_monthly_loss.amount)}
                      </p>
                    </div>
                  )}
                </BentoCard>
              )}

              {/* PM Audit Summary Card */}
              {isPM && performanceAuditData && (
                <BentoCard className="border-blue-500/30 bg-blue-500/5">
                  <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2 text-sm sm:text-base">
                    <BentoIcon size="sm">
                      <BarChart3 className="w-4 h-4 text-blue-500" />
                    </BentoIcon>
                    Your Ad Opportunity Report
                  </h3>
                  <div className="grid grid-cols-2 gap-2 sm:gap-3 text-sm">
                    <div className="bento-card p-2 sm:p-3 text-center">
                      <p className="text-muted-foreground text-xs">Opportunity Score</p>
                      <p className="font-bold text-blue-500 text-lg sm:text-xl">{performanceAuditData.opportunity_score}%</p>
                    </div>
                    <div className="bento-card p-2 sm:p-3 text-center">
                      <p className="text-muted-foreground text-xs">Expected ROI</p>
                      <p className="font-bold text-green-500 text-lg sm:text-xl">{performanceAuditData.expected_roi?.multiplier || 3}x</p>
                    </div>
                  </div>
                  {formData?.preferred_platforms && (
                    <div className="mt-3">
                      <p className="text-xs text-muted-foreground mb-2">Platforms</p>
                      <div className="flex flex-wrap gap-1">
                        {formData.preferred_platforms.map((platform: string) => (
                          <PlatformLogo key={platform} platform={platform} size="sm" />
                        ))}
                      </div>
                    </div>
                  )}
                </BentoCard>
              )}

              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">What You'll Get</h2>
              <div className="space-y-2 sm:space-y-3">
                {benefits.map((benefit, index) => (
                  <BentoCard key={index} className="group p-3 sm:p-4">
                    <div className="flex items-start gap-3">
                      <BentoIcon size="sm" className="flex-shrink-0">
                        <benefit.icon className="w-4 h-4 sm:w-5 sm:h-5 text-brand group-hover:text-white transition-colors" />
                      </BentoIcon>
                      <div>
                        <h3 className="font-semibold text-foreground text-sm sm:text-base mb-0.5 group-hover:text-brand transition-colors">{benefit.title}</h3>
                        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  </BentoCard>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3">
              <Card className="overflow-hidden border-border shadow-lg">
                <CardContent className="p-0">
                  <div className="bg-[#0a0a0a] p-3 sm:p-4">
                    <h3 className="font-semibold text-white flex items-center gap-2 text-sm sm:text-base">
                      <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-brand" />
                      Select a Time
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm mt-1">Choose a slot that works best for you</p>
                  </div>
                  <Cal calLink="thesuper-30-ehlmd6/30min" style={{ width: "100%", height: "480px", overflow: "hidden" }} config={{ layout: "month_view" }} />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Booking;
