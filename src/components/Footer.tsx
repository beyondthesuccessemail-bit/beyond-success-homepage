import logo from "@/assets/logo.png";
import { Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

const Footer = () => (
  <footer className="bg-navy-deep border-t border-border px-6 py-12">
    <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
      <div>
        <img src={logo} alt="Beyond The Success" className="h-10 w-auto mb-4 object-contain" />
        <p className="text-muted-foreground text-sm font-body">
          Marketing that cares. Born from real success stories.
        </p>
      </div>
      <div>
        <h4 className="font-display font-bold text-foreground mb-4">Company</h4>
        <div className="space-y-2 text-sm text-muted-foreground font-body">
          <p className="hover:text-gold cursor-pointer transition-colors">About</p>
          <p className="hover:text-gold cursor-pointer transition-colors">Services</p>
          <p className="hover:text-gold cursor-pointer transition-colors">Careers</p>
          <p className="hover:text-gold cursor-pointer transition-colors">Contact</p>
        </div>
      </div>
      <div>
        <h4 className="font-display font-bold text-foreground mb-4">Resources</h4>
        <div className="space-y-2 text-sm text-muted-foreground font-body">
          <p className="hover:text-gold cursor-pointer transition-colors">Blog</p>
          <p className="hover:text-gold cursor-pointer transition-colors">Podcast</p>
          <p className="hover:text-gold cursor-pointer transition-colors">Case Studies</p>
          <p className="hover:text-gold cursor-pointer transition-colors">Newsletter</p>
        </div>
      </div>
      <div>
        <h4 className="font-display font-bold text-foreground mb-4">Follow Us</h4>
        <div className="flex gap-3">
          {[
            { Icon: Instagram, href: "https://www.instagram.com/beyond.the.success" },
            { Icon: Youtube, href: "https://www.youtube.com/channel/UC7U1EqGUfl3iz7Qa0geKFQw" },
            { Icon: Youtube, href: "https://www.youtube.com/channel/UC7U1EqGUfl3iz7Qa0geKFQw" },
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
