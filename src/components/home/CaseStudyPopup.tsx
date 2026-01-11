import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, ArrowUp, Globe, Link2, Search, BarChart3 } from "lucide-react";

interface CaseStudyMetric {
  label: string;
  before: string;
  after: string;
  change: string;
  isPositive: boolean;
  icon: React.ReactNode;
}

interface CaseStudyPopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  brandName: string;
  industry: string;
  logo?: string;
}

interface BrandData {
  metrics: CaseStudyMetric[];
  period: { before: string; after: string };
}

const brandMetrics: Record<string, BrandData> = {
  "Magicbricks": {
    period: { before: "June 2023", after: "December 2023" },
    metrics: [
      { label: "Organic Traffic", before: "509.9K", after: "547.3K", change: "+7.3%", isPositive: true, icon: <BarChart3 className="w-5 h-5" /> },
      { label: "Traffic Share", before: "20%", after: "25%", change: "+25%", isPositive: true, icon: <TrendingUp className="w-5 h-5" /> },
      { label: "Organic Keywords", before: "26.3K", after: "27K", change: "+2.7%", isPositive: true, icon: <Search className="w-5 h-5" /> },
      { label: "Backlinks", before: "31.3K", after: "33.6K", change: "+7.3%", isPositive: true, icon: <Link2 className="w-5 h-5" /> },
      { label: "Ref. Domains", before: "2.5K", after: "2.7K", change: "+8%", isPositive: true, icon: <Globe className="w-5 h-5" /> },
    ],
  },
  "Mamaearth": {
    period: { before: "September 2020", after: "January 2021" },
    metrics: [
      { label: "Organic Traffic", before: "382.7K", after: "846.9K", change: "+121%", isPositive: true, icon: <BarChart3 className="w-5 h-5" /> },
      { label: "Traffic Share", before: "96%", after: "96%", change: "0%", isPositive: true, icon: <TrendingUp className="w-5 h-5" /> },
      { label: "Organic Keywords", before: "10.6K", after: "19.9K", change: "+88%", isPositive: true, icon: <Search className="w-5 h-5" /> },
      { label: "Backlinks", before: "24.9K", after: "24.9K", change: "0%", isPositive: true, icon: <Link2 className="w-5 h-5" /> },
      { label: "Ref. Domains", before: "4.4K", after: "4.4K", change: "0%", isPositive: true, icon: <Globe className="w-5 h-5" /> },
    ],
  },
  "upGrad": {
    period: { before: "May 2022", after: "September 2022" },
    metrics: [
      { label: "Organic Traffic", before: "937.3K", after: "1.2M", change: "+28%", isPositive: true, icon: <BarChart3 className="w-5 h-5" /> },
      { label: "Traffic Share", before: "14%", after: "16%", change: "+14%", isPositive: true, icon: <TrendingUp className="w-5 h-5" /> },
      { label: "Organic Keywords", before: "79.4K", after: "98.9K", change: "+25%", isPositive: true, icon: <Search className="w-5 h-5" /> },
      { label: "Backlinks", before: "997K", after: "997K", change: "0%", isPositive: true, icon: <Link2 className="w-5 h-5" /> },
      { label: "Ref. Domains", before: "12.2K", after: "12.2K", change: "0%", isPositive: true, icon: <Globe className="w-5 h-5" /> },
    ],
  },
  "Tata 1mg": {
    period: { before: "September 2021", after: "December 2021" },
    metrics: [
      { label: "Organic Traffic", before: "47.9M", after: "52.6M", change: "+10%", isPositive: true, icon: <BarChart3 className="w-5 h-5" /> },
      { label: "Traffic Share", before: "63%", after: "52%", change: "-17%", isPositive: false, icon: <TrendingUp className="w-5 h-5" /> },
      { label: "Organic Keywords", before: "657.7K", after: "778.9K", change: "+18%", isPositive: true, icon: <Search className="w-5 h-5" /> },
      { label: "Backlinks", before: "463.8K", after: "463.8K", change: "0%", isPositive: true, icon: <Link2 className="w-5 h-5" /> },
      { label: "Ref. Domains", before: "11.8K", after: "11.8K", change: "0%", isPositive: true, icon: <Globe className="w-5 h-5" /> },
    ],
  },
  "Shriram Properties": {
    period: { before: "September 2023", after: "May 2023" },
    metrics: [
      { label: "Organic Traffic", before: "44.4K", after: "40.3K", change: "-9%", isPositive: false, icon: <BarChart3 className="w-5 h-5" /> },
      { label: "Traffic Share", before: "47%", after: "52%", change: "+11%", isPositive: true, icon: <TrendingUp className="w-5 h-5" /> },
      { label: "Organic Keywords", before: "3.2K", after: "3.7K", change: "+16%", isPositive: true, icon: <Search className="w-5 h-5" /> },
      { label: "Backlinks", before: "20.8K", after: "20.8K", change: "0%", isPositive: true, icon: <Link2 className="w-5 h-5" /> },
      { label: "Ref. Domains", before: "2.4K", after: "2.4K", change: "0%", isPositive: true, icon: <Globe className="w-5 h-5" /> },
    ],
  },
  "Lancesoft Healthcare": {
    period: { before: "May 2023", after: "May 2024" },
    metrics: [
      { label: "Organic Traffic", before: "40.3K", after: "17.6K", change: "+10%", isPositive: true, icon: <BarChart3 className="w-5 h-5" /> },
      { label: "Traffic Share", before: "52%", after: "34%", change: "-35%", isPositive: false, icon: <TrendingUp className="w-5 h-5" /> },
      { label: "Organic Keywords", before: "3.7K", after: "268", change: "-93%", isPositive: false, icon: <Search className="w-5 h-5" /> },
      { label: "Backlinks", before: "20.8K", after: "2.9K", change: "-86%", isPositive: false, icon: <Link2 className="w-5 h-5" /> },
      { label: "Ref. Domains", before: "2.4K", after: "802", change: "-67%", isPositive: false, icon: <Globe className="w-5 h-5" /> },
    ],
  },
  "Jain University": {
    period: { before: "June 2023", after: "June 2024" },
    metrics: [
      { label: "Organic Traffic", before: "15.6K", after: "28.2K", change: "+81%", isPositive: true, icon: <BarChart3 className="w-5 h-5" /> },
      { label: "Traffic Share", before: "5%", after: "6%", change: "+20%", isPositive: true, icon: <TrendingUp className="w-5 h-5" /> },
      { label: "Organic Keywords", before: "4.2K", after: "8.2K", change: "+95%", isPositive: true, icon: <Search className="w-5 h-5" /> },
      { label: "Backlinks", before: "11.9K", after: "11.9K", change: "0%", isPositive: true, icon: <Link2 className="w-5 h-5" /> },
      { label: "Ref. Domains", before: "1.2K", after: "1.2K", change: "0%", isPositive: true, icon: <Globe className="w-5 h-5" /> },
    ],
  },
  "Harvest International School": {
    period: { before: "March 2023", after: "September 2024" },
    metrics: [
      { label: "Organic Traffic", before: "4.4K", after: "5.7K", change: "+30%", isPositive: true, icon: <BarChart3 className="w-5 h-5" /> },
      { label: "Traffic Share", before: "26%", after: "8%", change: "-69%", isPositive: false, icon: <TrendingUp className="w-5 h-5" /> },
      { label: "Organic Keywords", before: "1.3K", after: "1.5K", change: "+15%", isPositive: true, icon: <Search className="w-5 h-5" /> },
      { label: "Backlinks", before: "8.6K", after: "8.6K", change: "0%", isPositive: true, icon: <Link2 className="w-5 h-5" /> },
      { label: "Ref. Domains", before: "796", after: "796", change: "0%", isPositive: true, icon: <Globe className="w-5 h-5" /> },
    ],
  },
  "Atria Institute": {
    period: { before: "July 2022", after: "June 2024" },
    metrics: [
      { label: "Organic Traffic", before: "9.4K", after: "27.8K", change: "+196%", isPositive: true, icon: <BarChart3 className="w-5 h-5" /> },
      { label: "Traffic Share", before: "41%", after: "3%", change: "-93%", isPositive: false, icon: <TrendingUp className="w-5 h-5" /> },
      { label: "Organic Keywords", before: "926", after: "1.4K", change: "+51%", isPositive: true, icon: <Search className="w-5 h-5" /> },
      { label: "Backlinks", before: "3.6K", after: "3.6K", change: "0%", isPositive: true, icon: <Link2 className="w-5 h-5" /> },
      { label: "Ref. Domains", before: "712", after: "712", change: "0%", isPositive: true, icon: <Globe className="w-5 h-5" /> },
    ],
  },
  "Bhrighu Academy": {
    period: { before: "September 2024", after: "September 2025" },
    metrics: [
      { label: "Organic Traffic", before: "15", after: "5.9K", change: "+39,233%", isPositive: true, icon: <BarChart3 className="w-5 h-5" /> },
      { label: "Traffic Share", before: "0%", after: "70%", change: "+70%", isPositive: true, icon: <TrendingUp className="w-5 h-5" /> },
      { label: "Organic Keywords", before: "38", after: "895", change: "+2,255%", isPositive: true, icon: <Search className="w-5 h-5" /> },
      { label: "Backlinks", before: "3.3K", after: "3.3K", change: "0%", isPositive: true, icon: <Link2 className="w-5 h-5" /> },
      { label: "Ref. Domains", before: "84", after: "84", change: "0%", isPositive: true, icon: <Globe className="w-5 h-5" /> },
    ],
  },
};

