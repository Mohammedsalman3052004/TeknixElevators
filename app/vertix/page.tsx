import Applications from "./sections/Applications/Applications";
import Hero from "./sections/Hero/Hero";
import Overview from "./sections/Overview/Overview";
import Performance from "./sections/Performance/Performance";
import StandardConfigurations from "@/components/Product/StandardConfigurations/StandardConfigurations";
import FeatureAccordion from "@/components/Product/FeatureAccordion/FeatureAccordion";
import Specifications from "@/components/Product/Specifications/Specifications";
import { specifications, standardConfigurations, keySafetyFeatures } from "./content";

export default function VertixPage() {
  return (
    <>
      <Hero />
      <Overview />
      <Performance />
      <Applications />
      <Specifications {...specifications} />
      <StandardConfigurations {...standardConfigurations} />
      <FeatureAccordion {...keySafetyFeatures} />
    </>
  );
}
