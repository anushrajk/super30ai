import { lazy, Suspense, useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { HelmetProvider } from "react-helmet-async";
import { Loader2 } from "lucide-react";

// Lazy load ALL non-critical global components
const EngagementTracker = lazy(() => 
  import("@/components/EngagementTracker").then(m => ({ default: m.EngagementTracker }))
);
const ScrollProgressBar = lazy(() => import("@/components/ScrollProgressBar"));
const CookieConsent = lazy(() => 
  import("@/components/CookieConsent").then(m => ({ default: m.CookieConsent }))
);
const FloatingContactButtons = lazy(() => 
  import("@/components/FloatingContactButtons").then(m => ({ default: m.FloatingContactButtons }))
);
const ScrollToTopButton = lazy(() => 
  import("@/components/ScrollToTopButton").then(m => ({ default: m.ScrollToTopButton }))
);

// Lazy load all pages for code splitting
const Home = lazy(() => import("./pages/Home"));
const AiSeo = lazy(() => import("./pages/AiSeo"));
const PerformanceMarketing = lazy(() => import("./pages/PerformanceMarketing"));
const About = lazy(() => import("./pages/About"));
const Work = lazy(() => import("./pages/Work"));
const Contact = lazy(() => import("./pages/Contact"));
const Audit = lazy(() => import("./pages/Audit"));
const Booking = lazy(() => import("./pages/Booking"));
const ThankYou = lazy(() => import("./pages/ThankYou"));
const PerformancePlanner = lazy(() => import("./pages/PerformancePlanner"));
const SeoCourse = lazy(() => import("./pages/SeoCourse"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));
const NotFound = lazy(() => import("./pages/NotFound"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const DigitalMarketing = lazy(() => import("./pages/DigitalMarketing"));
const SocialMediaDesign = lazy(() => import("./pages/SocialMediaDesign"));
const WebDesign = lazy(() => import("./pages/WebDesign"));
const Design = lazy(() => import("./pages/Design"));
const ClientReport = lazy(() => import("./pages/ClientReport"));
const LeadGenReport = lazy(() => import("./pages/LeadGenReport"));

// Digital Marketing sub-pages
const GoogleAds = lazy(() => import("./pages/GoogleAds"));
const SocialMediaOptimisation = lazy(() => import("./pages/SocialMediaOptimisation"));

// Design sub-pages
const UIUXDesign = lazy(() => import("./pages/UIUXDesign"));
const LogoDesign = lazy(() => import("./pages/LogoDesign"));
const BrandKit = lazy(() => import("./pages/BrandKit"));

// Content sub-pages
const WebsiteContent = lazy(() => import("./pages/WebsiteContent"));
const BlogWriting = lazy(() => import("./pages/BlogWriting"));
const ScriptWriting = lazy(() => import("./pages/ScriptWriting"));
const GuestPosting = lazy(() => import("./pages/GuestPosting"));

// SMS sub-pages
const WhatsappBusinessApi = lazy(() => import("./pages/WhatsappBusinessApi"));
const Chatbot = lazy(() => import("./pages/Chatbot"));
const CustomerEngagement = lazy(() => import("./pages/CustomerEngagement"));
const SmsGateway = lazy(() => import("./pages/SmsGateway"));
const RCS = lazy(() => import("./pages/RCS"));

// Production sub-pages
const VideoProduction = lazy(() => import("./pages/VideoProduction"));
const Photography = lazy(() => import("./pages/Photography"));

// Website sub-pages
const EcommerceWebsite = lazy(() => import("./pages/EcommerceWebsite"));
const WordpressWebsite = lazy(() => import("./pages/WordpressWebsite"));
const WebsiteMaintenance = lazy(() => import("./pages/WebsiteMaintenance"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      gcTime: 10 * 60 * 1000,
      retry: 2,
    },
  },
});

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="flex flex-col items-center gap-4">
      <Loader2 className="w-8 h-8 animate-spin text-primary" />
      <p className="text-muted-foreground text-sm">Loading...</p>
    </div>
  </div>
);

