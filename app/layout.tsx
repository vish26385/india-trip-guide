import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "IndiaTripGuide - Premium India Travel Guides & Itineraries",
  description:
    "Discover India's best travel destinations, itineraries, travel tips, budget guides, and premium travel experiences.",

  keywords: [
    "India travel",
    "India trip planner",
    "Udaipur travel guide",
    "Goa itinerary",
    "India travel blog",
    "IndiaTripGuide",
  ],

  openGraph: {
    title: "IndiaTripGuide",
    description:
      "Premium India travel guides, itineraries, and travel tips.",
    url: "https://www.indiatripguide.com",
    siteName: "IndiaTripGuide",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "IndiaTripGuide",
    description:
      "Premium India travel guides, itineraries, and travel tips.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      {/* <body className="min-h-full flex flex-col"> 
        <Navbar />
        {children}
        <Footer />
      </body> */}

      <body className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
