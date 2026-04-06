import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Send, MapPin, Phone, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ContactPage = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const formRef = useRef(null);
  const formInView = useInView(formRef, { once: true, margin: "-80px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Enquiry from ${formData.name} - ${formData.company || "N/A"}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nService: ${formData.service}\n\n${formData.message}`
    );
    window.location.href = `mailto:hello@becomingthesuccess.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const contactDetails = [
    {
      icon: Mail,
      label: "Email Us",
      value: "hello@becomingthesuccess.com",
      href: "mailto:hello@becomingthesuccess.com",
    },
    {
      icon: Phone,
      label: "Call Us",
      value: "Get in touch for a free consultation",
      href: "mailto:hello@becomingthesuccess.com",
    },
    {
      icon: MapPin,
      label: "Based In",
      value: "United Kingdom",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section ref={heroRef} className="relative pt-32 pb-16 section-padding bg-navy-gradient overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(42_90%_55%_/_0.06),transparent_60%)]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.span
            className="inline-block text-accent font-body text-sm tracking-widest uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Get In Touch
          </motion.span>
          <motion.h1
            className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            Let's <span className="text-gradient-gold">Work Together</span>
          </motion.h1>
          <motion.p
            className="text-muted-foreground text-lg md:text-xl font-body max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Whether you need social media content, a new website or a full marketing strategy, we would love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* Contact details + Form */}
      <section ref={formRef} className="section-padding bg-background">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-12">
          {/* Left column - details */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                Contact <span className="text-gradient-gold">Details</span>
              </h2>
              <p className="text-muted-foreground font-body mb-8">
                Drop us an email or fill in the form and we will get back to you within 24 hours.
              </p>
            </motion.div>

            {contactDetails.map((item, i) => (
              <motion.div
                key={item.label}
                className="flex items-start gap-4 group"
                initial={{ opacity: 0, x: -30 }}
                animate={formInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl bg-card border-glow flex items-center justify-center flex-shrink-0 group-hover:glow-gold transition-shadow">
                  <item.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-display font-bold text-foreground text-sm">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-muted-foreground font-body text-sm hover:text-accent transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-muted-foreground font-body text-sm">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Direct email CTA */}
            <motion.a
              href="mailto:hello@becomingthesuccess.com"
              className="inline-flex items-center gap-2 mt-4 px-6 py-3 rounded-xl border-glow text-accent font-display font-semibold text-sm hover:bg-accent hover:text-accent-foreground transition-all"
              initial={{ opacity: 0 }}
              animate={formInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Mail className="w-4 h-4" />
              Email Us Directly
            </motion.a>
          </div>

          {/* Right column - form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 40 }}
            animate={formInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="bg-card/60 border-glow rounded-2xl p-8">
              {submitted ? (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">Your email client should open shortly</h3>
                  <p className="text-muted-foreground font-body">
                    If it did not open,{" "}
                    <a href="mailto:hello@becomingthesuccess.com" className="text-accent hover:underline">
                      click here to email us directly
                    </a>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-accent font-body text-sm hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-foreground font-body text-sm mb-1.5">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground font-body text-sm focus:outline-none focus:border-accent transition-colors"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-foreground font-body text-sm mb-1.5">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground font-body text-sm focus:outline-none focus:border-accent transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-foreground font-body text-sm mb-1.5">Company</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground font-body text-sm focus:outline-none focus:border-accent transition-colors"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label className="block text-foreground font-body text-sm mb-1.5">Service Interested In</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground font-body text-sm focus:outline-none focus:border-accent transition-colors"
                      >
                        <option value="">Select a service</option>
                        <option value="Social Media Content">Social Media Content</option>
                        <option value="Videography">Videography</option>
                        <option value="PPC">PPC</option>
                        <option value="SEO">SEO</option>
                        <option value="Website Design">Website Design</option>
                        <option value="Paid Social">Paid Social</option>
                        <option value="Email Marketing">Email Marketing</option>
                        <option value="Full Marketing Strategy">Full Marketing Strategy</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-foreground font-body text-sm mb-1.5">Your Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground font-body text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                      placeholder="Tell us about your project and what you are looking to achieve..."
                    />
                  </div>
                  <motion.button
                    type="submit"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent text-accent-foreground font-display font-bold text-base hover:gap-4 transition-all"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Send Message <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
