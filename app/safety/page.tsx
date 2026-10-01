import type { Metadata } from "next";

import Hero from "./sections/Hero/Hero";
import CultureOfSafety from "./sections/CultureOfSafety/CultureOfSafety";
import SafetyStandards from "./sections/SafetyStandards/SafetyStandards";
import { engineeringSafety } from "./content";

export const metadata: Metadata = {
  title: "Elevator Safety Standards | Teknix Elevators",
  description:
    "Teknix Elevators prioritizes passenger safety through rigorous engineering, quality standards, and safety-focused design across its elevator solutions.",
  keywords: [
    "4 passenger lift size",
    "Elevator companies in Hyderabad",
    "Elevator manufacturers in Hyderabad",
    "Lift manufacturers in Hyderabad",
    "Residential elevators in Hyderabad",
  ],
  alternates: {
    canonical: "https://teknixelevators.com/safety",
  },
  openGraph: {
    title: "Elevator Safety Standards | Teknix Elevators",
    description:
      "Teknix Elevators prioritizes passenger safety through rigorous engineering, quality standards, and safety-focused design across its elevator solutions.",
    url: "https://teknixelevators.com/safety",
    siteName: "Teknix Elevators",
    locale: "en_IN",
    type: "website",
  },
};

export default function SafetyPage() {
  return (
    <>
      <Hero />
      <CultureOfSafety />
      <SafetyStandards {...engineeringSafety} />
    </>
  );
}