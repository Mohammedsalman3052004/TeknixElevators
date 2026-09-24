import Customization from "./sections/Customization/Customization";
import Features from "./sections/Features/Features";
import Hero from "./sections/Hero/Hero";
import Overview from "./sections/Overview/Overview";
import Specifications from "@/components/Product/Specifications/Specifications";
import StandardConfigurations from "@/components/Product/StandardConfigurations/StandardConfigurations";
import FeatureAccordion from "@/components/Product/FeatureAccordion/FeatureAccordion";
import { specifications, standardConfigurations, keySafetyFeatures } from "./content";

export default function OptimaPage() {
  return (
    <main>
      <Hero />
      <Overview />
      <Features />
      <Customization />
      <Specifications {...specifications} />
      <StandardConfigurations {...standardConfigurations} />
      <FeatureAccordion {...keySafetyFeatures} />
    </main>
  );
}
