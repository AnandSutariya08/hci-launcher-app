
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X, LogIn } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

const Navbar = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { user, setShowLogoutDialog } = useAuth();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLogoutClick = () => {
    setShowLogoutDialog(true);
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

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
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-hci-navy hover:text-hci-blue" asChild>
              <a href="#products">Products</a>
            </Button>
            <Button variant="ghost" className="text-hci-navy hover:text-hci-blue" asChild>
              <a href="#about">About HCI</a>
            </Button>
            {user ? (
              <Button 
                onClick={handleLogoutClick} 
                className="ml-4 bg-hci-blue hover:bg-hci-blue/90 text-white"
              >
                Sign out
              </Button>
            ) : (
              <>
                <Button 
                  onClick={() => navigate('/auth/signin')} 
                  variant="ghost" 
                  className="text-hci-navy hover:text-hci-blue"
                >
                  <LogIn className="mr-2 h-4 w-4" />
                  Sign in
                </Button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="text-hci-navy"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <a 
              href="#products" 
              className="block px-3 py-2 rounded-md text-base font-medium text-hci-navy hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </a>
            <a 
              href="#about" 
              className="block px-3 py-2 rounded-md text-base font-medium text-hci-navy hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              About HCI
            </a>
            {user ? (
              <Button 
                onClick={handleLogoutClick}
                className="w-full mt-2 bg-hci-blue hover:bg-hci-blue/90 text-white"
              >
                Sign out
              </Button>
            ) : (
              <>
                <Button 
                  onClick={() => {
                    navigate('/auth/signin');
                    setIsMenuOpen(false);
                  }}
                  variant="ghost" 
                  className="w-full text-hci-navy hover:bg-gray-50"
                >
                  <LogIn className="mr-2 h-4 w-4" />
                  Sign in
                </Button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
