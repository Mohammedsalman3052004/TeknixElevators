import Performance from "../vertix/sections/Performance/Performance";
import Difference from "./sections/Difference/Difference";
import Hero from "./sections/Hero/Hero";
import PerformanceExperience from "./sections/PerformanceExperience/PerformanceExperience";
import ProductSpecifications from "./sections/ProductSpecifications/ProductSpecifications";
import StandardConfigurations from "./sections/StandardConfigurations/StandardConfigurations";
import TechnicalHighlights from "./sections/TechnicalHighlights/TechnicalHighlights";
import Technology from "./sections/Technology/Technology";

export default function GreentekPage() {
  return (
    <>
      <Hero />
      <Difference />
      <TechnicalHighlights />
      <PerformanceExperience />
      <ProductSpecifications />
      <StandardConfigurations />
      <Technology />
    </>
  );
}
