import type { Metadata } from "next";

import Hero from "./sections/Hero/Hero";
import StandardConfigurations from "@/components/Product/StandardConfigurations/StandardConfigurations";
import FeatureAccordion from "@/components/Product/FeatureAccordion/FeatureAccordion";
import Specifications from "@/components/Product/Specifications/Specifications";
import { specifications, standardConfigurations, keySafetyFeatures } from "./content";
import Prowess from "./sections/Prowess/Prowess";
import Mastery from "./sections/Mastery/Mastery";



export const metadata: Metadata = {
  title: "HYDRATEK | Top Elevator Company in India",
  description:
    "Teknix Elevators' HYDRATEK is an advanced vertical transportation system that uses progressive fluid dynamics to deliver a modern elevator experience.",
  keywords: [
    "Top elevators in Bangalore",
    "Top elevators company in India",
    "Top elevators company in Bangalore",
  ],
  alternates: {
    canonical: "https://teknixelevators.com/products/hydratek",
  },
  openGraph: {
    title: "HYDRATEK | Top Elevator Company in India",
    description:
      "Teknix Elevators' HYDRATEK is an advanced vertical transportation system that uses progressive fluid dynamics to deliver a modern elevator experience.",
    url: "https://teknixelevators.com/products/hydratek",
    siteName: "Teknix Elevators",
    locale: "en_IN",
    type: "website",
  },
};

export default function VertixPage() {
  return (
    <>
      <Hero />
      <Mastery />
      <Specifications {...specifications} />
      <StandardConfigurations {...standardConfigurations} />
      <Prowess />
      <FeatureAccordion {...keySafetyFeatures} />
    </>
  );
}