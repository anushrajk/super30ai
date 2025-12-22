import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/landing/Footer";
import { UnifiedCTASection } from "@/components/landing/UnifiedCTASection";
import { BentoCard, BentoIcon, BentoBadge } from "@/components/ui/bento-grid";
import { Shield, BarChart3, Megaphone, Settings2, Cookie, Sparkles } from "lucide-react";

const cookieTypes = [
  {
    name: "Necessary Cookies",
    icon: Shield,
    description: "These cookies are essential for the website to function properly. They enable basic functions like page navigation, secure areas access, and remembering your preferences.",
    examples: ["Session management", "Security tokens", "User preferences", "Form submissions"],
    canDisable: false,
  },
  {
    name: "Analytics Cookies",
    icon: BarChart3,
    description: "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.",
    examples: ["Google Analytics", "Page view tracking", "User journey analysis", "Performance monitoring"],
    canDisable: true,
  },
  {
    name: "Marketing Cookies",
    icon: Megaphone,
    description: "These cookies are used to track visitors across websites to display relevant advertisements based on your browsing behavior.",
    examples: ["Facebook Pixel", "Google Ads", "LinkedIn Insight", "Retargeting pixels"],
    canDisable: true,
  },
  {
    name: "Functional Cookies",
    icon: Settings2,
    description: "These cookies enable enhanced functionality and personalization, such as remembering your choices and providing live chat support.",
    examples: ["Chat widgets", "Video embeds", "Social sharing", "Personalization features"],
    canDisable: true,
  },
];

