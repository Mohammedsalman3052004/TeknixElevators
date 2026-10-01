import type { SpecificationsProps } from "@/components/Product/Specifications/Specifications";
import type { StandardConfigurationsProps } from "@/components/Product/StandardConfigurations/StandardConfigurations";
import type { FeatureAccordionProps } from "@/components/Product/FeatureAccordion/FeatureAccordion";

export const specifications: SpecificationsProps = {
  title: "The essentials. Engineered with precision.",
  description:
    "A refined gearless elevator solution designed around the requirements of modern low-rise buildings.",
  brochureHref: "/documents/optima-brochure.pdf",
  brochureLabel: "DOWNLOAD OPTIMA BROCHURE",
  brochureFormName: "Optima Download Form",
  items: [
    { label: "TYPE", value: "MRL / MMR", sub: "Machine Room-Less", icon: "type" },
    { label: "CAPACITY", value: "408 – 884 KG", sub: "6 – 13 Persons", icon: "capacity" },
    { label: "SPEED", value: "1 MPS", sub: "Metres per second", icon: "speed" },
    { label: "LANDINGS", value: "2 – 10", sub: "Floors", icon: "landings" },
    { label: "DRIVE", value: "GEARLESS PMSM", sub: "Frequency Controlled", icon: "drive" },
    { label: "OPERATION", value: "FULL COLLECTIVE", sub: "Selective", icon: "operation" },
    { label: "DOOR WIDTH", value: "700 / 800 / 900 MM", sub: "Clear opening", icon: "width" },
    { label: "DOOR HEIGHT", value: "2000 MM", sub: "Standard clear height", icon: "height" },
  ],
};


export const standardConfigurations: StandardConfigurationsProps = {
  title: "STANDARD CONFIGURATIONS",
  columns: [
    { key: "persons", label: "PERSONS" },
    { key: "capacity", label: "LOAD" },
    { key: "carWidth", label: "CAR WIDTH" },
    { key: "carDepth", label: "CAR DEPTH" },
    { key: "hoistwayWidth", label: "HOISTWAY WIDTH" },
    { key: "hoistwayDepth", label: "HOISTWAY DEPTH" },
    { key: "doorWidth", label: "DOOR WIDTH" },
    { key: "doorHeight", label: "DOOR HEIGHT" },
  ],
  rows: [
    {
      persons: "6",
      capacity: "408 KG",
      carWidth: "1160 mm",
      carDepth: "960 mm",
      hoistwayWidth: "1600 mm",
      hoistwayDepth: "1500 mm",
      doorWidth: "700 mm",
      doorHeight: "2000 mm",
    },
    {
      persons: "8",
      capacity: "544 KG",
      carWidth: "1300 mm",
      carDepth: "1100 mm",
      hoistwayWidth: "1800 mm",
      hoistwayDepth: "1600 mm",
      doorWidth: "800 mm",
      doorHeight: "2000 mm",
    },
    {
      persons: "10",
      capacity: "680 KG",
      carWidth: "1350 mm",
      carDepth: "1300 mm",
      hoistwayWidth: "1800 mm",
      hoistwayDepth: "1900 mm",
      doorWidth: "800 mm",
      doorHeight: "2000 mm",
    },
    {
      persons: "13",
      capacity: "884 KG",
      carWidth: "1400 mm",
      carDepth: "1600 mm",
      hoistwayWidth: "2100 mm",
      hoistwayDepth: "2000 mm",
      doorWidth: "900 mm",
      doorHeight: "2000 mm",
    },
    {
      persons: "15",
      capacity: "1020 KG",
      carWidth: "1000 mm",
      carDepth: "2400 mm",
      hoistwayWidth: "1800 mm",
      hoistwayDepth: "3000 mm",
      doorWidth: "1000 mm",
      doorHeight: "2000 mm",
    },
  ],
  note:
    "The specifications shown are standard reference configurations. Final dimensions and requirements may vary depending on the selected configuration and project requirements.",
};

export const keySafetyFeatures: FeatureAccordionProps = {
  heading: "Intelligent control. Refined movement. Thoughtful protection",
  image: {
    src: "/Images/Optima/optima-protection.webp",
    alt: "Optima elevator interior",
  },
  items: [
    { title: "Control system", description: "Multiple microcomputer-based close-loop control system with direct landing technology" },
    { title: "Drive", description: "Frequency-controlled permanent magnet synchronous motor-based gearless traction machine with dual vented disc brakes" },
    { title: "Curve Generation", description: "Microcomputer senses the load in the elevator & generates the S curve based on the torque required automatically" },
    { title: "Door Operator", description: "VVVF door operating system with close-loop control" },
    { title: "Door Protection", description: "Full-length infrared light curtain provided for the safety of passengers" },
    { title: "Human Interface Device", description: "Stylish Integrated Car Operating Panel & Surface-mounted Landing Operating Panel with auto attendant key and auto light and fan function" },
    { title: "Operation", description: "Full Collective Selective" },
    { title: "Direction Indicators", description: "Car & Landing Operating Panels will be equipped with direction and floor indication display for easy facilitation of passengers" },
    { title: "Call Cancellation", description: "Wrong Destination call can be cancelled by double pressing the destination button" },
    { title: "Auto on/off", description: "Ventilation & lighting would have an automatic on/off function" },
    { title: "Overspeed Protection", description: "When the elevator speed is more than the calibrated speed, the device will automatically stop the elevator motor and activate the car safety device in turn activating the unintended car movement device to stop the car from moving further" },
    { title: "Automatic Rescue Device", description: "Wrong Destination call can be cancelled by double pressing the destination button" },
    // { title: "Car Illumination", description: "LED power-saving lighting inside the car for illumination" },
    // { title: "Car Ventilation", description: "Cross Flow Ventilation system in the car" },
    // { title: "Power Supply", description: "AC415V, 3phase & AC220V, 1phase, 50HZ AC" },
    // { title: "Phase Loss Protection", description: "Automatic Phase loss protection system stops the elevator when it senses the loss of one of the three phases" },
    // { title: "Over-run Protection system", description: "Up/Down overrun protection System with triple-layer limit switch for extra safety" },
  ],
};