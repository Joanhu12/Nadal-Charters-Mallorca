
import { MultiLangContent } from './types';

export const INITIAL_CONTENT: MultiLangContent = {
  en: {
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
          price: "€8,999 / Day",
          details: "4 Cabins · 10 Guests",
          location: "Ibiza & Formentera",
          length: "27.5 m",
          year: "2010 (Refit 2022)",
          crew: "3 Professionals",
          fullDescription: "Funky Town is a Canados 90 that redefines Mediterranean speed and elegance. Designed for high-performance cruising, she combines aggressive lines with a luxurious interior featuring 3 Double and 1 Twin cabin.",
          gallery: [
            "https://www.smartcharteribiza.com/wp-content/uploads/2019/04/CANADOS_90_25.jpg",
            "https://www.smartcharteribiza.com/wp-content/uploads/2019/04/CANADOS_90_27.jpg",
            "https://www.smartcharteribiza.com/wp-content/uploads/2019/04/CANADOS_90_13.jpg"
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
          price: "€11,250 / Day",
          details: "4 Cabins · 10 Guests",
          location: "Ibiza & Formentera",
          length: "28.15m",
          year: "2009",
          crew: "4 Professionals",
          fullDescription: "The Sunseeker Predator 92 'Kinki' is a masterpiece of aggressive styling and British marine engineering.",
          specs: [{ label: "Capacity", value: "10 Guests" }],
          amenities: ["Hydraulic Platform", "Jet Tender", "Air Conditioning"]
        },
        {
          id: "10",
          title: "Venus",
          subtitle: "The 31m Masterpiece",
          image: "https://imageresizer.yachtsbt.com/boats/692747312756f3661d084ff7/692747342756f3661d08502b.jpg?method=fit&width=2044&height=900&format=webp",
          price: "€65,000 / Day",
          details: "4 Cabins · 12 Guests",
          location: "Mallorca",
          length: "31 m",
          year: "2024",
          crew: "Professional Team",
          fullDescription: "Venus is a brand new 2024 pinnacle of naval architecture. Designed for up to 12 guests.",
          specs: [{ label: "Capacity", value: "12 Guests" }],
          amenities: ["Flybridge", "Jet Ski", "Water Toys"]
        },
        {
          id: "7",
          title: "Ocean Pearl",
          subtitle: "Italian Masterpiece",
          image: "https://www.smartchartermarbella.com/wp-content/uploads/2023/07/CranchiM44HT-003.jpg",
          price: "€8,200 / Day",
          details: "2 Cabins · 8 Guests",
          location: "Mallorca",
          length: "13.40 m",
          year: "2023",
          crew: "Professional Skipper",
          fullDescription: "Italian naval design and contemporary comfort. Perfect for exploring the Balearics with up to 8 guests.",
          specs: [{ label: "Capacity", value: "8 Guests" }],
          amenities: ["Hard Top", "Hydraulic Platform"]
        },
        {
          id: "11",
          title: "Amani",
          subtitle: "Astondoa 72 GLX",
          image: "https://www.smartcharteribiza.com/wp-content/uploads/2025/06/2001-astondoa-72-glx-power-7316347-20241009065712320-1_XLARGE-e1750254075618.jpg",
          price: "€6,599 / Day",
          details: "4 Cabins · 12 Guests",
          location: "Ibiza & Formentera",
          length: "23m",
          year: "2001 (Refit 2023)",
          crew: "2 Professionals",
          fullDescription: "Sophisticated sanctuary for 12 guests. Timeless lines and expansive deck space.",
          specs: [{ label: "Capacity", value: "12 Guests" }],
          amenities: ["Flybridge BBQ", "Paddleboards"]
        },
        {
          id: "2",
          title: "Inspiration",
          subtitle: "Minimalist Sanctuary",
          image: "https://cdn.bluebnc.com/images/boat/1347/9a5a03ea-8e96-41fd-9dff-d6a12939ddb3-large.webp",
          price: "€13,000 / Day",
          details: "2 Cabins · 12 Guests",
          location: "Mallorca",
          length: "18m",
          year: "2023",
          crew: "2 Professionals",
          fullDescription: "Masterpiece of contemporary design, tailored for intimate escapes. Accommodates 12 guests.",
          specs: [{ label: "Capacity", value: "12 Guests" }],
          amenities: ["Wellness Spa", "Paddle Boards"]
        },
        {
          id: "8",
          title: "Gran Abe II",
          subtitle: "Azimut 77S",
          image: "https://cdn.bluebnc.com/images/boat/3022/6c9f9c51-6e47-47a9-8548-e24fe183098c-large.webp",
          price: "€12,800 / Day",
          details: "4 Cabins · 13 Guests",
          location: "Ibiza & Formentera",
          length: "23.6 m",
          year: "2016 (Refit 2023)",
          crew: "3 Professionals",
          fullDescription: "Sleek performance and Italian grandeur. Now accommodating up to 13 guests.",
          specs: [{ label: "Capacity", value: "13 Guests" }],
          amenities: ["Retractable Sunroof", "Seabobs"]
        },
        {
          id: "4",
          title: "Alvium",
          subtitle: "Ferretti Custom Line 106'",
          image: "https://cdn.bluebnc.com/images/boat/3205/76e80c5b-d5fb-44a5-b401-cd94e6f01fa9-large.webp",
          price: "€100,000 / Day",
          details: "5 Cabins · 25 Guests",
          location: "Ibiza & Formentera",
          length: "32.82 m",
          year: "2022",
          crew: "5 Professionals",
          fullDescription: "Italian grandeur. Welcomes up to 25 guests for the most exclusive day charters in Ibiza.",
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
  },
  es: {
    hero: {
      title: "Alquiler de Yates en Baleares",
      subtitle: "Exclusivos chárters de yates por las Islas Baleares. Elegancia, diseñada para el horizonte.",
      ctaPrimary: "Reserve su Viaje",
      ctaSecondary: "La Flota",
      bgImage: "https://images.unsplash.com/photo-1747080763845-5aa9e20d38be?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMyfHx8ZW58MHx8fHx8"
    },
    about: {
      heading: "Elegancia sobre el agua desde 1984",
      subheading: "NADAL CHARTERS",
      text: "Nosotros ponemos el barco. El Mediterráneo pone el resto. Viva las islas a través de la privacidad absoluta y el lujo sin esfuerzo.",
      image: "https://images.pexels.com/photos/18649940/pexels-photo-18649940.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    fleet: {
      heading: "La Colección Chárter",
      items: [
        {
          id: "1",
          title: "Funky Town",
          subtitle: "Canados 90 · Icono de Rendimiento",
          image: "https://www.smartcharteribiza.com/wp-content/uploads/2019/04/CANADOS_90_25.jpg",
          price: "€8,999 / Día",
          details: "4 Cabinas · 10 Huéspedes",
          location: "Ibiza y Formentera",
          length: "27.5 m",
          year: "2010 (Refit 2022)",
          crew: "3 Profesionales",
          fullDescription: "Funky Town es un Canados 90 que redefine la velocidad y elegancia mediterránea. Diseñado para el alto rendimiento.",
          gallery: [
            "https://www.smartcharteribiza.com/wp-content/uploads/2019/04/CANADOS_90_25.jpg",
            "https://www.smartcharteribiza.com/wp-content/uploads/2019/04/CANADOS_90_27.jpg",
            "https://www.smartcharteribiza.com/wp-content/uploads/2019/04/CANADOS_90_13.jpg"
          ],
          specs: [
            { label: "Velocidad de Crucero", value: "32 Nudos" },
            { label: "Capacidad", value: "10 Huéspedes + 3 Tripulación" }
          ],
          amenities: ["Suite Principal", "Williams Tender", "SeaBobs", "Sonido Premium"]
        },
        {
          id: "5",
          title: "Kinki",
          subtitle: "Sunseeker Predator 92",
          image: "https://imageresizer.yachtsbt.com/boats/67d9496ca544b032100a58ea/67d94de355478f62060d2f56.jpg?method=fit&width=3066&height=1350&format=webp",
          price: "€11,250 / Día",
          details: "4 Cabinas · 10 Huéspedes",
          location: "Ibiza y Formentera",
          length: "28.15m",
          year: "2009",
          crew: "4 Profesionales",
          fullDescription: "El Sunseeker Predator 92 'Kinki' es una obra maestra de estilo agresivo e ingeniería británica.",
          specs: [{ label: "Capacidad", value: "10 Huéspedes" }],
          amenities: ["Plataforma Hidráulica", "Jet Tender", "Aire Acondicionado"]
        },
        {
          id: "10",
          title: "Venus",
          subtitle: "Obra Maestra de 31m",
          image: "https://imageresizer.yachtsbt.com/boats/692747312756f3661d084ff7/692747342756f3661d08502b.jpg?method=fit&width=2044&height=900&format=webp",
          price: "€65,000 / Día",
          details: "4 Cabinas · 12 Huéspedes",
          location: "Mallorca",
          length: "31 m",
          year: "2024",
          crew: "Equipo Profesional",
          fullDescription: "Venus es el pináculo de la arquitectura naval 2024. Diseñado para hasta 12 huéspedes.",
          specs: [{ label: "Capacidad", value: "12 Huéspedes" }],
          amenities: ["Flybridge", "Jet Ski", "Juguetes Acuáticos"]
        },
        {
          id: "7",
          title: "Ocean Pearl",
          subtitle: "Obra Maestra Italiana",
          image: "https://www.smartchartermarbella.com/wp-content/uploads/2023/07/CranchiM44HT-003.jpg",
          price: "€8,200 / Día",
          details: "2 Cabinas · 8 Huéspedes",
          location: "Mallorca",
          length: "13.40 m",
          year: "2023",
          crew: "Patrón Profesional",
          fullDescription: "Diseño naval italiano y confort contemporáneo. Perfecto para explorar las Baleares con hasta 8 huéspedes.",
          specs: [{ label: "Capacidad", value: "8 Huéspedes" }],
          amenities: ["Hard Top", "Plataforma Hidráulica"]
        },
        {
          id: "11",
          title: "Amani",
          subtitle: "Astondoa 72 GLX",
          image: "https://www.smartcharteribiza.com/wp-content/uploads/2025/06/2001-astondoa-72-glx-power-7316347-20241009065712320-1_XLARGE-e1750254075618.jpg",
          price: "€6,599 / Día",
          details: "4 Cabinas · 12 Huéspedes",
          location: "Ibiza y Formentera",
          length: "23m",
          year: "2001 (Refit 2023)",
          crew: "2 Profesionales",
          fullDescription: "Santuario sofisticado para 12 huéspedes. Líneas atemporales y amplio espacio en cubierta.",
          specs: [{ label: "Capacidad", value: "12 Huéspedes" }],
          amenities: ["BBQ en Flybridge", "Paddleboards"]
        },
        {
          id: "2",
          title: "Inspiration",
          subtitle: "Santuario Minimalista",
          image: "https://cdn.bluebnc.com/images/boat/1347/9a5a03ea-8e96-41fd-9dff-d6a12939ddb3-large.webp",
          price: "€13,000 / Día",
          details: "2 Cabinas · 12 Huéspedes",
          location: "Mallorca",
          length: "18m",
          year: "2023",
          crew: "2 Profesionales",
          fullDescription: "Obra maestra del diseño contemporáneo, adaptada para escapadas íntimas. Capacidad para 12 huéspedes.",
          specs: [{ label: "Capacidad", value: "12 Huéspedes" }],
          amenities: ["Wellness Spa", "Paddle Boards"]
        },
        {
          id: "8",
          title: "Gran Abe II",
          subtitle: "Azimut 77S",
          image: "https://cdn.bluebnc.com/images/boat/3022/6c9f9c51-6e47-47a9-8548-e24fe183098c-large.webp",
          price: "€12,800 / Día",
          details: "4 Cabinas · 13 Huéspedes",
          location: "Ibiza y Formentera",
          length: "23.6 m",
          year: "2016 (Refit 2023)",
          crew: "3 Profesionales",
          fullDescription: "Rendimiento elegante y grandeza italiana. Ahora con capacidad para hasta 13 huéspedes.",
          specs: [{ label: "Capacidad", value: "13 Huéspedes" }],
          amenities: ["Techo Retráctil", "Seabobs"]
        },
        {
          id: "4",
          title: "Alvium",
          subtitle: "Ferretti Custom Line 106'",
          image: "https://cdn.bluebnc.com/images/boat/3205/76e80c5b-d5fb-44a5-b401-cd94e6f01fa9-large.webp",
          price: "€100,000 / Día",
          details: "5 Cabinas · 25 Huéspedes",
          location: "Ibiza y Formentera",
          length: "32.82 m",
          year: "2022",
          crew: "5 Profesionales",
          fullDescription: "Grandeza italiana. Recibe hasta 25 invitados para los chárters de día más exclusivos en Ibiza.",
          specs: [{ label: "Capacidad", value: "25 Huéspedes + 5 Tripulación" }],
          amenities: ["Amplio Flybridge", "Estabilizadores"]
        }
      ]
    },
    destinations: {
      heading: "Puertos Escondidos",
      items: [
        { id: "d1", name: "Deià", image: "https://abcmallorcastorage.blob.core.windows.net/images/2018/01/cala-deia-img01.jpg" },
        { id: "d2", name: "Cabrera", image: "https://st3.idealista.com/news/archivos/styles/fullwidth_xl/public/2025-05/images/view_of_isla_de_cabrera_national_park_mallorca_spain_23325335182_1.jpg?VersionId=4kfdoAIe.0CFeJscoMBsW5WhHOq8Gsr9&h=77d0ba2c&itok=Pc97HPEi" },
        { id: "d3", name: "Tramuntana", image: "https://images.unsplash.com/photo-1734639403228-476663647bcf?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FsYSUyMG1hbGwow2FmfGVufDB8MXwwfHx8MA%3D%3D" }
      ]
    },
    concierge: {
      heading: "Servicio sin Esfuerzo",
      text: "Desde chefs privados hasta traslados a islas recónditas. Su único requisito es disfrutar de la vista.",
      image: "https://hillrobinson.com/wp-content/uploads/2024/02/Yacht-Crew-Services_resize.jpg"
    },
    testimonials: {
      items: [
        {
          id: "t1",
          quote: "La forma definitiva de vivir las Baleares. La atención al detalle de la tripulación superó todo lo que habíamos visto.",
          author: "Julian Vercetti",
          authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300",
          context: "Agosto 2024 · Mallorca"
        }
      ]
    },
    contact: {
      phone: "+34 611 215 790",
      whatsapp: "+34 611 215 790",
      email: "charter@nadal.com",
      address: "Carrer Capitania, 07181 Portals Nous, Illes Balears (Mallorca, España)"
    }
  }
};
