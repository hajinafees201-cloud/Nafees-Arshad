export interface ProductVariant {
  id: string;
  name: string;
  categorySlug: string;
  subcategory: 'edible' | 'decor' | 'animal' | 'spa';
  tagline: string;
  description: string;
  hsCode: string;
  moq: string;
  grainSizes?: string[];
  colorGrades?: string[];
  certifications: string[];
  packagingOptions: string[];
  containerStuffing: {
    twentyFtFcl: string;
    fortyFtFcl: string;
    palletized: string;
  };
  keySpecs: { label: string; value: string }[];
  applications: string[];
  imageUrl: string;
}

export interface Category {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  status: 'active' | 'upcoming';
  badgeLabel?: string;
  shortDescription: string;
  fullDescription: string;
  heroImage: string;
  origin: string;
  exportPorts: string[];
  leadTime: string;
  capacity: string;
  variants: ProductVariant[];
  certifications: string[];
  packagingTypes: { title: string; description: string; capacity: string }[];
  chemicalAnalysis?: { parameter: string; result: string; standard: string }[];
  faqs: { question: string; answer: string }[];
}

export interface RfqCartItem {
  variantId: string;
  variantName: string;
  categoryName: string;
  hsCode: string;
  quantity: number;
  unit: 'Metric Tons (MT)' | '20ft FCL Containers' | '40ft FCL Containers' | 'Cartons / Master Packs';
  packagingPreference: string;
  targetIncoterm: 'FOB' | 'CIF' | 'CFR' | 'EXW';
  destinationPort?: string;
  notes?: string;
}

export interface InquiryFormData {
  fullName: string;
  companyName: string;
  businessEmail: string;
  phoneNumber: string;
  country: string;
  portOfDestination: string;
  incoterm: 'FOB' | 'CIF' | 'CFR' | 'EXW';
  productCategory: string;
  selectedVariants: string[];
  estimatedVolume: string;
  volumeUnit: string;
  packagingPreference: string;
  requestedTimeline: string;
  sampleRequired: boolean;
  targetPriceUsd?: string;
  customBrandingRequired: boolean;
  additionalRequirements: string;
}

export interface VegetableProduct {
  id: string;
  name: string;
  botanicalName: string;
  variety: string;
  category: string;
  hsCode: string;
  origin: string;
  seasonality: string;
  packagingOptions: string[];
  shelfLife: string;
  storageTemp: string;
  shippingMode: string;
  moq: string;
  description: string;
  keySpecs: { label: string; value: string }[];
  imageUrl: string;
}

export interface SurgicalProduct {
  id: string;
  title: string;
  category: string;
  material: string;
  finish: string;
  autoclavable: string;
  certifications: string[];
  packagingBadge: string;
  hsCode: string;
  moq: string;
  hardness: string;
  description: string;
  technicalSpecs: { label: string; value: string }[];
  packagingOptions: string[];
  imageUrl: string;
  imageSourceComment: string;
}

export type PageView = 'home' | 'category' | 'vegetables' | 'surgical' | 'about' | 'logistics' | 'contact' | 'certifications';
