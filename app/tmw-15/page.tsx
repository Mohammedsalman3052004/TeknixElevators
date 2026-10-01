import type { Metadata } from "next";

import Hero from "./sections/Hero/Hero";
import Overview from "./sections/Overview/Overview";
import Specifications from "./sections/Specifications/Specifications";

export const metadata: Metadata = {
  title: "TMW 15 | Moving Walks | Teknix Elevators",
  description:
    "Teknix TMW 15 moving walks are designed for commercial spaces, with a horizontal span of up to 150 metres and operation for up to 16 hours daily.",
  keywords: [
    "TMW 15 moving walk",
    "Moving walk manufacturers in Bangalore",
    "Escalator manufacturers in Bangalore",
    "Elevator manufacturers in Bangalore",
    "Commercial moving walks",
    "Teknix Elevators",
  ],
  alternates: {
    canonical: "https://teknixelevators.com/products/tmw-15",
  },
  openGraph: {
    title: "TMW 15 | Moving Walks | Teknix Elevators",
    description:
      "Teknix TMW 15 moving walks are designed for commercial spaces, with a horizontal span of up to 150 metres and operation for up to 16 hours daily.",
    url: "https://teknixelevators.com/products/tmw-15",
    siteName: "Teknix Elevators",
    locale: "en_IN",
    type: "website",
  },
};

export default function Tmw15Page() {
  return (
    <main>
      <Hero />
      <Overview />
      <Specifications />
    </main>
  );
}