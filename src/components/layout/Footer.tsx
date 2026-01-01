import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Leaf, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';
import { COMPANY_INFO, NAV_LINKS } from '@/config/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialIcons = [
    { icon: Linkedin, href: COMPANY_INFO.social.linkedin, label: 'LinkedIn' },
    { icon: Twitter, href: COMPANY_INFO.social.twitter, label: 'Twitter' },
    { icon: Facebook, href: COMPANY_INFO.social.facebook, label: 'Facebook' },
    { icon: Instagram, href: COMPANY_INFO.social.instagram, label: 'Instagram' },
  ];

  return (
    <footer className="bg-gradient-to-b from-muted/50 to-muted pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center"
              >
                <Leaf className="w-6 h-6 text-primary-foreground" />
              </motion.div>
              <div className="flex flex-col">
                <span className="font-outfit font-bold text-xl text-foreground tracking-tight">
                  VERDEVIDA
                </span>
                <span className="text-[10px] text-muted-foreground font-medium tracking-widest uppercase">
                  Energies
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Pioneering sustainable energy solutions for a greener tomorrow. 
              Our HTS panels revolutionize how businesses approach cooling efficiency.
            </p>
            <div className="flex items-center gap-3">
              {socialIcons.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-outfit font-semibold text-foreground mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-outfit font-semibold text-foreground mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-muted-foreground text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                  <div>
                    {COMPANY_INFO.address.line1}<br />
                    {COMPANY_INFO.address.line2}<br />
                    {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state}<br />
                    {COMPANY_INFO.address.country} - {COMPANY_INFO.address.pincode}
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-outfit font-semibold text-foreground mb-6">Stay Updated</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Subscribe to our newsletter for the latest updates on sustainable energy solutions.
            </p>
            {/* <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
              />
              <button
                type="submit"
                className="w-full px-4 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors"
              >
                Subscribe
              </button>
            </form> */}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm text-center md:text-left">
              © {currentYear} {COMPANY_INFO.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
