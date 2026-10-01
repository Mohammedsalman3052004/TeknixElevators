import type { Metadata } from "next";

import Hero from "./sections/Hero/Hero";
import StandardConfigurations from "@/components/Product/StandardConfigurations/StandardConfigurations";
import FeatureAccordion from "@/components/Product/FeatureAccordion/FeatureAccordion";
import Specifications from "@/components/Product/Specifications/Specifications";
import { specifications, standardConfigurations, keySafetyFeatures } from "./content";

export const metadata: Metadata = {
  title: "VILLA MATEK | Elevator Manufacturers in India",
  description:
    "TEKNIX VILLA MATEK is designed for residential use, combining German technology with elevator solutions for homes across India and Bangalore.",
  keywords: [
    "Elevator companies in Hyderabad",
    "Elevator manufacturers in Bangalore",
    "Elevator companies in Bangalore",
    "Elevator suppliers in Bangalore",
    "Elevator manufacturers in India",
  ],
  alternates: {
    canonical: "https://teknixelevators.com/products/villa-matek",
  },
  openGraph: {
    title: "VILLA MATEK | Elevator Manufacturers in India",
    description:
      "TEKNIX VILLA MATEK is designed for residential use, combining German technology with elevator solutions for homes across India and Bangalore.",
    url: "https://teknixelevators.com/products/villa-matek",
    siteName: "Teknix Elevators",
    locale: "en_IN",
    type: "website",
  },
};

export default function VertixPage() {
  return (
    <>
      <Hero />
      <Specifications {...specifications} />
      <StandardConfigurations {...standardConfigurations} />
      <FeatureAccordion {...keySafetyFeatures} />
    </>
  );
}