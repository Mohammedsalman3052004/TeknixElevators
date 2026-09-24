export interface EditorialBlock {
  heading: string;
  paragraph: string;
  bullets?: string[];
}

export interface ElevatingFutureData {
  heading: string;
  intro: string;
  blocks: EditorialBlock[];
  closing: string;
}

export const elevatingFuture: ElevatingFutureData = {
  heading: "Teknix: Elevating the Future of Vertical Transportation",
  intro:
    "At Teknix, we redefine the essence of vertical transportation through a vision that marries innovation with uncompromising values. In esteemed collaboration with SRH Aufzüge GmbH, we are dedicated to crafting luxurious elevators that not only elevate spaces but also enhance lifestyles, embodying a commitment to excellence and sophistication.",
  blocks: [
    {
      heading: "Craftsmanship Meets Cutting-Edge Technology",
      paragraph:
        "Every Teknix elevator is a testament to meticulous engineering, whether it is a bespoke creation tailored to our clients' unique specifications or an integral part of our illustrious vertical transportation portfolio. Our in-house R&D team rigorously tests each product, ensuring it exemplifies reliability, elegance, and state-of-the-art performance.",
    },
    {
      heading: "State-of-the-Art Manufacturing Facilities",
      paragraph:
        "Our manufacturing facility in Bangalore, India, spans an impressive 65,000 sq. ft., while our international units in Suzhou, China, and Bremen, Germany, collectively boast over 2,025,000 sq. ft. These state-of-the-art facilities feature:",
      bullets: [
        "Advanced Manufacturing Lines from renowned brands such as Salvagnini (Italy), Bodor (Switzerland), Dener (Turkey), and Amada (Japan).",
        "A fully equipped elevator testing tower, ensuring that every elevator meets the highest safety and performance standards.",
        "Comprehensive R&D capabilities that drive continuous innovation.",
      ],
    },
    {
      heading: "Global Expertise, Local Excellence",
      paragraph:
        "As a distinguished member of VFA-Interlift in Germany, SRH Aufzüge has been instrumental in shaping EU standards for elevators. With a global presence that includes manufacturing units in Germany and P.R. China under the prestigious brand Sicher Elevator, our partnership with SRH Aufzüge GmbH empowers us to offer cutting-edge technology tailored for the discerning Indian market. Our elevators, capable of speeds up to 8 m/s, are a hallmark of German engineering and design prowess, setting new benchmarks in luxury vertical transport.",
    },
    {
      heading: "Elevating Experiences",
      paragraph:
        "At Teknix, we do more than provide elevators; we create an experience of opulence and sophistication that transforms the way people interact with their environments. Our commitment to superior quality and unparalleled service ensures that every ascent is a journey marked by elegance and reliability.",
    },
  ],
  closing:
    "Join us in elevating not just buildings, but lifestyles—where every Teknix elevator is an invitation to experience the extraordinary.",
};