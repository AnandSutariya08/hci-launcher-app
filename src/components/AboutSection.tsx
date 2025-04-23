
import React from 'react';
import { Button } from '@/components/ui/button';

const stats = [
  { id: 1, value: '20+', label: 'Years Experience' },
  { id: 2, value: '750+', label: 'Healthcare Facilities' },
  { id: 3, value: '1,000+', label: 'Clinics Worldwide' },
  { id: 4, value: '100,000+', label: 'Devices Installed' },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-hci-navy">About HCI Global</h2>
            <p className="mt-6 text-lg text-gray-600">
              For over 20 years, HCI Global has been at the forefront of developing innovative healthcare 
              technology solutions that transform hospital rooms into smart, connected healing spaces.
            </p>
            <p className="mt-4 text-gray-600">
              Our mission is to improve patient experiences, streamline clinical workflows, and help 
              healthcare facilities deliver better care through thoughtfully designed technology.
            </p>
            
            <div className="mt-8">
              <Button className="bg-hci-blue hover:bg-hci-blue/90 text-white">
                Visit Company Website
              </Button>
            </div>
          </div>
          
          <div className="mt-10 lg:mt-0">
            <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
              {stats.map((stat) => (
                <div key={stat.id} className="border-t-2 border-hci-blue/30 pt-6">
                  <dt className="text-base font-medium text-gray-500">{stat.label}</dt>
                  <dd className="text-4xl font-bold tracking-tight text-hci-blue">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
