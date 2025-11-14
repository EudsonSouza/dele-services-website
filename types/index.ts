/**
 * D'Ele Services - Type Definitions
 * Based on dele_services_forms_data_model.md
 */

// Cleaning service types
export type CleaningType =
  | "regular"
  | "deep"
  | "move_in"
  | "move_out"
  | "after_construction"
  | "commercial"
  | "office";

export type LocationOption = "toronto" | "gta";

export type SuppliesOption = "client_provides" | "we_provide";

export type ContactReason =
  | "general"
  | "commercial_inquiry"
  | "feedback"
  | "other";

// Quote Request Form Data Model
export interface QuoteRequest {
  id?: string; // UUID generated on backend
  fullName: string;
  email: string;
  phone: string;
  typeOfCleaning: CleaningType;
  numberOfRooms?: number; // optional for commercial/office
  location: LocationOption;
  suppliesOption: SuppliesOption;
  address: string;
  city?: string;
  postalCode?: string;
  preferredDate?: string; // ISO date string
  additionalNotes?: string;
  acceptsPolicy: boolean;
  createdAt?: string; // ISO datetime
  sourcePage?: string; // e.g., "home_hero", "home_contact_section"
}

// Contact Form Data Model
export interface ContactMessage {
  id?: string; // UUID
  fullName: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  reason?: ContactReason;
  createdAt?: string; // ISO datetime
}

// Service Card Props
export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
  features?: string[];
}

// Pricing Card Props
export interface PricingTier {
  id: string;
  name: string;
  price: string;
  frequency?: string;
  features: string[];
  highlighted?: boolean;
  ctaText?: string;
}

// FAQ Item Props
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

// Navigation Link Props
export interface NavLink {
  label: string;
  href: string;
  isExternal?: boolean;
}
