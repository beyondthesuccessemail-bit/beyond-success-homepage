import { useParams, Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, ArrowDown, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { services } from "@/lib/services";

const enquirySchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email must be less than 255 characters"),
  business: z.string().trim().min(1, "Business name is required").max(100, "Business name must be less than 100 characters"),
  phone: z.string().trim().min(1, "Phone number is required").max(20, "Phone number must be less than 20 characters"),
  servicesInterested: z.array(z.string()).min(1, "Please select at least one service"),
  message: z.string().trim().min(1, "Message is required").max(2000, "Message must be less than 2000 characters"),
});

type EnquiryForm = z.infer<typeof enquirySchema>;

const scrollToForm = () => {
  document.getElementById("enquiry-form")?.scrollIntoView({ behavior: "smooth" });
};

const ServicePage = () => {
  const { slug: paramSlug } = useParams<{ slug: string }>();
  const location = useLocation();
  const slug = paramSlug || location.pathname.split("/").pop() || "";
  const service = services.find((s) => s.slug === slug);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
    setValue,
    watch,
  } = useForm<EnquiryForm>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      name: "",
      email: "",
      business: "",
      phone: "",
      servicesInterested: service ? [service.title] : [],
      message: "",
    },
  });

  const selectedServices = watch("servicesInterested");

  const toggleService = (title: string) => {
    const current = selectedServices || [];
    if (current.includes(title)) {
      setValue("servicesInterested", current.filter((s) => s !== title), { shouldValidate: true });
    } else {
      setValue("servicesInterested", [...current, title], { shouldValidate: true });
    }
  };

  const onSubmit = async (data: EnquiryForm) => {
    // Simulate submission - replace with actual API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast.success("Enquiry submitted! We'll be in touch shortly.");
    reset();
  };

  if (!service) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold text-foreground mb-4">Service Not Found</h1>
          <Link to="/" className="text-gold hover:underline font-body">Back to Home</Link>
        </div>
      </div>
    );
  }

  const Icon = service.icon;
  const otherServices = services.filter((s) => s.slug !== slug);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden min-h-[60vh] flex items-center">
        {service.heroImage ? (
          <>
            <div className="absolute inset-0">
              <img src={service.heroImage} alt="" className="w-full h-full object-cover" width={1920} height={800} />
              <div className="absolute inset-0 bg-navy-deep/80" />
            </div>
          </>
        ) : (
          <div className="absolute inset-0 bg-navy-gradient" />
        )}
        <div className="absolute top-20 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent/10 border-glow flex items-center justify-center">
                <Icon className="w-6 h-6 text-gold" />
              </div>
              <span className="text-gold font-body text-sm tracking-widest uppercase">{service.title}</span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              {service.heroTagline}
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl font-body max-w-3xl mb-10">
              {service.heroDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToForm}
                className="px-8 py-4 rounded-lg bg-accent text-accent-foreground font-display font-semibold text-lg glow-gold hover:scale-105 transition-transform duration-300 flex items-center gap-2"
              >
                Get A Free Quote <ArrowDown className="w-5 h-5" />
              </button>
              <a
                href="tel:+441234567890"
                className="px-8 py-4 rounded-lg border-glow text-foreground font-display font-semibold text-lg hover:bg-foreground/5 transition-colors duration-300 flex items-center gap-2"
              >
                <Phone className="w-5 h-5" /> Contact Us Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-card/30">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-gold font-body text-sm tracking-widest uppercase mb-4 block">What's Included</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
              Everything You <span className="text-gradient-gold">Need</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, i) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-xl bg-card/60 border-glow flex items-start gap-4"
              >
                <CheckCircle className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                <span className="font-body text-foreground">{feature}</span>
              </motion.div>
            ))}
          </div>

          {/* Mid-page CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 text-center"
          >
            <button
              onClick={scrollToForm}
              className="px-8 py-4 rounded-lg bg-accent text-accent-foreground font-display font-semibold text-lg glow-gold hover:scale-105 transition-transform duration-300 inline-flex items-center gap-2"
            >
              Start Your {service.title} Journey <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-gold font-body text-sm tracking-widest uppercase mb-4 block">How It Works</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
              Our <span className="text-gradient-gold">Process</span>
            </h2>
          </motion.div>

          <div className="space-y-6">
            {service.process.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex gap-6 items-start p-6 rounded-xl bg-card/40 border-glow"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 border border-gold/30 flex items-center justify-center shrink-0">
                  <span className="font-display font-bold text-gold">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">{step.step}</h3>
                  <p className="text-muted-foreground font-body">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="px-6 py-16 bg-accent/5 border-y border-gold/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Transform Your <span className="text-gradient-gold">{service.title}</span>?
            </h2>
            <p className="text-muted-foreground font-body text-lg mb-8 max-w-2xl mx-auto">
              Don't let another day go by without a strategy that works. Let's talk about how we can help your business grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={scrollToForm}
                className="px-8 py-4 rounded-lg bg-accent text-accent-foreground font-display font-semibold text-lg glow-gold hover:scale-105 transition-transform duration-300 flex items-center gap-2 justify-center"
              >
                Get Your Free Quote <ArrowDown className="w-5 h-5" />
              </button>
              <a
                href="tel:+441234567890"
                className="px-8 py-4 rounded-lg border-glow text-foreground font-display font-semibold text-lg hover:bg-foreground/5 transition-colors duration-300 flex items-center gap-2 justify-center"
              >
                <Phone className="w-5 h-5" /> Call Us Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section id="enquiry-form" className="section-padding">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-gold font-body text-sm tracking-widest uppercase mb-4 block">Get In Touch</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              Let's <span className="text-gradient-gold">Talk</span>
            </h2>
            <p className="text-muted-foreground font-body text-lg">
              Fill out the form below and one of our team will get back to you within 24 hours.
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 p-8 rounded-2xl bg-card/60 border-glow"
          >
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-display font-semibold text-foreground mb-2">
                  Full Name <span className="text-red-400">*</span>
                </label>
                <input
                  {...register("name")}
                  placeholder="John Smith"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-colors"
                />
                {errors.name && <p className="mt-1 text-sm text-red-400 font-body">{errors.name.message}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-display font-semibold text-foreground mb-2">
                  Email Address <span className="text-red-400">*</span>
                </label>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="john@company.com"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-colors"
                />
                {errors.email && <p className="mt-1 text-sm text-red-400 font-body">{errors.email.message}</p>}
              </div>

              {/* Business Name */}
              <div>
                <label className="block text-sm font-display font-semibold text-foreground mb-2">
                  Business Name <span className="text-red-400">*</span>
                </label>
                <input
                  {...register("business")}
                  placeholder="Acme Ltd"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-colors"
                />
                {errors.business && <p className="mt-1 text-sm text-red-400 font-body">{errors.business.message}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-display font-semibold text-foreground mb-2">
                  Phone Number <span className="text-red-400">*</span>
                </label>
                <input
                  {...register("phone")}
                  type="tel"
                  placeholder="+44 7123 456789"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-colors"
                />
                {errors.phone && <p className="mt-1 text-sm text-red-400 font-body">{errors.phone.message}</p>}
              </div>
            </div>

            {/* Services Interested In */}
            <div>
              <label className="block text-sm font-display font-semibold text-foreground mb-3">
                Services Interested In <span className="text-red-400">*</span>
              </label>
              <div className="flex flex-wrap gap-3">
                {services.map((svc) => {
                  const isSelected = selectedServices?.includes(svc.title);
                  return (
                    <button
                      key={svc.title}
                      type="button"
                      onClick={() => toggleService(svc.title)}
                      className={`px-4 py-2 rounded-lg text-sm font-body transition-all duration-300 ${
                        isSelected
                          ? "bg-accent text-accent-foreground border border-gold/30"
                          : "bg-background border border-border text-muted-foreground hover:border-gold/30 hover:text-foreground"
                      }`}
                    >
                      {svc.title}
                    </button>
                  );
                })}
              </div>
              {errors.servicesInterested && (
                <p className="mt-1 text-sm text-red-400 font-body">{errors.servicesInterested.message}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-display font-semibold text-foreground mb-2">
                Tell Us About Your Project <span className="text-red-400">*</span>
              </label>
              <textarea
                {...register("message")}
                rows={5}
                placeholder="Tell us about your business, goals, and what you're looking for..."
                className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-colors resize-none"
              />
              {errors.message && <p className="mt-1 text-sm text-red-400 font-body">{errors.message.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 rounded-lg bg-accent text-accent-foreground font-display font-semibold text-lg glow-gold hover:scale-[1.02] transition-transform duration-300 disabled:opacity-50 disabled:hover:scale-100"
            >
              {isSubmitting ? "Submitting..." : "Submit Enquiry"}
            </button>
          </motion.form>
        </div>
      </section>

      {/* Other Services */}
      <section className="section-padding bg-card/30">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Explore More <span className="text-gradient-gold">Services</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {otherServices.map((svc) => (
              <Link
                key={svc.slug}
                to={`/services/${svc.slug}`}
                className="p-4 rounded-xl bg-card/60 border-glow hover:bg-accent/10 transition-colors text-center group"
              >
                <svc.icon className="w-6 h-6 text-muted-foreground group-hover:text-gold mx-auto mb-2 transition-colors" />
                <p className="font-display text-xs font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
                  {svc.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicePage;
