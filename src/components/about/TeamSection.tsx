import { Linkedin, Instagram } from "lucide-react";
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
import azarudheeImg from "@/assets/team/azarudheen.jpg";

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
  { name: "Azarudheen", expertise: "UI/UX & Creative Design", image: azarudheeImg },
];

const PolaroidCard = ({ member }: { member: typeof teamMembers[0] }) => (
  <div className="group relative bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-400 hover:-translate-y-2 border border-border/30">
    {/* Photo with social icons */}
    <div className="relative aspect-[4/5] overflow-hidden">
      <img
        src={member.image}
        alt={`${member.name} at The Super 30`}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
      {/* Small social icons on right side of image */}
      <div className="absolute right-2 bottom-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <a
          href="#"
          className="w-8 h-8 rounded-full bg-[#0A66C2]/90 backdrop-blur-sm flex items-center justify-center text-white hover:scale-110 transition-transform"
          aria-label={`${member.name}'s LinkedIn`}
        >
          <Linkedin className="w-4 h-4" />
        </a>
        <a
          href="#"
          className="w-8 h-8 rounded-full bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] backdrop-blur-sm flex items-center justify-center text-white hover:scale-110 transition-transform"
          aria-label={`${member.name}'s Instagram`}
        >
          <Instagram className="w-4 h-4" />
        </a>
      </div>
    </div>
    {/* Info */}
    <div className="p-4 text-center">
      <h3 className="font-bold text-sm md:text-base text-foreground">{member.name}</h3>
      <p className="text-[11px] md:text-xs text-muted-foreground mt-1 leading-tight">{member.expertise}</p>
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
            Meet Our Digital Marketing Experts
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Our SEO specialists and PPC specialists work collaboratively to deliver integrated strategies for your growth.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <PolaroidCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};
