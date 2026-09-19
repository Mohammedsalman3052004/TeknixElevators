import Applications from "./sections/Applications/Applications";
import Hero from "./sections/Hero/Hero";
import Overview from "./sections/Overview/Overview";
import Performance from "./sections/Performance/Performance";
import Specifications from "./sections/Specifications/Specifications";
import StandardConfigurations from "./sections/StandardConfigurations/StandardConfigurations";
import Technology from "./sections/Technology/Technology";

export default function VertixPage() {
  return (
    <>
      <Hero />
      <Overview />
      <Performance />
      <Applications />
      <Specifications />
      <StandardConfigurations />
      <Technology />
    </>
  );
}
