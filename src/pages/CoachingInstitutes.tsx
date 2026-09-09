import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/landing/Footer";
import { UnifiedCTASection } from "@/components/landing/UnifiedCTASection";
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

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://thesuper30.com/digital-marketing-for-coaching-institutes" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Navbar />

      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-16 md:pb-24 bg-[#0a0a0a] text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--brand-orange)) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[hsl(var(--brand-orange))] mb-5">
              <GraduationCap className="w-4 h-4" />
              Solutions for Coaching Institutes
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
              Digital Marketing That Fills Your Batches, Not Just Your Enquiry Sheet
            </h1>
            <p className="text-gray-400 text-base md:text-lg max-w-3xl mb-8">
              We help coaching institutes in Bangalore and across India attract more students with AI SEO,
              admission-season Google Ads and lead generation funnels built for the education sector.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact-us"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full px-7 text-sm font-semibold text-white bg-[hsl(var(--brand-orange))] hover:bg-[hsl(var(--brand-orange))]/90 transition-all"
              >
                Get Free Admission Marketing Audit
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/our-work"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full px-7 text-sm font-semibold text-white border border-white/20 hover:bg-white/10 transition-all"
              >
                See Our Results
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-14">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-white/10 bg-white/5 p-5"
              >
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

      {/* Who we serve */}
      <section className="py-16 md:py-20 bg-muted/30">
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
      <section className="py-16 md:py-20">
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
