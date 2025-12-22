import { Linkedin, Twitter } from "lucide-react";
import { BentoGrid, BentoCard, BentoBadge } from "@/components/ui/bento-grid";

const teamMembers = [
  {
    name: "Rahul Sharma",
    role: "Founder & CEO",
    expertise: "Ex-Google, 12+ years in SEO",
    avatar: "RS",
  },
  {
    name: "Priya Patel",
    role: "Head of AI SEO",
    expertise: "AI/ML Specialist, Stanford Alum",
    avatar: "PP",
  },
  {
    name: "Amit Kumar",
    role: "Director, Performance Marketing",
    expertise: "Meta & Google Certified, 10+ years",
    avatar: "AK",
  },
  {
    name: "Sneha Reddy",
    role: "Head of Content Strategy",
    expertise: "Ex-HubSpot, Content Marketing Expert",
    avatar: "SR",
  },
  {
    name: "Vikram Singh",
    role: "Technical SEO Lead",
    expertise: "Full-stack Developer, SEO Engineer",
    avatar: "VS",
  },
  {
    name: "Ananya Gupta",
    role: "Data Science Lead",
    expertise: "IIT Delhi, Analytics Expert",
    avatar: "AG",
  },
];

export const TeamSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-3 md:px-4">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <BentoBadge className="mb-4">Our Team</BentoBadge>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">
            Meet the Experts
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            A world-class team united by one mission — your growth.
          </p>
        </div>

        <BentoGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <BentoCard key={index} className="group text-center">
              {/* Avatar */}
              <div className="relative w-16 h-16 md:w-20 md:h-20 bg-brand-gradient rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-brand/20">
                <span className="text-xl md:text-2xl font-bold text-white">{member.avatar}</span>
                {/* Online indicator */}
                <div className="absolute bottom-1 right-1 w-3 h-3 md:w-4 md:h-4 bg-green-500 rounded-full border-2 border-background" />
              </div>

              <h3 className="text-lg md:text-xl font-bold text-foreground mb-1 group-hover:text-brand transition-colors">
                {member.name}
              </h3>
              <p className="text-brand font-medium text-sm mb-2">{member.role}</p>
              <p className="text-muted-foreground text-sm mb-4">{member.expertise}</p>

              {/* Social Links */}
              <div className="flex items-center justify-center gap-3">
                <a
                  href="#"
                  className="w-8 h-8 icon-bg-glow rounded-full flex items-center justify-center hover:bg-brand-gradient hover:text-white transition-all duration-300"
                  aria-label={`${member.name}'s LinkedIn`}
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 icon-bg-glow rounded-full flex items-center justify-center hover:bg-brand-gradient hover:text-white transition-all duration-300"
                  aria-label={`${member.name}'s Twitter`}
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </BentoCard>
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};
