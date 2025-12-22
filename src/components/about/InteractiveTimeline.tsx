import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp, Rocket, Users, Bot, Trophy, Sparkles } from "lucide-react";
import { BentoBadge } from "@/components/ui/bento-grid";

const milestones = [
  {
    year: "2015",
    title: "The Beginning",
    description: "Started as a boutique SEO consultancy in Bangalore with just 3 team members and a vision to transform digital marketing.",
    icon: Rocket,
    stats: { clients: 10, team: 3 },
    expanded: "Our founders, fresh from Google, saw the gap between enterprise SEO and what SMBs could afford. We set out to bridge that gap.",
  },
  {
    year: "2018",
    title: "Service Expansion",
    description: "Added Performance Marketing to our services, becoming a full-stack digital growth agency.",
    icon: Users,
    stats: { clients: 75, team: 15 },
    expanded: "Clients wanted more than SEO. We brought in performance marketing experts to deliver end-to-end growth solutions.",
  },
  {
    year: "2021",
    title: "AI Pioneer",
    description: "First agency in India to launch AI-powered SEO services, staying ahead of the curve.",
    icon: Bot,
    stats: { clients: 150, team: 25 },
    expanded: "We saw AI transforming search before anyone else. Our proprietary AI tools gave clients a 2-year head start.",
  },
  {
    year: "2024",
    title: "300+ Clients Milestone",
    description: "Crossed 300 successful projects with over ₹50Cr revenue generated for clients.",
    icon: Trophy,
    stats: { clients: 300, team: 40 },
    expanded: "A testament to our results-driven approach. Each project represents a real business transformed.",
  },
  {
    year: "2025",
    title: "The Super 30",
    description: "Rebranded as The Super 30, focusing on AI-first marketing for ambitious founders.",
    icon: Sparkles,
    stats: { clients: "350+", team: "50+" },
    expanded: "Our new identity reflects our commitment: deliver enterprise-grade AI marketing to the top 30% of ambitious businesses.",
  },
];

export const InteractiveTimeline = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(4);

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-3 md:px-4">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <BentoBadge className="mb-4">Our Journey</BentoBadge>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">
            10 Years of Innovation
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Click on any milestone to learn more about our story.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand via-brand/50 to-brand" />

          {milestones.map((milestone, index) => {
            const isExpanded = expandedIndex === index;
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className={`relative flex items-start mb-6 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div
                  className={`w-full md:w-1/2 pl-16 md:pl-0 ${
                    isLeft ? "md:pr-10" : "md:pl-10"
                  }`}
                >
                  <Card
                    onClick={() => setExpandedIndex(isExpanded ? null : index)}
                    className={`cursor-pointer bento-card transition-all duration-500 overflow-hidden ${
                      isExpanded
                        ? "border-brand/50 shadow-xl shadow-brand/10"
                        : "border-border/50 hover:border-brand/30 hover:shadow-lg"
                    }`}
                  >
                    <CardContent className="p-4 md:p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="icon-bg-glow w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:bg-brand-gradient transition-all duration-300">
                            <milestone.icon className="w-5 h-5 md:w-6 md:h-6 text-brand" />
                          </div>
                          <div>
                            <span className="text-brand font-bold text-base md:text-lg">
                              {milestone.year}
                            </span>
                            <h3 className="text-lg md:text-xl font-bold text-foreground">
                              {milestone.title}
                            </h3>
                          </div>
                        </div>
                        <button className="p-1 hover:bg-muted rounded-full transition-colors">
                          {isExpanded ? (
                            <ChevronUp className="w-5 h-5 text-muted-foreground" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-muted-foreground" />
                          )}
                        </button>
                      </div>

                      <p className="text-muted-foreground text-sm md:text-base mb-3">
                        {milestone.description}
                      </p>

                      {/* Expanded content */}
                      <div
                        className={`overflow-hidden transition-all duration-500 ${
                          isExpanded ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="pt-3 border-t border-border">
                          <p className="text-foreground text-sm mb-4">{milestone.expanded}</p>
                          <div className="flex items-center gap-6">
                            <div className="text-center">
                              <div className="text-xl md:text-2xl font-bold text-brand-gradient">
                                {milestone.stats.clients}
                              </div>
                              <p className="text-xs text-muted-foreground">Clients</p>
                            </div>
                            <div className="text-center">
                              <div className="text-xl md:text-2xl font-bold text-brand-gradient">
                                {milestone.stats.team}
                              </div>
                              <p className="text-xs text-muted-foreground">Team Size</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline dot */}
                <div
                  className={`absolute left-6 md:left-1/2 w-3 h-3 md:w-4 md:h-4 rounded-full transform md:-translate-x-1/2 border-4 border-background z-10 transition-all duration-300 ${
                    isExpanded
                      ? "bg-brand scale-125"
                      : "bg-muted-foreground"
                  }`}
                  style={{ top: "1.5rem" }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
