import { useParams, Link, Navigate } from "react-router-dom";
import industryData from "@/data/industries.json";
import { industryTitle, searchDescription } from "@/lib/seoContent.js";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/landing/Footer";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const industries = industryData as Record<string, { name: string; headline: string; description: string; subCategories: string[] }>;

const solutions = [
  { label: "AI SEO", href: "/seo-company-bangalore" },
  { label: "Google Ads", href: "/google-ads-agency-bangalore" },
  { label: "Lead Generation", href: "/lead-generation-agency-bangalore" },
  { label: "Social Media Marketing", href: "/social-media-marketing-agency-bangalore" },
  { label: "Web Development", href: "/web-development-company-bangalore" },
  { label: "Branding & Design", href: "/graphic-design-agency-bangalore" },
];

const IndustryHub = () => {
  const { slug } = useParams<{ slug: string }>();
  const industry = slug ? industries[slug] : undefined;

  if (!industry) return <Navigate to="/" replace />;

  const title = industryTitle(industry.name);
  const metaDescription = searchDescription(industry.description);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={`https://www.thesuper30.ai/industries/${slug}`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Navbar />

      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-16 md:pb-20 bg-[#0a0a0a] text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--brand-orange)) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-[hsl(var(--brand-orange))] mb-4">
            Solutions by Industry
          </p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-4xl mb-6">
            {industry.headline}
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mb-8">{industry.description}</p>
          <Link
            to="/contact-us"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold text-white bg-[hsl(var(--brand-orange))] hover:bg-[hsl(var(--brand-orange))]/90 transition-all"
          >
            Talk to a Strategist
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Sub-categories */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Who We Serve in {industry.name}
          </h2>
          <p className="text-muted-foreground mb-10 max-w-2xl">
            Industry-specific marketing playbooks tailored to your segment.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {industry.subCategories.map((sub) => (
              <div
                key={sub}
                className="flex items-center gap-3 rounded-xl border border-border/60 bg-card p-4 hover:border-[hsl(var(--brand-orange))]/40 transition-colors"
              >
                <CheckCircle2 className="w-5 h-5 text-[hsl(var(--brand-orange))] shrink-0" />
                <span className="text-sm font-medium text-foreground">{sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions grid */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-10">
            Growth Solutions for {industry.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {solutions.map((s) => (
              <Link
                key={s.href}
                to={s.href}
                className="group flex items-center justify-between rounded-xl border border-border/60 bg-card p-5 hover:border-[hsl(var(--brand-orange))]/40 transition-colors"
              >
                <span className="font-semibold text-foreground group-hover:text-[hsl(var(--brand-orange))] transition-colors">
                  {s.label}
                </span>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-[hsl(var(--brand-orange))] group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-8 md:py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl bg-[#0a0a0a] p-8 md:p-12 lg:p-16 text-center">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[hsl(var(--brand-orange))]/10 blur-3xl" aria-hidden="true" />
            <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-[hsl(var(--brand-orange))]/5 blur-3xl" aria-hidden="true" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
            <div className="relative">
              <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white">
                Ready to Grow Your {industry.name} Business?
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto mb-8">
                Get a free strategy session with our AI digital marketing experts in Bangalore.
              </p>
              <Link
                to="/contact-us"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full px-8 text-sm font-semibold text-white bg-[hsl(var(--brand-orange))] hover:bg-[hsl(var(--brand-orange))]/90 transition-all"
              >
                Get Free Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IndustryHub;
