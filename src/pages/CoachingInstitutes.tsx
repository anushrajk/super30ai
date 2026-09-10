import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/landing/Footer";
import { UnifiedCTASection } from "@/components/landing/UnifiedCTASection";
import { LeadCaptureForm } from "@/components/landing/LeadCaptureForm";
import { useLeadSubmit } from "@/hooks/useLeadSubmit";
import {
  ArrowRight,
  CheckCircle2,
  Target,
  Users,
  Search,
  Share2,
  Globe,
  PenTool,
  GraduationCap,
  Star,
  Phone,
  ShieldCheck,
  Clock,
  TrendingUp,
  X,
} from "lucide-react";

const FAQSection = lazy(() =>
  import("@/components/landing/FAQSection").then((m) => ({ default: m.FAQSection }))
);

const stats = [
  { value: "10+", label: "Years in Education Marketing" },
  { value: "1L+", label: "Student Leads Generated" },
  { value: "300%+", label: "Avg. Admission Enquiry Growth" },
  { value: "4.8/5", label: "Client Rating" },
];

const problems = [
  {
    title: "Empty Batches Despite Great Teaching",
    description:
      "Your results speak for themselves, but students in your area can't find you on Google or AI search when they look for coaching.",
  },
  {
    title: "Wasted Ad Budget Every Admission Season",
    description:
      "Generic agencies burn your budget on broad audiences. We target students and parents actively searching for your exact courses.",
  },
  {
    title: "Enquiries That Never Convert",
    description:
      "Leads without follow-up systems go cold in hours. We build admission funnels that capture, nurture and convert enquiries into enrollments.",
  },
  {
    title: "Losing Students to Bigger Chains",
    description:
      "National coaching brands outspend you. AI SEO levels the field by making your institute the top local answer in search and AI assistants.",
  },
];

const coachingTypes = [
  "IIT-JEE & NEET Coaching",
  "UPSC & Competitive Exams",
  "CA / CS / CMA Coaching",
  "Banking & SSC Coaching",
  "CAT / MBA Entrance",
  "Language & IELTS Training",
  "Tuition Centers (Class 6–12)",
  "Skill & Hobby Academies",
];

const services = [
  {
    icon: Search,
    title: "AI SEO for Coaching Institutes",
    description:
      "Rank for 'best coaching near me', course-specific keywords and AI assistant answers that drive admission enquiries.",
    href: "/seo-company-bangalore",
  },
  {
    icon: Target,
    title: "Admission-Season Google Ads",
    description:
      "Hyper-targeted campaigns timed to admission cycles, optimized for cost-per-enrollment, not just clicks.",
    href: "/google-ads-agency-bangalore",
  },
  {
    icon: Users,
    title: "Student Lead Generation",
    description:
      "Landing pages, counsellor-ready funnels and CRM integration that turn enquiries into confirmed admissions.",
    href: "/lead-generation-agency-bangalore",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description:
      "Result-day creatives, topper stories and reels that build trust with students and parents on Instagram and YouTube.",
    href: "/social-media-marketing-agency-bangalore",
  },
  {
    icon: Globe,
    title: "Admission-Focused Websites",
    description:
      "Fast, mobile-first websites with course pages, fee enquiry forms and WhatsApp integration built to convert.",
    href: "/web-development-company-bangalore",
  },
  {
    icon: PenTool,
    title: "Branding & Creative Design",
    description:
      "Prospectus, banners and result creatives that make your institute look as credible as it teaches.",
    href: "/graphic-design-agency-bangalore",
  },
];

const outcomes = [
  { icon: TrendingUp, value: "300%+", label: "More admission enquiries within 2 batches" },
  { icon: Users, value: "₹180", label: "Average cost per qualified student enquiry" },
  { icon: Clock, value: "45 days", label: "Typical time to first ranking movement" },
  { icon: ShieldCheck, value: "0", label: "Lock-in tricks — month-on-month reporting" },
];

