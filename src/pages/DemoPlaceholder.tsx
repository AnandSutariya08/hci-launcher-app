
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const DemoPlaceholder = () => {
  const { demoId } = useParams();
  const navigate = useNavigate();

  // Demo title mapping
  const demoTitles: {[key: string]: string} = {
    'whiteboard': 'Web Whiteboard',
    'webusb': 'Web USB',
    'wallmate': 'Web WallMate',
    'evs': 'EVS',
    'handheldusb': 'Handheld USB',
    'lobbyapp': 'Patient Lobby App',
    'launchertv': 'Launcher TV',
    'discharge': 'Discharge Record App'
  };

  const title = demoTitles[demoId || ''] || 'Demo Application';

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-hci-navy text-white p-4 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-white mr-4 hover:bg-white/10"
              onClick={() => navigate('/')}
            >
              <ArrowLeft />
            </Button>
            <h1 className="text-xl font-semibold">{title} <span className="text-sm font-normal bg-hci-blue/20 px-2 py-1 rounded ml-2">Demo Version</span></h1>
          </div>
        </div>
      </header>
      
      <main className="flex-grow flex items-center justify-center p-8">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-2xl">
          <div className="mb-6 mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center">
            <img src="/placeholder.svg" alt="Demo icon" className="w-12 h-12" />
          </div>
          
          <h2 className="text-2xl font-bold text-hci-navy mb-4">{title} Demo</h2>
          <p className="text-gray-600 mb-8">
            This is a placeholder for the {title} demo application. In the full version, 
            this would load a functional demo with dummy data to showcase the product capabilities.
          </p>
          
          <div className="p-4 bg-gray-50 rounded-md border border-gray-200 text-left mb-8">
            <h3 className="font-medium text-gray-800 mb-2">Demo Features Would Include:</h3>
            <ul className="list-disc pl-5 text-gray-600 space-y-1">
              <li>Interactive UI with simulated functionality</li>
              <li>Pre-populated dummy data</li>
              <li>Key workflows demonstration</li>
              <li>Feature highlights and tooltips</li>
            </ul>
          </div>
          
          <Button 
            onClick={() => navigate('/')} 
            className="bg-hci-blue hover:bg-hci-blue/90 text-white"
          >
            Return to Launcher
          </Button>
        </div>
      </main>
    </div>
  );
};

export default DemoPlaceholder;
