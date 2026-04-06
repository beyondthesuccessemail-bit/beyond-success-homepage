import logo from "@/assets/logo.png";
import { Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "@/lib/services";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V9.4a8.16 8.16 0 0 0 4.77 1.52V7.48a4.85 4.85 0 0 1-1.01-.79Z" />
  </svg>
);

const Footer = () => (
  <footer className="bg-navy-deep border-t border-border px-6 py-12">
    <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
      <div>
        <img src={logo} alt="Beyond The Success" className="h-10 w-auto mb-4 object-contain" />
        <p className="text-muted-foreground text-sm font-body">
          Marketing that cares. Born from real success stories.
        </p>
        <a href="mailto:hello@becomingthesuccess.com" className="text-muted-foreground text-xs font-body hover:text-gold transition-colors mt-2 block truncate">hello@becomingthesuccess.com</a>
      </div>
      <div>
        <h4 className="font-display font-bold text-foreground mb-4">Company</h4>
        <div className="space-y-2 text-sm text-muted-foreground font-body">
          <p className="hover:text-gold cursor-pointer transition-colors">About</p>
          <p className="hover:text-gold cursor-pointer transition-colors">Careers</p>
          <p className="hover:text-gold cursor-pointer transition-colors">Contact</p>
        </div>
      </div>
      <div>
        <h4 className="font-display font-bold text-foreground mb-4">Services</h4>
        <div className="space-y-2 text-sm text-muted-foreground font-body">
          {services.map((svc) => (
            <Link
              key={svc.slug}
              to={`/services/${svc.slug}`}
              className="block hover:text-gold transition-colors"
            >
              {svc.title}
            </Link>
          ))}
        </div>
      </div>
      <div>
        <h4 className="font-display font-bold text-foreground mb-4">Follow Us</h4>
        <div className="flex gap-3">
          {[
            { Icon: Instagram, href: "https://www.instagram.com/beyond.the.success" },
            { Icon: Youtube, href: "https://www.youtube.com/channel/UC7U1EqGUfl3iz7Qa0geKFQw" },
            { Icon: TikTokIcon, href: "https://www.tiktok.com/@beyond.thesuccess?_r=1&_t=ZN-95JUBFNlsLy" },
          ].map(({ Icon, href }, i) => (
            <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border-glow flex items-center justify-center hover:bg-accent hover:text-accent-foreground cursor-pointer transition-colors">
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-border text-center text-muted-foreground text-sm font-body">
      © 2026 Beyond The Success. All rights reserved.
    </div>
  </footer>
);

export default Footer;
