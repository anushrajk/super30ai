import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "What makes The Super 30 the best digital marketing agency in Bangalore?",
    answer: "Three things: (1) 30+ in-house specialists — zero outsourcing. (2) We track every lead from click to close, not just impressions. (3) No lock-in contracts. Our results earn your business. That's why 300+ Bangalore businesses trust us."
  },
  {
    question: "How much does a digital marketing agency in Bangalore charge?",
    answer: "Digital marketing services in Bangalore range from ₹25,000 to ₹5,00,000+ per month depending on scope. Our packages start at ₹50,000/month with transparent pricing and no hidden costs."
  },
  {
    question: "Which industries does your digital marketing agency in Bangalore serve?",
    answer: "Real Estate, Education, Healthcare, D2C & E-commerce, SaaS, Professional Services, Hospitality, Legal Services, and Staffing. Our approach adapts to any industry — the data tells us what works."
  },
  {
    question: "How quickly can I expect results from your digital marketing services?",
    answer: "PPC shows results in 1-2 weeks. Social media traction builds in 4-8 weeks. SEO delivers significant results in 3-6 months. We provide weekly progress reports throughout."
  },
  {
    question: "Do I need to commit to a long-term contract?",
    answer: "No. We offer month-to-month engagements. Most clients stay 12+ months because the compounding results speak for themselves — not because of a contract clause."
  },
  {
    question: "How is your approach different from other digital marketing agencies?",
    answer: "We connect all channels into one growth engine. Your SEO data feeds ad targeting, social engagement informs content, and website behaviour triggers email automation. Most agencies run channels in silos — we don't."
  },
  {
    question: "Can your digital marketing agency handle everything in-house?",
    answer: "100% in-house. 30+ specialists covering SEO, paid media, social media, design, web development, content, and email marketing. Faster turnaround, consistent quality, and seamless coordination."
  },
  {
    question: "How do you measure and report on performance?",
    answer: "Real-time dashboards showing traffic, leads, cost-per-lead, revenue attribution, and ROAS. Plus weekly and monthly strategy reviews with actionable insights. No fluff reports."
  },
];

export const DMFAQSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

  return (
    <section ref={sectionRef} className="py-10 md:py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className={`text-center max-w-3xl mx-auto mb-8 md:mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 bg-brand/10 text-brand rounded-full text-sm font-medium mb-4 border border-brand/20">
            FAQs About Our Digital Marketing Agency in Bangalore
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">
            Everything you need to know about hiring a digital marketing agency in Bangalore
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className={`group bg-white border border-border/50 rounded-xl p-5 cursor-pointer transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${(i + 1) * 60}ms` }}
            >
              <summary className="font-semibold text-foreground list-none flex items-center justify-between text-base">
                {faq.question}
                <ArrowRight className="w-4 h-4 text-brand group-open:rotate-90 transition-transform flex-shrink-0 ml-3" />
              </summary>
              <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
