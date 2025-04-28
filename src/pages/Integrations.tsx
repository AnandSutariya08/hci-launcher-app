import React from "react";
import Footer from "@/components/Footer";
import { integrations } from "@/data/integrations";
import IntegrationCard from "@/components/integrations/IntegrationCard";
import { Hospital, Building, Check, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const benefits = [
  "Unified patient data across all systems",
  "Streamlined clinical workflows",
  "Enhanced equipment interoperability",
  "Real-time monitoring and alerts",
  "Secure data exchange",
  "Improved patient care coordination"
];

const Integrations = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
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
            <span className="text-lg md:text-xl font-semibold text-hci-navy">Integrations</span>
          </div>
        </div>
      </header>
      <main className="pt-24">
        {/* Hero Section */}
        <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2 space-y-6">
                <div className="inline-flex items-center gap-2 bg-hci-blue/10 text-hci-blue px-4 py-2 rounded-full">
                  <Hospital className="h-5 w-5" />
                  <span className="font-medium">Healthcare Integrations</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-hci-navy">
                  Seamless Integration with Healthcare Leaders
                </h1>
                <p className="text-xl text-gray-600">
                  Connect your hospital systems with industry-leading healthcare technology providers for enhanced patient care and operational efficiency.
                </p>
              </div>
              <div className="lg:w-1/2">
                <div className="grid grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100"
                    >
                      <Check className="h-5 w-5 text-hci-blue flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Categories */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <div className="h-12 w-12 rounded-xl bg-hci-blue/10 flex items-center justify-center">
                  <Building className="h-6 w-6 text-hci-blue" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-hci-navy mb-4">
                Our Integration Partners
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                We partner with leading healthcare technology providers to ensure your hospital operations run smoothly and efficiently.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {integrations.map((integration) => (
                <IntegrationCard key={integration.id} integration={integration} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Integrations;
