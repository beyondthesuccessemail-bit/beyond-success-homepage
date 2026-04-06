import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { services } from "@/lib/services";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "About", href: "/about", isRoute: true },
  { label: "Services", href: "/#services", hasDropdown: true },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
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
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Beyond The Success" className="h-8 w-auto object-contain" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div key={link.label} className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center gap-1 text-foreground/80 hover:text-gold font-body text-sm tracking-wide transition-colors duration-300"
                >
                  {link.label}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full mt-3 left-1/2 -translate-x-1/2 w-56 bg-navy-deep/98 backdrop-blur-md border border-border rounded-xl shadow-2xl overflow-hidden"
                    >
                      {services.map((svc) => (
                        <Link
                          key={svc.slug}
                          to={`/services/${svc.slug}`}
                          className="flex items-center gap-3 px-4 py-3 text-sm text-foreground/80 hover:text-gold hover:bg-accent/10 transition-colors font-body"
                        >
                          <svc.icon className="w-4 h-4 text-muted-foreground" />
                          {svc.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : link.isRoute ? (
              <Link
                key={link.label}
                to={link.href}
                className="text-foreground/80 hover:text-gold font-body text-sm tracking-wide transition-colors duration-300"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="text-foreground/80 hover:text-gold font-body text-sm tracking-wide transition-colors duration-300"
              >
                {link.label}
              </a>
            )
          )}
          <Link
            to="/contact"
            className="px-5 py-2.5 rounded-lg bg-accent text-accent-foreground font-display font-semibold text-sm hover:scale-105 transition-transform"
          >
            Work With Us
          </Link>
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
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div key={link.label}>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex items-center justify-between w-full py-3 text-foreground/80 hover:text-gold font-body transition-colors"
                >
                  {link.label}
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 overflow-hidden"
                    >
                      {services.map((svc) => (
                        <Link
                          key={svc.slug}
                          to={`/services/${svc.slug}`}
                          className="flex items-center gap-3 py-2 text-sm text-foreground/60 hover:text-gold transition-colors font-body"
                          onClick={() => setOpen(false)}
                        >
                          <svc.icon className="w-4 h-4" />
                          {svc.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : link.isRoute ? (
              <Link
                key={link.label}
                to={link.href}
                className="block py-3 text-foreground/80 hover:text-gold font-body transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="block py-3 text-foreground/80 hover:text-gold font-body transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            )
          )}
          <Link
            to="/contact"
            className="mt-3 block w-full text-center px-5 py-3 rounded-lg bg-accent text-accent-foreground font-display font-semibold"
            onClick={() => setOpen(false)}
          >
            Work With Us
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
