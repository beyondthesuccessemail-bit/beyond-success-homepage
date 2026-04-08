import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mic } from "lucide-react";

const BeyondSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-navy-gradient relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Mic className="w-5 h-5 text-gold" />
            <span className="text-gold font-body text-sm tracking-widest uppercase">Our Parent Brand</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Beyond The <span className="text-gradient-gold">Success</span>
          </h2>
          <p className="text-muted-foreground text-lg font-body leading-relaxed">
            Our marketing agency was born from the real stories shared by entrepreneurs on our
            interview platform. We listened to hundreds of founders share their struggles,
            breakthroughs, and strategies, then built an agency that truly understands what
            growing businesses need.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BeyondSection;

