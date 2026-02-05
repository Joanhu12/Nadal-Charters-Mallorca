
export interface YachtSpec {
  label: string;
  value: string;
}

export interface CharterItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  price: string;
  details: string;
  externalUrl?: string;
  location?: string;
  // Detail page fields
  fullDescription?: string;
  gallery?: string[];
  specs?: YachtSpec[];
  amenities?: string[];
  length?: string;
  year?: string;
  crew?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  authorImage: string;
  context: string;
}

export interface AppContent {
  hero: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    bgImage: string;
  };
  about: {
    heading: string;
    subheading: string;
    text: string;
    image: string;
  };
  fleet: {
    heading: string;
    items: CharterItem[];
  };
  destinations: {
    heading: string;
    items: { id: string; name: string; image: string }[];
  };
  concierge: {
    heading: string;
    text: string;
    image: string;
  };
  testimonials: {
    items: Testimonial[];
  };
  contact: {
    phone: string;
    whatsapp: string;
    email: string;
    address: string;
  };
}

export interface MultiLangContent {
  en: AppContent;
  es: AppContent;
}

export type ContentKey = keyof AppContent;
export type Language = 'en' | 'es';
