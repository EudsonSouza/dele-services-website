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

// Navigation Links
export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
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
  },
  {
    id: "move_in",
    title: "Move In Cleaning",
    description: "Detailed cleaning to prepare your new space.",
    features: [
      "Complete sanitization",
      "Cabinets and drawers",
      "Appliance interior cleaning",
      "Ready for move-in",
    ],
  },
  {
    id: "move_out",
    title: "Move Out Cleaning",
    description: "Leave your old place spotless.",
    features: [
      "Full property cleaning",
      "Deposit-ready standards",
      "All rooms and surfaces",
      "Final inspection ready",
    ],
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

// Pricing Tiers
export const PRICING_TIERS: PricingTier[] = [
  {
    id: "regular-weekly",
    name: "Regular Cleaning",
    price: "$22",
    frequency: "per week",
    features: [
      "Weekly service",
      "All rooms included",
      "Basic supplies included",
      "Flexible scheduling",
    ],
  },
  {
    id: "regular-biweekly",
    name: "Regular Cleaning",
    price: "$24",
    frequency: "bi-weekly",
    features: [
      "Bi-weekly service",
      "All rooms included",
      "Basic supplies included",
      "Flexible scheduling",
    ],
  },
  {
    id: "deep",
    name: "Deep Cleaning",
    price: "$50",
    frequency: "per session",
    features: [
      "Comprehensive cleaning",
      "Top to bottom",
      "Behind furniture",
      "Perfect for spring cleaning",
    ],
    highlighted: true,
  },
  {
    id: "move-in",
    name: "Move In",
    price: "$45",
    frequency: "per session",
    features: [
      "Pre-move preparation",
      "Complete sanitization",
      "Cabinets & appliances",
      "Ready to move in",
    ],
  },
  {
    id: "move-out",
    name: "Move Out",
    price: "$50",
    frequency: "per session",
    features: [
      "Deposit-ready cleaning",
      "All areas covered",
      "Final inspection ready",
      "Landlord approved",
    ],
  },
];

// FAQ Data
export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "supplies",
    question: "Do you bring your own cleaning products?",
    answer:
      "Yes! We can provide all cleaning supplies for an additional $25 (regular cleaning) or $50+ (deep/move services). Alternatively, you can provide your own supplies at no extra charge.",
  },
  {
    id: "schedule",
    question: "How do I schedule a service?",
    answer:
      "Simply fill out our quote request form with your details and preferred date. We'll contact you within 24 hours to confirm your booking and discuss any specific requirements.",
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
      "We serve Toronto (no additional charge) and the Greater Toronto Area (GTA) with a $20 travel fee. Contact us if you're unsure whether we cover your location.",
  },
  {
    id: "pricing",
    question: "How does pricing work?",
    answer:
      "Our pricing is transparent and depends on the service type, number of rooms, and whether we provide supplies. Regular cleaning starts at $22/week, while specialized services like deep cleaning and move-in/out have fixed rates.",
  },
  {
    id: "preparation",
    question: "What should I prepare before the cleaning?",
    answer:
      "Please pick up clutter and personal items, secure pets in a safe area, and let us know of any areas requiring special attention. If you're providing supplies, ensure they're accessible.",
  },
];

// Required Supplies (if client provides)
export const REQUIRED_SUPPLIES = [
  "Clorox with bleach",
  "Windex",
  "Lysol (toilet bowl cleaner)",
  "Vim",
  "Paper towels",
  "Swiffer",
  "Vacuum",
  "Mop + bucket",
  "Cleaning cloths",
];

// Supplies Add-on Pricing
export const SUPPLIES_PRICING = {
  regular: 25,
  deep: 50,
  move: 50,
} as const;

// Service Area Pricing
export const SERVICE_AREA_PRICING = {
  toronto: 0,
  gta: 20,
} as const;

// Contact Information
export const CONTACT_INFO = {
  email: "contact@deleservices.ca", // Update with real email
  phone: "+1 (416) XXX-XXXX", // Update with real phone
  businessHours: "Monday - Saturday: 8:00 AM - 6:00 PM",
  serviceArea: "Toronto & GTA",
};

// Web3Forms Configuration
export const WEB3FORMS_CONFIG = {
  accessKey: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "",
  redirectUrl: "/thank-you",
  subject: {
    quote: "New Quote Request - D'Ele Services",
    contact: "New Contact Message - D'Ele Services",
  },
};

// SEO Meta Data
export const SEO_META = {
  title: "D'Ele Services - Professional Cleaning Services in Toronto & GTA",
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
