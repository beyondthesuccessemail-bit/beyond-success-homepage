import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Users, TrendingUp, Sparkles } from "lucide-react";
import caringImg from "@/assets/caring-person.jpg";

const values = [
  { icon: Heart, title: "People First", desc: "Every strategy starts with understanding the humans behind the brand." },
  { icon: Users, title: "Genuine Care", desc: "We invest in your success as if it were our own, because it is." },
  { icon: TrendingUp, title: "Proven Growth", desc: "Strategies shaped by real stories from founders who have been there." },
  { icon: Sparkles, title: "Beyond Average", desc: "We don't settle for good enough. We push for extraordinary." },
];

const MissionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-navy-radial relative overflow-hidden">
      {/* Accent glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9 }}
          >
            <span className="text-gold font-body text-sm tracking-widest uppercase mb-4 block">Our Mission</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              We Actually <span className="text-gradient-gold">Care</span> About People
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6 font-body">
              Born from the interviews and stories shared on <span className="text-gold font-semibold">Beyond The Success</span>,
              we saw a gap: brilliant entrepreneurs with incredible visions, but no one to truly champion
              their marketing. We're not just another agency. We're your partner in growth.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed font-body">
              Every company we work with gets the same dedication we give to the founders we
              interview. Because behind every brand is a person with a dream worth fighting for.
            </p>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden glow-gold max-w-sm mx-auto">
              <img src={caringImg} alt="Young entrepreneur smiling" className="w-full h-auto aspect-square object-cover" loading="lazy" width={600} height={600} />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 to-transparent" />
            </div>
            <motion.div
              className="absolute bottom-4 left-4 bg-card border-glow rounded-xl p-6 text-center mx-[165px] my-0 py-[24px] px-[24px]"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="text-gold font-display text-3xl font-bold">200+</p>
              <p className="text-muted-foreground text-sm font-body">Brands Transformed</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Values grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, i) => (
            <motion.div
              key={val.title}
              className="bg-card/50 border-glow rounded-xl p-6 hover:bg-card/80 transition-colors duration-300 group"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.15 }}
              whileHover={{ y: -5 }}
            >
              <val.icon className="w-10 h-10 text-gold mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{val.title}</h3>
              <p className="text-muted-foreground text-sm font-body">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