const CookiePolicy = () => {
  return (
    <>
      <Helmet>
        <title>Cookie Policy | The Super 30 - AI Marketing Agency</title>
        <meta name="description" content="Learn about the cookies used on The Super 30 website and how to manage your cookie preferences." />
        <link rel="canonical" href="https://aiseoserviceagencybangalore.lovable.app/cookie-policy" />
      </Helmet>

      <Navbar />

      <main className="min-h-screen pt-16 md:pt-20">
        {/* Hero */}
        <section id="cookie-hero" className="relative bg-[#0a0a0a] py-12 md:py-16 lg:py-20 overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-br from-brand/10 via-transparent to-transparent" />
          </div>
          
          {/* Floating elements */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-brand/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-brand/10 rounded-full blur-3xl" />
          
          <div className="container relative mx-auto px-3 md:px-4">
            <div className="max-w-3xl mx-auto text-center">
              <BentoBadge className="mb-4 text-xs sm:text-sm">
                <Cookie className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                Cookie Information
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </BentoBadge>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
                Cookie Policy
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-slate-400">
                Last updated: December 2024
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section id="cookie-content" className="py-8 md:py-12 lg:py-16 bg-background">
          <div className="container mx-auto px-3 md:px-4">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6 md:space-y-8">
                <div className="bento-card p-4 md:p-6">
                  <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">What Are Cookies?</h2>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently, provide information to site owners, and enhance user experience. Cookies can be "session" cookies (deleted when you close your browser) or "persistent" cookies (remain on your device for a set period).
                  </p>
                </div>

                <div className="bento-card p-4 md:p-6">
                  <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">How We Use Cookies</h2>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-3 md:mb-4">
                    The Super 30 uses cookies for several purposes:
                  </p>
                  <ul className="list-disc list-inside text-sm md:text-base text-muted-foreground space-y-1 md:space-y-2">
                    <li>To enable essential website functionality</li>
                    <li>To remember your preferences and settings</li>
                    <li>To understand how you use our website</li>
                    <li>To improve our services and user experience</li>
                    <li>To deliver relevant marketing messages</li>
                    <li>To measure the effectiveness of our marketing campaigns</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6">Types of Cookies We Use</h2>
                  <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
                    {cookieTypes.map((cookie, index) => (
                      <BentoCard key={index} className="group p-4 md:p-6">
                        <div className="flex items-center gap-3 mb-3 md:mb-4">
                          <BentoIcon size="sm">
                            <cookie.icon className="w-4 h-4 sm:w-5 sm:h-5 text-brand group-hover:text-white transition-colors" />
                          </BentoIcon>
                          <div>
                            <h3 className="font-bold text-foreground text-sm md:text-base group-hover:text-brand transition-colors">{cookie.name}</h3>
                            <span className={`text-xs px-2 py-0.5 rounded-full ${cookie.canDisable ? 'bg-blue-500/10 text-blue-500' : 'bg-muted text-muted-foreground'}`}>
                              {cookie.canDisable ? 'Optional' : 'Required'}
                            </span>
                          </div>
                        </div>
                        <p className="text-xs sm:text-sm text-muted-foreground mb-3">{cookie.description}</p>
                        <div className="flex flex-wrap gap-1 md:gap-2">
                          {cookie.examples.map((example, i) => (
                            <span key={i} className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground">
                              {example}
                            </span>
                          ))}
                        </div>
                      </BentoCard>
                    ))}
                  </div>
                </div>

                <div className="bento-card p-4 md:p-6">
                  <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">Third-Party Cookies</h2>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-3 md:mb-4">
                    We use services from third parties that may also set cookies on your device. These include:
                  </p>
                  <ul className="list-disc list-inside text-sm md:text-base text-muted-foreground space-y-1 md:space-y-2">
                    <li><strong>Google Analytics:</strong> For website analytics and performance measurement</li>
                    <li><strong>Google Ads:</strong> For remarketing and conversion tracking</li>
                    <li><strong>Facebook/Meta:</strong> For social sharing and advertising</li>
                    <li><strong>LinkedIn:</strong> For B2B marketing and analytics</li>
                    <li><strong>Hotjar:</strong> For user behavior analysis (heatmaps, recordings)</li>
                  </ul>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mt-3 md:mt-4">
                    These third parties have their own privacy policies governing their use of cookies.
                  </p>
                </div>

                <div className="bento-card p-4 md:p-6">
                  <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">How to Manage Cookies</h2>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-3 md:mb-4">
                    You have several options for managing cookies:
                  </p>
                  <ul className="list-disc list-inside text-sm md:text-base text-muted-foreground space-y-1 md:space-y-2 mb-3 md:mb-4">
                    <li><strong>Cookie Banner:</strong> Use our cookie consent banner to customize your preferences</li>
                    <li><strong>Browser Settings:</strong> Most browsers allow you to block or delete cookies through settings</li>
                    <li><strong>Opt-Out Tools:</strong> Use tools like Google's Opt-Out Browser Add-on</li>
                    <li><strong>Do Not Track:</strong> Enable "Do Not Track" in your browser settings</li>
                  </ul>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Note: Blocking certain cookies may impact website functionality and your experience.
                  </p>
                </div>

                <div className="bento-card p-4 md:p-6">
                  <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">Browser-Specific Instructions</h2>
                  <ul className="list-disc list-inside text-sm md:text-base text-muted-foreground space-y-1 md:space-y-2">
                    <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies and other site data</li>
                    <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
                    <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
                    <li><strong>Edge:</strong> Settings → Privacy, search, and services → Cookies</li>
                  </ul>
                </div>

                <div className="bento-card p-4 md:p-6">
                  <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">Updates to This Policy</h2>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    We may update this Cookie Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. We will post any changes on this page with an updated revision date.
                  </p>
                </div>

                <div className="bento-card p-4 md:p-6">
                  <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">Contact Us</h2>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    If you have questions about our use of cookies, please contact us at:
                  </p>
                  <div className="mt-3 md:mt-4 p-3 md:p-4 bg-muted/30 rounded-xl">
                    <p className="text-foreground font-semibold text-sm md:text-base">The Super 30</p>
                    <p className="text-muted-foreground text-sm">Email: privacy@thesuper30.ai</p>
                    <p className="text-muted-foreground text-sm">Phone: +91 73532 52526</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div id="cookie-cta">
          <UnifiedCTASection />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default CookiePolicy;
