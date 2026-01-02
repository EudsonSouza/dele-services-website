/**
 * D'Ele Services - Application Constants
 * Based on dele_services_site_base.md and dele_services_design_system.md
 */

import type { Service, PricingTier, FAQItem, NavLink } from "@/types";

// Brand Colors (also defined in globals.css)
export const COLORS = {
  primary: "#3B5A75",
  primaryLight: "#88AFB4",
  secondary: "#889AA7",
  accent: "#C49D74",
  bg: "#FFFFFF",
  bgLight: "#F5F7F8",
  text: "#1A1A1A",
  textLight: "#4A4A4A",
} as const;

// Navigation Links (Visit-Based Model - No Pricing)
export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

// Services Data
export const SERVICES: Service[] = [
  {
    id: "regular",
    title: "Regular Cleaning",
    description: "Perfect for maintaining a fresh and organized home.",
    features: [
      "Weekly or bi-weekly service",
      "Kitchen and bathroom cleaning",
      "Dusting and vacuuming",
      "Floor mopping",
    ],
    detailedInclusions: {
      allRooms: [
        "Vacuum floors",
        "Mop floors",
        "Dust accessible surfaces",
        "Clean mirrors",
        "Empty trash bins",
      ],
      kitchen: [
        "Clean countertops and surfaces",
        "Clean sink and faucet",
        "Wipe exterior of appliances (fridge, stove, oven, microwave, dishwasher)",
        "Inside the microwave",
        "Clean stovetop and backsplash",
        "Mop floor",
      ],
      bathroom: [
        "Clean and disinfect toilet",
        "Clean sink and faucet",
        "Clean mirror",
        "Clean shower/bathtub (regular use, no heavy buildup)",
        "Mop floor",
      ],
      bedrooms: [
        "Dust furniture",
        "Vacuum or mop floors",
        "Make beds (upon request)",
      ],
      livingRoom: [
        "Dust furniture and visible surfaces",
        "Vacuum rugs and carpets",
        "Clean tables, TV stand, and accessible surfaces",
      ],
    },
  },
  {
    id: "deep",
    title: "Deep Cleaning",
    description: "A full, top-to-bottom cleaning for maximum freshness.",
    features: [
      "Comprehensive cleaning",
      "Behind furniture and appliances",
      "Baseboards and ceiling fans",
      "Window sills and tracks",
    ],
    detailedInclusions: {
      allRooms: [
        "Vacuum and mop floors",
        "Dust all surfaces, including hard-to-reach areas",
        "Clean baseboards",
        "Clean door frames and doors",
        "Clean light switches and outlet covers",
        "Clean mirrors",
        "Remove cobwebs",
        "Empty trash bins",
      ],
      kitchen: [
        "Clean countertops and backsplash",
        "Clean sink and faucet",
        "Clean stovetop thoroughly",
        "Clean exterior and interior of appliances (oven, fridge, microwave, dishwasher)",
        "Clean inside cabinets and drawers (empty)",
        "Clean hood fan / range hood (exterior)",
        "Mop floor",
      ],
      bathroom: [
        "Deep clean and disinfect toilet",
        "Clean sink, faucet, and vanity",
        "Clean mirror",
        "Deep clean shower and bathtub (tiles, grout, soap scum)",
        "Clean inside cabinets and drawers (empty)",
        "Clean baseboards",
        "Mop floor",
      ],
      bedrooms: [
        "Dust all furniture and surfaces",
        "Clean baseboards",
        "Vacuum or mop floors",
      ],
      livingRoom: [
        "Dust all furniture and surfaces",
        "Clean baseboards",
        "Clean doors and door frames",
        "Vacuum rugs and carpets",
        "Mop floors",
      ],
    },
  },
  {
    id: "move_in",
    title: "Move In Cleaning",
    description: "Detailed cleaning to prepare your new space. Property must be empty.",
    features: [
      "Complete sanitization",
      "Cabinets and drawers",
      "Appliance interior cleaning",
      "Ready for move-in",
    ],
    detailedInclusions: {
      allRooms: [
        "Vacuum and mop floors",
        "Clean baseboards",
        "Clean doors, door frames, and handles",
        "Clean light switches and outlet covers",
        "Dust and clean all surfaces",
        "Clean mirrors",
        "Remove cobwebs",
      ],
      kitchen: [
        "Clean inside and outside of cabinets and drawers",
        "Clean countertops and backsplash",
        "Clean sink and faucet",
        "Clean inside and outside of appliances (fridge, oven, stove, microwave, dishwasher)",
        "Clean range hood (exterior)",
        "Mop floor",
      ],
      bathroom: [
        "Deep clean and disinfect toilet",
        "Clean sink, faucet, and vanity",
        "Clean mirror",
        "Deep clean shower and bathtub (tiles, grout, soap scum)",
        "Clean inside cabinets and drawers",
        "Clean baseboards",
        "Mop floor",
      ],
      bedrooms: [
        "Clean closets (inside and shelves)",
        "Clean baseboards",
        "Vacuum or mop floors",
      ],
      livingRoom: [
        "Clean baseboards",
        "Clean doors and door frames",
        "Dust and clean all surfaces",
        "Vacuum rugs and carpets",
        "Mop floors",
      ],
    },
  },
  {
    id: "move_out",
    title: "Move Out Cleaning",
    description: "Leave your old place spotless. Property must be empty.",
    features: [
      "Full property cleaning",
      "Deposit-ready standards",
      "All rooms and surfaces",
      "Final inspection ready",
    ],
    detailedInclusions: {
      allRooms: [
        "Vacuum and mop floors",
        "Clean baseboards",
        "Clean doors, door frames, and handles",
        "Clean light switches and outlet covers",
        "Dust and clean all surfaces",
        "Clean mirrors",
        "Remove cobwebs",
      ],
      kitchen: [
        "Clean inside and outside of cabinets and drawers",
        "Clean countertops and backsplash",
        "Clean sink and faucet",
        "Clean inside and outside of appliances (fridge, oven, stove, microwave, dishwasher)",
        "Clean range hood (exterior)",
        "Mop floor",
      ],
      bathroom: [
        "Deep clean and disinfect toilet",
        "Clean sink, faucet, and vanity",
        "Clean mirror",
        "Deep clean shower and bathtub (tiles, grout, soap scum)",
        "Clean inside cabinets and drawers",
        "Clean baseboards",
        "Mop floor",
      ],
      bedrooms: [
        "Clean closets (inside and shelves)",
        "Clean baseboards",
        "Vacuum or mop floors",
      ],
      livingRoom: [
        "Clean baseboards",
        "Clean doors and door frames",
        "Dust and clean all surfaces",
        "Vacuum rugs and carpets",
        "Mop floors",
      ],
    },
  },
  {
    id: "construction",
    title: "After Construction",
    description: "We remove dust, debris, and residue for a polished finish.",
    features: [
      "Construction dust removal",
      "Paint and debris cleanup",
      "Window and surface polishing",
      "Move-in ready",
    ],
    detailedInclusions: {
      allRooms: [
        "Remove construction dust from all surfaces",
        "Vacuum and mop floors",
        "Clean baseboards",
        "Clean doors, door frames, and handles",
        "Clean light switches and outlet covers",
        "Remove stickers, labels, and tape residue (if accessible)",
        "Remove cobwebs",
        "Clean mirrors",
      ],
      kitchen: [
        "Clean inside and outside of cabinets and drawers",
        "Clean countertops and backsplash",
        "Clean sink and faucet",
        "Clean inside and outside of appliances",
        "Clean range hood (exterior)",
        "Remove dust from walls (if applicable)",
        "Mop floor",
      ],
      bathroom: [
        "Clean and disinfect toilets",
        "Clean sink, faucet, and vanity",
        "Clean mirrors",
        "Clean shower and bathtub (dust, grout, light residue)",
        "Clean inside cabinets and drawers",
        "Clean baseboards",
        "Mop floor",
      ],
      bedrooms: [
        "Remove dust from closets and shelves",
        "Clean baseboards",
        "Vacuum or mop floors",
      ],
      livingRoom: [
        "Remove dust from all surfaces",
        "Clean baseboards",
        "Clean doors and door frames",
        "Vacuum rugs and carpets",
        "Mop floors",
      ],
    },
  },
  {
    id: "commercial",
    title: "Commercial Cleaning",
    description: "Flexible cleaning plans for offices, restaurants, and more.",
    features: [
      "Offices and banks",
      "Restaurants and cafes",
      "Schools and salons",
      "Custom schedules",
    ],
  },
];

