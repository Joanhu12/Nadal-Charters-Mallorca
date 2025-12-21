
export interface CharterItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  price: string;
  details: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
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

export type ContentKey = keyof AppContent;
