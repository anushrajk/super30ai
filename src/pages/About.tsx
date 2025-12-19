import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/landing/Footer";
import { UnifiedCTASection } from "@/components/landing/UnifiedCTASection";
import { TeamSection } from "@/components/about/TeamSection";
import { InteractiveTimeline } from "@/components/about/InteractiveTimeline";
import { AwardsSection } from "@/components/about/AwardsSection";
import { AnimatedStats } from "@/components/about/AnimatedStats";
import { CultureSection } from "@/components/about/CultureSection";
import { Button } from "@/components/ui/button";
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
        {/* Hero Section - Advanced with parallax effect */}
        <section className="relative bg-background overflow-hidden py-24 lg:py-32">
          {/* Animated background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50/80 via-background to-background" />
          </div>

          {/* Floating elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-orange-400/20 to-orange-600/10 rounded-full blur-2xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-blue-400/20 to-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-orange-300/30 to-yellow-400/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "2s" }} />

          <div className="container relative mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 px-4 py-1.5 rounded-full mb-6 animate-fade-in">
                <Award className="w-4 h-4 text-orange-600" />
                <span className="text-orange-700 text-sm font-medium">10+ Years of Excellence</span>
                <Sparkles className="w-4 h-4 text-orange-500" />
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                We're{" "}
                <span className="relative">
                  <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                    The Super 30
                  </span>
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                    <path d="M2 10C50 4 150 4 198 10" stroke="url(#about-underline)" strokeWidth="3" strokeLinecap="round" />
                    <defs>
                      <linearGradient id="about-underline" x1="0" y1="0" x2="200" y2="0">
                        <stop stopColor="#f97316" />
                        <stop offset="1" stopColor="#ea580c" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
                A team of AI-first marketers on a mission to help founders dominate the digital landscape. 300+ projects. ₹50Cr+ revenue generated. Zero fluff.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto">
                    <Users className="w-5 h-5 mr-2" />
                    Meet the Team
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link to="/work">
                  <Button size="lg" variant="outline" className="border-2 bg-background/80 backdrop-blur-sm hover:bg-muted/50 hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto">
                    <Play className="w-5 h-5 mr-2" />
                    Watch Our Story
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Animated Stats Counter */}
        <AnimatedStats />

        {/* Mission Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <div>
                <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
                  Our Mission
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Making AI Marketing Accessible to Every Ambitious Business
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
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
                      <div className="w-6 h-6 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center group-hover:from-orange-500 group-hover:to-orange-600 transition-all duration-300">
                        <CheckCircle2 className="w-4 h-4 text-orange-500 group-hover:text-white transition-colors" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Values Grid */}
              <div className="grid grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="p-6 bg-muted/30 rounded-2xl border border-border/50 hover:border-orange-500/50 hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center mb-4 group-hover:from-orange-500 group-hover:to-orange-600 transition-all duration-300">
                      <value.icon className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Timeline */}
        <InteractiveTimeline />

        {/* Team Section */}
        <TeamSection />

        {/* Awards Section */}
        <AwardsSection />

        {/* Culture Section */}
        <CultureSection />

        <UnifiedCTASection
          headline="Ready to Join Our Success Stories?"
          subtext="Let's discuss how we can help your business grow."
          primaryCTA={{ label: "Get in Touch", href: "/contact" }}
          secondaryCTA={{ label: "See Our Work", href: "/work" }}
        />

        <Footer />
      </main>
    </>
  );
};

export default About;
