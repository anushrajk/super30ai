import { BentoBadge } from "@/components/ui/bento-grid";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqs = [
  { question: "How long does it take to build a website?", answer: "Timeline depends on complexity: Landing pages take 1-2 weeks. Corporate/business websites take 3-4 weeks. E-commerce stores take 4-6 weeks. Complex web applications take 6-10 weeks. We always provide a detailed timeline before starting, and you'll get weekly progress updates throughout the project." },
  { question: "Do you build on WordPress or custom code?", answer: "We choose the best platform for your needs: WordPress for content-heavy sites that need easy editing. Shopify/WooCommerce for e-commerce. React/Next.js for high-performance custom websites. Webflow for design-first sites that don't need complex functionality. We'll recommend the right tech stack during our discovery phase." },
  { question: "Will my website be mobile-friendly?", answer: "Absolutely! Every website we build is mobile-first — we design for phones first, then scale up to tablet and desktop. We test across 15+ device sizes and all major browsers (Chrome, Safari, Firefox, Edge). 60%+ of web traffic is mobile, so this is non-negotiable." },
  { question: "Do you provide hosting and domain setup?", answer: "Yes! We help with: Domain registration and DNS configuration. Hosting setup on Vercel, Netlify, AWS, or your preferred provider. SSL certificate installation for HTTPS. Professional email setup (Google Workspace or custom). CDN configuration for global performance." },
  { question: "Do you offer website maintenance?", answer: "Yes! Our monthly maintenance plans include: Security updates and patches. Performance monitoring and optimization. Content updates (up to X changes/month). Uptime monitoring with 99.9% SLA. Monthly analytics reports with actionable insights. Priority support with 4-hour response time." },
  { question: "Can you redesign my existing website?", answer: "Definitely! Website redesigns are one of our specialties. We'll: Audit your current site's performance, SEO, and UX. Preserve your existing SEO rankings and redirects. Migrate your content without downtime. Improve speed, mobile experience, and conversions. The result? A modern site that performs better without losing the authority you've built." },
  { question: "What's included in the cost — any hidden fees?", answer: "No hidden fees, ever. Our quotes include: Complete design (wireframes + high-fidelity mockups). Full development and responsive coding. SEO setup (meta tags, schema, sitemap, robots.txt). Analytics and tracking configuration. 30-day post-launch support. Content upload (up to X pages). Hosting setup and go-live. Everything is outlined in our proposal before you say yes." },
  { question: "How do you handle revisions and feedback?", answer: "We follow a structured revision process: Design phase: 2-3 rounds of revisions on mockups. Development phase: QA testing and bug fixes. Post-launch: 30 days of free support and adjustments. We use collaborative tools (Figma, Slack) for real-time feedback, so revisions are fast and frictionless." },
];

export const WDFAQSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

  return (
    <section ref={sectionRef} className="py-6 md:py-10 lg:py-16 bg-background">
      <div className="container mx-auto px-3 md:px-4">
        <div className={`text-center max-w-3xl mx-auto mb-6 md:mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <BentoBadge className="mb-4">FAQs</BentoBadge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">Frequently Asked Questions</h2>
          <p className="text-muted-foreground">Everything you need to know about our web design & development services</p>
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
