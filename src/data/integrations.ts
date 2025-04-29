
export interface Integration {
  id: number;
  name: string;
  description: string;
  category: "EMR" | "Medical Equipment" | "Infrastructure" | "Communication";
  logo: string;
  features?: string[];
  benefits?: string[];
  technicalDetails?: string;
  requirements?: string[];
}

export const integrations: Integration[] = [
  {
    id: 1,
    name: "Epic",
    description: "Leading electronic health record system used by top healthcare organizations for comprehensive patient care management.",
    category: "EMR",
    logo: "/integration-logos/epic.svg",
    features: [
      "Comprehensive electronic health records",
      "Patient portal integration",
      "Clinical decision support",
      "Population health management",
      "Revenue cycle management"
    ],
    benefits: [
      "Streamlined clinical workflows",
      "Enhanced patient engagement",
      "Improved care coordination",
      "Reduced medical errors",
      "Better revenue cycle performance"
    ],
    technicalDetails: "Epic integration is achieved through a combination of HL7, FHIR, and proprietary APIs. Our platform ensures seamless data exchange and real-time synchronization with Epic's EHR system.",
    requirements: [
      "Epic EHR system version 2018 or later",
      "Valid Epic API credentials",
      "Secure VPN connection to Epic servers",
      "SSL certificates for secure data transmission"
    ]
  },
  {
    id: 2,
    name: "Cerner",
    description: "Healthcare technology solutions that connect people and systems for efficient, innovative care delivery.",
    category: "EMR",
    logo: "/integration-logos/cerner.svg"
  },
  {
    id: 3,
    name: "Allscripts",
    description: "Clinical and financial solutions to help healthcare organizations deliver better patient care.",
    category: "EMR",
    logo: "/integration-logos/allscripts.svg"
  },
  {
    id: 4,
    name: "Midmark",
    description: "Medical equipment solutions for patient positioning, sterilization, and diagnostic devices.",
    category: "Medical Equipment",
    logo: "/integration-logos/midmark.svg"
  },
  {
    id: 5,
    name: "Stryker",
    description: "Advanced medical technologies including surgical equipment and hospital beds for improved patient outcomes.",
    category: "Medical Equipment",
    logo: "/integration-logos/stryker.svg"
  },
  {
    id: 6,
    name: "Hillrom",
    description: "Connected care solutions and medical equipment for enhanced patient care environments.",
    category: "Medical Equipment",
    logo: "/integration-logos/hillrom.svg"
  },
  {
    id: 7,
    name: "Centrak",
    description: "Enterprise location services for healthcare, enabling real-time tracking of assets and people.",
    category: "Infrastructure",
    logo: "/integration-logos/centrak.svg"
  },
  {
    id: 8,
    name: "Rauland",
    description: "Critical communications solutions for hospitals, including nurse call and patient monitoring systems.",
    category: "Communication",
    logo: "/integration-logos/rauland.svg"
  },
  {
    id: 9,
    name: "Zoom",
    description: "HIPAA-compliant video communications platform for telehealth and medical team collaboration.",
    category: "Communication",
    logo: "/integration-logos/zoom.svg"
  },
  {
    id: 10,
    name: "Phillips",
    description: "Healthcare technology spanning patient monitoring, diagnostic imaging, and clinical informatics.",
    category: "Medical Equipment",
    logo: "/integration-logos/phillips.svg"
  },
  {
    id: 11,
    name: "Jeron",
    description: "Provider of nurse call systems and electronic communications solutions for healthcare facilities.",
    category: "Communication",
    logo: "/integration-logos/jeron.svg",
    features: [
      "Advanced nurse call systems",
      "Patient-to-staff communications",
      "Workflow optimization",
      "Emergency response management",
      "Integration with mobile devices"
    ],
    benefits: [
      "Improved response times",
      "Enhanced patient satisfaction",
      "Increased staff efficiency",
      "Better care coordination",
      "Reduced alarm fatigue"
    ],
    technicalDetails: "Jeron integration leverages API-based connectivity and standard protocols to enable seamless communication between our platform and Jeron's Provider nurse call systems.",
    requirements: [
      "Provider® 790 or Provider® 680 system",
      "Network connectivity through TCP/IP",
      "Integration license from Jeron",
      "Middleware for legacy systems"
    ]
  }
];
