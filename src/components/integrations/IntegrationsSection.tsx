
import React from "react";
import { Button } from "@/components/ui/button";
import { integrations } from "@/data/integrations";
import IntegrationCard from "./IntegrationCard";
import { Hospital, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";

const IntegrationsSection = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  return (
    <section id="integrations" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
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

        <div className="mb-12 relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              dragFree: true,
              containScroll: "trimSnaps"
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {integrations.map((integration) => (
                <CarouselItem 
                  key={integration.id} 
                  className={`pl-4 ${isMobile ? 'basis-full' : 'sm:basis-1/2 md:basis-1/3 lg:basis-1/4'}`}
                >
                  <IntegrationCard integration={integration} />
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="absolute -bottom-12 w-full flex justify-center gap-2 mt-4">
              <CarouselPrevious className="static transform-none mx-2 bg-white shadow-md hover:bg-gray-50" />
              <CarouselNext className="static transform-none mx-2 bg-white shadow-md hover:bg-gray-50" />
            </div>
          </Carousel>
        </div>

        <div className="text-center mt-16">
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
