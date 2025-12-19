import { useState } from "react";
import { Helmet } from "react-helmet";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/landing/Footer";
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
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Linkedin,
  Twitter,
  MessageCircle,
} from "lucide-react";
import { toast } from "sonner";

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
    value: "+91 98765 43210",
    link: "tel:+919876543210",
  },
  {
    icon: MapPin,
    title: "Office",
    value: "Bangalore, India",
    link: null,
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "Mon-Fri: 9AM - 6PM IST",
    link: null,
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("Message sent! We'll get back to you within 24 hours.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    });
    setLoading(false);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | The Super 30 - Get in Touch</title>
        <meta
          name="description"
          content="Get in touch with The Super 30. Contact us for AI SEO and Performance Marketing services. Free consultation available."
        />
        <link rel="canonical" href="https://aiseoserviceagencybangalore.lovable.app/contact" />
      </Helmet>

      <Navbar />

      <main className="min-h-screen pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="relative bg-background overflow-hidden py-24 lg:py-32">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50/80 via-background to-background" />
          </div>

          <div className="container relative mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 px-4 py-1.5 rounded-full mb-6">
                <MessageCircle className="w-4 h-4 text-orange-600" />
                <span className="text-orange-700 text-sm font-medium">Contact Us</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Let's{" "}
                <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                  Talk Growth
                </span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Ready to transform your digital presence? Get in touch and let's discuss your goals.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <Card className="bg-background border-border/50">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Send us a message</h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          placeholder="Company Name"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Service Interest</Label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) => setFormData({ ...formData, service: value })}
                      >
                        <SelectTrigger>
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

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project and goals..."
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg shadow-orange-500/30"
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
                </CardContent>
              </Card>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">Get in touch</h2>
                  <p className="text-muted-foreground mb-8">
                    Have a question or ready to start? Reach out through any of these channels and we'll respond within 24 hours.
                  </p>

                  <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <Card key={index} className="bg-background border-border/50">
                        <CardContent className="p-4 flex items-center gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center">
                            <info.icon className="w-6 h-6 text-orange-500" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">{info.title}</p>
                            {info.link ? (
                              <a
                                href={info.link}
                                className="text-foreground font-medium hover:text-orange-500 transition-colors"
                              >
                                {info.value}
                              </a>
                            ) : (
                              <p className="text-foreground font-medium">{info.value}</p>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-4">Follow Us</h3>
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center hover:bg-orange-100 hover:text-orange-500 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center hover:bg-orange-100 hover:text-orange-500 transition-colors"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* FAQ Preview */}
                <Card className="bg-gradient-to-br from-orange-50 to-orange-100/50 border-orange-200/50">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      Have questions?
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Check out our FAQ sections on our service pages for quick answers.
                    </p>
                    <div className="flex gap-2">
                      <a href="/ai-seo#faq" className="text-orange-500 text-sm font-medium hover:underline">
                        AI SEO FAQ →
                      </a>
                      <span className="text-muted-foreground">|</span>
                      <a href="/performance-marketing#faq" className="text-orange-500 text-sm font-medium hover:underline">
                        PM FAQ →
                      </a>
                    </div>
                  </CardContent>
                </Card>
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
