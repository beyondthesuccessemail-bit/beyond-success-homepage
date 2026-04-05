import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const stats = [
  { value: 200, suffix: "+", label: "Brands Helped" },
  { value: 340, suffix: "%", label: "Average Growth" },
  { value: 50, suffix: "+", label: "Founders Interviewed" },
  { value: 98, suffix: "%", label: "Client Retention" },
];

const Counter = ({ target, suffix, isInView }: { target: number; suffix: string; isInView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span>{count}{suffix}</span>;
};

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-primary to-navy-deep" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(42_90%_55%_/_0.08),transparent_50%)]" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <p className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-gold mb-2">
                <Counter target={stat.value} suffix={stat.suffix} isInView={isInView} />
              </p>
              <p className="text-muted-foreground font-body text-sm md:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
