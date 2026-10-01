import type { Metadata } from "next";

import ExperienceCentre from "./sections/ExperienceCentre/ExperienceCentre";
import FromIdeaToElevation from "./sections/FromIdeaToElevation/FromIdeaToElevation";
import Hero from "./sections/Hero/Hero";
import Philosophy from "./sections/Philosophy/Philosophy";
import ThoughtfulByDesign from "./sections/ThoughtfulByDesign/ThoughtfulByDesign";

export const metadata: Metadata = {
  title: "About Teknix Elevators | Premium Home & Commercial Lifts",
  description:
    "Discover Teknix Elevators: our design philosophy, thoughtful engineering, and end-to-end journey from idea to installation. Visit our Experience Centre to see our lifts in person.",
  keywords: [
    "Teknix Elevators",
    "about Teknix",
    "home elevators",
    "residential lifts",
    "commercial elevators",
    "luxury lifts",
    "elevator manufacturer India",
    "elevator experience centre",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Teknix Elevators",
    description:
      "Thoughtfully designed elevators, engineered with precision. Learn our story and visit our Experience Centre.",
    url: "/about",
    siteName: "Teknix Elevators",
    locale: "en_IN",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <Hero />
      <Philosophy />
      <ThoughtfulByDesign />
      <FromIdeaToElevation />
      <ExperienceCentre />
    </>
  );
}