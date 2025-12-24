
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { LOGO_IMAGE } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Apartments', href: '#apartments' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-2 shadow-xl' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-4 group">
          <img 
            src={LOGO_IMAGE} 
            alt="Signature Villa Logo" 
            className="w-12 h-12 md:w-14 md:h-14 object-cover rounded-full border border-gold/40 group-hover:border-gold transition-all duration-500 shadow-[0_0_20px_rgba(212,175,55,0.1)] group-hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]"
          />
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-serif text-gold font-bold tracking-tighter leading-none group-hover:text-beige transition-colors uppercase gold-text-gradient radiant-glow">Signature</span>
            <span className="text-[8px] md:text-[10px] font-sans text-beige/50 tracking-[0.4em] uppercase -mt-0.5 group-hover:text-gold transition-colors font-bold">Villa Apartments</span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-beige hover:text-gold transition-colors text-[11px] font-bold tracking-[0.3em] uppercase"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-gold text-charcoal px-8 py-3 rounded-sm font-bold uppercase text-[11px] tracking-[0.3em] hover:bg-beige transition-all shadow-[0_10px_30px_rgba(212,175,55,0.3)]"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gold p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`fixed inset-0 bg-charcoal z-40 md:hidden transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-12">
          <div className="text-center mb-8 flex flex-col items-center">
             <img src={LOGO_IMAGE} className="w-20 h-20 rounded-full border border-gold mb-6 shadow-[0_0_40px_rgba(212,175,55,0.2)] radiant-glow" alt="Logo" />
             <span className="text-4xl font-serif text-gold font-bold block uppercase tracking-tighter gold-text-gradient">Signature</span>
             <span className="text-[10px] font-sans text-beige/50 tracking-[0.5em] uppercase font-bold">Villa Apartments</span>
          </div>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-beige text-3xl font-serif tracking-widest hover:text-gold transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-gold text-charcoal px-12 py-5 rounded-sm font-bold uppercase text-xl tracking-widest shadow-2xl"
            onClick={() => setIsOpen(false)}
          >
            Reserve Your Stay
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
