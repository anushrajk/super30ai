import { BentoBadge } from "@/components/ui/bento-grid";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqs = [
  { question: "What formats do you deliver the designs in?", answer: "We deliver in all standard formats — PNG, JPG, PDF, and platform-specific dimensions (1080x1080 for feed posts, 1080x1920 for stories/reels covers, 1200x628 for Facebook links, 1584x396 for LinkedIn banners, etc.). We also provide editable source files (Figma/PSD) for Premium plan clients." },
  { question: "Can you match our existing brand guidelines?", answer: "Absolutely! We start every engagement by studying your existing brand — colors, fonts, tone of voice, photography style, and content themes. We create a Social Media Brand Kit that ensures every post is instantly recognizable as yours, even without your logo." },
  { question: "How many revisions are included?", answer: "Our Starter plan includes 2 revisions per post. Growth and Premium plans include unlimited revisions until you're 100% satisfied. In practice, our revision rate is under 15% because we invest heavily in the discovery phase to nail your brand direction from day one." },
  { question: "Do you also write captions and hashtags?", answer: "Yes! Our Growth and Premium plans include SEO-optimized captions with strategic hashtag sets (researched for your niche and audience). We provide both primary and secondary hashtag groups, along with engagement hooks and CTAs that drive real action." },
  { question: "What's the turnaround time?", answer: "Standard turnaround is 3-5 business days for a monthly batch. Premium clients get priority delivery within 24-48 hours. For urgent requests, we offer same-day rush delivery at an additional fee. We never compromise quality for speed." },
  { question: "Do you handle video content and reels?", answer: "Yes! We design reel covers, motion graphics, animated posts, and provide direction for video shoots. For reels editing, we work with our in-house video team to deliver platform-optimized short-form video content that drives engagement and saves." },
  { question: "What if I don't have brand guidelines yet?", answer: "No problem — we'll create them for you! Our onboarding includes a Brand Discovery session where we define your visual identity — colors, fonts, photography style, tone, and design direction. You'll get a complete Social Media Brand Kit before we start designing content." },
  { question: "Can you design for multiple brands or sub-brands?", answer: "Yes! We work with agencies and companies managing multiple brands. Each brand gets its own visual identity system and dedicated design queue. Our Premium plan supports up to 3 brands under one subscription." },
];

export const SMFAQSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

  return (
    <section ref={sectionRef} className="py-6 md:py-10 lg:py-16 bg-background">
      <div className="container mx-auto px-3 md:px-4">
        <div className={`text-center max-w-3xl mx-auto mb-6 md:mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <BentoBadge className="mb-4">FAQs</BentoBadge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">Frequently Asked Questions</h2>
          <p className="text-muted-foreground">Everything you need to know about our social media design services</p>
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
