
import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import type { Integration } from "@/data/integrations";

interface IntegrationCardProps {
  integration: Integration;
}

const IntegrationCard = ({ integration }: IntegrationCardProps) => {
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
          <p className="text-gray-600 text-sm">
            {integration.description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default IntegrationCard;
