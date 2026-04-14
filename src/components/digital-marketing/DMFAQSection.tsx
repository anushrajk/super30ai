import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    answer: "For B2B companies in Bangalore, SEO with long-form thought leadership content, LinkedIn Ads targeting decision-makers, and Google Search Ads for high-intent keywords typically deliver the strongest results. We combine these with marketing automation and CRM-integrated lead nurturing to support long B2B sales cycles.",
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
  <section className="py-20 md:py-28 lg:py-36 bg-background relative">
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Header */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <span className="text-brand text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
              FAQs
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-[1.1] mb-6">
              Frequently asked<br />
              <span className="text-brand">questions</span>
            </h2>
            <p className="text-muted-foreground text-base max-w-md">
              Everything you need to know about hiring a digital marketing agency in Bangalore.
            </p>
          </div>

          {/* Right: Accordion */}
          <div>
            <Accordion type="single" collapsible className="space-y-2">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="border border-border/40 rounded-xl px-5 overflow-hidden data-[state=open]:border-brand/20 transition-all duration-300"
                >
                  <AccordionTrigger className="text-sm sm:text-[15px] font-semibold text-foreground hover:no-underline py-5 text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  </section>
);
