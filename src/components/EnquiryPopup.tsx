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
    const cleaned = value.replace(/\D/g, "").slice(0, 10);
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
      <DialogContent className="sm:max-w-md bg-background border-border">
        <DialogHeader>
          <div className="flex items-center gap-2 justify-center mb-2">
            <MessageCircle className="w-5 h-5 text-[hsl(var(--brand-orange))]" />
            <DialogTitle className="text-xl font-bold">
              Get in Touch
            </DialogTitle>
          </div>
          <p className="text-muted-foreground text-center text-sm">
            Tell us about your needs and we'll get back to you shortly
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          {/* Name */}
          <div className="relative">
            <Input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onBlur={() => handleBlur("name")}
              className={`w-full bg-background h-12 ${
                touched.name && !isNameValid
                  ? "border-destructive focus:border-destructive"
                  : "border-border focus:border-[hsl(var(--brand-orange))]"
              }`}
            />
            {name && isNameValid && (
              <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
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
              className={`w-full bg-background h-12 ${
                touched.email && !isEmailValid
                  ? "border-destructive focus:border-destructive"
                  : "border-border focus:border-[hsl(var(--brand-orange))]"
              }`}
            />
            {email &&
              (isEmailValid ? (
                <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
              ) : (
                touched.email && (
                  <AlertCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-destructive" />
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
              <div className="flex items-center gap-1 bg-muted border border-r-0 border-border rounded-l-md px-3 h-12">
                <Phone className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">
                  +91
                </span>
              </div>
              <Input
                type="tel"
                placeholder="7353252526"
                value={phone}
                onChange={(e) => handlePhoneChange(e.target.value)}
                onBlur={() => handleBlur("phone")}
                className={`w-full bg-background h-12 rounded-l-none ${
                  touched.phone && !isPhoneValid
                    ? "border-destructive focus:border-destructive"
                    : "border-border focus:border-[hsl(var(--brand-orange))]"
                }`}
              />
            </div>
            {phone &&
              (isPhoneValid ? (
                <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
              ) : (
                touched.phone && (
                  <AlertCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-destructive" />
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
            <SelectTrigger className="bg-background border-border h-12 focus:border-[hsl(var(--brand-orange))]">
              <SelectValue placeholder="Your Role" />
            </SelectTrigger>
            <SelectContent className="bg-background border-border z-50">
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
            <SelectTrigger className="bg-background border-border h-12 focus:border-[hsl(var(--brand-orange))]">
              <SelectValue placeholder="Service Interest" />
            </SelectTrigger>
            <SelectContent className="bg-background border-border z-50">
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
            className="w-full h-12 bg-[hsl(var(--brand-orange))] hover:bg-[hsl(var(--brand-orange))]/90 text-white font-semibold shadow-lg shadow-[hsl(var(--brand-orange))]/25 group"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin mr-2" />
                Submitting...
              </>
            ) : (
              <>
                Submit Enquiry
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
