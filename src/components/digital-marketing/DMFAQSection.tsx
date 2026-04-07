import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "What makes The Super 30 the best digital marketing agency in Bangalore?",
    answer: "Three things set our digital marketing agency apart: (1) We have 30+ in-house specialists — no outsourcing to freelancers. (2) We use AI tools across every channel for optimization, not just as a buzzword. (3) We focus on revenue attribution, not vanity metrics. Every campaign is measured by its impact on your bottom line. That's why 300+ Bangalore businesses trust us as their digital marketing partner."
  },
  {
    question: "How much does a digital marketing agency in Bangalore typically charge?",
    answer: "Digital marketing services in Bangalore range from ₹25,000 to ₹5,00,000+ per month depending on the scope of channels, campaign complexity, and business goals. At The Super 30, our digital marketing packages start at ₹50,000/month with transparent pricing, no hidden costs, and month-to-month flexibility. We believe results should earn your business, not a contract clause."
  },
  {
    question: "Which industries does your digital marketing agency in Bangalore serve?",
    answer: "As a full-service digital marketing agency in Bangalore, we serve Real Estate, Education, Healthcare, D2C & E-commerce, SaaS, Professional Services, Hospitality, Legal Services, and Staffing. Our AI-driven digital marketing approach adapts to any industry — the data tells us what works, and our 30+ specialists execute with precision."
  },
  {
    question: "How quickly can I expect results from your digital marketing services in Bangalore?",
    answer: "Results timelines vary by channel: PPC campaigns (Google Ads, Meta) show results within 1-2 weeks. Social media traction builds in 4-8 weeks. SEO delivers significant results in 3-6 months. Our digital marketing agency in Bangalore provides weekly progress reports so you always know exactly where things stand and where every rupee is going."
  },
  {
    question: "Do I need to commit to a long-term contract with your digital marketing agency?",
    answer: "No. Our digital marketing agency in Bangalore doesn't lock clients into long-term contracts. We offer month-to-month engagements because we believe results should earn your business, not a contract clause. That said, most clients stay 12+ months because the compounding results from our digital marketing strategies speak for themselves."
  },
  {
    question: "How does your digital marketing agency in Bangalore use AI differently?",
    answer: "Unlike agencies that just mention AI in their pitch decks, our digital marketing team actively uses AI for keyword research, ad bid optimization, content generation, predictive analytics, and cross-channel attribution. AI handles the data-heavy work so our human experts can focus on strategy, creativity, and relationship building — giving Bangalore businesses the best of both worlds."
  },
  {
    question: "Can your digital marketing agency handle everything in-house?",
    answer: "100% in-house. Our digital marketing agency in Bangalore has 30+ specialists covering SEO, paid media, social media, design, web development, content, and email marketing. This means faster turnaround, consistent quality, and seamless cross-channel coordination — something no freelancer network or outsourced team can match."
  },
  {
    question: "How do you measure and report on digital marketing performance?",
    answer: "Our digital marketing agency provides real-time dashboards showing all KPIs across channels — traffic, leads, cost-per-lead, revenue attribution, and ROAS. We also provide detailed weekly and monthly strategy reviews with actionable insights. No fluff reports — just data-driven decisions that help your Bangalore business grow predictably."
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
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className={`group bg-white border border-border/50 rounded-xl p-5 cursor-pointer transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${(i + 1) * 80}ms` }}
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
