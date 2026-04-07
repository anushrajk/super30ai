const reasons = [
  { title: "India's Tech Capital Needs Specialized Digital Marketing", description: "Bangalore has 10,000+ startups and 400+ MNCs. A digital marketing agency here must understand the tech-savvy, fast-moving audience." },
  { title: "Hyper-Competitive Market Requires Expert Execution", description: "With 500+ digital marketing agencies in Bangalore, competition for visibility is fierce. We stand apart with 30+ in-house specialists." },
  { title: "Local Expertise with Global Standards", description: "We bring deep local knowledge — from Koramangala startups to Whitefield enterprises — combined with world-class methodologies." },
  { title: "Speed, Transparency, and Measurable ROI", description: "Campaigns launch in days, real-time dashboards provide full transparency, and every rupee is tracked to revenue." },
  { title: "300+ Bangalore Brands Scaled", description: "From HSR Layout cafes to MG Road enterprises, we've helped 300+ brands scale with integrated SEO, ads, social media, and web design." },
  { title: "Your Neighbourhood Digital Marketing Agency", description: "We're not a remote agency. We offer in-person strategy sessions, local market insights, and hands-on accountability." },
];

export const DMWhyBangaloreSection = () => (
  <section className="py-8 md:py-16 lg:py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-6 md:mb-14">
        <span className="inline-block px-3 py-1 bg-brand/10 text-brand rounded-full text-xs sm:text-sm font-medium mb-3 border border-brand/20">Why Bangalore</span>
        <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
          Why Choose a <span className="text-brand">Digital Marketing Agency in Bangalore</span>?
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
          Choosing the right digital marketing agency in Bangalore can be the difference between stagnation and 10x growth.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 max-w-6xl mx-auto">
        {reasons.map((reason, i) => (
          <div key={i} className="bg-white border border-border/50 rounded-xl p-4 md:p-6">
            <h3 className="text-sm sm:text-base md:text-lg font-bold text-foreground mb-2 leading-tight">{reason.title}</h3>
            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{reason.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
