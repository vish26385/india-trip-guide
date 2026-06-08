import GoogleAnalytics from "@/components/GoogleAnalytics";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://www.indiatripguide.com"),

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
    title: "IndiaTripGuide - Premium India Travel Guides",
    description:
      "Premium India travel guides, itineraries, budget tips, and destination inspiration.",
    url: "https://www.indiatripguide.com",
    siteName: "IndiaTripGuide",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IndiaTripGuide - Premium India Travel Guides",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "IndiaTripGuide - Premium India Travel Guides",
    description:
      "Premium India travel guides, itineraries, budget tips, and destination inspiration.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
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

        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1891964114282544"
         crossOrigin="anonymous"></script>

        <Navbar />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
