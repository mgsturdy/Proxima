import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import UtmCapture from "@/components/UtmCapture";

export const metadata: Metadata = {
  title: "Proxima — Environmental Toxin Diagnostics",
  description: "Better blood. Better life.",
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.svg",
  },
  openGraph: {
    title: "Proxima Health",
    description: "Better blood. Better life.",
    url: "https://proxima.health",
    siteName: "Proxima Health",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Proxima Health",
    description: "Better blood. Better life.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-serif">
        <UtmCapture />
        <LoadingScreen />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
        {/* HubSpot tracking code (portal 246039967, na2). Sets the hubspotutk
            cookie used for form attribution — see lib/hubspot.ts. */}
        <Script
          id="hs-script-loader"
          src="//js-na2.hs-scripts.com/246039967.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
