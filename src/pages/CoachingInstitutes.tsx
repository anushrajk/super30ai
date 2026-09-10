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
  MessageSquare,
  Phone,
  X,
} from "lucide-react";

const FAQSection = lazy(() =>
  import("@/components/landing/FAQSection").then((m) => ({ default: m.FAQSection }))
);

const problems = [
  {
    title: "Students Can't Find You Online",
    description:
      "Parents and students search 'coaching near me' before they ever walk in. If your institute isn't in those results, the enquiry goes to the centre down the road.",
  },
  {
    title: "Ad Budget Spent Without Direction",
    description:
      "Campaigns built for other industries reach the wrong audience. Coaching needs course-level targeting, admission-season timing and counsellor-ready enquiries.",
  },
  {
    title: "Enquiries Go Cold Before Follow-Up",
    description:
      "Leads sitting in a spreadsheet lose interest within hours. Without WhatsApp and CRM follow-up, good enquiries never turn into admissions.",
  },
  {
    title: "Your Results Aren't Visible Anywhere",
    description:
      "Toppers, faculty and placement records are your strongest proof. If they don't show up on your website, Google profile and social feeds, parents can't trust what they can't see.",
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
      "We make your institute the answer students find on Google and AI assistants when they search for your courses in your city.",
    points: [
      "Local and 'near me' search optimisation",
      "Course and exam-specific landing pages",
      "Google Business Profile and reviews",
    ],
    href: "/seo-company-bangalore",
  },
  {
    icon: Target,
    title: "Admission Campaigns on Google & Meta",
    description:
      "Paid campaigns planned around your batch calendar, targeting students and parents actively looking for coaching.",
    points: [
      "Search, Performance Max and YouTube campaigns",
      "Instagram and Facebook admission creatives",
      "Course-wise budgets and enquiry tracking",
    ],
    href: "/google-ads-agency-bangalore",
  },
  {
    icon: Users,
    title: "Student Lead Generation",
    description:
      "Enquiry funnels built for counsellors — from the first click to a confirmed seat, with nothing lost in between.",
    points: [
      "Admission landing pages and enquiry forms",
      "WhatsApp and call-based lead capture",
      "CRM routing and follow-up workflows",
    ],
    href: "/lead-generation-agency-bangalore",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description:
      "The content parents judge you by — results, faculty, classroom life and student stories, published consistently.",
    points: [
      "Result-day and topper announcement creatives",
      "Reels, shorts and faculty explainer videos",
      "Community management and enquiry replies",
    ],
    href: "/social-media-marketing-agency-bangalore",
  },
  {
    icon: Globe,
    title: "Admission-Focused Websites",
    description:
      "A fast, mobile-first website structured like an admission journey instead of a brochure.",
    points: [
      "Course, faculty and results pages",
      "Fee enquiry and demo-class booking forms",
      "WhatsApp chat and click-to-call integration",
    ],
    href: "/web-development-company-bangalore",
  },
  {
    icon: PenTool,
    title: "Branding & Creative Design",
    description:
      "Prospectus, hoardings and digital creatives that make your institute look as credible as it teaches.",
    points: [
      "Logo, prospectus and brand kit",
      "Print, banner and standee design",
      "Campaign creatives for every admission cycle",
    ],
    href: "/graphic-design-agency-bangalore",
  },
];

const comparison = {
  them: [
    "Generic campaigns copied from other industries",
    "Reports full of impressions, clicks and likes",
    "No visibility into which enquiry became an admission",
    "One-size-fits-all creatives, no admission calendar",
  ],
  us: [
    "Playbooks built only for coaching and education",
    "Reporting focused on enquiries, walk-ins and admissions",
    "CRM and WhatsApp tracking from enquiry to enrollment",
    "Campaigns timed to your batch and result calendar",
  ],
};

const engagements = [
  {
    name: "Local Visibility",
    best: "Single-centre institutes building a presence",
    features: [
      "AI SEO for 'near me' and course keywords",
      "Google Business Profile management",
      "Monthly social media creatives",
      "Enquiry reporting and review support",
    ],
  },
  {
    name: "Admission Growth",
    best: "Institutes filling multiple batches every cycle",
    popular: true,
    features: [
      "Everything in Local Visibility",
      "Google and Meta admission campaigns",
      "Landing pages with WhatsApp lead capture",
      "Counsellor-ready lead routing",
      "Regular optimisation reviews",
    ],
  },
  {
    name: "Multi-Centre Scale",
    best: "Chains and multi-city academies",
    features: [
      "Centre-wise campaigns and reporting",
      "Full funnel: SEO, ads, social and creatives",
      "CRM integration and lead attribution",
      "Dedicated growth strategist",
    ],
  },
];

