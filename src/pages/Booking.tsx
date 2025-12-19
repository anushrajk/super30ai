import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useSession } from "@/hooks/useSession";
import { useLead } from "@/hooks/useLead";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Calendar, FileText, Lightbulb, Target, Clock, Star, Users } from "lucide-react";
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

const recentBookings = [
  { name: "Sarah M.", company: "TechFlow Solutions", time: "2 hours ago" },
  { name: "James R.", company: "GrowthPeak Agency", time: "5 hours ago" },
  { name: "Priya K.", company: "DataDriven Inc.", time: "Yesterday" },
];

const testimonials = [
  {
    quote: "The audit revealed issues we had no idea existed. Game changer!",
    author: "Mark Chen",
    role: "CEO, Nexus Digital",
    rating: 5
  },
  {
    quote: "Finally understood why we weren't showing up in AI recommendations.",
    author: "Lisa Thompson",
    role: "Marketing Director, CloudFirst",
    rating: 5
  }
];

const Booking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { session, updateCurrentPage } = useSession();
  const { lead, getLead, updateLead, sendLeadEmail } = useLead();
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [slotsRemaining, setSlotsRemaining] = useState(4);
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 30, seconds: 0 });

  // Countdown timer for urgency
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
            <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-6">
              In 30 minutes, we'll walk you through your audit results, share actionable insights, and give you a clear recommendation—whether we're the right fit or not.
            </p>

            {/* Countdown Timer */}
            <div className="inline-flex items-center gap-3 bg-red-500/10 border border-red-500/20 rounded-full px-5 py-2.5">
              <Clock className="w-5 h-5 text-red-400 animate-pulse" />
              <span className="text-red-400 font-medium text-sm">
                Only <span className="font-bold text-red-300">{slotsRemaining} slots</span> left today
              </span>
              <span className="text-slate-500">|</span>
              <span className="font-mono text-red-300 font-bold">
                {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
              </span>
            </div>
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
          <div className="grid lg:grid-cols-5 gap-8 items-start">
              {/* Benefits - Sticky Left Section */}
              <div className="lg:col-span-2 lg:sticky lg:top-6">
                <h2 className="text-2xl font-bold text-slate-900 mb-5">
                  What You'll Get
                </h2>
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow border-slate-200">
                      <CardContent className="p-4 flex items-start gap-3">
                        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <benefit.icon className="w-5 h-5 text-orange-500" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-900 text-sm mb-0.5">
                            {benefit.title}
                          </h3>
                          <p className="text-slate-600 text-xs leading-relaxed">
                            {benefit.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="mt-5 p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <h3 className="font-semibold text-slate-900 mb-1.5 flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-orange-500" />
                    30-Minute Strategy Session
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    No fluff, no hard sell. Just actionable insights about your AI search visibility and a clear path forward.
                  </p>
                </div>

                {/* Social Proof Section */}
                <div className="mt-6">
                  {/* Recent Bookings */}
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3 flex items-center gap-2">
                      <Users className="w-3.5 h-3.5" />
                      Recent Bookings
                    </h4>
                    <div className="space-y-2">
                      {recentBookings.map((booking, index) => (
                        <div key={index} className="flex items-center gap-2 text-xs">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-semibold text-[10px]">
                            {booking.name.charAt(0)}
                          </div>
                          <div className="flex-1">
                            <span className="font-medium text-slate-700">{booking.name}</span>
                            <span className="text-slate-400"> from {booking.company}</span>
                          </div>
                          <span className="text-slate-400 text-[10px]">{booking.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Testimonials */}
                  <div className="space-y-3">
                    {testimonials.map((testimonial, index) => (
                      <Card key={index} className="border-slate-200 bg-slate-50/50">
                        <CardContent className="p-3">
                          <div className="flex gap-0.5 mb-2">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <p className="text-xs text-slate-600 italic mb-2">"{testimonial.quote}"</p>
                          <div className="text-[10px]">
                            <span className="font-semibold text-slate-700">{testimonial.author}</span>
                            <span className="text-slate-400"> · {testimonial.role}</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>

              {/* Cal.com Embed - Right Section */}
              <div className="lg:col-span-3">
                <Card className="overflow-hidden border-slate-200 shadow-lg">
                  <CardContent className="p-0">
                    <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-4">
                      <h3 className="font-semibold text-white flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-orange-400" />
                        Select a Time
                      </h3>
                      <p className="text-slate-400 text-xs mt-1">Choose a slot that works best for you</p>
                    </div>
                    <Cal
                      calLink="thesuper-30-ehlmd6/30min"
                      style={{ 
                        width: "100%", 
                        height: "480px", 
                        overflow: "hidden",
                        minHeight: "480px",
                        maxHeight: "520px"
                      }}
                      config={{
                        layout: "month_view"
                      }}
                    />
                  </CardContent>
                </Card>
                
                <p className="text-center text-slate-500 text-xs mt-3">
                  Can't find a suitable time?{" "}
                  <a href="mailto:thesuper30.ai@gmail.com" className="text-orange-500 hover:underline font-medium">
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
