import Hero from "./sections/Hero/Hero";
import Overview from "./sections/Overview/Overview";
import TheChallenge from "./sections/TheChallenge/TheChallenge";
// import OurSolutions from "./sections/OurSolutions/OurSolutions";
import Certification from "./sections/Certification/Certification";
import Applications from "./sections/Applications/Applications";
import Approach from "./sections/Approach/Approach";
import Solutions from "./sections/Solutions/Solutions";

export default function SpecialPurposePage() {
  return (
    <>
      <Hero />
      <Overview />
      <TheChallenge />
      {/* <OurSolutions /> */}
      <Solutions />
      <Certification />
      <Applications />
      <Approach />
    </>
  );
}