import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

export const BentoGrid = ({ children, className }: BentoGridProps) => {
  return (
    <div className={cn(
      "grid gap-4 md:gap-6",
      className
    )}>
      {children}
    </div>
  );
};

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  colSpan?: 1 | 2 | 3;
  rowSpan?: 1 | 2;
  variant?: "default" | "featured" | "glass";
}

export const BentoCard = ({ 
  children, 
  className, 
  colSpan = 1, 
  rowSpan = 1,
  variant = "default" 
}: BentoCardProps) => {
  const colSpanClasses = {
    1: "",
    2: "md:col-span-2",
    3: "md:col-span-3",
  };

  const rowSpanClasses = {
    1: "",
    2: "md:row-span-2",
  };

  const variantClasses = {
    default: "bento-card",
    featured: "bento-card bg-brand-gradient-light dark:bg-card/90",
    glass: "glass bento-card",
  };

  return (
    <div className={cn(
      variantClasses[variant],
      colSpanClasses[colSpan],
      rowSpanClasses[rowSpan],
      "p-6 hover:-translate-y-1 group",
      className
    )}>
      {children}
    </div>
  );
};

interface BentoIconProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const BentoIcon = ({ children, className, size = "md" }: BentoIconProps) => {
  const sizeClasses = {
    sm: "w-10 h-10",
    md: "w-12 h-12 md:w-14 md:h-14",
    lg: "w-16 h-16 md:w-20 md:h-20",
  };

  return (
    <div className={cn(
      sizeClasses[size],
      "icon-bg-glow rounded-2xl flex items-center justify-center",
      "group-hover:bg-brand-gradient transition-all duration-300",
      "group-hover:scale-110 group-hover:rotate-3",
      "shadow-lg",
      className
    )}>
      {children}
    </div>
  );
};

interface BentoBadgeProps {
  children: ReactNode;
  className?: string;
}

export const BentoBadge = ({ children, className }: BentoBadgeProps) => {
  return (
    <span className={cn(
      "badge-brand",
      className
    )}>
      {children}
    </span>
  );
};
