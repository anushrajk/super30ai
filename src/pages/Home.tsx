import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/landing/Footer";
import { HomeSaasSections } from "@/components/home/HomeSaasSections";
import { HomeHero } from "@/components/home/HomeHero";

const UnifiedCTASection = lazy(() => import("@/components/landing/UnifiedCTASection").then(m => ({ default: m.UnifiedCTASection })));
const ClientLogosSection = lazy(() => import("@/components/landing/ClientLogosSection").then(m => ({ default: m.ClientLogosSection })));
const BlogSection = lazy(() => import("@/components/landing/BlogSection").then(m => ({ default: m.BlogSection })));
const FAQSection = lazy(() => import("@/components/landing/FAQSection").then(m => ({ default: m.FAQSection })));
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
    <HomeHero />
    <Suspense fallback={null}><ClientLogosSection /><HomeSaasSections /><BlogSection /><UnifiedCTASection variant="dark" headline="Work with a Growth-Oriented AI Digital Marketing Agency Today" subtext="We are a seasoned AI-Powered digital marketing company with a legacy of building advanced strategies that focus on growth that drives traffic, conversions, and revenues. We offer a free brand audit with our team of 30 experts to build a plan that helps you focus on your growth." primaryCTA={{ label: "Get My Free Brand Audit", href: "/seo-company-bangalore" }} secondaryCTA={{ label: "Explore Our Services", href: "/digital-marketing-agency-bangalore" }} /><FAQSection slug="home" /></Suspense>
    <Footer />
  </main>
</>;
export default Home;
