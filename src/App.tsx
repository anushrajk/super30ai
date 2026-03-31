import { lazy, Suspense, useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { HelmetProvider } from "react-helmet-async";
import { Loader2 } from "lucide-react";

// Lazy load ALL non-critical global components
const EngagementTracker = lazy(() => 
  import("@/components/EngagementTracker").then(m => ({ default: m.EngagementTracker }))
);
const ScrollProgressBar = lazy(() => 
  import("@/components/ScrollProgressBar").then(m => ({ default: m.ScrollProgressBar }))
);
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
                <Route path="/" element={<Home />} />
                <Route path="/ai-seo-agency-bangalore" element={<AiSeo />} />
                <Route path="/performance-marketing" element={<PerformanceMarketing />} />
                <Route path="/performance-planner" element={<PerformancePlanner />} />
                <Route path="/seo-training-in-bangalore" element={<SeoCourse />} />
                <Route path="/seo-experts-bangalore" element={<About />} />
                <Route path="/seo-results-bangalore" element={<Work />} />
                <Route path="/seo-agency-near-me" element={<Contact />} />
                <Route path="/audit" element={<Audit />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/thank-you" element={<ThankYou />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="/cookie-policy" element={<CookiePolicy />} />
                <Route path="/digital-marketing" element={<DigitalMarketing />} />
                <Route path="/social-media-post-design" element={<SocialMediaDesign />} />
                <Route path="/web-design-development" element={<WebDesign />} />
                <Route path="/design" element={<Design />} />
                <Route path="/report/:slug" element={<ClientReport />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
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
