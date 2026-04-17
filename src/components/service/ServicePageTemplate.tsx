import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/landing/Footer";
import { StickyCTA } from "@/components/landing/StickyCTA";
import { ServiceHeroSection } from "@/components/service/ServiceHeroSection";
import { LazySection } from "@/components/common/LazySection";
import { lazy, Suspense } from "react";
import { useLeadSubmit } from "@/hooks/useLeadSubmit";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  ArrowRight, CheckCircle, XCircle, ChevronDown, LucideIcon,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const TestimonialSection = lazy(() =>
  import("@/components/landing/TestimonialSection").then(m => ({ default: m.TestimonialSection }))
);
const DMIndustriesSection = lazy(() =>
  import("@/components/digital-marketing/DMIndustriesSection").then(m => ({ default: m.DMIndustriesSection }))
);
const ClientLogosSection = lazy(() =>
  import("@/components/landing/ClientLogosSection").then(m => ({ default: m.ClientLogosSection }))
);

// ── Types ──
export interface ServicePageConfig {
  seo: {
    title: string;
    description: string;
    keywords: string;
    canonical: string;
    serviceType: string;
    ogTitle?: string;
    ogDescription?: string;
    twitterTitle?: string;
    twitterDescription?: string;
  };
  hero: {
    badgeIcon: LucideIcon;
    badgeText: string;
    headlineLine1: string;
    headlineLine2: string;
    description: React.ReactNode;
    trustSignals: { icon: LucideIcon; text: string }[];
    credentials: string[];
    formTitle: string;
    formDescription: string;
    formButtonText: string;
  };
  source: string;
  problems: {
    icon: LucideIcon;
    title: string;
    description: string;
  }[];
  services: {
    icon: LucideIcon;
    title: string;
    description: string;
  }[];
  comparison: {
    traditional: string[];
    super30: string[];
  };
  benefits: {
    icon: LucideIcon;
    title: string;
    description: string;
  }[];
  process: {
    icon: LucideIcon;
    title: string;
    description: string;
  }[];
  whoIsThisFor: {
    forYou: string[];
    notForYou: string[];
  };
  faq: {
    question: string;
    answer: string;
  }[];
  finalCTA: {
    headline: string;
    description: string;
    buttonText: string;
  };
}

