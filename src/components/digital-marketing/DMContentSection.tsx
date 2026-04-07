const topics = [
  { heading: "What Does a Digital Marketing Agency in Bangalore Actually Do?", text: "A digital marketing agency in Bangalore handles your entire online presence — SEO, paid ads, social media, content, email, and web design. The best agencies don't run these channels in silos. They connect your SEO data to ad targeting, social engagement to email nurture, and website analytics to campaign decisions." },
  { heading: "Why Bangalore Businesses Need a Local Digital Marketing Partner", text: "Bangalore has 10,000+ startups, 400+ MNCs, and 13 million digitally active consumers. The competition for online attention here is brutal. A digital marketing agency in Bangalore understands the local market — the B2B corridors of Whitefield, the D2C brands of Indiranagar, the enterprise clients of MG Road." },
  { heading: "How to Evaluate a Digital Marketing Agency in Bangalore", text: "With 500+ agencies in Bangalore, picking the right one matters. Look for an in-house team, revenue attribution, real-time dashboards, no lock-in contracts, and relevant industry experience. A good agency should prove ROI within the first 90 days." },
  { heading: "Services You Should Expect from a Full-Service Agency", text: "SEO that drives organic traffic. Google & Meta Ads that maximize ROAS. Social media that builds community. Content that converts. Email automation that nurtures leads. Web design that loads fast and ranks well." },
  { heading: "Digital Marketing Trends Bangalore Businesses Should Watch in 2025", text: "Voice search optimization, short-form video content, first-party data strategies, and hyper-local SEO are reshaping digital marketing in Bangalore. 60%+ of searches happen on mobile. Reels and Shorts drive 3x more engagement than static posts." },
  { heading: "Why The Super 30 Is Different", text: "We're a 30+ member in-house team. We've served 300+ brands. We track every rupee from click to close. No long-term lock-in contracts — our results earn your business. Real-time dashboards, not monthly PDFs." },
];

export const DMContentSection = () => (
  <section className="py-8 md:py-16 lg:py-20 bg-muted/30">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-6 md:mb-14">
        <span className="inline-block px-3 py-1 bg-brand/10 text-brand rounded-full text-xs sm:text-sm font-medium mb-3 border border-brand/20">Everything You Need to Know</span>
        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-foreground mb-2">
          Your Guide to Choosing the Right <span className="text-brand">Digital Marketing Agency in Bangalore</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-5 max-w-5xl mx-auto">
        {topics.map((topic, i) => (
          <div key={i} className="bg-white border border-border/50 rounded-xl p-4 md:p-6">
            <h3 className="text-sm sm:text-base md:text-lg font-bold text-foreground mb-2 leading-snug">{topic.heading}</h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{topic.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
