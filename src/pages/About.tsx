import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/landing/Footer";
import { UnifiedCTASection } from "@/components/landing/UnifiedCTASection";
import { TeamSection } from "@/components/about/TeamSection";
import { InteractiveTimeline } from "@/components/about/InteractiveTimeline";
import { AwardsSection } from "@/components/about/AwardsSection";
import { AnimatedStats } from "@/components/about/AnimatedStats";
import { CultureSection } from "@/components/about/CultureSection";
import { Button } from "@/components/ui/button";
import { BentoCard, BentoIcon, BentoBadge } from "@/components/ui/bento-grid";
import {
  ArrowRight,
  Bot,
  Target,
  Users,
  Award,
  Shield,
  Heart,
  CheckCircle2,
  Sparkles,
  Play,
} from "lucide-react";

const values = [
  {
    icon: Bot,
    title: "AI-First Innovation",
    description: "We stay ahead by embracing AI as a core part of everything we do.",
  },
  {
    icon: Target,
    title: "Results Obsession",
    description: "We measure success by your business outcomes, not vanity metrics.",
  },
  {
    icon: Shield,
    title: "Radical Transparency",
    description: "No hidden fees, no jargon. You always know exactly what we're doing.",
  },
  {
    icon: Heart,
    title: "Client Partnership",
    description: "Your success is our success. We're invested in your long-term growth.",
  },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | The Super 30 - AI Marketing Agency Bangalore</title>
        <meta
          name="description"
          content="Learn about The Super 30, Bangalore's leading AI-powered marketing agency. Our story, mission, and the team behind your growth."
        />
        <link rel="canonical" href="https://aiseoserviceagencybangalore.lovable.app/about" />
      </Helmet>

      <Navbar />

      <main className="min-h-screen pt-16 md:pt-20">
        {/* Hero Section */}
        <section id="about-hero" className="relative bg-white overflow-hidden min-h-[70vh] md:min-h-[80vh] flex items-center">
          {/* Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
          </div>

          <div className="container relative mx-auto px-3 md:px-4 py-8 md:py-12 lg:py-16">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              {/* Badge */}
              <BentoBadge>
                <Award className="w-4 h-4" />
                10+ Years of Excellence
              </BentoBadge>

              {/* H1 and Description */}
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-4">
                  We're{" "}
                  <span className="relative inline-block">
                    <span className="text-brand-gradient">The Super 30</span>
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-brand-gradient rounded-full opacity-50" />
                  </span>
                </h1>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  A team of AI-first marketers on a mission to help founders{" "}
                  <span className="text-foreground font-semibold">dominate the digital landscape</span>. Zero fluff.
                </p>
              </div>

              {/* Trust Signals - Horizontal */}
              <div className="flex flex-wrap justify-center gap-4 py-4">
                {[
                  { icon: Target, text: "300+ Projects" },
                  { icon: Award, text: "₹50Cr+ Revenue" },
                  { icon: Users, text: "50+ Clients" },
                  { icon: Shield, text: "AI-First Approach" },
                ].map((signal, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2 bg-background border border-border rounded-full px-4 py-2"
                  >
                    <signal.icon className="w-4 h-4 text-brand" />
                    <span className="font-medium text-foreground text-sm">{signal.text}</span>
                  </div>
                ))}
              </div>

              {/* Dual CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto">
                    <Users className="w-4 h-4 mr-2" />
                    Get in Touch
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link to="/work">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-border text-foreground hover:bg-muted transition-all duration-300 w-full sm:w-auto"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    See Our Work
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>

              {/* Expert credentials */}
              <div className="flex flex-wrap gap-2 justify-center pt-2">
                {["Ex-Google Experts", "AI-Powered Solutions", "Results-Driven"].map((cred, i) => (
                  <span 
                    key={i}
                    className="inline-flex items-center gap-1.5 bg-muted text-muted-foreground px-3 py-1.5 rounded-full text-xs font-medium"
                  >
                    <Award className="w-3 h-3 text-brand" />
                    {cred}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Animated Stats Counter */}
        <div id="about-stats">
          <AnimatedStats />
        </div>

        {/* Mission Section */}
        <section id="about-mission" className="py-12 md:py-16 lg:py-20 bg-background">
          <div className="container mx-auto px-3 md:px-4">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
              <div>
                <BentoBadge className="mb-4">Our Mission</BentoBadge>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6">
                  Making AI Marketing Accessible to Every Ambitious Business
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  We believe every business deserves access to cutting-edge AI marketing strategies — not just enterprises with deep pockets. That's why we built The Super 30.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our team combines ex-Google expertise with proprietary AI tools to deliver enterprise-grade results at founder-friendly prices.
                </p>
                <ul className="space-y-3">
                  {[
                    "No long-term lock-ins",
                    "Transparent pricing",
                    "Results-based approach",
                    "AI + Human expertise",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-foreground group">
                      <div className="icon-bg-glow w-6 h-6 rounded-full flex items-center justify-center group-hover:bg-brand-gradient transition-all duration-300">
                        <CheckCircle2 className="w-4 h-4 text-brand group-hover:text-white transition-colors" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Values Grid */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                {values.map((value, index) => (
                  <BentoCard key={index} className="group p-3 sm:p-4 md:p-6">
                    <BentoIcon size="sm" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12">
                      <value.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-brand group-hover:text-white transition-colors" />
                    </BentoIcon>
                    <h3 className="font-bold text-foreground mt-2 sm:mt-3 mb-1 sm:mb-2 text-sm sm:text-base group-hover:text-brand transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </BentoCard>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Timeline */}
        <div id="about-timeline">
          <InteractiveTimeline />
        </div>

        {/* Team Section */}
        <div id="about-team">
          <TeamSection />
        </div>

        {/* Awards Section */}
        <div id="about-awards">
          <AwardsSection />
        </div>

        {/* Culture Section */}
        <div id="about-culture">
          <CultureSection />
        </div>

        <div id="about-cta">
          <UnifiedCTASection
            headline="Ready to Join Our Success Stories?"
            subtext="Let's discuss how we can help your business grow."
            primaryCTA={{ label: "Get in Touch", href: "/contact" }}
            secondaryCTA={{ label: "See Our Work", href: "/work" }}
          />
        </div>

        <Footer />
      </main>
    </>
  );
};

export default About;