// ── Problem Section ──
const ProblemSection = ({ problems }: { problems: ServicePageConfig["problems"] }) => {
  const [ref, visible] = useScrollAnimation<HTMLElement>();
  return (
    <section ref={ref} className="py-12 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
            The Problem Most Businesses <span className="text-brand">Face</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Sound familiar? You're not alone.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto">
          {problems.map((p, i) => (
            <div
              key={i}
              className={`bg-background border border-border/50 rounded-2xl p-6 transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center mb-3">
                <p.icon className="w-5 h-5 text-destructive" />
              </div>
              <h3 className="font-bold text-foreground mb-1.5">{p.title}</h3>
              <p className="text-muted-foreground text-sm">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ── Services Grid ──
const ServicesGrid = ({ services, title }: { services: ServicePageConfig["services"]; title?: string }) => {
  const [ref, visible] = useScrollAnimation<HTMLElement>();
  return (
    <section ref={ref} className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
            {title || <>What We <span className="text-brand">Offer</span></>}
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          {services.map((s, i) => (
            <div
              key={i}
              className={`bg-muted/30 border border-border/50 rounded-2xl p-6 group transition-all duration-500 hover:-translate-y-1 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center mb-3 group-hover:bg-brand/20 transition-colors">
                <s.icon className="w-5 h-5 text-brand" />
              </div>
              <h3 className="font-bold text-foreground mb-1.5 text-sm md:text-base">{s.title}</h3>
              <p className="text-muted-foreground text-xs md:text-sm">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ── Comparison ──
const ComparisonSection = ({ comparison }: { comparison: ServicePageConfig["comparison"] }) => {
  const [ref, visible] = useScrollAnimation<HTMLElement>();
  return (
    <section ref={ref} className="py-12 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
            Traditional Agency <span className="text-brand">vs. The Super 30</span>
          </h2>
        </div>
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="bg-background border border-border/50 rounded-2xl p-6">
            <h3 className="font-bold text-foreground mb-4 text-lg">Traditional Agency</h3>
            <ul className="space-y-3">
              {comparison.traditional.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <XCircle className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-brand/5 border-2 border-brand/20 rounded-2xl p-6">
            <h3 className="font-bold text-brand mb-4 text-lg">The Super 30</h3>
            <ul className="space-y-3">
              {comparison.super30.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

// ── Benefits ──
const BenefitsSection = ({ benefits }: { benefits: ServicePageConfig["benefits"] }) => {
  const [ref, visible] = useScrollAnimation<HTMLElement>();
  return (
    <section ref={ref} className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
            Why Brands <span className="text-brand">Choose Us</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {benefits.map((b, i) => (
            <div
              key={i}
              className={`bg-muted/30 border border-border/50 rounded-2xl p-6 transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center mb-3">
                <b.icon className="w-5 h-5 text-brand" />
              </div>
              <h3 className="font-bold text-foreground mb-1.5">{b.title}</h3>
              <p className="text-muted-foreground text-sm">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ── Process ──
const ProcessSection = ({ process }: { process: ServicePageConfig["process"] }) => {
  const [ref, visible] = useScrollAnimation<HTMLElement>();
  return (
    <section ref={ref} className="py-12 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
            Our Proven <span className="text-brand">Process</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {process.map((step, i) => (
            <div
              key={i}
              className={`relative bg-background border border-border/50 rounded-2xl p-6 text-center transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand text-white w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold">
                {i + 1}
              </div>
              <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mx-auto mb-3 mt-2">
                <step.icon className="w-6 h-6 text-brand" />
              </div>
              <h3 className="font-bold text-foreground mb-1.5">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ── Who Is This For ──
const WhoIsThisForSection = ({ data }: { data: ServicePageConfig["whoIsThisFor"] }) => {
  const [ref, visible] = useScrollAnimation<HTMLElement>();
  return (
    <section ref={ref} className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
            Is This <span className="text-brand">Right For You?</span>
          </h2>
        </div>
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="bg-brand/5 border border-brand/20 rounded-2xl p-6">
            <h3 className="font-bold text-brand mb-4 text-lg">✅ Perfect For You If…</h3>
            <ul className="space-y-3">
              {data.forYou.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-background border border-border/50 rounded-2xl p-6">
            <h3 className="font-bold text-foreground mb-4 text-lg">❌ Not For You If…</h3>
            <ul className="space-y-3">
              {data.notForYou.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <XCircle className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

// ── FAQ ──
const FAQSection = ({ faq }: { faq: ServicePageConfig["faq"] }) => {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-12 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
            Frequently Asked <span className="text-brand">Questions</span>
          </h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-3">
          {faq.map((item, i) => (
            <div key={i} className="bg-background border border-border/50 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-medium text-foreground text-sm md:text-base pr-4">{item.question}</span>
                <ChevronDown className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ── Final CTA ──
const FinalCTASection = ({ data }: { data: ServicePageConfig["finalCTA"] }) => (
  <section className="py-12 md:py-20 bg-[#020617]">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">{data.headline}</h2>
      <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto mb-8">{data.description}</p>
      <Link
        to="/contact-us"
        className="inline-flex items-center gap-2 bg-brand text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-brand/90 transition-colors"
      >
        {data.buttonText}
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  </section>
);

// ── Main Template ──
export const ServicePageTemplate = ({ config }: { config: ServicePageConfig }) => {
  const { loading, handleFormSubmit } = useLeadSubmit({
    source: config.source,
    formId: `${config.source}_form`,
    formName: config.seo.serviceType,
  });

  return (
    <>
      <Helmet>
        <title>{config.seo.title}</title>
        <meta name="description" content={config.seo.description} />
        <meta name="keywords" content={config.seo.keywords} />
        <link rel="canonical" href={config.seo.canonical} />
        <meta property="og:title" content={config.seo.ogTitle || config.seo.title} />
        <meta property="og:description" content={config.seo.ogDescription || config.seo.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={config.seo.canonical} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={config.seo.twitterTitle || config.seo.ogTitle || config.seo.title} />
        <meta name="twitter:description" content={config.seo.twitterDescription || config.seo.ogDescription || config.seo.description} />
        <meta name="twitter:url" content={config.seo.canonical} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: config.seo.serviceType,
            name: config.seo.title,
            url: config.seo.canonical,
            provider: { "@type": "Organization", name: "The Super 30", url: "https://www.thesuper30.ai/" },
            areaServed: { "@type": "City", name: "Bangalore" },
            description: config.seo.description,
          })}
        </script>
      </Helmet>

      <Navbar />

      <main className="min-h-screen pt-16 md:pt-20">
        <ServiceHeroSection
          badgeIcon={config.hero.badgeIcon}
          badgeText={config.hero.badgeText}
          headline={
            <>
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-brand leading-[1.25] pb-1">
                {config.hero.headlineLine1}
              </span>
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-[1.25]">
                {config.hero.headlineLine2}
              </span>
            </>
          }
          description={config.hero.description}
          trustSignals={config.hero.trustSignals}
          credentials={config.hero.credentials}
          onSubmit={handleFormSubmit}
          loading={loading}
          formTitle={config.hero.formTitle}
          formDescription={config.hero.formDescription}
          formButtonText={config.hero.formButtonText}
          formId={`lead_capture_${config.source}`}
          formName={config.seo.serviceType}
        />

        <Suspense fallback={null}>
          <ClientLogosSection />
          <LazySection minHeight="400px"><ProblemSection problems={config.problems} /></LazySection>
          <LazySection minHeight="400px"><ServicesGrid services={config.services} /></LazySection>
          <LazySection minHeight="400px"><ComparisonSection comparison={config.comparison} /></LazySection>
          <LazySection minHeight="400px"><BenefitsSection benefits={config.benefits} /></LazySection>
          <LazySection minHeight="500px"><DMIndustriesSection /></LazySection>
          <LazySection minHeight="400px"><ProcessSection process={config.process} /></LazySection>
          <LazySection minHeight="300px"><WhoIsThisForSection data={config.whoIsThisFor} /></LazySection>
          <LazySection minHeight="200px"><FinalCTASection data={config.finalCTA} /></LazySection>
          <LazySection minHeight="400px"><TestimonialSection /></LazySection>
          <LazySection minHeight="300px"><FAQSection faq={config.faq} /></LazySection>
        </Suspense>

        <Footer />
      </main>

      <StickyCTA onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
    </>
  );
};
