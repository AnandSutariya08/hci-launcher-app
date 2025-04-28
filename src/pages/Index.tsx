
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProductGrid from '@/components/ProductGrid';
import IntegrationsSection from '@/components/integrations/IntegrationsSection';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <ProductGrid />
        <IntegrationsSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
