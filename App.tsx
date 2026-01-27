
import React, { useState, useEffect, useRef } from 'react';
import { Settings, Check, Image as ImageIcon, X, RotateCcw, Upload, AlertCircle, Instagram, ArrowRight, ArrowLeft, Quote, ChevronRight, ChevronLeft, Minus, MessageCircle } from 'lucide-react';
import { AppContent } from './types';
import { INITIAL_CONTENT } from './constants';
import { Navbar } from './components/Navbar';
import { EditableText } from './components/EditableText';

// Custom TikTok icon since it might not be in all lucide versions
const TiktokIcon = ({ size = 20, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

interface PendingImageUpdate {
  section: keyof AppContent;
  field: string;
  index?: number;
  currentValue: string;
}

const App: React.FC = () => {
  const [content, setContent] = useState<AppContent>(() => {
    const saved = localStorage.getItem('nadal_content');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return INITIAL_CONTENT;
      }
    }
    return INITIAL_CONTENT;
  });
  
  const [isEditorMode, setIsEditorMode] = useState(false);
  const [pendingImage, setPendingImage] = useState<PendingImageUpdate | null>(null);
  const [tempUrl, setTempUrl] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [showLabel, setShowLabel] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      localStorage.setItem('nadal_content', JSON.stringify(content));
    } catch (e) {
      // Graceful fallback when localStorage is full
      console.warn("Storage limit reached. Changes will be kept in session but not persisted on refresh.");
    }
  }, [content]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLabel(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  const updateField = (section: keyof AppContent, field: string, value: string) => {
    setContent(prev => ({
      ...prev,
      [section]: {
        ...(prev[section] as any),
        [field]: value
      }
    }));
  };

  const updateListItem = (section: keyof AppContent, index: number, field: string, value: string, listField: string = 'items') => {
    setContent(prev => {
      const list = [...(prev[section] as any)[listField]];
      list[index] = { ...list[index], [field]: value };
      return {
        ...prev,
        [section]: {
          ...(prev[section] as any),
          [listField]: list
        }
      };
    });
  };

  const openImageEditor = (section: keyof AppContent, field: string, currentValue: string, index?: number) => {
    setPendingImage({ section, field, index, currentValue });
    setTempUrl(currentValue);
  };

  const handleApplyImage = () => {
    if (!pendingImage) return;
    if (pendingImage.index !== undefined) {
      updateListItem(pendingImage.section, pendingImage.index, pendingImage.field, tempUrl);
    } else {
      updateField(pendingImage.section, pendingImage.field, tempUrl);
    }
    setPendingImage(null);
  };

  const compressAndSetImage = (file: File) => {
    setIsProcessing(true);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target?.result as string;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        // More aggressive compression to respect localStorage limits (5MB)
        const MAX_DIMENSION = 1000; 
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > MAX_DIMENSION) {
            height *= MAX_DIMENSION / width;
            width = MAX_DIMENSION;
          }
        } else {
          if (height > MAX_DIMENSION) {
            width *= MAX_DIMENSION / height;
            height = MAX_DIMENSION;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.imageSmoothingEnabled = true;
          ctx.imageSmoothingQuality = 'high';
          ctx.drawImage(img, 0, 0, width, height);
        }
        
        // Quality 0.5 is the "sweet spot" for high-res looking mobile images 
        // while keeping the Base64 string significantly shorter.
        const dataUrl = canvas.toDataURL('image/jpeg', 0.5);
        setTempUrl(dataUrl);
        setIsProcessing(false);
      };
    };
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      compressAndSetImage(file);
    }
  };

  const resetToDefaults = () => {
    if (confirm("Reset visuals and text to original defaults?")) {
      setContent(INITIAL_CONTENT);
      localStorage.removeItem('nadal_content');
      setIsEditorMode(false);
      setActiveTestimonial(0);
    }
  };

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % content.testimonials.items.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + content.testimonials.items.length) % content.testimonials.items.length);
  };

  const ImageFallback = ({ src, className, isCircle = false }: { src: string; className: string; isCircle?: boolean }) => {
    const [error, setError] = useState(false);
    if (error || !src) {
      return (
        <div className={`${className} bg-gradient-to-br from-[#0D1217] to-[#151B22] flex flex-col items-center justify-center border border-white/5 ${isCircle ? 'rounded-full' : ''}`}>
          <span className="font-serif text-lg tracking-[0.4em] opacity-10">NADAL</span>
        </div>
      );
    }
    return <img src={src} className={`${className} ${isCircle ? 'rounded-full' : ''}`} onError={() => setError(true)} alt="Asset" />;
  };

  const whatsappUrl = "https://wa.me/34611215790";
  const tiktokUrl = "https://www.tiktok.com/@nadalcharters?_r=1&_t=ZN-93QSDvQcwq6";

  const fleetItems = content.fleet.items;

  return (
    <div className="relative overflow-x-hidden min-h-screen bg-[#080C10] text-[#FDFCF0]">
      <Navbar />

      {/* ULTRA-MINIMALIST WHATSAPP BUTTON */}
      <div className="fixed bottom-6 right-6 z-[80] flex items-center gap-3">
        <div className={`transition-all duration-1000 transform ${showLabel ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'}`}>
          <div className="bg-[#151B22]/80 backdrop-blur-md border border-white/10 py-1.5 px-3 rounded-full flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#22c55e] rounded-full animate-pulse"></span>
            <span className="text-[9px] tracking-[0.2em] uppercase font-semibold text-[#FDFCF0]/70">Joan · Online</span>
          </div>
        </div>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="relative group transition-all duration-300 hover:scale-110 active:scale-90">
          <div className="w-[42px] h-[42px] bg-[#25D366] rounded-full flex items-center justify-center shadow-lg transition-all group-hover:shadow-[#25D366]/20">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-current">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </div>
          <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-[#ff4d4f] border border-[#080C10] rounded-full"></div>
        </a>
      </div>

      {/* EDITOR CONTROLS */}
      <div className="fixed bottom-6 left-6 z-[70] flex flex-col gap-3 items-start">
        {isEditorMode && (
          <button onClick={resetToDefaults} className="p-2.5 rounded-full bg-white/5 border border-white/5 text-white/30 hover:text-white transition-all">
            <RotateCcw size={12} />
          </button>
        )}
        <button onClick={() => setIsEditorMode(!isEditorMode)} className={`p-3 rounded-full shadow-2xl transition-all ${isEditorMode ? 'bg-[#C5A27D] text-[#080C10]' : 'bg-[#151B22]/80 border border-white/5 text-[#C5A27D]'}`}>
          {isEditorMode ? <Check size={14} /> : <Settings size={14} />}
        </button>
      </div>

      {/* IMAGE CURATOR MODAL */}
      {pendingImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/95 backdrop-blur-xl">
          <div className="bg-[#0D1217] border border-[#C5A27D]/30 p-8 max-w-lg w-full shadow-2xl relative">
            <button onClick={() => setPendingImage(null)} className="absolute top-6 right-6 text-white/40 hover:text-white"><X size={20} /></button>
            <h3 className="font-serif text-2xl italic mb-6 text-gold">Update Visual</h3>
            <div className="space-y-6">
              <div className="aspect-video bg-black/40 border border-white/5 overflow-hidden flex items-center justify-center">
                {isProcessing ? <div className="w-8 h-8 border-2 border-[#C5A27D] border-t-transparent rounded-full animate-spin"></div> : tempUrl ? <img src={tempUrl} className="w-full h-full object-cover" /> : <ImageIcon size={32} className="text-white/10" />}
              </div>
              <button onClick={() => fileInputRef.current?.click()} className="w-full bg-white/5 border border-white/10 py-3 text-[9px] tracking-[0.3em] uppercase font-bold flex items-center justify-center gap-3"><Upload size={14} /> Upload Image</button>
              <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleFileUpload} />
              <button onClick={handleApplyImage} className="w-full bg-[#C5A27D] text-[#080C10] py-3 text-[10px] tracking-[0.4em] uppercase font-bold">Apply Change</button>
            </div>
          </div>
        </div>
      )}

      {/* HERO SECTION */}
      <section id="hero" className="relative h-[100vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${content.hero.bgImage})` }}>
          <div className="absolute inset-0 bg-[#080C10]/20" />
        </div>
        <div className="relative z-10 text-center max-w-4xl px-6">
          <h1 className="font-serif text-5xl md:text-8xl mb-8 italic font-light drop-shadow-2xl">
            <EditableText isEditing={isEditorMode} value={content.hero.title} onSave={(val) => updateField('hero', 'title', val)} tag="span" />
          </h1>
          <p className="text-sm md:text-base text-[#FDFCF0] font-light mb-12 max-w-lg mx-auto tracking-[0.1em] opacity-80">
            <EditableText isEditing={isEditorMode} value={content.hero.subtitle} onSave={(val) => updateField('hero', 'subtitle', val)} />
          </p>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, 'contact')}
              className="bg-[#FDFCF0] text-[#080C10] py-4 px-12 text-[10px] tracking-[0.4em] uppercase font-bold hover:bg-[#C5A27D] transition-colors shadow-xl"
            >
              <EditableText isEditing={isEditorMode} value={content.hero.ctaPrimary} onSave={(val) => updateField('hero', 'ctaPrimary', val)} />
            </a>
            <a 
              href="#fleet" 
              onClick={(e) => scrollToSection(e, 'fleet')}
              className="text-[10px] tracking-[0.4em] uppercase text-[#FDFCF0] font-bold border-b border-white/20 pb-1 hover:border-white transition-all"
            >
              <EditableText isEditing={isEditorMode} value={content.hero.ctaSecondary} onSave={(val) => updateField('hero', 'ctaSecondary', val)} />
            </a>
          </div>
        </div>
        {isEditorMode && <button onClick={() => openImageEditor('hero', 'bgImage', content.hero.bgImage)} className="absolute bottom-12 right-12 z-20 bg-black/60 p-3 text-[9px] uppercase tracking-[0.3em] text-white border border-white/10 flex items-center gap-2">Replace Hero Frame</button>}
      </section>

      {/* ABOUT */}
      <section id="about" className="py-32 md:py-48 px-6 bg-[#080C10] scroll-mt-24">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <span className="text-[9px] tracking-[0.5em] uppercase text-gold block mb-6">
              <EditableText isEditing={isEditorMode} value={content.about.subheading} onSave={(val) => updateField('about', 'subheading', val)} />
            </span>
            <h2 className="font-serif text-4xl md:text-6xl mb-8 italic font-light">
              <EditableText isEditing={isEditorMode} value={content.about.heading} onSave={(val) => updateField('about', 'heading', val)} tag="span" />
            </h2>
            <p className="text-base text-[#FDFCF0]/70 font-light leading-relaxed mb-8 max-w-md">
              <EditableText isEditing={isEditorMode} value={content.about.text} onSave={(val) => updateField('about', 'text', val)} tag="span" />
            </p>
            <div className="mt-10">
               <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 bg-white/5 border border-gold/40 px-8 py-4 text-[10px] tracking-[0.4em] uppercase font-bold text-gold hover:bg-gold hover:text-[#080C10] transition-all group"
               >
                 Talk to one of our experts
                 <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
               </a>
            </div>
          </div>
          <div className="relative group overflow-hidden border border-white/5">
            <ImageFallback src={content.about.image} className="w-full aspect-square object-cover" />
            {isEditorMode && <button onClick={() => openImageEditor('about', 'image', content.about.image)} className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-[10px] tracking-[0.4em] uppercase font-bold text-white">Update Image</button>}
          </div>
        </div>
      </section>

      {/* FLEET GRID */}
      <section id="fleet" className="py-32 px-6 bg-[#0A0E12] border-t border-white/5 scroll-mt-24 transition-all duration-1000">
        <div className="max-w-7xl mx-auto text-center md:text-left">
          <h2 className="font-serif text-4xl md:text-7xl mb-24 text-center italic font-light tracking-tight">
            <EditableText isEditing={isEditorMode} value={content.fleet.heading} onSave={(val) => updateField('fleet', 'heading', val)} />
          </h2>
          <div className="grid md:grid-cols-3 gap-12 transition-all duration-1000">
            {fleetItems.map((item, idx) => (
              <div key={item.id} className="group animate-[fadeIn_1s_ease-out]">
                <div className="relative overflow-hidden aspect-[3/4] mb-8 border border-white/5 bg-black">
                  <ImageFallback src={item.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  {isEditorMode && <button onClick={() => openImageEditor('fleet', 'image', item.image, idx)} className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-[9px] tracking-[0.4em] uppercase font-bold text-white">Curate</button>}
                </div>
                <div className="flex justify-between items-end text-left px-2">
                  <div>
                    <h3 className="font-serif text-2xl italic mb-1"><EditableText isEditing={isEditorMode} value={item.title} onSave={(val) => updateListItem('fleet', idx, 'title', val)} /></h3>
                    <p className="text-[9px] tracking-[0.3em] uppercase text-white/40"><EditableText isEditing={isEditorMode} value={item.subtitle} onSave={(val) => updateListItem('fleet', idx, 'subtitle', val)} /></p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-bold text-gold tracking-widest uppercase"><EditableText isEditing={isEditorMode} value={item.price} onSave={(val) => updateListItem('fleet', idx, 'price', val)} /></p>
                    <p className="text-[9px] text-white/30 tracking-widest uppercase"><EditableText isEditing={isEditorMode} value={item.details} onSave={(val) => updateListItem('fleet', idx, 'details', val)} /></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-24 flex flex-col items-center gap-12">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] tracking-[0.6em] uppercase font-bold text-[#FDFCF0] hover:text-gold transition-all duration-500 group flex items-center gap-4 relative"
            >
              Request Private Catalog 
              <ArrowRight size={16} className="group-hover:translate-x-3 transition-transform duration-500" />
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-gold group-hover:w-full transition-all duration-700"></span>
            </a>
          </div>
        </div>
      </section>

      {/* HARBORS / DESTINATIONS */}
      <section id="destinations" className="py-32 px-6 bg-[#080C10] border-t border-white/5 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl md:text-6xl mb-24 italic font-light text-center md:text-left"><EditableText isEditing={isEditorMode} value={content.destinations.heading} onSave={(val) => updateField('destinations', 'heading', val)} /></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.destinations.items.map((dest, idx) => (
              <div key={dest.id} className="relative group aspect-[4/5] overflow-hidden border border-white/5">
                <ImageFallback src={dest.image} className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                  <span className="font-serif text-3xl italic text-[#FDFCF0]"><EditableText isEditing={isEditorMode} value={dest.name} onSave={(val) => updateListItem('destinations', idx, 'name', val)} /></span>
                </div>
                {isEditorMode && <button onClick={() => openImageEditor('destinations', 'image', dest.image, idx)} className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-[9px] tracking-[0.4em] uppercase font-bold text-white">Replace Harbor Frame</button>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONCIERGE */}
      <section id="concierge" className="py-32 px-6 bg-[#0A0E12] border-t border-white/5 scroll-mt-24">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-24">
          <div className="md:w-1/2 order-2 md:order-1">
            <div className="relative group overflow-hidden">
               <ImageFallback src={content.concierge.image} className="w-full aspect-[4/3] object-cover border border-white/5 transition-transform duration-1000 group-hover:scale-105" />
               {isEditorMode && <button onClick={() => openImageEditor('concierge', 'image', content.concierge.image)} className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-[10px] tracking-[0.4em] uppercase font-bold text-white">Curate Concierge</button>}
            </div>
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <h2 className="font-serif text-4xl md:text-5xl mb-8 italic font-light"><EditableText isEditing={isEditorMode} value={content.concierge.heading} onSave={(val) => updateField('concierge', 'heading', val)} /></h2>
            <p className="text-[#FDFCF0]/60 leading-relaxed mb-10 text-base font-light italic"><EditableText isEditing={isEditorMode} value={content.concierge.text} onSave={(val) => updateField('concierge', 'text', val)} /></p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-6 text-[10px] tracking-[0.4em] uppercase font-bold text-gold hover:text-white transition-all group">
              Speak to Concierge 
              <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION - SLIDER WITH PROFILE PICS */}
      <section id="testimonials" className="py-32 px-6 bg-[#080C10] border-t border-white/5 scroll-mt-24 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <Quote className="text-gold mx-auto mb-12 opacity-30" size={48} />
          
          <div className="relative min-h-[400px] flex items-center justify-center">
            {/* Nav Arrows */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-4 text-gold hover:text-white transition-all bg-white/5 hover:bg-white/10 rounded-full"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft size={32} />
            </button>
            <button 
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-4 text-gold hover:text-white transition-all bg-white/5 hover:bg-white/10 rounded-full"
              aria-label="Next Testimonial"
            >
              <ChevronRight size={32} />
            </button>

            {/* Testimonial Content */}
            <div className="w-full px-16">
              {content.testimonials.items.map((testimonial, idx) => (
                <div 
                  key={testimonial.id} 
                  className={`transition-all duration-700 absolute inset-0 flex flex-col items-center justify-center ${idx === activeTestimonial ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}
                >
                  <div className="relative group mb-8">
                    <ImageFallback 
                      src={testimonial.authorImage} 
                      className="w-24 h-24 md:w-32 md:h-32 object-cover border-2 border-gold/30 shadow-2xl" 
                      isCircle 
                    />
                    {isEditorMode && (
                      <button 
                        onClick={() => openImageEditor('testimonials', 'authorImage', testimonial.authorImage, idx)} 
                        className="absolute inset-0 bg-black/60 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <ImageIcon size={20} className="text-white" />
                      </button>
                    )}
                  </div>

                  <blockquote className="font-serif text-2xl md:text-4xl italic font-light leading-snug text-[#FDFCF0] mb-8 max-w-2xl">
                    "<EditableText isEditing={isEditorMode} value={testimonial.quote} onSave={(val) => updateListItem('testimonials', idx, 'quote', val)} />"
                  </blockquote>

                  <div className="flex flex-col items-center gap-2">
                    <span className="text-[12px] tracking-[0.5em] uppercase font-bold text-gold">
                      <EditableText isEditing={isEditorMode} value={testimonial.author} onSave={(val) => updateListItem('testimonials', idx, 'author', val)} />
                    </span>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-white/40">
                      <EditableText isEditing={isEditorMode} value={testimonial.context} onSave={(val) => updateListItem('testimonials', idx, 'context', val)} />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slider Indicators */}
          <div className="flex justify-center gap-4 mt-16">
            {content.testimonials.items.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTestimonial(idx)}
                className={`h-[2px] transition-all duration-500 ${idx === activeTestimonial ? 'w-12 bg-gold' : 'w-6 bg-white/10 hover:bg-white/30'}`}
              />
            ))}
          </div>

          <div className="mt-12">
            <button 
              onClick={nextTestimonial}
              className="text-[9px] tracking-[0.4em] uppercase font-bold text-gold/60 hover:text-gold transition-colors flex items-center gap-2 mx-auto group"
            >
              Swipe for more <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER / CONTACT */}
      <footer id="contact" className="py-24 px-6 bg-[#05080A] border-t border-white/5 scroll-mt-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div>
            <a href="#hero" onClick={(e) => scrollToSection(e, 'hero')} className="font-serif text-3xl tracking-[0.5em] uppercase text-[#FDFCF0] font-light mb-4 block hover:text-gold transition-colors">NADAL</a>
            <p className="text-[9px] tracking-[0.2em] text-[#FDFCF0]/30 uppercase mb-8">Balearic Yacht Charters · Est. 1984</p>
            <div className="flex gap-6 items-center">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-white transition-all transform hover:scale-110" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href={tiktokUrl} target="_blank" rel="noopener noreferrer" className="text-gold hover:text-white transition-all transform hover:scale-110" aria-label="TikTok">
                <TiktokIcon size={20} />
              </a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-12 text-[9px] tracking-[0.3em] uppercase text-[#FDFCF0]/40 font-medium">
             <div className="flex flex-col gap-3">
               <span className="text-gold">Direct Desk</span>
               <a href={`tel:${content.contact.phone}`} className="hover:text-white transition-colors">
                <EditableText isEditing={isEditorMode} value={content.contact.phone} onSave={(val) => updateField('contact', 'phone', val)} />
               </a>
             </div>
             <div className="flex flex-col gap-3">
               <span className="text-gold">WhatsApp</span>
               <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <EditableText isEditing={isEditorMode} value={content.contact.whatsapp} onSave={(val) => updateField('contact', 'whatsapp', val)} />
               </a>
             </div>
             <div className="flex flex-col gap-3 md:max-w-xs">
               <span className="text-gold">Harbor Office</span>
               <div className="leading-loose italic opacity-80">
                <EditableText isEditing={isEditorMode} value={content.contact.address} onSave={(val) => updateField('contact', 'address', val)} />
               </div>
             </div>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default App;
