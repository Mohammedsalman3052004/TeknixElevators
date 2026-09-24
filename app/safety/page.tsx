import Hero from "./sections/Hero/Hero";
import CultureOfSafety from "./sections/CultureOfSafety/CultureOfSafety";
import SafetyStandards from "./sections/SafetyStandards/SafetyStandards";
import { engineeringSafety } from "./content";

export default function SafetyPage() {
  return (
    <>
      <Hero />
      <CultureOfSafety />
      <SafetyStandards {...engineeringSafety} />
    </>
  );
}