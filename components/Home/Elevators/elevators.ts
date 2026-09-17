export interface Elevator {
  image: string;
  title: string;
  description: string;
  buttonText: string;
  href: string;
}

export const elevators: Elevator[] = [
  {
    image: "/Images/Home/elevator-1.png",
    title: "VERTIX",
    description:
      "Designed for larger-scale and demanding environments.",
    buttonText: "DISCOVER",
    href: "/elevators/vertix",
  },

  {
    image: "/Images/Home/elevator-2.png",
    title: "GREENTEK",
    description:
      "Engineered with efficiency and application in mind.",
    buttonText: "DISCOVER",
    href: "/elevators/greentek",
  },

  {
    image: "/Images/Home/elevator-3.png",
    title: "VILLA MATEK",
    description:
      "A dedicated solution for villas and private homes.",
    buttonText: "DISCOVER",
    href: "/elevators/villa-matek",
  },

  {
    image: "/Images/Home/elevator-4.png",
    title: "Hydratek",
    description:
      "A specialised elevator solution.",
    buttonText: "DISCOVER",
    href: "/elevators/optima",
  },
  {
    image: "/Images/Home/elevator-5.jpg",
    title: "OPTIMA",
    description:
      "For environments where standard solutions aren't enough.",
    buttonText: "DISCOVER",
    href: "/elevators/optima",
  },
];



