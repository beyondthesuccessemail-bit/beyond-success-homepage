import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Video, Share2, Target, Search, Globe, CreditCard, Mail } from "lucide-react";
import videographyImg from "@/assets/Videography Service Image.webp";
import socialMediaImg from "@/assets/Social Media Services.png";
import ppcImg from "@/assets/Google Ads Services.webp";
import seoImg from "@/assets/seo-services-upscaled.png";
import websiteImg from "@/assets/web design image.png";
import paidSocialImg from "@/assets/Paid Social Ads Service.png";
import emailImg from "@/assets/email marketing services.png";

const services = [
  { icon: Video, title: "Videography", slug: "videography", desc: "Cinematic video content that captures your brand's story and connects with your audience on a deeper level.", image: videographyImg },
  { icon: Share2, title: "Social Media", slug: "social-media", desc: "Organic strategies that build real communities and turn followers into loyal customers.", image: socialMediaImg },
  { icon: Target, title: "PPC", slug: "ppc", desc: "Pay-per-click campaigns that maximise your return on investment and drive qualified leads.", image: ppcImg },
  { icon: Search, title: "SEO", slug: "seo", desc: "Search engine optimisation that puts your brand in front of the right people at the right time.", image: seoImg },
  { icon: Globe, title: "Website Design", slug: "website-design", desc: "Beautiful, high-converting websites that reflect your brand and deliver results.", image: websiteImg },
  { icon: CreditCard, title: "Paid Social", slug: "paid-social", desc: "Targeted social advertising that reaches your ideal audience and drives measurable growth.", image: paidSocialImg },
  { icon: Mail, title: "Email Marketing", slug: "email-marketing", desc: "Personalised email campaigns that nurture leads and keep your customers coming back.", image: emailImg },
];

const ServicesCarousel = () => {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const next = () => setCurrent((c) => (c + 1) % services.length);
  const prev = () => setCurrent((c) => (c - 1 + services.length) % services.length);

  return (
    <section ref={ref} className="section-padding bg-navy-gradient relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-gold font-body text-sm tracking-widest uppercase mb-4 block">What We Do</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Services That <span className="text-gradient-gold">Transform</span>
          </h2>
        </motion.div>

        {/* Main featured service */}
        <motion.div
          className="relative rounded-2xl overflow-hidden mb-8 border-glow"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ pointerEvents: isInView ? "auto" : "none" }}
        >
          <motion.div
            key={current}
            className="grid md:grid-cols-2 md:h-[450px]"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-8 md:p-12 flex flex-col justify-center bg-card/80">
              {(() => {
                const Icon = services[current].icon;
                return <Icon className="w-12 h-12 text-gold mb-6" />;
              })()}
              <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                {services[current].title}
              </h3>
              <p className="text-muted-foreground text-lg font-body mb-6">
                {services[current].desc}
              </p>
              <Link
                to={`/services/${services[current].slug}`}
                className="self-start px-6 py-3 rounded-lg bg-accent text-accent-foreground font-display font-semibold hover:scale-105 transition-transform"
              >
                Learn More
              </Link>
            </div>
            <div className="relative h-64 md:h-full overflow-hidden">
              <img
                src={services[current].image}
                alt={services[current].title}
                className="w-full h-full object-cover"
                loading="lazy"
                width={1280}
                height={720}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-card/80 to-transparent md:from-transparent" />
            </div>
          </motion.div>
        </motion.div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            {services.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current ? "w-8 bg-accent" : "w-2 bg-muted"
                }`}
              />
            ))}
          </div>
          <div className="flex gap-3">
            <button onClick={prev} className="w-12 h-12 rounded-full border-glow flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={next} className="w-12 h-12 rounded-full border-glow flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Service cards strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mt-10">
          {services.map((svc, i) => (
            <motion.button
              key={svc.title}
              onClick={() => setCurrent(i)}
              className={`p-4 rounded-xl text-left transition-all duration-300 ${
                i === current ? "bg-accent/10 border-glow" : "bg-card/30 hover:bg-card/60"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              style={{ pointerEvents: "auto" }}
            >
              <svc.icon className={`w-6 h-6 mb-2 ${i === current ? "text-gold" : "text-muted-foreground"}`} />
              <p className={`font-display text-xs font-semibold ${i === current ? "text-foreground" : "text-muted-foreground"}`}>
                {svc.title}
              </p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel;
