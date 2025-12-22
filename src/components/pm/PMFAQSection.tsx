import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BentoBadge } from "@/components/ui/bento-grid";

const faqs = [
  { q: "What platforms do you manage?", a: "We manage Google Ads (Search, Display, Shopping, YouTube), Meta Ads (Facebook & Instagram), LinkedIn Ads, and programmatic advertising." },
  { q: "What's your minimum ad spend requirement?", a: "We recommend a minimum of ₹1 Lakh/month in ad spend to see meaningful results. Our management fees are separate." },
  { q: "How do you track attribution?", a: "We set up comprehensive tracking using Google Analytics 4, conversion APIs, and UTM parameters to track the full customer journey." },
  { q: "What's your reporting cadence?", a: "Weekly performance updates, bi-weekly strategy calls, and detailed monthly reports with insights and recommendations." },
  { q: "Do you provide creatives?", a: "Yes, we have an in-house creative team for ad design. Creative development is included in our full-service packages." },
];

export const PMFAQSection = () => {
  return (
    <section id="faq" className="py-6 md:py-10 lg:py-16 bg-background">
      <div className="container mx-auto px-3 md:px-4">
        <div className="text-center max-w-3xl mx-auto mb-6 md:mb-10">
          <BentoBadge className="mb-4">FAQ</BentoBadge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="bento-card px-4 md:px-6 border-border/50 data-[state=open]:border-brand/30"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-brand text-sm md:text-base py-4">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
