import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Twitter } from "lucide-react";

const teamMembers = [
  {
    name: "Rahul Sharma",
    role: "Founder & CEO",
    expertise: "Ex-Google, 12+ years in SEO",
    avatar: "RS",
    color: "from-orange-500 to-orange-600",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Priya Patel",
    role: "Head of AI SEO",
    expertise: "AI/ML Specialist, Stanford Alum",
    avatar: "PP",
    color: "from-blue-500 to-blue-600",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Amit Kumar",
    role: "Director, Performance Marketing",
    expertise: "Meta & Google Certified, 10+ years",
    avatar: "AK",
    color: "from-green-500 to-green-600",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Sneha Reddy",
    role: "Head of Content Strategy",
    expertise: "Ex-HubSpot, Content Marketing Expert",
    avatar: "SR",
    color: "from-purple-500 to-purple-600",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Vikram Singh",
    role: "Technical SEO Lead",
    expertise: "Full-stack Developer, SEO Engineer",
    avatar: "VS",
    color: "from-cyan-500 to-cyan-600",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Ananya Gupta",
    role: "Data Science Lead",
    expertise: "IIT Delhi, Analytics Expert",
    avatar: "AG",
    color: "from-pink-500 to-pink-600",
    linkedin: "#",
    twitter: "#",
  },
];

export const TeamSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
            Our Team
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meet the Experts
          </h2>
          <p className="text-lg text-muted-foreground">
            A world-class team united by one mission — your growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="bg-muted/30 border-border/50 hover:border-orange-500/50 hover:shadow-xl transition-all duration-500 group overflow-hidden"
            >
              <CardContent className="p-6 text-center relative">
                {/* Background glow on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Avatar */}
                <div className={`relative w-20 h-20 bg-gradient-to-br ${member.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <span className="text-2xl font-bold text-white">{member.avatar}</span>
                  {/* Online indicator */}
                  <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-orange-600 transition-colors">
                  {member.name}
                </h3>
                <p className="text-orange-500 font-medium text-sm mb-2">{member.role}</p>
                <p className="text-muted-foreground text-sm mb-4">{member.expertise}</p>

                {/* Social Links */}
                <div className="flex items-center justify-center gap-3">
                  <a
                    href={member.linkedin}
                    className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-orange-100 hover:text-orange-600 transition-colors"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={member.twitter}
                    className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-orange-100 hover:text-orange-600 transition-colors"
                    aria-label={`${member.name}'s Twitter`}
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
