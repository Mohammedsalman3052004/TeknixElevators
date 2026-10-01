import type { Metadata } from "next";

import Customization from "./sections/Customization/Customization";
import Features from "./sections/Features/Features";
import Hero from "./sections/Hero/Hero";
import Overview from "./sections/Overview/Overview";
import Specifications from "@/components/Product/Specifications/Specifications";
import StandardConfigurations from "@/components/Product/StandardConfigurations/StandardConfigurations";
import FeatureAccordion from "@/components/Product/FeatureAccordion/FeatureAccordion";
import { specifications, standardConfigurations, keySafetyFeatures } from "./content";

export const metadata: Metadata = {
  title: "OPTIMA | Home Elevators in Bangalore | Teknix",
  description:
    "Discover OPTIMA home elevators by Teknix Elevators, designed for modern homes with stylish, reliable solutions for comfortable vertical transportation.",
  keywords: [
    "Best Elevator Companies in India",
    "Best Elevator Company in Bangalore",
    "Best Home Elevators in Bangalore",
    "Elevator Companies in India",
    "Home Elevators in Bangalore",
  ],
  alternates: {
    canonical: "https://teknixelevators.com/products/optima",
  },
  openGraph: {
    title: "OPTIMA | Home Elevators in Bangalore | Teknix",
    description:
      "Discover OPTIMA home elevators by Teknix Elevators, designed for modern homes with stylish, reliable solutions for comfortable vertical transportation.",
    url: "https://teknixelevators.com/products/optima",
    siteName: "Teknix Elevators",
    locale: "en_IN",
    type: "website",
  },
};

export default function OptimaPage() {
  return (
    <main>
      <Hero />
      <Overview />
      <Features />
      <Customization />
      <Specifications {...specifications} />
      <StandardConfigurations {...standardConfigurations} />
      <FeatureAccordion {...keySafetyFeatures} />
    </main>
  );
}