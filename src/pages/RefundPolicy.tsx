import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/landing/Footer";
import { UnifiedCTASection } from "@/components/landing/UnifiedCTASection";
import { BentoBadge } from "@/components/ui/bento-grid";
import { ReceiptText, Sparkles } from "lucide-react";

const RefundPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Refund &amp; Cancellation Policy | The Super 30</title>
        <meta name="description" content="Read The Super 30's refund and cancellation policy covering service fees, ad spend, retainers, cancellation notice periods and how to request a refund." />
        <meta name="keywords" content="refund policy, cancellation policy, The Super 30 refund" />
        <link rel="canonical" href="https://www.thesuper30.ai/refund-policy" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Refund & Cancellation Policy | The Super 30" />
        <meta property="og:description" content="Refund and cancellation terms for The Super 30's AI SEO, performance marketing and design services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.thesuper30.ai/refund-policy" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Navbar />

      <main className="min-h-screen pt-16 md:pt-20">
        {/* Hero */}
        <section id="refund-hero" className="relative bg-[#0a0a0a] py-12 md:py-16 lg:py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-br from-brand/10 via-transparent to-transparent" />
          </div>

          <div className="absolute top-10 left-10 w-32 h-32 bg-brand/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-brand/10 rounded-full blur-3xl" />

          <div className="container relative mx-auto px-3 md:px-4">
            <div className="max-w-3xl mx-auto text-center">
              <BentoBadge className="mb-4 text-xs sm:text-sm">
                <ReceiptText className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                Billing &amp; Cancellations
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </BentoBadge>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
                Refund &amp; Cancellation Policy
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-slate-400">
                Last updated: September 2026
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section id="refund-content" className="py-8 md:py-12 lg:py-16 bg-background">
          <div className="container mx-auto px-3 md:px-4">
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6 md:space-y-8">
                <div className="bento-card p-4 md:p-6">
                  <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">1. Overview</h2>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    This policy explains when fees paid to The Super 30 for AI SEO, performance marketing, social media, design and website services can be refunded or cancelled. It applies alongside your signed service agreement or proposal, which takes precedence if there is any conflict.
                  </p>
                </div>

                <div className="bento-card p-4 md:p-6">
                  <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">2. Nature of Our Services</h2>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Our services are professional, time-and-effort based engagements. Work begins as soon as an engagement is confirmed, which means strategy, audits, creative production and campaign management hours are consumed from day one. For this reason, fees for work already delivered are non-refundable.
                  </p>
                </div>

                <div className="bento-card p-4 md:p-6">
                  <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">3. Monthly Retainers</h2>
                  <ul className="list-disc list-inside text-sm md:text-base text-muted-foreground space-y-1 md:space-y-2">
                    <li>Retainers are billed in advance for each service month</li>
                    <li>Cancellation requires 30 days written notice; the current billing cycle is payable in full</li>
                    <li>No partial refunds are issued for unused days within a paid month</li>
                    <li>If we have not started any deliverable for a newly paid month, you may request a credit note towards a future month</li>
                  </ul>
                </div>

                <div className="bento-card p-4 md:p-6">
                  <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">4. Project-Based Work</h2>
                  <ul className="list-disc list-inside text-sm md:text-base text-muted-foreground space-y-1 md:space-y-2">
                    <li>Advance payments and setup fees are non-refundable once discovery or production has started</li>
                    <li>If you cancel before any work has begun, we refund the advance minus applicable transaction charges</li>
                    <li>If you cancel mid-project, you are billed for milestones completed and work in progress; any remaining balance is refunded</li>
                  </ul>
                </div>

                <div className="bento-card p-4 md:p-6">
                  <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">5. Advertising Spend</h2>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Ad spend is separate from our management fees and is paid to platforms such as Google, Meta and LinkedIn. Amounts already spent on campaigns cannot be refunded by us. Any unspent balance held with us is returned within 15 working days of cancellation.
                  </p>
                </div>

                <div className="bento-card p-4 md:p-6">
                  <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">6. Training &amp; Course Fees</h2>
                  <ul className="list-disc list-inside text-sm md:text-base text-muted-foreground space-y-1 md:space-y-2">
                    <li>Seats are limited, so fees are refundable only if cancellation is requested at least 7 days before the batch start date</li>
                    <li>After a batch begins, fees are non-refundable, but you may transfer your seat to the next batch once</li>
                    <li>If we cancel or reschedule a batch, you may choose a full refund or a transfer</li>
                  </ul>
                </div>

                <div className="bento-card p-4 md:p-6">
                  <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">7. What Is Not Refundable</h2>
                  <ul className="list-disc list-inside text-sm md:text-base text-muted-foreground space-y-1 md:space-y-2">
                    <li>Ranking, traffic, lead volume or revenue outcomes, which depend on factors outside our control</li>
                    <li>Third-party costs such as ad spend, hosting, domains, stock assets, plugins and licences</li>
                    <li>Delays caused by pending approvals, access or content from your side</li>
                    <li>Payment gateway or bank transaction charges</li>
                  </ul>
                </div>

                <div className="bento-card p-4 md:p-6">
                  <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">8. How to Request a Refund</h2>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Email your request to billing@thesuper30.ai from your registered email with the invoice number and reason. We acknowledge every request within 3 working days and share a decision within 10 working days. Approved refunds are processed to the original payment method within 15 working days.
                  </p>
                </div>

                <div className="bento-card p-4 md:p-6">
                  <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">9. Chargebacks &amp; Disputes</h2>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Please raise any billing concern with us before initiating a chargeback so we can resolve it directly. Unresolved disputes are governed by the laws of India and subject to the exclusive jurisdiction of the courts of Bengaluru, Karnataka.
                  </p>
                </div>

                <div className="bento-card p-4 md:p-6">
                  <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">10. Changes to This Policy</h2>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    We may update this policy from time to time. The version in effect on the date of your payment applies to that payment.
                  </p>
                </div>

                <div className="bento-card p-4 md:p-6">
                  <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">11. Contact Us</h2>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    For any billing, cancellation or refund question, contact us at:
                  </p>
                  <div className="mt-3 md:mt-4 p-3 md:p-4 bg-muted/30 rounded-xl">
                    <p className="text-foreground font-semibold text-sm md:text-base">The Super 30</p>
                    <p className="text-muted-foreground text-sm">Email: billing@thesuper30.ai</p>
                    <p className="text-muted-foreground text-sm">Phone: +91 89041 50555</p>
                    <p className="text-muted-foreground text-sm">Address: 1st Floor, 46/A, 1st Main Rd, Opposite Mini Forest, Sarakki Industrial Layout, 3rd Phase, J. P. Nagar, Bengaluru, Karnataka 560078</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div id="refund-cta">
          <UnifiedCTASection />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default RefundPolicy;
