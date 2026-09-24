import type { SpecificationsProps } from "@/components/Product/Specifications/Specifications";
import type { StandardConfigurationsProps } from "@/components/Product/StandardConfigurations/StandardConfigurations";
import type { FeatureAccordionProps } from "@/components/Product/FeatureAccordion/FeatureAccordion";

export const specifications: SpecificationsProps = {
  title: "TIME TO SEE THE WORLD FROM A NEW PERSPECTIVE.",
  description:
    "Teknix Greentek is a new generation elevators made with finest german craftship and years of research and development that has gone into the minutest detail to make it technological marvel. Teknix Greentek is born with state of the art critical components like new generation ultra high precision integrated close loop VVVF drive with DTI and Direct Landing Technology and stylish human interface devices together outperform to give a impeccable elevator ride.",
  brochureHref: "/documents/greentek-brochure.pdf",
  brochureLabel: "DOWNLOAD Greentek BROCHURE",
  items: [
    { label: "TYPE", value: "MRL / MMR", sub: "Machine Room-Less", icon: "type" },
    { label: "CAPACITY", value: "408 – 1632 KG", sub: "6 – 24 Persons", icon: "capacity" },
    { label: "SPEED", value: "1.0 – 3.0 MPS", sub: "Metres per second", icon: "speed" },
    { label: "LANDINGS", value: "2 – 30", sub: "Floors", icon: "landings" },
    { label: "DRIVE", value: "GEARLESS PMSM", sub: "Frequency Controlled", icon: "drive" },
    { label: "OPERATION", value: "FULL COLLECTIVE", sub: "Selective", icon: "operation" },
    { label: "DOOR WIDTH", value: "700 / 800 / 900 / 1000 / 1200 MM", sub: "Clear opening", icon: "width" },
    { label: "DOOR HEIGHT", value: "2100 – 2400 MM", sub: "Standard clear height", icon: "height" },
  ],
};

export const standardConfigurations: StandardConfigurationsProps = {
  title: "STANDARD CONFIGURATIONS",
  columns: [
    { key: "persons", label: "PERSONS" },
    { key: "capacity", label: "CAPACITY" },
    { key: "carWidth", label: "CAR WIDTH" },
    { key: "carDepth", label: "CAR DEPTH" },
    { key: "hoistwayWidth", label: "HOISTWAY WIDTH" },
    { key: "hoistwayDepth", label: "HOISTWAY DEPTH" },
    { key: "doorWidth", label: "DOOR WIDTH" },
    { key: "doorHeight", label: "DOOR HEIGHT" },
  ],
  rows: [
    { persons: "6", capacity: "408 kg", carWidth: "1160 mm", carDepth: "960 mm", hoistwayWidth: "1600 mm", hoistwayDepth: "1500 mm", doorWidth: "700 mm", doorHeight: "2000 mm" },
    { persons: "8", capacity: "544 kg", carWidth: "1300 mm", carDepth: "1100 mm", hoistwayWidth: "1800 mm", hoistwayDepth: "1600 mm", doorWidth: "800 mm", doorHeight: "2000 mm" },
    { persons: "10", capacity: "680 kg", carWidth: "1350 mm", carDepth: "1300 mm", hoistwayWidth: "1800 mm", hoistwayDepth: "1900 mm", doorWidth: "800 mm", doorHeight: "2000 mm" },
    { persons: "13", capacity: "884 kg", carWidth: "1400 mm", carDepth: "1600 mm", hoistwayWidth: "2100 mm", hoistwayDepth: "2000 mm", doorWidth: "900 mm", doorHeight: "2000 mm" },
    { persons: "15", capacity: "1020 kg", carWidth: "1600 mm", carDepth: "2400 mm", hoistwayWidth: "1800 mm", hoistwayDepth: "3000 mm", doorWidth: "1000 mm", doorHeight: "2000 mm" },
  ],
  note:
    "The specifications shown are standard reference configurations. Final dimensions and requirements may vary depending on the selected configuration and project requirements.",
};

export const keySafetyFeatures: FeatureAccordionProps = {
  heading: "UNMATCHED SAFETY FEATURES OF THE GREENTEK",
  image: {
    src: "/Images/Greentek/technology.png",
    alt: "Greentek elevator interior",
  },
  items: [
    { title: "The GREENTEK", description: "is equipped with a comprehensive suite of safety features, ensuring the highest standards of passenger security and reliability in every journey." },
    { title: "Dynamic Motion Safeguard", description: "UCM Device provides rigorous protection against unintended car movement caused by brake failure or cable snapping." },
    { title: "Centrifugal Over-Speed Safety Shield", description: "A solenoid-controlled, bi-directional mechanism to secure occupants in the event of rope failure." },
    { title: "Electromechanical Integrity Lock System", description: "Twin crimper locking technology ensures absolute passenger safety in emergencies." },
    { title: "Anti-Squeeze Protection Protocol", description: "Advanced door system paired with light curtains, reversing movement upon any obstruction detection." },
    { title: "Under Door Safety Barrier", description: "Specially designed fascia provides added protection against potential injuries." },
    { title: "Teknix Emergency Retrieval System", description: "Automatic rescue mechanism that swiftly returns the elevator to the nearest floor during power outages." },
    { title: "Dual Vented Brake Precision Technology", description: "High-performance dual disc brakes ensure smooth, reliable deceleration and enhanced control." },
    { title: "SMARTSENSE Braking Intelligence", description: "Smart braking system that engages automatically to prevent unintended descent during motor power loss." },
    { title: "Precision Overrun Protection System", description: "Three-stage terminal limit cutoff for safe response to overshoot or undershoot incidents." },
    { title: "Quad-Fastening Motor Stabilization Technology", description: "An industry-first innovation enhancing motor stability and overall safety." },
    { title: "Invisible Safety Barrier Technology", description: "Dense infrared curtain creates an invisible safety net at the entrance, responding instantly to presence." },
    { title: "CARGuard Door Safety Locking Mechanism", description: "Specifically designed to secure children and passengers, ensuring enhanced occupant safety." },
  ],
};