import { BentoBadge } from "@/components/ui/bento-grid";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqs = [
  { question: "What digital marketing services does The Super 30 offer?", answer: "We offer a comprehensive suite of services: AI-powered SEO, Performance Marketing (Google, Meta, LinkedIn Ads), Social Media Marketing & Design, Brand Design, Web Design & Development, Email Marketing, Content Marketing, and Marketing Automation. Each service can work standalone, but the real magic happens when they work together as a unified growth engine." },
  { question: "How is The Super 30 different from other digital marketing agencies?", answer: "Three things set us apart: (1) We use AI tools and automation across every channel — not just as a buzzword, but as a core part of our workflow. (2) We have 30+ in-house specialists, meaning no outsourcing to freelancers. (3) We focus on revenue attribution, not vanity metrics. Every campaign is measured by its impact on your bottom line." },
  { question: "Do you work with startups or only established companies?", answer: "We work with businesses at every stage — from funded startups to enterprise brands. What matters is that you're ready to invest in a strategic approach to growth. Our strategies scale with your budget: we've driven results starting from ₹50K/month to multi-lakh budgets." },
  { question: "How quickly can I expect to see results?", answer: "It depends on the channel. Paid campaigns (Google Ads, Meta) typically show results within 1-2 weeks. Social media traction builds in 4-8 weeks. SEO takes 3-6 months for significant organic growth. We provide weekly progress reports so you always know exactly where things stand." },
  { question: "What industries do you specialize in?", answer: "We've delivered proven results across Real Estate, Education & EdTech, Healthcare, D2C & E-commerce, SaaS, Professional Services, Hospitality, Legal Services, and Staffing. Our AI-driven approach adapts to any industry — the data tells us what works." },
  { question: "Do I need to commit to a long-term contract?", answer: "No. We don't lock clients into long-term contracts. We offer month-to-month engagements because we believe results should earn your business, not a contract clause. That said, most clients stay 12+ months because the compounding results speak for themselves." },
  { question: "How do you measure and report on performance?", answer: "You get access to a real-time dashboard showing all KPIs across channels — traffic, leads, cost-per-lead, revenue attribution, and ROAS. We also provide detailed monthly strategy reviews with actionable insights and next steps. No fluff reports, just data that drives decisions." },
  { question: "Can you handle everything in-house or do you outsource?", answer: "100% in-house. We have 30+ specialists covering SEO, paid media, social media, design, web development, content, and email marketing. This means faster turnaround, consistent quality, and seamless cross-channel coordination." },
];

export const DMFAQSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

  return (
    <section ref={sectionRef} className="py-6 md:py-10 lg:py-16 bg-background">
      <div className="container mx-auto px-3 md:px-4">
        <div className={`text-center max-w-3xl mx-auto mb-6 md:mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <BentoBadge className="mb-4">FAQs</BentoBadge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">Frequently Asked Questions</h2>
          <p className="text-muted-foreground">Everything you need to know about our digital marketing services</p>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className={`group bg-card border border-border rounded-xl p-4 cursor-pointer transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: `${(i + 1) * 80}ms` }}>
              <summary className="font-semibold text-foreground list-none flex items-center justify-between">
                {faq.question}
                <ArrowRight className="w-4 h-4 text-muted-foreground group-open:rotate-90 transition-transform flex-shrink-0 ml-2" />
              </summary>
              <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
