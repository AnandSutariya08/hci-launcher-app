
import React from 'react';
import { Button } from "@/components/ui/button";
import { ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  title: string;
  description: string;
  iconPath: string;
  launchUrl: string;
  className?: string;
}

const ProductCard = ({
  title,
  description,
  iconPath,
  launchUrl,
  className
}: ProductCardProps) => {
  return (
    <div className={cn("bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full", className)}>
      <div className="mb-4 text-hci-blue">
        <img 
          src={iconPath} 
          alt={`${title} icon`}
          className="w-16 h-16 object-contain"
        />
      </div>
      <h3 className="text-xl font-semibold text-hci-navy">{title}</h3>
      <p className="mt-2 text-gray-600 flex-grow">{description}</p>
      <div className="mt-6">
        <Button 
          className="w-full bg-hci-blue hover:bg-hci-blue/90 text-white"
          onClick={() => window.open(launchUrl, '_blank')}
        >
          Launch Demo 
          <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
