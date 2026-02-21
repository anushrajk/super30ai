import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqs = [
  {
    question: "What is AI SEO and how is it different from traditional SEO?",
    answer: "AI SEO focuses on optimizing your content to be understood, recommended, and cited by AI systems like ChatGPT, Google AI Overviews, and Perplexity. Unlike traditional SEO which primarily targets keyword rankings, AI SEO ensures your brand becomes the trusted answer that AI systems recommend to users."
  },
  {
    question: "How long does it take to see results from AI SEO?",
    answer: "Most clients start seeing measurable improvements in AI visibility within 60-90 days. Full impact on revenue and lead generation typically materializes within 4-6 months. Unlike traditional SEO, AI SEO can show faster initial results as AI systems update their knowledge more frequently."
  },
  {
    question: "Do you work with startups or only established businesses?",
    answer: "We work with growth-stage companies spending ₹50,000+ per month on marketing who are serious about long-term organic growth. Whether you're a funded startup or an established business, if organic revenue is important to your growth strategy, we can help."
  },
  {
    question: "What industries do you specialize in?",
    answer: "We have deep expertise in SaaS, E-commerce, FinTech, Healthcare, EdTech, Real Estate, Legal Services, and Hospitality. Our AI-first approach works across B2B and B2C verticals where search visibility directly impacts revenue."
  },
  {
    question: "How do you measure AI SEO success?",
    answer: "We track AI visibility metrics including ChatGPT mentions, Perplexity citations, Google AI Overview appearances, along with traditional metrics like organic traffic and rankings. Most importantly, we measure revenue attribution to show the direct business impact of our work."
  },
  {
    question: "What's included in your AI SEO audit?",
    answer: "Our free AI SEO audit analyzes your current visibility across AI platforms, identifies gaps in your content strategy for AI consumption, reviews technical SEO foundation, and provides actionable recommendations. It's a comprehensive assessment worth ₹25,000."
  },
  {
    question: "Do you offer monthly contracts or require long-term commitments?",
    answer: "We believe in earning your business every month. While AI SEO is a long-term strategy, we don't require long-term lock-ins. Our clients stay because they see results, not because they're locked into contracts."
  },
  {
    question: "How is The Super 30 different from other SEO agencies?",
    answer: "We're AI-first, not AI-adjacent. While others are still focused on traditional keyword rankings, we're building the infrastructure for the AI-powered search era. Our proprietary AI visibility tracking, predictive dashboards, and revenue attribution set us apart."
  }
];

export const FAQSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

  return (
    <section 
      ref={sectionRef}
      className="py-6 md:py-10 lg:py-16 bg-muted/30 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      
      <div className="container mx-auto px-3 md:px-4 relative">
        <div className={`text-center max-w-3xl mx-auto mb-5 md:mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="badge-brand mb-4">
            FAQ
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Everything you need to know about AI SEO
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className={`bento-card px-4 md:px-6 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${(index + 1) * 50}ms` }}
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-brand transition-colors py-4 text-sm md:text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4 leading-relaxed text-sm md:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
