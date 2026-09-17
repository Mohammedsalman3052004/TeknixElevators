import BuildingGrid from "@/components/Home/BuildingGrid/BuildingGrid";
import ElevatorSlider from "@/components/Home/Elevators/ElevatorSlider";
import ExperienceCentre from "@/components/Home/ExperienceCentre/ExperienceCentre";
import Hero from "@/components/Home/Hero/Hero";
import Journey from "@/components/Home/Journey/Journey";
import ProjectCTA from "@/components/Home/ProjectCTA/ProjectCTA";
import ThoughtInMotion from "@/components/Home/ThoughtInMotion/ThoughtInMotion";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Journey />
      <BuildingGrid /> 
      <ThoughtInMotion />
      <ElevatorSlider />
      <ExperienceCentre />
      <ProjectCTA />
    </>
  );
}
