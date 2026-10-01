import type { SpecificationsProps } from "@/components/Product/Specifications/Specifications";
import type { StandardConfigurationsProps } from "@/components/Product/StandardConfigurations/StandardConfigurations";
import type { FeatureAccordionProps } from "@/components/Product/FeatureAccordion/FeatureAccordion";

export const specifications: SpecificationsProps = {
  title: "DIVE INTO LUXURY AND COMFORT.",
  description:
    "TEKNIX VILLAMATEK is specially designed for residential villas; incorporating modern gearless technology and exquisite craftsmanship. Featuring an ultra-low 60 mm pit depth and a compact 2250 mm overhead clearance, it installs seamlessly into homes with minimal civil disruption.",
  // brochureHref: "/documents/villa-matek-brochure.pdf",
  // brochureLabel: "DOWNLOAD VILLA MATEK BROCHURE",
  items: [
    { label: "TYPE", value: "MRL", sub: "Powered by Gearless Traction Machine", icon: "type" },
    { label: "CAPACITY", value: "UPTO 400 KG", sub: "", icon: "capacity" },
    { label: "SPEED", value: "0.30 M/S", sub: "Metres per second", icon: "speed" },
    { label: "LANDINGS", value: "2 – 5", sub: "Floors", icon: "landings" },
    { label: "MINIMUM PIT", value: "60 MM", sub: "Ultra-low pit depth", icon: "height" },
    { label: "MINIMUM OVERHEAD", value: "2250 MM", sub: "Low headroom clearance", icon: "height" },
    { label: "DRIVE", value: "GEARLESS PMSM", sub: "Frequency Controlled", icon: "drive" },
    { label: "OPERATION", value: "FULL COLLECTIVE", sub: "Selective", icon: "operation" },
    { label: "DOOR WIDTH", value: "600 / 800 MM", sub: "Clear opening", icon: "width" },
    { label: "DOOR HEIGHT", value: "2100 MM", sub: "Standard clear height", icon: "height" },
  ],
};

// TEMP: client hasn't sent Villa Matek's actual configuration numbers yet —
// reusing Vertix's data as a placeholder so the section isn't empty.
// Swap this out once real numbers arrive.
export const standardConfigurations: StandardConfigurationsProps = {
  title: "STANDARD CONFIGURATIONS",
  columns: [
    { key: "weightPerson", label: "WEIGHT / PERSON" },
    { key: "platformWidth", label: "PLATFORM WIDTH" },
    { key: "platformDepth", label: "PLATFORM DEPTH" },
    { key: "shaftWidth", label: "SHAFT WIDTH" },
    { key: "shaftDepth", label: "SHAFT DEPTH" },
    { key: "cutoutWidth", label: "CUTOUT WIDTH" },
    { key: "cutoutDepth", label: "CUTOUT DEPTH" },
  ],
  rows: [
    {
      weightPerson: "180 kg / 2",
      platformWidth: "850 mm",
      platformDepth: "660 mm",
      shaftWidth: "900 mm",
      shaftDepth: "1010 mm",
      cutoutWidth: "930 mm",
      cutoutDepth: "1040 mm",
    },
    {
      weightPerson: "250 kg / 3",
      platformWidth: "950 mm",
      platformDepth: "810 mm",
      shaftWidth: "1000 mm",
      shaftDepth: "1160 mm",
      cutoutWidth: "1030 mm",
      cutoutDepth: "1190 mm",
    },
    {
      weightPerson: "300 kg / 4",
      platformWidth: "1050 mm",
      platformDepth: "860 mm",
      shaftWidth: "1100 mm",
      shaftDepth: "1210 mm",
      cutoutWidth: "1130 mm",
      cutoutDepth: "1240 mm",
    },
    {
      weightPerson: "400 kg / 5",
      platformWidth: "1150 mm",
      platformDepth: "960 mm",
      shaftWidth: "1200 mm",
      shaftDepth: "1310 mm",
      cutoutWidth: "1230 mm",
      cutoutDepth: "1340 mm",
    },
  ],
  note:
    "The specifications shown are standard reference configurations with a minimum pit depth of 60 mm and overhead of 2250 mm. Final dimensions and requirements may vary depending on the selected configuration and project requirements.",
};
// TEMP: image path assumed from the other products' naming pattern — confirm/replace
// with Villa Matek's actual asset filename.
export const keySafetyFeatures: FeatureAccordionProps = {
  heading: "FUNCTIONS OF VILLA MATEK",
  image: {
    src: "/Images/VillaMatek/protection.png",
    alt: "Villa Matek elevator interior",
  },
  items: [
    { title: "Control system", description: "Multiple microcomputer based close-loop control system with direct landing technology" },
    { title: "Drive", description: "Frequency controlled permanent magnet synchronous motor based gearless traction machine with dual vented disc brakes" },
    { title: "Curve Generation", description: "Microcomputer senses the load in the elevator & generates the S curve based on the torque required automatically" },
    { title: "Door Operator", description: "VVVF door operating system with close loop control" },
    { title: "Door Protection", description: "Full length infrared light curtain provided for safety of passengers" },
    { title: "Human Interface Device", description: "Stylish Integrated Car operating Panel & Surface mounted Landing Operating Panel with auto atiendant key and auto light and fan function" },
    { title: "Operation", description: "Full Collective Selective" },
    { title: "Direction Indicators", description: "Car & Landing Operating Panels will be equipped with direction and floor indication display for easy facilitation of passengers" },
    { title: "Call Cancellation", description: "Wrong Destination call can be cancelled by double press of destination button" },
    { title: "Auto on/off", description: "Ventilation & lighting would have automatic on/off function" },
    { title: "Overspeed Protection", description: "When elevator speed is more then the calibrated speed, the device will automatically stop the elevator motor and activate the car safety device in turn activating the unintended car movement device to stop the car from moving further" },
    { title: "Automatic Rescue Device", description: "Automatic rescue mechanism that swiftly returns the elevator to the nearest floor during power outages." },
    // { title: "Car Illumination", description: "LED power saving lighting inside the car for illumination" },
    // { title: "Car Ventilation", description: "Cross Flow Ventilation system in the car" },
    // { title: "Power Supply", description: "AC415V, 3phase & AC220V , 1phase , 50HZ AC" },
    // { title: "Phase Loss Protection", description: "Automatic Phase loss protection system stop the elevator when it senses the loss of one of the three phases" },
    // { title: "Over – run Protection system", description: "Up/Down overrun protection System with triple layer limit switch for extra safety" },
  ],
};