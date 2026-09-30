import type { Metadata } from "next";
import Hero from "./sections/Hero/Hero";
import PrivacyContent from "./sections/Content/PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy | Teknix Elevators",
  description:
    "Learn about how Teknix Elevators Pvt. Ltd. collects, manages, and safeguards personal information, mobile application permissions, and user data.",
  openGraph: {
    title: "Privacy Policy | Teknix Elevators",
    description:
      "Our official policy on personal data protection, mobile application usage, and client privacy.",
    url: "https://www.teknixelevators.com/privacy-policy",
    siteName: "Teknix Elevators",
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <Hero />
      <PrivacyContent />
    </main>
  );
}
