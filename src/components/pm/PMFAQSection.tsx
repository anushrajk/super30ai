import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BentoBadge } from "@/components/ui/bento-grid";
import { getFaqs } from "@/data/faqs";

const faqs = getFaqs("performance-marketing").map(f => ({ q: f.question, a: f.answer }));

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
