
import React from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-8 py-10 flex justify-between items-center bg-gradient-to-b from-[#080C10]/60 to-transparent backdrop-blur-[2px]">
      <div className="flex items-center">
        <span className="font-serif text-2xl tracking-[0.5em] uppercase text-[#FDFCF0] font-light">NADAL</span>
      </div>
      
      <div className="hidden md:flex gap-12 text-[10px] tracking-[0.4em] uppercase font-medium text-[#FDFCF0]/60">
        <a href="#fleet" className="hover:text-[#C5A27D] transition-all duration-300">Fleet</a>
        <a href="#destinations" className="hover:text-[#C5A27D] transition-all duration-300">Harbors</a>
        <a href="#contact" className="hover:text-[#C5A27D] transition-all duration-300">Contact</a>
      </div>

      <button className="md:hidden text-[#C5A27D]" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#080C10] p-12 flex flex-col items-center gap-8 text-[11px] tracking-[0.4em] uppercase font-bold border-b border-[#C5A27D]/10 animate-in fade-in slide-in-from-top-4 duration-500">
          <a href="#fleet" onClick={() => setIsOpen(false)}>Fleet</a>
          <a href="#destinations" onClick={() => setIsOpen(false)}>Harbors</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
};
