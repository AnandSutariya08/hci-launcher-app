
import React from "react";
import { Button } from "@/components/ui/button";
import { integrations } from "@/data/integrations";
import IntegrationCard from "./IntegrationCard";
import { Hospital, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const IntegrationsSection = () => {
  const navigate = useNavigate();

  return (
    <section id="integrations" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="h-12 w-12 rounded-xl bg-hci-blue/10 flex items-center justify-center">
              <Hospital className="h-6 w-6 text-hci-blue" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-hci-navy mb-4">
            Our Healthcare Integrations
          </h2>
          <p className="text-gray-600 text-lg">
            Seamlessly connect with leading healthcare systems and equipment providers to create a unified hospital experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {integrations.map((integration) => (
            <IntegrationCard key={integration.id} integration={integration} />
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={() => navigate("/integrations")}
            size="lg"
            className="bg-hci-blue hover:bg-hci-blue/90"
          >
            Explore All Integrations
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
