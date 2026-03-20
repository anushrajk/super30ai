import { useState, useRef, useEffect } from "react";
import { 
  Layout, Smartphone, Gauge, Shield, Search, Zap, Globe, Code, Paintbrush,
  CheckCircle2, ChevronLeft, ChevronRight, Sparkles, ArrowRight, MessageCircle
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { EnquiryPopup } from "@/components/EnquiryPopup";

const iconColors = [
  { bg: "from-emerald-500 to-teal-600", text: "text-white", checkBg: "bg-emerald-500", checkText: "text-white" },
  { bg: "from-violet-500 to-purple-600", text: "text-white", checkBg: "bg-violet-500", checkText: "text-white" },
  { bg: "from-amber-500 to-orange-600", text: "text-white", checkBg: "bg-amber-500", checkText: "text-white" },
  { bg: "from-cyan-500 to-blue-600", text: "text-white", checkBg: "bg-cyan-500", checkText: "text-white" },
  { bg: "from-rose-500 to-pink-600", text: "text-white", checkBg: "bg-rose-500", checkText: "text-white" },
  { bg: "from-indigo-500 to-blue-600", text: "text-white", checkBg: "bg-indigo-500", checkText: "text-white" },
  { bg: "from-lime-500 to-green-600", text: "text-white", checkBg: "bg-lime-500", checkText: "text-white" },
  { bg: "from-fuchsia-500 to-purple-600", text: "text-white", checkBg: "bg-fuchsia-500", checkText: "text-white" },
  { bg: "from-sky-500 to-cyan-600", text: "text-white", checkBg: "bg-sky-500", checkText: "text-white" },
];

const benefits = [
  { icon: Layout, title: "Conversion-Focused Design", description: "Every element — headlines, CTAs, forms — is strategically placed to guide visitors toward action.", features: ["Strategic CTA placement", "Visual hierarchy", "Conversion optimization"] },
  { icon: Smartphone, title: "Mobile-First Architecture", description: "60%+ of web traffic is mobile. We design for phones first, then scale up to desktop.", features: ["Responsive breakpoints", "Touch-friendly UI", "Mobile-first CSS"] },
  { icon: Gauge, title: "Core Web Vitals Perfect", description: "90+ scores on Google PageSpeed. Fast LCP, zero CLS, instant FID — because speed = revenue.", features: ["Sub-2s load time", "Image optimization", "Code splitting"] },
  { icon: Search, title: "SEO-Ready From Day One", description: "Semantic HTML, schema markup, meta tags, sitemaps — your site is ready to rank from launch.", features: ["Technical SEO setup", "Schema markup", "Sitemap & robots.txt"] },
  { icon: Shield, title: "Secure & Reliable", description: "SSL, security headers, DDoS protection, and regular backups — your site is fortress-level secure.", features: ["HTTPS everywhere", "Security headers", "Automated backups"] },
  { icon: Zap, title: "Fast Delivery", description: "Landing pages in 1-2 weeks. Full websites in 3-4 weeks. E-commerce in 4-6 weeks. No delays.", features: ["Clear timelines", "Agile process", "Weekly updates"] },
  { icon: Globe, title: "Multi-Platform Expertise", description: "React, Next.js, WordPress, Shopify, Webflow — we choose the best tech for your specific needs.", features: ["Tech-stack flexibility", "CMS setup", "Headless options"] },
  { icon: Code, title: "Clean, Maintainable Code", description: "No bloated plugins or spaghetti code. Clean, documented code that's easy to maintain and scale.", features: ["Modern frameworks", "Documentation", "Scalable architecture"] },
  { icon: Paintbrush, title: "UI/UX Excellence", description: "Beautiful interfaces backed by UX research — intuitive navigation, clear hierarchy, delightful interactions.", features: ["User research", "Wireframes & prototypes", "Interaction design"] },
];

export const WDBenefitsSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [showEnquiryPopup, setShowEnquiryPopup] = useState(false);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || !isVisible) return;
    let animationId: number;
    const autoScroll = () => {
      if (!isPaused && container) {
        const maxScroll = container.scrollWidth - container.clientWidth;
        if (container.scrollLeft >= maxScroll) container.scrollLeft = 0;
        else container.scrollLeft += 0.5;
      }
      animationId = requestAnimationFrame(autoScroll);
    };
    animationId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused, isVisible]);

  const scrollCards = (direction: 'left' | 'right') => {
    scrollContainerRef.current?.scrollBy({ left: direction === 'left' ? -320 : 320, behavior: 'smooth' });
  };

  return (
    <section ref={sectionRef} className="py-6 md:py-10 lg:py-16 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-3 md:px-4 relative">
        <div className={`text-center max-w-3xl mx-auto mb-6 md:mb-10 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-1.5 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-medium mb-4 border border-emerald-500/30">Why Choose Us</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">Why Businesses Trust Us to Build Their Websites</h2>
          <p className="text-base md:text-lg text-gray-300">Not just beautiful — fast, SEO-ready, and built to convert visitors into customers</p>
        </div>

        <div className="relative group/carousel">
          <Button variant="ghost" size="icon" onClick={() => scrollCards('left')} className="hidden sm:flex absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/5 backdrop-blur-md border border-white/10 rounded-full shadow-xl opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hover:bg-white/10 text-white"><ChevronLeft className="w-5 h-5" /></Button>

          <div ref={scrollContainerRef} onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)} onTouchStart={() => setIsPaused(true)} onTouchEnd={() => setIsPaused(false)}
            className="flex gap-4 md:gap-5 overflow-x-auto pb-6 px-6 sm:px-12 snap-x snap-mandatory"
            style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'thin', scrollbarColor: 'rgba(255,255,255,0.1) transparent' }}>
            {benefits.map((benefit, index) => (
              <Card key={index} className={`flex-shrink-0 w-[280px] sm:w-[300px] bg-white border border-gray-100 shadow-none overflow-hidden snap-start rounded-2xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: `${(index + 1) * 50}ms` }}>
                <CardContent className="p-5 md:p-6 relative">
                  <div className="relative mb-4">
                    <div className={`relative w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${iconColors[index % iconColors.length].bg}`}>
                      <benefit.icon className={`w-7 h-7 ${iconColors[index % iconColors.length].text}`} />
                    </div>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">{benefit.description}</p>
                  <ul className="space-y-2">
                    {benefit.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-sm text-gray-800 group-hover:text-white/90 font-medium">
                        <div className={`w-5 h-5 rounded-full ${iconColors[index % iconColors.length].checkBg} flex items-center justify-center flex-shrink-0`}>
                          <CheckCircle2 className={`w-3 h-3 ${iconColors[index % iconColors.length].checkText}`} />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <Button variant="ghost" size="icon" onClick={() => scrollCards('right')} className="hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/5 backdrop-blur-md border border-white/10 rounded-full shadow-xl opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hover:bg-white/10 text-white"><ChevronRight className="w-5 h-5" /></Button>
        </div>

        <p className="text-center mt-3 text-sm text-gray-500 sm:hidden flex items-center justify-center gap-2"><ChevronLeft className="w-4 h-4" /> Swipe to explore <ChevronRight className="w-4 h-4" /></p>

        <div className={`flex flex-col sm:flex-row gap-3 justify-center mt-8 md:mt-12 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <Button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg hover:scale-105 transition-all duration-300 group">
            <Sparkles className="w-4 h-4 mr-2" />Get Free Website Quote<ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline-white" size="lg" onClick={() => setShowEnquiryPopup(true)} className="hover:scale-105 transition-all duration-300"><MessageCircle className="w-4 h-4 mr-2" />Enquire Now</Button>
        </div>
      </div>

      <EnquiryPopup open={showEnquiryPopup} onOpenChange={setShowEnquiryPopup} />
    </section>
  );
};
