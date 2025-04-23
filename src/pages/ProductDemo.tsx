
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen } from "lucide-react";

const productMap: {
  [key: string]: {
    name: string;
    description: string;
    image: string;
    docsUrl: string;
  }
} = {
  whiteboard: {
    name: "Web Whiteboard",
    description: "Interactive digital whiteboard for patient info, care plans & team collaboration.",
    image: "/demo-images/whiteboard.jpg",
    docsUrl: "https://docs.hci.gitbook.io/web-whiteboard",
  },
  webusb: {
    name: "Web USB",
    description: "Secure USB access for healthcare professionals.",
    image: "/demo-images/webusb.jpg",
    docsUrl: "https://docs.hci.gitbook.io/web-usb",
  },
  wallmate: {
    name: "Web WallMate",
    description: "Smart room control for patients to manage their environment.",
    image: "/demo-images/wallmate.jpg",
    docsUrl: "https://docs.hci.gitbook.io/web-wallmate",
  },
  evs: {
    name: "EVS",
    description: "Housekeeping & maintenance tracking for hospital environments.",
    image: "/demo-images/evs.jpg",
    docsUrl: "https://docs.hci.gitbook.io/evs",
  },
  handheldusb: {
    name: "Handheld USB",
    description: "Mobile solution for clinicians to access data anywhere.",
    image: "/demo-images/handheldusb.jpg",
    docsUrl: "https://docs.hci.gitbook.io/handheld-usb",
  },
  lobbyapp: {
    name: "Patient Lobby App",
    description: "Digital check-in & waiting room experience for patients.",
    image: "/demo-images/lobbyapp.jpg",
    docsUrl: "https://docs.hci.gitbook.io/lobby-app",
  },
  launchertv: {
    name: "Launcher TV",
    description: "Education & entertainment platform for in-room patient engagement.",
    image: "/demo-images/launchertv.jpg",
    docsUrl: "https://docs.hci.gitbook.io/launcher-tv",
  },
  discharge: {
    name: "Discharge Record App",
    description: "Streamlined discharge process for staff & patients.",
    image: "/demo-images/discharge.jpg",
    docsUrl: "https://docs.hci.gitbook.io/discharge-record-app",
  },
};

const ProductDemo = () => {
  const { demoId } = useParams();
  const navigate = useNavigate();

  const demo = productMap[demoId ?? ""] || null;

  if (!demo) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded-xl shadow-lg text-center">
          <h2 className="text-2xl font-bold text-hci-navy mb-4">Product Not Found</h2>
          <Button onClick={() => navigate("/")} className="bg-hci-blue text-white">
            Back to Launcher
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-hci-blue/5 via-white to-gray-50 flex flex-col items-center">
      <header className="w-full bg-hci-navy">
        <div className="max-w-4xl mx-auto flex items-center px-4 py-4">
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-white mr-3 hover:bg-hci-blue/20"
            onClick={() => navigate('/')}
          >
            <ArrowLeft />
          </Button>
          <span className="text-xl text-white font-semibold">{demo.name}</span>
        </div>
      </header>
      <main className="flex-grow w-full flex flex-col items-center">
        <div className="max-w-lg w-full bg-white rounded-xl shadow-xl mt-10 mb-8 overflow-hidden flex flex-col items-center animate-fade-in">
          <img 
            src={demo.image} 
            alt={demo.name} 
            className="w-full h-72 object-cover border-b border-gray-200"
          />
          <div className="p-6 w-full flex flex-col items-center">
            <h2 className="text-2xl font-bold text-hci-navy mb-3">{demo.name}</h2>
            <p className="text-gray-600 text-center mb-6">{demo.description}</p>
            <Button 
              onClick={() => window.open(demo.docsUrl, "_blank")}
              className="bg-hci-blue hover:bg-hci-blue/90 text-white w-44 flex items-center gap-2"
              size="lg"
            >
              <BookOpen className="h-5 w-5" />
              Know More
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDemo;
