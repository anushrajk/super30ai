import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Navbar } from "@/components/Navbar";
import { useSession } from "@/hooks/useSession";
import { useLead } from "@/hooks/useLead";
import { useFunnelData } from "@/hooks/useFunnelData";
import { useUrgencyValues } from "@/hooks/useUrgencyValues";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Calendar, FileText, Lightbulb, Target, Clock, Star, Users, TrendingDown, IndianRupee } from "lucide-react";
import { Footer } from "@/components/landing/Footer";
import { toast } from "sonner";
import Cal, { getCalApi } from "@calcom/embed-react";

const benefits = [
  { icon: FileText, title: "Complete Audit Walkthrough", description: "We'll review every issue found and explain exactly how to fix them." },
  { icon: Lightbulb, title: "AI Search Visibility Strategy", description: "Learn how to get your brand recommended by AI assistants." },
  { icon: Target, title: "90-Day Growth Roadmap", description: "Get a personalized action plan with priorities and timelines." },
  { icon: CheckCircle, title: "Go / No-Go Recommendation", description: "Honest assessment of whether AI SEO is right for your business." }
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

  // Get data from navigation state or funnel storage
  const leadData = location.state?.leadData || funnelLeadData;
  const auditData = location.state?.auditData || funnelAuditData;
  const competitorData = location.state?.competitorData || funnelCompetitorData;

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
        <title>Book Your AI SEO Strategy Call | The Super 30</title>
        <meta name="description" content="Schedule your free 30-minute AI SEO strategy session." />
      </Helmet>
      <Navbar />
      <main className="min-h-screen bg-muted/30 pt-16 md:pt-20">
        <header className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12">
          <div className="container mx-auto px-4 text-center">
            <Badge className="mb-4 bg-orange-500/10 text-orange-400 border-orange-500/20">Final Step</Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Not a Sales Call. A Business Visibility Review.</h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-6">Book a 30-minute call. Get your audit insights, clear recommendations, and a straight answer.</p>
            <div className="inline-flex items-center gap-3 bg-red-500/10 border border-red-500/20 rounded-full px-5 py-2.5">
              <Clock className="w-5 h-5 text-red-400 animate-pulse" />
              <span className="text-red-400 font-medium text-sm">Only <span className="font-bold text-red-300">{slotsRemaining} slots</span> left today</span>
              <span className="text-slate-500">|</span>
              <span className="font-mono text-red-300 font-bold">{String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}</span>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-5 gap-8 items-start">
            <div className="lg:col-span-2 lg:sticky lg:top-24 space-y-6">
              {/* Audit Summary Card */}
              {auditData && (
                <Card className="border-orange-200 bg-orange-50/50">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <TrendingDown className="w-4 h-4 text-orange-500" />
                      Your Audit Summary
                    </h3>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="bg-white rounded-lg p-2 text-center">
                        <p className="text-muted-foreground text-xs">AI Visibility</p>
                        <p className="font-bold text-orange-600">{auditData.ai_visibility_score}%</p>
                      </div>
                      <div className="bg-white rounded-lg p-2 text-center">
                        <p className="text-muted-foreground text-xs">Issues Found</p>
                        <p className="font-bold text-red-600">{auditData.technical_issues}</p>
                      </div>
                    </div>
                    {competitorData && (
                      <div className="mt-3 p-2 bg-red-100 rounded-lg text-center">
                        <p className="text-xs text-red-700">Estimated Monthly Loss</p>
                        <p className="font-bold text-red-600 flex items-center justify-center gap-1">
                          <IndianRupee className="w-4 h-4" />
                          {formatCurrency(competitorData.estimated_monthly_loss.amount)}
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}

              <h2 className="text-2xl font-bold text-foreground">What You'll Get</h2>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow border-border">
                    <CardContent className="p-4 flex items-start gap-3">
                      <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="w-5 h-5 text-orange-500" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground text-sm mb-0.5">{benefit.title}</h3>
                        <p className="text-muted-foreground text-xs leading-relaxed">{benefit.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3">
              <Card className="overflow-hidden border-border shadow-lg">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-4">
                    <h3 className="font-semibold text-white flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-orange-400" />
                      Select a Time
                    </h3>
                    <p className="text-slate-400 text-xs mt-1">Choose a slot that works best for you</p>
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
