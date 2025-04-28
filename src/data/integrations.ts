
export interface Integration {
  id: number;
  name: string;
  description: string;
  category: "EMR" | "Medical Equipment" | "Infrastructure" | "Communication";
  logo: string;
}

export const integrations: Integration[] = [
  {
    id: 1,
    name: "Epic",
    description: "Leading electronic health record system used by top healthcare organizations for comprehensive patient care management.",
    category: "EMR",
    logo: "/integration-logos/epic.svg"
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
  }
];
