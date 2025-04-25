
import React from "react";

interface FeatureCardProps {
  feature: string;
}

const FeatureCard = ({ feature }: FeatureCardProps) => {
  return (
    <div className="scroll-animate bg-white/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
      <div className="h-12 w-12 bg-gradient-to-br from-hci-blue to-purple-500 rounded-xl flex items-center justify-center mb-6">
        <div className="h-6 w-6 bg-white/90 rounded-lg" />
      </div>
      <h3 className="text-xl md:text-2xl font-semibold text-hci-navy mb-4">{feature}</h3>
    </div>
  );
};

export default FeatureCard;
