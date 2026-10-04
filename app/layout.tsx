import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Animations from "@/components/Animations/Animations";
import WhatsAppButton from "@/components/WhatsAppButton/WhatsAppButton";
import EnquiryPopup from "@/components/EnquiryPopup/EnquiryPopup";
// import Animations from "@/components/Animations/Animations.tsx";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Elevator Company in Bangalore, India | Teknix Elevators",
  description:
    "Teknix Elevators supplies quality elevator solutions in Bangalore, offering reliable products for homes and businesses at competitive prices across India.",
  keywords: [
    "Best elevator companies in India",
    "Best elevator company in Bangalore",
    "Best home elevators in Bangalore",
    "Elevator suppliers in Bangalore",
  ],
  metadataBase: new URL("https://teknixelevators.com"),
  openGraph: {
    title: "Elevator Company in Bangalore, India | Teknix Elevators",
    description:
      "Teknix Elevators supplies quality elevator solutions in Bangalore, offering reliable products for homes and businesses at competitive prices across India.",
    siteName: "Teknix Elevators",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={instrumentSans.variable}>
      <body>
        <Navbar />
        <Animations />
        {children}
        <Footer />
        <EnquiryPopup />
        <WhatsAppButton />
      </body>
    </html>
  );
}