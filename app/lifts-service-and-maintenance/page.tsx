import type { Metadata } from "next";

import Hero from "./sections/Hero/Hero";
import ServicePlans from "./sections/ServicePlans/ServicePlans";

export const metadata: Metadata = {
  title: "Elevator & Escalator Maintenance in Bangalore",
  description:
    "Teknix Elevators provides elevator and escalator servicing in Bangalore, with maintenance solutions for residential and commercial elevator systems.",
  keywords: [
    "Elevator Companies in India",
    "Lift for Home Price in Bangalore",
    "Elevator Manufacturers in India",
    "Residential Elevators in Hyderabad",
    "Top Elevators Company in India",
  ],
  alternates: {
    canonical: "https://teknixelevators.com/lifts-service-and-maintenance",
  },
  openGraph: {
    title: "Elevator & Escalator Maintenance in Bangalore",
    description:
      "Teknix Elevators provides elevator and escalator servicing in Bangalore, with maintenance solutions for residential and commercial elevator systems.",
    url: "https://teknixelevators.com/lifts-service-and-maintenance",
    siteName: "Teknix Elevators",
    locale: "en_IN",
    type: "website",
  },
};

export default function LiftsServiceAndMaintenancePage() {
  return (
    <>
      <Hero />
      <ServicePlans />
    </>
  );
}