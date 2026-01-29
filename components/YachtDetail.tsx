import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight,
  MapPin,
  Anchor, 
  Maximize2, 
  Users, 
  Bed, 
  Gauge, 
  Share2, 
  Heart,
  Droplets,
  Wind,
  Compass,
  Zap,
  Grid,
  X
} from 'lucide-react';
import { CharterItem } from '../types';

interface YachtDetailProps {
  yacht: CharterItem;
  onBack: () => void;
  onBook: () => void;
}

export const YachtDetail: React.FC<YachtDetailProps> = ({ yacht, onBack, onBook }) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Lock scroll when lightbox is open
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [yacht, lightboxIndex]);

  const images = yacht.gallery || [yacht.image];
  const displayImages = images.slice(0, 4); // 1 main + 3 small
  const totalCount = images.length;

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % totalCount);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + totalCount) % totalCount);
    }
  };

  // Helper for stats
  const guests = yacht.details.match(/(\d+)/)?.[0] || '12';
  const cabins = yacht.details.toLowerCase().includes('cabin') ? yacht.details.match(/(\d+)/)?.[0] : '4';

  return (
    <div className="bg-[#080C10] min-h-screen text-[#FDFCF0] selection:bg-gold selection:text-black relative">
      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-300"
          onClick={() => setLightboxIndex(null)}
        >
          <button 
            className="absolute top-8 right-8 text-white/40 hover:text-white transition-colors z-[210]"
            onClick={() => setLightboxIndex(null)}
          >
            <X size={32} strokeWidth={1} />
          </button>

          <button 
            className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 text-white/20 hover:text-white transition-all transform hover:scale-110 z-[210]"
            onClick={handlePrev}
          >
            <ChevronLeft size={48} strokeWidth={1} />
          </button>
          
          <button 
            className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 text-white/20 hover:text-white transition-all transform hover:scale-110 z-[210]"
            onClick={handleNext}
          >
            <ChevronRight size={48} strokeWidth={1} />
          </button>

          <div className="relative max-w-7xl w-full h-full flex flex-col items-center justify-center gap-6">
            <img 
              src={images[lightboxIndex]} 
              className="max-h-[85vh] max-w-full object-contain shadow-2xl animate-in zoom-in-95 duration-500"
              alt={`${yacht.title} view ${lightboxIndex + 1}`}
              onClick={(e) => e.stopPropagation()}
            />
            <div className="text-[10px] tracking-[0.4em] uppercase font-bold text-white/40">
              {lightboxIndex + 1} / {totalCount} — {yacht.title}
            </div>
          </div>
        </div>
      )}

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full z-[100] px-6 md:px-12 py-5 flex justify-between items-center bg-black/40 backdrop-blur-md border-b border-white/5">
        <button 
          onClick={onBack}
          className="flex items-center gap-3 text-[7.5px] tracking-[0.4em] uppercase font-bold text-white/50 hover:text-white transition-all group"
        >
          <ChevronLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
          Back to Collection
        </button>
        <div className="hidden md:flex flex-col items-center">
          <div className="font-serif text-lg tracking-[0.5em] uppercase font-light opacity-60">
            NADAL
          </div>
          <div className="text-[6px] tracking-[0.4em] uppercase text-gold/40 mt-1 font-bold">
            Elegance on water since 1984
          </div>
        </div>
        <div className="flex items-center gap-6">
           <button className="text-white/30 hover:text-gold transition-colors"><Share2 size={14} /></button>
           <button className="text-white/30 hover:text-red-400 transition-colors"><Heart size={14} /></button>
        </div>
      </nav>

      {/* Hero Header Area */}
      <div className="pt-24 md:pt-32 px-6 md:px-12 max-w-[1600px] mx-auto">
        {/* Title and Location */}
        <div className="mb-8">
          <h1 className="font-serif text-4xl md:text-5xl font-light tracking-tight text-white mb-2">
            {yacht.title} <span className="mx-3 text-white/20 font-sans font-thin">|</span> <span className="text-white/60 font-sans text-2xl align-middle">{yacht.subtitle}</span>
          </h1>
          <div className="flex items-center gap-2 text-white/40 text-[10px] tracking-widest uppercase font-bold">
            <MapPin size={12} className="text-gold" />
            Ibiza & Formentera
          </div>
        </div>

        {/* Premium Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 h-[450px] md:h-[700px] overflow-hidden rounded-sm">
          {/* Main Featured Image (Left) */}
          <div 
            className="md:col-span-3 h-full overflow-hidden relative group cursor-zoom-in"
            onClick={() => setLightboxIndex(0)}
          >
            <img 
              src={displayImages[0]} 
              alt={`${yacht.title} main`} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-all" />
          </div>

          {/* Side Gallery Column (Right) */}
          <div className="hidden md:grid grid-rows-3 gap-2 h-full">
            {displayImages.slice(1, 4).map((img, idx) => (
              <div 
                key={idx} 
                className="relative group overflow-hidden cursor-zoom-in"
                onClick={() => setLightboxIndex(idx + 1)}
              >
                <img 
                  src={img} 
                  alt={`${yacht.title} detail ${idx + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all" />
                
                {/* All Photos Overlay on last visible item */}
                {idx === 2 && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center pointer-events-none group-hover:bg-black/30 transition-all">
                    <div className="flex flex-col items-center gap-2">
                      <Grid size={20} className="text-white/80" />
                      <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-white">
                        All Photos ({totalCount})
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Tagline separator */}
        <div className="flex items-center justify-center py-12">
            <div className="w-12 h-[1px] bg-gold/30" />
            <span className="px-6 text-[7.5px] tracking-[0.6em] uppercase text-gold/40 font-bold">
              Elegance on water since 1984
            </span>
            <div className="w-12 h-[1px] bg-gold/30" />
        </div>
      </div>

      {/* Main Content Sections */}
      <main className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-12 gap-20">
          
          {/* Information Column */}
          <div className="lg:col-span-8 space-y-24">
            
            {/* Overview */}
            <div className="max-w-2xl">
              <span className="text-gold text-[7.5px] tracking-[0.6em] uppercase font-bold block mb-8">YACHT OVERVIEW</span>
              <p className="font-serif text-lg md:text-xl italic font-light leading-[1.8] text-white/70">
                {yacht.fullDescription}
              </p>
            </div>

            {/* Technical Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8 py-16 border-y border-white/5">
              {[
                { label: 'Length', value: yacht.length, icon: Maximize2 },
                { label: 'Guests', value: `${guests} PAX`, icon: Users },
                { label: 'Cabins', value: cabins, icon: Bed },
                { label: 'Cruising', value: yacht.specs?.find(s => s.label.toLowerCase().includes('speed'))?.value || '25kn', icon: Gauge },
                { label: 'Year', value: yacht.year, icon: Anchor },
                { label: 'Crew', value: yacht.crew?.split(' ')[0] || 'Professional', icon: Compass }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col gap-3 group">
                   <div className="flex items-center gap-3">
                      <stat.icon size={12} className="text-gold opacity-50 group-hover:opacity-100 transition-opacity" />
                      <span className="text-[7.5px] tracking-[0.3em] uppercase text-white/30 font-bold">{stat.label}</span>
                   </div>
                   <span className="text-lg font-serif italic text-white/90">{stat.value}</span>
                </div>
              ))}
            </div>

            {/* Detailed Equipment list */}
            <div className="grid md:grid-cols-2 gap-16">
               <div className="space-y-10">
                  <h3 className="text-[8px] tracking-[0.5em] uppercase text-gold font-bold">Engineering</h3>
                  <div className="space-y-1">
                    {yacht.specs?.map((spec, i) => (
                      <div key={i} className="flex justify-between items-center py-4 border-b border-white/5">
                        <span className="text-[7.5px] tracking-[0.2em] uppercase text-white/30">{spec.label}</span>
                        <span className="text-[10px] italic text-white/60">{spec.value}</span>
                      </div>
                    ))}
                  </div>
               </div>

               <div className="space-y-10">
                  <h3 className="text-[8px] tracking-[0.5em] uppercase text-gold font-bold">Life On Board</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {yacht.amenities?.map((amenity, i) => (
                      <div key={i} className="flex items-center gap-4 group">
                         <div className="w-1 h-1 rounded-full bg-gold/30 group-hover:bg-gold transition-colors" />
                         <span className="text-[10px] tracking-widest uppercase text-white/40 group-hover:text-white transition-colors">{amenity}</span>
                      </div>
                    ))}
                  </div>
               </div>
            </div>
          </div>

          {/* Sidebar Inquiry */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-8">
               <div className="bg-[#0D1217] border border-white/5 p-12">
                  <div className="mb-10">
                    <span className="text-[7.5px] tracking-[0.4em] uppercase text-white/30 block mb-2 font-bold">Bespoke Quotation</span>
                    <div className="flex items-baseline gap-2">
                       <span className="text-5xl font-serif text-gold italic">{yacht.price.split(' ')[0]}</span>
                       <span className="text-[8px] tracking-[0.2em] uppercase text-white/40 font-bold">{yacht.price.split(' ').slice(1).join(' ')}</span>
                    </div>
                  </div>

                  <div className="space-y-5 pt-8 border-t border-white/5 mb-10 text-white/40">
                    <div className="flex items-center gap-4">
                      <Droplets size={14} className="text-gold/40" />
                      <span className="text-[9px] italic">Excluding fuel costs & VAT</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Wind size={14} className="text-gold/40" />
                      <span className="text-[9px] italic">Complimentary soft drinks & snacks</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Zap size={14} className="text-gold/40" />
                      <span className="text-[9px] italic">Professional Captain & Stewardess</span>
                    </div>
                  </div>

                  <button 
                    onClick={onBook}
                    className="w-full bg-[#C5A27D] text-[#080C10] py-5 text-[8.5px] tracking-[0.5em] uppercase font-bold hover:bg-white transition-all shadow-xl active:scale-[0.98]"
                  >
                    Request Availability
                  </button>
                  <button className="w-full mt-3 bg-white/5 border border-white/5 text-white/30 py-4 text-[7.5px] tracking-[0.4em] uppercase font-bold hover:bg-white/10 transition-all italic">
                    Download Fleet PDF
                  </button>
               </div>
               
               <div className="p-8 text-center bg-white/[0.02] border border-white/5">
                  <span className="text-[7.5px] tracking-[0.5em] uppercase text-white/20 block mb-4">Discrete Inquiry</span>
                  <p className="text-[10px] text-white/40 italic leading-relaxed">Our brokers are available 24/7 for custom itineraries and multi-day planning.</p>
               </div>
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#05080A] py-24 border-t border-white/5">
         <div className="max-w-7xl mx-auto px-6 text-center">
            <span className="font-serif text-3xl tracking-[0.8em] uppercase text-white/10 block mb-12">NADAL</span>
            <div className="flex flex-col md:flex-row justify-center items-center gap-12 text-[8px] tracking-[0.4em] uppercase font-bold text-white/30">
               <a href="#" className="hover:text-gold transition-colors">Safety Protocols</a>
               <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
               <a href="#" className="hover:text-gold transition-colors">Charter Terms</a>
            </div>
         </div>
      </footer>
    </div>
  );
};
