import type { Metadata } from "next";

import Hero from "./sections/Hero/Hero";
import Overview from "./sections/Overview/Overview";
import Specifications from "./sections/Specifications/Specifications";

export const metadata: Metadata = {
  title: "TESC 50 | Commercial Escalators | Teknix Elevators",
  description:
    "TESC 50 escalators are designed for high-traffic locations such as malls, airports, subway stations, and railway stations, supporting up to 20 hours of daily use.",
  keywords: [
    "TESC 50 escalator",
    "Heavy-duty escalators",
    "Commercial escalators",
    "Escalators for malls",
    "Escalators for airports",
    "Escalators for railway stations",
    "Teknix Elevators escalators",
  ],
  alternates: {
    canonical: "https://teknixelevators.com/products/tesc-50",
  },
  openGraph: {
    title: "TESC 50 | Commercial Escalators | Teknix Elevators",
    description:
      "TESC 50 escalators are designed for high-traffic locations such as malls, airports, subway stations, and railway stations, supporting up to 20 hours of daily use.",
    url: "https://teknixelevators.com/products/tesc-50",
    siteName: "Teknix Elevators",
    locale: "en_IN",
    type: "website",
  },
};

export default function Tesc50Page() {
  return (
    <main>
      <Hero />
      <Overview />
      <Specifications />
    </main>
  );
}