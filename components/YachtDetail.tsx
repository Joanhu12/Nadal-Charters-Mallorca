import { Anchor, Bed, ChevronLeft, ChevronRight, Compass, Droplets, Gauge, Grid, Heart, MapPin, Maximize2, Share2, Users, Wind, X, Zap, MessageCircle } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { CharterItem } from '../types';

interface YachtDetailProps {
  yacht: CharterItem;
  onBack: () => void;
  onBook: () => void;
}

export const YachtDetail: React.FC<YachtDetailProps> = ({ yacht, onBack, onBook }) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollIndex, setScrollIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
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

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const index = Math.round(container.scrollLeft / container.clientWidth);
    setScrollIndex(index);
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

      {/* Top Header - Mobile and Desktop Navigation */}
      <nav className="fixed top-0 left-0 w-full z-[100] px-4 md:px-12 py-5 flex justify-between items-center bg-[#080C10]/60 backdrop-blur-xl border-b border-white/5">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 md:gap-3 text-[7.5px] md:text-[9px] tracking-[0.3em] md:tracking-[0.4em] uppercase font-bold text-white/50 hover:text-white transition-all group"
        >
          <ChevronLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
          Back to Collection
        </button>
        
        {/* Desktop Branding */}
        <div className="hidden md:flex flex-col items-center">
          <div className="font-serif text-lg tracking-[0.5em] uppercase font-light text-white">
            NADAL
          </div>
          <div className="text-[6px] tracking-[0.4em] uppercase text-gold/60 mt-0.5 font-bold">
            Elegance on water since 1984
          </div>
        </div>

        <div className="flex items-center gap-4 md:gap-6">
           <button className="text-white/40 hover:text-gold transition-colors"><Share2 size={16} strokeWidth={1.5} /></button>
           <button className="text-white/40 hover:text-red-400 transition-colors"><Heart size={16} strokeWidth={1.5} /></button>
        </div>
      </nav>

      {/* Main Container */}
      <div className="pt-24 md:pt-36 max-w-[1600px] mx-auto">
        
        {/* Detailed Page Header - Matching the second screenshot */}
        <header className="px-6 md:px-12 mb-10">
          <div className="flex flex-col md:flex-row md:items-baseline md:gap-8 mb-4">
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white">
              {yacht.title}
            </h1>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
               <div className="hidden md:block w-px h-12 bg-white/20" />
               <div className="text-2xl md:text-4xl text-white/60 font-light font-sans tracking-tight">
                  {yacht.subtitle.split('·')[0]}
                  <span className="text-white/20 ml-2">·</span>
               </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            <h2 className="text-xl md:text-3xl text-white/40 font-light tracking-tight">
               {yacht.subtitle.split('·')[1] || 'Charter Excellence'}
            </h2>
            <div className="flex items-center gap-2.5 text-gold/70 text-[10px] md:text-[12px] tracking-[0.2em] uppercase font-bold">
              <MapPin size={14} className="text-gold" />
              {yacht.location || 'Balearic Islands'}
            </div>
          </div>
        </header>

        {/* Dynamic Responsive Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:gap-2 px-0 md:px-12 mb-12">
          <div 
            className="md:col-span-3 aspect-[4/3] md:aspect-auto md:h-[700px] overflow-hidden relative group cursor-zoom-in"
            onClick={() => setLightboxIndex(0)}
          >
            <img 
              src={images[0]} 
              alt={`${yacht.title} main`} 
              className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
            />
            <div className="md:hidden absolute bottom-6 right-6 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-2 z-10">
               <Grid size={12} className="text-gold" />
               <span className="text-[9px] tracking-[0.1em] font-bold text-white/90">1 / {totalCount}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-1 md:grid-rows-3 gap-1 md:gap-2 mt-1 md:mt-0">
            {images.slice(1, 4).map((img, idx) => (
              <div 
                key={idx} 
                className={`relative group overflow-hidden cursor-zoom-in aspect-square md:aspect-auto ${idx === 2 ? 'hidden md:block' : ''}`}
                onClick={() => setLightboxIndex(idx + 1)}
              >
                <img 
                  src={img} 
                  alt={`${yacht.title} detail ${idx + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {((idx === 1 && totalCount > 3) || (idx === 2 && totalCount > 4)) && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center group-hover:bg-black/40 transition-all">
                    <div className="flex flex-col items-center gap-2">
                      <Grid size={24} className="text-gold/80" />
                      <span className="text-[9px] md:text-[10px] tracking-[0.2em] uppercase font-bold text-white">
                        All Photos ({totalCount})
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center py-12 px-6">
            <span className="text-[7.5px] md:text-[9px] tracking-[0.6em] md:tracking-[0.8em] uppercase text-white/20 font-bold text-center">
              Elegance on water since 1984
            </span>
        </div>
      </div>

      {/* Main Content Sections */}
      <main className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Information Column */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* Vessel Specifications (Characteristics) */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-16 gap-x-12 pb-20 border-b border-white/10">
              {[
                { label: 'Length Overall', value: yacht.length, icon: Maximize2 },
                { label: 'Guest Capacity', value: `${guests} Guests`, icon: Users },
                { label: 'Guest Cabins', value: cabins, icon: Bed },
                { label: 'Cruising Velocity', value: yacht.specs?.find(s => s.label.toLowerCase().includes('speed'))?.value || '25 Knots', icon: Gauge },
                { label: 'Construction', value: yacht.year, icon: Anchor },
                { label: 'Onboard Staff', value: yacht.crew, icon: Compass }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col gap-4">
                   <div className="flex items-center gap-3">
                      <stat.icon size={14} className="text-gold opacity-60" />
                      <span className="text-[8px] tracking-[0.3em] uppercase text-white/40 font-bold">{stat.label}</span>
                   </div>
                   <span className="text-lg md:text-xl font-serif italic text-white/90">{stat.value}</span>
                </div>
              ))}
            </div>

            {/* Check Availability Button - Mobile Only */}
            <div className="md:hidden py-4">
              <button 
                onClick={onBook}
                className="w-full flex items-center justify-center gap-4 bg-transparent border-2 border-[#C5A27D] py-6 rounded-sm text-[#C5A27D] hover:bg-[#C5A27D] hover:text-[#080C10] transition-all duration-500 group shadow-[0_0_40px_rgba(197,162,125,0.1)]"
              >
                <MessageCircle size={18} className="group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                <span className="text-[10px] tracking-[0.5em] uppercase font-black">Check Availability</span>
              </button>
            </div>

            {/* Technical & Amenities Grid */}
            <div className="grid md:grid-cols-2 gap-20 py-10 border-b border-white/10">
               <div className="space-y-12">
                  <h3 className="text-[9px] tracking-[0.5em] uppercase text-gold font-bold">Naval Architecture</h3>
                  <div className="space-y-0.5">
                    {yacht.specs?.map((spec, i) => (
                      <div key={i} className="flex justify-between items-center py-5 border-b border-white/5 group hover:border-gold/30 transition-colors">
                        <span className="text-[8px] tracking-[0.2em] uppercase text-white/40 group-hover:text-white/60 transition-colors">{spec.label}</span>
                        <span className="text-[11px] font-medium text-white/70 italic">{spec.value}</span>
                      </div>
                    ))}
                  </div>
               </div>

               <div className="space-y-12">
                  <h3 className="text-[9px] tracking-[0.5em] uppercase text-gold font-bold">Bespoke Amenities</h3>
                  <div className="grid grid-cols-1 gap-5">
                    {yacht.amenities?.map((amenity, i) => (
                      <div key={i} className="flex items-center gap-5 group">
                         <div className="w-1.5 h-1.5 rounded-full border border-gold/40 group-hover:bg-gold transition-all duration-500" />
                         <span className="text-[11px] tracking-widest uppercase text-white/50 group-hover:text-white transition-colors">{amenity}</span>
                      </div>
                    ))}
                  </div>
               </div>
            </div>

            {/* The Experience Narrative */}
            <div className="max-w-xl py-10">
              <span className="text-gold text-[7px] tracking-[0.5em] uppercase font-bold block mb-6">THE EXPERIENCE</span>
              <p className="font-serif text-base md:text-lg italic font-light leading-relaxed text-white/60">
                {yacht.fullDescription}
              </p>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-10">
               <div className="bg-[#0D1217] border border-white/10 p-10 md:p-14 shadow-3xl">
                  <div className="mb-12">
                    <span className="text-[8px] tracking-[0.4em] uppercase text-white/40 block mb-4 font-bold">Charter Investment</span>
                    <div className="flex items-baseline gap-3">
                       <span className="text-5xl md:text-6xl font-serif text-gold italic leading-none">{yacht.price.split(' ')[0]}</span>
                       <span className="text-[9px] tracking-[0.3em] uppercase text-white/40 font-bold">{yacht.price.split(' ').slice(1).join(' ')}</span>
                    </div>
                  </div>

                  <div className="space-y-6 pt-10 border-t border-white/10 mb-12">
                    <div className="flex items-center gap-5 text-white/40 group">
                      <Droplets size={16} className="text-gold/40 group-hover:text-gold transition-colors" />
                      <span className="text-[10px] italic">Fuel consumption & local taxes excluded</span>
                    </div>
                    <div className="flex items-center gap-5 text-white/40 group">
                      <Wind size={16} className="text-gold/40 group-hover:text-gold transition-colors" />
                      <span className="text-[10px] italic">Artisan snack selection & local refreshments</span>
                    </div>
                    <div className="flex items-center gap-5 text-white/40 group">
                      <Zap size={16} className="text-gold/40 group-hover:text-gold transition-colors" />
                      <span className="text-[10px] italic">Dedicated Yacht Captain & Stewardess</span>
                    </div>
                  </div>

                  <button 
                    onClick={onBook}
                    className="w-full bg-[#C5A27D] text-[#080C10] py-6 text-[10px] tracking-[0.6em] uppercase font-bold hover:bg-white transition-all shadow-2xl active:scale-[0.98]"
                  >
                    Confirm Availability
                  </button>
                  <button className="w-full mt-4 bg-transparent border border-white/10 text-white/30 py-4 text-[8px] tracking-[0.4em] uppercase font-bold hover:bg-white/5 hover:text-white transition-all italic">
                    Acquire Yacht Dossier
                  </button>
               </div>
               
               <div className="p-10 text-center bg-white/[0.03] border border-white/5 backdrop-blur-sm">
                  <span className="text-[8px] tracking-[0.5em] uppercase text-white/20 block mb-5">Concierge Desk</span>
                  <p className="text-[11px] text-white/40 italic font-light leading-relaxed">
                    Our advisors facilitate discrete arrangements, spanning from private air transfers to multi-island itineraries.
                  </p>
               </div>
            </div>
          </div>

        </div>
      </main>

      {/* Footer Branding Overlay */}
      <footer className="bg-[#05080A] py-32 border-t border-white/10">
         <div className="max-w-7xl mx-auto px-6 text-center">
            <span className="font-serif text-4xl md:text-5xl tracking-[1em] uppercase text-white/5 block mb-16">NADAL</span>
            <div className="flex flex-col md:flex-row justify-center items-center gap-10 text-[9px] tracking-[0.4em] uppercase font-bold text-white/20">
               <a href="#" className="hover:text-gold transition-all duration-300">Operational Safety</a>
               <a href="#" className="hover:text-gold transition-all duration-300">Privacy Charter</a>
               <a href="#" className="hover:text-gold transition-all duration-300">Contractual Terms</a>
            </div>
         </div>
      </footer>
    </div>
  );
};
