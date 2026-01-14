import { useState, useMemo, useCallback } from "react";
import { 
  User, 
  Mail, 
  Phone, 
  Briefcase, 
  Clock, 
  CheckCircle2,
  ArrowRight,
  Shield,
  Users,
  Calendar,
  Sparkles,
  Heart,
  PartyPopper
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useToast } from "@/hooks/use-toast";
import { 
  getNextBatchStartDate, 
  formatBatchDayName, 
  formatBatchMonthShort, 
  getBatchDay, 
  formatBatchMonth 
} from "@/lib/timeUtils";
import { courseApplicationSchema, validateField } from "@/lib/courseFormValidation";
import { FormFieldError } from "./FormFieldError";
import { submitFormToGoogleSheets } from "@/hooks/useFormSubmit";

interface FieldErrors {
  fullName?: string | null;
  email?: string | null;
  phone?: string | null;
  motivation?: string | null;
}

export const CourseApplicationSection = () => {
  const [ref, isVisible] = useScrollAnimation();
  const { toast } = useToast();

  const batchInfo = useMemo(() => {
    const batchStartDate = getNextBatchStartDate();
    return {
      dayName: formatBatchDayName(batchStartDate),
      monthShort: formatBatchMonthShort(batchStartDate),
      day: getBatchDay(batchStartDate),
      monthYear: formatBatchMonth(batchStartDate),
    };
  }, []);
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    currentRole: "",
    experience: "",
    linkedin: "",
    motivation: "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState("");

  const experienceOptions = [
    { value: "0-1", label: "0-1 years (Fresher/Student)" },
    { value: "1-3", label: "1-3 years" },
    { value: "3-5", label: "3-5 years" },
    { value: "5-10", label: "5-10 years" },
    { value: "10+", label: "10+ years" },
  ];

  const roleOptions = [
    { value: "seo-specialist", label: "SEO Specialist" },
    { value: "digital-marketer", label: "Digital Marketer" },
    { value: "content-creator", label: "Content Writer/Creator" },
    { value: "business-owner", label: "Business Owner" },
    { value: "student", label: "Student/Fresh Graduate" },
    { value: "career-switcher", label: "Career Switcher" },
    { value: "freelancer", label: "Freelancer" },
    { value: "other", label: "Other" },
  ];

  const benefits = [
    "95% job placement in 90 days",
    "Earn ₹7-12L+ starting salary",
    "380+ hours live training (not videos)",
    "Real client projects, not dummy sites",
    "Lifetime alumni access & support",
    "50% refund if not placed",
  ];

  const handleBlur = useCallback((fieldName: keyof FieldErrors) => {
    setTouched(prev => ({ ...prev, [fieldName]: true }));
    const error = validateField(fieldName as any, formData[fieldName]);
    setErrors(prev => ({ ...prev, [fieldName]: error }));
  }, [formData]);

  const handleChange = useCallback((fieldName: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [fieldName]: value }));
    // Clear error on change if field was touched
    if (touched[fieldName]) {
      const error = validateField(fieldName as any, value);
      setErrors(prev => ({ ...prev, [fieldName]: error }));
    }
  }, [touched]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const result = courseApplicationSchema.safeParse(formData);
    
    if (!result.success) {
      const fieldErrors: FieldErrors = {};
      result.error.errors.forEach(err => {
        const field = err.path[0] as keyof FieldErrors;
        if (!fieldErrors[field]) {
          fieldErrors[field] = err.message;
        }
      });
      setErrors(fieldErrors);
      setTouched({ fullName: true, email: true, phone: true, motivation: true });
      
      // Focus first error field
      const firstError = Object.keys(fieldErrors)[0];
      document.getElementById(firstError)?.focus();
      return;
    }

    setLoading(true);

    try {
      // Submit to Google Sheets
      await submitFormToGoogleSheets({
        form_id: "course_application_form",
        form_name: "Course Application Form (Main)",
        page_url: window.location.href,
        trigger_type: "embedded",
        data: {
          full_name: formData.fullName.trim(),
          email: formData.email.trim(),
          phone: `+91${formData.phone.replace(/\D/g, '')}`,
          current_role: roleOptions.find(r => r.value === formData.currentRole)?.label || formData.currentRole || "",
          experience: experienceOptions.find(e => e.value === formData.experience)?.label || formData.experience || "",
          linkedin: formData.linkedin.trim(),
          motivation: formData.motivation.trim(),
        },
      });

      setSubmittedName(formData.fullName.split(' ')[0]);
      setSubmitted(true);
      
      toast({
        title: "Application Received! 🎉",
        description: "We'll call you within 24 hours. Check your WhatsApp too!",
      });

    } catch (error: any) {
      toast({
        title: "Oops! Something went wrong",
        description: error.message || "Please try again or contact us on WhatsApp",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  // Success state after form submission
  if (submitted) {
    return (
      <section 
        ref={ref} 
        id="course-application" 
        className="py-12 md:py-24 bg-muted/30"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="bg-card border-border/50 p-6 md:p-12">
              <CardContent className="space-y-6 p-0">
                <div className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-emerald-500/10 rounded-full flex items-center justify-center">
                  <PartyPopper className="w-8 h-8 md:w-10 md:h-10 text-emerald-500" />
                </div>
                
                <h2 className="text-xl md:text-3xl font-bold text-foreground">
                  Thank you, {submittedName}! 🎉
                </h2>
                
                <p className="text-base md:text-lg text-muted-foreground">
                  Your application has been received. We'll call you within <span className="text-foreground font-semibold">24 hours</span> to discuss the next steps.
                </p>

                <div className="bg-muted/50 rounded-lg p-4 md:p-6 space-y-4">
                  <h3 className="font-semibold text-foreground text-sm md:text-base">What happens next?</h3>
                  <ul className="space-y-3 text-left">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-emerald-500 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm md:text-base">Our team reviews your application</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-emerald-500 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm md:text-base">We call you to understand your goals</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-emerald-500 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm md:text-base">If it's a fit, we share the next batch details</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4">
                  <p className="text-sm text-muted-foreground mb-3">Have questions right now?</p>
                  <Button 
                    variant="outline"
                    className="border-[hsl(var(--brand-orange))]/30 text-[hsl(var(--brand-orange))] hover:bg-[hsl(var(--brand-orange))]/10"
                    onClick={() => window.open('https://wa.me/919876543210?text=Hi, I just applied for the AI SEO course and have a quick question', '_blank')}
                  >
                    Chat on WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section 
      ref={ref} 
      id="course-application" 
      className="py-12 md:py-24 bg-muted/30"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-8 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-3 py-1 bg-[hsl(var(--brand-orange))]/10 text-[hsl(var(--brand-orange))] text-xs md:text-sm font-semibold rounded-full border border-[hsl(var(--brand-orange))]/30 mb-3 md:mb-4">
            Your Turn Now
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">
            Ready to <span className="text-gradient">Change Your Career Story?</span>
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Fill this form. We'll call you within 24 hours to discuss if this is right for you. 
            <span className="text-foreground"> No pressure, no annoying sales calls.</span>
          </p>
        </div>

        <div className={`grid lg:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Benefits Sidebar */}
          <div className="order-2 lg:order-1">
            <div className="lg:sticky lg:top-24">
              <Card className="bg-muted/30 border-border/50">
                <CardContent className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-4 md:mb-6 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-[hsl(var(--brand-orange))]" />
                    What You're Signing Up For
                  </h3>
                  
                  <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center gap-2 md:gap-3">
                        <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-emerald-500 flex-shrink-0" />
                        <span className="text-foreground text-sm md:text-base">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Trust Signals */}
                  <div className="space-y-3 md:space-y-4 pt-4 md:pt-6 border-t border-border/50">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-[hsl(var(--brand-orange))]/10 flex items-center justify-center">
                        <Users className="w-4 h-4 md:w-5 md:h-5 text-[hsl(var(--brand-orange))]" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-sm md:text-base">847 Applications</p>
                        <p className="text-[10px] md:text-xs text-muted-foreground">This month (only 15 seats)</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                        <Calendar className="w-4 h-4 md:w-5 md:h-5 text-emerald-500" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-sm md:text-base">24-Hour Response</p>
                        <p className="text-[10px] md:text-xs text-muted-foreground">We call, not just email</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                        <Shield className="w-4 h-4 md:w-5 md:h-5 text-blue-500" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-sm md:text-base">No Spam Promise</p>
                        <p className="text-[10px] md:text-xs text-muted-foreground">We hate spam calls too</p>
                      </div>
                    </div>

                    {/* Batch Start Date */}
                    <div className="flex items-center gap-3 mt-4 pt-4 border-t border-border/50">
                      <div className="flex flex-col items-center justify-center bg-[hsl(var(--brand-orange))] text-primary-foreground rounded-lg w-10 h-10 shadow-lg">
                        <span className="text-[8px] font-bold tracking-wider uppercase">{batchInfo.monthShort}</span>
                        <span className="text-base font-bold leading-none">{batchInfo.day}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-foreground font-semibold text-sm">
                          {batchInfo.monthYear}
                        </span>
                        <span className="text-muted-foreground text-xs">
                          {batchInfo.dayName} • Batch Starts
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Application Form */}
          <div className="order-1 lg:order-2">
            <Card className="bg-card border-border/50">
              <CardContent className="p-4 md:p-8">
                {/* Progress Indicator */}
                <div className="flex items-center gap-2 mb-4 md:mb-6 text-xs md:text-sm text-muted-foreground">
                  <span className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[hsl(var(--brand-orange))] text-white flex items-center justify-center text-[10px] md:text-xs font-bold">1</span>
                  <span>Fill this form (2 mins)</span>
                  <span className="mx-1 md:mx-2">→</span>
                  <span className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-muted text-muted-foreground flex items-center justify-center text-[10px] md:text-xs font-bold">2</span>
                  <span>We call you</span>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <Label htmlFor="fullName" className="flex items-center gap-2 text-sm">
                      <User className="w-3.5 h-3.5 md:w-4 md:h-4 text-muted-foreground" />
                      Your Name *
                    </Label>
                    <Input
                      id="fullName"
                      placeholder="What should we call you?"
                      value={formData.fullName}
                      onChange={(e) => handleChange('fullName', e.target.value)}
                      onBlur={() => handleBlur('fullName')}
                      className={`bg-background ${errors.fullName && touched.fullName ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                    />
                    <FormFieldError error={touched.fullName ? errors.fullName : null} />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <Label htmlFor="email" className="flex items-center gap-2 text-sm">
                      <Mail className="w-3.5 h-3.5 md:w-4 md:h-4 text-muted-foreground" />
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Where should we send course details?"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      onBlur={() => handleBlur('email')}
                      className={`bg-background ${errors.email && touched.email ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                    />
                    <FormFieldError error={touched.email ? errors.email : null} />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <Label htmlFor="phone" className="flex items-center gap-2 text-sm">
                      <Phone className="w-3.5 h-3.5 md:w-4 md:h-4 text-muted-foreground" />
                      WhatsApp Number *
                    </Label>
                    <div className="flex">
                      <span className="inline-flex items-center px-2.5 md:px-3 bg-muted border border-r-0 border-border rounded-l-md text-muted-foreground text-sm">
                        +91
                      </span>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="We prefer WhatsApp over calls"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        onBlur={() => handleBlur('phone')}
                        className={`rounded-l-none bg-background ${errors.phone && touched.phone ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                      />
                    </div>
                    <FormFieldError error={touched.phone ? errors.phone : null} />
                  </div>

                  {/* Current Role */}
                  <div className="space-y-1.5">
                    <Label htmlFor="currentRole" className="flex items-center gap-2 text-sm">
                      <Briefcase className="w-3.5 h-3.5 md:w-4 md:h-4 text-muted-foreground" />
                      What do you do right now?
                    </Label>
                    <Select
                      value={formData.currentRole}
                      onValueChange={(value) => handleChange('currentRole', value)}
                    >
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="Pick the closest option" />
                      </SelectTrigger>
                      <SelectContent>
                        {roleOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Experience */}
                  <div className="space-y-1.5">
                    <Label htmlFor="experience" className="flex items-center gap-2 text-sm">
                      <Clock className="w-3.5 h-3.5 md:w-4 md:h-4 text-muted-foreground" />
                      Years of experience
                    </Label>
                    <Select
                      value={formData.experience}
                      onValueChange={(value) => handleChange('experience', value)}
                    >
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="Freshers are welcome too!" />
                      </SelectTrigger>
                      <SelectContent>
                        {experienceOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Motivation - Reframed */}
                  <div className="space-y-1.5">
                    <Label htmlFor="motivation" className="flex items-center gap-2 text-sm">
                      <Heart className="w-3.5 h-3.5 md:w-4 md:h-4 text-muted-foreground" />
                      What's holding you back right now? *
                    </Label>
                    <Textarea
                      id="motivation"
                      placeholder="Is it salary? Skills feeling outdated? Stuck in same role? Be honest—we've heard it all..."
                      value={formData.motivation}
                      onChange={(e) => handleChange('motivation', e.target.value)}
                      onBlur={() => handleBlur('motivation')}
                      className={`bg-background min-h-[70px] md:min-h-[80px] ${errors.motivation && touched.motivation ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                    />
                    <FormFieldError error={touched.motivation ? errors.motivation : null} />
                    <p className="text-[10px] md:text-xs text-muted-foreground">This helps us understand if we can actually help you</p>
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit"
                    size="lg"
                    disabled={loading}
                    className="w-full bg-[hsl(var(--brand-orange))] hover:bg-[hsl(var(--brand-orange))]/90 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 h-11 md:h-12 text-sm md:text-base"
                  >
                    {loading ? (
                      "Submitting..."
                    ) : (
                      <>
                        Yes, I Want to Transform My Career
                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
                      </>
                    )}
                  </Button>

                  {/* No Spam Promise */}
                  <p className="text-[10px] md:text-xs text-center text-muted-foreground">
                    🔒 We're not going to spam you. Promise. One call, that's it.
                  </p>

                  {/* Alternative CTA */}
                  <div className="text-center pt-3 md:pt-4 border-t border-border/50">
                    <p className="text-xs md:text-sm text-muted-foreground mb-2 md:mb-3">
                      Have questions before applying?
                    </p>
                    <Button 
                      type="button"
                      variant="outline"
                      size="sm"
                      className="border-[hsl(var(--brand-orange))]/30 text-[hsl(var(--brand-orange))] hover:bg-[hsl(var(--brand-orange))]/10"
                      onClick={() => window.open('https://wa.me/919876543210?text=Hi, I have questions about the AI SEO course', '_blank')}
                    >
                      Chat on WhatsApp First
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
