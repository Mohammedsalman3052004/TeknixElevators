import ExperienceCentre from "./sections/ExperienceCentre/ExperienceCentre";
import FromIdeaToElevation from "./sections/FromIdeaToElevation/FromIdeaToElevation";
import Hero from "./sections/Hero/Hero";
import Philosophy from "./sections/Philosophy/Philosophy";
import ThoughtfulByDesign from "./sections/ThoughtfulByDesign/ThoughtfulByDesign";

export default function AboutPage() {
  return (
    <>
      <Hero />
      <Philosophy />
      <ThoughtfulByDesign />
      <FromIdeaToElevation />
      <ExperienceCentre />
    </>
  );
}