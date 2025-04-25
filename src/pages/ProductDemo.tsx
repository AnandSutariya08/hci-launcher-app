import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

const productMap: {
  [key: string]: {
    name: string;
    description: string;
    image: string;
    docsUrl: string;
    features: string[];
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
            <span className="text-lg md:text-xl font-semibold text-hci-navy">{demo.name}</span>
          </div>
          <Button 
            onClick={() => window.open(demo.docsUrl, "_blank")}
            className="bg-hci-blue hover:bg-hci-blue/90 text-white"
          >
            Documentation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </header>

      <main className="pt-24">
        <section className="scroll-animate px-4 py-12 md:py-20 min-h-[80vh] flex items-center">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h1 className="text-4xl md:text-6xl font-bold text-hci-navy mb-6 leading-tight">{demo.name}</h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">{demo.description}</p>
                <Button 
                  className="bg-hci-blue hover:bg-hci-blue/90 text-white text-lg px-8 py-6 rounded-xl transform transition-transform hover:scale-105"
                  onClick={() => window.open(demo.docsUrl, "_blank")}
                >
                  Start Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <div className="order-1 lg:order-2 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-hci-blue/20 to-purple-500/20 rounded-2xl blur-3xl opacity-30 transform rotate-3" />
                <img 
                  src={demo.image} 
                  alt={demo.name}
                  className="relative rounded-2xl shadow-2xl w-full transform hover:rotate-2 transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="scroll-animate px-4 py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="max-w-7xl mx-auto relative">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-hci-navy mb-16">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {demo.features && demo.features.map((feature, index) => (
                <div 
                  key={index}
                  className="scroll-animate bg-white/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
                >
                  <div className="h-12 w-12 bg-gradient-to-br from-hci-blue to-purple-500 rounded-xl flex items-center justify-center mb-6">
                    <div className="h-6 w-6 bg-white/90 rounded-lg" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-hci-navy mb-4">{feature}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProductDemo;
