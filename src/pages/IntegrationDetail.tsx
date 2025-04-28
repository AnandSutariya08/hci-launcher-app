
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { integrations } from "@/data/integrations";
import Footer from "@/components/Footer";

const IntegrationDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const integration = integrations.find(i => i.id === Number(id));
  
  if (!integration) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Integration not found</h1>
        <Button onClick={() => navigate('/integrations')}>Back to Integrations</Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:bg-hci-blue/10"
              onClick={() => navigate('/integrations')}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <span className="text-lg md:text-xl font-semibold text-hci-navy">{integration.name}</span>
          </div>
        </div>
      </header>

      <main className="pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <img
                  src={integration.logo}
                  alt={`${integration.name} logo`}
                  className="h-12 w-auto mb-6"
                />
                <span className="text-sm font-medium text-hci-blue bg-hci-blue/10 px-3 py-1 rounded-full">
                  {integration.category}
                </span>
                <h1 className="text-3xl font-bold text-hci-navy mt-4">
                  {integration.name}
                </h1>
                <p className="text-gray-600 mt-4">
                  {integration.description}
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-xl font-semibold text-hci-navy mb-4">Key Features</h2>
                <ul className="space-y-3">
                  {integration.features?.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-hci-blue mt-2" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-xl font-semibold text-hci-navy mb-4">Integration Benefits</h2>
                <div className="space-y-4">
                  {integration.benefits?.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 rounded-full bg-hci-blue mt-2" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-xl font-semibold text-hci-navy mb-4">Technical Details</h2>
                <div className="space-y-4">
                  <p className="text-gray-600">{integration.technicalDetails}</p>
                  {integration.requirements && (
                    <div className="mt-4">
                      <h3 className="font-medium text-hci-navy mb-2">Requirements</h3>
                      <ul className="list-disc pl-5 space-y-1 text-gray-600">
                        {integration.requirements.map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default IntegrationDetail;
