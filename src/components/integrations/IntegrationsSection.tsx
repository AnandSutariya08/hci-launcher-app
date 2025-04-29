
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { integrations } from "@/data/integrations";
import { Hospital, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const IntegrationsSection = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const scrollRef = useRef<HTMLDivElement>(null);

  // Set up the continuous scrolling animation
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    // Clone the logos to create a seamless loop
    const content = scrollContainer.querySelector('.scroll-content');
    if (!content) return;

    // Ensure we have a clone for continuous scrolling
    const existingClone = scrollContainer.querySelector('.scroll-clone');
    if (!existingClone) {
      const clone = content.cloneNode(true);
      clone.classList.add('scroll-clone');
      scrollContainer.appendChild(clone);
    }

    // Animation function for continuous scroll - VERY SLOW SPEED
    const animate = () => {
      if (!scrollContainer) return;
      
      // If we've scrolled past the first set of logos, reset to beginning
      if (scrollContainer.scrollLeft >= content.scrollWidth) {
        scrollContainer.scrollLeft = 0;
      } else {
        // Very reduced scrolling speed (0.1px per frame)
        scrollContainer.scrollLeft += 0.1;
      }
      
      requestAnimationFrame(animate);
    };

    // Start the animation
    let animationId = requestAnimationFrame(animate);

    // Pause on hover
    const handleMouseEnter = () => cancelAnimationFrame(animationId);
    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(animate);
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    // Clean up
    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

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

        <div className="mb-12 relative overflow-hidden">
          {/* Continuous scrolling container */}
          <div 
            ref={scrollRef}
            className="overflow-x-scroll scrollbar-hide whitespace-nowrap"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch' 
            }}
          >
            <div className="scroll-content inline-flex gap-6">
              {integrations.map((integration) => (
                <div 
                  key={integration.id}
                  className="w-52 bg-white rounded-lg p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => navigate(`/integrations/${integration.id}`)}
                >
                  <div className="h-16 flex items-center justify-center mb-4">
                    <img
                      src={integration.logo}
                      alt={`${integration.name} logo`}
                      className="max-h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <h3 className="font-semibold text-center text-lg text-hci-navy truncate">
                    {integration.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
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
