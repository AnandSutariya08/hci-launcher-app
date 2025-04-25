
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface DemoHeaderProps {
  name: string;
  docsUrl: string;
}

const DemoHeader = ({ name, docsUrl }: DemoHeaderProps) => {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        <div className="flex items-center gap-3">
          <Button 
            variant="ghost" 
            size="icon" 
            className="hover:bg-hci-blue/10"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <span className="text-lg md:text-xl font-semibold text-hci-navy">{name}</span>
        </div>
        <Button 
          onClick={() => window.open(docsUrl, "_blank")}
          className="bg-hci-blue hover:bg-hci-blue/90 text-white"
        >
          Documentation
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </header>
  );
};

export default DemoHeader;
