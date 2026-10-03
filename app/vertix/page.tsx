import type { Metadata } from "next";

import Applications from "./sections/Applications/Applications";
import Hero from "./sections/Hero/Hero";
import Overview from "./sections/Overview/Overview";
import Performance from "./sections/Performance/Performance";
import StandardConfigurations from "@/components/Product/StandardConfigurations/StandardConfigurations";
import FeatureAccordion from "@/components/Product/FeatureAccordion/FeatureAccordion";
import Specifications from "@/components/Product/Specifications/Specifications";
import { specifications, standardConfigurations, keySafetyFeatures } from "./content";
import CabinStyles from "./sections/CabinStyles/CabinStyles";

export const metadata: Metadata = {
  title: "VERTIX | Residential Elevators in Hyderabad",
  description:
    "TEKNIX VERTIX is designed for residential use, combining German technology with elevator solutions for homes in Hyderabad and Bangalore.",
  keywords: [
    "Residential elevators in Hyderabad",
    "Residential lifts in Bangalore",
    "Elevator manufacturers in Hyderabad",
    "Elevator suppliers in Bangalore",
  ],
  alternates: {
    canonical: "https://teknixelevators.com/products/vertix",
  },
  openGraph: {
    title: "VERTIX | Residential Elevators in Hyderabad",
    description:
      "TEKNIX VERTIX is designed for residential use, combining German technology with elevator solutions for homes in Hyderabad and Bangalore.",
    url: "https://teknixelevators.com/products/vertix",
    siteName: "Teknix Elevators",
    locale: "en_IN",
    type: "website",
  },
};

export default function VertixPage() {
  return (
    <>
      <Hero />
      <Overview />
      <Performance />
      <Applications />
      <Specifications {...specifications} />
      <StandardConfigurations {...standardConfigurations} />
      <CabinStyles />
      <FeatureAccordion {...keySafetyFeatures} />
    </>
  );
}