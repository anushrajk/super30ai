import { useState } from "react";
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
import { useSession } from "@/hooks/useSession";
import { supabase } from "@/integrations/supabase/client";

interface CourseEnquiryFormProps {
  onSuccess?: () => void;
}

export const CourseEnquiryForm = ({ onSuccess }: CourseEnquiryFormProps) => {
  const { toast } = useToast();
  const { session } = useSession();
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    currentRole: "",
    experience: "",
    motivation: "",
  });
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Client-side validation
    if (!formData.fullName.trim()) {
      toast({ title: "Please enter your name", variant: "destructive" });
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({ title: "Please enter a valid email", variant: "destructive" });
      return;
    }
    
    const phoneDigits = formData.phone.replace(/\D/g, '');
    if (phoneDigits.length !== 10) {
      toast({ title: "Please enter a valid 10-digit phone number", variant: "destructive" });
      return;
    }

    if (!formData.motivation.trim()) {
      toast({ title: "Please tell us what's holding you back", variant: "destructive" });
      return;
    }

    setLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('submit-course-application', {
        body: {
          fullName: formData.fullName.trim(),
          email: formData.email.trim(),
          phone: phoneDigits,
          currentRole: formData.currentRole,
          experience: formData.experience,
          motivation: formData.motivation.trim(),
          sessionId: session?.id
        }
      });

      if (error) {
        throw new Error(error.message || 'Failed to submit application');
      }

      if (data?.error) {
        throw new Error(data.error);
      }

      setSubmittedName(formData.fullName.split(' ')[0]);
      setSubmitted(true);
      onSuccess?.();
      
      toast({
        title: "Application Received! 🎉",
        description: "We'll call you within 24 hours. Check your WhatsApp too!",
      });

    } catch (error: any) {
      console.error('Form submission error:', error);
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
      <Card className="bg-card border-[hsl(var(--brand-orange))]/30 shadow-xl">
        <CardContent className="p-6 md:p-8 text-center space-y-4">
          <div className="w-16 h-16 mx-auto bg-emerald-500/10 rounded-full flex items-center justify-center">
            <PartyPopper className="w-8 h-8 text-emerald-500" />
          </div>
          
          <h3 className="text-xl font-bold text-foreground">
            Thank you, {submittedName}! 🎉
          </h3>
          
          <p className="text-muted-foreground">
            We'll call you within <span className="text-foreground font-semibold">24 hours</span>.
          </p>

          <div className="space-y-2 text-left bg-muted/50 rounded-lg p-4">
            <p className="font-medium text-foreground text-sm">What happens next?</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span className="text-muted-foreground">Team reviews your application</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span className="text-muted-foreground">We call to understand your goals</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span className="text-muted-foreground">If it's a fit, you join the next batch</span>
              </li>
            </ul>
          </div>

          <Button 
            variant="outline"
            size="sm"
            className="border-[hsl(var(--brand-orange))]/30 text-[hsl(var(--brand-orange))] hover:bg-[hsl(var(--brand-orange))]/10"
            onClick={() => window.open('https://wa.me/919876543210?text=Hi, I just applied for the AI SEO course and have a quick question', '_blank')}
          >
            Chat on WhatsApp
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-card border-[hsl(var(--brand-orange))]/30 shadow-xl">
      <CardContent className="p-5 md:p-6">
        {/* Header */}
        <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
          <span className="w-6 h-6 rounded-full bg-[hsl(var(--brand-orange))] text-white flex items-center justify-center text-xs font-bold">1</span>
          <span>Fill form (2 mins)</span>
          <span className="mx-1">→</span>
          <span className="w-6 h-6 rounded-full bg-muted text-muted-foreground flex items-center justify-center text-xs font-bold">2</span>
          <span>We call you</span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div className="space-y-1.5">
            <Label htmlFor="hero-fullName" className="flex items-center gap-2 text-sm">
              <User className="w-3.5 h-3.5 text-muted-foreground" />
              Your Name *
            </Label>
            <Input
              id="hero-fullName"
              placeholder="What should we call you?"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              required
              className="bg-background h-10"
            />
          </div>

          {/* Email */}
          <div className="space-y-1.5">
            <Label htmlFor="hero-email" className="flex items-center gap-2 text-sm">
              <Mail className="w-3.5 h-3.5 text-muted-foreground" />
              Email *
            </Label>
            <Input
              id="hero-email"
              type="email"
              placeholder="Where should we send course details?"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="bg-background h-10"
            />
          </div>

          {/* Phone */}
          <div className="space-y-1.5">
            <Label htmlFor="hero-phone" className="flex items-center gap-2 text-sm">
              <Phone className="w-3.5 h-3.5 text-muted-foreground" />
              WhatsApp Number *
            </Label>
            <div className="flex">
              <span className="inline-flex items-center px-3 bg-muted border border-r-0 border-border rounded-l-md text-muted-foreground text-sm">
                +91
              </span>
              <Input
                id="hero-phone"
                type="tel"
                placeholder="We prefer WhatsApp"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="rounded-l-none bg-background h-10"
              />
            </div>
          </div>

          {/* Two columns for Role and Experience */}
          <div className="grid grid-cols-2 gap-3">
            {/* Current Role */}
            <div className="space-y-1.5">
              <Label htmlFor="hero-currentRole" className="flex items-center gap-2 text-sm">
                <Briefcase className="w-3.5 h-3.5 text-muted-foreground" />
                Current Role *
              </Label>
              <Select
                value={formData.currentRole}
                onValueChange={(value) => setFormData({ ...formData, currentRole: value })}
              >
                <SelectTrigger className="bg-background h-10">
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
            <div className="space-y-1.5">
              <Label htmlFor="hero-experience" className="flex items-center gap-2 text-sm">
                <Clock className="w-3.5 h-3.5 text-muted-foreground" />
                Experience *
              </Label>
              <Select
                value={formData.experience}
                onValueChange={(value) => setFormData({ ...formData, experience: value })}
              >
                <SelectTrigger className="bg-background h-10">
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
          <div className="space-y-1.5">
            <Label htmlFor="hero-motivation" className="flex items-center gap-2 text-sm">
              <Heart className="w-3.5 h-3.5 text-muted-foreground" />
              What's holding you back? *
            </Label>
            <Textarea
              id="hero-motivation"
              placeholder="Salary? Skills outdated? Stuck in same role?"
              value={formData.motivation}
              onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
              required
              className="bg-background min-h-[70px] resize-none"
            />
          </div>

          {/* Submit Button */}
          <Button 
            type="submit"
            disabled={loading}
            className="w-full bg-[hsl(var(--brand-orange))] hover:bg-[hsl(var(--brand-orange))]/90 text-white font-semibold h-12 text-base shadow-lg hover:shadow-xl transition-all"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                Start My AI Career
                <ArrowRight className="w-5 h-5 ml-2" />
              </>
            )}
          </Button>

          {/* Trust Signal */}
          <div className="flex items-center justify-center gap-4 pt-2 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Shield className="w-3 h-3" />
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
