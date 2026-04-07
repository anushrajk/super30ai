const faqs = [
  { question: "What makes The Super 30 the best digital marketing agency in Bangalore?", answer: "Three things: (1) 30+ in-house specialists — zero outsourcing. (2) We track every lead from click to close, not just impressions. (3) No lock-in contracts. Our results earn your business." },
  { question: "How much does a digital marketing agency in Bangalore charge?", answer: "Digital marketing services in Bangalore range from ₹25,000 to ₹5,00,000+ per month depending on scope. Our packages start at ₹50,000/month with transparent pricing." },
  { question: "Which industries does your digital marketing agency in Bangalore serve?", answer: "Real Estate, Education, Healthcare, D2C & E-commerce, SaaS, Professional Services, Hospitality, Legal Services, and Staffing." },
  { question: "How quickly can I expect results from your digital marketing services?", answer: "PPC shows results in 1-2 weeks. Social media traction builds in 4-8 weeks. SEO delivers significant results in 3-6 months." },
  { question: "Do I need to commit to a long-term contract?", answer: "No. We offer month-to-month engagements. Most clients stay 12+ months because the compounding results speak for themselves." },
  { question: "How is your approach different from other digital marketing agencies?", answer: "We connect all channels into one growth engine. Your SEO data feeds ad targeting, social engagement informs content, and website behaviour triggers email automation." },
  { question: "Can your digital marketing agency handle everything in-house?", answer: "100% in-house. 30+ specialists covering SEO, paid media, social media, design, web development, content, and email marketing." },
  { question: "How do you measure and report on performance?", answer: "Real-time dashboards showing traffic, leads, cost-per-lead, revenue attribution, and ROAS. Plus weekly and monthly strategy reviews." },
];

export const DMFAQSection = () => (
  <section className="py-8 md:py-16 lg:py-24 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-6 md:mb-12">
        <span className="inline-block px-3 py-1 bg-brand/10 text-brand rounded-full text-xs sm:text-sm font-medium mb-3 border border-brand/20">FAQs About Our Digital Marketing Agency in Bangalore</span>
        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-foreground mb-2">Frequently Asked Questions</h2>
        <p className="text-xs sm:text-sm text-muted-foreground">Everything you need to know about hiring a digital marketing agency in Bangalore</p>
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
