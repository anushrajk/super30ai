import { IndianRupee, TrendingDown, TrendingUp, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";

interface RevenueImpactCardProps {
  amount: number;
  currency?: string;
  calculationBasis?: string;
  breakdown?: {
    aiVisibilityGap: number;
    contentGap: number;
    technicalGap: number;
    authorityGap: number;
  };
}

const RevenueImpactCard = ({ 
  amount, 
  currency = "INR",
  calculationBasis,
  breakdown
}: RevenueImpactCardProps) => {
  const [animatedAmount, setAnimatedAmount] = useState(0);

  useEffect(() => {
    const duration = 1500;
    const steps = 60;
    const increment = amount / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= amount) {
        setAnimatedAmount(amount);
        clearInterval(timer);
      } else {
        setAnimatedAmount(Math.round(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [amount]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: currency,
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <Card className="border-orange-200 bg-gradient-to-br from-orange-50 to-amber-50 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-amber-100 rounded-full translate-y-1/2 -translate-x-1/2 opacity-50" />
      
      <CardHeader className="relative pb-2">
        <CardTitle className="flex items-center gap-2 text-lg flex-wrap">
          <div className="p-2 bg-orange-100 rounded-lg">
            <TrendingDown className="w-5 h-5 text-orange-600" />
          </div>
          <span className="text-orange-900">Estimated Monthly Revenue Loss</span>
          <Badge className="bg-purple-100 text-purple-700 text-xs font-medium">AI-Powered</Badge>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="relative">
        <div className="text-center py-6">
          <div className="flex items-center justify-center gap-1">
            <IndianRupee className="w-8 h-8 text-orange-600" />
            <span className="text-5xl font-bold text-orange-600">
              {animatedAmount.toLocaleString('en-IN')}
            </span>
          </div>
          <Badge variant="outline" className="mt-2 border-orange-300 text-orange-600">
            per month
          </Badge>
        </div>

        {breakdown && (
          <div className="grid grid-cols-2 gap-3 mt-4">
            <div className="bg-white/60 rounded-lg p-3 text-center">
              <p className="text-xs text-muted-foreground">AI Visibility Loss</p>
              <p className="font-semibold text-orange-700">
                {formatCurrency(amount * (breakdown.aiVisibilityGap / 100))}
              </p>
            </div>
            <div className="bg-white/60 rounded-lg p-3 text-center">
              <p className="text-xs text-muted-foreground">Content Gap Loss</p>
              <p className="font-semibold text-orange-700">
                {formatCurrency(amount * (breakdown.contentGap / 100))}
              </p>
            </div>
            <div className="bg-white/60 rounded-lg p-3 text-center">
              <p className="text-xs text-muted-foreground">Technical Loss</p>
              <p className="font-semibold text-orange-700">
                {formatCurrency(amount * (breakdown.technicalGap / 100))}
              </p>
            </div>
            <div className="bg-white/60 rounded-lg p-3 text-center">
              <p className="text-xs text-muted-foreground">Authority Gap Loss</p>
              <p className="font-semibold text-orange-700">
                {formatCurrency(amount * (breakdown.authorityGap / 100))}
              </p>
            </div>
          </div>
        )}

        {calculationBasis && (
          <div className="mt-4 p-3 bg-orange-100/50 rounded-lg flex items-start gap-2">
            <AlertTriangle className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-orange-700">
              <strong>Calculation:</strong> {calculationBasis}
            </p>
          </div>
        )}

        <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-5 h-5 text-green-600" />
            <p className="font-semibold text-green-800">Potential Recovery</p>
          </div>
          <p className="text-sm text-green-700">
            With proper SEO optimization, you could recover up to{" "}
            <strong>{formatCurrency(amount * 0.7)}</strong> in monthly revenue within 3-6 months.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default RevenueImpactCard;
