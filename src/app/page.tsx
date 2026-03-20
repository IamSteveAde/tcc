import { Metadata } from "next";

// Home sections
import Hero from "./components/home/hero";
import About from "./components/home/about";
import DiscoverProperties from "./components/home/property-option"; // mentor / platform section
import Listing from "./components/home/property-list";
import Testimonials from "./components/home/testimonial";
import History from "./components/home/history";
import Calculator from "./components/home/calculator";
import Info from "./components/home/info";
import Convener from "./components/convener";
import CTAS from "./components/ctas";

// Global components
import AudioWelcome from "./components/AudioWelcome";

/* -------------------------------------
   METADATA — TCC 2026
------------------------------------- */


export const metadata: Metadata = {
  metadataBase: new URL("https://thecareercoreconference.com"), // update if needed

  title: {
    default: "The Career Core Conference 2026",
    template: "%s | TCC 2026",
  },

  description:
    "The Career Core Conference (TCC) 2026 is a one-day experience helping professionals move beyond income and start building long-term wealth through intentional career and financial strategy.",

  keywords: [
    "TCC 2026",
    "Career Core Conference",
    "career conference Nigeria",
    "wealth building conference",
    "career growth Nigeria",
    "financial literacy event",
    "professional development conference",
    "career and wealth strategy",
    "Lagos business conference",
    "networking event Nigeria",
    "career to wealth",
  ],

  openGraph: {
    title: "The Career Core Conference 2026",
    description:
      "Beyond the paycheck. Learn how to turn your career into wealth, assets, and long-term value at TCC 2026.",
    url: "https://thecareercoreconference.com", // update if needed
    siteName: "TCC 2026",
    type: "website",
    images: [
      {
        url: "https://thecareercoreconference.com/og/og-cover.jpg", // update path
        width: 1200,
        height: 630,
        alt: "The Career Core Conference 2026 — Beyond the Paycheck",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "TCC 2026 — Beyond the Paycheck",
    description:
      "A powerful one-day experience designed to help you turn your career into long-term wealth.",
    images: ["https://thecareercoreconference.com/og/og-cover.jpg"], // update
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://thecareercoreconference.com", // update if needed
  },
};
/* -------------------------------------
   HOME PAGE
------------------------------------- */
export default function Home() {
  return (
    <main>
      {/* Audio welcome — brief, professional, plays once per visit */}
      <AudioWelcome />

      {/* Core hero & positioning */}
      <Hero />
      <About />

      {/* Platform / WhatsApp / AI section */}
      <DiscoverProperties />

      {/* Workforce scope / industries / roles */}
      <Listing />

      {/* Trust & social proof */}
      <Testimonials />

      {/* Company journey, capability & infrastructure */}
      <History />
      <Calculator />
      <Info />
      <Convener />
      <CTAS />
    </main>
  );
}
