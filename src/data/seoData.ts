export interface SeoPageMeta {
  path: string;
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  h1Heading: string;
  subheading: string;
  category: string;
  faqs?: { question: string; answer: string }[];
}

export const TOP_100_KEYWORDS: { category: string; keywords: string[] }[] = [
  {
    category: "Kandivali West Real Estate",
    keywords: [
      "real estate agent Kandivali West",
      "property dealer Kandivali West",
      "flats for sale in Kandivali West",
      "properties in Kandivali West",
      "best real estate broker Kandivali West",
      "real estate consultant Kandivali West",
      "property for buy in Kandivali West",
      "resale flats in Kandivali West Mumbai",
      "luxury apartments Kandivali West",
      "new residential projects Kandivali West",
      "ready to move flats Kandivali West",
      "gated community flats Kandivali West",
      "property market rates Kandivali West",
      "real estate agency near Sachin Tendulkar Gymkhana",
      "Nidhi Properties Kandivali West",
      "NP real estate Kandivali West",
      "trusted real estate consultant Kandivali West",
      "top property management Kandivali West",
      "housing property for sale Kandivali West",
      "commercial & residential real estate Kandivali West"
    ]
  },
  {
    category: "Mahavir Nagar Micro-Market",
    keywords: [
      "flats for sale Mahavir Nagar Kandivali",
      "property dealer Mahavir Nagar",
      "1 BHK flat Mahavir Nagar Kandivali West",
      "2 BHK flat Mahavir Nagar Kandivali West",
      "3 BHK apartment Mahavir Nagar",
      "resale flats Mahavir Nagar Kandivali",
      "rental flats Mahavir Nagar Kandivali West",
      "commercial shop for sale Mahavir Nagar",
      "office space for rent Mahavir Nagar",
      "properties near Nisarg Bldg Mahavir Nagar",
      "flats near Pizza Hut Mahavir Nagar",
      "residential towers Mahavir Nagar Kandivali",
      "best location flats Mahavir Nagar",
      "family apartments Mahavir Nagar Kandivali",
      "real estate broker near Mahavir Nagar junction",
      "luxury flats Mahavir Nagar Mumbai",
      "unfurnished flats Mahavir Nagar Kandivali",
      "fully furnished flats Mahavir Nagar",
      "Mahavir Nagar real estate prices",
      "property investment Mahavir Nagar Kandivali"
    ]
  },
  {
    category: "Property Types (1, 2, 3 BHK & Luxury)",
    keywords: [
      "1 BHK flat for sale in Kandivali West",
      "budget 1 BHK flats Kandivali West",
      "1 BHK flat price Mahavir Nagar",
      "1 BHK rental flat Kandivali West",
      "2 BHK flat for sale in Kandivali West",
      "2 BHK family flat Mahavir Nagar",
      "2 BHK resale apartment Kandivali West",
      "spacious 2 BHK flats Kandivali West",
      "3 BHK luxury flat Kandivali West",
      "3 BHK premium apartment Mahavir Nagar",
      "3 BHK penthouse Kandivali West",
      "duplex flat for sale Kandivali West",
      "luxury sea view flat Kandivali West",
      "carpet area 1 BHK Kandivali West",
      "carpet area 2 BHK Kandivali West",
      "carpet area 3 BHK Kandivali West",
      "balcony flats in Kandivali West",
      "high rise building flats Kandivali West",
      "modern amenities apartments Kandivali West",
      "smart home flats Kandivali West"
    ]
  },
  {
    category: "Commercial & Rental Properties",
    keywords: [
      "commercial shop for sale Kandivali West",
      "commercial office space for sale Kandivali West",
      "commercial shop for rent Mahavir Nagar",
      "office space for rent Kandivali West",
      "retail showroom for rent Kandivali West",
      "doctor clinic shop for sale Kandivali West",
      "restaurant shop for rent Mahavir Nagar",
      "rental flats in Kandivali West",
      "flats on rent near Kandivali station",
      "1 BHK flat on rent Mahavir Nagar",
      "2 BHK flat on rent Kandivali West",
      "lease agreement property Kandivali West",
      "commercial property investment Kandivali",
      "high return commercial space Kandivali",
      "ready commercial showroom Link Road Kandivali",
      "office space near Link Road Kandivali West",
      "furnished office space Kandivali West",
      "warehouse godown space Kandivali West",
      "commercial property broker Kandivali West",
      "shop near Sachin Tendulkar Gymkhana"
    ]
  },
  {
    category: "Borivali, Malad & Neighboring Hubs",
    keywords: [
      "properties in Borivali West",
      "flats for sale in Borivali West",
      "real estate broker Borivali West",
      "2 BHK flat Borivali West",
      "flats near IC Colony Borivali West",
      "flats near Shimpoli Borivali West",
      "properties in Malad West",
      "flats for sale in Malad West",
      "flats near Mindspace Malad West",
      "real estate agent Malad West",
      "flats near Evershine Nagar Malad West",
      "residential property Link Road Malad Kandivali",
      "commercial property Borivali West",
      "resale property Borivali West",
      "resale property Malad West",
      "property dealer near Charkop Kandivali",
      "flats for sale in Panchsheel Garden Kandivali",
      "flats for sale in Dahanukar Wadi Kandivali",
      "real estate consultant Western Suburbs Mumbai",
      "property agent Mumbai Suburban North West"
    ]
  },
  {
    category: "Real Estate Services & Advisory",
    keywords: [
      "property valuation services Kandivali West",
      "fair market property valuation Mumbai",
      "NRI real estate management Kandivali West",
      "NRI property sell purchase Mumbai",
      "Power of Attorney property sale Mumbai",
      "home loan consultant Kandivali West",
      "housing loan pre-approval Kandivali",
      "property title verification agent Kandivali",
      "stamp duty calculation Kandivali West",
      "property documentation services Kandivali",
      "redevelopment property consultant Kandivali",
      "society transfer process Kandivali West",
      "real estate consultancy Mahavir Nagar",
      "property management services Kandivali",
      "best real estate advice Kandivali West",
      "buy sell rent property agent Kandivali",
      "transparent real estate brokerage Kandivali",
      "established 1995 real estate agent Kandivali",
      "Justdial verified real estate agent Kandivali",
      "Nidhi Properties office location Mahavir Nagar"
    ]
  }
];

