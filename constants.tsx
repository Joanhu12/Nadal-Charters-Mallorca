
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
    heading: "Elegance on Water since 1984",
    subheading: "NADAL CHARTERS",
    text: "We provide the vessel. The Mediterranean provides the rest. Experience the islands through a lens of absolute privacy and effortless luxury.",
    image: "https://images.pexels.com/photos/18649940/pexels-photo-18649940.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  fleet: {
    heading: "The Charter Collection",
    items: [
      {
        id: "1",
        title: "Funky Town",
        subtitle: "Canados 90 · Performance Icon",
        image: "https://www.smartcharteribiza.com/wp-content/uploads/2019/04/CANADOS_90_25.jpg",
        price: "€7,200 / Day",
        details: "4 Cabins · 10 Guests",
        location: "Ibiza & Formentera",
        length: "27.5 m",
        year: "2010 (Refit 2022)",
        crew: "3 Professionals",
        fullDescription: "Funky Town is a Canados 90 that redefines Mediterranean speed and elegance. Designed for high-performance cruising, she combines aggressive lines with a luxurious interior featuring 3 Double and 1 Twin cabin.",
        gallery: [
          "https://www.smartcharteribiza.com/wp-content/uploads/2019/04/CANADOS_90_25.jpg",
          "https://www.smartcharteribiza.com/wp-content/uploads/2019/04/CANADOS_90_27.jpg",
          "https://www.smartcharteribiza.com/wp-content/uploads/2019/04/CANADOS_90_13.jpg",
          "https://www.smartcharteribiza.com/wp-content/uploads/2019/04/interior_canados_90_ibiza_low-4-1.jpg",
          "https://www.smartcharteribiza.com/wp-content/uploads/2019/04/interior_canados_90_ibiza_low-1.jpg",
          "https://www.smartcharteribiza.com/wp-content/uploads/2019/04/interior_canados_90_ibiza_low.jpg"
        ],
        specs: [
          { label: "Cruising Speed", value: "32 Knots" },
          { label: "Capacity", value: "10 Guests + 3 Crew" }
        ],
        amenities: ["Master Suite", "Williams Tender", "SeaBobs", "Premium Sound"]
      },
      {
        id: "5",
        title: "Kinki",
        subtitle: "Sunseeker Predator 92",
        image: "https://imageresizer.yachtsbt.com/boats/67d9496ca544b032100a58ea/67d94de355478f62060d2f56.jpg?method=fit&width=3066&height=1350&format=webp",
        price: "€9,000 / Day",
        details: "4 Cabins · 10 Guests",
        location: "Ibiza & Formentera",
        length: "28.15m",
        year: "2009",
        crew: "4 Professionals",
        fullDescription: "The Sunseeker Predator 92 'Kinki' is a masterpiece of aggressive styling and British marine engineering. Perfect for those who seek high-speed thrills and expansive sunbathing decks.",
        gallery: [
          "https://imageresizer.yachtsbt.com/boats/67d9496ca544b032100a58ea/67d94de355478f62060d2f56.jpg?method=fit&width=3066&height=1350&format=webp",
          "https://imageresizer.yachtsbt.com/boats/67d9496ca544b032100a58ea/67d94de455478f62060d2f64.jpg?method=fit&width=2044&height=900&format=webp",
          "https://imageresizer.yachtsbt.com/boats/67d9496ca544b032100a58ea/67d94de355478f62060d2f5a.jpg?method=fit&width=2044&height=900&format=webp",
          "https://imageresizer.yachtsbt.com/boats/67d9496ca544b032100a58ea/67d94de455478f62060d2f5e.jpg?method=fit&width=2044&height=900&format=webp",
          "https://imageresizer.yachtsbt.com/boats/67d9496ca544b032100a58ea/67d94de455478f62060d2f60.jpg?method=fit&width=2044&height=900&format=webp"
        ],
        specs: [{ label: "Capacity", value: "10 Guests" }],
        amenities: ["Hydraulic Platform", "Jet Tender", "Air Conditioning"]
      },
      {
        id: "10",
        title: "Venus",
        subtitle: "The 31m Masterpiece",
        image: "https://imageresizer.yachtsbt.com/boats/692747312756f3661d084ff7/692747342756f3661d08502b.jpg?method=fit&width=2044&height=900&format=webp",
        price: "€28,000 / Day",
        details: "4 Cabins · 12 Guests",
        location: "Mallorca",
        length: "31 m",
        year: "2024",
        crew: "Professional Team",
        fullDescription: "Venus is a brand new 2024 pinnacle of naval architecture. Designed for up to 12 guests, she features state-of-the-art stabilizers and a beach-club style aft deck.",
        gallery: [
          "https://imageresizer.yachtsbt.com/boats/692747312756f3661d084ff7/692747342756f3661d08502b.jpg?method=fit&width=2044&height=900&format=webp",
          "https://imageresizer.yachtsbt.com/boats/692747312756f3661d08501d.webp?method=fit&width=2044&height=900&format=webp",
          "https://imageresizer.yachtsbt.com/boats/692747312756f3661d084ff7/692747332756f3661d085027.jpg?method=fit&width=2044&height=900&format=webp",
          "https://imageresizer.yachtsbt.com/boats/692747312756f3661d084ff7/692747322756f3661d085015.jpg?method=fit&width=2044&height=900&format=webp",
          "https://imageresizer.yachtsbt.com/boats/692747312756f3661d084ff7/692747342756f3661d085033.jpg?method=fit&width=2044&height=900&format=webp"
        ],
        specs: [{ label: "Capacity", value: "12 Guests" }],
        amenities: ["Flybridge", "Jet Ski", "Water Toys"]
      },
      {
        id: "7",
        title: "Ocean Pearl",
        subtitle: "Italian Masterpiece",
        image: "https://www.smartchartermarbella.com/wp-content/uploads/2023/07/CranchiM44HT-003.jpg",
        price: "€6,600 / Day",
        details: "2 Cabins · 8 Guests",
        location: "Mallorca",
        length: "13.40 m",
        year: "2023",
        crew: "Professional Skipper",
        fullDescription: "Italian naval design and contemporary comfort. Perfect for exploring the Balearics with up to 8 guests.",
        gallery: [
          "https://www.smartchartermarbella.com/wp-content/uploads/2023/07/CranchiM44HT-003.jpg",
          "https://www.smartchartermarbella.com/wp-content/uploads/2023/07/CranchiM44HT-001.jpg",
          "https://www.smartchartermarbella.com/wp-content/uploads/2023/07/CranchiM44HT-005.jpg",
          "https://www.smartchartermarbella.com/wp-content/uploads/2023/07/CranchiM44HT-014.jpg"
        ],
        specs: [{ label: "Capacity", value: "8 Guests" }],
        amenities: ["Hard Top", "Hydraulic Platform"]
      },
      {
        id: "11",
        title: "Amani",
        subtitle: "Astondoa 72 GLX",
        image: "https://www.smartcharteribiza.com/wp-content/uploads/2025/06/2001-astondoa-72-glx-power-7316347-20241009065712320-1_XLARGE-e1750254075618.jpg",
        price: "€5,300 / Day",
        details: "4 Cabins · 12 Guests",
        location: "Mallorca",
        length: "23m",
        year: "2001 (Refit 2023)",
        crew: "2 Professionals",
        fullDescription: "Sophisticated sanctuary for 12 guests. Timeless lines and expansive deck space.",
        gallery: [
          "https://www.smartcharteribiza.com/wp-content/uploads/2025/06/2001-astondoa-72-glx-power-7316347-20241009065712320-1_XLARGE-e1750254075618.jpg",
          "https://www.smartcharteribiza.com/wp-content/uploads/2025/06/72_Astondoa_Amani_7.png",
          "https://www.smartcharteribiza.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-05-20-at-18.31.33-7.jpeg",
          "https://www.smartcharteribiza.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-05-20-at-18.31.32-1.jpeg"
        ],
        specs: [{ label: "Capacity", value: "12 Guests" }],
        amenities: ["Flybridge BBQ", "Paddleboards"]
      },
      {
        id: "2",
        title: "Inspiration",
        subtitle: "Minimalist Sanctuary",
        image: "https://cdn.bluebnc.com/images/boat/1347/9a5a03ea-8e96-41fd-9dff-d6a12939ddb3-large.webp",
        price: "€10,400 / Day",
        details: "2 Cabins · 12 Guests",
        location: "Mallorca",
        length: "18m",
        year: "2023",
        crew: "2 Professionals",
        fullDescription: "Masterpiece of contemporary design, tailored for intimate escapes. Accommodates 12 guests.",
        gallery: [
          "https://cdn.bluebnc.com/images/boat/1347/9a5a03ea-8e96-41fd-9dff-d6a12939ddb3-large.webp",
          "https://cdn.bluebnc.com/images/boat/1347/3ae822e4-a94d-432f-a197-c872b8abb1ee-large.webp",
          "https://cdn.bluebnc.com/images/boat/1347/34d6277f-48a1-4df6-a965-8ce18583d3a2-large.webp",
          "https://cdn.bluebnc.com/images/boat/1347/1debf781-4a67-48f3-b246-95b103c2f2dc-large.webp"
        ],
        specs: [{ label: "Capacity", value: "12 Guests" }],
        amenities: ["Wellness Spa", "Paddle Boards"]
      },
      {
        id: "8",
        title: "Gran Abe II",
        subtitle: "Azimut 77S",
        image: "https://cdn.bluebnc.com/images/boat/3022/6c9f9c51-6e47-47a9-8548-e24fe183098c-large.webp",
        price: "€24,000 / Day",
        details: "4 Cabins · 13 Guests",
        location: "Ibiza & Formentera",
        length: "23.6 m",
        year: "2016 (Refit 2023)",
        crew: "3 Professionals",
        fullDescription: "Sleek performance and Italian grandeur. Now accommodating up to 13 guests.",
        gallery: [
          "https://cdn.bluebnc.com/images/boat/3022/6c9f9c51-6e47-47a9-8548-e24fe183098c-large.webp",
          "https://cdn.bluebnc.com/images/boat/3022/4476ea64-9280-4a88-9584-a6b2778f52dd-large.webp",
          "https://cdn.bluebnc.com/images/boat/3022/d5bd65ad-bc0e-41bb-ad3b-f37d900c1ae2-large.webp",
          "https://cdn.bluebnc.com/images/boat/3022/75c71694-f5d4-445f-b405-7cfafceafb63-large.webp"
        ],
        specs: [{ label: "Capacity", value: "13 Guests" }],
        amenities: ["Retractable Sunroof", "Seabobs"]
      },
      {
        id: "4",
        title: "Alvium",
        subtitle: "Ferretti Custom Line 106'",
        image: "https://cdn.bluebnc.com/images/boat/3205/76e80c5b-d5fb-44a5-b401-cd94e6f01fa9-large.webp",
        price: "€80,000 / Day",
        details: "5 Cabins · 25 Guests",
        location: "Mallorca",
        length: "32.82 m",
        year: "2022",
        crew: "5 Professionals",
        fullDescription: "Italian grandeur. Welcomes up to 25 guests for the most exclusive day charters in Ibiza.",
        gallery: [
          "https://cdn.bluebnc.com/images/boat/3205/76e80c5b-d5fb-44a5-b401-cd94e6f01fa9-large.webp",
          "https://cdn.bluebnc.com/images/boat/3205/de05c108-f7af-4d7f-a058-9e3bf16d9464-large.webp",
          "https://cdn.bluebnc.com/images/boat/3205/5b7e06b8-efc4-4c1d-8a22-c70017ec1a85-large.webp",
          "https://cdn.bluebnc.com/images/boat/3205/c8cc3318-f629-42be-abf3-3be3394289c0-large.webp"
        ],
        specs: [{ label: "Capacity", value: "25 Guests + 5 Crew" }],
        amenities: ["Expansive Flybridge", "Stabilizers"]
      }
    ]
  },
  destinations: {
    heading: "Hidden Harbors",
    items: [
      { id: "d1", name: "Deià", image: "https://abcmallorcastorage.blob.core.windows.net/images/2018/01/cala-deia-img01.jpg" },
      { id: "d2", name: "Cabrera", image: "https://st3.idealista.com/news/archivos/styles/fullwidth_xl/public/2025-05/images/view_of_isla_de_cabrera_national_park_mallorca_spain_23325335182_1.jpg?VersionId=4kfdoAIe.0CFeJscoMBsW5WhHOq8Gsr9&h=77d0ba2c&itok=Pc97HPEi" },
      { id: "d3", name: "Tramuntana", image: "https://images.unsplash.com/photo-1734639403228-476663647bcf?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FsYSUyMG1hbGwow2FmfGVufDB8MXwwfHx8MA%3D%3D" }
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
        quote: "The definitive way to experience the Balearics. The crew's attention to detail was beyond anything we've seen.",
        author: "Julian Vercetti",
        authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300",
        context: "August 2024 · Mallorca"
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
