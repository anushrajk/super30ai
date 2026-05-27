import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getFaqs } from "@/data/faqs";

const faqs = getFaqs("digital-marketing");

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
