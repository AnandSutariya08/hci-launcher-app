
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-hci-navy tracking-tight">
              Transforming Hospital Rooms Into Smart, Connected Healing Spaces
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl">
              Experience HCI Global's innovative healthcare technology solutions through our 
              interactive product demonstrations. Designed for hospital IT staff, administrators,
              and decision-makers to explore our complete ecosystem.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-hci-blue hover:bg-hci-blue/90 text-white font-medium px-8"
                asChild
              >
                <a href="#products">
                  Explore Our Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-hci-navy text-hci-navy hover:bg-gray-100">
                Watch Overview
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <div className="aspect-video bg-gray-200 w-full">
                {/* Video placeholder - replace with actual video */}
                <div className="flex items-center justify-center h-full bg-hci-navy/5">
                  <div className="w-20 h-20 rounded-full bg-hci-blue/90 flex items-center justify-center shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-white ml-1">
                      <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-hci-navy/10 to-transparent opacity-70"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
