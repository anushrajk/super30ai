import { useState, useCallback } from "react";
import { 
  User, 
  Mail, 
  Phone, 
  Briefcase, 
  Clock, 
  ArrowRight,
  Shield,
  Heart,
  PartyPopper,
  CheckCircle2,
  Loader2
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
import { useToast } from "@/hooks/use-toast";
import { courseApplicationSchema, validateField } from "@/lib/courseFormValidation";
import { FormFieldError } from "./FormFieldError";
import { submitFormToGoogleSheets } from "@/hooks/useFormSubmit";

interface CourseEnquiryFormProps {
  onSuccess?: () => void;
}

interface FieldErrors {
  fullName?: string | null;
  email?: string | null;
  phone?: string | null;
  motivation?: string | null;
}

export const CourseEnquiryForm = ({ onSuccess }: CourseEnquiryFormProps) => {
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    currentRole: "",
    experience: "",
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

  const handleBlur = useCallback((fieldName: keyof FieldErrors) => {
    setTouched(prev => ({ ...prev, [fieldName]: true }));
    const error = validateField(fieldName as any, formData[fieldName]);
    setErrors(prev => ({ ...prev, [fieldName]: error }));
  }, [formData]);

  const handleChange = useCallback((fieldName: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [fieldName]: value }));
    if (touched[fieldName]) {
      const error = validateField(fieldName as any, value);
      setErrors(prev => ({ ...prev, [fieldName]: error }));
    }
  }, [touched]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
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
      return;
    }

    setLoading(true);

    try {
      // Submit to Google Sheets
      await submitFormToGoogleSheets({
        form_id: "course_enquiry_form_hero",
        form_name: "Course Enquiry Form (Hero Section)",
        page_url: window.location.href,
        trigger_type: "embedded",
        data: {
          full_name: formData.fullName.trim(),
          email: formData.email.trim(),
          phone: `+91${formData.phone.replace(/\D/g, '')}`,
          current_role: roleOptions.find(r => r.value === formData.currentRole)?.label || formData.currentRole || "",
          experience: experienceOptions.find(e => e.value === formData.experience)?.label || formData.experience || "",
          motivation: formData.motivation.trim(),
        },
      });

      setSubmittedName(formData.fullName.split(' ')[0]);
      setSubmitted(true);
      onSuccess?.();
      
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

  // Success state
  if (submitted) {
    return (
      <Card className="bg-card border-border shadow-xl">
        <CardContent className="p-4 md:p-8 text-center space-y-4">
          <div className="w-12 h-12 md:w-16 md:h-16 mx-auto bg-emerald-500/10 rounded-full flex items-center justify-center">
            <PartyPopper className="w-6 h-6 md:w-8 md:h-8 text-emerald-500" />
          </div>
          
          <h3 className="text-lg md:text-xl font-bold text-foreground">
            Thank you, {submittedName}! 🎉
          </h3>
          
          <p className="text-muted-foreground text-sm md:text-base">
            We'll call you within <span className="text-foreground font-semibold">24 hours</span>.
          </p>

          <div className="space-y-2 text-left bg-muted/50 rounded-lg p-3 md:p-4">
            <p className="font-medium text-foreground text-xs md:text-sm">What happens next?</p>
            <ul className="space-y-2 text-xs md:text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 md:w-4 md:h-4 text-emerald-500 flex-shrink-0" />
                <span className="text-muted-foreground">Team reviews your application</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 md:w-4 md:h-4 text-emerald-500 flex-shrink-0" />
                <span className="text-muted-foreground">We call to understand your goals</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 md:w-4 md:h-4 text-emerald-500 flex-shrink-0" />
                <span className="text-muted-foreground">If it's a fit, you join the next batch</span>
              </li>
            </ul>
          </div>

          <Button 
            variant="outline"
            size="sm"
            className="border-border text-primary hover:bg-primary/10"
            onClick={() => window.open('https://wa.me/919876543210?text=Hi, I just applied for the AI SEO course and have a quick question', '_blank')}
          >
            Chat on WhatsApp
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-card border-border shadow-xl">
      <CardContent className="p-4 md:p-6">
        {/* Header */}
        <div className="flex items-center gap-2 mb-3 md:mb-4 text-xs md:text-sm text-muted-foreground">
          <span className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-[10px] md:text-xs font-bold">1</span>
          <span>Fill form (2 mins)</span>
          <span className="mx-1">→</span>
          <span className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-muted text-muted-foreground flex items-center justify-center text-[10px] md:text-xs font-bold">2</span>
          <span>We call you</span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
          {/* Full Name */}
          <div className="space-y-1">
            <Label htmlFor="hero-fullName" className="flex items-center gap-2 text-xs md:text-sm">
              <User className="w-3 h-3 md:w-3.5 md:h-3.5 text-muted-foreground" />
              Your Name *
            </Label>
            <Input
              id="hero-fullName"
              placeholder="What should we call you?"
              value={formData.fullName}
              onChange={(e) => handleChange('fullName', e.target.value)}
              onBlur={() => handleBlur('fullName')}
              className={`bg-background h-9 md:h-10 text-sm ${errors.fullName && touched.fullName ? 'border-destructive focus-visible:ring-destructive' : ''}`}
            />
            <FormFieldError error={touched.fullName ? errors.fullName : null} />
          </div>

          {/* Email */}
          <div className="space-y-1">
            <Label htmlFor="hero-email" className="flex items-center gap-2 text-xs md:text-sm">
              <Mail className="w-3 h-3 md:w-3.5 md:h-3.5 text-muted-foreground" />
              Email *
            </Label>
            <Input
              id="hero-email"
              type="email"
              placeholder="Where should we send course details?"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              onBlur={() => handleBlur('email')}
              className={`bg-background h-9 md:h-10 text-sm ${errors.email && touched.email ? 'border-destructive focus-visible:ring-destructive' : ''}`}
            />
            <FormFieldError error={touched.email ? errors.email : null} />
          </div>

          {/* Phone */}
          <div className="space-y-1">
            <Label htmlFor="hero-phone" className="flex items-center gap-2 text-xs md:text-sm">
              <Phone className="w-3 h-3 md:w-3.5 md:h-3.5 text-muted-foreground" />
              WhatsApp Number *
            </Label>
            <div className="flex">
              <span className="inline-flex items-center px-2 md:px-3 bg-muted border border-r-0 border-border rounded-l-md text-muted-foreground text-xs md:text-sm">
                +91
              </span>
              <Input
                id="hero-phone"
                type="tel"
                placeholder="We prefer WhatsApp"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                onBlur={() => handleBlur('phone')}
                className={`rounded-l-none bg-background h-9 md:h-10 text-sm ${errors.phone && touched.phone ? 'border-destructive focus-visible:ring-destructive' : ''}`}
              />
            </div>
            <FormFieldError error={touched.phone ? errors.phone : null} />
          </div>

          {/* Two columns for Role and Experience */}
          <div className="grid grid-cols-2 gap-2 md:gap-3">
            {/* Current Role */}
            <div className="space-y-1">
              <Label htmlFor="hero-currentRole" className="flex items-center gap-1 md:gap-2 text-xs md:text-sm">
                <Briefcase className="w-3 h-3 md:w-3.5 md:h-3.5 text-muted-foreground" />
                <span className="truncate">Role</span>
              </Label>
              <Select
                value={formData.currentRole}
                onValueChange={(value) => handleChange('currentRole', value)}
              >
                <SelectTrigger className="bg-background h-9 md:h-10 text-xs md:text-sm">
                  <SelectValue placeholder="Select" />
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
            <div className="space-y-1">
              <Label htmlFor="hero-experience" className="flex items-center gap-1 md:gap-2 text-xs md:text-sm">
                <Clock className="w-3 h-3 md:w-3.5 md:h-3.5 text-muted-foreground" />
                <span className="truncate">Experience</span>
              </Label>
              <Select
                value={formData.experience}
                onValueChange={(value) => handleChange('experience', value)}
              >
                <SelectTrigger className="bg-background h-9 md:h-10 text-xs md:text-sm">
                  <SelectValue placeholder="Select" />
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
          </div>

          {/* Motivation */}
          <div className="space-y-1">
            <Label htmlFor="hero-motivation" className="flex items-center gap-2 text-xs md:text-sm">
              <Heart className="w-3 h-3 md:w-3.5 md:h-3.5 text-muted-foreground" />
              What's holding you back? *
            </Label>
            <Textarea
              id="hero-motivation"
              placeholder="Salary? Skills outdated? Stuck in same role?"
              value={formData.motivation}
              onChange={(e) => handleChange('motivation', e.target.value)}
              onBlur={() => handleBlur('motivation')}
              className={`bg-background min-h-[60px] md:min-h-[70px] resize-none text-sm ${errors.motivation && touched.motivation ? 'border-destructive focus-visible:ring-destructive' : ''}`}
            />
            <FormFieldError error={touched.motivation ? errors.motivation : null} />
          </div>

          {/* Submit Button */}
          <Button 
            type="submit"
            disabled={loading}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-10 md:h-12 text-sm md:text-base transition-all"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 md:w-5 md:h-5 mr-2 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                Start My AI Career
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
              </>
            )}
          </Button>

          {/* Trust Signal */}
          <div className="flex items-center justify-center gap-3 md:gap-4 pt-1 md:pt-2 text-[10px] md:text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Shield className="w-2.5 h-2.5 md:w-3 md:h-3" />
              No spam promise
            </span>
            <span className="text-border">•</span>
            <span>24-hour response</span>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