const testimonials = [
  {
    quote:
      "We were spending on ads with no idea what worked. The Super 30 rebuilt our enquiry funnel and our NEET batch filled two weeks before the session started.",
    author: "Director",
    org: "NEET & JEE Coaching, Bangalore",
    result: "Batch filled early",
  },
  {
    quote:
      "Our institute now shows up first for 'CA coaching near me' in our locality. Walk-ins have doubled and counsellors finally have quality leads.",
    author: "Founder",
    org: "CA / CS Institute, Jayanagar",
    result: "2x walk-ins",
  },
  {
    quote:
      "Result-day creatives and reels changed how parents see us. Enquiries from Instagram alone now cover our monthly marketing spend.",
    author: "Marketing Head",
    org: "Competitive Exam Academy",
    result: "Instagram-led leads",
  },
];

const comparison = {
  them: [
    "Generic campaigns copied from other industries",
    "Vanity metrics: impressions, clicks, likes",
    "No visibility into which enquiry became an admission",
    "One-size-fits-all creatives, no admission calendar",
  ],
  us: [
    "Playbooks built only for coaching and education",
    "Reported on enquiries, walk-ins and cost per admission",
    "CRM and WhatsApp tracking from lead to enrollment",
    "Campaigns timed to your batch and result calendar",
  ],
};

const packages = [
  {
    name: "Local Visibility",
    price: "₹25,000",
    period: "/month",
    best: "Single-centre institutes",
    features: [
      "AI SEO for 'near me' + course keywords",
      "Google Business Profile management",
      "8 social creatives per month",
      "Monthly enquiry report",
    ],
  },
  {
    name: "Admission Growth",
    price: "₹45,000",
    period: "/month",
    best: "Institutes filling multiple batches",
    popular: true,
    features: [
      "Everything in Local Visibility",
      "Google & Meta admission campaigns",
      "Landing pages + WhatsApp lead capture",
      "Counsellor-ready lead routing",
      "Weekly optimization calls",
    ],
  },
  {
    name: "Multi-Centre Scale",
    price: "Custom",
    period: "",
    best: "Chains and multi-city academies",
    features: [
      "Centre-wise campaigns and reporting",
      "Full funnel: SEO, ads, social, creatives",
      "CRM integration and attribution",
      "Dedicated growth strategist",
    ],
  },
];

const process = [
  {
    step: "01",
    title: "Free Marketing Audit",
    description: "We analyze your online presence, local competitors and admission funnel gaps.",
  },
  {
    step: "02",
    title: "Admission Growth Plan",
    description: "A channel-by-channel strategy mapped to your courses, batches and admission calendar.",
  },
  {
    step: "03",
    title: "Launch & Optimize",
    description: "Campaigns go live with weekly optimization focused on enquiry quality and cost per admission.",
  },
  {
    step: "04",
    title: "Transparent Reporting",
    description: "Monthly reports showing exactly how many enquiries and enrollments your marketing produced.",
  },
];

