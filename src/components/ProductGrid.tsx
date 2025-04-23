
import React from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const products = [
  {
    id: 1,
    key: "whiteboard",
    title: "Web Whiteboard",
    description: "Interactive digital whiteboard for patient information, care plans, and team collaboration.",
    image: "/demo-images/whiteboard.jpg"
  },
  {
    id: 2,
    key: "webusb",
    title: "Web USB",
    description: "Secure USB solution for healthcare professionals to access patient data and medical resources.",
    image: "/demo-images/webusb.jpg"
  },
  {
    id: 3,
    key: "wallmate",
    title: "Web WallMate",
    description: "Smart room control solution for patients to manage environment and access entertainment.",
    image: "/demo-images/wallmate.jpg"
  },
  {
    id: 4,
    key: "evs",
    title: "EVS",
    description: "Environmental services management platform for housekeeping and maintenance tracking.",
    image: "/demo-images/evs.jpg"
  },
  {
    id: 5,
    key: "handheldusb",
    title: "Handheld USB",
    description: "Mobile data access solution for clinicians on the move within hospital environments.",
    image: "/demo-images/handheldusb.jpg"
  },
  {
    id: 6,
    key: "lobbyapp",
    title: "Patient Lobby App",
    description: "Digital check-in and waiting room management for improved patient experience.",
    image: "/demo-images/lobbyapp.jpg"
  },
  {
    id: 7,
    key: "launchertv",
    title: "Launcher TV",
    description: "Entertainment and education platform for patient rooms with custom hospital content.",
    image: "/demo-images/launchertv.jpg"
  },
  {
    id: 8,
    key: "discharge",
    title: "Discharge Record App",
    description: "Streamlined discharge process management for clinical staff and patients.",
    image: "/demo-images/discharge.jpg"
  },
];

const ProductGrid = () => {
  const navigate = useNavigate();

  return (
    <section id="products" className="py-10 sm:py-12 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-hci-navy">Product Launcher Hub</h2>
          <p className="mt-3 md:mt-4 text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Explore interactive demos of our healthcare solutions with preloaded dummy data
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {products.map(product => (
            <div
              key={product.id}
              className="bg-white p-4 sm:p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full"
            >
              <div className="mb-4 flex justify-center items-center">
                <img 
                  src={product.image}
                  alt={`${product.title} icon`}
                  className="w-16 h-16 rounded shadow object-cover"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-hci-navy">{product.title}</h3>
              <p className="mt-2 text-sm sm:text-base text-gray-600 flex-grow">{product.description}</p>
              <div className="mt-4 sm:mt-6">
                <Button 
                  className="w-full bg-hci-blue hover:bg-hci-blue/90 text-white"
                  onClick={() => navigate(`/demos/${product.key}`)}
                >
                  Launch Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
