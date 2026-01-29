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
        price: "€8,999 / Day",
        details: "4 Cabins · 12 + 3 Crew",
        length: "27.5 m",
        year: "2010 (Refit 2022)",
        crew: "3 Professionals",
        fullDescription: "Funky Town is a Canados 90 that redefines Mediterranean speed and elegance. Designed for high-performance cruising, she combines aggressive lines with a luxurious interior featuring 3 Double and 1 Twin cabin. Fuel is not included; estimated consumption is 800 L/H (approx 1,200 Litres for a standard day trip of 1.5H cruising).",
        gallery: [
          "https://www.smartcharteribiza.com/wp-content/uploads/2019/04/CANADOS_90_25.jpg",
          "https://www.smartcharteribiza.com/wp-content/uploads/2019/04/CANADOS_90_27.jpg",
          "https://www.smartcharteribiza.com/wp-content/uploads/2019/04/CANADOS_90_13.jpg",
          "https://www.smartcharteribiza.com/wp-content/uploads/2019/04/interior_canados_90_ibiza_low-4-1.jpg",
          "https://www.smartcharteribiza.com/wp-content/uploads/2019/04/interior_canados_90_ibiza_low-1.jpg",
          "https://www.smartcharteribiza.com/wp-content/uploads/2019/04/interior_canados_90_ibiza_low.jpg",
          "https://www.smartcharteribiza.com/wp-content/uploads/2019/04/interior_canados_90_ibiza_low-8-1.jpg"
        ],
        specs: [
          { label: "Cruising Speed", value: "32 Knots" },
          { label: "Engine", value: "2 x MTU 2200 Diesel" },
          { label: "Fuel Consumption", value: "800 L/H" },
          { label: "Capacity", value: "12 Guests + 3 Crew" },
          { label: "Cabins", value: "3 Double, 1 Twin" }
        ],
        amenities: ["Master Suite", "Williams Tender", "SeaBobs", "Premium Sound", "Zero-Speed Stabilizers"]
      },
      {
        id: "5",
        title: "Kinki",
        subtitle: "High-Performance · Sunseeker Predator 92",
        image: "https://imageresizer.yachtsbt.com/boats/67d9496ca544b032100a58ea/67d94de455478f62060d2f64.jpg?method=fit&width=2044&height=900&format=webp",
        price: "€11,250 / Day",
        details: "4 Cabins · 12 Guests",
        length: "28.15m",
        year: "2009",
        crew: "4 Professionals",
        fullDescription: "The Sunseeker Predator 92 'Kinki' is a masterpiece of aggressive styling and British marine engineering. Built for those who demand performance without compromising on comfort, she features a striking silver hull and expansive exterior decks perfect for Balearic entertaining. Her interior is a blend of modern luxury and functional design, accommodating 8 guests in 4 exquisitely appointed cabins.",
        gallery: [
          "https://imageresizer.yachtsbt.com/boats/67d9496ca544b032100a58ea/67d94de455478f62060d2f64.jpg?method=fit&width=2044&height=900&format=webp",
          "https://imageresizer.yachtsbt.com/boats/67d9496ca544b032100a58ea/67d94de355478f62060d2f5a.jpg?method=fit&width=2044&height=900&format=webp",
          "https://imageresizer.yachtsbt.com/boats/67d9496ca544b032100a58ea/67d94de455478f62060d2f5e.jpg?method=fit&width=2044&height=900&format=webp",
          "https://imageresizer.yachtsbt.com/boats/67d9496ca544b032100a58ea/67d94de455478f62060d2f60.jpg?method=fit&width=2044&height=900&format=webp"
        ],
        specs: [
          { label: "Beam", value: "6.34m" },
          { label: "Engine", value: "2 x 2434hp" },
          { label: "Max Speed", value: "38 Knots" },
          { label: "Draft", value: "1.98m" }
        ],
        amenities: ["Hydraulic Platform", "Jet Tender", "Air Conditioning", "Bose Surround System", "Sunbathing Areas", "Stabilizers"]
      },
      {
        id: "10",
        title: "Venus",
        subtitle: "The 31m Masterpiece",
        image: "https://imageresizer.yachtsbt.com/boats/692747312756f3661d084ff7/692747342756f3661d08502b.jpg?method=fit&width=2044&height=900&format=webp",
        price: "€65,000 / Day",
        details: "4 Cabins · 12 Guests",
        length: "31 m",
        year: "2024",
        crew: "Professional Team",
        fullDescription: "Venus is a brand new 2024 pinnacle of naval architecture. At 31 meters long, she offers expansive deck spaces including a full flybridge and premium entertainment systems. Designed for the ultimate day charter experience for up to 12 guests, she features high-performance 2x1800 hp engines and is equipped with a Jet Ski and top-tier water toys.",
        gallery: [
          "https://imageresizer.yachtsbt.com/boats/692747312756f3661d084ff7/692747342756f3661d08502b.jpg?method=fit&width=2044&height=900&format=webp",
          "https://imageresizer.yachtsbt.com/boats/692747312756f3661d084ff7/692747322756f3661d08501d.webp?method=fit&width=2044&height=900&format=webp",
          "https://imageresizer.yachtsbt.com/boats/692747312756f3661d084ff7/692747332756f3661d085027.jpg?method=fit&width=2044&height=900&format=webp",
          "https://imageresizer.yachtsbt.com/boats/692747312756f3661d084ff7/692747322756f3661d085015.jpg?method=fit&width=2044&height=900&format=webp",
          "https://imageresizer.yachtsbt.com/boats/692747312756f3661d084ff7/692747342756f3661d085033.jpg?method=fit&width=2044&height=900&format=webp",
          "https://imageresizer.yachtsbt.com/boats/692747312756f3661d084ff7/69299625f2e2abc3440584dc.jpg?method=fit&width=2044&height=900&format=webp",
          "https://imageresizer.yachtsbt.com/boats/692747312756f3661d084ff7/692747322756f3661d085017.jpg?method=fit&width=2044&height=900&format=webp",
          "https://imageresizer.yachtsbt.com/boats/692747312756f3661d084ff7/692747322756f3661d085019.jpg?method=crop&width=116&height=116&format=webp"
        ],
        specs: [
          { label: "Engine", value: "2x1800 hp" },
          { label: "Beam", value: "6.3 m" },
          { label: "Cabins", value: "4" },
          { label: "Toilets", value: "5 Electric" },
          { label: "Fuel Tank", value: "10000 l" },
          { label: "Water Tank", value: "2500 l" }
        ],
        amenities: ["Flybridge", "Jet Ski", "Radar", "Bow Thruster", "Air Conditioning", "Bathing Platform", "Water Toys", "Sun Pads", "Audio System", "Satellite TV"]
      },
      {
        id: "7",
        title: "Ocean Pearl",
        subtitle: "Italian Masterpiece",
        image: "https://www.smartchartermarbella.com/wp-content/uploads/2023/07/CranchiM44HT-003.jpg",
        price: "€8,200 / Day",
        details: "2 Cabins · 10 + SKIPPER",
        length: "13.40 m",
        year: "2023",
        crew: "Professional Skipper",
        fullDescription: "The Ocean Pearl (Cranchi M44 HT) represents the absolute latest in Italian naval design and contemporary comfort. Perfect for exploring the Balearics with up to 10 guests.",
        gallery: [
          "https://www.smartchartermarbella.com/wp-content/uploads/2023/07/CranchiM44HT-003.jpg",
          "https://www.smartchartermarbella.com/wp-content/uploads/2023/07/CranchiM44HT-001.jpg",
          "https://www.smartchartermarbella.com/wp-content/uploads/2023/07/CranchiM44HT-005.jpg",
          "https://www.smartchartermarbella.com/wp-content/uploads/2023/07/CranchiM44HT-014.jpg",
          "https://www.smartchartermarbella.com/wp-content/uploads/2023/07/CranchiM44HT-015.jpg",
          "https://www.smartchartermarbella.com/wp-content/uploads/2023/07/CranchiM44HT-013.jpg",
          "https://www.smartchartermarbella.com/wp-content/uploads/2023/07/CranchiM44HT-012.jpg"
        ],
        specs: [
          { label: "Cabins", value: "2" },
          { label: "Speed", value: "10 Knots" },
          { label: "Engine", value: "2 Volvo D6 400HP" },
          { label: "Length", value: "13.40 m" }
        ],
        amenities: ["Hard Top", "Hydraulic Platform", "Stabilizers", "Nespresso Pro"]
      },
      {
        id: "11",
        title: "Amani",
        subtitle: "Astondoa 72 GLX · Timeless Luxury",
        image: "https://www.smartcharteribiza.com/wp-content/uploads/2025/06/72_Astondoa_Amani_7.png",
        price: "€6,599 / Day",
        details: "4 Cabins · 10 + 2 Crew",
        length: "23m",
        year: "2001 (Refit 2023)",
        crew: "2 Professionals",
        fullDescription: "Amani is an exquisite Astondoa 72 GLX, recently refitted to offer an unparalleled Mediterranean experience. With 2 double and 2 twin cabins, she provides a sophisticated sanctuary for 10 guests. Her timeless lines and expansive deck space make her the perfect choice for an elegant Balearic escape. Fuel is not included; estimated 1.5H cruising for a standard day trip.",
        gallery: [
          "https://www.smartcharteribiza.com/wp-content/uploads/2025/06/72_Astondoa_Amani_7.png",
          "https://www.smartcharteribiza.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-05-20-at-18.31.33-7.jpeg",
          "https://www.smartcharteribiza.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-05-20-at-18.31.32-1.jpeg",
          "https://www.smartcharteribiza.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-05-20-at-18.31.33-1.jpeg",
          "https://www.smartcharteribiza.com/wp-content/uploads/2025/06/2001-astondoa-72-glx-power-7316347-20241009065712320-1_XLARGE-e1750254075618.jpg"
        ],
        specs: [
          { label: "Cruising Speed", value: "15 Knots" },
          { label: "Length", value: "23m" },
          { label: "Capacity", value: "10 Guests + 2 Crew" },
          { label: "Cabins", value: "2 Doubles, 2 Twins" }
        ],
        amenities: ["Flybridge BBQ", "Paddleboards", "Snorkeling Gear", "Stabilizers", "Zero-Speed Comfort"]
      },
      {
        id: "2",
        title: "Inspiration",
        subtitle: "Minimalist Sanctuary",
        image: "https://cdn.bluebnc.com/images/boat/1347/9a5a03ea-8e96-41fd-9dff-d6a12939ddb3-large.webp",
        price: "€13,000 / Day",
        details: "2 Cabins · Wellness",
        length: "18m",
        year: "2023",
        crew: "2 Professionals",
        fullDescription: "A masterpiece of contemporary design, Inspiration is tailored for intimate escapes and wellness-focused charters.",
        gallery: [
          "https://cdn.bluebnc.com/images/boat/1347/9a5a03ea-8e96-41fd-9dff-d6a12939ddb3-large.webp",
          "https://cdn.bluebnc.com/images/boat/1347/3ae822e4-a94d-432f-a197-c872b8abb1ee-large.webp",
          "https://cdn.bluebnc.com/images/boat/1347/34d6277f-48a1-4df6-a965-8ce18583d3a2-large.webp",
          "https://cdn.bluebnc.com/images/boat/1347/1debf781-4a67-48f3-b246-95b103c2f2dc-large.webp",
          "https://cdn.bluebnc.com/images/boat/1347/78d542b8-f3b1-4efa-a344-cb54c32946fe-large.webp",
          "https://cdn.bluebnc.com/images/boat/1347/038dbd6e-ce1c-4b99-954d-b51cd8d0e77e-large.webp",
          "https://cdn.bluebnc.com/images/boat/1347/095ac5c5-298b-4af4-ba90-9d5a4c5309ee-small.webp"
        ],
        specs: [{ label: "Cruising", value: "25kn" }, { label: "Beam", value: "5.2m" }],
        amenities: ["Wellness Spa", "Paddle Boards", "Sound System"]
      },
      {
        id: "8",
        title: "Gran Abe II",
        subtitle: "Azimut 77S · Sleek Italian Performance",
        image: "https://cdn.bluebnc.com/images/boat/3022/6c9f9c51-6e47-47a9-8548-e24fe183098c-large.webp",
        price: "€12,800 / Day",
        details: "4 Cabins · 12 Guests",
        length: "23.6 m",
        year: "2016 (Refit 2023)",
        crew: "3 Professionals",
        fullDescription: "Experience unparalleled luxury aboard Gran Abe II, an exquisite Azimut 77S yacht that epitomises a seamless blend of high performance, elegant design, and cutting-edge technology. This remarkable 23.6-metre vessel is tailor-made for exploring the vibrant waters of the Mediterranean, offering both thrilling speed and exceptional comfort. From anchoring in secluded coves to cruising between idyllic island destinations at an impressive top speed of 35 knots, Gran Abe II promises an unforgettable yachting experience, ideal for families and groups of friends.",
        gallery: ["https://cdn.bluebnc.com/images/boat/3022/6c9f9c51-6e47-47a9-8548-e24fe183098c-large.webp"],
        specs: [
          { label: "Model", value: "Azimut 77S" },
          { label: "Length", value: "77′ / 23m" },
          { label: "Max Speed", value: "35 Knots" },
          { label: "Cruising Speed", value: "28 Knots" },
          { label: "Capacity (Day)", value: "12 Guests" },
          { label: "Capacity (Overnight)", value: "9 Guests" },
          { label: "Cabins", value: "4 Ensuite" },
          { label: "Engines", value: "Triple Volvo Penta IPS" }
        ],
        amenities: ["Expansive Flybridge", "Hydraulic Swim Platform", "Retractable Sunroof", "Williams 365 Tender", "2 x Seabob F5S", "Jetski Yamaha 1800R", "Inflatable Jetski Dock", "SUP Hobbie Mirage", "High-Speed Wi-Fi", "Stabilizers"]
      },
      {
        id: "9",
        title: "Maioara 26",
        subtitle: "Timeless Elegance · Classic Motor Yacht",
        image: "https://imageresizer.yachtsbt.com/boats/649d2371edd3bcc12c065706/666014ec474902d77c0c526c.jpg?method=fit&width=2044&height=900&format=webp",
        price: "€10,500 / Day",
        details: "4 Cabins · 12 Guests",
        length: "25.5 m",
        year: "1997",
        crew: "Professional Team",
        fullDescription: "Maioara 26 is a classic 25.5-meter motor yacht that offers timeless elegance and spacious luxury. Built in 1997 and meticulously maintained, she provides a stable and comfortable platform for exploring the Balearics. With accommodation for up to 10 guests across 4 cabins and a professional crew, she is the perfect choice for extended family charters or elegant day trips with a classic flair.",
        gallery: ["https://imageresizer.yachtsbt.com/boats/649d2371edd3bcc12c065706/666014ec474902d77c0c526c.jpg?method=fit&width=2044&height=900&format=webp"],
        specs: [
          { label: "Year", value: "1997" },
          { label: "Draught", value: "1.83 m" },
          { label: "Beam", value: "6.5 m" },
          { label: "Berths", value: "8 + 2" },
          { label: "Engine", value: "2x1500 hp" },
          { label: "Cabins", value: "4" },
          { label: "Fuel consumption", value: "700 l/h" },
          { label: "Water tank", value: "3000 l" }
        ],
        amenities: ["Autopilot", "Bow thruster", "Generator", "Radar", "Flybridge", "Air conditioning", "Jet ski", "Kayak", "Stand Up Paddle", "Bathing platform", "Audio system"]
      },
      {
        id: "3",
        title: "Prestige 680",
        subtitle: "Exclusive Flybridge · Modern Design",
        image: "https://cdn.bluebnc.com/images/boat/2239/0958a52e-dba6-4174-a5e6-4e8d42ff0340-large.webp",
        price: "€6,000 / Day",
        details: "4 Cabins · 8 Guests",
        length: "21.46 m",
        year: "2017",
        crew: "2 Professionals",
        fullDescription: "This Prestige 680 is Exclusive to Bluebnc was delivered in 2017 and has been kept in pristine condition since then. This recent model continues the successful technical characteristics of the brand while benefiting from the latest innovations. In perfect synergy, it offers an interior design full of brightness and generous space. Spacious 4 cabins will comfortably accommodate 8 people overnight. Her professional crew of 2 is waiting for you on board for what will be an unforgettable experience!",
        gallery: [
          "https://cdn.bluebnc.com/images/boat/2239/0958a52e-dba6-4174-a5e6-4e8d42ff0340-large.webp",
          "https://cdn.bluebnc.com/images/boat/2239/c794b1ba-1b65-4077-aefa-d7863b59ec51-small.webp",
          "https://cdn.bluebnc.com/images/boat/2239/f312de1b-7cfc-4863-8554-f698250ca04c-large.webp",
          "https://cdn.bluebnc.com/images/boat/2239/b1793b62-d64f-4f4f-b376-bbc813b306f8-large.webp",
          "https://cdn.bluebnc.com/images/boat/2239/8ae2925d-4a9e-480e-8107-09e763141168-large.webp",
          "https://cdn.bluebnc.com/images/boat/2239/231ea4fb-c5f6-4341-a066-e716e7e8bce3-small.webp",
          "https://cdn.bluebnc.com/images/boat/2239/4e548fc2-71bc-4b84-966a-d4336c50fd40-small.webp",
          "https://cdn.bluebnc.com/images/boat/2239/76ab46d8-0916-480d-bb88-77f08e7127b0-small.webp",
          "https://cdn.bluebnc.com/images/boat/2239/62e709f1-3c3a-4e65-bd34-f9aa82f9ab4b-large.webp",
          "https://cdn.bluebnc.com/images/boat/2239/08a23f8c-e909-40b4-a275-49601c39762a-small.webp",
          "https://cdn.bluebnc.com/images/boat/2239/db35a4f5-ad55-4409-a7c4-df00bf3f6313-small.webp",
          "https://cdn.bluebnc.com/images/boat/2239/15df61b8-694b-4a2d-86e2-b562b33db1ff-small.webp"
        ],
        specs: [
          { label: "Shipyard", value: "Prestige" },
          { label: "Model", value: "680" },
          { label: "Year", value: "2017" },
          { label: "Length", value: "21.46m" },
          { label: "Cabins", value: "4 (Master, VIP, 2 Twin)" },
          { label: "Day Capacity", value: "12 Guests" },
          { label: "Overnight Capacity", value: "8 Guests" },
          { label: "Cruising Speed", value: "20-25 Knots" }
        ],
        amenities: ["Large Flybridge", "Bow Lounge", "Hydraulic Platform", "15ft Tender", "Inflatable Waterslide", "Seabob", "Paddleboards", "Waterski & Wakeboard", "Donut", "Starlink Internet", "Air Conditioning", "BBQ Grill"]
      },
      {
        id: "4",
        title: "Alvium",
        subtitle: "Ferretti Custom Line 106' · Italian Grandeur",
        image: "https://cdn.bluebnc.com/images/boat/3205/76e80c5b-d5fb-44a5-b401-cd94e6f01fa9-large.webp",
        price: "€100,000 / Day",
        details: "5 Cabins · 12 Guests",
        length: "32.82 m",
        year: "2022",
        crew: "5 Professionals",
        fullDescription: "The ALVIUM is a 32.82-meter (107.7 ft) Ferretti Custom Line 106, available for charter in Ibiza. This yacht combines Italian design with modern amenities, offering a luxurious experience for guests. ALVIUM features expansive outdoor spaces, including a spacious flybridge with sun loungers and a dining area. The foredeck offers additional seating and sunbathing options, while the aft deck provides a comfortable area for al fresco dining. A hydraulic swim platform ensures easy access to the sea. Inside, the yacht boasts a contemporary design with high-quality finishes. The main salon offers ample seating and large windows for natural light.",
        gallery: [
          "https://cdn.bluebnc.com/images/boat/3205/76e80c5b-d5fb-44a5-b401-cd94e6f01fa9-large.webp",
          "https://cdn.bluebnc.com/images/boat/3205/de05c108-f7af-4d7f-a058-9e3bf16d9464-large.webp",
          "https://cdn.bluebnc.com/images/boat/3205/5b7e06b8-efc4-4c1d-8a22-c70017ec1a85-large.webp",
          "https://cdn.bluebnc.com/images/boat/3205/c8cc3318-f629-42be-abf3-3be3394289c0-large.webp",
          "https://cdn.bluebnc.com/images/boat/3205/c3266c64-8fcf-4521-a6a2-beb1023169e2-large.webp",
          "https://cdn.bluebnc.com/images/boat/3205/d43ac83f-3b6a-4f5b-8f6a-f621556f2730-large.webp",
          "https://cdn.bluebnc.com/images/boat/3205/e73b8112-2fbb-4177-9a19-8ece0bab3ede-large.webp",
          "https://cdn.bluebnc.com/images/boat/3205/8b7ec82e-5188-4ee2-a4a2-3a1e9fa455d8-large.webp",
          "https://cdn.bluebnc.com/images/boat/3205/888560cf-0a7e-415d-a6a4-da2b04185a0e-large.webp",
          "https://cdn.bluebnc.com/images/boat/3205/9154a665-83df-413c-9e1b-b029ec37344a-large.webp",
          "https://cdn.bluebnc.com/images/boat/3205/ce39425f-f6dc-4261-b798-af3049f63dfa-large.webp",
          "https://cdn.bluebnc.com/images/boat/3205/e66d5bbc-510f-4efa-8d89-b561a3fd8d99-large.webp",
          "https://cdn.bluebnc.com/images/boat/3205/578973ab-c874-4775-9dd3-a3612eda23c4-large.webp",
          "https://cdn.bluebnc.com/images/boat/3205/feb8235f-b30d-4c2e-b1ea-a069ccf6419a-large.webp"
        ],
        specs: [
          { label: "Shipyard", value: "Ferretti" },
          { label: "Model", value: "Custom Line 106'" },
          { label: "Year Built", value: "2022" },
          { label: "Length", value: "106′ / 32m" },
          { label: "Day Capacity", value: "12 Guests + 5 Crew" },
          { label: "Overnight Capacity", value: "12 Guests" },
          { label: "Cabins", value: "5 (Master, 2 VIP, 2 Twin + Pullman)" }
        ],
        amenities: ["Expansive Flybridge", "Aft Deck Al Fresco Dining", "Plush Foredeck Sunbeds", "Hydraulic Swim Platform", "Williams Dieseljet 505", "Jetski", "2 x Seabob", "E-foil & Wind foil", "High-Speed Wi-Fi", "Stabilizers (Cruising & Anchor)", "Indoor Dining Area"]
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
        quote: "The definitive way to experience the Balearics. The crew's attention to detail and knowledge of hidden Calas was beyond anything we've seen elsewhere.",
        author: "Julian Vercetti",
        authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300",
        context: "August 2024 · Mallorca"
      },
      {
        id: "t2",
        quote: "Absolute privacy and impeccable service. We spent three days in hidden coves that felt like another world.",
        author: "Elena Sorokin",
        authorImage: "https://images.unsplash.com/photo-1677863689651-cec1797b2bf3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHdvbWFuJTIwaW4lMjB0aGUlMjBiZWFjaCUyMG5hdHVyYWx8ZW58MHwyfDB8fHww",
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