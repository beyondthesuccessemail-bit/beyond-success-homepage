import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, TechVentures",
    quote: "Beyond The Success didn't just help us grow, they genuinely cared about our mission. It's rare to find a marketing partner that feels like family.",
    stars: 5,
  },
  {
    name: "Marcus Johnson",
    role: "Founder, GreenLeaf Co.",
    quote: "After being interviewed on Beyond The Success podcast, they helped us turn our story into a full brand campaign. Revenue up 340% in 8 months.",
    stars: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "COO, Pulse Health",
    quote: "The team truly listens. They understood our vision before we could even articulate it. That's the difference between an agency and a partner.",
    stars: 5,
  },
  {
    name: "David Chen",
    role: "CTO, NovaBuild",
    quote: "They took our complex tech product and made it human. Our brand now connects with people on an emotional level we never thought possible.",
    stars: 5,
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={ref} className="section-padding bg-navy-radial relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/3 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-gold font-body text-sm tracking-widest uppercase mb-4 block">Testimonials</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Stories of <span className="text-gradient-gold">Success</span>
          </h2>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="bg-card/40 border-glow rounded-2xl p-8 md:p-12 text-center"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.5 }}
            >
              <Quote className="w-12 h-12 text-gold/40 mx-auto mb-6" />
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[current].stars)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              <p className="font-body text-xl md:text-2xl text-foreground/90 leading-relaxed mb-8 italic">
                "{testimonials[current].quote}"
              </p>
              <p className="font-display text-lg font-bold text-foreground">{testimonials[current].name}</p>
              <p className="text-gold font-body text-sm">{testimonials[current].role}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)}
              className="w-10 h-10 rounded-full border-glow flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    i === current ? "bg-accent scale-125" : "bg-muted"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => setCurrent((c) => (c + 1) % testimonials.length)}
              className="w-10 h-10 rounded-full border-glow flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
