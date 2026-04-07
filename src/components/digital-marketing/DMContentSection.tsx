import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const DMContentSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.05 });

  return (
    <section ref={sectionRef} className="py-12 md:py-20 bg-muted/20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className={`max-w-4xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

          <article className="prose prose-lg max-w-none">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6">
              The Complete Guide to Choosing the Right <span className="text-brand">Digital Marketing Agency in Bangalore</span>
            </h2>

            {/* Hero image for the article */}
            <div className="rounded-2xl overflow-hidden mb-8">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=500&fit=crop"
                alt="Digital marketing agency team working together in Bangalore"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>

            <div className="space-y-8 text-muted-foreground leading-relaxed">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">What Does a Digital Marketing Agency in Bangalore Actually Do?</h3>
                <p className="text-base">
                  A digital marketing agency in Bangalore is a full-service partner that handles every aspect of your online presence — from search engine optimization (SEO) and pay-per-click advertising (PPC) to social media marketing, content creation, web design, and email automation. The best digital marketing agencies in Bangalore, like The Super 30, go beyond individual tactics and build integrated growth strategies that connect every channel into a unified revenue engine.
                </p>
                <p className="text-base mt-3">
                  Unlike freelancers or single-channel specialists, a comprehensive digital marketing agency in Bangalore provides a team of 30+ experts covering every discipline. This means your SEO strategy informs your ad targeting, your social media content drives email sign-ups, and your website design converts traffic into leads — all orchestrated by one accountable team.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">Why Bangalore Businesses Need a Specialized Digital Marketing Agency</h3>
                <div className="grid md:grid-cols-2 gap-6 my-6">
                  <img
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop"
                    alt="Bangalore tech professionals collaborating on digital marketing strategy"
                    className="w-full h-48 object-cover rounded-xl"
                    loading="lazy"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop"
                    alt="Digital marketing team analyzing campaign performance data"
                    className="w-full h-48 object-cover rounded-xl"
                    loading="lazy"
                  />
                </div>
                <p className="text-base">
                  Bangalore's business ecosystem is unlike any other city in India. With over 10,000 startups, 400+ multinational corporations, and a population of 13+ million digitally active consumers, the competition for online attention is intense. A digital marketing agency in Bangalore must understand this unique landscape — the tech-savvy audience, the B2B SaaS corridors of Whitefield and Electronic City, the D2C brands of Indiranagar, and the enterprise clients of MG Road.
                </p>
                <p className="text-base mt-3">
                  Generic digital marketing strategies built for tier-2 cities simply don't work in Bangalore. Your audience expects sophisticated messaging, your competitors are already investing heavily in digital, and Google's algorithm rewards locally relevant, high-quality content. That's why choosing a digital marketing agency that's rooted in Bangalore is critical for sustained growth.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">How The Super 30 Became Bangalore's Most Trusted Digital Marketing Agency</h3>
                <p className="text-base">
                  The Super 30 started as a small team of digital marketing enthusiasts in Bangalore who believed that expertise and data could together deliver results no traditional agency could match. Today, we're a 30+ member team serving 300+ brands across Bangalore and India, with a 4.9/5 client satisfaction rating and an average 5x ROI on marketing spend.
                </p>
                <p className="text-base mt-3">
                  What sets our digital marketing agency in Bangalore apart is our commitment to three principles: (1) Every campaign must tie directly to revenue, not vanity metrics. (2) Data should drive every decision, backed by expert creativity. (3) Transparency is non-negotiable — our clients see real-time dashboards, not monthly PDF reports.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">Digital Marketing Services We Offer in Bangalore</h3>
                <p className="text-base">
                  As a full-service digital marketing agency in Bangalore, The Super 30 offers a comprehensive suite of services designed to cover every stage of the customer journey:
                </p>
                <ul className="list-none space-y-3 mt-4">
                  {[
                    { title: "SEO Services", desc: "From technical SEO audits to content strategy and link building, our digital marketing agency uses data-driven insights to identify ranking opportunities and create content that dominates organic search in Bangalore and beyond." },
                    { title: "Google Ads & PPC Management", desc: "Our certified PPC specialists manage Google, Meta, and LinkedIn ad campaigns with optimized bidding strategies that maximize ROAS while minimizing wasted spend for Bangalore businesses." },
                    { title: "Social Media Marketing", desc: "We create scroll-stopping content calendars, manage community engagement, and produce viral short-form videos that build brand awareness and drive conversions for Bangalore brands." },
                    { title: "Web Design & Development", desc: "High-converting, responsive websites designed for speed, SEO, and user experience — built by our in-house team of designers and developers right here in Bangalore." },
                    { title: "Content Marketing & Strategy", desc: "From blog posts and whitepapers to email sequences and lead magnets, our content team creates assets that attract, engage, and convert your ideal customers." },
                    { title: "Marketing Automation", desc: "Automated email sequences, lead scoring, CRM integration, and personalized customer journeys that convert prospects into loyal customers on autopilot." },
                  ].map((service, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-brand rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-foreground">{service.title}:</span>{" "}
                        <span>{service.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">How to Evaluate a Digital Marketing Agency in Bangalore</h3>
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1000&h=400&fit=crop"
                  alt="Business meeting evaluating digital marketing agency proposals in Bangalore"
                  className="w-full h-48 md:h-64 object-cover rounded-xl my-6"
                  loading="lazy"
                />
                <p className="text-base">
                  With 500+ digital marketing agencies operating in Bangalore, choosing the right partner is a critical business decision. Here are the key factors every Bangalore business should evaluate:
                </p>
                <ul className="list-none space-y-2 mt-4">
                  {[
                    "In-House Team vs. Outsourced: The best digital marketing agencies in Bangalore have 100% in-house teams. Outsourcing leads to inconsistent quality.",
                    "Revenue Attribution: Does the agency track leads from click to close? Vanity metrics like impressions and likes don't pay bills.",
                    "Industry Experience: Has the agency worked with businesses in your industry in Bangalore? Relevant case studies matter more than generic promises.",
                    "Transparency: Real-time dashboards > monthly PDF reports. You should always know where your money is going.",
                    "No Lock-In Contracts: A confident digital marketing agency in Bangalore doesn't need to lock you into a 12-month contract.",
                    "Technology Stack: Modern digital marketing requires advanced tools for keyword research, ad optimization, and predictive analytics.",
                    "Team Size & Specialization: A one-person agency can't run SEO, ads, social, and design simultaneously. Look for agencies with 20+ specialists.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-brand rounded-full mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">Digital Marketing Trends in Bangalore for 2025</h3>
                <p className="text-base">
                  The digital marketing landscape in Bangalore is evolving rapidly. As a leading digital marketing agency in Bangalore, The Super 30 stays ahead of these trends:
                </p>
                <ul className="list-none space-y-2 mt-4">
                  {[
                    "Data-First Marketing: The best digital marketing agencies in Bangalore use advanced analytics for content creation, ad optimization, audience targeting, and predictive insights.",
                    "Voice & Search Optimization: With 60%+ of Bangalore searches happening on mobile, optimizing for voice search and featured snippets is critical for organic visibility.",
                    "Video-First Social Media: Short-form video content (Reels, Shorts) now drives 3x more engagement than static posts. Bangalore brands must invest in video production.",
                    "First-Party Data Strategy: Digital marketing agencies in Bangalore must help businesses build first-party data assets through email, CRM, and direct engagement.",
                    "Hyper-Local SEO: Google's algorithm increasingly favours location-specific content. A digital marketing agency in Bangalore should optimize for neighbourhood-level search intent.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-brand rounded-full mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">Frequently Asked Questions About Digital Marketing Agencies in Bangalore</h3>
                <div className="space-y-4 mt-4">
                  {[
                    { q: "How much does a digital marketing agency in Bangalore charge?", a: "Digital marketing services in Bangalore typically range from ₹25,000 to ₹5,00,000+ per month depending on the scope. At The Super 30, our packages start at ₹50,000/month with transparent pricing and no hidden fees." },
                    { q: "Which is the best digital marketing agency in Bangalore?", a: "The Super 30 consistently ranks among the top due to our 30+ in-house team, data-driven strategies, 300+ client portfolio, and 4.9/5 satisfaction rating." },
                    { q: "How long does it take to see results from digital marketing?", a: "PPC shows results in 1-2 weeks, social media in 4-8 weeks, and SEO in 3-6 months. We provide weekly progress updates throughout." },
                    { q: "Do I need a digital marketing agency if my business is small?", a: "Absolutely. Small businesses in Bangalore benefit the most because they can't afford to waste budget on strategies that don't work." },
                  ].map((faq, i) => (
                    <div key={i} className="bg-white rounded-xl p-5 border border-border/50">
                      <h4 className="font-bold text-foreground mb-2">{faq.q}</h4>
                      <p className="text-sm text-muted-foreground">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>

          {/* Bottom CTA */}
          <div className="text-center mt-12 pt-8 border-t border-border/50">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
              Ready to Work with the Best Digital Marketing Agency in Bangalore?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join 300+ Bangalore businesses that trust The Super 30 as their digital marketing partner. Get a free strategy session with our experts today.
            </p>
            <Button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              size="lg"
              className="bg-brand hover:bg-brand/90 text-white rounded-full px-8"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Get Your Free Digital Marketing Audit
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
