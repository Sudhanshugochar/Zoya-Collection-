import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const footerLinks = {
  collections: ['Women\'s Wear', 'Men\'s Wear', 'Festive Collection', 'Designer Picks'],
  quickLinks: ['About Us', 'Visit Store', 'Lookbook', 'Contact'],
};

const socialLinks = [
  { icon: Instagram, href: 'https://www.instagram.com/zoyacollection11?igsh=M2QxaTFseWRycTRy', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
];

const Footer = () => {
  return (
    <footer className="bg-secondary/20 border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <motion.a
              href="#"
              className="inline-block text-3xl font-display font-semibold text-gradient-gold tracking-widest mb-6"
              whileHover={{ scale: 1.02 }}
            >
              ZOYA
            </motion.a>
            <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">
              Where elegance meets craftsmanship. Experience luxury fashion at our boutique.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Collections */}
          <div>
            <h4 className="text-sm font-body font-semibold tracking-wider uppercase mb-6">
              Collections
            </h4>
            <ul className="space-y-3">
              {footerLinks.collections.map((link) => (
                <li key={link}>
                  <a
                    href="#collections"
                    className="text-muted-foreground font-body text-sm hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-body font-semibold tracking-wider uppercase mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-muted-foreground font-body text-sm hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Store Hours */}
          <div>
            <h4 className="text-sm font-body font-semibold tracking-wider uppercase mb-6">
              Store Hours
            </h4>
            <div className="text-muted-foreground font-body text-sm space-y-2">
              <p>Monday - Saturday</p>
              <p className="text-foreground">10:00 AM - 9:00 PM</p>
              <p className="mt-4">Sunday</p>
              <p className="text-foreground">11:00 AM - 7:00 PM</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground font-body text-xs">
            © 2024 Zoya Collection. All rights reserved.
          </p>
          <div className="flex gap-6 text-muted-foreground font-body text-xs">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>

        {/* AEON Labs Credit */}
        <motion.div 
          className="mt-8 pt-6 border-t border-border/50 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-sm font-body text-muted-foreground">
            Made with ❤️ by{' '}
            <span className="text-gradient-gold font-semibold tracking-wide">AEON Labs</span>
          </p>
          <p className="text-xs text-muted-foreground/70 mt-1 italic">
            Create Website for Future
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
