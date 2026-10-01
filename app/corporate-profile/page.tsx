import type { Metadata } from "next";

import Hero from "./sections/Hero/Hero";
import VisionMission from "./sections/VisionMission/VisionMission";
import ElevatingFuture from "./sections/ElevatingFuture/ElevatingFuture";
import QualityCommitment from "./sections/QualityCommitment/QualityCommitment";

export const metadata: Metadata = {
  title: "Corporate Profile | Teknix Elevators",
  description:
    "Discover Teknix Elevators' experienced management team, expertise in vertical transportation technology, and commitment to quality elevator solutions.",
  keywords: [
    "4 passenger lift size",
    "elevator suppliers in Bangalore",
  ],
  alternates: {
    canonical: "https://teknixelevators.com/about",
  },
  openGraph: {
    title: "Corporate Profile | Teknix Elevators",
    description:
      "Discover Teknix Elevators' experienced management team, expertise in vertical transportation technology, and commitment to quality elevator solutions.",
    url: "https://teknixelevators.com/about",
    siteName: "Teknix Elevators",
    locale: "en_IN",
    type: "website",
  },
};

export default function CorporateProfilePage() {
  return (
    <>
      <Hero />
      <VisionMission />
      <ElevatingFuture />
      <QualityCommitment />
    </>
  );
}