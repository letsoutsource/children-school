import type { Metadata } from "next";
import {
  Fredoka,
  Luckiest_Guy,
  Pacifico,
  Quicksand,
  Sniglet,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/homepage/Navbar";
import MaxWidthWrapper from "@/components/shared/homepage/MaxWidthWrapper";
import EmpowerSection from "@/components/shared/homepage/EmpowerSection";
import FooterSection from "@/components/shared/homepage/FooterSection";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["700"],
});

const luckiestGuy = Luckiest_Guy({
  variable: "--font-luckiest-guy",
  subsets: ["latin"],
  weight: "400",
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["600"],
});

const sniglet = Sniglet({
  variable: "--font-sniglet",
  subsets: ["latin"],
  weight: ["800"],
});

const pacifico = Pacifico({
  variable: "--font-pacifico",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Children's House Montessori Kindergarten",
  description: "Official website of Children's House Montessori Kindergarten in Bahrain.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fredoka.variable} ${luckiestGuy.variable} ${quicksand.variable} ${sniglet.variable} ${pacifico.variable} relative antialiased`}
      >
        <header className="pointer-events-none absolute inset-x-0 top-0 z-50">
          <MaxWidthWrapper className="pointer-events-auto">
            <Navbar />
          </MaxWidthWrapper>
        </header>
        {children}
        <EmpowerSection />
        <FooterSection /> 
      </body>
    </html>
  );
}
