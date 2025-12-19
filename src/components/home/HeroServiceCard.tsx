import { LucideIcon } from "lucide-react";

interface HeroServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
}

export const HeroServiceCard = ({
  icon: Icon,
  title,
  description,
  gradient,
}: HeroServiceCardProps) => {
  return (
    <div className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-2xl p-5 hover:border-primary/30 hover:shadow-xl transition-all duration-300 group min-w-[280px]">
      <div className={`w-12 h-12 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-lg font-bold text-foreground mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};
