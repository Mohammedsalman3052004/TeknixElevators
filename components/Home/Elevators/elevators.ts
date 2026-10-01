export interface Elevator {
  image: string;
  title: string;
  description: string;
  buttonText: string;
  href: string;
}

export const elevators: Elevator[] = [
  {
    image: "/Images/Home/elevator.webp",
    title: "VERTIX",
    description:
      "Designed for larger-scale and demanding environments.",
    buttonText: "DISCOVER",
    href: "/vertix",
  },

  {
    image: "/Images/Home/elevator-2.webp",
    title: "GREENTEK",
    description:
      "Engineered with efficiency and application in mind.",
    buttonText: "DISCOVER",
    href: "/greentek",
  },

  {
    image: "/Images/Home/elevator-3.webp",
    title: "VILLA MATEK",
    description:
      "A dedicated solution for villas and private homes.",
    buttonText: "DISCOVER",
    href: "/villa-matek",
  },

  {
    image: "/Images/Home/elevator-4.webp",
    title: "Hydratek",
    description:
      "A specialised elevator solution.",
    buttonText: "DISCOVER",
    href: "/hydratek",
  },
  {
    image: "/Images/Optima/optima-hero.webp",
    title: "OPTIMA",
    description:
      "For environments where standard solutions aren't enough.",
    buttonText: "DISCOVER",
    href: "/optima",
  },
];



