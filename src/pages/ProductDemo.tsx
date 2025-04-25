
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
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
      <DemoHeader name={demo.name} docsUrl={demo.docsUrl} />
      <main className="pt-24">
        <DemoHero 
          name={demo.name}
          description={demo.description}
          image={demo.image}
          docsUrl={demo.docsUrl}
        />
        <DemoFeatures features={demo.features} />
      </main>
    </div>
  );
};

export default ProductDemo;
