
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-hci-navy text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center">
              <span className="text-xl font-semibold">HCI Global</span>
              <span className="ml-1 text-hci-blue font-semibold">Launcher</span>
            </div>
            <p className="mt-4 text-sm text-gray-300 max-w-md">
              Interactive demonstrations of HCI Global's healthcare technology solutions.
              Experience how our products transform hospital rooms into smart, connected healing spaces.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Products</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#products" className="text-gray-300 hover:text-white text-sm">Web Whiteboard</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-white text-sm">Web USB</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-white text-sm">Web WallMate</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-white text-sm">EVS</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-white text-sm">View All</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-white text-sm">About HCI</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between">
          <p className="text-sm text-gray-300">© {new Date().getFullYear()} HCI Global. All rights reserved.</p>
          <p className="text-sm text-gray-300 mt-2 md:mt-0">This is a demo site.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
