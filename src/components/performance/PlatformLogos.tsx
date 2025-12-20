import { Target } from "lucide-react";

interface PlatformLogoProps {
  platform: string;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
  className?: string;
}

const platformData: Record<string, { label: string; color: string; gradient: string }> = {
  meta_ads: {
    label: "Meta Ads",
    color: "#0081FB",
    gradient: "from-[#0081FB] to-[#00C6FF]",
  },
  google_ads: {
    label: "Google Ads",
    color: "#4285F4",
    gradient: "from-[#4285F4] via-[#EA4335] to-[#FBBC05]",
  },
  linkedin_ads: {
    label: "LinkedIn Ads",
    color: "#0A66C2",
    gradient: "from-[#0A66C2] to-[#004182]",
  },
};

const sizeClasses = {
  sm: "w-6 h-6",
  md: "w-10 h-10",
  lg: "w-14 h-14",
};

const iconSizes = {
  sm: "w-3 h-3",
  md: "w-5 h-5",
  lg: "w-7 h-7",
};

export const PlatformLogo = ({ platform, size = "md", showLabel = false, className = "" }: PlatformLogoProps) => {
  const data = platformData[platform];
  
  if (!data) return null;

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div 
        className={`${sizeClasses[size]} rounded-lg bg-gradient-to-br ${data.gradient} flex items-center justify-center shadow-md`}
      >
        {platform === "meta_ads" && (
          <svg viewBox="0 0 24 24" className={iconSizes[size]} fill="white">
            <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.52 1.49-3.92 3.78-3.92 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z"/>
          </svg>
        )}
        {platform === "google_ads" && (
          <svg viewBox="0 0 24 24" className={iconSizes[size]} fill="white">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
          </svg>
        )}
        {platform === "linkedin_ads" && (
          <svg viewBox="0 0 24 24" className={iconSizes[size]} fill="white">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        )}
      </div>
      {showLabel && (
        <span className="font-medium text-foreground">{data.label}</span>
      )}
    </div>
  );
};

interface PlatformBadgeProps {
  platforms: string[];
  size?: "sm" | "md";
}

export const PlatformBadges = ({ platforms, size = "sm" }: PlatformBadgeProps) => {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      {platforms.map((platform) => (
        <PlatformLogo key={platform} platform={platform} size={size} showLabel />
      ))}
    </div>
  );
};

interface RecommendedPlatformCardProps {
  platform: string;
  budgetAllocation: number;
  expectedLeads: number;
  expectedROI: number;
  isB2B: boolean;
}

export const RecommendedPlatformCard = ({ 
  platform, 
  budgetAllocation, 
  expectedLeads, 
  expectedROI,
  isB2B 
}: RecommendedPlatformCardProps) => {
  const data = platformData[platform];
  const isRecommended = (isB2B && platform === "linkedin_ads") || (!isB2B && platform === "meta_ads");

  if (!data) return null;

  return (
    <div className={`relative p-4 rounded-xl border-2 transition-all ${
      isRecommended ? "border-green-500/50 bg-green-50/50 dark:bg-green-900/10" : "border-border bg-card"
    }`}>
      {isRecommended && (
        <div className="absolute -top-2.5 left-4 px-2 py-0.5 bg-green-500 text-white text-xs font-medium rounded-full">
          Recommended for {isB2B ? "B2B" : "B2C"}
        </div>
      )}
      
      <div className="flex items-start gap-3">
        <PlatformLogo platform={platform} size="md" />
        <div className="flex-1">
          <h4 className="font-semibold text-foreground">{data.label}</h4>
          <div className="grid grid-cols-3 gap-2 mt-3">
            <div>
              <div className="text-xs text-muted-foreground">Budget</div>
              <div className="font-semibold text-foreground">{budgetAllocation}%</div>
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Leads/mo</div>
              <div className="font-semibold text-foreground">{expectedLeads}</div>
            </div>
            <div>
              <div className="text-xs text-muted-foreground">ROI</div>
              <div className="font-semibold text-green-600">{expectedROI}x</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
