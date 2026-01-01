import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NAV_LINKS } from '@/config/constants';
import { cn } from '@/lib/utils';
import logo from '@/assets/logo.png';
import mainLogo from '@/assets/main-logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'bg-background/95 backdrop-blur-xl shadow-soft py-3'
          : 'bg-transparent py-5'
      )}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="w-16 h-14 from-primary to-accent rounded-xl flex items-center justify-center shadow-glow"
            >
              {/* <Leaf className="w-6 h-6 text-primary-foreground" /> */}
              <img src={mainLogo} alt="VerdeVida Energies" className="object-contain" />

            </motion.div>
            <div className="flex flex-col">
              {/* <span className="font-outfit font-bold text-xl text-foreground tracking-tight">
                VERDEVIDAsd
              </span>
              <span className="text-[10px] text-muted-foreground font-medium tracking-widest uppercase">
                Energies
              </span> */}
              <img src={logo} alt="VerdeVida Energies" className="h-14 object-contain" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300',
                  location.pathname === link.path
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to="/contact">
              <Button variant="default" size="lg">
                Get a Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-4 overflow-hidden"
            >
              <div className="bg-card rounded-2xl shadow-card p-4 space-y-2">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={cn(
                      'block px-4 py-3 rounded-xl font-medium transition-all duration-300',
                      location.pathname === link.path
                        ? 'text-primary bg-primary/10'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link to="/contact" className="block mt-4">
                  <Button variant="default" className="w-full" size="lg">
                    Get a Quote
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