export const SEO_PAGES_META: Record<string, SeoPageMeta> = {
  "/": {
    path: "/",
    title: "Nidhi Properties - Real Estate Agents in Mahavir Nagar, Kandivali West, Mumbai",
    description: "Nidhi Properties (NP) - Leading real estate agent in Mahavir Nagar, Kandivali West, Mumbai since 1995. Buy, sell, rent 1/2/3 BHK flats & commercial property.",
    keywords: [
      "real estate agent Kandivali West",
      "flats for sale in Mahavir Nagar",
      "Nidhi Properties Kandivali",
      "property dealer Mahavir Nagar",
      "1 BHK 2 BHK 3 BHK Kandivali West"
    ],
    canonicalUrl: "https://nidhiproperties.com/",
    h1Heading: "NP (Nidhi Properties) - Your Premier Real Estate Partner in Kandivali West",
    subheading: "30+ years of trusted property advisory in Mahavir Nagar, Borivali & Malad",
    category: "Home"
  },
  "/properties-in-kandivali-west": {
    path: "/properties-in-kandivali-west",
    title: "Properties in Kandivali West | Buy, Sell & Rent Residential & Commercial | NP",
    description: "Explore top properties in Kandivali West Mumbai. Find 1 BHK, 2 BHK, 3 BHK resale & new launch flats, commercial shops, and office spaces with Nidhi Properties.",
    keywords: [
      "properties in Kandivali West",
      "flats for sale in Kandivali West",
      "real estate Kandivali West",
      "resale property Kandivali West",
      "commercial space Kandivali West"
    ],
    canonicalUrl: "https://nidhiproperties.com/properties-in-kandivali-west",
    h1Heading: "Residential & Commercial Properties in Kandivali West, Mumbai",
    subheading: "Discover premium apartments, commercial spaces, and investment opportunities in Kandivali West",
    category: "Location"
  },
  "/flats-for-sale-mahavir-nagar": {
    path: "/flats-for-sale-mahavir-nagar",
    title: "Flats for Sale in Mahavir Nagar Kandivali West | Nidhi Properties",
    description: "Verified flats for sale in Mahavir Nagar, Kandivali West. Premium 1, 2 & 3 BHK luxury homes, resale flats near Sachin Tendulkar Gymkhana with transparent guidance.",
    keywords: [
      "flats for sale Mahavir Nagar",
      "property in Mahavir Nagar Kandivali",
      "2 BHK Mahavir Nagar",
      "1 BHK Mahavir Nagar",
      "resale flats Mahavir Nagar"
    ],
    canonicalUrl: "https://nidhiproperties.com/flats-for-sale-mahavir-nagar",
    h1Heading: "Flats for Sale in Mahavir Nagar, Kandivali West",
    subheading: "Live in Kandivali West's most vibrant residential & culinary hotspot",
    category: "Micro-Market"
  },
  "/1bhk-flats-kandivali-west": {
    path: "/1bhk-flats-kandivali-west",
    title: "1 BHK Flats for Sale & Rent in Kandivali West | Mahavir Nagar | NP",
    description: "Find affordable & budget-friendly 1 BHK flats for sale and rent in Kandivali West, Mahavir Nagar, Charkop, & Dahanukar Wadi. Transparent deals by Nidhi Properties.",
    keywords: [
      "1 BHK flat for sale Kandivali West",
      "1 BHK price Mahavir Nagar",
      "budget 1 BHK Kandivali West",
      "1 BHK rent Mahavir Nagar",
      "carpet area 1 BHK Kandivali"
    ],
    canonicalUrl: "https://nidhiproperties.com/1bhk-flats-kandivali-west",
    h1Heading: "1 BHK Apartments in Kandivali West & Mahavir Nagar",
    subheading: "Perfect starter homes, clear title resale flats, and high rental yield properties",
    category: "Residential"
  },
  "/2bhk-flats-kandivali-west": {
    path: "/2bhk-flats-kandivali-west",
    title: "2 BHK Flats for Sale in Kandivali West & Mahavir Nagar | Nidhi Properties",
    description: "Spacious 2 BHK family flats for sale in Kandivali West, Mahavir Nagar, Panchsheel Garden, and Link Road. Excellent amenities, car parking & clear documentation.",
    keywords: [
      "2 BHK flat for sale Kandivali West",
      "2 BHK Mahavir Nagar Kandivali",
      "2 BHK price Panchsheel Garden",
      "resale 2 BHK Kandivali West",
      "family flats Kandivali West"
    ],
    canonicalUrl: "https://nidhiproperties.com/2bhk-flats-kandivali-west",
    h1Heading: "2 BHK Family Apartments in Kandivali West",
    subheading: "Modern family living with prime connectivity, top schools, and lush green parks",
    category: "Residential"
  },
  "/3bhk-luxury-flats-kandivali": {
    path: "/3bhk-luxury-flats-kandivali",
    title: "3 BHK Luxury Flats & Penthouses in Kandivali West | Nidhi Properties",
    description: "Exclusive 3 BHK luxury flats, penthouses & sea view apartments for sale in Kandivali West & Mahavir Nagar. High-rise towers with world-class clubhouse amenities.",
    keywords: [
      "3 BHK luxury flat Kandivali West",
      "3 BHK penthouse Kandivali",
      "luxury apartments Mahavir Nagar",
      "premium residential tower Kandivali",
      "3 BHK price Kandivali West"
    ],
    canonicalUrl: "https://nidhiproperties.com/3bhk-luxury-flats-kandivali",
    h1Heading: "3 BHK Luxury Residences & Penthouses in Kandivali West",
    subheading: "Elevated lifestyle with expansive layouts, grand lobbies, and panoramic city views",
    category: "Residential"
  },
  "/commercial-property-kandivali-west": {
    path: "/commercial-property-kandivali-west",
    title: "Commercial Shop & Office Space for Sale/Rent in Kandivali West | NP",
    description: "Buy & rent commercial shops, office spaces, retail showrooms, & doctor clinics in Mahavir Nagar & Link Road Kandivali West. Prime high footfall locations.",
    keywords: [
      "commercial shop for sale Kandivali West",
      "office space Mahavir Nagar",
      "showroom rent Link Road Kandivali",
      "commercial property broker Kandivali",
      "doctor clinic shop Kandivali"
    ],
    canonicalUrl: "https://nidhiproperties.com/commercial-property-kandivali-west",
    h1Heading: "Commercial Shops & Office Spaces in Kandivali West",
    subheading: "Prime commercial real estate in Mahavir Nagar commercial corridor for high ROI",
    category: "Commercial"
  },
  "/rental-flats-kandivali-west": {
    path: "/rental-flats-kandivali-west",
    title: "Rental Flats & Apartments in Kandivali West & Mahavir Nagar | NP",
    description: "Verified rental flats in Kandivali West. Furnished & semi-furnished 1, 2 & 3 BHK apartments for rent in Mahavir Nagar with legal rental agreement support.",
    keywords: [
      "rental flats in Kandivali West",
      "flats on rent Mahavir Nagar",
      "1 BHK rent Kandivali West",
      "2 BHK rent Mahavir Nagar",
      "house rent broker Kandivali"
    ],
    canonicalUrl: "https://nidhiproperties.com/rental-flats-kandivali-west",
    h1Heading: "Rental Flats & Apartments in Kandivali West",
    subheading: "Hassle-free renting with verified owners, registered leave & license agreements",
    category: "Rentals"
  },
  "/resale-flats-kandivali-west": {
    path: "/resale-flats-kandivali-west",
    title: "Resale Flats in Kandivali West & Mahavir Nagar | Title Verified | NP",
    description: "Explore title-verified resale flats in Kandivali West & Mahavir Nagar. Well-maintained housing societies, oc-received projects, zero GST impact.",
    keywords: [
      "resale flats in Kandivali West",
      "resale property Mahavir Nagar",
      "society resale flat Kandivali",
      "title clear resale Kandivali",
      "ready move resale flat Kandivali"
    ],
    canonicalUrl: "https://nidhiproperties.com/resale-flats-kandivali-west",
    h1Heading: "Title-Verified Resale Flats in Kandivali West",
    subheading: "Immediate possession, established societies, and complete title clearance guaranteed",
    category: "Resale"
  },
  "/properties-in-borivali-west": {
    path: "/properties-in-borivali-west",
    title: "Properties in Borivali West | Flats for Sale & Rent | Nidhi Properties",
    description: "Find prime residential & commercial properties in Borivali West, IC Colony, Shimpoli, & SV Road. Buy, sell, & rent properties with Nidhi Properties.",
    keywords: [
      "properties in Borivali West",
      "flats for sale in Borivali West",
      "real estate broker Borivali West",
      "2 BHK Borivali West",
      "flats near IC Colony Borivali"
    ],
    canonicalUrl: "https://nidhiproperties.com/properties-in-borivali-west",
    h1Heading: "Residential & Commercial Properties in Borivali West",
    subheading: "Explore top housing projects and retail commercial hubs across Borivali West",
    category: "Location"
  },
  "/properties-in-malad-west": {
    path: "/properties-in-malad-west",
    title: "Properties in Malad West | Mindspace, Link Road & Evershine | NP",
    description: "Discover premium flats & commercial properties in Malad West, Evershine Nagar & Mindspace corridor. Expert real estate advisory by Nidhi Properties.",
    keywords: [
      "properties in Malad West",
      "flats near Mindspace Malad",
      "real estate agent Malad West",
      "Evershine Nagar flats for sale",
      "flats for sale Link Road Malad"
    ],
    canonicalUrl: "https://nidhiproperties.com/properties-in-malad-west",
    h1Heading: "Residential & Commercial Properties in Malad West",
    subheading: "Vibrant IT corridor, luxury towers, and prime commercial hubs in Malad West",
    category: "Location"
  },
  "/real-estate-agent-kandivali-west": {
    path: "/real-estate-agent-kandivali-west",
    title: "Best Real Estate Agent in Kandivali West - Nidhi Properties (Est. 1995)",
    description: "Nidhi Properties is the best real estate agency in Mahavir Nagar, Kandivali West. Over 30 years of transparent property buying, selling & renting services.",
    keywords: [
      "best real estate agent Kandivali West",
      "top property consultant Mahavir Nagar",
      "real estate broker Kandivali West",
      "Justdial real estate agent Kandivali",
      "Nidhi Properties profile"
    ],
    canonicalUrl: "https://nidhiproperties.com/real-estate-agent-kandivali-west",
    h1Heading: "Best Real Estate Agent in Kandivali West & Mahavir Nagar",
    subheading: "Established in 1995 • 30+ Years of Trust, Transparency & Unmatched Local Expertise",
    category: "Services"
  },
  "/property-valuation-kandivali": {
    path: "/property-valuation-kandivali",
    title: "Property Valuation Services in Kandivali West & Mumbai | Nidhi Properties",
    description: "Get accurate market property valuation, stamp duty assessment & capital growth analysis in Kandivali West & Mahavir Nagar by expert real estate consultants.",
    keywords: [
      "property valuation service Kandivali",
      "home evaluation Mahavir Nagar",
      "stamp duty calculation Kandivali",
      "market rate evaluation Mumbai property",
      "resale price assessment Kandivali"
    ],
    canonicalUrl: "https://nidhiproperties.com/property-valuation-kandivali",
    h1Heading: "Professional Property Valuation Services in Kandivali West",
    subheading: "Accurate, data-driven market valuations for buying, selling, bank loans & legal tax purposes",
    category: "Services"
  },
  "/nri-real-estate-services-mumbai": {
    path: "/nri-real-estate-services-mumbai",
    title: "NRI Real Estate Management & Property Services Mumbai | Nidhi Properties",
    description: "End-to-end NRI real estate services in Mumbai & Kandivali West. Property management, legal Power of Attorney sales, tenant management & high yield investments.",
    keywords: [
      "NRI real estate management Mumbai",
      "NRI property broker Kandivali",
      "Power of Attorney sale Mumbai",
      "NRI real estate investment Mumbai",
      "property management for NRIs Kandivali"
    ],
    canonicalUrl: "https://nidhiproperties.com/nri-real-estate-services-mumbai",
    h1Heading: "NRI Real Estate & Property Management Services in Mumbai",
    subheading: "Seamless, legal, and stress-free property management and liquidation for Non-Resident Indians",
    category: "Services"
  },
  "/home-loans-property-consultant": {
    path: "/home-loans-property-consultant",
    title: "Home Loans & Mortgage Assistance Consultant Kandivali West | NP",
    description: "Get easy home loan approvals, low interest rates, and bank tie-ups with SBI, HDFC, ICICI & Axis Bank. Expert guidance by Nidhi Properties Kandivali West.",
    keywords: [
      "home loan consultant Kandivali West",
      "housing loan pre-approval",
      "SBI HDFC home loan agent Kandivali",
      "property loan eligibility consultant",
      "lowest home loan interest rate Mumbai"
    ],
    canonicalUrl: "https://nidhiproperties.com/home-loans-property-consultant",
    h1Heading: "Home Loan & Mortgage Consultancy in Kandivali West",
    subheading: "Hassle-free housing loan sanctioning, lowest interest rates & complete banking assistance",
    category: "Services"
  },
  "/seo-keywords-directory": {
    path: "/seo-keywords-directory",
    title: "100 Top Quality Real Estate Keywords Directory - Kandivali West & Mumbai",
    description: "Complete real estate search index for Kandivali West, Mahavir Nagar, Borivali & Malad. Access top 100 high-intent keywords and property guides by Nidhi Properties.",
    keywords: [
      "real estate keywords index Kandivali",
      "Kandivali West property directory",
      "Mahavir Nagar real estate search",
      "Mumbai real estate landing pages",
      "Nidhi Properties directory"
    ],
    canonicalUrl: "https://nidhiproperties.com/seo-keywords-directory",
    h1Heading: "100 Top Quality Real Estate Search Index & Keyword Directory",
    subheading: "Explore top property searches, location benchmarks, and property investment guides",
    category: "Directory"
  }
};
