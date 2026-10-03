import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSlider } from './components/HeroSlider';
import { ServicesSection } from './components/ServicesSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { EditorialSection } from './components/EditorialSection';
import { AboutSection } from './components/AboutSection';
import { LocationSection } from './components/LocationSection';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileQuickBar } from './components/MobileQuickBar';

export default function App() {
  const [selectedServiceForInquiry, setSelectedServiceForInquiry] = useState<string>('parcel-delivery');

  const handleOpenInquiry = (serviceId?: string) => {
    if (serviceId) {
      setSelectedServiceForInquiry(serviceId);
    }
    const inquiryElement = document.getElementById('inquiry') || document.getElementById('contact');
    if (inquiryElement) {
      inquiryElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 flex flex-col font-sans pb-14 sm:pb-0">
      {/* 1. Header Navigation */}
      <Header onOpenInquiry={() => handleOpenInquiry()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero — Exactly 3 Slides */}
        <HeroSlider onOpenInquiry={handleOpenInquiry} />

        {/* 3. Services Section */}
        <ServicesSection onSelectService={handleOpenInquiry} />

        {/* 4. How It Works (Logistics Process) */}
        <HowItWorksSection onOpenInquiry={() => handleOpenInquiry()} />

        {/* 5. Editorial Brand Section ("Moving What Matters") */}
        <EditorialSection onOpenInquiry={() => handleOpenInquiry()} />

        {/* 6. About Section */}
        <AboutSection />

        {/* 7. Delivery / Location Section */}
        <LocationSection />

        {/* 8. Gallery Section */}
        <GallerySection />

        {/* 9. Contact & Interactive Inquiry CTA */}
        <ContactSection initialServiceId={selectedServiceForInquiry} />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* 11. Mobile Quick Bar (Complies with 15% mobile sticky cap) */}
      <MobileQuickBar />
    </div>
  );
}
