import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Loader2,
  Phone,
  CheckCircle,
  AlertCircle,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface EnquiryPopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const roleOptions = [
  { value: "founder_ceo", label: "Founder/CEO" },
  { value: "cmo_marketing_director", label: "CMO/Marketing Director" },
  { value: "vp_growth", label: "VP of Growth" },
  { value: "marketing_manager", label: "Marketing Manager" },
  { value: "ecommerce_manager", label: "E-commerce Manager" },
  { value: "other", label: "Other" },
];

const serviceOptions = [
  { value: "ai-seo", label: "AI SEO Services" },
  { value: "performance-marketing", label: "Performance Marketing" },
  { value: "both", label: "Both Services" },
];

const validateEmail = (email: string): boolean => {
  if (!email) return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePhone = (phone: string): boolean => {
  if (!phone) return true; // Phone is optional
  const phoneRegex = /^[6-9]\d{9}$/;
  return phoneRegex.test(phone);
};

export const EnquiryPopup = ({ open, onOpenChange }: EnquiryPopupProps) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [serviceInterest, setServiceInterest] = useState("");
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handlePhoneChange = (value: string) => {
    // Only allow digits, max 10, must start with 6-9
    let cleaned = value.replace(/\D/g, "").slice(0, 10);
    if (cleaned.length > 0 && !/^[6-9]/.test(cleaned)) {
      cleaned = "";
    }
    setPhone(cleaned);
  };

  const isEmailValid = validateEmail(email);
  const isPhoneValid = validatePhone(phone);
  const isNameValid = name.trim().length > 0;

  const canSubmit = isNameValid && isEmailValid && isPhoneValid;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, phone: true });

    if (!canSubmit) return;

    setLoading(true);

    try {
      // Create lead in database (using a placeholder URL since enquiry doesn't need website)
      const { data, error } = await supabase.from("leads").insert({
        email,
        website_url: "enquiry-form",
        phone: phone ? `+91${phone}` : null,
        role: role || null,
        service_type: serviceInterest || null,
        company_name: name,
        step: 1,
      }).select().single();

      if (error) throw error;

      toast.success("Thank you for your enquiry!");
      onOpenChange(false);
      
      // Navigate to booking page with lead data
      navigate("/booking", {
        state: {
          source: "enquiry",
          leadId: data.id,
          formData: { name, email, phone, role, serviceInterest },
        },
      });
    } catch (error) {
      console.error("Error submitting enquiry:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setRole("");
    setServiceInterest("");
    setTouched({});
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(isOpen) => {
        if (!isOpen) resetForm();
        onOpenChange(isOpen);
      }}
    >
      <DialogContent className="sm:max-w-md bg-background/95 backdrop-blur-xl border border-border/40 shadow-2xl rounded-2xl p-6 sm:p-8">
        {/* Modern icon treatment */}
        <div className="flex items-center justify-center w-12 h-12 mx-auto rounded-xl bg-primary/10">
          <MessageCircle className="w-6 h-6 text-primary" />
        </div>

        <DialogHeader className="text-center space-y-2">
          <DialogTitle className="text-xl font-semibold tracking-tight">
            Get in Touch
          </DialogTitle>
          <p className="text-sm text-muted-foreground">
            Tell us about your needs and we'll get back to you shortly
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          {/* Name */}
          <div className="relative">
            <Input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onBlur={() => handleBlur("name")}
              className={`w-full h-11 bg-muted/40 border-0 rounded-xl focus:ring-2 placeholder:text-muted-foreground/60 ${
                touched.name && !isNameValid
                  ? "ring-2 ring-destructive/50"
                  : "focus:ring-primary/20"
              }`}
            />
            {name && isNameValid && (
              <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
            )}
          </div>
          {touched.name && !isNameValid && (
            <p className="text-xs text-destructive -mt-2 ml-1">
              Please enter your name
            </p>
          )}

          {/* Email */}
          <div className="relative">
            <Input
              type="email"
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => handleBlur("email")}
              className={`w-full h-11 bg-muted/40 border-0 rounded-xl focus:ring-2 placeholder:text-muted-foreground/60 ${
                touched.email && !isEmailValid
                  ? "ring-2 ring-destructive/50"
                  : "focus:ring-primary/20"
              }`}
            />
            {email &&
              (isEmailValid ? (
                <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
              ) : (
                touched.email && (
                  <AlertCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-destructive" />
                )
              ))}
          </div>
          {touched.email && !isEmailValid && email && (
            <p className="text-xs text-destructive -mt-2 ml-1">
              Please enter a valid email address
            </p>
          )}

          {/* Phone */}
          <div className="relative">
            <div className="flex">
              <span className="inline-flex items-center gap-1 px-3 rounded-l-xl bg-muted/60 text-muted-foreground text-sm font-medium h-11">
                <Phone className="w-3.5 h-3.5" />
                +91
              </span>
              <Input
                type="tel"
                placeholder="7353252526"
                value={phone}
                onChange={(e) => handlePhoneChange(e.target.value)}
                onBlur={() => handleBlur("phone")}
                className={`w-full h-11 bg-muted/40 border-0 rounded-l-none rounded-r-xl focus:ring-2 placeholder:text-muted-foreground/60 ${
                  touched.phone && !isPhoneValid
                    ? "ring-2 ring-destructive/50"
                    : "focus:ring-primary/20"
                }`}
              />
            </div>
            {phone &&
              (isPhoneValid ? (
                <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
              ) : (
                touched.phone && (
                  <AlertCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-destructive" />
                )
              ))}
          </div>
          {touched.phone && !isPhoneValid && phone && (
            <p className="text-xs text-destructive -mt-2 ml-1">
              Enter 10 digit number starting with 6, 7, 8, or 9
            </p>
          )}

          {/* Role */}
          <Select value={role} onValueChange={setRole}>
            <SelectTrigger className="h-11 bg-muted/40 border-0 rounded-xl focus:ring-2 focus:ring-primary/20">
              <SelectValue placeholder="Your role" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              {roleOptions.map((option) => (
                <SelectItem
                  key={option.value}
                  value={option.value}
                  className="cursor-pointer"
                >
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Service Interest */}
          <Select value={serviceInterest} onValueChange={setServiceInterest}>
            <SelectTrigger className="h-11 bg-muted/40 border-0 rounded-xl focus:ring-2 focus:ring-primary/20">
              <SelectValue placeholder="Service interest" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              {serviceOptions.map((option) => (
                <SelectItem
                  key={option.value}
                  value={option.value}
                  className="cursor-pointer"
                >
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button
            type="submit"
            disabled={loading || !canSubmit}
            className="w-full h-11 bg-foreground text-background rounded-xl font-medium hover:bg-foreground/90 transition-all duration-200 group"
          >
            {loading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <>
                Submit Enquiry
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
              </>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
