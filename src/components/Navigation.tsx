import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageSquare, Gauge, Menu as MenuIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Logo from './Logo';

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Fleet / Semi', href: '/fleet' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-slate-900 border-b-4 border-primary px-4 md:px-8 py-3 md:py-4`}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <Logo className="w-14 h-14 md:w-20 md:h-20 transition-transform group-hover:scale-105" />
            <div className="leading-none">
              <span className="text-lg md:text-xl font-black tracking-tighter uppercase block text-white">Lowcountry</span>
              <span className="text-xs md:text-sm font-bold text-primary-light uppercase tracking-widest leading-none">Auto Shine</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-xs font-black uppercase tracking-widest transition-colors hover:text-primary-light ${
                    location.pathname === link.href ? 'text-primary-light' : 'text-gray-400'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <div className="flex items-center gap-6 border-l border-slate-800 pl-8">
              <div className="text-right">
                <p className="text-[10px] text-gray-500 uppercase tracking-tighter">Serving Summerville & Charleston</p>
                <p className="text-lg font-black text-primary-light leading-none">(843) 900-1754</p>
              </div>
              <Link
                to="/contact"
                className="bg-primary hover:bg-primary-light text-slate-900 font-black py-2 px-6 rounded-full transition-colors text-xs uppercase tracking-widest shadow-lg shadow-primary/20"
              >
                Book Now
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <MenuIcon size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-slate-900 border-t border-slate-800 shadow-xl md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-black uppercase tracking-tighter py-2 ${location.pathname === link.href ? 'text-primary' : 'text-gray-400'}`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="bg-primary text-slate-900 text-center py-4 rounded-xl font-black uppercase tracking-widest mt-2 shadow-lg"
              >
                Book Now
              </Link>
              <div className="flex justify-between items-center mt-4 pt-4 border-t border-slate-800">
                <a href="tel:8439001754" className="flex items-center gap-2 text-primary font-bold uppercase text-xs">
                  <Phone size={18} /> Call Us
                </a>
                <a href="sms:8439001754" className="flex items-center gap-2 text-gray-400 font-bold uppercase text-xs">
                  <MessageSquare size={18} /> Text Us
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-24 md:pb-8 border-t-8 border-primary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <Logo className="w-16 h-16 md:w-20 md:h-20" />
              <div className="leading-none">
                <span className="text-2xl font-black tracking-tighter uppercase block text-white">Lowcountry</span>
                <span className="text-sm font-bold text-primary-light uppercase tracking-widest leading-none">Auto Shine</span>
              </div>
            </Link>
            <p className="text-gray-400 max-w-md mb-8 leading-relaxed">
              Professional mobile detailing serving Summerville, Charleston, and the surrounding Lowcountry areas. We bring the high-end showroom results directly to you.
            </p>
            <div className="flex gap-4">
              <a href="tel:8439001754" className="w-12 h-12 rounded bg-slate-800 flex items-center justify-center text-primary-light hover:bg-primary hover:text-slate-900 transition-all shadow-lg">
                <Phone size={20} />
              </a>
              <a href="sms:8439001754" className="w-12 h-12 rounded bg-slate-800 flex items-center justify-center text-primary-light hover:bg-primary hover:text-slate-900 transition-all shadow-lg">
                <MessageSquare size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-8 text-primary-light">Navigation</h4>
            <ul className="space-y-4 text-sm font-bold text-gray-500 uppercase tracking-widest">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/fleet" className="hover:text-white transition-colors">Fleet / Semi</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Get Quote</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-8 text-primary-light">Service Area</h4>
            <ul className="space-y-4 text-sm font-bold text-gray-500 uppercase tracking-widest">
              <li>Summerville, SC</li>
              <li>Charleston, SC</li>
              <li>North Charleston, SC</li>
              <li>Mount Pleasant, SC</li>
              <li>Goose Creek, SC</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-black uppercase tracking-widest text-gray-600">
          <p>© {new Date().getFullYear()} Lowcountry Auto Shine. Results Driven Detail.</p>
          <div className="flex gap-6">
            <span className="hover:text-gray-400 cursor-pointer">Privacy</span>
            <span className="hover:text-gray-400 cursor-pointer">Terms</span>
          </div>
        </div>
      </div>
      
      {/* Mobile Sticky CTA Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-primary text-slate-900 border-t border-primary-light z-50 shadow-[0_-4px_20px_rgba(32,201,151,0.3)]">
        <a 
          href="tel:8439001754" 
          className="w-full flex items-center justify-center gap-2 py-4 font-black uppercase tracking-widest text-sm"
        >
          <Phone size={18} fill="currentColor" /> Call Us: (843) 900-1754
        </a>
      </div>
    </footer>
  );
};
