import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { CheckCircle, Phone, Calendar, ArrowRight } from "lucide-react";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ClientLogosSection } from "@/components/landing/ClientLogosSection";
import { TestimonialSection } from "@/components/landing/TestimonialSection";

const ThankYou = () => {
  const location = useLocation();
  const { name, email, source } = location.state || {};

  return (
    <>
      <Helmet>
        <title>Thank You | The Super 30</title>
        <meta name="description" content="Thank you for reaching out. We'll be in touch shortly." />
      </Helmet>

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-50 via-background to-orange-50/30 py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
          
          <div className="container relative mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-scale-in">
                <CheckCircle className="w-10 h-10 text-green-500" />
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Thank You{name ? `, ${name}` : ''}!
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Your request has been received. Our team will reach out within 24 hours.
              </p>

              {email && (
                <Card className="bg-background/80 backdrop-blur border-green-200 mb-8">
                  <CardContent className="p-6">
                    <p className="text-sm text-muted-foreground">Confirmation sent to:</p>
                    <p className="font-semibold text-foreground">{email}</p>
                  </CardContent>
                </Card>
              )}

              {/* Call Now CTA */}
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-6 text-white mb-8">
                <p className="text-orange-100 mb-2">Can't wait? Talk to us now!</p>
                <a href="tel:+917353252526" className="inline-flex items-center gap-2 text-2xl font-bold hover:underline">
                  <Phone className="w-6 h-6" />
                  +91 73532 52526
                </a>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                  <a href="/">
                    Explore Our Services
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FOMO Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              <span className="text-orange-700 text-sm font-medium">
                Only 3 consultation slots left this week
              </span>
            </div>
          </div>
        </section>

        <ClientLogosSection />
        <TestimonialSection />
        <Footer />
      </main>
    </>
  );
};

export default ThankYou;