const CoachingInstitutes = () => {
  const title = "Digital Marketing for Coaching Institutes in Bangalore | The Super 30";
  const description =
    "AI-powered digital marketing for coaching institutes: AI SEO, Google Ads and student lead generation that fill your batches. 1L+ leads generated. Free audit.";

  const { handleFormSubmit, loading } = useLeadSubmit({
    source: "coaching_institutes",
    formId: "coaching_institutes_lead_form",
    formName: "Coaching Institutes Landing Page",
  });

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://www.thesuper30.ai/digital-marketing-for-coaching-institutes" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.thesuper30.ai/digital-marketing-for-coaching-institutes" />
        <meta property="og:image" content="https://www.thesuper30.ai/super30-social-logo.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="https://www.thesuper30.ai/super30-social-logo.jpg" />
      </Helmet>
      <Navbar />

      {/* Hero + lead form */}
      <section className="pt-28 md:pt-36 pb-16 md:pb-20 bg-[#0a0a0a] text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--brand-orange)) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-start">
            <div>
              <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[hsl(var(--brand-orange))] mb-5">
                <GraduationCap className="w-4 h-4" />
                Solutions for Coaching Institutes
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
                Digital Marketing That Fills Your Batches, Not Just Your Enquiry Sheet
              </h1>
              <p className="text-gray-400 text-base md:text-lg max-w-2xl mb-7">
                We help coaching institutes in Bangalore and across India attract more students with AI SEO,
                admission-season Google Ads and lead generation funnels built for the education sector.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Students and parents find you first for 'coaching near me'",
                  "Every enquiry tracked from click to confirmed admission",
                  "Campaigns planned around your batch and result calendar",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm md:text-base text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-[hsl(var(--brand-orange))] shrink-0 mt-0.5" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#free-audit"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-full px-7 text-sm font-semibold text-white bg-[hsl(var(--brand-orange))] hover:bg-[hsl(var(--brand-orange))]/90 transition-all"
                >
                  Get Free Admission Marketing Audit
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="tel:+918904150555"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-full px-7 text-sm font-semibold text-white border border-white/20 hover:bg-white/10 transition-all"
                >
                  <Phone className="h-4 w-4" />
                  Talk to a Strategist
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-6 text-xs text-gray-400">
                <span className="inline-flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 text-[hsl(var(--brand-orange))] fill-[hsl(var(--brand-orange))]" />
                  4.8/5 client rating
                </span>
                <span>No lock-in contracts</span>
                <span>Reply within 24 hours</span>
              </div>
            </div>

            <div id="free-audit" className="scroll-mt-28">
              <LeadCaptureForm
                onSubmit={handleFormSubmit}
                loading={loading}
                formTitle="Get Your Free Admission Marketing Audit"
                formDescription="See exactly where your institute is losing student enquiries — and how to fix it."
                formButtonText="Get My Free Audit"
                formId="coaching_institutes_lead_form"
                formName="Coaching Institutes Landing Page"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-14">
            {stats.map((s) => (
              <div key={s.label} className="rounded-xl border border-white/10 bg-white/5 p-5">
                <p className="text-2xl md:text-3xl font-bold text-[hsl(var(--brand-orange))]">{s.value}</p>
                <p className="text-xs md:text-sm text-gray-400 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="badge-brand mb-4">The Problem</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
              Why Coaching Institutes Struggle to Grow Online
            </h2>
            <p className="text-muted-foreground">
              Great teaching alone doesn't fill classrooms anymore. Visibility does.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {problems.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-border/60 bg-card p-6 hover:border-[hsl(var(--brand-orange))]/40 transition-colors"
              >
                <h3 className="text-lg font-bold text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-14 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="badge-brand mb-4">The Outcome</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
              What Institutes Typically See With Us
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {outcomes.map((o) => (
              <div key={o.label} className="rounded-2xl border border-border/60 bg-card p-6 text-center">
                <o.icon className="w-6 h-6 text-[hsl(var(--brand-orange))] mx-auto mb-3" />
                <p className="text-2xl md:text-3xl font-bold text-foreground">{o.value}</p>
                <p className="text-xs md:text-sm text-muted-foreground mt-1.5 leading-relaxed">{o.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="badge-brand mb-4">Who We Serve</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
              Marketing Playbooks for Every Coaching Segment
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {coachingTypes.map((type) => (
              <div
                key={type}
                className="flex items-center gap-3 rounded-xl border border-border/60 bg-card p-4 hover:border-[hsl(var(--brand-orange))]/40 transition-colors"
              >
                <CheckCircle2 className="w-5 h-5 text-[hsl(var(--brand-orange))] shrink-0" />
                <span className="text-sm font-medium text-foreground">{type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="badge-brand mb-4">Our Services</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
              Everything Your Institute Needs to Grow Admissions
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <Link
                key={s.title}
                to={s.href}
                className="group rounded-2xl border border-border/60 bg-card p-6 hover:border-[hsl(var(--brand-orange))]/40 hover:shadow-lg transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-[hsl(var(--brand-orange))]/10 flex items-center justify-center mb-4">
                  <s.icon className="w-5 h-5 text-[hsl(var(--brand-orange))]" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-[hsl(var(--brand-orange))] transition-colors">
                  {s.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.description}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-[hsl(var(--brand-orange))]">
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-page conversion band */}
      <section className="py-12 md:py-14">
        <div className="container mx-auto px-4">
          <div className="rounded-3xl border border-border/60 bg-card p-7 md:p-10 flex flex-col md:flex-row md:items-center gap-6 justify-between">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                Admission season is closer than you think
              </h2>
              <p className="text-sm md:text-base text-muted-foreground">
                Get a free audit of your website, ads and local search presence — no obligation.
              </p>
            </div>
            <a
              href="#free-audit"
              className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-full px-7 text-sm font-semibold text-white bg-[hsl(var(--brand-orange))] hover:bg-[hsl(var(--brand-orange))]/90 transition-all"
            >
              Claim Free Audit
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="badge-brand mb-4">Client Results</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
              Institutes That Stopped Guessing and Started Filling Batches
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div key={t.quote} className="rounded-2xl border border-border/60 bg-card p-6 flex flex-col">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-[hsl(var(--brand-orange))] fill-[hsl(var(--brand-orange))]"
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">"{t.quote}"</p>
                <div className="mt-5 pt-4 border-t border-border/60">
                  <p className="text-sm font-bold text-foreground">{t.author}</p>
                  <p className="text-xs text-muted-foreground">{t.org}</p>
                  <p className="text-xs font-semibold text-[hsl(var(--brand-orange))] mt-2">{t.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="badge-brand mb-4">The Difference</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
              Generic Agency vs. An Education Growth Partner
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            <div className="rounded-2xl border border-border/60 bg-muted/30 p-6">
              <h3 className="text-base font-bold text-foreground mb-4">Typical Agency</h3>
              <ul className="space-y-3">
                {comparison.them.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <X className="w-4 h-4 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border-2 border-[hsl(var(--brand-orange))]/40 bg-card p-6">
              <h3 className="text-base font-bold text-foreground mb-4">The Super 30</h3>
              <ul className="space-y-3">
                {comparison.us.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                    <CheckCircle2 className="w-4 h-4 text-[hsl(var(--brand-orange))] shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="badge-brand mb-4">How It Works</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
              From Audit to Full Batches in 4 Steps
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {process.map((p) => (
              <div key={p.step} className="rounded-2xl border border-border/60 bg-card p-6">
                <p className="text-3xl font-bold text-[hsl(var(--brand-orange))]/30 mb-3">{p.step}</p>
                <h3 className="text-base font-bold text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="badge-brand mb-4">Plans</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
              Simple Plans Built Around Admission Goals
            </h2>
            <p className="text-muted-foreground">
              Transparent monthly pricing. No lock-in, no hidden retainers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {packages.map((p) => (
              <div
                key={p.name}
                className={`relative rounded-2xl bg-card p-6 flex flex-col ${
                  p.popular
                    ? "border-2 border-[hsl(var(--brand-orange))]/50 shadow-lg"
                    : "border border-border/60"
                }`}
              >
                {p.popular && (
                  <span className="absolute -top-3 left-6 rounded-full bg-[hsl(var(--brand-orange))] px-3 py-1 text-[11px] font-semibold text-white">
                    Most Popular
                  </span>
                )}
                <h3 className="text-lg font-bold text-foreground">{p.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">Best for: {p.best}</p>
                <p className="mt-4 mb-5">
                  <span className="text-3xl font-bold text-foreground">{p.price}</span>
                  <span className="text-sm text-muted-foreground">{p.period}</span>
                </p>
                <ul className="space-y-3 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-[hsl(var(--brand-orange))] shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#free-audit"
                  className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold text-white bg-[hsl(var(--brand-orange))] hover:bg-[hsl(var(--brand-orange))]/90 transition-all"
                >
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA (black) */}
      <UnifiedCTASection variant="dark" />

      {/* FAQ after CTA */}
      <Suspense fallback={null}>
        <FAQSection slug="coaching-institutes" />
      </Suspense>

      <Footer />
    </div>
  );
};

export default CoachingInstitutes;
