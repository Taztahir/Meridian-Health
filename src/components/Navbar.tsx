import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, HeartPulse, Phone } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';

interface NavbarProps {
  onBookClick: () => void;
}

export default function Navbar({ onBookClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/80 backdrop-blur-md shadow-md border-slate-100 py-3'
        : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2 group">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary-light text-primary group-hover:scale-105 transition-transform duration-300 shadow-sm border border-accent/20">
              <HeartPulse className="w-6 h-6 stroke-[2]" />
            </div>
            <span className="font-bold text-2xl tracking-tight text-text-primary">
              Meridian <span className="text-primary font-extrabold">Health</span>
            </span>
          </NavLink>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  `relative px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${isActive
                    ? 'text-primary bg-primary-light/60'
                    : 'text-text-secondary hover:text-text-primary hover:bg-slate-50'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavLine"
                        className="absolute bottom-1 left-3 right-3 h-[2px] bg-primary rounded-full"
                        transition={{ type: 'spring' as const, stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="tel:911"
              className="flex items-center space-x-2 px-4 py-2.5 rounded-full border border-danger/20 bg-danger-light text-danger font-semibold text-sm hover:bg-danger hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-danger/10 group cursor-pointer"
            >
              <Phone className="w-4 h-4 group-hover:animate-bounce" />
              <span>Emergency 911</span>
            </a>
            <motion.button
              onClick={onBookClick}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-2.5 rounded-full bg-primary hover:bg-primary-hover text-white font-semibold text-sm shadow-md hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 cursor-pointer"
            >
              Book Appointment
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-text-secondary hover:text-text-primary hover:bg-slate-100 focus:outline-none transition-colors"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-white border-b border-slate-100 overflow-hidden shadow-inner"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-xl text-base font-semibold transition-colors ${isActive
                      ? 'bg-primary-light text-primary'
                      : 'text-text-secondary hover:bg-slate-50 hover:text-text-primary'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
              <div className="pt-4 border-t border-slate-100 flex flex-col space-y-3 px-0">
                <a
                  href="tel:911"
                  className="flex items-center justify-center space-x-2 px-4 py-3 rounded-xl border border-danger/20 bg-danger-light text-danger font-bold hover:bg-danger hover:text-white transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  <span>Emergency 911</span>
                </a>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onBookClick();
                  }}
                  className="w-full px-4 py-3 rounded-xl bg-primary hover:bg-primary-hover text-white font-bold text-center shadow-md transition-all duration-300 cursor-pointer"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
