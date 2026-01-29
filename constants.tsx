import { AppContent } from './types';

export const INITIAL_CONTENT: AppContent = {
  hero: {
    title: "Balearic Yacht Charters",
    subtitle: "Exclusive yacht charters across the Balearic Islands. Elegance, curated for the horizon.",
    ctaPrimary: "Reserve Your Voyage",
    ctaSecondary: "The Fleet",
    bgImage: "https://images.unsplash.com/photo-1747080763845-5aa9e20d38be?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMyfHx8ZW58MHx8fHx8"
  },
  about: {
    heading: "Elegance on Water",
    subheading: "NADAL CHARTERS",
    text: "We provide the vessel. The Mediterranean provides the rest. Experience the islands through a lens of absolute privacy and effortless luxury.",
    image: "https://images.pexels.com/photos/18649940/pexels-photo-18649940.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  fleet: {
    heading: "The Charter Collection",
    items: [
      {
        id: "1",
        title: "Iberia 92",
        subtitle: "Superyacht Majesty",
        image: "https://images.unsplash.com/photo-1559385301-0187cb6eff46?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8eWFjaHR8ZW58MHwxfDB8fHww",
        price: "€62,500 / Day",
        details: "8 Cabins · Crewed"
      },
      {
        id: "2",
        title: "The Solstice",
        subtitle: "Modern Minimalist",
        image: "https://images.unsplash.com/photo-1730544218748-74f28a89215b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGx1eHVyeSUyMHlhY2h0c3xlbnwwfDF8MHx8fDA%3D",
        price: "€4,100 / Day",
        details: "2 Cabins · Wellness"
      },
      {
        id: "3",
        title: "My Lady",
        subtitle: "Sailing Icon",
        image: "https://images.unsplash.com/photo-1692775562810-f5f6445920d1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHxsdXh1cnklMjB5YWNodHN8ZW58MHwxfDB8fHww",
        price: "€7,500 / Day",
        details: "3 Cabins · Sailing"
      },
      {
        id: "4",
        title: "Azure",
        subtitle: "Quiet Luxury",
        image: "https://images.unsplash.com/photo-1604671801989-586dde3c1574?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE1fHx5YWNodHxlbnwwfDF8MHx8fDA%3D",
        price: "€6,000 / Day",
        details: "3 Cabins · Stability"
      },
      {
        id: "5",
        title: "Zephyr 85",
        subtitle: "Performance Cruiser",
        image: "https://images.unsplash.com/photo-1662641723310-d3ec5b838295?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA0fHx5YWNodHxlbnwwfDF8MHx8fDA%3D",
        price: "€7,500 / Day",
        details: "2 Cabins · Speed"
      },
      {
        id: "6",
        title: "Meridian",
        subtitle: "Pure Serenity",
        image: "https://images.unsplash.com/photo-1698740988027-33e50fa9d723?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNwYW5pc2glMjB5YWNodHxlbnwwfDF8MHx8fDA%3D",
        price: "€3,800 / Day",
        details: "2 Cabins · Comfort"
      }
    ]
  },
  destinations: {
    heading: "Hidden Harbors",
    items: [
      { id: "d1", name: "Deià", image: "https://abcmallorcastorage.blob.core.windows.net/images/2018/01/cala-deia-img01.jpg" },
      { id: "d2", name: "Cabrera", image: "https://st3.idealista.com/news/archivos/styles/amp_1200x675_16_9/public/2025-05/images/coast-3949782_1280.jpg?VersionId=EK1PefQKW4yXkTj6AM4K15Tz4cgIOawe&itok=8mg4cv-q" },
      { id: "d3", name: "Tramuntana", image: "https://images.unsplash.com/photo-1734639403228-476663647bcf?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FsYSUyMG1hbGxvcmNhfGVufDB8MXwwfHx8MA%3D%3D" }
    ]
  },
  concierge: {
    heading: "Effortless Service",
    text: "From private chefs to secluded island transfers. Your only requirement is to enjoy the view.",
    image: "https://hillrobinson.com/wp-content/uploads/2024/02/Yacht-Crew-Services_resize.jpg"
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
        authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&get=80&w=300",
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