
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import DemoHeader from "@/components/demo/DemoHeader";
import DemoHero from "@/components/demo/DemoHero";
import DemoFeatures from "@/components/demo/DemoFeatures";

const productMap: {
  [key: string]: {
    name: string;
    description: string;
    image: string;
    docsUrl: string;
    features: string[];
    screenshots?: string[];
  }
} = {
  whiteboard: {
    name: "Web Whiteboard",
    description: "Interactive digital whiteboard for patient info, care plans & team collaboration.",
    image: "/demo-images/whiteboard.jpg",
    docsUrl: "https://docs.hci.gitbook.io/web-whiteboard",
    features: [
      "Real-time collaboration",
      "Patient information tracking",
      "Care plan visualization",
      "Team messaging integration"
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      "https://images.unsplash.com/photo-1518770660439-4636190af475",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    ]
  },
  webusb: {
    name: "Web USB",
    description: "Secure USB access for healthcare professionals.",
    image: "/demo-images/webusb.jpg",
    docsUrl: "https://docs.hci.gitbook.io/web-usb",
    features: [
      "Secure device access",
      "Patient data integration",
      "Medical record scanning",
      "Credential management"
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
    ]
  },
  wallmate: {
    name: "Web WallMate",
    description: "Smart room control for patients to manage their environment.",
    image: "/demo-images/wallmate.jpg",
    docsUrl: "https://docs.hci.gitbook.io/web-wallmate",
    features: [
      "Room temperature control",
      "Lighting adjustments",
      "Entertainment system integration",
      "Nurse call functionality"
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1"
    ]
  },
  evs: {
    name: "EVS",
    description: "Housekeeping & maintenance tracking for hospital environments.",
    image: "/demo-images/evs.jpg",
    docsUrl: "https://docs.hci.gitbook.io/evs",
    features: [
      "Room cleaning status",
      "Maintenance request tracking",
      "Staff assignment",
      "Inventory management"
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
    ]
  },
  handheldusb: {
    name: "Handheld USB",
    description: "Mobile solution for clinicians to access data anywhere.",
    image: "/demo-images/handheldusb.jpg",
    docsUrl: "https://docs.hci.gitbook.io/handheld-usb",
    features: [
      "Mobile data access",
      "Secure authentication",
      "Offline capability",
      "Cross-device synchronization"
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      "https://images.unsplash.com/photo-1518770660439-4636190af475",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    ]
  },
  lobbyapp: {
    name: "Patient Lobby App",
    description: "Digital check-in & waiting room experience for patients.",
    image: "/demo-images/lobbyapp.jpg",
    docsUrl: "https://docs.hci.gitbook.io/lobby-app",
    features: [
      "Digital check-in",
      "Wait time estimation",
      "Form completion",
      "Notification system"
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    ]
  },
  launchertv: {
    name: "Launcher TV",
    description: "Education & entertainment platform for in-room patient engagement.",
    image: "/demo-images/launchertv.jpg",
    docsUrl: "https://docs.hci.gitbook.io/launcher-tv",
    features: [
      "Entertainment streaming",
      "Educational content",
      "Hospital information",
      "Virtual consultations"
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    ]
  },
  discharge: {
    name: "Discharge Record App",
    description: "Streamlined discharge process for staff & patients.",
    image: "/demo-images/discharge.jpg",
    docsUrl: "https://docs.hci.gitbook.io/discharge-record-app",
    features: [
      "Discharge checklist",
      "Medication instructions",
      "Follow-up scheduling",
      "Digital documentation"
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    ]
  },
};

