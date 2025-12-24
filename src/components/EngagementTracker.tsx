import React, { forwardRef } from "react";
import { useEngagementTracking } from "@/hooks/useEngagementTracking";

export const EngagementTracker = forwardRef<HTMLDivElement>((_, ref) => {
  useEngagementTracking();
  return <div ref={ref} style={{ display: 'none' }} />;
});

EngagementTracker.displayName = "EngagementTracker";
