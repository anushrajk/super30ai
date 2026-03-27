import { Linkedin, Twitter } from "lucide-react";
import { BentoBadge } from "@/components/ui/bento-grid";

import amitImg from "@/assets/team/amit.png";
import lalitImg from "@/assets/team/lalit.png";
import mayankImg from "@/assets/team/mayank.png";
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
  { name: "Amit", expertise: "Growth Strategy & Business Development", image: amitImg },
  { name: "Lalit", expertise: "SEO Architecture & Technical Audits", image: lalitImg },
  { name: "Mayank", expertise: "Digital Strategy & Analytics", image: mayankImg },
  { name: "Vignesh", expertise: "Ex-Google, 12+ years in SEO", image: vigneshImg },
  { name: "Sujeet", expertise: "AI/ML SEO Specialist", image: sujeetImg },
  { name: "Swanand", expertise: "PPC Specialist, Meta & Google Certified", image: swanandImg },
  { name: "Sathya", expertise: "Content Strategy & SEO Expert", image: sathyaImg },
  { name: "Monisha", expertise: "Full-stack Developer, SEO Engineer", image: monishaImg },
  { name: "Kailash", expertise: "IIT Delhi, Analytics Expert", image: kailashImg },
  { name: "Deepak", expertise: "10+ years in SEO & PPC", image: deepakImg },
  { name: "Madhu", expertise: "E-commerce SEO Expert", image: madhuImg },
  { name: "Anush", expertise: "Google Ads Certified, ROI Expert", image: anushImg },
  { name: "Abhishek", expertise: "React & Node.js Expert", image: abhishekImg },
];

const PolaroidCard = ({ member }: { member: typeof teamMembers[0] }) => (
  <div className="group relative bg-card rounded-lg p-2.5 pb-4 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border/40">
    {/* Photo area */}
    <div className="relative aspect-[4/5] rounded overflow-hidden bg-muted">
      <img
        src={member.image}
        alt={`${member.name} at The Super 30`}
        className="w-full h-full object-cover"
        loading="lazy"
      />
      {/* Social overlay on hover */}
      <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
        <a
          href="#"
          className="w-9 h-9 bg-white rounded-full flex items-center justify-center hover:bg-brand hover:text-white text-foreground transition-all duration-200 hover:scale-110"
          aria-label={`${member.name}'s LinkedIn`}
        >
          <Linkedin className="w-4 h-4" />
        </a>
        <a
          href="#"
          className="w-9 h-9 bg-white rounded-full flex items-center justify-center hover:bg-foreground hover:text-white text-foreground transition-all duration-200 hover:scale-110"
          aria-label={`${member.name}'s X`}
        >
          <Twitter className="w-4 h-4" />
        </a>
      </div>
    </div>
    {/* Name & role */}
    <div className="mt-3 text-center">
      <h3 className="font-bold text-sm md:text-base text-foreground">{member.name}</h3>
      <p className="text-xs text-muted-foreground mt-0.5 leading-tight">{member.expertise}</p>
    </div>
  </div>
);

export const TeamSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-muted/30">
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

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <PolaroidCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};
