import { BusinessInfo, HeroSlide, LogisticsService, ProcessStep, GalleryItem } from '../types';

import heroCourierImg from '../assets/images/hero_courier_logistics_1791031682874.jpg';
import heroParcelImg from '../assets/images/hero_parcel_dispatch_1791031694437.jpg';
import heroHubImg from '../assets/images/hero_logistics_hub_1791031706684.jpg';
import editorialDeliveryImg from '../assets/images/editorial_delivery_moment_1791031717496.jpg';
import galleryRiderImg from '../assets/images/gallery_dispatch_rider_1791031727733.jpg';
import galleryParcelsImg from '../assets/images/gallery_packaged_parcels_1791031738245.jpg';
import galleryCargoImg from '../assets/images/gallery_cargo_loading_1791031749316.jpg';

export const BUSINESS_INFO: BusinessInfo = {
  name: 'Tifeexpress Logistics',
  location: 'Challenge Axis, Ibadan',
  phone: '07047428000',
  displayPhone: '0704 742 8000',
  whatsappUrl: 'https://wa.me/2347047428000?text=Hello%20Tifeexpress%20Logistics%2C%20I%20would%20like%20to%20make%20an%20inquiry%20about%20a%20delivery.',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Challenge+Axis+Ibadan',
};

// EXACTLY 3 HERO SLIDES (as strictly required)
export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    headline: 'Move It. Deliver It. Done.',
    supporting: 'Professional logistics and delivery solutions for everyday business and personal needs.',
    image: heroCourierImg,
    altText: 'Courier delivery vehicle in motion representing professional transport',
    primaryCtaText: 'Make an Inquiry',
    primaryCtaAction: '#inquiry',
    secondaryCtaText: 'Call 07047428000',
    secondaryCtaAction: 'tel:07047428000',
  },
  {
    id: 2,
    headline: 'Your Delivery Starts Here',
    supporting: 'A simple way to connect with Tifeexpress Logistics for delivery and logistics inquiries.',
    image: heroParcelImg,
    altText: 'Organized parcel dispatch and courier packaging workstation',
    primaryCtaText: 'Request Delivery Info',
    primaryCtaAction: '#inquiry',
    secondaryCtaText: 'WhatsApp 07047428000',
    secondaryCtaAction: 'https://wa.me/2347047428000?text=Hello%20Tifeexpress%20Logistics%2C%20I%20want%20to%20request%20delivery%20information.',
  },
  {
    id: 3,
    headline: 'Logistics Made Simple',
    supporting: 'Contact Tifeexpress Logistics in Challenge Axis, Ibadan.',
    image: heroHubImg,
    altText: 'Modern courier hub and distribution vehicles in orderly bays',
    primaryCtaText: 'Contact Tifeexpress',
    primaryCtaAction: '#contact',
    secondaryCtaText: 'Our Location',
    secondaryCtaAction: '#location',
  },
];

