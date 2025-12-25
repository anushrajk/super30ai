import { useState } from "react";
import { 
  User, 
  Mail, 
  Phone, 
  Briefcase, 
  Clock, 
  Linkedin, 
  MessageSquare,
  CheckCircle2,
  ArrowRight,
  Shield,
  Users,
  Calendar,
  Sparkles
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

export const CourseApplicationSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { toast } = useToast();
  
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

  const experienceOptions = [
    { value: "0-1", label: "0-1 years" },
    { value: "1-3", label: "1-3 years" },
    { value: "3-5", label: "3-5 years" },
    { value: "5-10", label: "5-10 years" },
    { value: "10+", label: "10+ years" },
  ];

  const roleOptions = [
    { value: "seo-specialist", label: "SEO Specialist" },
    { value: "digital-marketer", label: "Digital Marketer" },
    { value: "content-creator", label: "Content Creator" },
    { value: "business-owner", label: "Business Owner" },
    { value: "student", label: "Student/Fresh Graduate" },
    { value: "career-switcher", label: "Career Switcher" },
    { value: "other", label: "Other" },
  ];

  const benefits = [
    "95% job placement rate",
    "₹5-10L+ starting salaries",
    "100+ hours live instruction",
    "Real industry projects",
    "Lifetime alumni access",
    "Money-back guarantee",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Application Submitted!",
      description: "We'll contact you within 24 hours to schedule your strategy session.",
    });

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      currentRole: "",
      experience: "",
      linkedin: "",
      motivation: "",
    });
    setLoading(false);
  };

  return (
    <section 
      ref={ref} 
      id="course-application" 
      className="py-16 md:py-24 bg-background"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1 bg-[hsl(var(--brand-orange))]/10 text-[hsl(var(--brand-orange))] text-sm font-semibold rounded-full border border-[hsl(var(--brand-orange))]/30 mb-4">
            Start Your Journey
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Apply for the <span className="text-gradient">January 2025 Batch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Take the first step towards your AI marketing career. Applications are reviewed within 24 hours.
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
                    Why Join This Course?
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
                        <p className="text-xs text-muted-foreground">Received this month</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-emerald-500" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">24-hour response</p>
                        <p className="text-xs text-muted-foreground">Average response time</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                        <Shield className="w-5 h-5 text-blue-500" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Secure Application</p>
                        <p className="text-xs text-muted-foreground">Your data is protected</p>
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
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="flex items-center gap-2">
                      <User className="w-4 h-4 text-muted-foreground" />
                      Full Name *
                    </Label>
                    <Input
                      id="fullName"
                      placeholder="Enter your full name"
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
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
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
                      Phone Number *
                    </Label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 bg-muted border border-r-0 border-border rounded-l-md text-muted-foreground text-sm">
                        +91
                      </span>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="98765 43210"
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
                      Current Role *
                    </Label>
                    <Select
                      value={formData.currentRole}
                      onValueChange={(value) => setFormData({ ...formData, currentRole: value })}
                    >
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="Select your current role" />
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
                      Years of Experience *
                    </Label>
                    <Select
                      value={formData.experience}
                      onValueChange={(value) => setFormData({ ...formData, experience: value })}
                    >
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="Select experience level" />
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

                  {/* LinkedIn (Optional) */}
                  <div className="space-y-2">
                    <Label htmlFor="linkedin" className="flex items-center gap-2">
                      <Linkedin className="w-4 h-4 text-muted-foreground" />
                      LinkedIn Profile (Optional)
                    </Label>
                    <Input
                      id="linkedin"
                      placeholder="linkedin.com/in/yourprofile"
                      value={formData.linkedin}
                      onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                      className="bg-background"
                    />
                  </div>

                  {/* Motivation */}
                  <div className="space-y-2">
                    <Label htmlFor="motivation" className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-muted-foreground" />
                      Why do you want to join? *
                    </Label>
                    <Textarea
                      id="motivation"
                      placeholder="Tell us about your goals and why this course interests you..."
                      value={formData.motivation}
                      onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                      required
                      className="bg-background min-h-[100px]"
                    />
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
                        Submit Application
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>

                  {/* Alternative CTA */}
                  <div className="text-center pt-4 border-t border-border/50">
                    <p className="text-sm text-muted-foreground mb-3">
                      Prefer to talk first?
                    </p>
                    <Button 
                      type="button"
                      variant="outline"
                      className="border-[hsl(var(--brand-orange))]/30 text-[hsl(var(--brand-orange))] hover:bg-[hsl(var(--brand-orange))]/10"
                      onClick={() => window.open('https://calendly.com', '_blank')}
                    >
                      Schedule Free Strategy Session
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
