
import { AppContent } from './types';

export const INITIAL_CONTENT: AppContent = {
  hero: {
    title: "The Mediterranean, Defined.",
    subtitle: "Exclusive yacht charters across the Balearic Isles. Elegance, curated for the horizon.",
    ctaPrimary: "Reserve Your Voyage",
    ctaSecondary: "The Fleet",
    bgImage: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=2000"
  },
  about: {
    heading: "Elegance on Water",
    subheading: "NADAL CHARTERS",
    text: "We provide the vessel. The Mediterranean provides the rest. Experience the islands through a lens of absolute privacy and effortless luxury.",
    image: "https://images.unsplash.com/photo-1605281317010-fe5ffe798151?auto=format&fit=crop&q=80&w=1200"
  },
  fleet: {
    heading: "The Charter Collection",
    items: [
      {
        id: "1",
        title: "Iberia 92",
        subtitle: "Classic Mahogany",
        image: "https://images.unsplash.com/photo-1567891240304-ac946a4d358f?auto=format&fit=crop&q=80&w=800",
        price: "€12,500 / Day",
        details: "4 Cabins · Crewed"
      },
      {
        id: "2",
        title: "The Solstice",
        subtitle: "Modern Minimalist",
        image: "https://images.unsplash.com/photo-1621275471769-e6aa344546d5?auto=format&fit=crop&q=80&w=800",
        price: "€18,000 / Day",
        details: "5 Cabins · Wellness"
      },
      {
        id: "3",
        title: "Heritage 70",
        subtitle: "Vintage Lines",
        image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&q=80&w=800",
        price: "€9,200 / Day",
        details: "3 Cabins · Classic"
      }
    ]
  },
  destinations: {
    heading: "Hidden Harbors",
    items: [
      { id: "d1", name: "Deià", image: "https://images.unsplash.com/photo-1516483642773-2f66be7ed114?auto=format&fit=crop&q=80&w=600" },
      { id: "d2", name: "Cabrera", image: "https://images.unsplash.com/photo-1534008757030-27299c4371b6?auto=format&fit=crop&q=80&w=600" },
      { id: "d3", name: "Tramuntana", image: "https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?auto=format&fit=crop&q=80&w=600" }
    ]
  },
  concierge: {
    heading: "Effortless Service",
    text: "From private chefs to secluded island transfers. Your only requirement is to enjoy the view.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=1200"
  },
  testimonials: {
    items: [
      {
        id: "t1",
        quote: "The definitive way to experience the Balearics.",
        author: "Private Client",
        context: "August 2024"
      }
    ]
  },
  contact: {
    phone: "+34 611 215 790",
    whatsapp: "+34 611 215 790",
    email: "charter@nadal.com",
    address: "Carrer Capitania, 07181 Portals Nous, Illes Balears (Mallorca, Spain)"
  }
};
