import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { services } from "@/lib/services";

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);

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
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-navy-gradient" />
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
            <button className="px-8 py-4 rounded-lg bg-accent text-accent-foreground font-display font-semibold text-lg glow-gold hover:scale-105 transition-transform duration-300">
              Get Started
            </button>
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

      <CTASection />
      <Footer />
    </div>
  );
};

export default ServicePage;
