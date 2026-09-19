import Customization from "./sections/Customization/Customization";
import Essentials from "./sections/Essentials/Essentials";
import Features from "./sections/Features/Features";
import Hero from "./sections/Hero/Hero";
import Overview from "./sections/Overview/Overview";
import Protection from "./sections/Protection/Protection";
import StandardConfigurations from "./sections/StandardConfigurations/StandardConfigurations";


export default function OptimaPage() {
  return (
    <main>
       <Hero />
       <Overview />
       <Features />
       <Customization />
       <Essentials />
       <StandardConfigurations />
       <Protection />
    </main>
  );
}