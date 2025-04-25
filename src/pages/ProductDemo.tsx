
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
      threshold: 0.1
    });

    document.querySelectorAll('.scroll-animate').forEach((element) => {
      element.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700');
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
    <div className="min-h-screen bg-gradient-to-b from-hci-blue/5 via-white to-gray-50">
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

      <main className="pt-20">
        <section className="scroll-animate px-4 py-12 md:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-hci-navy mb-6">{demo.name}</h1>
                <p className="text-lg text-gray-600 mb-8">{demo.description}</p>
                <Button 
                  className="bg-hci-blue hover:bg-hci-blue/90 text-white text-lg px-8 py-6"
                  onClick={() => window.open(demo.docsUrl, "_blank")}
                >
                  Start Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-hci-blue/20 to-purple-500/20 rounded-lg blur-3xl opacity-30" />
                <img 
                  src={demo.image} 
                  alt={demo.name}
                  className="relative rounded-lg shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="scroll-animate px-4 py-12 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-hci-navy mb-12">Key Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {demo.features && demo.features.map((feature, index) => (
                <div 
                  key={index}
                  className="scroll-animate bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="h-12 w-12 bg-hci-blue/10 rounded-lg flex items-center justify-center mb-4">
                    <div className="h-6 w-6 bg-hci-blue rounded-md" />
                  </div>
                  <h3 className="text-xl font-semibold text-hci-navy mb-2">{feature}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="scroll-animate px-4 py-12 md:py-20">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-hci-navy mb-12">Preview</h2>
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <div className="absolute -inset-4 bg-gradient-to-r from-hci-blue/20 to-purple-500/20 rounded-lg blur-3xl opacity-30" />
              <img 
                src={demo.image} 
                alt={`${demo.name} preview`}
                className="relative w-full rounded-lg"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProductDemo;
