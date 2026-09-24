import Difference from "./sections/Difference/Difference";
import Hero from "./sections/Hero/Hero";
import PerformanceExperience from "./sections/PerformanceExperience/PerformanceExperience";
import TechnicalHighlights from "./sections/TechnicalHighlights/TechnicalHighlights";
import Specifications from "@/components/Product/Specifications/Specifications";
import StandardConfigurations from "@/components/Product/StandardConfigurations/StandardConfigurations";
import FeatureAccordion from "@/components/Product/FeatureAccordion/FeatureAccordion";
import { specifications, standardConfigurations, keySafetyFeatures } from "./content";

export default function GreentekPage() {
  return (
    <>
      <Hero />
      <Difference />
      <TechnicalHighlights />
      <PerformanceExperience />
      <Specifications {...specifications} />
      <StandardConfigurations {...standardConfigurations} />
      <FeatureAccordion {...keySafetyFeatures} />
    </>
  );
}
