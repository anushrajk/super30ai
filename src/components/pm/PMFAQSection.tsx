import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "What platforms do you manage?", a: "We manage Google Ads (Search, Display, Shopping, YouTube), Meta Ads (Facebook & Instagram), LinkedIn Ads, and programmatic advertising." },
  { q: "What's your minimum ad spend requirement?", a: "We recommend a minimum of ₹1 Lakh/month in ad spend to see meaningful results. Our management fees are separate." },
  { q: "How do you track attribution?", a: "We set up comprehensive tracking using Google Analytics 4, conversion APIs, and UTM parameters to track the full customer journey." },
  { q: "What's your reporting cadence?", a: "Weekly performance updates, bi-weekly strategy calls, and detailed monthly reports with insights and recommendations." },
  { q: "Do you provide creatives?", a: "Yes, we have an in-house creative team for ad design. Creative development is included in our full-service packages." },
];

export const PMFAQSection = () => {
  return (
    <section id="faq" className="py-8 md:py-14 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-6 md:mb-10">
          <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-muted/30 border border-border/50 rounded-xl px-6">
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-orange-500">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