export const CaseStudyPopup = ({
  open,
  onOpenChange,
  brandName,
  industry,
  logo,
}: CaseStudyPopupProps) => {
  const brandData = brandMetrics[brandName] || { metrics: [], period: { before: "", after: "" } };
  const { metrics, period } = brandData;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl bg-background border-border p-0 overflow-hidden">
        {/* Header with brand */}
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 border-b border-border">
          <DialogHeader>
            <div className="flex items-center gap-4">
              {logo && (
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-white shadow-lg">
                  <img src={logo} alt={brandName} className="w-full h-full object-cover" />
                </div>
              )}
              <div>
                <DialogTitle className="text-2xl font-bold text-foreground">
                  {brandName}
                </DialogTitle>
                <Badge variant="secondary" className="mt-1">
                  {industry}
                </Badge>
              </div>
            </div>
          </DialogHeader>
        </div>

        {/* Before/After Comparison */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-foreground">
              SEO Performance Results
            </h3>
            <div className="flex items-center gap-3 text-sm">
              <span className="text-muted-foreground">{period.before}</span>
              <ArrowUp className="w-4 h-4 text-primary rotate-90" />
              <span className="text-primary font-medium">{period.after}</span>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid gap-4">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="bg-muted/50 rounded-xl p-4 border border-border hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      {metric.icon}
                    </div>
                    <span className="font-medium text-foreground">{metric.label}</span>
                  </div>

                  <div className="flex items-center gap-6">
                    {/* Before */}
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground mb-0.5">Before</p>
                      <p className="text-lg font-semibold text-muted-foreground">
                        {metric.before}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="flex items-center justify-center w-8">
                      <ArrowUp className="w-5 h-5 text-primary rotate-90" />
                    </div>

                    {/* After */}
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground mb-0.5">After</p>
                      <p className="text-lg font-semibold text-foreground">
                        {metric.after}
                      </p>
                    </div>

                    {/* Change Badge */}
                    <Badge
                      className={`min-w-[60px] justify-center ${
                        metric.isPositive
                          ? "bg-green-500/10 text-green-600 hover:bg-green-500/20 border-green-500/20"
                          : "bg-red-500/10 text-red-600 hover:bg-red-500/20 border-red-500/20"
                      }`}
                    >
                      {metric.isPositive && <ArrowUp className="w-3 h-3 mr-1" />}
                      {metric.change}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Source Attribution */}
          <p className="text-xs text-muted-foreground text-center mt-6">
            Data sourced from Semrush Domain Overview • {period.before} - {period.after}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
