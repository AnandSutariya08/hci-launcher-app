
import React from 'react';
import { useIsMobile } from "@/hooks/use-mobile";

const Footer = () => {
  const isMobile = useIsMobile();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-hci-navy text-white">
      <div className="max-w-7xl mx-auto py-8 sm:py-10 md:py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          <div className="col-span-full sm:col-span-2">
            <div className="flex items-center">
              <span className="text-xl font-semibold">HCI Global</span>
              <span className="ml-1 text-hci-blue font-semibold">Launcher</span>
            </div>
            <p className="mt-3 md:mt-4 text-sm text-gray-300 max-w-md">
              Interactive demonstrations of HCI Global's healthcare technology solutions.
              Experience how our products transform hospital rooms into smart, connected healing spaces.
            </p>
          </div>
          
          <div className="col-span-full sm:col-span-2 mt-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-center mb-4">Products</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <ul className="space-y-2">
                  <li><a href="/demos/whiteboard" className="text-gray-300 hover:text-white text-sm">Web Whiteboard</a></li>
                  <li><a href="/demos/webusb" className="text-gray-300 hover:text-white text-sm">Web USB</a></li>
                  <li><a href="/demos/wallmate" className="text-gray-300 hover:text-white text-sm">Web WallMate</a></li>
                  <li><a href="/demos/evs" className="text-gray-300 hover:text-white text-sm">EVS</a></li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2">
                  <li><a href="/demos/handheldusb" className="text-gray-300 hover:text-white text-sm">Handheld USB</a></li>
                  <li><a href="/demos/lobbyapp" className="text-gray-300 hover:text-white text-sm">Patient Lobby App</a></li>
                  <li><a href="/demos/launchertv" className="text-gray-300 hover:text-white text-sm">Launcher TV</a></li>
                  <li><a href="/demos/discharge" className="text-gray-300 hover:text-white text-sm">Discharge Record App</a></li>
                </ul>
              </div>
              <div className="md:col-span-2">
                <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Integrations</h3>
                <ul className="space-y-2 grid grid-cols-2 gap-x-4">
                  <li><a href="/integrations" className="text-gray-300 hover:text-white text-sm">Epic</a></li>
                  <li><a href="/integrations" className="text-gray-300 hover:text-white text-sm">Cerner</a></li>
                  <li><a href="/integrations" className="text-gray-300 hover:text-white text-sm">Allscripts</a></li>
                  <li><a href="/integrations" className="text-gray-300 hover:text-white text-sm">Jeron</a></li>
                  <li><a href="/integrations" className="text-gray-300 hover:text-white text-sm">Phillips</a></li>
                  <li><a href="/integrations" className="text-gray-300 hover:text-white text-sm">Stryker</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 md:mt-12 border-t border-gray-700 pt-6 md:pt-8 flex flex-col md:flex-row justify-between">
          <p className="text-xs sm:text-sm text-gray-300">© {currentYear} HCI Global. All rights reserved.</p>
          <p className="text-xs sm:text-sm text-gray-300 mt-2 md:mt-0">This is a demo site.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
