const faqs = [
  {
    question: "How much do digital marketing services in Bangalore cost?",
    answer: "Our digital marketing services in Bangalore start from ₹25,000/month for a focused single-channel engagement (SEO or PPC). Full-service retainers covering multiple channels range from ₹60,000 to ₹1,50,000+/month depending on the scope, industry competitiveness, and campaign goals. We offer a free brand audit before recommending any package — so you only pay for what you actually need.",
  },
  {
    question: "How long does it take to see results from a digital marketing company in Bangalore?",
    answer: "SEO typically delivers measurable ranking improvements within 3–6 months, with significant traffic growth building from Month 4 onwards. PPC and paid social campaigns can generate qualified leads within the first 2–4 weeks of launch. We set data-driven benchmarks in Month 1 so you always have clear expectations of what results to expect and when.",
  },
  {
    question: "What is the difference between an online marketing company and a digital marketing agency in Bangalore?",
    answer: "The terms are used interchangeably. An online marketing company in Bangalore and a digital marketing agency both offer services across SEO, paid advertising, social media, content, and email marketing. The key difference lies in specialisation and approach — a full-service digital marketing agency provides integrated strategy across all channels, while some online marketing companies focus on individual services like SEO or social media alone.",
  },
  {
    question: "Do you work with startups or only large enterprises?",
    answer: "Both. We work with early-stage startups in Koramangala and HSR Layout that need cost-efficient, high-impact digital marketing from a lean budget, and with enterprise brands in Electronic City, Whitefield, and MG Road that need scale, compliance, and multi-market reach. Our pricing plans are structured to serve both growth stages effectively.",
  },
  {
    question: "Which digital marketing services in Bangalore are most effective for B2B companies?",
    answer: "For B2B companies in Bangalore, SEO with long-form thought leadership content, LinkedIn Ads targeting decision-makers, and Google Search Ads for high-intent keywords typically deliver the strongest results. We combine these with marketing automation and CRM-integrated lead nurturing to support long B2B sales cycles. The exact channel mix depends on your average deal size, sales cycle length, and target buyer persona.",
  },
  {
    question: "How is your digital marketing agency different from other agencies in Bangalore?",
    answer: "Three things set us apart: full transparency (live dashboard access, no black-box reporting), no lock-in contracts (monthly retainers, cancel anytime), and 100% in-house execution (no outsourcing to freelancers). We are also one of the few digital marketing agencies in Bangalore actively integrating Generative Engine Optimisation (GEO) to ensure our clients appear in AI-generated search results alongside traditional Google rankings.",
  },
  {
    question: "Do you offer SEO, PPC, and social media together as a package?",
    answer: "Yes. As a full-service digital marketing agency in Bangalore, we manage SEO, Google Ads, Meta Ads, LinkedIn campaigns, content marketing, email marketing, and social media under one roof — with a unified strategy and single performance dashboard. Integrated campaigns consistently outperform siloed single-channel strategies because each channel reinforces the others.",
  },
];

export const DMFAQSection = () => (
  <section className="py-8 md:py-16 lg:py-24 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-6 md:mb-12">
        <span className="inline-block px-3 py-1 bg-brand/10 text-brand rounded-full text-xs sm:text-sm font-medium mb-3 border border-brand/20">
          FAQs — Digital Marketing Agency in Bangalore
        </span>
        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-foreground mb-2">
          Frequently Asked Questions
        </h2>
        <p className="text-xs sm:text-sm text-muted-foreground">
          Everything you need to know about hiring a digital marketing agency in Bangalore
        </p>
      </div>
      <div className="max-w-3xl mx-auto space-y-2 sm:space-y-3">
        {faqs.map((faq, i) => (
          <details key={i} className="group bg-white border border-border/50 rounded-xl p-3.5 sm:p-5 cursor-pointer">
            <summary className="font-semibold text-foreground list-none flex items-center justify-between text-sm sm:text-base gap-3">
              {faq.question}
              <span className="text-brand group-open:rotate-90 transition-transform flex-shrink-0 text-lg">›</span>
            </summary>
            <p className="text-muted-foreground text-xs sm:text-sm mt-2.5 leading-relaxed">{faq.answer}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);
