import { Toaster } from "@/components/ui/toaster";
import { PopupManager } from "@/components/PopupManager";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AiSeo from "./pages/AiSeo";
import PerformanceMarketing from "./pages/PerformanceMarketing";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Audit from "./pages/Audit";
import Booking from "./pages/Booking";
import ThankYou from "./pages/ThankYou";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import NotFound from "./pages/NotFound";
import { CookieConsent } from "./components/CookieConsent";
import { FloatingContactButtons } from "./components/FloatingContactButtons";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ai-seo" element={<AiSeo />} />
          <Route path="/performance-marketing" element={<PerformanceMarketing />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/audit" element={<Audit />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CookieConsent />
        <FloatingContactButtons />
        <PopupManager />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
