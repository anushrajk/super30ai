import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const CourseFAQSection = () => {
  const [ref, isVisible] = useScrollAnimation();

  const faqs = [
    {
      question: "Who is this course for?",
      answer: "This course is designed for marketing professionals, SEO specialists, content creators, business owners, and fresh graduates who want to future-proof their careers with AI-powered marketing skills. Whether you're transitioning from traditional SEO or starting fresh, our curriculum adapts to your experience level.",
    },
    {
      question: "What are the prerequisites?",
      answer: "No prior SEO experience is required—we teach everything from foundations. However, basic computer literacy and a willingness to learn are essential. Familiarity with digital marketing concepts is helpful but not mandatory. We start from scratch and build up systematically.",
    },
    {
      question: "Is this course online or offline?",
      answer: "This is a live online course conducted via Zoom/Google Meet. All sessions are interactive with Q&A, live demos, and hands-on exercises. Sessions are recorded for later review, but attendance at live sessions is strongly encouraged for maximum learning.",
    },
    {
      question: "What is the job placement guarantee?",
      answer: "We guarantee job placement within 90 days of course completion. Our placement team works directly with 50+ partner companies. If you don't receive an offer within 90 days despite completing all coursework and actively applying, we refund 50% of your course fee.",
    },
    {
      question: "How is this different from other SEO courses?",
      answer: "This is India's first Applied AI SEO course. Unlike traditional SEO courses that teach outdated tactics, we focus on AI-native strategies: GEO, AEO, Agentic Commerce, and building autonomous marketing systems. Our curriculum is designed with input from industry leaders at Google, OpenAI, and top agencies.",
    },
    {
      question: "Can I work full-time while taking this course?",
      answer: "Yes! The course is designed for working professionals. Live sessions are held on weekends (Saturday & Sunday, 10 AM - 2 PM IST). You'll need approximately 10-15 hours per week for classes, assignments, and practice. Many of our successful graduates completed the course while working full-time.",
    },
    {
      question: "What certifications do I get?",
      answer: "Upon completion, you receive: (1) Applied AI Institute Certification in AI SEO, (2) Specialization certificates in your chosen tracks (GEO, AEO, Agentic Commerce), (3) Project portfolio with verified results, and (4) LinkedIn badge for professional recognition.",
    },
    {
      question: "What happens after the course ends?",
      answer: "After completing the 6-month program, you'll have lifetime access to: (1) Alumni community and networking events, (2) Updated course materials as the industry evolves, (3) Job placement support for 1 year, (4) Monthly masterclasses with industry experts, and (5) Exclusive job listings from partner companies.",
    },
    {
      question: "What tools will I learn to use?",
      answer: "You'll master 30+ tools including: SEO tools (Ahrefs, SEMrush, Screaming Frog), AI platforms (ChatGPT, Claude, Gemini), automation tools (n8n, Zapier, Make), analytics (GA4, Looker Studio, BigQuery), and specialized AI SEO tools. All premium tool access is included during the course.",
    },
    {
      question: "Is there a scholarship or financial aid available?",
      answer: "Yes! We offer: (1) Early bird discounts (₹50,000 off), (2) Referral discounts, (3) Group enrollment discounts for teams, (4) EMI options at 0% interest, and (5) Merit-based scholarships for exceptional candidates. Contact us to discuss your situation—we want to make this accessible.",
    },
  ];

  return (
    <section ref={ref} className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1 bg-[hsl(var(--brand-orange))]/10 text-[hsl(var(--brand-orange))] text-sm font-semibold rounded-full border border-[hsl(var(--brand-orange))]/30 mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know before making your decision.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className={`max-w-3xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`faq-${index}`}
                className="bg-card rounded-xl border border-border/50 px-6 data-[state=open]:border-[hsl(var(--brand-orange))]/30"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Still have questions */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help.
          </p>
          <a 
            href="mailto:courses@thesuper30.ai"
            className="inline-flex items-center gap-2 text-[hsl(var(--brand-orange))] font-semibold hover:underline"
          >
            Email us at courses@thesuper30.ai
          </a>
        </div>
      </div>
    </section>
  );
};
