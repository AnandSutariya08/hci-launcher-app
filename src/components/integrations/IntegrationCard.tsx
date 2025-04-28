
import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { Integration } from "@/data/integrations";

interface IntegrationCardProps {
  integration: Integration;
}

const IntegrationCard = ({ integration }: IntegrationCardProps) => {
  const navigate = useNavigate();

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg border-gray-100">
      <CardHeader className="p-6">
        <div className="h-12 flex items-center justify-center">
          <img
            src={integration.logo}
            alt={`${integration.name} logo`}
            className="max-h-10 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 pt-2">
        <div className="space-y-2">
          <span className="text-sm font-medium text-hci-blue">
            {integration.category}
          </span>
          <h3 className="font-semibold text-xl text-hci-navy">
            {integration.name}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-2">
            {integration.description}
          </p>
          <Button 
            variant="ghost" 
            className="p-0 h-auto text-hci-blue hover:text-hci-blue/90"
            onClick={() => navigate(`/integrations/${integration.id}`)}
          >
            Learn more 
            <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default IntegrationCard;
