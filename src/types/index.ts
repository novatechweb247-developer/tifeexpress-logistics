export interface BusinessInfo {
  name: string;
  location: string;
  phone: string;
  displayPhone: string;
  whatsappUrl: string;
  mapsUrl: string;
}

export interface HeroSlide {
  id: number;
  headline: string;
  supporting: string;
  image: string;
  altText: string;
  primaryCtaText: string;
  primaryCtaAction: string;
  secondaryCtaText: string;
  secondaryCtaAction: string;
}

export interface LogisticsService {
  id: string;
  title: string;
  description: string;
  iconName: 'Package' | 'MapPin' | 'Building2' | 'Truck' | 'Clock' | 'Headphones';
  features: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  note: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  caption: string;
}

export interface InquiryFormData {
  fullName: string;
  phone: string;
  serviceType: string;
  pickupLocation: string;
  deliveryDestination: string;
  packageDescription: string;
  urgency: string;
}