const process = [
  {
    step: "01",
    title: "Free Marketing Audit",
    description:
      "We review your website, local search presence, ads and enquiry follow-up to find where students drop off.",
  },
  {
    step: "02",
    title: "Admission Growth Plan",
    description:
      "A channel-by-channel plan mapped to your courses, batches and admission calendar — with clear ownership.",
  },
  {
    step: "03",
    title: "Launch & Optimise",
    description:
      "Campaigns, pages and content go live, then get refined around enquiry quality and counsellor feedback.",
  },
  {
    step: "04",
    title: "Transparent Reporting",
    description:
      "Regular reporting on enquiries, walk-ins and admissions so you always know what your marketing produced.",
  },
];

const CoachingInstitutes = () => {
  const title = "Digital Marketing for Coaching Institutes in Bangalore | The Super 30";
  const description =
    "Digital marketing agency for coaching institutes — AI SEO, admission campaigns, student lead generation, websites and creatives that fill your batches. Free audit.";

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
                Digital Marketing Agency for Coaching Institutes
              </h1>
              <p className="text-gray-400 text-base md:text-lg max-w-2xl mb-7">
                From AI SEO and admission campaigns to enquiry funnels, websites and creatives — we run the
                complete marketing engine for coaching institutes in Bangalore and across India, so your
                counsellors spend their day speaking to serious students.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Be the institute students find first for 'coaching near me'",
                  "Every enquiry captured on WhatsApp, call and form",
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
                <span>Education-specialist team</span>
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
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="badge-brand mb-4">Our Services</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
              What We Do for Coaching Institutes
            </h2>
            <p className="text-muted-foreground">
              One team for search, ads, social, website and creatives — all working towards the same admission goal.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <Link
                key={s.title}
                to={s.href}
                className="group rounded-2xl border border-border/60 bg-card p-6 flex flex-col hover:border-[hsl(var(--brand-orange))]/40 hover:shadow-lg transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-[hsl(var(--brand-orange))]/10 flex items-center justify-center mb-4">
                  <s.icon className="w-5 h-5 text-[hsl(var(--brand-orange))]" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-[hsl(var(--brand-orange))] transition-colors">
                  {s.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.description}</p>
                <ul className="space-y-2 mb-5 flex-1">
                  {s.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-[hsl(var(--brand-orange))] shrink-0 mt-0.5" />
                      {point}
                    </li>
                  ))}
                </ul>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-[hsl(var(--brand-orange))]">
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="badge-brand mb-4">Who We Serve</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
              Marketing Playbooks for Every Coaching Segment
            </h2>
            <p className="text-muted-foreground">
              Each segment gets its own messaging, targeting and admission cycle planning.
            </p>
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

      {/* Problems */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="badge-brand mb-4">The Problem</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
              Why Coaching Institutes Struggle to Grow Online
            </h2>
            <p className="text-muted-foreground">
              Great teaching alone doesn't fill classrooms anymore. Visibility and follow-up do.
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

      {/* Comparison */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="badge-brand mb-4">The Difference</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
              Generic Agency vs. An Education Growth Partner
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            <div className="rounded-2xl border border-border/60 bg-card p-6">
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
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="badge-brand mb-4">How It Works</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
              How We Work With Your Institute
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

      {/* Engagement models */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="badge-brand mb-4">Engagement Models</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
              Choose the Scope That Fits Your Institute
            </h2>
            <p className="text-muted-foreground">
              Every engagement is quoted after the free audit, based on your courses and admission targets.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {engagements.map((p) => (
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
                    Most Chosen
                  </span>
                )}
                <h3 className="text-lg font-bold text-foreground">{p.name}</h3>
                <p className="text-xs text-muted-foreground mt-1 mb-5">Best for: {p.best}</p>
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
                  Request a Quote
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Talk to us band */}
      <section className="py-12 md:py-14">
        <div className="container mx-auto px-4">
          <div className="rounded-3xl border border-border/60 bg-card p-7 md:p-10 text-center max-w-3xl mx-auto">
            <MessageSquare className="w-6 h-6 text-[hsl(var(--brand-orange))] mx-auto mb-4" />
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">
              Not sure which service your institute needs first?
            </h2>
            <p className="text-sm md:text-base text-muted-foreground mb-6">
              Tell us about your courses and batches, and we'll tell you where to start.
            </p>
            <Link
              to="/contact-us"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full px-7 text-sm font-semibold text-white bg-[hsl(var(--brand-orange))] hover:bg-[hsl(var(--brand-orange))]/90 transition-all"
            >
              Talk to Our Education Team
              <ArrowRight className="h-4 w-4" />
            </Link>
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
