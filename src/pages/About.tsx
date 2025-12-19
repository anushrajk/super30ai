import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Bot,
  Target,
  Users,
  Award,
  Zap,
  Heart,
  Shield,
  TrendingUp,
  Lightbulb,
  CheckCircle2,
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

const milestones = [
  { year: "2015", title: "Founded", description: "Started as a boutique SEO consultancy" },
  { year: "2018", title: "Expanded", description: "Added Performance Marketing services" },
  { year: "2021", title: "AI Pioneer", description: "First agency to offer AI SEO in India" },
  { year: "2024", title: "300+ Clients", description: "Crossed 300 successful projects" },
  { year: "2025", title: "Super 30", description: "Rebranded as The Super 30" },
];

const team = [
  {
    name: "Leadership Team",
    members: [
      { title: "Ex-Google SEO Strategists", count: "3" },
      { title: "Performance Marketing Experts", count: "5" },
      { title: "AI & Data Scientists", count: "4" },
      { title: "Creative Directors", count: "2" },
    ],
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
        <section className="relative bg-background overflow-hidden py-24 lg:py-32">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50/80 via-background to-background" />
          </div>

          <div className="container relative mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 px-4 py-1.5 rounded-full mb-6">
                <Users className="w-4 h-4 text-orange-600" />
                <span className="text-orange-700 text-sm font-medium">About Us</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                We're{" "}
                <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                  The Super 30
                </span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                A team of AI-first marketers on a mission to help founders dominate the digital landscape.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-24 bg-muted/30">
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
                    <li key={i} className="flex items-center gap-3 text-foreground">
                      <CheckCircle2 className="w-5 h-5 text-orange-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "10+", label: "Years Experience" },
                  { value: "300+", label: "Projects Delivered" },
                  { value: "₹50Cr+", label: "Revenue Generated" },
                  { value: "95%", label: "Client Retention" },
                ].map((stat, i) => (
                  <Card key={i} className="bg-background border-border/50">
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-1">
                        {stat.value}
                      </div>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
                Our Values
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                What We Stand For
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="bg-muted/30 border-border/50 hover:border-orange-500/50 hover:shadow-xl transition-all duration-300 group"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-orange-500 group-hover:to-orange-600 transition-all duration-300">
                      <value.icon className="w-7 h-7 text-orange-500 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
                Our Journey
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                From Startup to Super 30
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 to-orange-600" />

                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className={`relative flex items-center mb-8 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div className="w-full md:w-1/2 pr-8 md:pr-12 pl-12 md:pl-0">
                      <Card
                        className={`bg-background border-border/50 ${
                          index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                        }`}
                      >
                        <CardContent className="p-6">
                          <span className="text-orange-500 font-bold text-lg">{milestone.year}</span>
                          <h3 className="text-xl font-bold text-foreground mt-1">{milestone.title}</h3>
                          <p className="text-muted-foreground text-sm mt-2">{milestone.description}</p>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Timeline dot */}
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full transform md:-translate-x-1/2 border-4 border-background" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
                Our Team
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                The Experts Behind Your Growth
              </h2>
              <p className="text-lg text-muted-foreground">
                A diverse team of specialists united by one goal — your success.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {team[0].members.map((member, index) => (
                <Card key={index} className="bg-muted/30 border-border/50">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-2">
                      {member.count}
                    </div>
                    <p className="text-foreground font-medium">{member.title}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
          <div className="container relative mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
              Let's discuss how we can help your business grow.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg shadow-orange-500/30 w-full sm:w-auto"
                >
                  Get in Touch
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/work">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/20 text-white hover:bg-white/10 w-full sm:w-auto"
                >
                  See Our Work
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default About;
