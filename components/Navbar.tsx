
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Fleet', href: '#fleet' },
    { name: 'Harbors', href: '#destinations' },
    { name: 'Concierge', href: '#concierge' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const offset = 80; // Account for fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      window.history.pushState(null, '', href);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-[90] px-6 md:px-12 py-6 md:py-8 flex justify-between items-center bg-gradient-to-b from-[#080C10]/95 via-[#080C10]/70 to-transparent backdrop-blur-[4px]">
      <div className="flex items-center gap-8">
        <a 
          href="#hero" 
          onClick={(e) => handleNavClick(e, '#hero')}
          className="font-serif text-xl md:text-2xl tracking-[0.5em] uppercase text-[#FDFCF0] font-light"
        >
          NADAL
        </a>
      </div>
      
      <div className="hidden md:flex items-center gap-10">
        <div className="flex gap-8 text-[8px] tracking-[0.4em] uppercase font-medium text-[#FDFCF0]/50">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)}
              className="hover:text-[#C5A27D] transition-all duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#C5A27D] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <button 
          onClick={() => {
            const btn = document.getElementById('global-book-trigger');
            if (btn) btn.click();
          }}
          className="ml-4 border border-[#C5A27D]/30 px-6 py-2.5 text-[9px] tracking-[0.4em] uppercase font-bold text-[#C5A27D] hover:bg-[#C5A27D] hover:text-[#080C10] transition-all duration-500"
        >
          Book
        </button>
      </div>

      <div className="flex md:hidden items-center">
        <button className="text-[#C5A27D] p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#080C10] z-[100] flex flex-col items-center justify-center gap-8 transition-all duration-500 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none translate-y-[-10%]'}`}>
        <button className="absolute top-8 right-8 text-[#C5A27D]" onClick={() => setIsOpen(false)}>
          <X size={32} />
        </button>
        <span className="font-serif text-3xl tracking-[0.5em] uppercase text-[#FDFCF0] font-light mb-8">NADAL</span>
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href} 
            className="text-lg tracking-[0.5em] uppercase font-light text-[#FDFCF0]/80 hover:text-[#C5A27D]"
            onClick={(e) => handleNavClick(e, link.href)}
          >
            {link.name}
          </a>
        ))}
        <button 
          onClick={() => {
            setIsOpen(false);
            const btn = document.getElementById('global-book-trigger');
            if (btn) btn.click();
          }}
          className="mt-4 border border-[#C5A27D] px-10 py-4 text-[10px] tracking-[0.4em] uppercase font-bold text-[#C5A27D]"
        >
          Book Now
        </button>
      </div>
    </nav>
  );
};
