import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/landing/Footer";
import { UnifiedCTASection } from "@/components/landing/UnifiedCTASection";
import { BentoBadge } from "@/components/ui/bento-grid";
import { Shield, Sparkles } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | The Super 30 - AI Marketing Agency</title>
        <meta name="description" content="Learn how The Super 30 collects, uses, and protects your personal information. Your privacy is our priority." />
        <link rel="canonical" href="https://aiseoserviceagencybangalore.lovable.app/privacy-policy" />
      </Helmet>

      <Navbar />

      <main className="min-h-screen pt-16 md:pt-20">
        {/* Hero */}
        <section id="privacy-hero" className="relative bg-[#0a0a0a] py-12 md:py-16 lg:py-20 overflow-hidden">
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
                <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                Your Data, Protected
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </BentoBadge>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
                Privacy Policy
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-slate-400">
                Last updated: December 2024
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section id="privacy-content" className="py-8 md:py-12 lg:py-16 bg-background">
          <div className="container mx-auto px-3 md:px-4">
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6 md:space-y-8">
                <div className="bento-card p-4 md:p-6">
                  <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">1. Introduction</h2>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    The Super 30 ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our AI SEO and Performance Marketing services.
                  </p>
                </div>

                <div className="bento-card p-4 md:p-6">
                  <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">2. Information We Collect</h2>
                  <h3 className="text-base md:text-lg font-semibold text-foreground mb-2">Personal Information</h3>
                  <ul className="list-disc list-inside text-sm md:text-base text-muted-foreground space-y-1 md:space-y-2 mb-4">
                    <li>Name and contact details (email, phone number)</li>
                    <li>Company name and website URL</li>
                    <li>Job title and role</li>
                    <li>Billing and payment information</li>
                    <li>Communication preferences</li>
                  </ul>
                  
                  <h3 className="text-base md:text-lg font-semibold text-foreground mb-2">Automatically Collected Information</h3>
                  <ul className="list-disc list-inside text-sm md:text-base text-muted-foreground space-y-1 md:space-y-2">
                    <li>IP address and browser type</li>
                    <li>Device information</li>
                    <li>Pages visited and time spent</li>
                    <li>Referral source</li>
                    <li>Cookies and tracking technologies</li>
                  </ul>
                </div>

                <div className="bento-card p-4 md:p-6">
                  <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">3. How We Use Your Information</h2>
                  <ul className="list-disc list-inside text-sm md:text-base text-muted-foreground space-y-1 md:space-y-2">
                    <li>To provide and improve our AI SEO and marketing services</li>
                    <li>To communicate with you about your account and services</li>
                    <li>To send marketing communications (with your consent)</li>
                    <li>To analyze website usage and optimize user experience</li>
                    <li>To comply with legal obligations</li>
                    <li>To protect against fraud and unauthorized access</li>
                  </ul>
                </div>

                <div className="bento-card p-4 md:p-6">
                  <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">4. Data Sharing and Disclosure</h2>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-3 md:mb-4">
                    We do not sell your personal information. We may share your data with:
                  </p>
                  <ul className="list-disc list-inside text-sm md:text-base text-muted-foreground space-y-1 md:space-y-2">
                    <li>Service providers who assist in our operations (analytics, hosting, payment processing)</li>
                    <li>Business partners with your explicit consent</li>
                    <li>Legal authorities when required by law</li>
                    <li>Professional advisors (lawyers, accountants)</li>
                  </ul>
                </div>

                <div className="bento-card p-4 md:p-6">
                  <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">5. Your Rights (GDPR Compliance)</h2>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-3 md:mb-4">
                    If you are located in the European Economic Area, you have the right to:
                  </p>
                  <ul className="list-disc list-inside text-sm md:text-base text-muted-foreground space-y-1 md:space-y-2">
                    <li><strong>Access:</strong> Request a copy of your personal data</li>
                    <li><strong>Rectification:</strong> Correct inaccurate or incomplete data</li>
                    <li><strong>Erasure:</strong> Request deletion of your personal data</li>
                    <li><strong>Restrict Processing:</strong> Limit how we use your data</li>
                    <li><strong>Data Portability:</strong> Receive your data in a portable format</li>
                    <li><strong>Object:</strong> Object to certain processing activities</li>
                    <li><strong>Withdraw Consent:</strong> Withdraw consent at any time</li>
                  </ul>
                </div>

                <div className="bento-card p-4 md:p-6">
                  <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">6. Data Security</h2>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    We implement appropriate technical and organizational measures to protect your personal data, including encryption, access controls, and regular security assessments. However, no method of transmission over the internet is 100% secure.
                  </p>
                </div>

                <div className="bento-card p-4 md:p-6">
                  <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">7. Data Retention</h2>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce agreements. Typically, we retain client data for 3 years after the end of the business relationship.
                  </p>
                </div>

                <div className="bento-card p-4 md:p-6">
                  <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">8. Cookies</h2>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    We use cookies and similar tracking technologies to enhance your experience. For detailed information about the cookies we use, please see our Cookie Policy.
                  </p>
                </div>

                <div className="bento-card p-4 md:p-6">
                  <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">9. Third-Party Links</h2>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites and encourage you to review their privacy policies.
                  </p>
                </div>

                <div className="bento-card p-4 md:p-6">
                  <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">10. Children's Privacy</h2>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children.
                  </p>
                </div>

                <div className="bento-card p-4 md:p-6">
                  <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">11. Changes to This Policy</h2>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
                  </p>
                </div>

                <div className="bento-card p-4 md:p-6">
                  <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">12. Contact Us</h2>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    If you have questions about this Privacy Policy or wish to exercise your rights, please contact us at:
                  </p>
                  <div className="mt-3 md:mt-4 p-3 md:p-4 bg-muted/30 rounded-xl">
                    <p className="text-foreground font-semibold text-sm md:text-base">The Super 30</p>
                    <p className="text-muted-foreground text-sm">Email: privacy@thesuper30.ai</p>
                    <p className="text-muted-foreground text-sm">Phone: +91 73532 52526</p>
                    <p className="text-muted-foreground text-sm">Address: Bangalore, Karnataka, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div id="privacy-cta">
          <UnifiedCTASection />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default PrivacyPolicy;
