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
      question: "I'm not sure I can afford ₹59,999...",
      answer: "Look, we get it. ₹60K is not pocket change. But here's the math: Our average graduate earns ₹7.2L/year. That's ₹60K/month. So you'll recover your investment in your first month's salary. Plus, we offer 0% EMI—that's ₹10K/month for 6 months. Most people spend more on chai and samosas. And if you don't get placed? We refund 50%. The risk is on us, not you.",
      studentSays: "\"I took a loan from my dad. Paid him back in 2 months.\" — Vikash, now at Zoho"
    },
    {
      question: "I have no coding/technical background. Can I do this?",
      answer: "Honestly? That's actually common. 60% of our students come from non-tech backgrounds—content writers, marketing executives, even CA aspirants. We designed this course assuming you don't know coding. Everything is visual, no-code, and explained in simple Hindi-English. If you can use Excel and Google, you can do this.",
      studentSays: "\"I'm a B.Com graduate. Now I build AI agents. Still shocks me.\" — Priya, now at Razorpay"
    },
    {
      question: "What if I don't get a job after the course?",
      answer: "That's the whole point of our guarantee. If you complete all assignments, attend 90%+ classes, and actively apply to jobs—and STILL don't get an offer in 90 days—we refund 50% of your fee. We've done this 500+ times. Our placement rate is 95%. We're confident because we've proven it.",
      studentSays: null
    },
    {
      question: "Can I do this while working full-time?",
      answer: "Yes—that's exactly how we designed it. Live classes are on weekends (Saturday-Sunday, 10 AM - 2 PM). You'll need about 10-15 hours/week total including practice. 80% of our successful graduates completed this while working full-time jobs. It's intense, but doable if you're serious.",
      studentSays: "\"I was working 50 hours/week at my old job. Still finished with top marks.\" — Arjun, now at Freshworks"
    },
    {
      question: "Why is this better than ₹5,000 Udemy courses?",
      answer: "Because Udemy courses are recorded videos from 2022. AI changes every week. Our curriculum is updated live. Plus, Udemy doesn't call companies to get you hired. We have 50+ hiring partners. We do mock interviews. We review your resume. We negotiate your salary. That's the ₹55,000 difference.",
      studentSays: null
    },
    {
      question: "I'm a fresher with zero experience. Will companies hire me?",
      answer: "Yes—and here's why. Companies are desperate for AI SEO skills. They can't find experienced people because this field is so new. So they're hiring freshers who have the right training. We've placed 47 freshers in the last 6 months. Average package: ₹5.8L. Your lack of experience is actually an advantage—no old habits to unlearn.",
      studentSays: "\"All my batchmates are struggling for ₹25K jobs. I got ₹55K as a fresher.\" — Ananya, now at Swiggy"
    },
    {
      question: "What certifications do I get?",
      answer: "You'll get: (1) Applied AI Institute Certification in AI SEO—recognized by 50+ companies, (2) Specialization badges for GEO, AEO, or Agentic Commerce, (3) A portfolio with 3-4 real project case studies, (4) LinkedIn badge that recruiters actually search for. But honestly? Your skills matter more than certificates. And you'll have both.",
      studentSays: null
    },
    {
      question: "What if AI makes SEO obsolete anyway?",
      answer: "This is exactly why we teach AI SEO, not traditional SEO. Traditional SEO is dying—we agree. But AI SEO is the future. You're learning to work WITH AI, not compete against it. The marketers who lose their jobs are the ones who ignore AI. You're doing the opposite.",
      studentSays: null
    },
    {
      question: "I'm from a Tier-2/Tier-3 city. Will I get remote jobs?",
      answer: "60% of our placements are remote. Companies don't care where you sit—they care if you can deliver results. We've placed students from Patna, Jaipur, Lucknow, Coimbatore, and 30+ other cities. Some relocated to metros for higher pay. Others chose remote and stayed home. Your choice.",
      studentSays: "\"I moved from Patna to Chennai for my role. But half my batchmates work remote.\" — Vikash, now at Zoho"
    },
    {
      question: "How is this different from other AI courses?",
      answer: "Other AI courses teach you to USE ChatGPT. We teach you to BUILD AI systems. Other courses give you videos. We give you live classes with real Q&A. Other courses give you a certificate. We give you a job guarantee. Other courses have 1000 students per batch. We have 15. That's the difference.",
      studentSays: null
    },
  ];

  return (
    <section ref={ref} className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1 bg-[hsl(var(--brand-orange))]/10 text-[hsl(var(--brand-orange))] text-sm font-semibold rounded-full border border-[hsl(var(--brand-orange))]/30 mb-4">
            Your Doubts, Answered
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            The Questions <span className="text-gradient">Everyone Asks</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We've been asked these 1000+ times. Here are our honest answers.
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
                <AccordionContent className="pb-4">
                  <p className="text-muted-foreground mb-3 leading-relaxed">{faq.answer}</p>
                  {faq.studentSays && (
                    <div className="mt-3 p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                      <p className="text-sm text-emerald-600 dark:text-emerald-400 italic">
                        {faq.studentSays}
                      </p>
                    </div>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Question We Wish More People Asked */}
        <div className={`max-w-3xl mx-auto mt-8 p-6 bg-muted/30 rounded-xl border border-border/50 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h4 className="font-semibold text-foreground mb-2">💡 Question we wish more people asked:</h4>
          <p className="text-sm text-muted-foreground mb-2 italic">"What's the catch? Why are you so confident about placements?"</p>
          <p className="text-sm text-foreground">
            The catch is: we only take 15 students per batch. We can't scale. We personally track each student's progress. That's expensive for us, but it works. Our reputation depends on your success—so we make sure you succeed.
          </p>
        </div>

        {/* Still have questions */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-muted-foreground mb-4">
            Still have doubts? That's normal. Let's talk.
          </p>
          <a 
            href="https://wa.me/919876543210?text=Hi, I have some questions about the AI SEO course"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[hsl(var(--brand-orange))] font-semibold hover:underline"
          >
            Chat with us on WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
};
