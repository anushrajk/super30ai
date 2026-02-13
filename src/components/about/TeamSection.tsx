import { Linkedin, Twitter } from "lucide-react";
import { BentoGrid, BentoCard, BentoBadge } from "@/components/ui/bento-grid";

import vigneshImg from "@/assets/team/vignesh.png";
import sujeetImg from "@/assets/team/sujeet.png";
import swanandImg from "@/assets/team/swanand.png";
import sathyaImg from "@/assets/team/sathya.png";
import monishaImg from "@/assets/team/monisha.png";
import kailashImg from "@/assets/team/kailash.png";
import deepakImg from "@/assets/team/deepak.png";
import madhuImg from "@/assets/team/madhu.png";
import anushImg from "@/assets/team/anush.png";
import abhishekImg from "@/assets/team/abhishek.png";

const teamMembers = [
  {
    name: "Vignesh",
    role: "Founder & SEO Expert",
    expertise: "Ex-Google, 12+ years in SEO",
    image: vigneshImg,
  },
  {
    name: "Sujeet",
    role: "Head of AI SEO",
    expertise: "AI/ML SEO Specialist",
    image: sujeetImg,
  },
  {
    name: "Swanand",
    role: "Director, Performance Marketing",
    expertise: "PPC Specialist, Meta & Google Certified",
    image: swanandImg,
  },
  {
    name: "Sathya",
    role: "Digital Marketing Specialist",
    expertise: "Content Strategy & SEO Expert",
    image: sathyaImg,
  },
  {
    name: "Monisha",
    role: "Technical SEO Specialist",
    expertise: "Full-stack Developer, SEO Engineer",
    image: monishaImg,
  },
  {
    name: "Kailash",
    role: "Data Science Lead",
    expertise: "IIT Delhi, Analytics Expert",
    image: kailashImg,
  },
  {
    name: "Deepak",
    role: "Digital Marketing Specialist",
    expertise: "10+ years in SEO & PPC",
    image: deepakImg,
  },
  {
    name: "Madhu",
    role: "Senior SEO Specialist",
    expertise: "E-commerce SEO Expert",
    image: madhuImg,
  },
  {
    name: "Anush",
    role: "PPC Specialist",
    expertise: "Google Ads Certified, ROI Expert",
    image: anushImg,
  },
  {
    name: "Abhishek",
    role: "Web Developer",
    expertise: "React & Node.js Expert",
    image: abhishekImg,
  },
];

export const TeamSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-3 md:px-4">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <BentoBadge className="mb-4">Our Team</BentoBadge>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">
            Meet the SEO Experts
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Our SEO specialists and PPC specialists work collaboratively to deliver integrated strategies for your growth.
          </p>
        </div>

        <BentoGrid className="grid-cols-2 md:grid-cols-4 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <BentoCard key={index} className="group text-center p-3 md:p-4">
              {/* Avatar */}
              <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg overflow-hidden">
                <img 
                  src={member.image} 
                  alt={`${member.name} — ${member.role} at The Super 30`}
                  className="w-full h-full object-cover"
                />
                {/* Online indicator */}
                <div className="absolute bottom-0 right-0 w-3 h-3 md:w-4 md:h-4 bg-green-500 rounded-full border-2 border-background" />
              </div>

              <h3 className="text-sm md:text-base font-bold text-foreground mb-0.5 group-hover:text-brand transition-colors">
                {member.name}
              </h3>
              <p className="text-brand font-medium text-xs mb-1">{member.role}</p>
              <p className="text-muted-foreground text-xs leading-tight hidden md:block">{member.expertise}</p>

              {/* Social Links */}
              <div className="flex items-center justify-center gap-2 mt-2">
                <a
                  href="#"
                  className="w-6 h-6 icon-bg-glow rounded-full flex items-center justify-center hover:bg-brand-gradient hover:text-white transition-all duration-300"
                  aria-label={`${member.name}'s LinkedIn`}
                >
                  <Linkedin className="w-3 h-3" />
                </a>
                <a
                  href="#"
                  className="w-6 h-6 icon-bg-glow rounded-full flex items-center justify-center hover:bg-brand-gradient hover:text-white transition-all duration-300"
                  aria-label={`${member.name}'s Twitter`}
                >
                  <Twitter className="w-3 h-3" />
                </a>
              </div>
            </BentoCard>
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};
