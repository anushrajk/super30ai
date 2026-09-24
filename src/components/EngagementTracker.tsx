import React, { forwardRef } from "react";
import { useEngagementTracking } from "@/hooks/useEngagementTracking";
import { useSession } from "@/hooks/useSession";

export const EngagementTracker = forwardRef<HTMLDivElement>((_, ref) => {
  // Start a visitor session on every page so all visits (incl. Google landings) are counted
  useSession();
  useEngagementTracking();
  return <div ref={ref} style={{ display: 'none' }} />;
});

EngagementTracker.displayName = "EngagementTracker";