export const LOGISTICS_SERVICES: LogisticsService[] = [
  {
    id: 'parcel-delivery',
    title: 'Parcel Delivery',
    description: 'Routine parcel and courier consignments handled with care, organized dispatch, and direct communication.',
    iconName: 'Package',
    features: ['Careful parcel handling', 'Clear package coordination', 'Direct dispatch updates'],
  },
  {
    id: 'local-delivery',
    title: 'Local Delivery',
    description: 'Coordinated delivery across key hubs and destinations within Ibadan, centered around our Challenge Axis hub.',
    iconName: 'MapPin',
    features: ['Ibadan-wide connection', 'Challenge Axis coordination', 'Straightforward transit'],
  },
  {
    id: 'business-deliveries',
    title: 'Business Deliveries',
    description: 'Support for merchants, retailers, and local businesses requiring dependable package dispatch for their customers.',
    iconName: 'Building2',
    features: ['Merchant parcel pickup', 'Customer handoff support', 'Consistent communication'],
  },
  {
    id: 'package-transportation',
    title: 'Package Transportation',
    description: 'Structured transit for packaged goods, cartons, and boxes managed according to mutually confirmed arrangements.',
    iconName: 'Truck',
    features: ['Box & carton handling', 'Confirmed transit routes', 'Careful cargo stacking'],
  },
  {
    id: 'pickup-delivery',
    title: 'Pickup & Delivery',
    description: 'Convenient arrangements facilitating pickup from your specified location and delivery to the designated recipient.',
    iconName: 'Clock',
    features: ['Customized pickup point', 'Designated recipient delivery', 'Flexible scheduling'],
  },
  {
    id: 'logistics-support',
    title: 'Logistics Support',
    description: 'Attentive customer assistance to answer delivery inquiries, clarify details, and provide smooth logistics service.',
    iconName: 'Headphones',
    features: ['Phone & WhatsApp inquiry', 'Direct logistics guidance', 'Friendly local service'],
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Make an Inquiry',
    description: 'Contact Tifeexpress Logistics via phone, WhatsApp, or our inquiry form to discuss your delivery requirement.',
    note: 'Call 07047428000 or message on WhatsApp to begin.',
  },
  {
    number: '02',
    title: 'Share Delivery Details',
    description: 'Provide the relevant package and delivery information including pickup location, destination, and package nature.',
    note: 'Clear item descriptions and accurate contact numbers ensure smooth handling.',
  },
  {
    number: '03',
    title: 'Arrange Delivery',
    description: 'Confirm the delivery details, timing, and dispatch arrangement directly with the business.',
    note: 'Agreed details are verified before dispatch begins.',
  },
  {
    number: '04',
    title: 'Delivery',
    description: 'Your package is handled and transported according to the agreed arrangement to the confirmed destination.',
    note: 'Safe handoff completed to the designated recipient.',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'City Dispatch & Quick Transit',
    category: 'Dispatch',
    image: galleryRiderImg,
    caption: 'Dedicated urban motorcycle dispatch courier equipped for swift street-level transit.',
  },
  {
    id: 'gal-2',
    title: 'Protective Package Handling',
    category: 'Parcels',
    image: galleryParcelsImg,
    caption: 'Carefully labeled and packaged cartons prepared for organized destination routing.',
  },
  {
    id: 'gal-3',
    title: 'Cargo & Van Organization',
    category: 'Transport',
    image: galleryCargoImg,
    caption: 'Structured loading and careful placement of delivery consignments inside transit vehicles.',
  },
  {
    id: 'gal-4',
    title: 'Customer Package Handoff',
    category: 'Delivery',
    image: editorialDeliveryImg,
    caption: 'Direct customer parcel handoff reflecting professional and trustworthy courier service.',
  },
  {
    id: 'gal-5',
    title: 'Highway Logistics & Transit',
    category: 'Transport',
    image: heroCourierImg,
    caption: 'Commercial courier transport moving between distribution centers and urban hubs.',
  },
  {
    id: 'gal-6',
    title: 'Logistics Operations Hub',
    category: 'Operations',
    image: heroHubImg,
    caption: 'Organized loading bays and depot environment representing modern courier infrastructure.',
  },
];

export const EDITORIAL_CONTENT = {
  kicker: 'Moving What Matters',
  headline: 'Dependable Courier & Logistics in Ibadan',
  bodyParagraph1: 'In a bustling commercial landscape, timely movement of goods and personal packages forms the backbone of day-to-day trade and peace of mind. Whether delivering merchandise to an eager customer or sending important parcels across the city, reliable coordination is essential.',
  bodyParagraph2: 'Based centrally at Challenge Axis in Ibadan, Tifeexpress Logistics is focused on straightforward, accessible courier and delivery arrangements. With transparent communication via 07047428000 and careful handling, we ensure your delivery arrangements are clear, orderly, and well-managed from inquiry to completion.',
  image: editorialDeliveryImg,
  imageAlt: 'Courier delivering package safely to customer',
};
