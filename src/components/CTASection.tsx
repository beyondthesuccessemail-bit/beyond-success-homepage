import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(42_90%_55%_/_0.08),transparent_60%)]" />

      <motion.div
        className="max-w-4xl mx-auto text-center relative"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
          Ready to Become<br /><span className="text-gradient-gold">The Success?</span>
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl font-body max-w-2xl mx-auto mb-10">
          Let's write your success story together. Join the founders who chose a
          marketing partner that truly cares.
        </p>
        <motion.button
          className="inline-flex items-center gap-3 px-10 py-5 rounded-xl bg-accent text-accent-foreground font-display font-bold text-xl glow-gold hover:gap-5 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          Get Started <ArrowRight className="w-6 h-6" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default CTASection;
