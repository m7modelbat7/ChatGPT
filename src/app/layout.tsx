import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";

import "./globals.css";

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Lumière Atelier | Premium Cosmetics",
    template: "%s | Lumière Atelier",
  },
  description:
    "Lumière Atelier crafts premium skincare, makeup, and fragrance rituals inspired by modern ateliers.",
  metadataBase: new URL("https://lumiere-atelier.com"),
  openGraph: {
    title: "Lumière Atelier",
    description:
      "Premium skincare, makeup, and fragrance rituals inspired by modern ateliers.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
