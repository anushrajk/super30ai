import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useSession } from "@/hooks/useSession";
import { useLead } from "@/hooks/useLead";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Calendar, FileText, Lightbulb, Target } from "lucide-react";
import { Footer } from "@/components/landing/Footer";
import { toast } from "sonner";
import Cal, { getCalApi } from "@calcom/embed-react";

const benefits = [
  {
    icon: FileText,
    title: "Complete Audit Walkthrough",
    description: "We'll review every issue found and explain exactly how to fix them."
  },
  {
    icon: Lightbulb,
    title: "AI Search Visibility Strategy",
    description: "Learn how to get your brand recommended by AI assistants."
  },
  {
    icon: Target,
    title: "90-Day Growth Roadmap",
    description: "Get a personalized action plan with priorities and timelines."
  },
  {
    icon: CheckCircle,
    title: "Go / No-Go Recommendation",
    description: "Honest assessment of whether AI SEO is right for your business."
  }
];

const Booking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { session, updateCurrentPage } = useSession();
  const { lead, getLead, updateLead, sendLeadEmail } = useLead();
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  useEffect(() => {
    updateCurrentPage();
    
    const leadId = location.state?.leadId || localStorage.getItem('seo_lead_id');
    
    if (leadId) {
      getLead(leadId);
    } else {
      navigate("/");
    }
  }, []);

  // Cal.com embed event listener
  useEffect(() => {
    (async () => {
      const cal = await getCalApi();
      cal("on", {
        action: "bookingSuccessful",
        callback: async (e: { detail: { data: any } }) => {
          const bookingData = e.detail.data;
          
          setBookingConfirmed(true);
          
          const leadId = location.state?.leadId || localStorage.getItem('seo_lead_id');
          if (leadId && session && lead) {
            await updateLead(leadId, { step: 3 });
            await sendLeadEmail(
              { ...lead, step: 3 },
              session,
              "Step 3 - Consultation Booked"
            );
          }
          
          toast.success("Consultation booked successfully!");
          
          // Redirect to thank you page with booking details
          navigate("/thank-you", {
            state: {
              name: bookingData?.attendees?.[0]?.name || lead?.company_name,
              email: bookingData?.attendees?.[0]?.email || lead?.email,
              bookingDate: bookingData?.date,
              startTime: bookingData?.startTime,
              endTime: bookingData?.endTime,
              meetingLink: bookingData?.meetingUrl,
              source: "booking_calendar"
            }
          });
        },
      });
    })();
  }, [navigate, session, lead]);

  return (
    <>
      <Helmet>
        <title>Book Your AI SEO Strategy Call | DA360</title>
        <meta name="description" content="Schedule your free 30-minute AI SEO strategy session. Get personalized recommendations and a growth roadmap." />
      </Helmet>

      <main className="min-h-screen bg-slate-50">
        {/* Header */}
        <header className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12">
          <div className="container mx-auto px-4 text-center">
            <Badge className="mb-4 bg-orange-500/10 text-orange-400 border-orange-500/20">
              Final Step
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Not a Sales Call. A Business Visibility Review.
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              In 30 minutes, we'll walk you through your audit results, share actionable insights, and give you a clear recommendation—whether we're the right fit or not.
            </p>
          </div>
        </header>

        <div className="container mx-auto px-4 py-12">
          {bookingConfirmed ? (
            /* Confirmation State */
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-12 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  You're All Set!
                </h2>
                <p className="text-lg text-slate-600 mb-8">
                  Your strategy call has been booked. Check your email for the calendar invite and meeting details.
                </p>
                
                <div className="bg-slate-50 rounded-lg p-6 text-left">
                  <h3 className="font-semibold text-slate-900 mb-4">Before our call:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span className="text-slate-600">Review the audit results we sent to your email</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span className="text-slate-600">Note down any questions about your AI search visibility</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span className="text-slate-600">Have your Google Analytics/Search Console ready (optional)</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Benefits */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  What You'll Get
                </h2>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6 flex items-start gap-4">
                        <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <benefit.icon className="w-6 h-6 text-orange-500" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-900 mb-1">
                            {benefit.title}
                          </h3>
                          <p className="text-slate-600 text-sm">
                            {benefit.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-orange-50 rounded-lg border border-orange-200">
                  <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-orange-500" />
                    30-Minute Strategy Session
                  </h3>
                  <p className="text-slate-600 text-sm">
                    No fluff, no hard sell. Just actionable insights about your AI search visibility and a clear path forward.
                  </p>
                </div>
              </div>

              {/* Cal.com Embed */}
              <div>
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="bg-slate-100 p-4 border-b">
                      <h3 className="font-semibold text-slate-900 flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-orange-500" />
                        Select a Time
                      </h3>
                    </div>
                    <div className="min-h-[600px]">
                      <Cal
                        calLink="thesuper-30-ehlmd6/30min"
                        style={{ width: "100%", height: "100%", overflow: "scroll", minHeight: "600px" }}
                        config={{
                          layout: "month_view"
                        }}
                      />
                    </div>
                  </CardContent>
                </Card>
                
                <p className="text-center text-slate-500 text-sm mt-4">
                  Can't find a suitable time?{" "}
                  <a href="mailto:thesuper30.ai@gmail.com" className="text-orange-500 hover:underline">
                    Email us directly
                  </a>
                </p>
              </div>
            </div>
          )}
        </div>

        <Footer />
      </main>
    </>
  );
};

export default Booking;
