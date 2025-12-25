import { useState } from "react";
import { 
  Check, 
  Clock, 
  Award, 
  Users, 
  Briefcase, 
  BookOpen, 
  Wrench,
  Shield,
  Calculator,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const CourseInvestmentSection = () => {
  const [ref, isVisible] = useScrollAnimation();
  const [currentSalary, setCurrentSalary] = useState(300000); // 3L default

  const scrollToApplication = () => {
    const element = document.getElementById("course-application");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Calculate ROI
  const expectedSalary = 700000; // 7L average after course
  const courseFee = 199000; // 1.99L
  const salaryIncrease = expectedSalary - currentSalary;
  const roi = Math.round((salaryIncrease / courseFee) * 100);
  const paybackMonths = Math.round(courseFee / (salaryIncrease / 12));

  const included = [
    { icon: Clock, text: "380+ hours of live instruction" },
    { icon: BookOpen, text: "Comprehensive course materials" },
    { icon: Wrench, text: "Access to premium SEO tools (₹50K+ value)" },
    { icon: Users, text: "Small batch size (max 15 students)" },
    { icon: Award, text: "Applied AI Institute Certification" },
    { icon: Briefcase, text: "1-month industry internship" },
    { icon: Shield, text: "Job placement guarantee" },
    { icon: Users, text: "Lifetime alumni community access" },
  ];

  const paymentOptions = [
    { title: "Full Payment", price: "₹1,99,000", discount: "Save ₹20,000", badge: "Best Value" },
    { title: "2 Installments", price: "₹1,09,500 x 2", discount: "₹2,19,000 total", badge: null },
    { title: "EMI (6 months)", price: "₹36,500/month", discount: "0% interest", badge: "Popular" },
  ];

  return (
    <section ref={ref} className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1 bg-[hsl(var(--brand-orange))]/10 text-[hsl(var(--brand-orange))] text-sm font-semibold rounded-full border border-[hsl(var(--brand-orange))]/30 mb-4">
            Investment
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Your Investment in <span className="text-gradient">Career Transformation</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            This isn't an expense—it's an investment with 300%+ ROI in the first year.
          </p>
        </div>

        <div className={`grid lg:grid-cols-2 gap-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Pricing Card */}
          <div>
            <Card className="bg-card border-[hsl(var(--brand-orange))]/30 overflow-hidden">
              <div className="bg-gradient-to-r from-[hsl(var(--brand-orange))] to-[hsl(var(--brand-orange))]/80 p-6 text-white">
                <p className="text-sm font-medium opacity-90 mb-1">Complete AI SEO Course</p>
                <div className="flex items-end gap-2">
                  <span className="text-4xl md:text-5xl font-bold">₹1,99,000</span>
                  <span className="text-lg line-through opacity-70 mb-1">₹2,49,000</span>
                </div>
                <p className="text-sm opacity-90 mt-2">Early Bird Discount: Save ₹50,000</p>
              </div>
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-4">What's Included:</h4>
                <ul className="space-y-3 mb-6">
                  {included.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-emerald-500" />
                      </div>
                      <span className="text-sm text-foreground/80">{item.text}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  size="lg"
                  onClick={scrollToApplication}
                  className="w-full bg-[hsl(var(--brand-orange))] hover:bg-[hsl(var(--brand-orange))]/90 text-white font-semibold"
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Apply Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Payment Options */}
            <div className="mt-6">
              <h4 className="font-semibold text-foreground mb-4">Flexible Payment Options</h4>
              <div className="grid gap-3">
                {paymentOptions.map((option, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-4 bg-card rounded-xl border border-border/50"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-medium text-foreground">{option.title}</p>
                        {option.badge && (
                          <span className="px-2 py-0.5 bg-[hsl(var(--brand-orange))]/10 text-[hsl(var(--brand-orange))] text-xs font-medium rounded">
                            {option.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground">{option.discount}</p>
                    </div>
                    <p className="font-semibold text-foreground">{option.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ROI Calculator */}
          <div>
            <Card className="bg-card border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Calculator className="w-5 h-5 text-[hsl(var(--brand-orange))]" />
                  <h4 className="font-semibold text-foreground">ROI Calculator</h4>
                </div>

                <div className="space-y-6">
                  {/* Current Salary Input */}
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">
                      Your Current Annual Salary
                    </label>
                    <input
                      type="range"
                      min="100000"
                      max="800000"
                      step="50000"
                      value={currentSalary}
                      onChange={(e) => setCurrentSalary(Number(e.target.value))}
                      className="w-full accent-[hsl(var(--brand-orange))]"
                    />
                    <div className="flex justify-between text-sm mt-1">
                      <span className="text-muted-foreground">₹1L</span>
                      <span className="font-semibold text-foreground">₹{(currentSalary / 100000).toFixed(1)}L</span>
                      <span className="text-muted-foreground">₹8L</span>
                    </div>
                  </div>

                  {/* Projected Outcomes */}
                  <div className="space-y-4 pt-4 border-t border-border/50">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Expected salary after course</span>
                      <span className="font-semibold text-emerald-500">₹7L+ average</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Annual salary increase</span>
                      <span className="font-semibold text-foreground">
                        ₹{((expectedSalary - currentSalary) / 100000).toFixed(1)}L
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Course investment</span>
                      <span className="font-semibold text-foreground">₹1.99L</span>
                    </div>
                  </div>

                  {/* ROI Results */}
                  <div className="p-4 bg-emerald-500/10 rounded-xl border border-emerald-500/30">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <p className="text-3xl font-bold text-emerald-500">{roi}%</p>
                        <p className="text-sm text-muted-foreground">First Year ROI</p>
                      </div>
                      <div>
                        <p className="text-3xl font-bold text-emerald-500">{paybackMonths} mo</p>
                        <p className="text-sm text-muted-foreground">Payback Period</p>
                      </div>
                    </div>
                  </div>

                  {/* Guarantee */}
                  <div className="p-4 bg-[hsl(var(--brand-orange))]/10 rounded-xl border border-[hsl(var(--brand-orange))]/30">
                    <div className="flex items-start gap-3">
                      <Shield className="w-6 h-6 text-[hsl(var(--brand-orange))] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-foreground">Job Placement Guarantee</p>
                        <p className="text-sm text-muted-foreground">
                          If you don't get placed within 90 days of course completion, we'll refund 50% of your fee. No questions asked.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
