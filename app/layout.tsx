import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Animations from "@/components/Animations/Animations";
// import Animations from "@/components/Animations/Animations.tsx";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "TekniX Elevators",
  description: "TekniX Vertical Transport Solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={instrumentSans.variable}
    >
      <body>
        <Navbar />
        <Animations />
        {children}
        <Footer />
      </body>
    </html>
  );
}