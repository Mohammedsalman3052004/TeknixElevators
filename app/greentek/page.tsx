import Performance from "../vertix/sections/Performance/Performance";
import Difference from "./Difference/Difference";
import Hero from "./Hero/Hero";
import PerformanceExperience from "./PerformanceExperience/PerformanceExperience";
import ProductSpecifications from "./ProductSpecifications/ProductSpecifications";
import StandardConfigurations from "./StandardConfigurations/StandardConfigurations";
import TechnicalHighlights from "./TechnicalHighlights/TechnicalHighlights";
import Technology from "./Technology/Technology";

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
