
import React from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center">
                <span className="text-xl font-semibold text-hci-navy">HCI Global</span>
                <span className="ml-1 text-hci-blue font-semibold">Launcher</span>
              </a>
            </div>
          </div>
          <div className="flex items-center">
            <Button variant="ghost" className="text-hci-navy hover:text-hci-blue" asChild>
              <a href="#products">Products</a>
            </Button>
            <Button variant="ghost" className="text-hci-navy hover:text-hci-blue" asChild>
              <a href="#about">About HCI</a>
            </Button>
            <Button className="ml-4 bg-hci-blue hover:bg-hci-blue/90 text-white">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
