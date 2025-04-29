
import React from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    key: "whiteboard",
    title: "Web Whiteboard",
    description: "Interactive digital whiteboard for patient information, care plans, and team collaboration.",
    image: "/demo-images/whiteboard.jpg",
    color: "from-blue-500/20 to-cyan-400/20"
  },
  {
    id: 2,
    key: "webusb",
    title: "Web USB",
    description: "Secure USB solution for healthcare professionals to access patient data and medical resources.",
    image: "/demo-images/webusb.jpg",
    color: "from-purple-500/20 to-indigo-400/20"
  },
  {
    id: 3,
    key: "wallmate",
    title: "Web WallMate",
    description: "Smart room control solution for patients to manage environment and access entertainment.",
    image: "/demo-images/wallmate.jpg",
    color: "from-green-500/20 to-teal-400/20"
  },
  {
    id: 4,
    key: "evs",
    title: "EVS",
    description: "Environmental services management platform for housekeeping and maintenance tracking.",
    image: "/demo-images/evs.jpg",
    color: "from-orange-500/20 to-amber-400/20"
  },
  {
    id: 5,
    key: "handheldusb",
    title: "Handheld USB",
    description: "Mobile data access solution for clinicians on the move within hospital environments.",
    image: "/demo-images/handheldusb.jpg",
    color: "from-red-500/20 to-pink-400/20"
  },
  {
    id: 6,
    key: "lobbyapp",
    title: "Patient Lobby App",
    description: "Digital check-in and waiting room management for improved patient experience.",
    image: "/demo-images/lobbyapp.jpg",
    color: "from-yellow-500/20 to-amber-400/20"
  },
  {
    id: 7,
    key: "launchertv",
    title: "Launcher TV",
    description: "Entertainment and education platform for patient rooms with custom hospital content.",
    image: "/demo-images/launchertv.jpg",
    color: "from-indigo-500/20 to-blue-400/20"
  },
  {
    id: 8,
    key: "discharge",
    title: "Discharge Record App",
    description: "Streamlined discharge process management for clinical staff and patients.",
    image: "/demo-images/discharge.jpg",
    color: "from-emerald-500/20 to-green-400/20"
  },
];

const ProductGrid = () => {
  const navigate = useNavigate();

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <section id="products" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="bg-hci-blue/10 text-hci-blue px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
            Interactive Demos
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-hci-navy mb-4 leading-tight">
            Product Launcher Hub
          </h2>
          <p className="mt-3 md:mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Explore interactive demos of our healthcare solutions with preloaded dummy data
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={item}
              className="rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
            >
              <div className={`h-48 p-6 bg-gradient-to-br ${product.color} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img 
                  src={product.image}
                  alt={`${product.title} preview`}
                  className="h-full w-full object-cover rounded-xl shadow-md transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl md:text-2xl font-semibold text-hci-navy mb-2 group-hover:text-hci-blue transition-colors">
                  {product.title}
                </h3>
                <p className="text-gray-600 flex-grow mb-4">
                  {product.description}
                </p>
                <Button 
                  className="w-full bg-hci-blue hover:bg-hci-blue/90 text-white group-hover:shadow-md transition-all"
                  onClick={() => navigate(`/demos/${product.key}`)}
                >
                  Launch Demo
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductGrid;
