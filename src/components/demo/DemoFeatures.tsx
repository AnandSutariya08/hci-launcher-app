
import React from "react";

interface DemoFeaturesProps {
  features: string[];
}

const DemoFeatures = ({ features }: DemoFeaturesProps) => {
  return (
    <section className="scroll-animate px-4 py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-hci-navy mb-16">Key Features</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="scroll-animate bg-white/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="h-12 w-12 bg-gradient-to-br from-hci-blue to-purple-500 rounded-xl flex items-center justify-center mb-6">
                <div className="h-6 w-6 bg-white/90 rounded-lg" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-hci-navy mb-4">{feature}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DemoFeatures;