// ⚠️ PRICING REMOVED - Visit-Based Quoting Model
// Pricing information is no longer displayed on website
// Quotes provided after free on-site visit

// FAQ Data (Updated for Visit-Based Model)
export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "quote",
    question: "How do I get a quote?",
    answer:
      "Contact us to schedule a free visit. We'll assess your property in person and provide a detailed, personalized quote based on your specific needs and the condition of your space. This ensures accurate pricing tailored to your requirements.",
  },
  {
    id: "schedule",
    question: "How do I schedule a service?",
    answer:
      "Fill out our contact form with your details and preferred date for a free visit. We'll contact you within 24 hours to confirm your appointment and discuss any specific requirements.",
  },
  {
    id: "airbnb",
    question: "Do you clean Airbnb units?",
    answer:
      "Absolutely! We offer flexible cleaning services perfect for Airbnb hosts, including quick turnovers between guests and deep cleaning between longer stays.",
  },
  {
    id: "service-area",
    question: "What areas do you serve?",
    answer:
      "We proudly serve Toronto and the Greater Toronto Area (GTA). Contact us to confirm we cover your specific location.",
  },
  {
    id: "preparation",
    question: "What should I prepare before the cleaning?",
    answer:
      "Please pick up clutter and personal items, secure pets in a safe area, and let us know of any areas requiring special attention. Our team will discuss specific requirements during the free visit.",
  },
];

// ⚠️ SUPPLIES & PRICING DATA REMOVED
// All pricing and supplies information discussed during free visit

// Contact Information
export const CONTACT_INFO = {
  email: "deleservices.ca@gmail.com",
  phone: "+1 (416) XXX-XXXX", // Update with real phone when available
  businessHours: "Monday - Saturday: 8:00 AM - 6:00 PM",
  serviceArea: "Toronto & GTA",
};

// Web3Forms Configuration
export const WEB3FORMS_CONFIG = {
  accessKey: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "",
  redirectUrl: "/thank-you",
  recipientEmail: "deleservices.ca@gmail.com",
  subject: {
    visit: "New Visit Request - D'Ele Services",
    contact: "New Contact Message - D'Ele Services",
  },
};

// SEO Meta Data
export const SEO_META = {
  title: "D'Ele Cleaning Services - Professional Cleaning  Services in Toronto & GTA",
  description:
    "Reliable residential and commercial cleaning services in Toronto and GTA. Regular cleaning, deep cleaning, move in/out, and after construction cleaning. Get your free quote today!",
  keywords: [
    "cleaning services Toronto",
    "house cleaning GTA",
    "commercial cleaning",
    "deep cleaning",
    "move in cleaning",
    "move out cleaning",
    "office cleaning",
    "residential cleaning",
  ],
};
