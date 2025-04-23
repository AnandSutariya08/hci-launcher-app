
import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    title: "Web Whiteboard",
    description: "Interactive digital whiteboard for patient information, care plans, and team collaboration.",
    iconPath: "/placeholder.svg",
    launchUrl: "/demos/whiteboard"
  },
  {
    id: 2,
    title: "Web USB",
    description: "Secure USB solution for healthcare professionals to access patient data and medical resources.",
    iconPath: "/placeholder.svg",
    launchUrl: "/demos/webusb"
  },
  {
    id: 3,
    title: "Web WallMate",
    description: "Smart room control solution for patients to manage environment and access entertainment.",
    iconPath: "/placeholder.svg",
    launchUrl: "/demos/wallmate"
  },
  {
    id: 4,
    title: "EVS",
    description: "Environmental services management platform for housekeeping and maintenance tracking.",
    iconPath: "/placeholder.svg",
    launchUrl: "/demos/evs"
  },
  {
    id: 5,
    title: "Handheld USB",
    description: "Mobile data access solution for clinicians on the move within hospital environments.",
    iconPath: "/placeholder.svg",
    launchUrl: "/demos/handheldusb"
  },
  {
    id: 6,
    title: "Patient Lobby App",
    description: "Digital check-in and waiting room management for improved patient experience.",
    iconPath: "/placeholder.svg",
    launchUrl: "/demos/lobbyapp"
  },
  {
    id: 7,
    title: "Launcher TV",
    description: "Entertainment and education platform for patient rooms with custom hospital content.",
    iconPath: "/placeholder.svg",
    launchUrl: "/demos/launchertv"
  },
  {
    id: 8,
    title: "Discharge Record App",
    description: "Streamlined discharge process management for clinical staff and patients.",
    iconPath: "/placeholder.svg",
    launchUrl: "/demos/discharge"
  },
];

const ProductGrid = () => {
  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-hci-navy">Product Launcher Hub</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Explore interactive demos of our healthcare solutions with preloaded dummy data
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard
              key={product.id}
              title={product.title}
              description={product.description}
              iconPath={product.iconPath}
              launchUrl={product.launchUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
