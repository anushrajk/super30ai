import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/landing/Footer";
import { UnifiedCTASection } from "@/components/landing/UnifiedCTASection";
import { BentoBadge } from "@/components/ui/bento-grid";
import { FileText, Sparkles } from "lucide-react";

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | The Super 30 - AI Marketing Agency</title>
        <meta name="description" content="Read the terms and conditions that govern your use of The Super 30's AI SEO and Performance Marketing services." />
        <meta name="keywords" content="terms of service, terms and conditions, The Super 30 terms, legal agreement" />
        <link rel="canonical" href="https://thesuper30.ai/terms-of-service" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Navbar />

      <main className="min-h-screen pt-16 md:pt-20">
        {/* Hero */}
        <section id="terms-hero" className="relative bg-[#0a0a0a] py-12 md:py-16 lg:py-20 overflow-hidden">
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
                <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                Legal Agreement
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </BentoBadge>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
                Terms of Service
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-slate-400">
                Last updated: December 2024
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section id="terms-content" className="py-8 md:py-12 lg:py-16 bg-background">
          <div className="container mx-auto px-3 md:px-4">
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6 md:space-y-8">
                <div className="bento-card p-4 md:p-6">
                  <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">1. Agreement to Terms</h2>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    By accessing or using The Super 30's website and services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services. These terms apply to all visitors, users, and clients of our AI SEO and Performance Marketing services.
                  </p>
                </div>

                <div className="bento-card p-4 md:p-6">
                  <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">2. Description of Services</h2>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-3 md:mb-4">
                    The Super 30 provides:
                  </p>
                  <ul className="list-disc list-inside text-sm md:text-base text-muted-foreground space-y-1 md:space-y-2">
                    <li>AI-powered SEO services including AI visibility optimization, content strategy, and technical SEO</li>
                    <li>Performance Marketing services including Google Ads, Meta Ads, LinkedIn Ads, and programmatic advertising</li>
                    <li>Analytics and reporting dashboards</li>
                    <li>Strategic consulting and audit services</li>
                  </ul>
                </div>

                <div className="bento-card p-4 md:p-6">
                  <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">3. Client Obligations</h2>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-3 md:mb-4">
                    As a client, you agree to:
                  </p>
                  <ul className="list-disc list-inside text-sm md:text-base text-muted-foreground space-y-1 md:space-y-2">
                    <li>Provide accurate and complete information about your business</li>
                    <li>Grant necessary access to your website, analytics, and advertising accounts</li>
                    <li>Respond to communications in a timely manner</li>
                    <li>Pay invoices according to agreed payment terms</li>
                    <li>Comply with applicable laws and advertising platform policies</li>
                    <li>Not use our services for illegal or unethical purposes</li>
                  </ul>
                </div>

                <div className="bento-card p-4 md:p-6">
                  <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">4. Payment Terms</h2>
                  <ul className="list-disc list-inside text-sm md:text-base text-muted-foreground space-y-1 md:space-y-2">
                    <li>Fees are outlined in the service agreement or proposal</li>
                    <li>Payment is due within 15 days of invoice date unless otherwise agreed</li>
                    <li>Late payments may incur interest at 1.5% per month</li>
                    <li>Ad spend is billed separately and must be pre-funded or paid as incurred</li>
                    <li>All fees are non-refundable unless otherwise specified</li>
                  </ul>
                </div>

                <div className="bento-card p-4 md:p-6">
                  <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">5. Intellectual Property</h2>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-3 md:mb-4">
                    <strong>Our IP:</strong> All proprietary tools, methodologies, templates, and AI algorithms remain the exclusive property of The Super 30.
                  </p>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-3 md:mb-4">
                    <strong>Client IP:</strong> You retain ownership of your brand assets, content, and data. You grant us a license to use these materials for the purpose of delivering our services.
                  </p>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    <strong>Deliverables:</strong> Upon full payment, you own the campaign creatives, content, and reports created specifically for your account.
                  </p>
                </div>

                <div className="bento-card p-4 md:p-6">
                  <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">6. Confidentiality</h2>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Both parties agree to keep confidential all non-public information shared during the engagement. This includes business strategies, financial information, proprietary data, and campaign performance details. This obligation survives termination of the agreement for a period of 2 years.
                  </p>
                </div>

                <div className="bento-card p-4 md:p-6">
                  <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">7. Disclaimers and Limitations</h2>
                  <ul className="list-disc list-inside text-sm md:text-base text-muted-foreground space-y-1 md:space-y-2">
                    <li>We do not guarantee specific rankings, traffic, or revenue outcomes as these depend on many factors beyond our control</li>
                    <li>Search engine and advertising platform algorithms may change at any time</li>
                    <li>Services are provided "as is" without warranties of any kind</li>
                    <li>Our liability is limited to the fees paid in the 3 months preceding the claim</li>
                    <li>We are not liable for indirect, incidental, or consequential damages</li>
                  </ul>
                </div>

                <div className="bento-card p-4 md:p-6">
                  <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">8. Termination</h2>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-3 md:mb-4">
                    Either party may terminate the service agreement with 30 days written notice. Upon termination:
                  </p>
                  <ul className="list-disc list-inside text-sm md:text-base text-muted-foreground space-y-1 md:space-y-2">
                    <li>Client remains responsible for fees incurred up to termination date</li>
                    <li>We will provide transition support and hand over all account access</li>
                    <li>Confidentiality obligations continue as specified</li>
                    <li>We may immediately terminate for non-payment or material breach</li>
                  </ul>
                </div>

                <div className="bento-card p-4 md:p-6">
                  <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">9. Indemnification</h2>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    You agree to indemnify and hold harmless The Super 30, its officers, directors, and employees from any claims, damages, or expenses arising from your breach of these terms, your content, or your violation of any law or third-party rights.
                  </p>
                </div>

                <div className="bento-card p-4 md:p-6">
                  <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">10. Governing Law</h2>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    These Terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts of Bangalore, Karnataka.
                  </p>
                </div>

                <div className="bento-card p-4 md:p-6">
                  <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">11. Modifications</h2>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    We reserve the right to modify these Terms at any time. We will provide notice of significant changes via email or website announcement. Continued use of our services after changes constitutes acceptance of the modified terms.
                  </p>
                </div>

                <div className="bento-card p-4 md:p-6">
                  <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">12. Contact Information</h2>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    For questions about these Terms of Service, please contact us at:
                  </p>
                  <div className="mt-3 md:mt-4 p-3 md:p-4 bg-muted/30 rounded-xl">
                    <p className="text-foreground font-semibold text-sm md:text-base">The Super 30</p>
                    <p className="text-muted-foreground text-sm">Email: legal@thesuper30.ai</p>
                    <p className="text-muted-foreground text-sm">Phone: +91 89041 50555</p>
                    <p className="text-muted-foreground text-sm">Address: Bangalore, Karnataka, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div id="terms-cta">
          <UnifiedCTASection />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default TermsOfService;
