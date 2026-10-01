import type { Metadata } from "next";

import Hero from "./sections/Hero/Hero";
import Advantage from "./sections/Advantage/Advantage";
import StandardConfigurations from "@/components/Product/StandardConfigurations/StandardConfigurations";
import FeatureAccordion from "@/components/Product/FeatureAccordion/FeatureAccordion";
import Specifications from "@/components/Product/Specifications/Specifications";
import { specifications, standardConfigurations, keySafetyFeatures } from "./content";
import Difference from "./sections/Difference/Difference";
import HoistwayColors from "./sections/HoistwayColors/HoistwayColors";
import Flexibility from "./sections/Flexibility/Flexibility";

export const metadata: Metadata = {
  title: "VILLA MATEK | Low Pit & Low Overhead Villa Elevators | Teknix",
  description:
    "TEKNIX VILLA MATEK is designed for luxury residential villas, featuring an ultra-low 60 mm pit depth and 2250 mm overhead clearance with German gearless technology.",
  keywords: [
    "Villa elevators in Bangalore",
    "Residential lifts low pit",
    "Home elevator 60mm pit",
    "Villa Matek elevator",
    "Elevator manufacturers in India",
  ],
  alternates: {
    canonical: "https://teknixelevators.com/products/villa-matek",
  },
  openGraph: {
    title: "VILLA MATEK | Low Pit & Low Overhead Villa Elevators | Teknix",
    description:
      "TEKNIX VILLA MATEK is designed for luxury residential villas, featuring an ultra-low 60 mm pit depth and 2250 mm overhead clearance with German gearless technology.",
    url: "https://teknixelevators.com/products/villa-matek",
    siteName: "Teknix Elevators",
    locale: "en_IN",
    type: "website",
  },
};

export default function VillaMatekPage() {
  return (
    <>
      <Hero />
      <Difference />
      <Advantage />
      <HoistwayColors />
      <Flexibility />
      <Specifications {...specifications} />
      <StandardConfigurations {...standardConfigurations} />
      <FeatureAccordion {...keySafetyFeatures} />
    </>
  );
}