// Deferred non-critical UI - loads after 3 seconds
const DeferredUI = () => {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShouldLoad(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!shouldLoad) return null;

  return (
    <Suspense fallback={null}>
      <EngagementTracker />
      <ScrollProgressBar />
      <CookieConsent />
      <FloatingContactButtons />
      <ScrollToTopButton />
    </Suspense>
  );
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <DeferredUI />
          <ScrollToTop />
          <ErrorBoundary>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                {/* Main Pages */}
                <Route path="/" element={<Home />} />
                <Route path="/internet-marketing-agency" element={<About />} />
                <Route path="/our-work" element={<Work />} />
                <Route path="/contact-us" element={<Contact />} />
                <Route path="/seo-training-in-bangalore" element={<SeoCourse />} />
                <Route path="/audit" element={<Audit />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/thank-you" element={<ThankYou />} />
                <Route path="/performance-planner" element={<PerformancePlanner />} />
                <Route path="/report/:slug" element={<ClientReport />} />
                <Route path="/lead-gen-report/:slug" element={<LeadGenReport />} />
                <Route path="/blog/:slug" element={<BlogPost />} />

                {/* Digital Marketing */}
                <Route path="/digital-marketing-agency-bangalore" element={<DigitalMarketing />} />
                <Route path="/seo-company-bangalore" element={<AiSeo />} />
                <Route path="/lead-generation-agency-bangalore" element={<PerformanceMarketing />} />
                <Route path="/google-ads-agency-bangalore" element={<GoogleAds />} />
                <Route path="/social-media-optimization-services-bangalore" element={<SocialMediaOptimisation />} />

                {/* Design */}
                <Route path="/graphic-design-agency-bangalore" element={<Design />} />
                <Route path="/ui-ux-design-agency-bangalore" element={<UIUXDesign />} />
                <Route path="/social-media-design-agency-bangalore" element={<SocialMediaDesign />} />
                <Route path="/logo-design-company-bangalore" element={<LogoDesign />} />
                <Route path="/branding-agency-bangalore" element={<BrandKit />} />

                {/* Content */}
                <Route path="/seo-content-writing-company-bangalore" element={<WebsiteContent />} />
                <Route path="/blog-writing-services-bangalore" element={<BlogWriting />} />
                <Route path="/script-writing-agency-bangalore" element={<ScriptWriting />} />
                <Route path="/guest-posting-agency-bangalore" element={<GuestPosting />} />

                {/* SMS & Messaging */}
                <Route path="/whatsapp-marketing-company-bangalore" element={<WhatsappBusinessApi />} />
                <Route path="/chatbot-development-company-bangalore" element={<Chatbot />} />
                <Route path="/customer-engagement-agency-bangalore" element={<CustomerEngagement />} />
                <Route path="/sms-gateway-service-bangalore" element={<SmsGateway />} />
                <Route path="/rcs-messaging-provider-bangalore" element={<RCS />} />

                {/* Production */}
                <Route path="/video-production-agency-bangalore" element={<VideoProduction />} />
                <Route path="/photography-services-bangalore" element={<Photography />} />

                {/* Website */}
                <Route path="/web-design-company-bangalore" element={<WebDesign />} />
                <Route path="/ecommerce-website-development-company-bangalore" element={<EcommerceWebsite />} />
                <Route path="/wordpress-website-development-company-bangalore" element={<WordpressWebsite />} />
                <Route path="/website-maintenance-company-bangalore" element={<WebsiteMaintenance />} />

                {/* Legal */}
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="/cookie-policy" element={<CookiePolicy />} />

                {/* Legacy URL Redirects */}
                <Route path="/seo-experts-bangalore" element={<Navigate to="/internet-marketing-agency" replace />} />
                <Route path="/seo-results-bangalore" element={<Navigate to="/our-work" replace />} />
                <Route path="/seo-agency-near-me" element={<Navigate to="/contact-us" replace />} />
                <Route path="/digital-marketing" element={<Navigate to="/digital-marketing-agency-bangalore" replace />} />
                <Route path="/ai-seo-agency-bangalore" element={<Navigate to="/seo-company-bangalore" replace />} />
                <Route path="/performance-marketing" element={<Navigate to="/lead-generation-agency-bangalore" replace />} />
                <Route path="/social-media-post-design" element={<Navigate to="/social-media-design-agency-bangalore" replace />} />
                <Route path="/google-ads" element={<Navigate to="/google-ads-agency-bangalore" replace />} />
                <Route path="/social-media-optimisation" element={<Navigate to="/social-media-optimization-services-bangalore" replace />} />
                <Route path="/design" element={<Navigate to="/graphic-design-agency-bangalore" replace />} />
                <Route path="/ui-ux-design" element={<Navigate to="/ui-ux-design-agency-bangalore" replace />} />
                <Route path="/logo-design" element={<Navigate to="/logo-design-company-bangalore" replace />} />
                <Route path="/brand-kit" element={<Navigate to="/branding-agency-bangalore" replace />} />
                <Route path="/website-content" element={<Navigate to="/seo-content-writing-company-bangalore" replace />} />
                <Route path="/seo-content-writing-services-bangalore" element={<Navigate to="/seo-content-writing-company-bangalore" replace />} />
                <Route path="/blog-writing" element={<Navigate to="/blog-writing-services-bangalore" replace />} />
                <Route path="/script-writing" element={<Navigate to="/script-writing-agency-bangalore" replace />} />
                <Route path="/guest-posting" element={<Navigate to="/guest-posting-agency-bangalore" replace />} />
                <Route path="/whatsapp-business-api" element={<Navigate to="/whatsapp-marketing-company-bangalore" replace />} />
                <Route path="/chatbot" element={<Navigate to="/chatbot-development-company-bangalore" replace />} />
                <Route path="/customer-engagement" element={<Navigate to="/customer-engagement-agency-bangalore" replace />} />
                <Route path="/sms-gateway" element={<Navigate to="/sms-gateway-service-bangalore" replace />} />
                <Route path="/rcs" element={<Navigate to="/rcs-messaging-provider-bangalore" replace />} />
                <Route path="/video-production" element={<Navigate to="/video-production-agency-bangalore" replace />} />
                <Route path="/photography" element={<Navigate to="/photography-services-bangalore" replace />} />
                <Route path="/web-design-development" element={<Navigate to="/web-design-company-bangalore" replace />} />
                <Route path="/ecommerce-website" element={<Navigate to="/ecommerce-website-development-company-bangalore" replace />} />
                <Route path="/ecommerce-website-development-bangalore" element={<Navigate to="/ecommerce-website-development-company-bangalore" replace />} />
                <Route path="/wordpress-website" element={<Navigate to="/wordpress-website-development-company-bangalore" replace />} />
                <Route path="/wordpress-development-company-bangalore" element={<Navigate to="/wordpress-website-development-company-bangalore" replace />} />
                <Route path="/website-maintenance" element={<Navigate to="/website-maintenance-company-bangalore" replace />} />
                <Route path="/website-maintenance-services-bangalore" element={<Navigate to="/website-maintenance-company-bangalore" replace />} />

                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;