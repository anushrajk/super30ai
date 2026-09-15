import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Play, Search, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/landing/Footer";
import { HomeSaasSections } from "@/components/home/HomeSaasSections";

const UnifiedCTASection = lazy(() => import("@/components/landing/UnifiedCTASection").then(m => ({ default: m.UnifiedCTASection })));
const ClientLogosSection = lazy(() => import("@/components/landing/ClientLogosSection").then(m => ({ default: m.ClientLogosSection })));
const BlogSection = lazy(() => import("@/components/landing/BlogSection").then(m => ({ default: m.BlogSection })));
const FAQSection = lazy(() => import("@/components/landing/FAQSection").then(m => ({ default: m.FAQSection })));
const HeroDashboardPreview = lazy(() => import("@/components/home/HeroDashboardPreview").then(m => ({ default: m.HeroDashboardPreview })));

const Home = () => <>
  <Helmet>
    <title>Digital Marketing Agency &amp; AI Growth Company | TheSuper30</title>
    <meta name="description" content="A leading AI-driven digital marketing agency helping businesses achieve real ROI and scalable growth with proven strategies. Book a free consultation now." />
    <meta name="keywords" content="Digital Marketing Agency, Digital Marketing Company, AI digital marketing agency, AI Digital Marketing Company, AI based digital marketing agency" />
    <link rel="canonical" href="https://www.thesuper30.ai/" />
    <meta property="og:title" content="Stop Guessing. Start Growing With AI-Powered Marketing." />
    <meta property="og:description" content="From strategy to execution, Super 30 delivers proven 10x revenue growth. Book your free call now!" />
    <meta property="og:type" content="website" /><meta property="og:url" content="https://www.thesuper30.ai/" /><meta property="og:image" content="https://www.thesuper30.ai/super30-social-logo.jpg" />
    <meta name="twitter:card" content="summary_large_image" /><meta name="twitter:title" content="Stop Guessing. Start Growing With AI-Powered Marketing." /><meta name="twitter:description" content="From strategy to execution, Super 30 delivers proven 10x revenue growth. Book your free call now!" /><meta name="twitter:image" content="https://www.thesuper30.ai/super30-social-logo.jpg" /><meta name="twitter:url" content="https://www.thesuper30.ai/" /><meta name="robots" content="index, follow" />
  </Helmet>
  <Navbar />
  <main className="home-saas min-h-screen pt-16 md:pt-20">
    <section id="home-hero" className="home-hero"><div className="container mx-auto px-4">
      <div className="home-hero-copy"><div className="home-hero-badge"><Sparkles /> Engineered for measurable growth</div><h1>The AI Digital Marketing Agency <span>built to turn attention into revenue.</span></h1><p>Super 30 connects AI-powered strategy, search, performance marketing, creative and web experiences to bring in qualified customers and accelerate sustainable growth.</p><div className="home-hero-actions"><Button asChild size="lg" className="rounded-full"><Link to="/contact-us"><Search />Get a Free Strategy Call<ArrowRight /></Link></Button><Button asChild size="lg" variant="outline" className="rounded-full"><Link to="/our-work"><Play />See our work</Link></Button></div></div>
      <div className="home-hero-dashboard"><div className="home-dashboard-label"><span>Live growth view</span><strong>AI + human expertise</strong></div><Suspense fallback={<div className="w-full aspect-[16/8] bg-muted rounded-2xl" />}><HeroDashboardPreview /></Suspense></div>
      <div className="home-hero-metrics"><div><strong>300%+</strong><span>Average traffic growth</span></div><div><strong>50+</strong><span>AI audits delivered</span></div><div><strong>$2M+</strong><span>Revenue generated</span></div><div><strong>4.8/5</strong><span>Client rating</span></div></div>
    </div></section>
    <Suspense fallback={null}><ClientLogosSection /><HomeSaasSections /><BlogSection /><UnifiedCTASection variant="dark" headline="Work with a Growth-Oriented AI Digital Marketing Agency Today" subtext="We are a seasoned AI-Powered digital marketing company with a legacy of building advanced strategies that focus on growth that drives traffic, conversions, and revenues. We offer a free brand audit with our team of 30 experts to build a plan that helps you focus on your growth." primaryCTA={{ label: "Get My Free Brand Audit", href: "/seo-company-bangalore" }} secondaryCTA={{ label: "Explore Our Services", href: "/digital-marketing-agency-bangalore" }} /><FAQSection slug="home" /></Suspense>
    <Footer />
  </main>
</>;
export default Home;
