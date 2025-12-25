import { useState } from "react";
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
import { useSession } from "@/hooks/useSession";
import { supabase } from "@/integrations/supabase/client";

export const CourseApplicationSection = () => {
  const [ref, isVisible] = useScrollAnimation();
  const { toast } = useToast();
  const { session } = useSession();
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    currentRole: "",
    experience: "",
    linkedin: "",
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

  const benefits = [
    "95% job placement in 90 days",
    "Earn ₹7-12L+ starting salary",
    "380+ hours live training (not videos)",
    "Real client projects, not dummy sites",
    "Lifetime alumni access & support",
    "50% refund if not placed",
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
          linkedin: formData.linkedin.trim(),
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

      // Success!
      setSubmittedName(formData.fullName.split(' ')[0]);
      setSubmitted(true);
      
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

  // Success state after form submission
  if (submitted) {
    return (
      <section 
        ref={ref} 
        id="course-application" 
        className="py-16 md:py-24 bg-muted/30"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="bg-card border-border/50 p-8 md:p-12">
              <CardContent className="space-y-6">
                <div className="w-20 h-20 mx-auto bg-emerald-500/10 rounded-full flex items-center justify-center">
                  <PartyPopper className="w-10 h-10 text-emerald-500" />
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Thank you, {submittedName}! 🎉
                </h2>
                
                <p className="text-lg text-muted-foreground">
                  Your application has been received. We'll call you within <span className="text-foreground font-semibold">24 hours</span> to discuss the next steps.
                </p>

                <div className="bg-muted/50 rounded-lg p-6 space-y-4">
                  <h3 className="font-semibold text-foreground">What happens next?</h3>
                  <ul className="space-y-3 text-left">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      <span className="text-muted-foreground">Our team reviews your application</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      <span className="text-muted-foreground">We call you to understand your goals</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      <span className="text-muted-foreground">If it's a fit, we share the next batch details</span>
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
      className="py-16 md:py-24 bg-muted/30"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1 bg-[hsl(var(--brand-orange))]/10 text-[hsl(var(--brand-orange))] text-sm font-semibold rounded-full border border-[hsl(var(--brand-orange))]/30 mb-4">
            Your Turn Now
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Ready to <span className="text-gradient">Change Your Career Story?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fill this form. We'll call you within 24 hours to discuss if this is right for you. 
            <span className="text-foreground"> No pressure, no annoying sales calls.</span>
          </p>
        </div>

        <div className={`grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Benefits Sidebar */}
          <div className="order-2 lg:order-1">
            <div className="sticky top-24">
              <Card className="bg-muted/30 border-border/50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-[hsl(var(--brand-orange))]" />
                    What You're Signing Up For
                  </h3>
                  
                  <ul className="space-y-4 mb-8">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                        <span className="text-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Trust Signals */}
                  <div className="space-y-4 pt-6 border-t border-border/50">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[hsl(var(--brand-orange))]/10 flex items-center justify-center">
                        <Users className="w-5 h-5 text-[hsl(var(--brand-orange))]" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">847 Applications</p>
                        <p className="text-xs text-muted-foreground">This month (only 15 seats)</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-emerald-500" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">24-Hour Response</p>
                        <p className="text-xs text-muted-foreground">We call, not just email</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                        <Shield className="w-5 h-5 text-blue-500" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">No Spam Promise</p>
                        <p className="text-xs text-muted-foreground">We hate spam calls too</p>
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
              <CardContent className="p-6 md:p-8">
                {/* Progress Indicator */}
                <div className="flex items-center gap-2 mb-6 text-sm text-muted-foreground">
                  <span className="w-6 h-6 rounded-full bg-[hsl(var(--brand-orange))] text-white flex items-center justify-center text-xs font-bold">1</span>
                  <span>Fill this form (2 mins)</span>
                  <span className="mx-2">→</span>
                  <span className="w-6 h-6 rounded-full bg-muted text-muted-foreground flex items-center justify-center text-xs font-bold">2</span>
                  <span>We call you</span>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="flex items-center gap-2">
                      <User className="w-4 h-4 text-muted-foreground" />
                      Your Name *
                    </Label>
                    <Input
                      id="fullName"
                      placeholder="What should we call you?"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      required
                      className="bg-background"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Where should we send course details?"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-background"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      WhatsApp Number *
                    </Label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 bg-muted border border-r-0 border-border rounded-l-md text-muted-foreground text-sm">
                        +91
                      </span>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="We prefer WhatsApp over calls"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        className="rounded-l-none bg-background"
                      />
                    </div>
                  </div>

                  {/* Current Role */}
                  <div className="space-y-2">
                    <Label htmlFor="currentRole" className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-muted-foreground" />
                      What do you do right now? *
                    </Label>
                    <Select
                      value={formData.currentRole}
                      onValueChange={(value) => setFormData({ ...formData, currentRole: value })}
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
                  <div className="space-y-2">
                    <Label htmlFor="experience" className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      Years of experience *
                    </Label>
                    <Select
                      value={formData.experience}
                      onValueChange={(value) => setFormData({ ...formData, experience: value })}
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
                  <div className="space-y-2">
                    <Label htmlFor="motivation" className="flex items-center gap-2">
                      <Heart className="w-4 h-4 text-muted-foreground" />
                      What's holding you back right now? *
                    </Label>
                    <Textarea
                      id="motivation"
                      placeholder="Is it salary? Skills feeling outdated? Stuck in same role? Be honest—we've heard it all..."
                      value={formData.motivation}
                      onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                      required
                      className="bg-background min-h-[80px]"
                    />
                    <p className="text-xs text-muted-foreground">This helps us understand if we can actually help you</p>
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit"
                    size="lg"
                    disabled={loading}
                    className="w-full bg-[hsl(var(--brand-orange))] hover:bg-[hsl(var(--brand-orange))]/90 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {loading ? (
                      "Submitting..."
                    ) : (
                      <>
                        Yes, I Want to Transform My Career
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>

                  {/* No Spam Promise */}
                  <p className="text-xs text-center text-muted-foreground">
                    🔒 We're not going to spam you. Promise. One call, that's it.
                  </p>

                  {/* Alternative CTA */}
                  <div className="text-center pt-4 border-t border-border/50">
                    <p className="text-sm text-muted-foreground mb-3">
                      Have questions before applying?
                    </p>
                    <Button 
                      type="button"
                      variant="outline"
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
