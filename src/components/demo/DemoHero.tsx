
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface DemoHeroProps {
  name: string;
  description: string;
  image: string;
  docsUrl: string;
}

const DemoHero = ({ name, description, image, docsUrl }: DemoHeroProps) => {
  const handleDemoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Open in new tab without scrolling the current page
    const newWindow = window.open(docsUrl, "_blank");
    if (newWindow) newWindow.focus();
  };

  return (
    <section className="scroll-animate px-4 py-12 md:py-20 min-h-[80vh] flex items-center">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-6xl font-bold text-hci-navy mb-6 leading-tight animate-fade-in">{name}</h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed animate-fade-in">{description}</p>
            <Button 
              className="bg-hci-blue hover:bg-hci-blue/90 text-white text-lg px-8 py-6 rounded-xl transform transition-transform hover:scale-105 shadow-lg hover:shadow-xl"
              onClick={handleDemoClick}
            >
              Start Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-hci-blue/20 to-purple-500/20 rounded-2xl blur-3xl opacity-30 transform rotate-3" />
            <img 
              src={image} 
              alt={`${name} preview`}
              className="relative rounded-2xl shadow-2xl w-full transform hover:rotate-2 transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoHero;
