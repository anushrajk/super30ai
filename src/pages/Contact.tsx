import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
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
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  ArrowRight,
  Award,
} from "lucide-react";
import { toast } from "sonner";
import { openThankYouPage } from "@/lib/thankYouRedirect";
import { validateEmail, validatePhone, validateMessage, sanitizeInput } from "@/lib/validation";
import { BentoCard, BentoIcon, BentoBadge } from "@/components/ui/bento-grid";
import { submitFormToGoogleSheets } from "@/hooks/useFormSubmit";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "hello@thesuper30.ai",
    link: "mailto:hello@thesuper30.ai",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 89041 50555",
    link: "tel:+918904150555",
  },
  {
    icon: MapPin,
    title: "Office",
    value: "46/A, 1st Main Rd, opposite Mini Forest, Sarakki Industrial Layout, 3rd Phase, J. P. Nagar, Bengaluru, Karnataka 560078",
    link: null,
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "Mon-Fri: 9AM - 6PM IST",
    link: null,
  },
];

const socialLinks = [
  { 
    name: "LinkedIn", 
    href: "https://linkedin.com/company/thesuper30", 
    id: "contact-social-linkedin",
    icon: (<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>) 
  },
  { 
    name: "X", 
    href: "https://twitter.com/thesuper30ai", 
    id: "contact-social-twitter",
    icon: (<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>) 
  },
  { 
    name: "Instagram", 
    href: "https://instagram.com/thesuper30.ai", 
    id: "contact-social-instagram",
    icon: (<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"/></svg>) 
  },
  { 
    name: "YouTube", 
    href: "https://youtube.com/@thesuper30", 
    id: "contact-social-youtube",
    icon: (<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>) 
  },
  { 
    name: "Facebook", 
    href: "https://facebook.com/thesuper30ai", 
    id: "contact-social-facebook",
    icon: (<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>) 
  },
];

const Contact = () => {
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    budget: "",
    teamSize: "",
    source: "",
    service: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    
    if (formData.phone && !validatePhone(formData.phone)) {
      newErrors.phone = "Enter 10 digit number starting with 6, 7, 8, or 9";
    }
    
    if (!validateMessage(formData.message, 10, 1000)) {
      newErrors.message = "Message must be between 10 and 1000 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error("Please fix the errors before submitting");
      return;
    }
    
    setLoading(true);

    try {
      // Submit to Google Sheets
      await submitFormToGoogleSheets({
        form_id: "contact_form",
        form_name: "Contact Form",
        page_url: window.location.href,
        trigger_type: "embedded",
        data: {
          name: sanitizeInput(formData.name),
          email: sanitizeInput(formData.email),
          phone: formData.phone ? `+91${sanitizeInput(formData.phone)}` : "",
          company: formData.company ? sanitizeInput(formData.company) : "",
          website: formData.website || "",
          budget: formData.budget || "",
          team_size: formData.teamSize || "",
          source: formData.source || "",
          service: formData.service || "",
          message: sanitizeInput(formData.message),
        },
      });

      toast.success("Message sent! We'll get back to you within 24 hours.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        website: "",
        budget: "",
        teamSize: "",
        source: "",
        service: "",
        message: "",
      });
      setErrors({});
      
      // Open thank you page in new tab
      openThankYouPage({
        name: formData.name,
        email: formData.email,
        source: "contact"
      });
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Talk to Our SEO Experts | The Super 30</title>
        <meta name="description" content="Connect with our SEO agency team to discuss your goals and discover how our strategies can help grow your business online." />
        <meta name="keywords" content="SEO agency team, SEO Experts, hire seo experts, seo services near me, seo agency near me" />
        <link rel="canonical" href="https://www.thesuper30.ai/seo-agency-near-me" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Talk to Our SEO Experts | The Super 30" />
        <meta property="og:description" content="Connect with our SEO agency team to discuss your goals and discover how our strategies can help grow your business online." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.thesuper30.ai/seo-agency-near-me" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Talk to Our SEO Experts | The Super 30" />
        <meta name="twitter:description" content="Connect with our SEO agency team to discuss your goals and discover how our strategies can help grow your business online." />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Talk to Our SEO Experts",
            "url": "https://www.thesuper30.ai/seo-agency-near-me",
            "description": "Connect with our SEO agency team to discuss your goals and discover how our strategies can help grow your business online."
          })}
        </script>
      </Helmet>

      <Navbar />

      <main className="min-h-screen pt-16 md:pt-20">
        {/* Hero Section */}
        <section id="contact-hero" className="relative bg-white overflow-hidden min-h-[70vh] md:min-h-[80vh] flex items-center">
          {/* Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
          </div>

          <div className="container relative mx-auto px-3 md:px-4 py-8 md:py-12 lg:py-16">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              {/* Badge */}
              <BentoBadge>
                <MessageCircle className="w-4 h-4" />
                Get in Touch
              </BentoBadge>

              {/* H1 and Description */}
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-4">
                  Talk to Our{" "}
                  <span className="relative inline-block">
                    <span className="text-brand-gradient">SEO Experts</span>
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-brand-gradient rounded-full opacity-50" />
                  </span>
                </h1>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  Whether you're searching for SEO services near you, want to hire SEO experts, or need AI SEO experts who understand your market — our team is{" "}
                  <span className="text-foreground font-semibold">ready to help</span>.
                </p>
              </div>

              {/* Trust Signals - Horizontal */}
              <div className="flex flex-wrap justify-center gap-4 py-4">
                {[
                  { icon: Clock, text: "24hr Response" },
                  { icon: Phone, text: "Free Consultation" },
                  { icon: Mail, text: "Expert Support" },
                  { icon: MapPin, text: "Bangalore, India" },
                ].map((signal, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2 bg-background border border-border rounded-full px-4 py-2"
                  >
                    <signal.icon className="w-4 h-4 text-brand" />
                    <span className="font-medium text-foreground text-sm">{signal.text}</span>
                  </div>
                ))}
              </div>

              {/* Dual CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                <a href="tel:+918904150555">
                  <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Us Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>
                <a href="mailto:hello@thesuper30.ai">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-border text-foreground hover:bg-muted transition-all duration-300 w-full sm:w-auto"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Email Us
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </div>

              {/* Expert credentials */}
              <div className="flex flex-wrap gap-2 justify-center pt-2">
                {["AI SEO Experts", "Performance Marketing", "Free Consultation"].map((cred, i) => (
                  <span 
                    key={i}
                    className="inline-flex items-center gap-1.5 bg-muted text-muted-foreground px-3 py-1.5 rounded-full text-xs font-medium"
                  >
                    <Award className="w-3 h-3 text-brand" />
                    {cred}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact-form" className="py-12 md:py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-3 md:px-4">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div className="bento-card p-6 md:p-8 h-full flex flex-col">
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6">Get in Touch With Our SEO Agency Team</h2>

                <form onSubmit={handleSubmit} className="flex-1 flex flex-col space-y-4" id="contact-form">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="contact-name">Full Name *</Label>
                      <Input
                        id="contact-name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className={errors.name ? "border-destructive" : ""}
                      />
                      {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-email">Email *</Label>
                      <Input
                        id="contact-email"
                        name="email"
                        type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className={errors.email ? "border-destructive" : ""}
                      />
                      {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="contact-phone">Phone</Label>
                      <div className="flex">
                        <span className="inline-flex items-center gap-1 px-3 rounded-l-md bg-muted border border-r-0 border-input text-muted-foreground text-sm font-medium">
                          <Phone className="w-3.5 h-3.5" />
                          +91
                        </span>
                        <Input
                          id="contact-phone"
                          name="phone"
                          placeholder="9876543210"
                          value={formData.phone}
                          onChange={(e) => {
                            let cleaned = e.target.value.replace(/\D/g, '').slice(0, 10);
                            if (cleaned.length > 0 && !/^[6-9]/.test(cleaned)) {
                              cleaned = '';
                            }
                            setFormData({ ...formData, phone: cleaned });
                          }}
                          className={`rounded-l-none ${errors.phone ? "border-destructive" : ""}`}
                        />
                      </div>
                      {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-company">Company</Label>
                      <Input
                        id="contact-company"
                        name="company"
                        placeholder="Company Name"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="contact-website">Website URL</Label>
                      <Input
                        id="contact-website"
                        name="website"
                        placeholder="https://yourcompany.com"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-budget">Budget Range</Label>
                      <Select
                        value={formData.budget}
                        onValueChange={(value) => setFormData({ ...formData, budget: value })}
                      >
                        <SelectTrigger id="contact-budget" name="budget">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under_50k">Under ₹50,000/month</SelectItem>
                          <SelectItem value="50k_1L">₹50,000 - ₹1 Lakh/month</SelectItem>
                          <SelectItem value="1L_5L">₹1 - 5 Lakhs/month</SelectItem>
                          <SelectItem value="5L_10L">₹5 - 10 Lakhs/month</SelectItem>
                          <SelectItem value="over_10L">Over ₹10 Lakhs/month</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="contact-teamsize">Team Size</Label>
                      <Select
                        value={formData.teamSize}
                        onValueChange={(value) => setFormData({ ...formData, teamSize: value })}
                      >
                        <SelectTrigger id="contact-teamsize" name="teamSize">
                          <SelectValue placeholder="Select team size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-10">1 - 10 employees</SelectItem>
                          <SelectItem value="10-50">10 - 50 employees</SelectItem>
                          <SelectItem value="50-200">50 - 200 employees</SelectItem>
                          <SelectItem value="200+">200+ employees</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-source">How did you hear about us?</Label>
                      <Select
                        value={formData.source}
                        onValueChange={(value) => setFormData({ ...formData, source: value })}
                      >
                        <SelectTrigger id="contact-source" name="source">
                          <SelectValue placeholder="Select source" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="google">Google Search</SelectItem>
                          <SelectItem value="social">Social Media</SelectItem>
                          <SelectItem value="referral">Referral</SelectItem>
                          <SelectItem value="ads">Paid Ads</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-service">Service Interest</Label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) => setFormData({ ...formData, service: value })}
                    >
                      <SelectTrigger id="contact-service" name="service">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ai-seo">AI SEO Services</SelectItem>
                        <SelectItem value="performance-marketing">Performance Marketing</SelectItem>
                        <SelectItem value="both">Both Services</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2 flex-1 flex flex-col">
                    <Label htmlFor="contact-message">Message *</Label>
                    <Textarea
                      id="contact-message"
                      name="message"
                      placeholder="Tell us about your project and goals..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className={`flex-1 min-h-[100px] ${errors.message ? "border-destructive" : ""}`}
                    />
                    {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
                    <p className="text-xs text-muted-foreground">{formData.message.length}/1000 characters</p>
                  </div>

                  <Button
                    id="btn-contact-form-submit"
                    name="submit-contact-form"
                    type="submit"
                    className="w-full bg-brand-gradient hover:opacity-90 text-white shadow-lg"
                    disabled={loading}
                  >
                    {loading ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-6 md:space-y-8 h-full flex flex-col">
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6">Get in touch</h2>
                  <p className="text-muted-foreground mb-6">
                    Have a question or ready to start? Reach out through any of these channels and we'll respond within 24 hours.
                  </p>

                  <div className="space-y-3">
                    {contactInfo.map((info, index) => (
                      <BentoCard key={index} className="group !p-4">
                        <div className="flex items-center gap-4">
                          <BentoIcon size="sm">
                            <info.icon className="w-5 h-5 text-brand group-hover:text-white transition-colors" />
                          </BentoIcon>
                          <div>
                            <p className="text-sm text-muted-foreground">{info.title}</p>
                            {info.link ? (
                              <a
                                href={info.link}
                                id={`contact-info-${info.title.toLowerCase()}`}
                                className="text-foreground font-medium hover:text-brand transition-colors"
                              >
                                {info.value}
                              </a>
                            ) : (
                              <p className="text-foreground font-medium">{info.value}</p>
                            )}
                          </div>
                        </div>
                      </BentoCard>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="text-base md:text-lg font-bold text-foreground mb-4">Follow Us</h3>
                  <div className="flex flex-wrap gap-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        id={social.id}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 icon-bg-glow rounded-full flex items-center justify-center hover:bg-brand-gradient hover:text-white transition-all duration-300"
                        aria-label={social.name}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Map */}
                <div className="bento-card overflow-hidden flex-1">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62224.92642918453!2d77.57034246322014!3d12.903998375556354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16256e8bd415%3A0x85acd49abea04935!2sDigital%20Academy%20360!5e0!3m2!1sen!2sin!4v1767928926902!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, minHeight: "12rem" }}
                    allowFullScreen
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location"
                    className="w-full h-full min-h-48"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>


        <Footer />
      </main>
    </>
  );
};

export default Contact;
