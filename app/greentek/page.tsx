import Performance from "../vertix/sections/Performance/Performance";
import Difference from "./Difference/Difference";
import Hero from "./Hero/Hero";
import TechnicalHighlights from "./TechnicalHighlights/TechnicalHighlights";

export default function GreentekPage() {
  return (
    <>
      <Hero />
      <Difference />
      <TechnicalHighlights />
      <Performance />
    </>
  );
}
