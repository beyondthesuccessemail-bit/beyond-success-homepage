import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = ["About", "Services", "Stories", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-navy-deep/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="font-display text-lg font-bold text-foreground tracking-wide">
          BECOMING THE SUCCESS
        </span>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-foreground/80 hover:text-gold font-body text-sm tracking-wide transition-colors duration-300">
              {link}
            </a>
          ))}
          <button className="px-5 py-2.5 rounded-lg bg-accent text-accent-foreground font-display font-semibold text-sm hover:scale-105 transition-transform">
            Work With Us
          </button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <motion.div
          className="md:hidden bg-navy-deep/98 backdrop-blur-md px-6 pb-6"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
        >
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="block py-3 text-foreground/80 hover:text-gold font-body transition-colors" onClick={() => setOpen(false)}>
              {link}
            </a>
          ))}
          <button className="mt-3 w-full px-5 py-3 rounded-lg bg-accent text-accent-foreground font-display font-semibold">
            Work With Us
          </button>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
