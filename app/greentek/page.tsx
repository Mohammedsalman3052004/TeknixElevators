import type { Metadata } from "next";

import Difference from "./sections/Difference/Difference";
import Hero from "./sections/Hero/Hero";
import PerformanceExperience from "./sections/PerformanceExperience/PerformanceExperience";
import TechnicalHighlights from "./sections/TechnicalHighlights/TechnicalHighlights";
import Specifications from "@/components/Product/Specifications/Specifications";
import StandardConfigurations from "@/components/Product/StandardConfigurations/StandardConfigurations";
import FeatureAccordion from "@/components/Product/FeatureAccordion/FeatureAccordion";
import { specifications, standardConfigurations, keySafetyFeatures } from "./content";

export const metadata: Metadata = {
  title: "GREENTEK | Passenger Lift Manufacturers in Bangalore",
  description:
    "Teknix Elevators GREENTEK is a next-generation passenger lift designed with German craftsmanship and backed by years of research and development.",
  keywords: [
    "Lift Manufacturers in Bangalore",
    "Lift Manufacturers in Hyderabad",
    "Passenger Lift Manufacturers in Bangalore",
    "Lift Company in Bangalore",
  ],
  alternates: {
    canonical: "https://teknixelevators.com/products/greentek",
  },
  openGraph: {
    title: "GREENTEK | Passenger Lift Manufacturers in Bangalore",
    description:
      "Teknix Elevators GREENTEK is a next-generation passenger lift designed with German craftsmanship and backed by years of research and development.",
    url: "https://teknixelevators.com/products/greentek",
    siteName: "Teknix Elevators",
    locale: "en_IN",
    type: "website",
  },
};

export default function GreentekPage() {
  return (
    <>
      <Hero />
      <Difference />
      <TechnicalHighlights />
      <PerformanceExperience />
      <Specifications {...specifications} />
      <StandardConfigurations {...standardConfigurations} />
      <FeatureAccordion {...keySafetyFeatures} />
    </>
  );
}