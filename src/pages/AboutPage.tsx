import { motion, useInView, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Video, Users, Rocket, Globe, ArrowRight, Star, TrendingUp, Handshake } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import aboutHero from "@/assets/about-hero.jpg";
import teamAlfie from "@/assets/team-alfie.jpg";
import teamGeorge from "@/assets/team-george.jpg";
import workspaceImg from "@/assets/about-workspace.jpg";

/* ── Cursor-following spotlight ── */
const CursorSpotlight = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 80, damping: 20 });
  const springY = useSpring(y, { stiffness: 80, damping: 20 });

  useEffect(() => {
    const move = (e: MouseEvent) => { x.set(e.clientX); y.set(e.clientY); };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30"
      style={{
        background: useTransform(
          [springX, springY],
          ([px, py]: number[]) =>
            `radial-gradient(600px circle at ${px}px ${py}px, hsl(42 90% 55% / 0.04), transparent 60%)`
        ),
      }}
    />
  );
};

/* ── Animated counter ── */
const Counter = ({ target, label, suffix = "" }: { target: number; label: string; suffix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let frame: number;
    const duration = 2000;
    const start = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [isInView, target]);

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <span className="font-display text-5xl md:text-6xl font-bold text-gradient-gold">
        {count}{suffix}
      </span>
      <p className="text-muted-foreground font-body mt-2">{label}</p>
    </motion.div>
  );
};

/* ── Timeline milestone ── */
const milestones = [
  {
    icon: Video,
    title: "The Spark",
    description:
      "We started filming entrepreneurs, asking one simple question: how did you become successful? Those raw, unfiltered conversations became the foundation of Beyond The Success.",
  },
  {
    icon: Users,
    title: "Building the Network",
    description:
      "Hundreds of interviews later, we had built a powerful network of founders, CEOs and creators who trusted us with their stories and their brands.",
  },
  {
    icon: Handshake,
    title: "The Demand",
    description:
      "Time and again, the entrepreneurs we interviewed came back to us asking for one thing: help with their marketing. Content, websites, social media, the lot.",
  },
  {
    icon: Rocket,
    title: "Becoming The Success",
    description:
      "We launched Becoming The Success as a child company under Beyond The Success. Within the first month we had already signed our first clients for social media content and landed our first website project.",
  },
  {
    icon: TrendingUp,
    title: "Monthly Retainers & Growth",
    description:
      "Shortly after, we secured our first monthly retainers for SEO and social media content. What started as a passion project had become a full-service marketing agency.",
  },
  {
    icon: Globe,
    title: "Where We Are Today",
    description:
      "Today we deliver end-to-end marketing solutions across social media, videography, PPC, SEO, web design, paid social and email marketing, all rooted in real entrepreneurial insight.",
  },
];

