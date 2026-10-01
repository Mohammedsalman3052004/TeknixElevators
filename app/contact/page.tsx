import type { Metadata } from "next";

import Hero from "./sections/Hero/Hero";
import ContactForm from "./sections/ContactForm/ContactForm";
import LocationsMap from "./sections/LocationsMap/LocationsMap";
import ReachOut from "./sections/ReachOut/ReachOut";

export const metadata: Metadata = {
  title: "Contact | Residential Elevators in Hyderabad | Teknix Elevators",
  description:
    "Teknix Elevators is one of India's leading manufacturers and suppliers of elevators and escalators, serving residential and industrial needs. Contact us today.",
  keywords: [
    "Best Elevator Companies in India",
    "Best Elevator Company in Bangalore",
    "Best Home Elevators in Bangalore",
    "Elevator Companies in India",
    "Home Elevators in Bangalore",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | Residential Elevators in Hyderabad | Teknix Elevators",
    description:
      "Teknix Elevators is one of India's leading manufacturers and suppliers of elevators and escalators, serving residential and industrial needs.",
    url: "/contact",
    siteName: "Teknix Elevators",
    locale: "en_IN",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main>
      <Hero />
      <ReachOut />
      <ContactForm />
      <LocationsMap />
    </main>
  );
}