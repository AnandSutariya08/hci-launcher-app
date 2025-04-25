
import React from "react";
import FeatureCard from "./FeatureCard";

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
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DemoFeatures;
