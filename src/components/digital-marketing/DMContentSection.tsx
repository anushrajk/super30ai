import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const topics = [
  {
    heading: "What Does a Digital Marketing Agency in Bangalore Actually Do?",
    text: "A digital marketing agency in Bangalore handles your entire online presence — SEO, paid ads, social media, content, email, and web design. The best agencies don't run these channels in silos. They connect your SEO data to ad targeting, social engagement to email nurture, and website analytics to campaign decisions. That's what separates a real digital marketing agency from a freelancer with a LinkedIn profile.",
  },
  {
    heading: "Why Bangalore Businesses Need a Local Digital Marketing Partner",
    text: "Bangalore has 10,000+ startups, 400+ MNCs, and 13 million digitally active consumers. The competition for online attention here is brutal. A digital marketing agency in Bangalore understands the local market — the B2B corridors of Whitefield, the D2C brands of Indiranagar, the enterprise clients of MG Road. Generic strategies built for tier-2 cities don't cut it here.",
  },
  {
    heading: "How to Evaluate a Digital Marketing Agency in Bangalore",
    text: "With 500+ agencies in Bangalore, picking the right one matters. Look for an in-house team (no outsourcing), revenue attribution (not vanity metrics), real-time dashboards (not monthly PDFs), no lock-in contracts, and relevant industry experience. A good digital marketing agency in Bangalore should prove ROI within the first 90 days.",
  },
  {
    heading: "Services You Should Expect from a Full-Service Digital Marketing Agency",
    text: "SEO that drives organic traffic. Google & Meta Ads that maximize ROAS. Social media that builds community. Content that converts. Email automation that nurtures leads. Web design that loads fast and ranks well. If your digital marketing agency in Bangalore can't deliver all six under one roof, you're leaving growth on the table.",
  },
  {
    heading: "Digital Marketing Trends Bangalore Businesses Should Watch in 2025",
    text: "Voice search optimization, short-form video content, first-party data strategies, and hyper-local SEO are reshaping digital marketing in Bangalore. 60%+ of searches happen on mobile. Reels and Shorts drive 3x more engagement than static posts. The best digital marketing agencies in Bangalore are already adapting to these shifts.",
  },
  {
    heading: "Why The Super 30 Is Different from Other Digital Marketing Agencies in Bangalore",
    text: "We're a 30+ member in-house team. We've served 300+ brands. We track every rupee from click to close. We don't do long-term lock-in contracts — our results earn your business. And we give you a real-time dashboard, not a monthly PDF. That's why Bangalore businesses choose The Super 30 as their digital marketing partner.",
  },
];

export const DMContentSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.05 });

  return (
    <section ref={sectionRef} className="py-12 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className={`text-center max-w-3xl mx-auto mb-10 md:mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 bg-brand/10 text-brand rounded-full text-sm font-medium mb-4 border border-brand/20">
            Everything You Need to Know
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
            Your Guide to Choosing the Right <span className="text-brand">Digital Marketing Agency in Bangalore</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {topics.map((topic, i) => (
            <div
              key={i}
              className={`bg-white border border-border/50 rounded-2xl p-6 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${(i + 1) * 80}ms` }}
            >
              <h3 className="text-lg font-bold text-foreground mb-3 leading-snug">{topic.heading}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{topic.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
