import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { AlertTriangle, TrendingUp, Zap, Clock, Target, Search, ArrowRight, Users } from "lucide-react";

interface AuditChoicePopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const AuditChoicePopup = ({ open, onOpenChange }: AuditChoicePopupProps) => {
  const navigate = useNavigate();

  const handleAuditChoice = (type: "seo" | "ads") => {
    onOpenChange(false);
    if (type === "seo") {
      navigate("/ai-seo");
    } else {
      navigate("/performance-marketing");
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[520px] p-0 overflow-hidden border-destructive/20 bg-background">
        {/* Warning Header */}
        <div className="bg-destructive/10 border-b border-destructive/20 px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-destructive/20 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-destructive" />
            </div>
            <div>
              <DialogHeader>
                <DialogTitle className="text-lg font-bold text-destructive">
                  Your Competitors Are Stealing Your Customers
                </DialogTitle>
              </DialogHeader>
              <p className="text-sm text-destructive/80 mt-0.5">
                Right now. Every single day.
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-5">
          {/* Money Loss Message */}
          <div className="text-center">
            <p className="text-muted-foreground">
              Every day without optimization costs you{" "}
              <span className="font-bold text-foreground">₹50,000+</span> in missed revenue.
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Choose your growth path below:
            </p>
          </div>

          {/* Audit Options */}
          <div className="grid gap-4">
            {/* SEO Audit Card */}
            <button
              onClick={() => handleAuditChoice("seo")}
              className="group w-full text-left p-4 rounded-xl border border-border hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Search className="w-6 h-6 text-emerald-500" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-foreground group-hover:text-emerald-500 transition-colors">
                      Free SEO Audit
                    </h3>
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-emerald-500" />
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                    <TrendingUp className="w-3 h-3" />
                    <span>Organic Growth</span>
                    <span className="text-border">•</span>
                    <Clock className="w-3 h-3" />
                    <span>Long-term Results</span>
                  </div>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-emerald-500" />
                      Build lasting organic traffic
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-emerald-500" />
                      Dominate AI search results
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-emerald-500" />
                      6-12 month compounding returns
                    </li>
                  </ul>
                </div>
              </div>
            </button>

            {/* Ads Audit Card */}
            <button
              onClick={() => handleAuditChoice("ads")}
              className="group w-full text-left p-4 rounded-xl border border-border hover:border-[hsl(var(--brand-orange))]/50 hover:bg-[hsl(var(--brand-orange))]/5 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[hsl(var(--brand-orange))]/10 border border-[hsl(var(--brand-orange))]/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-[hsl(var(--brand-orange))]" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-foreground group-hover:text-[hsl(var(--brand-orange))] transition-colors">
                      Free Ads Audit
                    </h3>
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[hsl(var(--brand-orange))]" />
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                    <Target className="w-3 h-3" />
                    <span>Paid Traffic</span>
                    <span className="text-border">•</span>
                    <Zap className="w-3 h-3" />
                    <span>Immediate Leads</span>
                  </div>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[hsl(var(--brand-orange))]" />
                      Get leads within 48 hours
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[hsl(var(--brand-orange))]" />
                      Stop wasting ad spend
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[hsl(var(--brand-orange))]" />
                      Instant ROI visibility
                    </li>
                  </ul>
                </div>
              </div>
            </button>
          </div>

          {/* Scarcity Indicators */}
          <div className="flex flex-col items-center gap-2 pt-2 border-t border-border">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="w-4 h-4 text-[hsl(var(--brand-orange))]" />
              <span>
                <span className="font-semibold text-foreground">47 businesses</span> claimed audits today
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-destructive"></span>
              </span>
              <span className="text-sm font-medium text-destructive">
                Only 3 free audit spots remaining this week
              </span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
