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
      },
      {
        id: "4",
        title: "Azure 60",
        subtitle: "Luxury Catamaran",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
        price: "€11,200 / Day",
        details: "4 Cabins · Stability"
      },
      {
        id: "5",
        title: "Zephyr 85",
        subtitle: "Performance Cruiser",
        image: "https://images.unsplash.com/photo-1517315003714-a071486bd9ea?auto=format&fit=crop&q=80&w=800",
        price: "€15,500 / Day",
        details: "4 Cabins · Speed"
      },
      {
        id: "6",
        title: "Meridian",
        subtitle: "Superyacht Luxe",
        image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=800",
        price: "€38,000 / Day",
        details: "6 Cabins · Jacuzzi"
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
        quote: "The definitive way to experience the Balearics. The crew's attention to detail and knowledge of hidden Calas was beyond anything we've seen elsewhere.",
        author: "Julian Vercetti",
        authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300",
        context: "August 2024 · Mallorca"
      },
      {
        id: "t2",
        quote: "Absolute privacy and impeccable service. We spent three days in hidden coves that felt like another world.",
        author: "Elena Sorokin",
        authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300",
        context: "July 2024 · Cabrera"
      },
      {
        id: "t3",
        quote: "NADAL represents the pinnacle of Mediterranean yachting. Every request was handled with discrete professionalism.",
        author: "Brooke Montgomery",
        authorImage: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=400",
        context: "September 2024 · Formentera"
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