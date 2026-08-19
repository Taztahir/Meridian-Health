import { HeartPulse, Phone, MapPin, ExternalLink } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { name: 'Hospital Info', href: '#hospital-info' },
    { name: 'Careers', href: '#careers' },
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms of Service', href: '#terms' },
  ];

  const departments = [
    { name: 'Cardiology', href: '#services' },
    { name: 'Neurology', href: '#services' },
    { name: 'Pediatrics', href: '#services' },
    { name: 'Diagnostics', href: '#services' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-white border-t border-slate-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

          {/* Logo & Description */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            <a href="#home" className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary-light text-primary">
                <HeartPulse className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-text-primary">
                Meridian <span className="text-primary font-black">Health</span>
              </span>
            </a>
            <p className="text-sm text-text-secondary leading-relaxed max-w-sm font-light">
              Compassionate care for a healthier tomorrow. Professional healthcare services focused on you.
            </p>
            <span className="text-xs text-text-secondary pt-4 block font-light">
              &copy; {currentYear} Meridian Health Group. All rights reserved.
            </span>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 lg:col-start-6 flex flex-col space-y-4">
            <h4 className="font-bold text-sm text-text-primary tracking-wider uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-primary transition-colors duration-200 flex items-center space-x-1 group font-light"
                  >
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Departments */}
          <div className="lg:col-span-2 flex flex-col space-y-4">
            <h4 className="font-bold text-sm text-text-primary tracking-wider uppercase">
              Departments
            </h4>
            <ul className="space-y-2.5">
              {departments.map((dept) => (
                <li key={dept.name}>
                  <a
                    href={dept.href}
                    className="text-sm text-text-secondary hover:text-primary transition-colors duration-200 font-light"
                  >
                    {dept.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3 flex flex-col space-y-4">
            <h4 className="font-bold text-sm text-text-primary tracking-wider uppercase">
              Contact Us
            </h4>
            <ul className="space-y-3.5">
              <li className="flex items-start space-x-2.5 text-sm text-text-secondary font-light">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>123 Wellness Way, City</span>
              </li>
              <li className="flex items-center space-x-2.5 text-sm text-text-secondary font-light">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="tel:5551234567" className="hover:text-primary transition-colors">
                  (555) 123-4567
                </a>
              </li>

            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <a href="#about" className="text-xs text-text-secondary hover:text-primary">About Us</a>
            <span className="text-slate-300">•</span>
            <a href="#services" className="text-xs text-text-secondary hover:text-primary">Services</a>
            <span className="text-slate-300">•</span>
            <a href="#contact" className="text-xs text-text-secondary hover:text-primary">Help Center</a>
          </div>
          <span className="text-xs text-text-secondary flex items-center space-x-1 font-light">
            <span>Built for excellence</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </span>
        </div>
      </div>
    </footer>
  );
}
