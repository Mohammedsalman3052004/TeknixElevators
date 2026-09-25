import type { Metadata } from "next";
import Hero from "./sections/Hero/Hero";
import Advantage from "./sections/Advantage/Advantage";
import Lifestyle from "./sections/Lifestyle/Lifestyle";
import ShaftOptions from "./sections/ShaftOptions/ShaftOptions";
import Hotspots from "./sections/Hotspots/Hotspots";
import CabinStyles from "./sections/CabinStyles/CabinStyles";
import SpecsExploded from "./sections/SpecsExploded/SpecsExploded";
import ContactCTA from "./sections/ContactCTA/ContactCTA";

export const metadata: Metadata = {
  title: "EVO — The Evolution of Home Elevators | TekniX",
  description:
    "Teknix EVO — Compact belt-drive luxury residential elevators engineered to bring effortless vertical mobility into homes with limited space.",
};

export default function EvoPage() {
  return (
    <main>
      <Hero />
      <Advantage />
      <Lifestyle />
      <ShaftOptions />
      <Hotspots />
      <CabinStyles />
      <SpecsExploded />
      <ContactCTA />
    </main>
  );
}
