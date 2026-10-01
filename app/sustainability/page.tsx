import type { Metadata } from "next";

import Hero from "./sections/Hero/Hero";
import OurApproach from "./sections/OurApproach/OurApproach";
import OurGoals from "./sections/OurGoals/OurGoals";
import Ethos from "./sections/Ethos/Ethos";

export const metadata: Metadata = {
  title: "Sustainability | Teknix Elevators Bangalore",
  description:
    "Teknix Elevators promotes sustainability through responsible practices, energy-conscious elevator solutions, and a commitment to a better built environment.",
  keywords: [
    "Lift company in Bangalore",
    "Lift for home price in Bangalore",
    "Lift manufacturers in Bangalore",
    "Lift manufacturers in Hyderabad",
    "Lift suppliers in Bangalore",
    "Lift vendors in Bangalore",
    "Passenger lift manufacturers in Bangalore",
  ],
  alternates: {
    canonical: "https://teknixelevators.com/sustainability",
  },
  openGraph: {
    title: "Sustainability | Teknix Elevators Bangalore",
    description:
      "Teknix Elevators promotes sustainability through responsible practices, energy-conscious elevator solutions, and a commitment to a better built environment.",
    url: "https://teknixelevators.com/sustainability",
    siteName: "Teknix Elevators",
    locale: "en_IN",
    type: "website",
  },
};

export default function SustainabilityPage() {
  return (
    <>
      <Hero />
      <OurApproach />
      <OurGoals />
      <Ethos />
    </>
  );
}