const ProductDemo = () => {
  const { demoId } = useParams();
  const navigate = useNavigate();

  const demo = productMap[demoId ?? ""] || null;

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in', 'opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '20px'
    });

    document.querySelectorAll('.scroll-animate').forEach((element) => {
      element.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-1000');
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  if (!demo) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg text-center w-full max-w-md">
          <h2 className="text-xl md:text-2xl font-bold text-hci-navy mb-4">Product Not Found</h2>
          <Button onClick={() => navigate("/")} className="bg-hci-blue text-white">
            Back to Launcher
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-hci-navy/5 via-white to-gray-50">
      <DemoHeader name={demo.name} docsUrl={demo.docsUrl} />
      <main className="pt-24">
        <DemoHero 
          name={demo.name}
          description={demo.description}
          image={demo.image}
          docsUrl={demo.docsUrl}
        />
        
        {/* New Screenshots Section */}
        {demo.screenshots && (
          <section className="scroll-animate py-16 md:py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-hci-navy mb-10">Product Screenshots</h2>
              
              <div className="relative">
                <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-white via-transparent to-white h-full w-full pointer-events-none z-10" />
                <Carousel className="w-full">
                  <CarouselContent className="-ml-2 md:-ml-4">
                    {demo.screenshots.map((screenshot, index) => (
                      <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                        <div className="bg-white p-2 rounded-xl shadow-lg overflow-hidden group transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                          <div className="relative h-56 md:h-64 overflow-hidden rounded-lg">
                            <img 
                              src={screenshot} 
                              alt={`${demo.name} screenshot ${index + 1}`}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                              <p className="p-4 text-white font-medium">
                                {demo.name} View {index + 1}
                              </p>
                            </div>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>
            </div>
          </section>
        )}
        
        {/* Technical Overview Section */}
        <section className="scroll-animate py-16 md:py-20 bg-gradient-to-b from-white to-gray-50 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-hci-navy mb-6">Technical Overview</h2>
                <div className="space-y-5">
                  <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-xl font-semibold text-hci-navy mb-2">System Requirements</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 mr-3 flex-shrink-0">✓</span>
                        <span>Modern web browser (Chrome, Firefox, Safari, Edge)</span>
                      </li>
                      <li className="flex items-center">
                        <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 mr-3 flex-shrink-0">✓</span>
                        <span>Internet connection (minimum 5Mbps)</span>
                      </li>
                      <li className="flex items-center">
                        <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 mr-3 flex-shrink-0">✓</span>
                        <span>Healthcare system credentials (for full functionality)</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-xl font-semibold text-hci-navy mb-2">Integration Capabilities</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800 mr-3 flex-shrink-0">→</span>
                        <span>EMR/EHR Systems (Epic, Cerner, Allscripts)</span>
                      </li>
                      <li className="flex items-center">
                        <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800 mr-3 flex-shrink-0">→</span>
                        <span>Medical Equipment Integration</span>
                      </li>
                      <li className="flex items-center">
                        <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800 mr-3 flex-shrink-0">→</span>
                        <span>Communication Systems</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-hci-blue/20 to-purple-500/20 rounded-2xl blur-3xl opacity-30 transform rotate-3" />
                <div className="relative bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <h3 className="text-xl font-semibold text-hci-navy mb-4 flex items-center">
                    <svg className="h-6 w-6 text-hci-blue mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Implementation Timeline
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex">
                      <div className="flex flex-col items-center mr-4">
                        <div className="h-10 w-10 rounded-full bg-hci-blue text-white flex items-center justify-center">1</div>
                        <div className="h-full w-0.5 bg-gray-200 mt-2"></div>
                      </div>
                      <div className="pb-6">
                        <h4 className="text-lg font-medium text-hci-navy">Discovery</h4>
                        <p className="text-gray-600">Initial assessment of hospital requirements</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="flex flex-col items-center mr-4">
                        <div className="h-10 w-10 rounded-full bg-hci-blue text-white flex items-center justify-center">2</div>
                        <div className="h-full w-0.5 bg-gray-200 mt-2"></div>
                      </div>
                      <div className="pb-6">
                        <h4 className="text-lg font-medium text-hci-navy">Installation</h4>
                        <p className="text-gray-600">Setup and configuration of systems</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="flex flex-col items-center mr-4">
                        <div className="h-10 w-10 rounded-full bg-hci-blue text-white flex items-center justify-center">3</div>
                        <div className="h-full w-0.5 bg-gray-200 mt-2"></div>
                      </div>
                      <div className="pb-6">
                        <h4 className="text-lg font-medium text-hci-navy">Integration</h4>
                        <p className="text-gray-600">Connection with existing hospital systems</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="flex flex-col items-center mr-4">
                        <div className="h-10 w-10 rounded-full bg-hci-blue text-white flex items-center justify-center">4</div>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-hci-navy">Training & Launch</h4>
                        <p className="text-gray-600">Staff training and system deployment</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <DemoFeatures features={demo.features} />
      </main>
    </div>
  );
};

export default ProductDemo;
