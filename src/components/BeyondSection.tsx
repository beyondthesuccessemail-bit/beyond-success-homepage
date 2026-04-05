import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Play, Mic, ArrowRight } from "lucide-react";
import interviewImg from "@/assets/interview.jpg";
import speakerImg from "@/assets/speaker.jpg";

const episodes = [
  { title: "From Zero to 7 Figures", guest: "Sarah Mitchell", image: interviewImg },
  { title: "Building a Brand That Lasts", guest: "Marcus Johnson", image: speakerImg },
  { title: "The Art of the Pivot", guest: "Emily Rodriguez", image: interviewImg },
];

const BeyondSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-navy-gradient relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <motion.div
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
            <p className="text-muted-foreground text-lg font-body leading-relaxed mb-6">
              Our marketing agency was born from the real stories shared by entrepreneurs on our
              interview platform. We listened to hundreds of founders share their struggles,
              breakthroughs, and strategies, then built an agency that truly understands what
              growing businesses need.
            </p>
            <button className="flex items-center gap-2 text-gold font-display font-semibold hover:gap-4 transition-all duration-300">
              Explore Episodes <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {episodes.map((ep, i) => (
              <motion.div
                key={ep.title}
                className="flex items-center gap-4 bg-card/40 border-glow rounded-xl p-4 group cursor-pointer hover:bg-card/70 transition-colors"
                whileHover={{ x: 8 }}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              >
                <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                  <img src={ep.image} alt={ep.title} className="w-full h-full object-cover" loading="lazy" width={80} height={80} />
                  <div className="absolute inset-0 flex items-center justify-center bg-navy-deep/40 group-hover:bg-navy-deep/20 transition-colors">
                    <Play className="w-6 h-6 text-gold fill-gold" />
                  </div>
                </div>
                <div>
                  <h4 className="font-display font-bold text-foreground group-hover:text-gold transition-colors">{ep.title}</h4>
                  <p className="text-muted-foreground text-sm font-body">with {ep.guest}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BeyondSection;
