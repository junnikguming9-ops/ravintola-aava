import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const Playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: "600",
  style: ["normal", "italic"], // 👈 enables italic
  display: "swap",
});

// Poppins — for body text
const Pop = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ravintola Aava",
  description: "Luxus ravintola Aavan etusivu - pelkkä demo ei oikea ravintola",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${Playfair.variable} ${Pop.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
