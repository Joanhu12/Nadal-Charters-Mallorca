
import React, { useState, useEffect, useRef } from 'react';
import { Settings, Check, Image as ImageIcon, X, RotateCcw, Upload, AlertCircle, Instagram } from 'lucide-react';
import { AppContent } from './types';
import { INITIAL_CONTENT } from './constants';
import { Navbar } from './components/Navbar';
import { EditableText } from './components/EditableText';

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
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      localStorage.setItem('nadal_content', JSON.stringify(content));
    } catch (e) {
      console.error("Storage limit reached.", e);
    }
  }, [content]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLabel(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const updateField = (section: keyof AppContent, field: string, value: string) => {
    setContent(prev => ({
      ...prev,
      [section]: {
        ...(prev[section] as any),
        [field]: value
      }
    }));
  };

  const updateListItem = (section: keyof AppContent, index: number, field: string, value: string) => {
    setContent(prev => {
      const list = [...(prev[section] as any).items];
      list[index] = { ...list[index], [field]: value };
      return {
        ...prev,
        [section]: {
          ...(prev[section] as any),
          items: list
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
        const MAX_WIDTH = 1600;
        const MAX_HEIGHT = 1600;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx?.drawImage(img, 0, 0, width, height);
        const dataUrl = canvas.toDataURL('image/jpeg', 0.8);
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
    if (confirm("Reset visuals and text to original defaults? This will overwrite your current archive photos.")) {
      setContent(INITIAL_CONTENT);
      localStorage.removeItem('nadal_content');
      setIsEditorMode(false);
    }
  };

  const ImageFallback = ({ src, className }: { src: string; className: string }) => {
    const [error, setError] = useState(false);
    if (error || !src) {
      return (
        <div className={`${className} bg-gradient-to-br from-[#0D1217] to-[#151B22] flex flex-col items-center justify-center border border-white/5`}>
          <span className="font-serif text-lg tracking-[0.4em] opacity-10">NADAL</span>
          <AlertCircle size={16} className="mt-2 opacity-5" />
        </div>
      );
    }
    return <img src={src} className={className} onError={() => setError(true)} alt="Gallery" />;
  };

  const whatsappUrl = "https://wa.me/34611215790";

  return (
    <div className="relative overflow-x-hidden min-h-screen bg-[#080C10] text-[#FDFCF0]">
      <Navbar />

      {/* ULTRA-MINIMALIST WHATSAPP BUTTON */}
      <div className="fixed bottom-6 right-6 z-[80] flex items-center gap-3">
        {/* Discrete Joan Label */}
        <div 
          className={`transition-all duration-1000 transform ${showLabel ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'}`}
        >
          <div className="bg-[#151B22]/80 backdrop-blur-md border border-white/10 py-1.5 px-3 rounded-full flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#22c55e] rounded-full animate-pulse"></span>
            <span className="text-[9px] tracking-[0.2em] uppercase font-semibold text-[#FDFCF0]/70">Joan · Online</span>
          </div>
        </div>

        {/* Mini WhatsApp Trigger */}
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group transition-all duration-300 hover:scale-110 active:scale-90"
        >
          <div className="w-[42px] h-[42px] bg-[#25D366] rounded-full flex items-center justify-center shadow-lg transition-all group-hover:shadow-[#25D366]/20 group-hover:shadow-xl">
            <svg viewBox="0 0 24 24" className="w-5.5 h-5.5 text-white fill-current">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </div>
          {/* Subtle Notification Dot */}
          <div className="absolute -top-0.5 -right-0.5 w-[10px] h-[10px] bg-[#ff4d4f] border-2 border-[#080C10] rounded-full shadow-sm"></div>
        </a>
      </div>

      {/* EDITOR CONTROLS */}
      <div className="fixed bottom-6 left-6 z-[70] flex flex-col gap-3 items-start">
        {isEditorMode && (
          <button 
            onClick={resetToDefaults}
            className="p-3 rounded-full bg-white/5 backdrop-blur-md border border-white/5 text-white/30 hover:text-white hover:bg-white/10 transition-all flex items-center gap-2 group"
          >
            <RotateCcw size={12} />
            <span className="text-[8px] tracking-[0.2em] uppercase font-bold pr-1 opacity-0 group-hover:opacity-100 transition-opacity">Reset</span>
          </button>
        )}
        <button 
          onClick={() => setIsEditorMode(!isEditorMode)}
          className={`p-3 rounded-full shadow-2xl transition-all duration-500 flex items-center gap-3 ${isEditorMode ? 'bg-[#C5A27D] text-[#080C10]' : 'bg-[#151B22]/80 border border-white/5 text-[#C5A27D]'}`}
        >
          {isEditorMode ? <Check size={14} /> : <Settings size={14} />}
          <span className="text-[8px] tracking-[0.3em] uppercase font-bold pr-1">
            {isEditorMode ? "Live" : "Edit"}
          </span>
        </button>
      </div>

      {/* IMAGE CURATOR MODAL */}
      {pendingImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/95 backdrop-blur-xl animate-in fade-in zoom-in-95 duration-300">
          <div className="bg-[#0D1217] border border-[#C5A27D]/30 p-8 md:p-12 max-w-xl w-full shadow-2xl relative">
            <button onClick={() => setPendingImage(null)} className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors">
              <X size={20} />
            </button>
            <h3 className="font-serif text-3xl italic mb-2 tracking-tight">Curate Visual Archive</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="space-y-4">
                <span className="text-[9px] tracking-[0.2em] uppercase text-white/40 block">Preview Selection</span>
                <div className="aspect-square bg-black/40 border border-white/5 overflow-hidden flex items-center justify-center relative">
                  {isProcessing ? (
                    <div className="text-center">
                      <div className="w-8 h-8 border-2 border-[#C5A27D] border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
                    </div>
                  ) : tempUrl ? (
                    <img src={tempUrl} className="w-full h-full object-cover" alt="Preview" />
                  ) : (
                    <ImageIcon size={32} className="text-white/10" />
                  )}
                </div>
              </div>
              <div className="flex flex-col justify-center gap-4">
                <button 
                  disabled={isProcessing}
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full bg-white/5 border border-white/10 py-6 px-4 flex flex-col items-center gap-3 hover:bg-white/10 transition-all group disabled:opacity-50"
                >
                  <Upload size={20} className="text-[#C5A27D]" />
                  <span className="text-[9px] tracking-[0.3em] uppercase font-bold text-center">Select From Archive</span>
                </button>
                <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleFileUpload} />
                <div className="relative pt-4">
                   <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-white/5"></span></div>
                   <div className="relative flex justify-center text-[8px] uppercase tracking-[0.5em] text-white/20"><span className="bg-[#0D1217] px-2">OR</span></div>
                </div>
                <input 
                  type="text" 
                  value={tempUrl}
                  onChange={(e) => setTempUrl(e.target.value)}
                  placeholder="Paste URL..."
                  className="w-full bg-black/40 border border-white/10 p-3 text-[11px] text-[#FDFCF0] outline-none"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <button disabled={isProcessing} onClick={handleApplyImage} className="w-full bg-[#C5A27D] text-[#080C10] py-4 text-[10px] tracking-[0.4em] uppercase font-bold">Apply Change</button>
              <button onClick={() => setPendingImage(null)} className="w-full border border-white/10 py-4 text-[10px] tracking-[0.4em] uppercase font-bold text-white/40">Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* HERO SECTION */}
      <section className="relative h-[100vh] w-full flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[30000ms] scale-[1.05]"
          style={{ backgroundImage: `url(${content.hero.bgImage})` }}
        >
          <div className="absolute inset-0 bg-[#080C10]/20" />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl px-6">
          <h1 className="font-serif text-5xl md:text-8xl mb-8 leading-tight tracking-tight italic font-light drop-shadow-2xl">
            <EditableText isEditing={isEditorMode} value={content.hero.title} onSave={(val) => updateField('hero', 'title', val)} tag="span" />
          </h1>
          <p className="text-sm md:text-base text-[#FDFCF0] font-light mb-12 max-w-lg mx-auto tracking-[0.1em] drop-shadow-md">
            <EditableText isEditing={isEditorMode} value={content.hero.subtitle} onSave={(val) => updateField('hero', 'subtitle', val)} />
          </p>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <a 
              href={isEditorMode ? undefined : whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FDFCF0] text-[#080C10] py-4 px-12 text-[10px] tracking-[0.4em] uppercase font-bold hover:bg-[#C5A27D] transition-colors duration-500 shadow-xl"
            >
              <EditableText isEditing={isEditorMode} value={content.hero.ctaPrimary} onSave={(val) => updateField('hero', 'ctaPrimary', val)} />
            </a>
            <a href="#fleet" className="text-[10px] tracking-[0.4em] uppercase text-[#FDFCF0] font-bold hover:text-[#C5A27D] transition-all drop-shadow-md">
              <EditableText isEditing={isEditorMode} value={content.hero.ctaSecondary} onSave={(val) => updateField('hero', 'ctaSecondary', val)} />
            </a>
          </div>
        </div>

        {isEditorMode && (
          <button 
            onClick={() => openImageEditor('hero', 'bgImage', content.hero.bgImage)} 
            className="absolute bottom-24 right-12 z-20 bg-black/60 backdrop-blur-md p-3 text-[10px] uppercase tracking-[0.3em] text-white border border-white/10 flex items-center gap-2 group"
          >
            <Upload size={14} className="text-[#C5A27D]" /> Replace Hero Frame
          </button>
        )}
      </section>

      {/* ABOUT */}
      <section id="about" className="py-32 md:py-48 px-6 bg-[#080C10]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <span className="text-[9px] tracking-[0.5em] uppercase text-[#C5A27D] block mb-6">
              <EditableText isEditing={isEditorMode} value={content.about.subheading} onSave={(val) => updateField('about', 'subheading', val)} />
            </span>
            <h2 className="font-serif text-4xl md:text-6xl mb-8 leading-tight italic font-light">
              <EditableText isEditing={isEditorMode} value={content.about.heading} onSave={(val) => updateField('about', 'heading', val)} tag="span" />
            </h2>
            <p className="text-base text-[#FDFCF0]/70 font-light leading-relaxed mb-8 max-w-md">
              <EditableText isEditing={isEditorMode} value={content.about.text} onSave={(val) => updateField('about', 'text', val)} tag="span" />
            </p>
          </div>
          <div className="relative group overflow-hidden border border-white/5 shadow-2xl">
            <ImageFallback src={content.about.image} className="w-full aspect-square object-cover transition-all duration-1000 group-hover:scale-105" />
            {isEditorMode && (
              <button 
                onClick={() => openImageEditor('about', 'image', content.about.image)} 
                className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-[10px] tracking-[0.4em] uppercase font-bold"
              >
                <div className="bg-[#080C10] border border-[#C5A27D]/40 px-6 py-3 flex items-center gap-3 text-white">
                  <Upload size={14} className="text-[#C5A27D]" /> Update Archive
                </div>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* FLEET GRID */}
      <section id="fleet" className="py-32 px-6 bg-[#0A0E12] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl md:text-7xl mb-24 text-center italic font-light tracking-tight">
            <EditableText isEditing={isEditorMode} value={content.fleet.heading} onSave={(val) => updateField('fleet', 'heading', val)} />
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            {content.fleet.items.map((item, idx) => (
              <div key={item.id} className="group">
                <div className="relative overflow-hidden aspect-[3/4] mb-8 border border-white/5 shadow-xl bg-black">
                  <ImageFallback src={item.image} className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110" />
                  {isEditorMode && (
                    <button 
                      onClick={() => openImageEditor('fleet', 'image', item.image, idx)} 
                      className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-[9px] tracking-[0.4em] uppercase font-bold text-white"
                    >
                      <div className="bg-[#080C10] border border-[#C5A27D]/40 px-5 py-2 flex items-center gap-2">
                        <Upload size={12} className="text-[#C5A27D]" /> Curate
                      </div>
                    </button>
                  )}
                </div>
                <div className="flex justify-between items-end">
                  <div className="max-w-[60%]">
                    <h3 className="font-serif text-2xl italic mb-1 truncate">
                      <EditableText isEditing={isEditorMode} value={item.title} onSave={(val) => updateListItem('fleet', idx, 'title', val)} />
                    </h3>
                    <p className="text-[9px] tracking-[0.3em] uppercase text-white/40 truncate">
                      <EditableText isEditing={isEditorMode} value={item.subtitle} onSave={(val) => updateListItem('fleet', idx, 'subtitle', val)} />
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-bold text-[#C5A27D] tracking-widest uppercase">
                      <EditableText isEditing={isEditorMode} value={item.price} onSave={(val) => updateListItem('fleet', idx, 'price', val)} />
                    </p>
                    <p className="text-[9px] text-white/30 tracking-widest uppercase truncate max-w-[120px]">
                      <EditableText isEditing={isEditorMode} value={item.details} onSave={(val) => updateListItem('fleet', idx, 'details', val)} />
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="py-24 px-6 bg-[#05080A] border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 text-left">
          <div className="md:max-w-xs">
            <span className="font-serif text-3xl tracking-[0.5em] uppercase text-[#FDFCF0] font-light mb-4 block">NADAL</span>
            <p className="text-[10px] tracking-[0.2em] text-[#FDFCF0]/30 uppercase mb-8">Balearic Yacht Charters · Established 1984</p>
            
            <div className="flex gap-6 items-center">
              <a href="https://instagram.com/nadalcharters" target="_blank" rel="noopener noreferrer" className="text-[#C5A27D] hover:text-white transition-all transform hover:scale-110">
                <Instagram size={20} />
              </a>
              <a href="https://tiktok.com/@nadalcharters" target="_blank" rel="noopener noreferrer" className="text-[#C5A27D] hover:text-white transition-all transform hover:scale-110">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-12 text-[10px] tracking-[0.3em] uppercase text-[#FDFCF0]/50 font-medium w-full justify-end">
             <div className="flex flex-col gap-2">
               <span className="text-[#C5A27D]">Direct Desk</span>
               <a href={`tel:${content.contact.phone}`} className="hover:text-white transition-colors">
                 <EditableText isEditing={isEditorMode} value={content.contact.phone} onSave={(val) => updateField('contact', 'phone', val)} />
               </a>
             </div>
             <div className="flex flex-col gap-2">
               <span className="text-[#C5A27D]">WhatsApp</span>
               <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                 <EditableText isEditing={isEditorMode} value={content.contact.whatsapp} onSave={(val) => updateField('contact', 'whatsapp', val)} />
               </a>
             </div>
             <div className="flex flex-col gap-2 md:max-w-xs">
               <span className="text-[#C5A27D]">Harbor Office</span>
               <div className="leading-relaxed">
                 <EditableText isEditing={isEditorMode} value={content.contact.address} onSave={(val) => updateField('contact', 'address', val)} />
               </div>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