const AboutPage = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const storyRef = useRef(null);
  const storyInView = useInView(storyRef, { once: true, margin: "-100px" });
  const teamRef = useRef(null);
  const teamInView = useInView(teamRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />
      <CursorSpotlight />

      {/* ── Hero ── */}
      <section ref={heroRef} className="relative h-[85vh] min-h-[600px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={aboutHero}
            alt="Alfie and George filming an entrepreneur interview in a professional studio"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <motion.span
            className="inline-block text-accent font-body text-sm tracking-widest uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Our Story
          </motion.span>
          <motion.h1
            className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            From <span className="text-gradient-gold">Interviews</span> to Impact
          </motion.h1>
          <motion.p
            className="text-muted-foreground text-lg md:text-xl font-body max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            We did not start as a marketing agency. We started with a camera, a microphone and a genuine curiosity about what it takes to succeed.
          </motion.p>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-accent/40 flex justify-center pt-2">
            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
          </div>
        </motion.div>
      </section>

      {/* ── Stats strip ── */}
      <section className="section-padding bg-navy-gradient">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <Counter target={200} suffix="+" label="Entrepreneurs Interviewed" />
          <Counter target={50} suffix="+" label="Clients Served" />
          <Counter target={12} suffix="" label="Months Since Launch" />
          <Counter target={7} suffix="" label="Core Services" />
        </div>
      </section>

      {/* ── Timeline / Journey ── */}
      <section ref={storyRef} className="section-padding bg-background relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="font-display text-4xl md:text-5xl font-bold text-foreground text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={storyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            The <span className="text-gradient-gold">Journey</span>
          </motion.h2>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-accent/20 -translate-x-1/2" />

            {milestones.map((m, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={m.title}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 mb-16 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, delay: i * 0.1 }}
                >
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent glow-gold z-10" />

                  {/* Card */}
                  <div className={`ml-14 md:ml-0 md:w-[45%] ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <motion.div
                      className="bg-card/60 border-glow rounded-2xl p-6 group cursor-default"
                      whileHover={{ scale: 1.03, boxShadow: "0 0 40px -10px hsl(42 90% 55% / 0.2)" }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <m.icon className="w-8 h-8 text-accent mb-3 group-hover:scale-110 transition-transform" />
                      <h3 className="font-display text-xl font-bold text-foreground mb-2">{m.title}</h3>
                      <p className="text-muted-foreground font-body text-sm leading-relaxed">{m.description}</p>
                    </motion.div>
                  </div>

                  {/* Spacer for the other side */}
                  <div className="hidden md:block md:w-[45%]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Workspace parallax image ── */}
      <section className="relative h-[50vh] overflow-hidden">
        <motion.img
          src={workspaceImg}
          alt="Creative marketing workspace with analytics and camera equipment"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          width={1200}
          height={800}
          initial={{ scale: 1.15 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        />
        <div className="absolute inset-0 bg-background/60" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <motion.blockquote
            className="text-center max-w-3xl px-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Star className="w-8 h-8 text-accent mx-auto mb-4" />
            <p className="font-display text-2xl md:text-3xl font-bold text-foreground italic leading-snug">
              "We built this agency because we listened. Every strategy we create is informed by real stories from real entrepreneurs."
            </p>
          </motion.blockquote>
        </div>
      </section>

      {/* ── Meet the Team ── */}
      <section ref={teamRef} className="section-padding bg-navy-gradient relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="font-display text-4xl md:text-5xl font-bold text-foreground text-center mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            Meet the <span className="text-gradient-gold">Founders</span>
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-center font-body mb-16 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            animate={teamInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Two mates who turned a passion for storytelling into a full-service marketing agency.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                name: "Alfie",
                role: "Co-Founder & Creative Director",
                image: teamAlfie,
                bio: "From day one, Alfie has been behind the camera and in front of the strategy board. His eye for compelling content and instinct for what resonates on social media drives the creative engine of the agency.",
              },
              {
                name: "George",
                role: "Co-Founder & Growth Strategist",
                image: teamGeorge,
                bio: "George brings the analytical edge. Whether it is SEO, paid campaigns or building out client websites, he ensures every project delivers measurable results and long-term value.",
              },
            ].map((person, i) => (
              <motion.div
                key={person.name}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.2 }}
              >
                <motion.div
                  className="bg-card/60 border-glow rounded-2xl overflow-hidden"
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="relative overflow-hidden h-80">
                    <motion.img
                      src={person.image}
                      alt={`${person.name}, ${person.role}`}
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                      width={800}
                      height={1024}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  </div>
                  <div className="p-6 -mt-10 relative z-10">
                    <h3 className="font-display text-2xl font-bold text-foreground">{person.name}</h3>
                    <span className="text-accent font-body text-sm">{person.role}</span>
                    <p className="text-muted-foreground font-body text-sm mt-3 leading-relaxed">{person.bio}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-padding bg-background relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Write Your <span className="text-gradient-gold">Success Story</span>?
          </h2>
          <p className="text-muted-foreground font-body text-lg mb-8">
            Whether you need social media content, a brand-new website or a full marketing strategy, we are here to help your business grow.
          </p>
          <motion.a
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent text-accent-foreground font-display font-bold text-lg hover:gap-4 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Get In Touch <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
