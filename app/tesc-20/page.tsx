import type { Metadata } from "next";

import Hero from "./sections/Hero/Hero";
import Specifications from "./sections/Specifications/Specifications";
import Welcome from "./sections/Welcome/Welcome";

export const metadata: Metadata = {
  title: "TESC 20 | Escalators for Offices & Commercial Buildings",
  description:
    "TESC 20 escalators are designed for offices and commercial buildings, supporting up to 16 hours of daily use and installation heights of up to 10 metres.",
  keywords: [
    "TESC 20 escalator",
    "Commercial escalators",
    "Office escalators",
    "Escalators for commercial buildings",
    "Teknix Elevators escalators",
  ],
  alternates: {
    canonical: "https://teknixelevators.com/products/tesc-20",
  },
  openGraph: {
    title: "TESC 20 | Escalators for Offices & Commercial Buildings",
    description:
      "TESC 20 escalators are designed for offices and commercial buildings, supporting up to 16 hours of daily use and installation heights of up to 10 metres.",
    url: "https://teknixelevators.com/products/tesc-20",
    siteName: "Teknix Elevators",
    locale: "en_IN",
    type: "website",
  },
};

export default function Tesc20Page() {
  return (
    <main>
      <Hero />
      <Welcome />
      <Specifications />
    </main>
  );
}